import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";
import {
  MailConfigurationError,
  MailDeliveryError,
  sendInquiryReply,
} from "@/lib/mailer";
import {
  sendWhatsAppReply,
  WhatsAppConfigurationError,
  WhatsAppDeliveryError,
} from "@/lib/whatsapp";

interface ReplyInput {
  channel?: unknown;
  subject?: unknown;
  message?: unknown;
}

interface InquiryForReply {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string;
}

type RouteContext = { params: Promise<{ inquiryId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let input: ReplyInput;
  try {
    input = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }
  if (
    (input.channel !== "email" && input.channel !== "whatsapp") ||
    typeof input.subject !== "string" ||
    !input.subject.trim() ||
    input.subject.trim().length > 180 ||
    typeof input.message !== "string" ||
    !input.message.trim() ||
    input.message.trim().length > 10000
  ) {
    return Response.json(
      { detail: "Pilih kanal balasan dan isi subjek serta pesan yang valid." },
      { status: 400 },
    );
  }

  const { inquiryId } = await context.params;
  try {
    const inquiryResult = await queryDatabase<InquiryForReply>(
      `SELECT id, name, email, phone, service, message
       FROM inquiries WHERE id = $1`,
      [inquiryId],
    );
    const inquiry = inquiryResult.rows[0];
    if (!inquiry) {
      return Response.json({ detail: "Inquiry tidak ditemukan." }, { status: 404 });
    }

    try {
      if (input.channel === "email") {
        await sendInquiryReply({
          to: inquiry.email,
          name: inquiry.name,
          service: inquiry.service,
          subject: input.subject.trim(),
          message: input.message.trim(),
          originalMessage: inquiry.message,
        });
      } else {
        if (!inquiry.phone) {
          return Response.json(
            { detail: "Nomor WhatsApp client tidak tersedia." },
            { status: 400 },
          );
        }
        await sendWhatsAppReply(
          inquiry.phone,
          `${input.subject.trim()}\n\n${input.message.trim()}`,
        );
      }
    } catch (error) {
      if (
        error instanceof MailConfigurationError ||
        error instanceof MailDeliveryError ||
        error instanceof WhatsAppConfigurationError ||
        error instanceof WhatsAppDeliveryError
      ) {
        return Response.json({ detail: error.message }, { status: 503 });
      }
      console.error("Failed to send customer inquiry reply:", error);
      return Response.json(
        { detail: "Provider email/WhatsApp gagal mengirim balasan." },
        { status: 503 },
      );
    }

    const result = await queryDatabase(
      `UPDATE inquiries
       SET status = 'Replied', reply_subject = $2, reply_body = $3,
         replied_at = now()
       WHERE id = $1
       RETURNING id, name, email, phone, company, service, message, status, notes,
         reply_subject AS "replySubject", reply_body AS "replyBody",
         replied_at AS "repliedAt",
         to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI') AS date`,
      [inquiryId, input.subject.trim(), input.message.trim()],
    );
    if (!result.rows[0]) {
      return Response.json(
        {
          detail:
            "Provider menerima balasan, tetapi status database gagal diperbarui. Periksa status inquiry sebelum mengirim ulang.",
        },
        { status: 503 },
      );
    }

    return Response.json({
      status: "sent",
      channel: input.channel,
      inquiry: result.rows[0],
    });
  } catch (error) {
    console.error("Failed to record sent inquiry reply:", error);
    return Response.json({ detail: "Balasan terkirim tetapi status gagal diperbarui." }, { status: 503 });
  }
}

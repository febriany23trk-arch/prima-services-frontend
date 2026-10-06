import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

interface ReplyDraftInput {
  subject?: unknown;
  message?: unknown;
  notes?: unknown;
}

type RouteContext = { params: Promise<{ inquiryId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let input: ReplyDraftInput;
  try {
    input = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (
    typeof input.subject !== "string" ||
    !input.subject.trim() ||
    input.subject.trim().length > 180 ||
    typeof input.message !== "string" ||
    !input.message.trim() ||
    input.message.trim().length > 10000 ||
    (input.notes !== undefined &&
      (typeof input.notes !== "string" || input.notes.length > 2000))
  ) {
    return Response.json(
      {
        detail:
          "Subjek dan isi draft wajib diisi (maksimal 180 dan 10.000 karakter); catatan internal maksimal 2.000 karakter.",
      },
      { status: 400 },
    );
  }

  const { inquiryId } = await context.params;
  try {
    const result = await queryDatabase(
      `UPDATE inquiries
       SET reply_subject = $2, reply_body = $3, notes = COALESCE($4, notes)
       WHERE id = $1
       RETURNING id, name, email, phone, company, service, message, status, notes,
         reply_subject AS "replySubject", reply_body AS "replyBody",
         replied_at AS "repliedAt",
         to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI') AS date`,
      [inquiryId, input.subject.trim(), input.message.trim(), input.notes ?? null],
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Inquiry tidak ditemukan." }, { status: 404 });
    }
    return Response.json({ status: "draft_saved", inquiry: result.rows[0] });
  } catch (error) {
    console.error("Failed to save inquiry reply draft:", error);
    return Response.json({ detail: "Draft balasan gagal disimpan." }, { status: 503 });
  }
}

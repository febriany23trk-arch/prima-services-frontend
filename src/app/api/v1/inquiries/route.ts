import { randomUUID } from "node:crypto";
import { queryDatabase } from "@/lib/db";
import {
  MailConfigurationError,
  MailDeliveryError,
  sendInquiryNotification,
} from "@/lib/mailer";

interface InquirySubmission {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  timeline?: unknown;
  budget?: unknown;
  message?: unknown;
  consent?: unknown;
}

function cleanField(value: unknown, maximumLength: number): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") return null;
  const cleaned = value.trim();
  return cleaned.length <= maximumLength ? cleaned : null;
}

export async function POST(request: Request) {
  let submission: InquirySubmission;
  try {
    submission = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }

  const name = cleanField(submission.name, 120);
  const email = cleanField(submission.email, 254)?.toLowerCase();
  const phone = cleanField(submission.phone, 40);
  const company = cleanField(submission.company, 160);
  const service = cleanField(submission.service, 120);
  const timeline = cleanField(submission.timeline, 120);
  const budget = cleanField(submission.budget, 120);
  const message = cleanField(submission.message, 5000);

  if (
    !name ||
    name.length < 2 ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    (submission.phone && !phone) ||
    (submission.company && !company) ||
    (submission.service && !service) ||
    (submission.timeline && !timeline) ||
    (submission.budget && !budget) ||
    !message ||
    submission.consent !== true
  ) {
    return Response.json(
      { detail: "Periksa kembali isian dan persetujuan pemrosesan data." },
      { status: 400 },
    );
  }

  const id = randomUUID();
  try {
    const result = await queryDatabase<{
      id: string;
      name: string;
      email: string;
      phone: string | null;
      company: string | null;
      service: string;
      timeline: string;
      budget: string;
      message: string;
      status: string;
      notes: string;
      createdAt: Date;
    }>(
      `INSERT INTO inquiries
        (id, name, email, phone, company, service, timeline, budget, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id, name, email, phone, company, service, timeline, budget,
         message, status, notes, created_at AS "createdAt"`,
      [id, name, email, phone, company, service ?? "", timeline ?? "", budget ?? "", message],
    );

    const inquiry = result.rows[0];
    let profileEmail: unknown;
    try {
      const profile = await queryDatabase<{ data: { email?: unknown } }>(
        "SELECT data FROM company_profile WHERE id = 1",
      );
      profileEmail = profile.rows[0]?.data?.email;
    } catch (error) {
      console.error("Failed to read contact address for inquiry notification:", error);
    }
    const adminEmail =
      typeof profileEmail === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileEmail)
        ? profileEmail
        : process.env.ADMIN_EMAIL?.trim() || process.env.SMTP_USER?.trim();

    if (!adminEmail) {
      console.error("Contact inquiry saved but no valid admin notification address is configured.");
      return Response.json(
        {
          status: "success",
          notification: "failed",
          notificationDetail: "Pesan tersimpan, tetapi alamat email admin belum dikonfigurasi.",
          data: inquiry,
        },
        { status: 201 },
      );
    }

    try {
      await sendInquiryNotification({
        to: adminEmail,
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        company: inquiry.company,
        service: inquiry.service,
        timeline: inquiry.timeline,
        budget: inquiry.budget,
        message: inquiry.message,
      });
    } catch (error) {
      const notificationDetail =
        error instanceof MailConfigurationError || error instanceof MailDeliveryError
          ? error.message
          : "Pesan tersimpan, tetapi notifikasi email admin gagal dikirim.";
      if (!(error instanceof MailConfigurationError || error instanceof MailDeliveryError)) {
        console.error("Failed to notify admin about saved contact inquiry:", error);
      }
      return Response.json(
        {
          status: "success",
          notification: "failed",
          notificationDetail,
          data: inquiry,
        },
        { status: 201 },
      );
    }

    return Response.json(
      { status: "success", notification: "sent", data: inquiry },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to save contact inquiry:", error);
    return Response.json({ detail: "Pesan gagal disimpan ke database." }, { status: 503 });
  }
}

import "server-only";

import nodemailer from "nodemailer";
import { Resend } from "resend";

interface InquiryNotification {
  to: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string;
  timeline: string | null;
  budget: string | null;
  message: string;
}

interface InquiryReply {
  to: string;
  name: string;
  service: string;
  subject: string;
  message: string;
  originalMessage: string;
}

export class MailConfigurationError extends Error {
  constructor(message = "RESEND_API_KEY atau RESEND_FROM_EMAIL belum dikonfigurasi.") {
    super(message);
    this.name = "MailConfigurationError";
  }
}

export class MailDeliveryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailDeliveryError";
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function getMailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    throw new MailConfigurationError();
  }
  return { apiKey, from };
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const portValue = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.trim();
  const from = process.env.SMTP_FROM?.trim() || user;
  const port = portValue ? Number(portValue) : 587;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !password || !from) {
    throw new MailConfigurationError(
      "Konfigurasi SMTP belum lengkap. Isi SMTP_HOST, SMTP_USER, SMTP_PASSWORD, dan SMTP_FROM di environment server.",
    );
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new MailConfigurationError("SMTP_PORT tidak valid.");
  }

  return { host, port, secure, user, password, from };
}

async function sendEmail(options: {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const { apiKey, from } = getMailConfig();
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: [options.to],
      subject: options.subject,
      text: options.text,
      html: options.html,
      ...(options.replyTo ? { replyTo: options.replyTo } : {}),
    });

    if (error || !data?.id) {
      const statusCode = error?.statusCode;
      console.error("Resend email request rejected:", {
        statusCode,
        errorName: error?.name,
      });

      if (statusCode === 401) {
        throw new MailDeliveryError(
          "Resend tidak mengautentikasi request. Pastikan server memakai API key yang benar, aktif, dan berasal dari workspace Resend yang sesuai.",
        );
      }
      if (statusCode === 403 && error?.name === "validation_error") {
        throw new MailDeliveryError(
          "Resend menolak pengiriman karena sender/domain belum terverifikasi atau akun masih memakai domain testing. Verifikasi domain pengirim di Resend untuk mengirim ke alamat client.",
        );
      }
      if (statusCode === 403 && error?.name === "restricted_api_key") {
        throw new MailDeliveryError(
          "Resend menolak API key karena key tidak aktif atau tidak memiliki izin yang diperlukan. Periksa status dan izin key di workspace Resend.",
        );
      }
      if (statusCode === 403) {
        throw new MailDeliveryError(
          "Resend menolak request karena izin atau batasan akun. Periksa detail error dan pengaturan workspace Resend.",
        );
      }
      if (statusCode === 422 || error?.name === "invalid_from_address") {
        throw new MailDeliveryError(
          "Alamat pengirim tidak valid atau domain pengirim belum diverifikasi di Resend.",
        );
      }
      if (statusCode === 429 || error?.name === "rate_limit_exceeded") {
        throw new MailDeliveryError("Batas pengiriman email tercapai. Coba lagi beberapa saat.");
      }
      throw new MailDeliveryError(
        "Provider email gagal menerima pesan. Periksa konfigurasi Resend dan coba lagi.",
      );
    }
  } catch (error) {
    if (error instanceof MailDeliveryError || error instanceof MailConfigurationError) {
      throw error;
    }
    console.error("Resend request failed:", {
      name: error instanceof Error ? error.name : "unknown",
    });
    throw new MailDeliveryError("Tidak dapat menghubungi layanan email Resend.");
  }
}

export async function sendInquiryNotification(inquiry: InquiryNotification): Promise<void> {
  const safeName = escapeHtml(inquiry.name);
  const safeEmail = escapeHtml(inquiry.email);
  const safePhone = escapeHtml(inquiry.phone || "-");
  const safeCompany = escapeHtml(inquiry.company || "-");
  const safeService = escapeHtml(inquiry.service || "-");
  const safeTimeline = escapeHtml(inquiry.timeline || "-");
  const safeBudget = escapeHtml(inquiry.budget || "-");
  const safeMessage = escapeHtml(inquiry.message).replace(/\r?\n/g, "<br>");

  await sendEmail({
    to: inquiry.to,
    replyTo: inquiry.email,
    subject: `Inquiry baru dari ${inquiry.name}`,
    text: [
      "Ada inquiry baru dari formulir Contact website.",
      "",
      `Nama: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Telepon: ${inquiry.phone || "-"}`,
      `Perusahaan: ${inquiry.company || "-"}`,
      `Layanan: ${inquiry.service || "-"}`,
      `Timeline: ${inquiry.timeline || "-"}`,
      `Budget: ${inquiry.budget || "-"}`,
      "",
      "Pesan:",
      inquiry.message,
    ].join("\n"),
    html: `<h2>Inquiry baru dari formulir Contact</h2><p><strong>Nama:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Telepon:</strong> ${safePhone}</p><p><strong>Perusahaan:</strong> ${safeCompany}</p><p><strong>Layanan:</strong> ${safeService}</p><p><strong>Timeline:</strong> ${safeTimeline}</p><p><strong>Budget:</strong> ${safeBudget}</p><p><strong>Pesan:</strong></p><blockquote>${safeMessage}</blockquote>`,
  });
}

export async function sendInquiryReply(reply: InquiryReply): Promise<void> {
  const safeName = escapeHtml(reply.name);
  const safeService = escapeHtml(reply.service || "Informasi layanan");
  const safeOriginalMessage = escapeHtml(reply.originalMessage).replace(/\r?\n/g, "<br>");
  const safeReply = escapeHtml(reply.message).replace(/\r?\n/g, "<br>");

  const smtp = getSmtpConfig();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: { user: smtp.user, pass: smtp.password },
  });

  try {
    const result = await transporter.sendMail({
      from: smtp.from,
      to: reply.to,
      subject: reply.subject,
      text: `Halo ${reply.name},\n\n${reply.message}\n\nLayanan: ${reply.service || "-"}\n\nPesan Anda:\n${reply.originalMessage}`,
      html: `<p>Halo ${safeName},</p><p>${safeReply}</p><p><strong>Layanan:</strong> ${safeService}</p><hr><p><strong>Pesan Anda:</strong></p><blockquote>${safeOriginalMessage}</blockquote>`,
    });
    const recipientAccepted = result.accepted.some(
      (address) => address.toLowerCase() === reply.to.trim().toLowerCase(),
    );
    if (!recipientAccepted) {
      throw new MailDeliveryError("SMTP server tidak menerima alamat email client.");
    }
  } catch (error) {
    if (error instanceof MailDeliveryError) throw error;
    const smtpErrorCode =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      typeof error.code === "string"
        ? error.code
        : undefined;
    const smtpResponseCode =
      typeof error === "object" &&
      error !== null &&
      "responseCode" in error &&
      typeof error.responseCode === "number"
        ? error.responseCode
        : undefined;
    const isCertificateError =
      error instanceof Error && /certificate|self-signed|unable to verify/i.test(error.message);
    console.error("SMTP email reply failed:", {
      code: smtpErrorCode,
      responseCode: smtpResponseCode,
      name: error instanceof Error ? error.name : "unknown",
    });
    throw new MailDeliveryError(
      isCertificateError
        ? "Sertifikat TLS server SMTP tidak dipercaya. Jalankan aplikasi dengan npm run dev atau npm run start agar sertifikat tepercaya dari sistem digunakan. Jika masih gagal, minta CA jaringan yang sah dipasang oleh administrator; jangan matikan verifikasi TLS."
        : "SMTP gagal mengirim email balasan. Periksa koneksi SMTP, alamat pengirim, dan Gmail App Password.",
    );
  } finally {
    transporter.close();
  }
}

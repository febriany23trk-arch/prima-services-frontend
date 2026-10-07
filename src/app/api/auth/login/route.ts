import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, createAdminSession } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/password-hash";

export async function POST(request: Request) {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    return Response.json(
      { detail: "AUTH_SECRET belum dikonfigurasi dengan benar di environment Vercel." },
      { status: 503 },
    );
  }

  let credentials: { email?: unknown; password?: unknown };
  try {
    credentials = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (
    typeof credentials.email !== "string" ||
    typeof credentials.password !== "string" ||
    credentials.email.length > 254 ||
    credentials.password.length > 1024
  ) {
    return Response.json({ detail: "Email atau kata sandi salah." }, { status: 401 });
  }

  let account: { email: string; passwordHash: string } | undefined;
  try {
    const result = await queryDatabase<{
      email: string;
      passwordHash: string;
    }>(
      `SELECT email, password_hash AS "passwordHash"
       FROM admin_accounts
       WHERE id = 1`,
    );
    account = result.rows[0];
  } catch (error) {
    console.error("Failed to load the persisted admin account:", error);
    return Response.json(
      { detail: "Akun admin tidak dapat diverifikasi saat ini." },
      { status: 503 },
    );
  }

  const email = credentials.email.trim().toLowerCase();
  const validCredentials =
    account?.email === email && (await verifyPassword(credentials.password, account.passwordHash));
  if (!account) {
    return Response.json(
      { detail: "Akun admin belum dibuat di database. Konfigurasikan ADMIN_EMAIL dan ADMIN_PASSWORD lalu deploy ulang." },
      { status: 503 },
    );
  }
  if (!validCredentials) {
    return Response.json({ detail: "Email atau kata sandi salah." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, createAdminSession(account.email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return Response.json({ status: "success" });
}

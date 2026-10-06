import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "prima_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET must contain at least 32 characters.");
  }
  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

export function createAdminSession(email: string): string {
  const payload = Buffer.from(
    JSON.stringify({ email, expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000 }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifyAdminSession(token: string | undefined): boolean {
  if (!token) return false;
  const [payload, signature, ...extra] = token.split(".");
  if (!payload || !signature || extra.length > 0) return false;

  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
    return false;
  }

  try {
    const session: { email: string; expiresAt: number } = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8"),
    );
    return (
      session.email.toLowerCase() === process.env.ADMIN_EMAIL?.trim().toLowerCase() &&
      Number.isFinite(session.expiresAt) &&
      session.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return verifyAdminSession(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
}

export async function requireAdminApi(): Promise<Response | null> {
  if (await isAdminAuthenticated()) return null;
  return Response.json({ detail: "Unauthorized" }, { status: 401 });
}

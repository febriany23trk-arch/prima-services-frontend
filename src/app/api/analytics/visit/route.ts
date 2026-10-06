import { isIP } from "node:net";
import { queryDatabase } from "@/lib/db";

export const runtime = "nodejs";

function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const candidates = [
    request.headers.get("x-real-ip"),
    forwardedFor?.split(",")[0],
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    let address = candidate.trim();
    if (address.startsWith("[")) {
      address = address.slice(1, address.indexOf("]"));
    } else if (/^\d{1,3}(?:\.\d{1,3}){3}:\d+$/.test(address)) {
      address = address.slice(0, address.lastIndexOf(":"));
    }
    if (isIP(address)) return address;
  }
  return null;
}

export async function POST(request: Request) {
  let body: { path?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (
    typeof body.path !== "string" ||
    body.path.length > 2048 ||
    !body.path.startsWith("/") ||
    body.path.startsWith("//") ||
    /^\/(?:api|admin|login)(?:\/|$)/.test(body.path)
  ) {
    return Response.json({ detail: "Halaman kunjungan tidak valid." }, { status: 400 });
  }

  const ipAddress = getClientIp(request);
  if (!ipAddress) {
    console.warn("Visitor analytics skipped because the request has no valid client IP header.");
    return Response.json(
      { detail: "Alamat IP pengunjung tidak tersedia dari proxy tepercaya." },
      { status: 400 },
    );
  }

  try {
    await queryDatabase(
      "DELETE FROM visitor_analytics WHERE visited_at < now() - interval '30 days'",
    );
    await queryDatabase(
      "INSERT INTO visitor_analytics (ip_address, path) VALUES ($1, $2)",
      [ipAddress, body.path],
    );
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Failed to record visitor analytics:", error);
    return Response.json({ detail: "Kunjungan tidak dapat disimpan." }, { status: 503 });
  }
}

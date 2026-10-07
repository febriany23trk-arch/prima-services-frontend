import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

const VISITOR_RETENTION_DAYS = 365;
const SUPPORTED_RANGES = {
  "7d": 7,
  "30d": 30,
  "1y": 365,
} as const;

export async function GET(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const range = new URL(request.url).searchParams.get("range") ?? "30d";
  if (!Object.hasOwn(SUPPORTED_RANGES, range)) {
    return Response.json({ detail: "Rentang Visitor Analytics tidak valid." }, { status: 400 });
  }
  const rangeDays = SUPPORTED_RANGES[range as keyof typeof SUPPORTED_RANGES];

  try {
    await queryDatabase(
      "DELETE FROM visitor_analytics WHERE visited_at < now() - ($1 * interval '1 day')",
      [VISITOR_RETENTION_DAYS],
    );
    const [visits, count] = await Promise.all([
      queryDatabase<{ id: string; ipAddress: string; path: string; visitedAt: Date }>(
        `SELECT id, ip_address AS "ipAddress", path, visited_at AS "visitedAt"
         FROM visitor_analytics
         WHERE visited_at >= now() - ($1 * interval '1 day')
         ORDER BY visited_at DESC
         LIMIT 500`,
        [rangeDays],
      ),
      queryDatabase<{ total: number }>(
        "SELECT count(*)::int AS total FROM visitor_analytics WHERE visited_at >= now() - ($1 * interval '1 day')",
        [rangeDays],
      ),
    ]);

    return Response.json({
      status: "success",
      range,
      rangeDays,
      retentionDays: VISITOR_RETENTION_DAYS,
      total: count.rows[0]?.total ?? 0,
      visits: visits.rows,
    });
  } catch (error) {
    console.error("Failed to load visitor analytics:", error);
    return Response.json({ detail: "Visitor Analytics tidak dapat dimuat." }, { status: 503 });
  }
}

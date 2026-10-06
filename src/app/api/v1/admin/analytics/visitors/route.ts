import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  try {
    await queryDatabase(
      "DELETE FROM visitor_analytics WHERE visited_at < now() - interval '30 days'",
    );
    const [visits, count] = await Promise.all([
      queryDatabase<{ id: string; ipAddress: string; path: string; visitedAt: Date }>(
        `SELECT id, ip_address AS "ipAddress", path, visited_at AS "visitedAt"
         FROM visitor_analytics
         WHERE visited_at >= now() - interval '30 days'
         ORDER BY visited_at DESC
         LIMIT 500`,
      ),
      queryDatabase<{ total: number }>(
        "SELECT count(*)::int AS total FROM visitor_analytics WHERE visited_at >= now() - interval '30 days'",
      ),
    ]);

    return Response.json({
      status: "success",
      retentionDays: 30,
      total: count.rows[0]?.total ?? 0,
      visits: visits.rows,
    });
  } catch (error) {
    console.error("Failed to load visitor analytics:", error);
    return Response.json({ detail: "Visitor Analytics tidak dapat dimuat." }, { status: 503 });
  }
}

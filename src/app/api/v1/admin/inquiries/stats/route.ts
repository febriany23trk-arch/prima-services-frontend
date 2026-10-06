import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

type Filter = "weekly" | "monthly" | "yearly";

export async function GET(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const filter = new URL(request.url).searchParams.get("filter") ?? "monthly";
  if (!["weekly", "monthly", "yearly"].includes(filter)) {
    return Response.json({ detail: "Filter statistik tidak valid." }, { status: 400 });
  }

  const selectedFilter = filter as Filter;
  const now = new Date();
  const labels: string[] = [];
  if (selectedFilter === "yearly") {
    for (let offset = 11; offset >= 0; offset -= 1) {
      const date = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - offset, 1));
      labels.push(`${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`);
    }
  } else {
    const days = selectedFilter === "weekly" ? 7 : 30;
    for (let offset = days - 1; offset >= 0; offset -= 1) {
      const date = new Date(now);
      date.setUTCDate(date.getUTCDate() - offset);
      labels.push(date.toISOString().slice(0, 10));
    }
  }

  try {
    const result = await queryDatabase<{ label: string; total: number }>(
      `SELECT to_char(created_at AT TIME ZONE 'UTC', $1) AS label, count(*)::int AS total
       FROM inquiries GROUP BY label`,
      [selectedFilter === "yearly" ? "YYYY-MM" : "YYYY-MM-DD"],
    );
    const counts = new Map(result.rows.map((row) => [row.label, row.total]));
    return Response.json({
      status: "success",
      filter: selectedFilter,
      data: labels.map((label) => ({ label, total: counts.get(label) ?? 0 })),
    });
  } catch (error) {
    console.error("Failed to load inquiry statistics:", error);
    return Response.json({ detail: "Statistik inquiry tidak dapat dimuat." }, { status: 503 });
  }
}

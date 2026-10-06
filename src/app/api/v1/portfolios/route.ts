import { queryDatabase } from "@/lib/db";

export async function GET() {
  try {
    const result = await queryDatabase(
      "SELECT id, title, category, image FROM portfolios ORDER BY id",
    );
    return Response.json({ status: "success", data: result.rows });
  } catch (error) {
    console.error("Failed to load portfolios:", error);
    return Response.json({ detail: "Portofolio tidak dapat dimuat." }, { status: 503 });
  }
}

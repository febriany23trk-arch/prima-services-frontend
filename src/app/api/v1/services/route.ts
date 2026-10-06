import { queryDatabase } from "@/lib/db";

export async function GET() {
  try {
    const result = await queryDatabase(
      `SELECT id, name, category, description
       FROM services
       WHERE status = 'Active'
       ORDER BY name`,
    );
    return Response.json({ status: "success", data: result.rows });
  } catch (error) {
    console.error("Failed to load public services:", error);
    return Response.json({ detail: "Layanan tidak dapat dimuat." }, { status: 503 });
  }
}

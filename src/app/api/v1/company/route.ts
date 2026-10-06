import { queryDatabase } from "@/lib/db";

export async function GET() {
  try {
    const result = await queryDatabase<{ data: Record<string, unknown> }>(
      "SELECT data FROM company_profile WHERE id = 1",
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Profil perusahaan belum tersedia." }, { status: 503 });
    }
    return Response.json(result.rows[0].data);
  } catch (error) {
    console.error("Failed to load the company profile:", error);
    return Response.json({ detail: "Profil perusahaan tidak dapat dimuat." }, { status: 503 });
  }
}

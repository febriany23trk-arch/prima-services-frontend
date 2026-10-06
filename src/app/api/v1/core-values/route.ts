import { queryDatabase } from "@/lib/db";

export async function GET() {
  try {
    const result = await queryDatabase<{ data: { coreValues?: unknown[] } }>(
      "SELECT data FROM company_profile WHERE id = 1",
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Profil perusahaan belum tersedia." }, { status: 503 });
    }
    return Response.json(result.rows[0].data.coreValues ?? []);
  } catch (error) {
    console.error("Failed to load company core values:", error);
    return Response.json({ detail: "Nilai perusahaan tidak dapat dimuat." }, { status: 503 });
  }
}

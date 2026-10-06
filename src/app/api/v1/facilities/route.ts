import { queryDatabase } from "@/lib/db";

export async function GET() {
  try {
    const result = await queryDatabase<{ data: { facilities?: unknown[] } }>(
      "SELECT data FROM company_profile WHERE id = 1",
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Profil perusahaan belum tersedia." }, { status: 503 });
    }
    return Response.json(result.rows[0].data.facilities ?? []);
  } catch (error) {
    console.error("Failed to load company facilities:", error);
    return Response.json({ detail: "Fasilitas perusahaan tidak dapat dimuat." }, { status: 503 });
  }
}

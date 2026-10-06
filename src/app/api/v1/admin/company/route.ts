import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const result = await queryDatabase<{ data: Record<string, unknown> }>(
      "SELECT data FROM company_profile WHERE id = 1",
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Profil perusahaan belum tersedia." }, { status: 503 });
    }
    return Response.json(result.rows[0].data);
  } catch (error) {
    console.error("Failed to load the admin company profile:", error);
    return Response.json({ detail: "Profil perusahaan tidak dapat dimuat." }, { status: 503 });
  }
}

export async function PUT(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let profile: Record<string, unknown>;
  try {
    profile = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }
  if (
    typeof profile.vision !== "string" ||
    typeof profile.mission !== "string" ||
    typeof profile.email !== "string" ||
    typeof profile.phone !== "string" ||
    typeof profile.address_jakarta !== "string" ||
    typeof profile.address_yogyakarta !== "string" ||
    !Array.isArray(profile.coreValues) ||
    !Array.isArray(profile.facilities)
  ) {
    return Response.json({ detail: "Data profil perusahaan tidak valid." }, { status: 400 });
  }

  try {
    const result = await queryDatabase<{ data: Record<string, unknown> }>(
      `INSERT INTO company_profile (id, data) VALUES (1, $1::jsonb)
       ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data
       RETURNING data`,
      [JSON.stringify(profile)],
    );
    return Response.json(result.rows[0].data);
  } catch (error) {
    console.error("Failed to update the company profile:", error);
    return Response.json({ detail: "Profil perusahaan gagal disimpan." }, { status: 503 });
  }
}

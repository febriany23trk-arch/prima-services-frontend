import { requireAdminApi } from "@/lib/admin-auth";
import { isSitePageSlug, SITE_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults";
import { queryDatabase } from "@/lib/db";

type RouteContext = { params: Promise<{ pageSlug: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const { pageSlug } = await context.params;
  if (!isSitePageSlug(pageSlug)) {
    return Response.json({ detail: "Halaman tidak ditemukan." }, { status: 404 });
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (
    !input ||
    typeof input !== "object" ||
    Array.isArray(input) ||
    Object.entries(input).length > 1000 ||
    !Object.entries(input).every(
      ([key, value]) =>
        key.length <= 180 && typeof value === "string" && value.length <= 10000,
    )
  ) {
    return Response.json({ detail: "Data konten halaman tidak valid." }, { status: 400 });
  }

  const content = input as Record<string, string>;
  const allowedKeys = new Set(Object.keys(SITE_PAGE_CONTENT_DEFAULTS[pageSlug]));
  if (Object.keys(content).some((key) => !allowedKeys.has(key))) {
    return Response.json({ detail: "Konten berisi field yang tidak dikenal." }, { status: 400 });
  }
  const invalidLink = Object.entries(content).some(([key, value]) => {
    if (!/(^|\.)(href|src|imageSrc)(\.|$)/i.test(key)) return false;
    return !/^(\/(?!\/)|https?:\/\/|mailto:|tel:|#[\w-]*)/i.test(value.trim());
  });
  if (invalidLink) {
    return Response.json({ detail: "Tautan harus menggunakan URL relatif yang aman, HTTP(S), email, atau telepon." }, { status: 400 });
  }

  try {
    const result = await queryDatabase<{ content: Record<string, string> }>(
      `INSERT INTO site_page_content (page_slug, content)
       VALUES ($1, $2::jsonb)
       ON CONFLICT (page_slug) DO UPDATE SET content = EXCLUDED.content, updated_at = now()
       RETURNING content`,
      [pageSlug, JSON.stringify({ ...SITE_PAGE_CONTENT_DEFAULTS[pageSlug], ...content })],
    );
    return Response.json({ pageSlug, content: result.rows[0].content });
  } catch (error) {
    console.error(`Failed to update page content for ${pageSlug}:`, error);
    return Response.json({ detail: "Konten halaman gagal disimpan." }, { status: 503 });
  }
}

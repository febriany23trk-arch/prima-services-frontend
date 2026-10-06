import { requireAdminApi } from "@/lib/admin-auth";
import { mergePageContent, SITE_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults";
import { queryDatabase } from "@/lib/db";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  try {
    const result = await queryDatabase<{
      page_slug: string;
      content: Record<string, string>;
    }>("SELECT page_slug, content FROM site_page_content");
    const content = Object.fromEntries(
      Object.entries(SITE_PAGE_CONTENT_DEFAULTS).map(([slug]) => [
        slug,
        mergePageContent(
          slug as keyof typeof SITE_PAGE_CONTENT_DEFAULTS,
          result.rows.find((row) => row.page_slug === slug)?.content,
        ),
      ]),
    );
    return Response.json(content, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Failed to load admin-managed page content:", error);
    return Response.json({ detail: "Konten halaman tidak dapat dimuat." }, { status: 503 });
  }
}

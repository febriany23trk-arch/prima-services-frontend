import { isSitePageSlug, mergePageContent } from "@/lib/page-content-defaults";
import { queryDatabase } from "@/lib/db";

type RouteContext = { params: Promise<{ pageSlug: string }> };

export async function GET(_: Request, context: RouteContext) {
  const { pageSlug } = await context.params;
  if (!isSitePageSlug(pageSlug)) {
    return Response.json({ detail: "Halaman tidak ditemukan." }, { status: 404 });
  }

  try {
    const result = await queryDatabase<{ content: Record<string, string> }>(
      "SELECT content FROM site_page_content WHERE page_slug = $1",
      [pageSlug],
    );
    return Response.json({
      pageSlug,
      content: mergePageContent(pageSlug, result.rows[0]?.content),
    }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error(`Failed to load public content for ${pageSlug}:`, error);
    return Response.json({ detail: "Konten halaman tidak dapat dimuat." }, { status: 503 });
  }
}

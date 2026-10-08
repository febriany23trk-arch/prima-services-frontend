import { queryDatabase } from "@/lib/db";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ mediaId: string }> };

export async function GET(_: Request, context: RouteContext) {
  const { mediaId } = await context.params;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(mediaId)) {
    return Response.json({ detail: "Gambar tidak ditemukan." }, { status: 404 });
  }

  try {
    const result = await queryDatabase<{ contentType: string; data: Buffer }>(
      `SELECT content_type AS "contentType", data
       FROM uploaded_media
       WHERE id = $1`,
      [mediaId],
    );
    const media = result.rows[0];
    if (!media) return Response.json({ detail: "Gambar tidak ditemukan." }, { status: 404 });

    return new Response(new Uint8Array(media.data), {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": String(media.data.length),
        "Content-Type": media.contentType,
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Failed to load uploaded public media:", error);
    return Response.json({ detail: "Gambar tidak dapat dimuat saat ini." }, { status: 503 });
  }
}

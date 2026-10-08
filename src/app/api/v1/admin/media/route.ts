import { randomUUID } from "node:crypto";
import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

export const runtime = "nodejs";

const MAX_IMAGE_SIZE = 4 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
]);

export async function POST(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_IMAGE_SIZE + 64 * 1024) {
    return Response.json({ detail: "Ukuran gambar maksimal 4 MB." }, { status: 413 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ detail: "File gambar tidak dapat dibaca." }, { status: 400 });
  }

  const image = formData.get("image");
  if (!(image instanceof File) || image.size === 0) {
    return Response.json({ detail: "Pilih file gambar terlebih dahulu." }, { status: 400 });
  }
  if (image.size > MAX_IMAGE_SIZE) {
    return Response.json({ detail: "Ukuran gambar maksimal 4 MB." }, { status: 413 });
  }
  if (!ALLOWED_IMAGE_TYPES.has(image.type)) {
    return Response.json(
      { detail: "Format gambar harus JPEG, PNG, WebP, AVIF, atau GIF." },
      { status: 415 },
    );
  }

  const id = randomUUID();
  try {
    await queryDatabase(
      `INSERT INTO uploaded_media (id, content_type, data)
       VALUES ($1, $2, $3)`,
      [id, image.type, Buffer.from(await image.arrayBuffer())],
    );
    return Response.json({ src: `/api/media/${id}` }, { status: 201 });
  } catch (error) {
    console.error("Failed to store uploaded admin media:", error);
    return Response.json({ detail: "Gambar gagal disimpan ke database." }, { status: 503 });
  }
}

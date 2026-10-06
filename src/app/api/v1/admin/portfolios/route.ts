import { randomUUID } from "node:crypto";
import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

interface PortfolioInput {
  title?: unknown;
  category?: unknown;
  image?: unknown;
}

function parsePortfolio(input: PortfolioInput) {
  if (
    typeof input.title !== "string" ||
    !input.title.trim() ||
    input.title.length > 180 ||
    typeof input.category !== "string" ||
    !input.category.trim() ||
    input.category.length > 120 ||
    typeof input.image !== "string" ||
    !input.image.trim() ||
    input.image.length > 1000
  ) {
    return null;
  }

  return {
    title: input.title.trim(),
    category: input.category.trim(),
    image: input.image.trim(),
  };
}

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  try {
    const result = await queryDatabase(
      "SELECT id, title, category, image FROM portfolios ORDER BY id",
    );
    return Response.json(result.rows, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Failed to load admin portfolios:", error);
    return Response.json({ detail: "Portofolio tidak dapat dimuat." }, { status: 503 });
  }
}

export async function POST(request: Request) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let input: PortfolioInput;
  try {
    input = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }
  const portfolio = parsePortfolio(input);
  if (!portfolio) {
    return Response.json({ detail: "Data portofolio tidak valid." }, { status: 400 });
  }

  try {
    const result = await queryDatabase(
      `INSERT INTO portfolios (id, title, category, image)
       VALUES ($1, $2, $3, $4)
       RETURNING id, title, category, image`,
      [randomUUID(), portfolio.title, portfolio.category, portfolio.image],
    );
    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Failed to create portfolio:", error);
    return Response.json({ detail: "Portofolio gagal disimpan." }, { status: 503 });
  }
}

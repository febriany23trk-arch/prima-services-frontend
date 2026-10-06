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

type RouteContext = { params: Promise<{ portfolioId: string }> };

export async function PUT(request: Request, context: RouteContext) {
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
  const { portfolioId } = await context.params;

  try {
    const result = await queryDatabase(
      `UPDATE portfolios SET title = $2, category = $3, image = $4
       WHERE id = $1 RETURNING id, title, category, image`,
      [portfolioId, portfolio.title, portfolio.category, portfolio.image],
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Portofolio tidak ditemukan." }, { status: 404 });
    }
    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to update portfolio:", error);
    return Response.json({ detail: "Portofolio gagal diperbarui." }, { status: 503 });
  }
}

export async function DELETE(_: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  const { portfolioId } = await context.params;

  try {
    const result = await queryDatabase(
      "DELETE FROM portfolios WHERE id = $1 RETURNING id",
      [portfolioId],
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Portofolio tidak ditemukan." }, { status: 404 });
    }
    return Response.json({ status: "success" });
  } catch (error) {
    console.error("Failed to delete portfolio:", error);
    return Response.json({ detail: "Portofolio gagal dihapus." }, { status: 503 });
  }
}

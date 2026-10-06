import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

interface ServiceInput {
  name?: unknown;
  category?: unknown;
  description?: unknown;
  status?: unknown;
}

function parseService(input: ServiceInput) {
  if (
    typeof input.name !== "string" ||
    !input.name.trim() ||
    input.name.length > 180 ||
    typeof input.category !== "string" ||
    !input.category.trim() ||
    input.category.length > 120 ||
    (input.description !== undefined &&
      (typeof input.description !== "string" || input.description.length > 2000)) ||
    (input.status !== undefined && !["Active", "Inactive"].includes(String(input.status)))
  ) {
    return null;
  }
  return {
    name: input.name.trim(),
    category: input.category.trim(),
    description: input.description?.trim() ?? "",
    status: input.status ?? "Active",
  };
}

type RouteContext = { params: Promise<{ serviceId: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let input: ServiceInput;
  try {
    input = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }
  const service = parseService(input);
  if (!service) {
    return Response.json({ detail: "Data layanan tidak valid." }, { status: 400 });
  }
  const { serviceId } = await context.params;

  try {
    const result = await queryDatabase(
      `UPDATE services SET name = $2, category = $3, description = $4, status = $5
       WHERE id = $1 RETURNING id, name, category, description, status`,
      [serviceId, service.name, service.category, service.description, service.status],
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Layanan tidak ditemukan." }, { status: 404 });
    }
    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to update service:", error);
    return Response.json({ detail: "Layanan gagal diperbarui." }, { status: 503 });
  }
}

export async function DELETE(_: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  const { serviceId } = await context.params;
  try {
    const result = await queryDatabase("DELETE FROM services WHERE id = $1 RETURNING id", [
      serviceId,
    ]);
    if (!result.rows[0]) {
      return Response.json({ detail: "Layanan tidak ditemukan." }, { status: 404 });
    }
    return Response.json({ status: "success" });
  } catch (error) {
    console.error("Failed to delete service:", error);
    return Response.json({ detail: "Layanan gagal dihapus." }, { status: 503 });
  }
}

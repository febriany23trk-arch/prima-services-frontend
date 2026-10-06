import { randomUUID } from "node:crypto";
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

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    const result = await queryDatabase(
      "SELECT id, name, category, description, status FROM services ORDER BY name",
    );
    return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to load admin services:", error);
    return Response.json({ detail: "Layanan tidak dapat dimuat." }, { status: 503 });
  }
}

export async function POST(request: Request) {
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

  try {
    const result = await queryDatabase(
      `INSERT INTO services (id, name, category, description, status)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, category, description, status`,
      [randomUUID(), service.name, service.category, service.description, service.status],
    );
    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Failed to create service:", error);
    return Response.json({ detail: "Layanan gagal disimpan." }, { status: 503 });
  }
}

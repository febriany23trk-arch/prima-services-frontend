import { queryDatabase } from "@/lib/db";

export async function GET() {
  try {
    await queryDatabase("SELECT 1");
    return Response.json({ status: "success", database: "connected" });
  } catch (error) {
    console.error("Database health check failed:", error);
    return Response.json(
      { status: "error", database: "unavailable" },
      { status: 503 },
    );
  }
}

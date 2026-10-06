import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

export async function GET() {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  try {
    await queryDatabase(
      `UPDATE inquiries
       SET status = 'Pending'
       WHERE status = 'New'
         AND created_at <= now() - interval '3 days'`,
    );
    const result = await queryDatabase(
      `SELECT id, name, email, phone, company, service, timeline, budget, message,
        status,
        notes, reply_subject AS "replySubject", reply_body AS "replyBody",
        replied_at AS "repliedAt",
        (status = 'Pending' AND created_at <= now() - interval '3 days') AS "isOverdue",
        to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI') AS date
       FROM inquiries ORDER BY created_at DESC`,
    );
    return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to load admin inquiries:", error);
    return Response.json({ detail: "Pesan tidak dapat dimuat." }, { status: 503 });
  }
}

import { requireAdminApi } from "@/lib/admin-auth";
import { queryDatabase } from "@/lib/db";

interface InquiryUpdate {
  status?: unknown;
  notes?: unknown;
}

type RouteContext = { params: Promise<{ inquiryId: string }> };

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;

  let update: InquiryUpdate;
  try {
    update = await request.json();
  } catch {
    return Response.json({ detail: "Format permintaan tidak valid." }, { status: 400 });
  }
  if (
    typeof update.status !== "string" ||
    !["New", "Pending", "Replied"].includes(update.status) ||
    (update.notes !== undefined &&
      (typeof update.notes !== "string" || update.notes.length > 2000))
  ) {
    return Response.json({ detail: "Status inquiry tidak valid." }, { status: 400 });
  }

  const { inquiryId } = await context.params;
  try {
    if (update.status === "Replied") {
      const current = await queryDatabase<{ status: string }>(
        "SELECT status FROM inquiries WHERE id = $1",
        [inquiryId],
      );
      if (!current.rows[0]) {
        return Response.json({ detail: "Inquiry tidak ditemukan." }, { status: 404 });
      }
      if (current.rows[0].status !== "Replied") {
        return Response.json(
          { detail: "Kirim balasan melalui provider sebelum menandai inquiry sebagai Done Respond." },
          { status: 400 },
        );
      }
    }

    const result = await queryDatabase(
      `UPDATE inquiries
       SET status = $2, notes = $3,
         replied_at = CASE
           WHEN $2 = 'Replied' AND replied_at IS NULL THEN now()
           ELSE replied_at
         END
       WHERE id = $1
       RETURNING id, name, email, phone, company, service, message,
         status,
         notes,
         reply_subject AS "replySubject", reply_body AS "replyBody",
         replied_at AS "repliedAt",
         (status = 'Pending' AND created_at <= now() - interval '3 days') AS "isOverdue",
         to_char(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI') AS date`,
      [inquiryId, update.status, update.notes ?? ""],
    );
    if (!result.rows[0]) {
      return Response.json({ detail: "Inquiry tidak ditemukan." }, { status: 404 });
    }
    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to update inquiry:", error);
    return Response.json({ detail: "Inquiry gagal diperbarui." }, { status: 503 });
  }
}

export async function DELETE(_: Request, context: RouteContext) {
  const unauthorized = await requireAdminApi();
  if (unauthorized) return unauthorized;
  const { inquiryId } = await context.params;
  try {
    const result = await queryDatabase("DELETE FROM inquiries WHERE id = $1 RETURNING id", [
      inquiryId,
    ]);
    if (!result.rows[0]) {
      return Response.json({ detail: "Inquiry tidak ditemukan." }, { status: 404 });
    }
    return Response.json({ status: "success" });
  } catch (error) {
    console.error("Failed to delete inquiry:", error);
    return Response.json({ detail: "Inquiry gagal dihapus." }, { status: 503 });
  }
}

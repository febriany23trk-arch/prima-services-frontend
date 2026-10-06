import "server-only";

export class WhatsAppConfigurationError extends Error {
  constructor(message = "Konfigurasi WhatsApp Business API belum lengkap.") {
    super(message);
    this.name = "WhatsAppConfigurationError";
  }
}

export class WhatsAppDeliveryError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WhatsAppDeliveryError";
  }
}

interface WhatsAppResponse {
  messages?: Array<{ id?: string }>;
  error?: {
    code?: number;
    type?: string;
  };
}

interface WhatsAppMessagePayload {
  messaging_product: "whatsapp";
  recipient_type: "individual";
  to: string;
  type: "text" | "template";
  text?: { preview_url: false; body: string };
  template?: {
    name: string;
    language: { code: string };
    components: Array<{
      type: "body";
      parameters: Array<{ type: "text"; text: string }>;
    }>;
  };
}

export async function sendWhatsAppReply(to: string, message: string): Promise<void> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN?.trim();
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  const apiVersion = process.env.WHATSAPP_GRAPH_API_VERSION?.trim();
  if (!accessToken || !phoneNumberId || !apiVersion) {
    throw new WhatsAppConfigurationError();
  }
  if (!/^v\d+\.\d+$/.test(apiVersion)) {
    throw new WhatsAppConfigurationError("WHATSAPP_GRAPH_API_VERSION tidak valid.");
  }

  const digits = to.replace(/\D/g, "");
  const recipient = digits.startsWith("62")
    ? digits
    : digits.startsWith("0")
      ? `62${digits.slice(1)}`
      : digits.startsWith("8")
        ? `62${digits}`
        : digits;
  if (recipient.length < 8 || recipient.length > 15) {
    throw new WhatsAppDeliveryError("Nomor WhatsApp client tidak valid.");
  }

  let response: Response;
  const templateName = process.env.WHATSAPP_REPLY_TEMPLATE_NAME?.trim();
  const templateLanguage = process.env.WHATSAPP_REPLY_TEMPLATE_LANGUAGE?.trim();
  if (Boolean(templateName) !== Boolean(templateLanguage)) {
    throw new WhatsAppConfigurationError(
      "Nama template dan bahasa WhatsApp harus dikonfigurasi bersamaan.",
    );
  }
  const payload: WhatsAppMessagePayload = templateName && templateLanguage
    ? {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipient,
        type: "template",
        template: {
          name: templateName,
          language: { code: templateLanguage },
          components: [
            {
              type: "body",
              parameters: [{ type: "text", text: message }],
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipient,
        type: "text",
        text: { preview_url: false, body: message },
      };
  try {
    response = await fetch(
      `https://graph.facebook.com/${apiVersion}/${encodeURIComponent(phoneNumberId)}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );
  } catch (error) {
    console.error("WhatsApp API request failed:", {
      name: error instanceof Error ? error.name : "unknown",
    });
    throw new WhatsAppDeliveryError("Tidak dapat menghubungi WhatsApp Business API.");
  }

  let result: WhatsAppResponse = {};
  try {
    result = (await response.json()) as WhatsAppResponse;
  } catch {
    console.error("WhatsApp API returned an unreadable response:", {
      status: response.status,
    });
  }

  const messageId = result.messages?.[0]?.id;
  if (!response.ok || !messageId) {
    console.error("WhatsApp API rejected reply:", {
      status: response.status,
      errorCode: result.error?.code,
      errorType: result.error?.type,
    });
    if (result.error?.code === 131047 && !templateName) {
      throw new WhatsAppDeliveryError(
        "WhatsApp menolak pesan di luar jendela layanan 24 jam. Konfigurasikan template pesan yang telah disetujui Meta atau minta client mengirim pesan WhatsApp terlebih dahulu.",
      );
    }
    if (response.status === 401 || response.status === 403) {
      throw new WhatsAppDeliveryError("WhatsApp menolak token akses. Periksa konfigurasi token server.");
    }
    throw new WhatsAppDeliveryError(
      "WhatsApp Business API tidak menerima pesan. Periksa nomor, izin, dan konfigurasi WhatsApp.",
    );
  }
}

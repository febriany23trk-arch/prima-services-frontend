# Prima Services — Next.js full-stack application

The website and server-side API run in the same Next.js application. PostgreSQL is the shared persistent database; database credentials stay on the server and are never exposed to browsers. The previous separate FastAPI service is not required to run or deploy this app.

## Local development

1. Set `DATABASE_URL` in the ignored `.env.local` to the Neon PostgreSQL connection string from the Neon dashboard. Use the pooled connection string for the web application and keep the Neon-provided TLS query parameters (such as `sslmode=require`). Do not commit or share this URL; it contains database credentials.
2. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `AUTH_SECRET` in `.env.local`. Restart the development server after changing environment variables.
3. Install dependencies and start Next.js:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`. The admin dashboard is at `/admin`; unauthenticated visitors are redirected to `/login`. On database initialization, `ADMIN_EMAIL` and `ADMIN_PASSWORD` provision the single admin account in PostgreSQL; the password is stored as a scrypt hash, and login verifies against that database record. Changing those environment values and restarting the app updates the provisioned account. Existing Neon admin accounts can sign in using the database record and `AUTH_SECRET`; the `ADMIN_EMAIL` and `ADMIN_PASSWORD` values are only needed to create or update the account. `/api/health` checks the PostgreSQL connection.

The same `DATABASE_URL` makes local development read and write the shared Neon database. The UI and routes do not need a separate frontend/backend configuration; public pages and the admin dashboard use the same server-side PostgreSQL connection.

### Visitor analytics and privacy

Public page navigation automatically records the page path, visitor IP address, and visit timestamp in PostgreSQL; visitors do not need to submit the contact form. The admin dashboard's **Visitor Analytics** section can filter the latest 500 displayed visits by the last 7 days, 30 days, or 1 year, including the date, weekday, and time. Visitor IP records are retained for up to 1 year and expired records are removed when visitor data is collected or the analytics list is opened. The public footer links to a privacy policy that discloses this collection and retention period. Production deployments must run behind a trusted reverse proxy that overwrites `X-Real-IP` or `X-Forwarded-For`; the analytics endpoint validates the IP format but, like any app reading forwarded headers, cannot distinguish a spoofed header if an untrusted proxy passes it through unchanged.

### Editing public website content

After signing in, open **Public Page Content** in the admin dashboard to edit published text, links, choices, and media paths for shared navigation/footer, Home, About, Services, Contact, and the Solutions pages. Save with **Save & Publish**; changes are stored in PostgreSQL and are shown to public visitors when their page is loaded or refreshed. Service-catalog records, the Home portfolio gallery, and company profile/contact details remain editable in their existing admin sections. New Contact inquiries are saved to PostgreSQL and emailed to the company email configured in the company profile (with `ADMIN_EMAIL` as a fallback); the customer's email is included as the reply-to address.

### Start the database with Docker Compose

The optional Compose database is an isolated local PostgreSQL database. It does not use Neon and is not shared with the deployed site. To run that local database instead, set `POSTGRES_PASSWORD` in `.env.local`, then run:

```powershell
docker compose --env-file .env.local up -d database
```

To run Next.js and the local PostgreSQL container together, run `docker compose --env-file .env.local up --build`; Compose configures the web service to connect to its PostgreSQL container on the internal port `5432`. Do not use this Compose setup when you intend to use Neon, because it deliberately points the app at its local container.

## Production deployment

Deploy this repository as a **Node.js Next.js web service**, not as a static website, alongside one managed PostgreSQL database (Railway, Render, or an equivalent). Configure these variables on the Next.js service:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string for the shared production database |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Unique, strong admin password |
| `AUTH_SECRET` | Random secret of at least 32 characters used to sign secure admin sessions |
| `PGSSL` | Set to `true` only when the database provider requires TLS |
| `RESEND_API_KEY` | Resend API key used only for server-side Contact form notifications |
| `RESEND_FROM_EMAIL` | Sender address on a domain verified in Resend; required for Contact form notifications |
| `SMTP_HOST` | SMTP server host, e.g. `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port: `587` for STARTTLS or `465` for implicit TLS |
| `SMTP_SECURE` | `true` for port `465`; `false` for port `587` |
| `SMTP_USER` | Gmail account used to authenticate |
| `SMTP_PASSWORD` | Google App Password (not the regular Google account password) |
| `SMTP_FROM` | Sender address, normally the same Gmail account as `SMTP_USER` |
| `WHATSAPP_ACCESS_TOKEN` | Server-side access token for the Meta WhatsApp Business Cloud API |
| `WHATSAPP_PHONE_NUMBER_ID` | Phone Number ID from the Meta WhatsApp Business account |
| `WHATSAPP_GRAPH_API_VERSION` | Supported Graph API version, in the format `vNN.0` |
| `WHATSAPP_REPLY_TEMPLATE_NAME` | Optional approved WhatsApp template name with one body text parameter |
| `WHATSAPP_REPLY_TEMPLATE_LANGUAGE` | Language code for the approved template, e.g. `en_US` |

In Vercel, configure `DATABASE_URL` (the same Neon database containing the admin account) and a stable `AUTH_SECRET` of at least 32 characters for the Production environment, then redeploy. The local `.env.local` values are not deployed. `ADMIN_EMAIL` and `ADMIN_PASSWORD` are only required in Vercel to create or update the database admin account; set both to the existing admin credentials if the account has not yet been provisioned to Neon. The password is stored as a scrypt hash. Use a unique, strong production password and never put credentials in browser code or public build variables.

Contact submissions remain saved in PostgreSQL even if the server-side Resend notification cannot be sent. Configure `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in the Next.js service environment if you want the application to email Contact notifications to the company profile address (or `ADMIN_EMAIL`). The sender domain must be verified in Resend. Resend's testing domain may send only to the account owner's email; sending to client addresses requires a verified sender domain. A Resend 403 can indicate a sender/domain or account permission restriction and does not necessarily mean the key is invalid. Admin replies from **Customer Inquiries** are sent server-side by the Next.js API: email uses Nodemailer over Gmail SMTP (no OAuth Client ID/Secret), while WhatsApp uses the Meta WhatsApp Business Cloud API. Gmail SMTP requires a Google App Password in `SMTP_PASSWORD`, not the account's normal password. WhatsApp requires a Meta Business Cloud API access token, phone number ID, and supported Graph API version. Free-form WhatsApp replies work only during Meta's 24-hour customer-service window. To send outside it, configure an approved template and its language; recipient opt-in and message-template rules still apply. The app marks an inquiry **Replied** only after the selected SMTP/API provider accepts the send request. This confirms provider acceptance, not final delivery or that the recipient read it; delivery receipts require provider webhooks. Unanswered **New** inquiries automatically become **Pending** after three days when the admin inquiry list loads. Internal notes are not included in either message.

For local Gmail replies, configure `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_SECURE=false`, `SMTP_USER`, `SMTP_PASSWORD` with a Google App Password, and `SMTP_FROM` in ignored `.env.local`; restart `npm run dev` after changes. The `dev` and `start` scripts enable Node.js system CA trust so SMTP TLS can use certificates trusted by the operating system; TLS certificate validation remains enabled. If an antivirus or network proxy substitutes certificates and SMTP still reports an untrusted certificate, ask the network administrator for the legitimate CA certificate to install rather than disabling TLS validation. The Next.js dev process is the local backend server, so this works on localhost without deploying a separate server. WhatsApp automatic sends still require Meta Business Cloud API credentials; localhost alone cannot send messages without an external provider account. Keep provider credentials on the server and never commit or share them.

Use `npm run build` and `npm run start` for deployment. The database schema and initial company profile, services, portfolios, and public-page content are initialized on first use. Inquiry submissions and admin changes are written to PostgreSQL. Keep the same database and `AUTH_SECRET` across all web instances so that users share the same data and sessions remain verifiable. Do not commit `.env.local` or production credentials.

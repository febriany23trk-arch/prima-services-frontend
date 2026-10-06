import "server-only";

import { Pool, type QueryResultRow } from "pg";
import { SITE_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults";

const globalForPostgres = globalThis as typeof globalThis & {
  postgresPool?: Pool;
  databaseReady?: { schemaVersion: number; promise: Promise<void> };
};

const DATABASE_SCHEMA_VERSION = 7;
const previousContactEmail = "febriany23trk@mahasiswa.pcr.ac.id";
const currentContactEmail = "febrianydeltrida@gmail.com";

function getPool(): Pool {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be configured before using the database.");
  }

  globalForPostgres.postgresPool ??= new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    connectionTimeoutMillis: 20000,
    ssl:
      process.env.PGSSL === "true"
        ? { rejectUnauthorized: false }
        : undefined,
  });
  return globalForPostgres.postgresPool;
}

const initialCompanyProfile = {
  vision:
    "To be the most innovative and trusted strategic partner in Southeast Asia for Business Process Outsourcing (BPO), Recruitment & Headhunter, and Global Outsourcing, backed by strong global connections to deliver high-impact business solutions.",
  mission:
    "1. Provide flexible, scalable, and results-driven BPO services tailored to client needs.\n2. Support companies in discovering and managing top talent through professional recruitment and headhunting services.\n3. Build and strengthen global networks across countries to unlock cross-border business opportunities.\n4. Integrate technology, data, and human resource expertise to ensure consistent performance and value creation.\n5. Maintain a client satisfaction rate above 95% through transparency, accountability, and continuous performance tracking.\n6. Develop internal talent into world-class, adaptive, and globally competitive teams.\n7. Continuously innovate work models to deliver high ROI and sustainable business efficiency for clients.",
  email: "febrianydeltrida@gmail.com",
  phone: "+62 821-5009-1305",
  address_jakarta:
    "Permata Hijau Belleza RSA, Jl. Permata Hijau No.100 lt. 1, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210",
  address_yogyakarta:
    "Jl. Magelang No.156, Karangwaru, Tegalrejo, Kota Yogyakarta, DIY 55242",
  coreValues: [
    { id: 1, name: "INTEGRITY", description: "Upholding honesty, transparency, and accountability in every process." },
    { id: 2, name: "INNOVATION", description: "Continuously pioneering new techniques and high-impact solutions." },
    { id: 3, name: "COLLABORATION", description: "Fostering synergy and mutual success with clients and global teams." },
    { id: 4, name: "AGILITY", description: "Adapting swiftly to technological shifts and market demands." },
    { id: 5, name: "EXCELLENCE", description: "Delivering top-tier quality standards across all business operations." },
  ],
  facilities: [
    { id: 1, icon: "Shield", text: "Information Security management is ISO 27001 certified" },
    { id: 2, icon: "Server", text: "Server room with 24 hour dedicated IT Support" },
    { id: 3, icon: "Building", text: "Complete amenities including pantry, dining room, smoking area, praying room, relax room, and transit room for agents who are ill" },
    { id: 4, icon: "Clock", text: "24 hours operation and security: CCTV and Access Door" },
    { id: 5, icon: "Code", text: "IT Development, dedicated team ready to help client integrate the system with Teknoloka Okta Perkasa (TOP)." },
    { id: 6, icon: "Laptop", text: "Workstation equipped with Laptop/PC and Headset, Wallboard" },
    { id: 7, icon: "Users", text: "Online training facilities: meeting room, coaching rooms, and training room with a total of 100 seats. All occupied with WIFI" },
    { id: 8, icon: "Wifi", text: "Data center bandwidth 2 layers, main 100 Mbps with backup link fiberoptic and secondary 100 Mbps with backup link wireless (all dedicated)" },
    { id: 9, icon: "Zap", text: "Two layers UPS and genset electrical backup, UPS capacity 10 KVA for datacenter and 600va for each workstation" },
  ],
};

const initialPortfolios = [
  { id: "1", title: "Executive Operations Dashboard", category: "Analytics & Monitoring", image: "/images/tampilan dashboard.png" },
  { id: "2", title: "Real-Time Telemetry Center", category: "Resource Management", image: "/images/tambahandashboard.jpg" },
  { id: "3", title: "Performance & Insights Analytics", category: "Data Visualization", image: "/images/analisis.png" },
  { id: "4", title: "Abiday Mobile Operations Hub", category: "Mobile App Platform", image: "/images/abiday.png" },
];

const initialServices = [
  { id: "1", name: "Web Development", category: "Development", description: "Layanan web profesional", status: "Active" },
  { id: "2", name: "UI/UX Design", category: "Design", description: "Desain antarmuka modern", status: "Active" },
];

export async function ensureDatabase(): Promise<void> {
  if (globalForPostgres.databaseReady?.schemaVersion !== DATABASE_SCHEMA_VERSION) {
    const promise = (async () => {
      const pool = getPool();
      await pool.query(`
        CREATE TABLE IF NOT EXISTS company_profile (
          id integer PRIMARY KEY CHECK (id = 1),
          data jsonb NOT NULL
        );
        CREATE TABLE IF NOT EXISTS portfolios (
          id text PRIMARY KEY,
          title text NOT NULL,
          category text NOT NULL,
          image text NOT NULL
        );
        CREATE TABLE IF NOT EXISTS services (
          id text PRIMARY KEY,
          name text NOT NULL,
          category text NOT NULL,
          description text NOT NULL DEFAULT '',
          status text NOT NULL DEFAULT 'Active'
        );
        CREATE TABLE IF NOT EXISTS site_page_content (
          page_slug text PRIMARY KEY,
          content jsonb NOT NULL,
          updated_at timestamptz NOT NULL DEFAULT now()
        );
        CREATE TABLE IF NOT EXISTS inquiries (
          id uuid PRIMARY KEY,
          name text NOT NULL,
          email text NOT NULL,
          phone text,
          company text,
          service text NOT NULL DEFAULT '',
          timeline text NOT NULL DEFAULT '',
          budget text NOT NULL DEFAULT '',
          message text NOT NULL,
          status text NOT NULL DEFAULT 'New',
          notes text NOT NULL DEFAULT '',
          created_at timestamptz NOT NULL DEFAULT now()
        );
        CREATE TABLE IF NOT EXISTS visitor_analytics (
          id bigserial PRIMARY KEY,
          ip_address text NOT NULL,
          path text NOT NULL,
          visited_at timestamptz NOT NULL DEFAULT now()
        );
        CREATE INDEX IF NOT EXISTS visitor_analytics_visited_at_idx
          ON visitor_analytics (visited_at DESC);
        ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS reply_subject text;
        ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS reply_body text;
        ALTER TABLE inquiries ADD COLUMN IF NOT EXISTS replied_at timestamptz;
        CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries (created_at);
        CREATE INDEX IF NOT EXISTS inquiries_status_idx ON inquiries (status);
      `);

      await pool.query(
        "INSERT INTO company_profile (id, data) VALUES (1, $1::jsonb) ON CONFLICT (id) DO NOTHING",
        [JSON.stringify(initialCompanyProfile)],
      );
      for (const [pageSlug, content] of Object.entries(SITE_PAGE_CONTENT_DEFAULTS)) {
        await pool.query(
          `INSERT INTO site_page_content (page_slug, content)
           VALUES ($1, $2::jsonb)
           ON CONFLICT (page_slug) DO UPDATE
           SET content = EXCLUDED.content || site_page_content.content`,
          [pageSlug, JSON.stringify(content)],
        );
      }
      await pool.query(
        `UPDATE company_profile
         SET data = jsonb_set(data, '{email}', to_jsonb($1::text), true)
         WHERE lower(data->>'email') = lower($2)`,
        [currentContactEmail, previousContactEmail],
      );
      await pool.query(
        `UPDATE site_page_content
         SET content = jsonb_set(content, '{contact.email}', to_jsonb($1::text), true),
             updated_at = now()
         WHERE page_slug = 'contact'
           AND lower(content->>'contact.email') = lower($2)`,
        [currentContactEmail, previousContactEmail],
      );
      for (const portfolio of initialPortfolios) {
        await pool.query(
          "INSERT INTO portfolios (id, title, category, image) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING",
          [portfolio.id, portfolio.title, portfolio.category, portfolio.image],
        );
      }
      for (const service of initialServices) {
        await pool.query(
          "INSERT INTO services (id, name, category, description, status) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (id) DO NOTHING",
          [service.id, service.name, service.category, service.description, service.status],
        );
      }
    })().catch((error: unknown) => {
      if (globalForPostgres.databaseReady?.promise === promise) {
        globalForPostgres.databaseReady = undefined;
      }
      throw error;
    });
    globalForPostgres.databaseReady = { schemaVersion: DATABASE_SCHEMA_VERSION, promise };
  }
  await globalForPostgres.databaseReady.promise;
}

export async function queryDatabase<Row extends QueryResultRow>(
  sql: string,
  parameters: unknown[] = [],
) {
  await ensureDatabase();
  return getPool().query<Row>(sql, parameters);
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Palette } from "lucide-react";
import { queryDatabase } from "@/lib/db";

interface CatalogService {
  id: string;
  name: string;
  category: string;
  description: string;
}

async function getCatalogService(serviceId: string): Promise<CatalogService | null> {
  if (!serviceId || serviceId.length > 180) return null;

  const result = await queryDatabase<CatalogService>(
    `SELECT id, name, category, description
     FROM services
     WHERE id = $1 AND status = 'Active'
     LIMIT 1`,
    [serviceId],
  );

  return result.rows[0] ?? null;
}

function getServiceGuidance(service: CatalogService) {
  const category = service.category.toLowerCase();
  const name = service.name.toLowerCase();

  if (category.includes("design") || name.includes("ui/ux") || name.includes("design")) {
    return {
      Icon: Palette,
      intro:
        "Kami membantu menerjemahkan kebutuhan pengguna dan tujuan bisnis menjadi pengalaman digital yang jelas, konsisten, dan mudah digunakan.",
      benefits: [
        "Struktur informasi dan alur pengguna yang lebih mudah dipahami.",
        "Tampilan visual yang konsisten dengan identitas dan kebutuhan produk.",
        "Prototipe untuk meninjau rancangan sebelum implementasi.",
      ],
      steps: [
        "Memahami tujuan produk, pengguna, dan kebutuhan utama.",
        "Menyusun struktur informasi serta alur interaksi.",
        "Merancang antarmuka dan prototipe untuk ditinjau.",
        "Menyempurnakan rancangan berdasarkan masukan dan menyiapkan handoff.",
      ],
    };
  }

  if (
    category.includes("development") ||
    category.includes("engineering") ||
    name.includes("development")
  ) {
    return {
      Icon: Code2,
      intro:
        "Pengembangan dilakukan berdasarkan kebutuhan dan ruang lingkup yang disepakati, dengan perhatian pada fungsionalitas, responsivitas, dan kesiapan pemeliharaan.",
      benefits: [
        "Fitur dan prioritas implementasi diselaraskan dengan kebutuhan bisnis.",
        "Antarmuka responsif untuk berbagai ukuran layar dan perangkat.",
        "Pengujian dan peninjauan sebelum perubahan dirilis.",
      ],
      steps: [
        "Mengklarifikasi kebutuhan, pengguna, dan ruang lingkup fitur.",
        "Menyusun struktur solusi serta rencana implementasi.",
        "Membangun dan menguji fitur sesuai prioritas yang disepakati.",
        "Meninjau hasil, menyiapkan rilis, dan membahas dukungan lanjutan.",
      ],
    };
  }

  return {
    Icon: BriefcaseBusiness,
    intro:
      `Layanan ${service.name} dirancang berdasarkan ruang lingkup dan kebutuhan operasional yang dibahas bersama tim Prima Services.`,
    benefits: [
      `Ruang lingkup yang jelas untuk kebutuhan ${service.name}.`,
      `Pendekatan kerja diselaraskan dengan kategori ${service.category}.`,
      "Hasil dan tindak lanjut dibahas berdasarkan kebutuhan yang disepakati.",
    ],
    steps: [
      `Memahami tujuan dan kebutuhan terkait ${service.name}.`,
      `Menyepakati ruang lingkup serta pendekatan untuk ${service.category}.`,
      "Menjalankan pekerjaan dan meninjau hasil bersama.",
      "Menentukan tindak lanjut berdasarkan evaluasi.",
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = await getCatalogService(serviceId);
  if (!service) return {};

  return {
    title: `${service.name} | Prima Services`,
    description: service.description || `Informasi layanan ${service.name} dari Prima Services.`,
  };
}

export default async function CatalogServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = await getCatalogService(serviceId);
  if (!service) notFound();

  const guidance = getServiceGuidance(service);
  const Icon = guidance.Icon;

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Layanan
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {service.category}
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {service.description || `Pelajari pendekatan Prima Services untuk ${service.name}.`}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-700/20 transition-colors hover:bg-blue-800"
              >
                Konsultasikan Layanan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex min-h-52 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 via-white to-sky-50">
              <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-blue-100 bg-white text-blue-700 shadow-lg shadow-blue-900/5">
                <Icon className="h-14 w-14" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Pendekatan kami
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Solusi yang berangkat dari kebutuhan Anda
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{guidance.intro}</p>
          </div>
          <div className="grid gap-4">
            {guidance.benefits.map((benefit) => (
              <article
                key={benefit}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-sm leading-6 text-slate-700">{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">Tahapan layanan</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {guidance.steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="self-center text-sm leading-6 text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Diskusikan kebutuhan layanan Anda</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Hubungi tim Prima Services untuk membahas ruang lingkup dan pendekatan yang sesuai.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-blue-50"
          >
            Hubungi Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Handshake,
  LineChart,
  Puzzle,
  Shield,
} from "lucide-react";

const ADVANTAGES = {
  "layanan-ujung-ke-ujung": {
    title: "Layanan Ujung-ke-Ujung",
    eyebrow: "Solusi terintegrasi",
    summary:
      "Dari memahami kebutuhan hingga operasional berjalan, Prima Services membantu mengelola setiap tahap dengan tim dan proses yang terkoordinasi.",
    intro:
      "Anda tidak perlu mengoordinasikan banyak penyedia untuk menyelesaikan satu tantangan bisnis. Kami memulai dengan memahami proses dan target Anda, lalu merancang dukungan yang tepat, menjalankannya, dan terus menyempurnakannya berdasarkan hasil.",
    icon: Puzzle,
    accent: "blue",
    benefits: [
      {
        title: "Analisis kebutuhan",
        description:
          "Petakan proses, volume kerja, kebutuhan pelanggan, dan target sebelum solusi dirancang.",
      },
      {
        title: "Implementasi terkoordinasi",
        description:
          "Satukan sumber daya operasional, keahlian tim, dan teknologi dalam alur kerja yang jelas.",
      },
      {
        title: "Perbaikan berkelanjutan",
        description:
          "Pantau kualitas layanan dan tindak lanjuti temuan untuk menjaga hasil tetap relevan.",
      },
    ],
    process: [
      "Pahami tujuan dan tantangan operasional Anda.",
      "Susun ruang lingkup, alur kerja, indikator, dan kebutuhan tim.",
      "Implementasikan layanan secara bertahap dengan koordinasi yang jelas.",
      "Tinjau kinerja dan rekomendasikan perbaikan berkala.",
    ],
  },
  "mitra-resmi-terpercaya": {
    title: "Mitra Resmi & Tepercaya",
    eyebrow: "Kemitraan teknologi dan operasional",
    summary:
      "Kolaborasi dengan mitra teknologi seperti Google dan Sobot.io membantu menghadirkan solusi yang sesuai dengan kebutuhan operasional Anda.",
    intro:
      "Teknologi memberikan nilai terbaik ketika dipadukan dengan proses dan dukungan implementasi yang tepat. Prima Services membantu menghubungkan kebutuhan bisnis Anda dengan platform yang relevan, sekaligus mendukung adopsi dan pengelolaan operasionalnya.",
    icon: Handshake,
    accent: "sky",
    benefits: [
      {
        title: "Pemilihan solusi yang sesuai",
        description:
          "Pertimbangkan tujuan, kesiapan tim, dan sistem yang sudah digunakan sebelum menentukan platform.",
      },
      {
        title: "Implementasi yang didampingi",
        description:
          "Rencanakan konfigurasi dan alur kerja agar teknologi dapat digunakan dalam operasional sehari-hari.",
      },
      {
        title: "Kolaborasi berkelanjutan",
        description:
          "Dapatkan dukungan koordinasi untuk menyelaraskan kebutuhan operasional dan kemampuan platform.",
      },
    ],
    process: [
      "Petakan kebutuhan pengguna dan sistem yang ada.",
      "Identifikasi platform serta pendekatan implementasi yang relevan.",
      "Rencanakan adopsi dan koordinasi dengan pihak terkait.",
      "Evaluasi pemanfaatan dan kebutuhan dukungan selanjutnya.",
    ],
  },
  "roi-terukur": {
    title: "ROI yang Terukur",
    eyebrow: "Kinerja berbasis indikator",
    summary:
      "Tetapkan ukuran keberhasilan sejak awal, pantau kinerja, dan gunakan data untuk mengarahkan perbaikan proses.",
    intro:
      "Investasi operasional perlu dinilai dengan indikator yang dapat dipahami bersama. Kami membantu menyelaraskan metrik dengan tujuan bisnis, memantau perubahan kinerja, dan meninjau peluang perbaikan—tanpa menjanjikan hasil finansial yang tidak dapat dipastikan sebelumnya.",
    icon: LineChart,
    accent: "indigo",
    benefits: [
      {
        title: "Target dan baseline",
        description:
          "Tentukan kondisi awal serta indikator yang relevan sebelum perubahan operasional dijalankan.",
      },
      {
        title: "Pemantauan kinerja",
        description:
          "Gunakan laporan dan dashboard untuk melihat tren kualitas, produktivitas, dan efisiensi proses.",
      },
      {
        title: "Keputusan berbasis data",
        description:
          "Bahas hasil dan temuan secara berkala untuk memprioritaskan tindakan perbaikan berikutnya.",
      },
    ],
    process: [
      "Sepakati tujuan bisnis dan indikator kinerja yang relevan.",
      "Catat baseline dan tetapkan cara pengukuran.",
      "Pantau pelaksanaan dan dokumentasikan hasil secara konsisten.",
      "Tinjau hasil bersama dan susun prioritas perbaikan.",
    ],
  },
  "keamanan-kepatuhan": {
    title: "Keamanan & Kepatuhan",
    eyebrow: "Kepercayaan dibangun dengan tata kelola",
    summary:
      "Perhatikan keamanan informasi, pembatasan akses, dan kebutuhan kepatuhan sebagai bagian dari perancangan proses layanan.",
    intro:
      "Keamanan bukan tambahan di akhir implementasi. Setiap kebutuhan memiliki konteks dan kewajiban yang berbeda, karena itu kontrol, akses, dokumentasi, dan prosedur kerja perlu disesuaikan dengan proses serta kebijakan organisasi Anda.",
    icon: Shield,
    accent: "amber",
    benefits: [
      {
        title: "Proses yang terdokumentasi",
        description:
          "Susun panduan operasional dan tanggung jawab agar pelaksanaan lebih konsisten dan dapat ditinjau.",
      },
      {
        title: "Akses sesuai kebutuhan",
        description:
          "Pertimbangkan peran, otorisasi, dan penanganan informasi dalam alur kerja yang digunakan.",
      },
      {
        title: "Kesiapan evaluasi",
        description:
          "Bangun kebiasaan pencatatan dan peninjauan untuk membantu evaluasi kontrol serta proses.",
      },
    ],
    process: [
      "Pahami data, proses, dan persyaratan yang berlaku untuk organisasi Anda.",
      "Identifikasi peran, risiko, dan titik kontrol dalam layanan.",
      "Dokumentasikan prosedur, akses, dan tanggung jawab operasional.",
      "Tinjau penerapan kontrol secara berkala bersama pemangku kepentingan.",
    ],
  },
} as const;

type AdvantageSlug = keyof typeof ADVANTAGES;

export function generateStaticParams() {
  return Object.keys(ADVANTAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!Object.hasOwn(ADVANTAGES, slug)) return {};
  const advantage = ADVANTAGES[slug as AdvantageSlug];
  return {
    title: `${advantage.title} | Prima Services`,
    description: advantage.summary,
  };
}

export default async function AdvantageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!Object.hasOwn(ADVANTAGES, slug)) notFound();

  const advantage = ADVANTAGES[slug as AdvantageSlug];
  const Icon = advantage.icon;

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Home
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                {advantage.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                {advantage.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {advantage.summary}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition-colors hover:bg-indigo-700"
              >
                Diskusikan Kebutuhan Anda
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex min-h-52 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-sky-50">
              <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-indigo-100 bg-white text-indigo-600 shadow-lg shadow-indigo-900/5">
                <Icon className="h-14 w-14" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
              Pendekatan kami
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Solusi yang berangkat dari kebutuhan bisnis
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{advantage.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {advantage.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <h3 className="mt-4 font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">Bagaimana kami bekerja</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {advantage.process.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="self-center text-sm leading-6 text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Mari rancang pendekatan yang tepat
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Ceritakan kebutuhan dan tujuan Anda kepada tim Prima Services.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-indigo-50"
          >
            Hubungi Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}

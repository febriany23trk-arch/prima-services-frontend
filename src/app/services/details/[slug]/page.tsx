import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  LineChart,
  Puzzle,
  ShieldCheck,
  UserRoundSearch,
} from "lucide-react";

function SalaryBenchmarkIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function RegionalTalentIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1.5a2.5 2.5 0 002.5 2.5h.5a2 2 0 012 2v.5h.5a2 2 0 002-2v-1.5a2.5 2.5 0 00-2.5-2.5H18a2 2 0 01-2-2v-.5H14a2 2 0 00-2-2V4.5A2.5 2.5 0 009.5 2H9a2 2 0 00-2 2v.5" />
    </svg>
  );
}

function PassiveTalentIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function TalentDashboardIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  );
}

const SERVICE_DETAILS = {
  "cx-contact-center": {
    title: "CX | Contact Center (Customer Service)",
    category: "Customer Experience",
    summary:
      "Dukungan pelanggan yang dirancang untuk menjawab kebutuhan pelanggan secara konsisten melalui proses layanan yang terukur.",
    introduction:
      "Prima Services membantu merancang dan menjalankan layanan contact center dari pemetaan customer journey hingga pengendalian mutu. Cakupan kanal, jam layanan, volume, dan target layanan disesuaikan dengan kebutuhan bisnis Anda.",
    icon: UserRoundSearch,
    imageSrc: "/images/icon1.png",
    benefits: [
      "Pemetaan customer journey, kebutuhan pelanggan, dan alur eskalasi.",
      "Panduan percakapan dan basis pengetahuan yang relevan.",
      "Pemantauan kualitas serta tinjauan laporan secara berkala.",
    ],
    steps: [
      "Petakan pertanyaan, kanal, volume, dan standar layanan.",
      "Susun skrip, panduan kerja, dan jalur eskalasi.",
      "Jalankan layanan dan tinjau kualitas interaksi.",
      "Gunakan laporan untuk menyempurnakan pengalaman pelanggan.",
    ],
  },
  "sales-telesales": {
    title: "Sales Telesales",
    category: "Sales Support",
    summary:
      "Dukungan komunikasi penjualan yang terarah, terdokumentasi, dan terus disempurnakan berdasarkan respons prospek.",
    introduction:
      "Tim telesales membantu bisnis menjangkau prospek melalui pendekatan yang disesuaikan dengan segmen dan tujuan kampanye. Aktivitas, hasil kontak, dan tindak lanjut dicatat agar tim dapat mengevaluasi pesan dan prioritas berikutnya.",
    icon: UserRoundSearch,
    imageSrc: "/images/icon2.png",
    benefits: [
      "Segmentasi daftar prospek dan penyusunan prioritas outreach.",
      "Skrip komunikasi yang menyesuaikan produk serta kebutuhan target.",
      "Pencatatan hasil kontak dan tindak lanjut yang konsisten.",
    ],
    steps: [
      "Sepakati sasaran kampanye, segmen, dan kriteria prospek.",
      "Siapkan pesan, materi, serta panduan pencatatan interaksi.",
      "Lakukan outreach dan dokumentasikan respons prospek.",
      "Tinjau hasil serta optimalkan pesan dan target kampanye.",
    ],
  },
  collection: {
    title: "Collection & Payment Follow-up",
    category: "Payment Support",
    summary:
      "Pengelolaan pengingat dan tindak lanjut pembayaran dengan segmentasi, komunikasi profesional, serta pencatatan yang jelas.",
    introduction:
      "Layanan collection membantu mengatur proses komunikasi terkait pembayaran sesuai kebijakan dan arahan bisnis Anda. Pendekatan disesuaikan dengan segmentasi akun, status tindak lanjut, dan standar komunikasi yang disepakati.",
    icon: ClipboardCheck,
    imageSrc: "/images/icon3.png",
    benefits: [
      "Pengelompokan akun dan prioritas tindak lanjut.",
      "Panduan komunikasi yang konsisten dan profesional.",
      "Pencatatan hasil komunikasi serta status tindak lanjut.",
    ],
    steps: [
      "Tinjau data akun dan kebijakan komunikasi yang berlaku.",
      "Kelompokkan prioritas berdasarkan status dan kebutuhan tindak lanjut.",
      "Lakukan pengingat dan catat hasil interaksi.",
      "Laporkan perkembangan untuk membantu evaluasi proses pembayaran.",
    ],
  },
  "kyc-verification": {
    title: "KYC Verification",
    category: "Verification Operations",
    summary:
      "Dukungan pemeriksaan data dan dokumen dengan tahapan verifikasi yang terdokumentasi sesuai prosedur bisnis.",
    introduction:
      "Proses KYC yang jelas membantu tim menangani pemeriksaan data secara terstruktur. Ruang lingkup, jenis dokumen, aturan eskalasi, dan kontrol akses disesuaikan dengan persyaratan serta kebijakan organisasi Anda.",
    icon: ShieldCheck,
    imageSrc: "/images/icon4.png",
    benefits: [
      "Daftar periksa dan tahapan pemeriksaan yang konsisten.",
      "Pencatatan status, klarifikasi, dan eskalasi.",
      "Penanganan informasi mengikuti kontrol akses yang disepakati.",
    ],
    steps: [
      "Tentukan data dan dokumen yang perlu diperiksa.",
      "Susun kriteria pemeriksaan dan jalur klarifikasi.",
      "Catat hasil verifikasi sesuai prosedur yang berlaku.",
      "Eskalasi pengecualian dan siapkan laporan proses.",
    ],
  },
  "recruitment-headhunter": {
    title: "Recruitment & Headhunter",
    category: "Talent Acquisition",
    summary:
      "Pencarian kandidat dari tingkat staf hingga eksekutif melalui proses seleksi yang diselaraskan dengan kebutuhan peran.",
    introduction:
      "Tim recruitment membantu organisasi menyusun kebutuhan posisi, mencari kandidat melalui jaringan yang relevan, dan mengelola tahapan seleksi. Pendekatan dapat mencakup recruitment process outsourcing, talent mapping, staffing kontrak, hingga pencarian talenta teknis.",
    icon: UserRoundSearch,
    imageSrc: "/images/talent-mapping.png",
    benefits: [
      "Penyelarasan kriteria kandidat dengan kebutuhan dan budaya organisasi.",
      "Pemetaan talenta dan pencarian kandidat berdasarkan peran.",
      "Koordinasi shortlist dan tahapan seleksi secara terstruktur.",
    ],
    steps: [
      "Tentukan profil posisi, kualifikasi, dan prioritas rekrutmen.",
      "Petakan pasar talenta dan sumber kandidat yang sesuai.",
      "Lakukan pencarian, penyaringan, dan koordinasi kandidat.",
      "Sampaikan shortlist dan dukung proses seleksi berikutnya.",
    ],
  },
  "outsourcing-solution": {
    title: "Outsourcing Solution",
    category: "Workforce Operations",
    summary:
      "Dukungan pengelolaan tenaga kerja dan tim operasional yang disesuaikan dengan kebutuhan serta model kerja bisnis Anda.",
    introduction:
      "Layanan outsourcing membantu bisnis mengatur kebutuhan operasional melalui tim yang dikelola dengan ruang lingkup, tanggung jawab, dan proses kerja yang disepakati. Dukungan dapat mencakup pengelolaan tim on-site, remote, maupun virtual.",
    icon: UserRoundSearch,
    imageSrc: "/images/contract-payroll.png",
    benefits: [
      "Model tim yang dapat disesuaikan dengan cakupan pekerjaan.",
      "Koordinasi operasional dan pemantauan pelaksanaan.",
      "Proses kerja dan tanggung jawab yang didefinisikan dengan jelas.",
    ],
    steps: [
      "Petakan fungsi, kapasitas, dan lokasi kerja yang dibutuhkan.",
      "Sepakati struktur tim, tanggung jawab, dan standar operasional.",
      "Siapkan proses onboarding dan koordinasi harian.",
      "Pantau pelaksanaan dan evaluasi kebutuhan kapasitas.",
    ],
  },
  "global-relations-business-support": {
    title: "Global Relations & Business Support",
    category: "Global Business Support",
    summary:
      "Dukungan riset, konsultasi, dan pengembangan relasi untuk membantu bisnis memahami peluang lintas negara.",
    introduction:
      "Ekspansi lintas negara memerlukan pemahaman konteks pasar dan mitra lokal. Prima Services mendukung proses awal melalui riset, market-entry advisory, business matching, dan koordinasi kolaborasi sesuai kebutuhan bisnis.",
    icon: LineChart,
    imageSrc: "/images/technical-talent.png",
    benefits: [
      "Riset pasar dan masukan untuk strategi lokalisasi.",
      "Identifikasi peluang kolaborasi serta mitra yang relevan.",
      "Dukungan koordinasi untuk perencanaan ekspansi.",
    ],
    steps: [
      "Tentukan tujuan ekspansi, pasar sasaran, dan kebutuhan informasi.",
      "Kumpulkan insight pasar dan faktor lokalisasi.",
      "Identifikasi peluang business matching dan kolaborasi.",
      "Susun rekomendasi tindak lanjut bersama pemangku kepentingan.",
    ],
  },
  "salary-benchmark-data": {
    title: "Benchmark & Salary Data",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Insight kompensasi dan benchmark gaji untuk membantu organisasi menyusun anggaran serta strategi rekrutmen yang lebih terarah.",
    introduction:
      "Data kompensasi yang relevan membantu organisasi memahami posisi penawaran terhadap pasar. Prima Services dapat membantu merangkum kebutuhan peran, senioritas, dan lokasi menjadi bahan pertimbangan untuk perencanaan tenaga kerja. Ketersediaan dan cakupan data disepakati sesuai kebutuhan proyek.",
    icon: SalaryBenchmarkIcon,
    benefits: [
      "Perbandingan kompensasi berdasarkan peran, senioritas, dan lokasi yang ditentukan.",
      "Bahan untuk meninjau rentang gaji dan rencana anggaran tenaga kerja.",
      "Insight yang disajikan secara terstruktur untuk mendukung keputusan rekrutmen.",
    ],
    steps: [
      "Tentukan peran, lokasi, senioritas, dan kebutuhan pembanding.",
      "Sepakati sumber, cakupan, dan format analisis data.",
      "Susun ringkasan benchmark beserta konteks dan asumsi yang digunakan.",
      "Tinjau temuan dan bahas implikasinya bagi rencana tenaga kerja.",
    ],
  },
  "regional-talent-insights": {
    title: "Insights Across Regions",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Analisis ketersediaan talenta lintas wilayah untuk membantu menentukan lokasi pencarian dan pendekatan pemenuhan kebutuhan tenaga kerja.",
    introduction:
      "Kondisi pasar tenaga kerja dapat berbeda antarwilayah. Analisis regional membantu tim memahami persebaran kandidat, ketersediaan keahlian, dan faktor lokal yang perlu dipertimbangkan sebelum menyusun strategi pencarian talenta.",
    icon: RegionalTalentIcon,
    benefits: [
      "Gambaran ketersediaan kandidat berdasarkan wilayah dan keahlian.",
      "Pertimbangan lokal untuk menentukan prioritas lokasi pencarian.",
      "Dasar diskusi strategi rekrutmen untuk kebutuhan lintas wilayah.",
    ],
    steps: [
      "Tentukan posisi, keahlian, serta wilayah yang ingin dianalisis.",
      "Kumpulkan dan kelompokkan informasi pasar yang relevan.",
      "Bandingkan pola ketersediaan talenta antarwilayah.",
      "Rangkum insight dan rekomendasi untuk perencanaan pencarian.",
    ],
  },
  "passive-talent-mapping": {
    title: "Passive Talent Mapping",
    category: "Talent Acquisition",
    summary:
      "Pemetaan kandidat potensial yang belum aktif mencari pekerjaan untuk mendukung pencarian talenta bagi kebutuhan peran tertentu.",
    introduction:
      "Untuk posisi dengan kriteria khusus, kandidat yang sesuai belum tentu sedang melamar pekerjaan. Talent mapping membantu mengidentifikasi profil talenta yang relevan, memahami latar belakang dan kecocokan awalnya, serta menyiapkan pendekatan yang profesional apabila pencarian kandidat dimulai.",
    icon: PassiveTalentIcon,
    benefits: [
      "Pemetaan kandidat berdasarkan kriteria dan kompetensi peran.",
      "Pemahaman awal tentang ketersediaan serta lanskap talenta sasaran.",
      "Daftar kandidat potensial untuk mendukung perencanaan rekrutmen.",
    ],
    steps: [
      "Susun profil posisi, kriteria wajib, dan kriteria tambahan.",
      "Petakan lanskap talenta dan identifikasi profil yang relevan.",
      "Tinjau kecocokan kandidat berdasarkan informasi yang tersedia.",
      "Sampaikan hasil pemetaan serta opsi tindak lanjut pencarian.",
    ],
  },
  "talent-reports-dashboards": {
    title: "Talent Reports & Dashboards",
    category: "Talent Analytics",
    summary:
      "Visualisasi laporan dan indikator rekrutmen untuk membantu tim memantau perkembangan pencarian talenta dan menyusun tindak lanjut.",
    introduction:
      "Laporan yang dirancang berdasarkan pertanyaan bisnis membantu tim melihat perkembangan proses tanpa harus mengolah banyak data secara manual. Dashboard dapat merangkum indikator yang disepakati, seperti alur kandidat, status pencarian, dan ringkasan aktivitas.",
    icon: TalentDashboardIcon,
    benefits: [
      "Ringkasan progres pencarian dan tahapan kandidat dalam satu tampilan.",
      "Indikator yang diselaraskan dengan kebutuhan pemantauan tim.",
      "Informasi terstruktur untuk membantu evaluasi dan prioritas tindak lanjut.",
    ],
    steps: [
      "Tentukan pengguna laporan dan keputusan yang perlu didukung.",
      "Sepakati indikator, definisi, sumber data, dan frekuensi pembaruan.",
      "Susun tampilan laporan atau dashboard sesuai alur kerja pengguna.",
      "Tinjau kegunaan dan sesuaikan indikator berdasarkan masukan.",
    ],
  },
  "sop-operasional": {
    title: "Short SOPs per Function",
    category: "Operational Governance",
    summary:
      "Panduan operasional ringkas per fungsi agar prosedur kerja mudah dipahami, dijalankan, dan ditinjau.",
    introduction:
      "SOP yang jelas membantu tim memahami urutan kerja, tanggung jawab, dan standar hasil. Materi disusun sesuai konteks fungsi dan dapat ditinjau kembali ketika proses atau kebutuhan layanan berubah.",
    icon: Puzzle,
    benefits: [
      "Langkah kerja dan tanggung jawab yang lebih mudah dipahami.",
      "Standar operasional yang konsisten lintas anggota tim.",
      "Dokumentasi yang dapat menjadi dasar onboarding dan evaluasi.",
    ],
    steps: [
      "Petakan alur kerja dan tanggung jawab setiap fungsi.",
      "Identifikasi titik keputusan, pengecualian, dan eskalasi.",
      "Dokumentasikan prosedur dalam format ringkas.",
      "Tinjau bersama pengguna dan perbarui saat proses berubah.",
    ],
  },
  "quality-assurance-coaching": {
    title: "QA Scorecards & Coaching",
    category: "Quality Assurance",
    summary:
      "Kerangka penilaian dan umpan balik berkala untuk mendukung konsistensi kualitas serta pengembangan tim.",
    introduction:
      "Scorecard QA membantu organisasi mengevaluasi proses berdasarkan kriteria yang disepakati. Hasil evaluasi dapat menjadi dasar sesi coaching, identifikasi kebutuhan pelatihan, dan tindak lanjut perbaikan.",
    icon: Handshake,
    benefits: [
      "Kriteria penilaian yang selaras dengan standar layanan.",
      "Umpan balik berbasis observasi dan contoh konkret.",
      "Tindak lanjut coaching yang terdokumentasi.",
    ],
    steps: [
      "Sepakati standar kualitas dan bobot penilaian.",
      "Susun scorecard dan panduan evaluasi.",
      "Lakukan peninjauan sampel kerja dan dokumentasikan temuan.",
      "Sampaikan coaching serta pantau tindak lanjutnya.",
    ],
  },
  "dashboard-real-time": {
    title: "Real-time Dashboards",
    category: "Performance Monitoring",
    summary:
      "Ringkasan metrik operasional untuk membantu tim memahami tren, memantau layanan, dan mengambil keputusan berbasis data.",
    introduction:
      "Dashboard yang relevan dimulai dari indikator yang jelas. Kami membantu menyelaraskan kebutuhan pemantauan dengan sumber data yang tersedia, kemudian menampilkan informasi untuk mendukung diskusi kinerja dan tindak lanjut.",
    icon: LineChart,
    benefits: [
      "Tampilan indikator yang selaras dengan kebutuhan operasional.",
      "Pemantauan tren untuk membantu mengenali perubahan kinerja.",
      "Landasan data untuk evaluasi dan prioritas perbaikan.",
    ],
    steps: [
      "Tentukan keputusan yang perlu didukung oleh dashboard.",
      "Pilih metrik, definisi, sumber data, dan frekuensi pembaruan.",
      "Susun tampilan yang mudah dipahami oleh pengguna.",
      "Tinjau kegunaan dashboard dan sesuaikan indikator bila diperlukan.",
    ],
  },
} as const;

type ServiceSlug = keyof typeof SERVICE_DETAILS;

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!Object.hasOwn(SERVICE_DETAILS, slug)) return {};
  const service = SERVICE_DETAILS[slug as ServiceSlug];
  return {
    title: `${service.title} | Prima Services`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!Object.hasOwn(SERVICE_DETAILS, slug)) notFound();

  const service = SERVICE_DETAILS[slug as ServiceSlug];
  const Icon = service.icon;
  const imageSrc = "imageSrc" in service ? service.imageSrc : undefined;

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Home
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {service.category}
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {service.summary}
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
              {imageSrc ? (
                <div className="relative h-36 w-36">
                  <Image
                    src={imageSrc}
                    alt={service.title}
                    fill
                    sizes="144px"
                    unoptimized
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-blue-100 bg-white text-blue-700 shadow-lg shadow-blue-900/5">
                  <Icon className="h-14 w-14" strokeWidth={1.6} />
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Tentang layanan
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Pendekatan yang disesuaikan dengan kebutuhan Anda
            </h2>
            <p className="mt-4 leading-7 text-slate-600">{service.introduction}</p>
          </div>
          <div className="grid gap-4">
            {service.benefits.map((benefit) => (
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
            {service.steps.map((step, index) => (
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
            <h2 className="text-xl font-bold sm:text-2xl">
              Diskusikan kebutuhan layanan Anda
            </h2>
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

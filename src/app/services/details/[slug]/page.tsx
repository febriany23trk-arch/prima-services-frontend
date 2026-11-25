import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { translateText } from "@/lib/translations";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Lightbulb,
  LineChart,
  MapPin,
  Puzzle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRoundSearch,
  Zap,
} from "lucide-react";

// Import komponen animasi scroll & scroll-to-top
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";

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
  "market-benchmarks": {
    title: "Market Benchmarks",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Evaluasi komprehensif standar kompetensi, tingkat ketersediaan kandidat, struktur organisasi kompetitor, serta tolok ukur rekrutmen industri terkini untuk menjaga daya saing akuisisi talenta perusahaan Anda.",
    introduction:
      "Di PT Teknoloka Prima Service, layanan Market Benchmarks dirancang untuk memberikan gambaran objektif mengenai posisi perusahaan Anda di tengah persaingan pasar tenaga kerja. Kami menggali data mendalam terkait standar kualifikasi teknis, pengalaman rata-rata kandidat pada level jabatan serupa, kecepatan perputaran talenta (turnover rate), hingga praktik terbaik yang diterapkan oleh perusahaan terkemuka di sektor industri Anda. Dengan wawasan tolok ukur yang akurat, tim HR dan manajemen dapat menyusun persyaratan rekrutmen yang realistis sekaligus meningkatkan daya tarik penawaran kerja.",
    icon: BarChart3,
    benefits: [
      "Industry Talent Supply & Demand Analysis: Evaluasi menyeluruh atas rasio ketersediaan kandidat aktif maupun pasif terhadap tingkat permintaan pasar pada sektor industri spesifik.",
      "Competency & Qualification Benchmarking: Pembandingan standar kualifikasi teknis, latar belakang pendidikan, pengalaman kerja, serta sertifikasi profesional yang umum dimiliki talenta di perusahaan pembanding.",
      "Emerging Skills & Role Evolution Tracking: Identifikasi pergeseran kebutuhan keahlian baru (emerging skills) dan standar kompetensi masa depan agar kriteria rekrutmen tetap relevan dengan perkembangan industri.",
      "Employer Value Proposition (EVP) Alignment: Rekomendasi strategis mengenai faktor non-finansial, budaya kerja, dan daya tarik karier yang paling memengaruhi keputusan kandidat terbaik dalam memilih perusahaan.",
    ],
    steps: [
      "Scope & Peer Group Definition: Menentukan daftar posisi kunci, level senioritas, cakupan industri, serta kelompok perusahaan pembanding (peer group) yang paling relevan dengan bisnis Anda.",
      "Multi-Source Market Intelligence Gathering: Mengumpulkan dan memvalidasi data pasar dari jaringan industri, basis data talenta terkurasi, serta tren perekrutan terkini secara terstruktur.",
      "Gap & Competitiveness Analysis: Membandingkan kriteria kualifikasi internal, alur seleksi, dan daya tarik posisi perusahaan Anda terhadap tolok ukur pasar yang telah dipetakan.",
      "Strategic Hiring Recommendation: Menyusun laporan analisis lengkap beserta rekomendasi penyesuaian kualifikasi peran dan strategi rekrutmen untuk mempercepat pemenuhan posisi.",
    ],
  },
  "location-insights": {
    title: "Location Insights",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Pemetaan mendalam konsentrasi talenta, ekosistem keahlian lokal, dan analisis potensi pasar tenaga kerja di berbagai wilayah strategis guna mendukung ekspansi maupun optimalisasi operasional bisnis.",
    introduction:
      "Keberhasilan ekspansi operasional, pembukaan kantor cabang baru, maupun pembentukan pusat layanan terpusat sangat bergantung pada kesiapan ekosistem SDM di wilayah tujuan. PT Teknoloka Prima Service menyajikan riset geografis yang menganalisis kepadatan populasi talenta berdasarkan keahlian spesifik, tingkat persaingan perekrutan antarperusahaan lokal, preferensi mobilitas kandidat, hingga dinamika biaya tenaga kerja di berbagai kota dan kawasan industri.",
    icon: MapPin,
    benefits: [
      "Geographic Talent Density Mapping: Pemetaan akurat mengenai sebaran dan konsentrasi talenta berkualitas berdasarkan kota, provinsi, maupun kawasan industri strategis.",
      "Expansion & Site Selection Readiness: Analisis kelayakan pasokan SDM lokal untuk mendukung keputusan pembukaan kantor cabang baru, fasilitas operasional, atau pusat layanan (hub).",
      "Regional Competition & Cost Comparison: Perbandingan tingkat kejenuhan pasar tenaga kerja, ekspektasi biaya SDM, dan intensitas persaingan antarperusahaan di berbagai wilayah.",
      "Work Model & Mobility Insights: Pemahaman mendalam terkait preferensi kandidat lokal terhadap skema kerja on-site, hybrid, remote, maupun kesiapan relokasi antarkota.",
    ],
    steps: [
      "Target Region & Workforce Profiling: Menetapkan daftar kota atau wilayah tujuan ekspansi beserta profil keahlian dan jumlah kebutuhan tenaga kerja yang direncanakan.",
      "Regional Talent Pool & Ecosystem Mapping: Memetakan populasi talenta relevan, institusi pendidikan pendukung, serta keberadaan perusahaan sejenis di masing-masing lokasi.",
      "Cross-Location Comparative Evaluation: Mengevaluasi kemudahan rekrutmen, tingkat persaingan talenta, dan efisiensi biaya operasional SDM antarwilayah secara objektif.",
      "Location Feasibility & Sourcing Roadmap: Menyampaikan laporan kelayakan wilayah lengkap dengan rekomendasi prioritas lokasi dan strategi pendekatan kandidat lokal.",
    ],
  },
  "role-coverage": {
    title: "Role Coverage",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Cakupan pemetaan talenta aktif maupun pasif secara menyeluruh di lintas fungsi industri dan jenjang organisasi, mulai dari tenaga ahli spesialis, manajerial, hingga jajaran eksekutif C-Level.",
    introduction:
      "Untuk posisi strategis dengan spesifikasi keahlian yang langka, kandidat terbaik sering kali tidak sedang aktif melamar pekerjaan melalui kanal publik. Layanan Role Coverage dari PT Teknoloka Prima Service memetakan lanskap struktur organisasi dan talenta berkinerja tinggi di berbagai fungsi bisnis. Kami mengidentifikasi, mengklasifikasikan, dan mengevaluasi profil kandidat potensial secara sistematis untuk membangun talent pipeline jangka pendek maupun suksesi kepemimpinan jangka panjang.",
    icon: Briefcase,
    benefits: [
      "Cross-Functional & Multi-Level Coverage: Cakupan pemetaan yang luas meliputi fungsi Teknologi Informasi, Keuangan, Operasional, Komersial, hingga posisi kepemimpinan senior dan C-Level.",
      "Passive High-Performer Identification: Menjangkau dan memetakan talenta pasif berprestasi di industri relevan yang sulit ditemukan melalui metode iklan lowongan konvensional.",
      "Organizational Structure & Competitor Mapping: Gambaran jelas mengenai susunan peran, jalur pelaporan, dan distribusi tanggung jawab pada fungsi serupa di perusahaan pembanding.",
      "Ready-to-Engage Talent Pipeline: Penyusunan basis data kandidat terkurasi yang siap dihubungi secara profesional kapan pun kebutuhan rekrutmen atau suksesi dibuka.",
    ],
    steps: [
      "Role Blueprint & Target Company Alignment: Menyepakati spesifikasi kompetensi inti, pengalaman industri, serta daftar perusahaan target yang menjadi fokus pemetaan.",
      "Exhaustive Talent Landscape Mapping: Melakukan penelusuran dan identifikasi terstruktur terhadap kandidat aktif maupun pasif yang memenuhi kriteria posisi.",
      "Profile Verification & Preliminary Screening: Memvalidasi rekam jejak karier, ruang lingkup tanggung jawab, serta kesesuaian profil kandidat dengan budaya organisasi Anda.",
      "Talent Map Delivery & Engagement Strategy: Menyerahkan dokumen pemetaan talenta terstruktur disertai ringkasan profil dan rekomendasi pendekatan rekrutmen.",
    ],
  },
  "compensation-trends": {
    title: "Compensation Trends",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Analisis komprehensif struktur gaji pokok, skema insentif, tunjangan, dan tren paket remunerasi pasar terkini untuk menyusun penawaran yang kompetitif sekaligus menjaga efisiensi anggaran SDM.",
    introduction:
      "Menetapkan paket kompensasi yang tepat merupakan kunci utama dalam memenangkan kandidat terbaik sekaligus mempertahankan karyawan kunci agar tidak berpindah ke kompetitor. PT Teknoloka Prima Service mengumpulkan dan menganalisis data remunerasi aktual di pasar berdasarkan level jabatan, spesialisasi keahlian, skala perusahaan, serta lokasi kerja guna membantu Anda merancang struktur penggajian yang adil, transparan, dan berkelanjutan.",
    icon: TrendingUp,
    benefits: [
      "Granular Salary Range Benchmarking: Penyajian data rentang gaji aktual (persentil 25, median, hingga persentil 75) yang dikelompokkan berdasarkan jabatan, senioritas, dan industri.",
      "Total Rewards & Benefits Structure Analysis: Pemetaan komponen kompensasi menyeluruh mencakup tunjangan tetap, bonus kinerja, insentif penjualan, hingga fasilitas kesehatan dan fleksibilitas kerja.",
      "Budget Optimization & Offer Competitiveness: Penyelarasan anggaran rekrutmen agar penawaran kerja mampu bersaing di pasar tanpa menimbulkan ketimpangan struktur gaji internal.",
      "Annual Increment & Retention Insights: Wawasan mengenai proyeksi kenaikan gaji tahunan dan faktor remunerasi yang paling berpengaruh terhadap tingkat retensi talenta kunci.",
    ],
    steps: [
      "Job Grading & Position Alignment: Mengidentifikasi daftar posisi, kesetaraan level jabatan (job grading), dan wilayah operasional yang akan dianalisis.",
      "Market Remuneration Data Collection: Menghimpun dan memverifikasi data paket gaji serta tunjangan terkini dari sampel industri dan skala bisnis yang sebanding.",
      "Internal vs. Market Equity Assessment: Menganalisis selisih struktur kompensasi perusahaan Anda terhadap pergerakan harga pasar untuk mendeteksi potensi risiko retensi.",
      "Compensation Strategy & Budget Guidance: Memberikan rekomendasi rentang penawaran gaji dan penyempurnaan paket benefit yang terukur serta siap diterapkan.",
    ],
  },
  "data-driven-decisions": {
    title: "Data-Driven Decisions",
    category: "Talent Mapping & Market Intelligence",
    summary:
      "Penyajian laporan analitik mendalam dan dashboard intelijen pasar yang akurat untuk mendukung perencanaan tenaga kerja strategis, suksesi kepemimpinan, serta pengambilan keputusan rekrutmen berbasis bukti.",
    introduction:
      "Data pasar talenta hanya memberikan nilai maksimal apabila diolah menjadi wawasan yang mudah dipahami dan dapat langsung ditindaklanjuti. PT Teknoloka Prima Service mengintegrasikan temuan ketersediaan talenta, sebaran geografis, dan tren kompensasi ke dalam laporan eksekutif dan dashboard visual yang interaktif. Solusi ini membantu pimpinan perusahaan dan tim HR mengambil keputusan bisnis secara cepat, objektif, dan terukur.",
    icon: Lightbulb,
    benefits: [
      "Executive-Ready Market Intelligence Reports: Laporan riset pasar talenta yang komprehensif, terstruktur, dan disesuaikan secara khusus dengan tantangan strategis perusahaan Anda.",
      "Interactive Visual Dashboards: Penyajian metrik utama dalam format visual yang intuitif untuk memudahkan evaluasi cepat oleh jajaran direksi maupun pemangku kepentingan.",
      "Strategic Workforce & Succession Planning: Landasan data yang kuat untuk merencanakan kebutuhan rekrutmen jangka panjang, pengembangan kapabilitas internal, dan suksesi posisi kunci.",
      "Faster Time-to-Hire & Risk Reduction: Mengurangi ketidakpastian dalam proses rekrutmen serta menekan risiko kegagalan perekrutan melalui validasi kondisi pasar sejak tahap awal.",
    ],
    steps: [
      "Business Objective & KPI Formulation: Merumuskan pertanyaan strategis bisnis serta indikator keputusan SDM yang paling krusial untuk dijawab melalui riset.",
      "Multi-Dimensional Data Synthesis: Mengintegrasikan data pemetaan talenta, analisis lokasi, dan tolok ukur kompensasi ke dalam satu kerangka analisis terpadu.",
      "Analytical Reporting & Dashboard Design: Menyusun narasi insight strategis beserta visualisasi data yang jelas, akurat, dan mudah dipresentasikan.",
      "Executive Briefing & Action Planning: Melakukan sesi pemaparan temuan bersama manajemen untuk merumuskan langkah eksekusi rekrutmen yang paling efektif.",
    ],
  },
  "cx-contact-center": {
    title: "CX | Contact Center (Customer Service)",
    category: "Customer Experience Operations",
    summary:
      "Operational Excellence, Elevating CX. Solusi terkelola Contact Center omni-channel secara komprehensif untuk menciptakan interaksi pelanggan yang unggul, efisien, dan berdampak bagi reputasi bisnis Anda.",
    introduction:
      "Di PT Teknoloka Prima Service, kami mengintegrasikan talenta berstandar tinggi, infrastruktur omni-channel canggih, serta analitik mendalam untuk mengelola seluruh ekosistem layanan pelanggan Anda. Mulai dari operasional harian, kontrol kualitas (QA), hingga strategi retensi pelanggan, kami memastikan setiap interaksi menjadi nilai tambah bagi pertumbuhan bisnis.",
    icon: UserRoundSearch,
    imageSrc: "/images/icon1.png",
    benefits: [
      "Omni-Channel Integration: Pengelolaan terpadu lintas kanal komunikasi (Inbound/Outbound Call, Live Chat, Email, WhatsApp Business, & Social Media).",
      "End-to-End Managed Operations: Penanganan operasional lengkap meliputi perekrutan agen, pelatihan berkala, pengelolaan jam kerja (shift), hingga supervisi harian.",
      "Quality Assurance & Coaching: Audit kualitas interaksi secara teratur dan sesi pembinaan berkelanjutan untuk menjaga standar CSAT & SLA tetap optimal.",
      "Performance Analytics & Reporting: Visualisasi metrik operasional terukur (FCR, ART, SLA, CSAT) serta insight analitis untuk penyempurnaan proses bisnis secara kontinu.",
    ],
    steps: [
      "Discovery & Scope Definition: Analisis mendalam atas kebutuhan pelanggan, pemetaan kanal komunikasi, target SLA, dan penyelarasan standar layanan.",
      "SOP & Knowledge Base Setup: Penyusunan skrip percakapan terstruktur, matriks eskalasi, panduan operasional, dan integrasi basis pengetahuan.",
      "Talent Recruitment & Intensive Training: Seleksi agen layanan pelanggan dan pelatihan intensif mencakup pemahaman produk, budaya layanan, dan penanganan komplain.",
      "System Integration & Trial Run: Uji coba teknis integrasi sistem omni-channel, simulasi penanganan panggilan/pesan, serta validasi alur eskalasi.",
      "Full Operations & QA Monitoring: Peluncuran operasional secara penuh didampingi pemantauan Kualitas Layanan (QA), coaching harian, dan evaluasi laporan kinerja periodik.",
    ],
  },
  "sales-telesales": {
    title: "Sales Telesales",
    category: "Sales Acceleration & Growth",
    summary:
      "Driving Growth, Maximizing Conversions. Layanan Telesales terdedikasi untuk mempercepat akuisisi pelanggan, penetrasi pasar, dan peningkatan konversi penjualan produk atau layanan bisnis Anda.",
    introduction:
      "Tim Telesales PT Teknoloka Prima Service membantu bisnis Anda menjangkau prospek secara terarah melalui pendekatan outbound telesales yang berorientasi pada hasil. Kami memadukan strategi komunikasi persuasif, manajemen pipeline penjualan yang rapi, serta pemantauan metrik secara teratur untuk memastikan setiap aktivitas outreach menghasilkan nilai konversi yang optimal.",
    icon: UserRoundSearch,
    imageSrc: "/images/icon2.png",
    benefits: [
      "Targeted Outreach & Lead Segmentation: Pengelompokan daftar prospek berdasarkan kualifikasi dan prioritas untuk memaksimalkan rasio kontak terhubung.",
      "Persuasive Scripting & Objection Handling: Penyusunan skrip penjualan interaktif yang dirancang untuk menjawab keraguan calon pembeli dan menyoroti keunggulan produk.",
      "End-to-End Pipeline & CRM Management: Pencatatan rinci hasil kontak, jadwal tindak lanjut, serta pembaruan status prospek secara konsisten.",
      "Sales Analytics & Performance Tracking: Evaluasi metrik kinerja penjualan (Contact Rate, Conversion Rate, Deals Closed) untuk optimasi kampanye berkelanjutan.",
    ],
    steps: [
      "Campaign Setup & Objective Alignment: Penentuan sasaran kampanye penjualan, profil target pelanggan (ICP), dan kriteria prospek berkualitas.",
      "Pitching Script & Material Preparation: Penyusunan panduan percakapan, materi penawaran produk, serta kerangka penanganan keberatan prospek.",
      "Lead List Qualification & Allocation: Segmentasi basis data prospek dan pengalokasian kontak ke tim agen telesales terdedikasi.",
      "Outreach Execution & CRM Logging: Pelaksanaan panggilan penjualan, komunikasi penawaran, serta pencatatan respons prospek secara terstruktur.",
      "Review & Campaign Optimization: Analisis berkala atas hasil penjualan, evaluasi efektivitas pesan, dan penyempurnaan strategi outreach.",
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
    category: "Verification Operations & Compliance",
    summary:
      "Secure Verification, Seamless Onboarding. Layanan verifikasi data dan identitas pelanggan (KYC) yang aman, cepat, serta patuh regulasi untuk menjamin validitas pengguna dan meminimalkan risiko kecurangan.",
    introduction:
      "Proses KYC (Know Your Customer) yang terstruktur dan responsif membantu perusahaan memvalidasi identitas pelanggan secara akurat. PT Teknoloka Prima Service menyediakan layanan verifikasi dokumen, validasi data pengguna, hingga penanganan kecocokan tingkat lanjut dengan standar keamanan data yang ketat dan prosedur eskalasi yang jelas.",
    icon: ShieldCheck,
    imageSrc: "/images/icon4.png",
    benefits: [
      "Comprehensive Document & Identity Check: Verifikasi menyeluruh atas keabsahan dokumen identitas, foto diri (liveness check), dan kelengkapan data pendaftaran pengguna.",
      "SLA & High Accuracy Standards: Proses verifikasi berkecepatan tinggi dengan tingkat akurasi tinggi untuk meminimalkan durasi antrean onboarding calon pelanggan.",
      "Data Security & Regulatory Compliance: Penanganan informasi sensitif yang tunduk pada protokol keamanan data serta kepatuhan aturan perlindungan data pribadi.",
      "Structured Exception Handling & Escalation: Alur penanganan kasus meragukan atau berisiko tinggi melalui tahapan verifikasi sekunder dan laporan eskalasi.",
    ],
    steps: [
      "Verification Criteria & SLA Setup: Penentuan jenis dokumen, kriteria kelayakan, batasan SLA, serta matriks akses keamanan yang disepakati bersama.",
      "System Integration & Workflow Test: Integrasi alur kerja pemeriksaan data ke dalam platform verifikasi dan pengujian prosedur klarifikasi.",
      "Data Processing & Verification Execution: Pemeriksaan data pendaftaran masuk, pencocokan keabsahan dokumen, dan validasi kelengkapan syarat.",
      "Exception Escalation & Fraud Control: Pengisolasian akun/dokumen yang mencurigakan serta eskalasi ke tim khusus sesuai SOP keamanan.",
      "Reporting & Operations Quality Audit: Penyampaian laporan berkala atas status verifikasi, rasio kelulusan, serta audit kepatuhan proses secara rutin.",
    ],
  },
  "recruitment-headhunter": {
    title: "Recruitment & Headhunter Services",
    category: "Talent Acquisition",
    summary:
      "From Staff to C-Level — Delivering the Right Talent. Find candidates from staff to executive level through a selection process aligned with your role requirements and organizational culture.",
    introduction:
      "At Prima Service, our recruitment division is dedicated to helping your business find and retain top talent efficiently and effectively. From staff-level positions to C-Level executives, we deliver candidates who are not only technically capable but also aligned with your organization's culture, values, and long-term goals.",
    icon: UserRoundSearch,
    imageSrc: "/images/talent-mapping.png",
    benefits: [
      "Expertise: Our recruitment consultants average 15 years of experience and use proven methodologies and international best practices to screen candidates.",
      "Culture Driven & Quality: We ensure candidates are technically capable and aligned with your organization's culture, community, and values.",
      "Time Saving: We accelerate recruitment and significantly reduce time-to-hire through a broad talent database and market intelligence.",
      "Broad Industry & Role Coverage: We cover all position levels, from staff and mid-management to C-Level executives, across multiple industries.",
    ],
    steps: [
      "Job Request: Define role profiles, qualifications, requirements, and recruitment priorities with your team.",
      "Sourcing: Find active and passive candidates through broad databases, talent mapping, and industry networks.",
      "Assessment: Screen candidates through technical or coding tests, competency evaluation, and qualification verification.",
      "Interview: Share a candidate shortlist within a 3–7 business-day SLA and facilitate structured interviews.",
      "Offer: Present job offers, negotiate compensation, and confirm contract requirements.",
      "Onboard: Support onboarding and monitor success during the first 90 days.",
    ],
  },
  "outsourcing-solution": {
    title: "Outsourcing Solution",
    category: "Workforce Operations",
    summary:
      "Operate. Optimize. Outperform. We design, run, and optimize your business processes end-to-end, on-site or remotely, through managed operations, staffing, and global delivery.",
    introduction:
      "At Prima Service, we design, run, and optimize your business processes end-to-end, on-site or remotely. Our services include managed operations, staffing, and global workforce management to improve your company's efficiency and operational excellence.",
    icon: UserRoundSearch,
    imageSrc: "/images/contract-payroll.png",
    benefits: [
      "Employee & Team Outsourcing: Flexible staffing and professional operations teams tailored to your business scale.",
      "Remote Workforce Management: Structured remote workforce management and monitoring to maintain efficiency and productivity.",
      "Virtual Team Setup & Monitoring: Dedicated virtual team setup with real-time operational monitoring.",
      "Cross-Border Compliance & HR Support: HR management, employment legalities, and cross-border labor compliance support.",
    ],
    steps: [
      "Client Need Identification: Identify and map operational functions, capacity, and business-location requirements.",
      "Talent / Team Selection: Qualify and carefully select candidates or operational teams that best fit your needs.",
      "Onboarding & Equipment Setup: Prepare infrastructure, systems, work equipment, and initial team integration.",
      "Live Monitoring & Reporting: Transparent daily operational supervision supported by performance reports and live monitoring.",
      "Monthly Review & Optimization: Monthly reviews to continuously improve process quality, team performance, and cost efficiency.",
    ],
  },
  "employee-team-outsourcing": {
    title: "Employee & Team Outsourcing",
    category: "Workforce Operations",
    summary:
      "Scale rapidly with dedicated teams. Flexible, structured professional workforce solutions to support your business growth.",
    introduction:
      "Prima Services provides integrated staff and team outsourcing tailored to your company's operational needs. We manage recruitment, placement, HR administration, and daily performance monitoring so your internal team can focus on core business strategy.",
    icon: UserRoundSearch,
    imageSrc: "/images/scale-employee.png",
    benefits: [
      "Flexible scalability: Add or adjust personnel to meet changing project demands and business needs.",
      "Full HR and payroll administration: Comprehensive management of payroll, social security, taxes, and employment contracts.",
      "Quality-assured staffing: Candidates are carefully screened and matched to the required technical qualifications.",
      "Operational cost efficiency: Reduce overhead and the administrative complexity of managing an internal workforce.",
    ],
    steps: [
      "Needs and scope mapping: Discuss the required qualifications, team size, and role structure in detail.",
      "Candidate selection and screening: Select and interview top candidates against your business standards.",
      "Contracting and onboarding: Prepare employment agreements, administration, and personnel onboarding.",
      "Deployment and ongoing management: Place team members and provide daily supervision to maintain consistent performance.",
    ],
  },
  "remote-workforce-management": {
    title: "Remote Workforce Management",
    category: "Workforce Operations",
    summary:
      "Global Reach, Seamless Integration. Pengelolaan dan pemantauan tenaga kerja jarak jauh secara terstruktur untuk menjaga efisiensi, kepatuhan, dan produktivitas tim global Anda.",
    introduction:
      "At Prima Services, kami membantu bisnis Anda mengelola tenaga kerja jarak jauh (remote workforce) tanpa hambatan operasional. Kami menyediakan infrastruktur pemantauan, dukungan HR lokal, hingga kepatuhan regulasi lintas negara agar tim remote Anda tetap berkinerja tinggi dan terkoordinasi dengan baik.",
    icon: UserRoundSearch,
    imageSrc: "/images/scale-remote.png",
    benefits: [
      "Structured Time & Task Tracking: Pemantauan kinerja dan produktivitas tim secara transparan dan akurat.",
      "Cross-Border Payroll & Compliance: Pengelolaan penggajian dan kepatuhan hukum ketenagakerjaan di berbagai negara.",
      "Dedicated Communication & Tooling Setup: Integrasi alat kerja dan platform kolaborasi untuk efisiensi komunikasi tim.",
      "Performance Evaluation & QA Loops: Penilaian rutin berkala untuk memastikan hasil kerja sesuai dengan standar SLA perusahaan.",
    ],
    steps: [
      "Remote Setup & Onboarding: Penyiapan sistem, akses kerja, serta proses masuknya tenaga kerja ke dalam ekosistem perusahaan.",
      "Infrastructure & Security Alignment: Penerapan protokol keamanan data dan penyediaan perangkat kerja yang aman.",
      "Daily Operational Monitoring: Pengawasan aktivitas harian, pelaporan progres tugas, dan manajemen kendala.",
      "Monthly Review & Continuous Improvement: Evaluasi kinerja bulanan dan penyempurnaan alur kerja remote secara berkelanjutan.",
    ],
  },
  "virtual-team-setup-monitoring": {
    title: "Virtual Team Setup & Monitoring",
    category: "Workforce Operations",
    summary:
      "Real-time Control & Dedicated Team Setup. Pembentukan tim virtual terdedikasi yang dilengkapi dengan infrastruktur komunikasi dan pemantauan operasional secara langsung.",
    introduction:
      "Layanan pembentukan tim virtual Prima Services memungkinkan bisnis Anda membangun divisi operasional baru tanpa kendala fisik lokasi. Kami membantu mulai dari penyediaan infrastruktur, instalasi perangkat pendukung, hingga implementasi dashboard pemantauan langsung untuk menjamin efisiensi alur kerja.",
    icon: UserRoundSearch,
    imageSrc: "/images/scale-virtual.png",
    benefits: [
      "Dedicated Team Infrastructure: Penyiapan tim yang difokuskan khusus untuk menangani proses operasional bisnis Anda.",
      "Real-Time Activity Monitoring: Akses langsung ke dashboard pemantauan progres dan hasil kerja tim.",
      "Streamlined Workflow Integration: Menyelaraskan alur kerja tim virtual dengan sistem dan alat yang digunakan perusahaan.",
      "Enhanced Security Standards: Protokol akses data yang aman untuk melindungi kerahasian informasi bisnis.",
    ],
    steps: [
      "Virtual Architecture Planning: Perancangan struktur tim virtual, peran, dan spesifikasi teknologi yang digunakan.",
      "Equipment & Access Configuration: Penyiapan perangkat keras, akun akses, serta lingkungan kerja virtual.",
      "Team Alignment & Training: Briefing mendalam mengenai alur operasional, KPI, serta standar kualitas kerja.",
      "Live Operations & QA Audit: Pelaksanaan operasional harian beserta evaluasi berkala atas performa tim.",
    ],
  },
  "cross-border-compliance-hr-support": {
    title: "Cross-Border Compliance & HR Support",
    category: "Workforce Operations",
    summary:
      "100% Compliant Global Expansion. Dukungan manajemen SDM, legalitas ketenagakerjaan, dan kepatuhan hukum lintas batas untuk ekspansi internasional yang aman.",
    introduction:
      "Mengembangkan bisnis ke luar negeri membutuhkan penanganan hukum dan administrasi SDM yang matang. Prima Services memberikan kepastian hukum melalui pengelolaan kontrak kerja, regulasi pajak lokal, serta kepatuhan aturan ketenagakerjaan di negara tujuan agar bisnis Anda beroperasi secara legal dan tanpa risiko.",
    icon: ShieldCheck,
    imageSrc: "/images/scale-compliance.png",
    benefits: [
      "Local Labor Law Expertise: Pemahaman mendalam mengenai hukum ketenagakerjaan dan kebijakan pajak di negara tujuan.",
      "Risk Mitigation: Meminimalkan risiko sanksi hukum atau ketidaksesuaian regulasi dalam kontrak kerja.",
      "Comprehensive HR Administration: Penanganan izin kerja, kompensasi, dan fasilitas pekerja sesuai aturan setempat.",
      "Smooth Expansion Experience: Memfasilitasi ekspansi bisnis tanpa harus mendirikan badan hukum lokal yang kompleks.",
    ],
    steps: [
      "Regulatory Assessment: Analisis regulasi hukum ketenagakerjaan dan pajak di wilayah tujuan ekspansi.",
      "Contract & Policy Framework: Penyusunan draft perjanjian kerja dan kebijakan SDM yang patuh aturan lokal.",
      "Payroll & Benefit Setup: Konfigurasi sistem penggajian, kewajiban pajak, dan skema jaminan pekerja.",
      "Ongoing Audit & Legal Update: Pemantauan perubahan regulasi secara berkala untuk menjamin kepatuhan berkesinambungan.",
    ],
  },
  "global-relations-business-support": {
    title: "Global Relations & Business Support",
    category: "Global Business Support",
    summary:
      "Connecting Opportunities Across Regions. We support your international business expansion by connecting strategic opportunities across Southeast Asia, East Asia, and Europe.",
    introduction:
      "From market entry to strategic partnerships, Prima Services connects your business with the right opportunities across Southeast Asia, East Asia, and Europe. We support smooth, focused, and sustainable global expansion with research, regulatory adaptation, and business matching.",
    icon: LineChart,
    imageSrc: "/images/technical-talent.png",
    benefits: [
      "Business Matching & Partnerships: Connect with vetted potential partners, clients, distributors, and investors across Asian and European markets.",
      "Market Entry Advisory: Get comprehensive guidance on regulations, cultural context, and local business practices for smoother market entry.",
      "Virtual Rep Office & Ops Setup: Establish a local presence through flexible solutions, administrative representation, and regulatory compliance.",
      "Research & Market Insight Capabilities: Access partner networks and in-depth research to support expansion strategy decisions.",
    ],
    steps: [
      "Discovery Call & Business Need: Map initial expansion needs and discuss target markets in a focused consultation.",
      "Market Research & Localization Plan: Conduct in-depth market research, analyze local regulations, and adapt market-entry strategies.",
      "Business Matching & Local Contacts: Connect your company with potential partners, local networks, clients, and distributors.",
      "Virtual Rep Office & Ops Setup: Set up a virtual representative office, operational address, and compliant local administration.",
      "Ongoing Advisory & Monitoring: Provide ongoing consultation, operational monitoring, and business-development reviews.",
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
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;
  const savedLocale = (await cookies()).get("prima-services-locale")?.value;
  const locale = savedLocale === "id" ? "id" : "en";
  const translate = (text: string) => translateText(text, locale);

  if (!Object.hasOwn(SERVICE_DETAILS, slug)) notFound();

  const service = SERVICE_DETAILS[slug as ServiceSlug];
  const Icon = service.icon;
  const imageSrc = "imageSrc" in service ? service.imageSrc : undefined;

  const backConfig: Record<string, { href: string; label: string }> = {
    services: { href: "/services", label: "Back to Services Page" },
    about: { href: "/about", label: "Back to About Page" },
    contact: { href: "/contact", label: "Back to Contact Page" },
    home: { href: "/", label: "Back to Home" },
  };

  const backButton =
    (from && backConfig[from.toLowerCase()]) || backConfig.home;

  return (
    <main className="min-h-screen bg-white px-5 py-10 text-slate-900 sm:px-8 sm:py-16 selection:bg-blue-600 selection:text-white antialiased">
      {/* Memastikan halaman selalu terbuka dari bagian paling atas */}
      <ScrollToTopOnMount />

      <div className="mx-auto max-w-6xl space-y-14">
        
        {/* Navigasi Kembali Dinamis */}
        <ScrollReveal>
          <Link
            href={backButton.href}
            scroll={false}
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200/90 shadow-xs transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:-translate-x-1.5"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 text-blue-600" />
            <span>{translate(backButton.label)}</span>
          </Link>
        </ScrollReveal>

        {/* Hero Header Card */}
        <ScrollReveal delay={0.1}>
          <section className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-slate-100 transition-all duration-500 hover:border-blue-300/80">
            {/* Aksen Hiasan Latar Glow */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/60 to-sky-100/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-100/50 to-indigo-100/30 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 border border-blue-200/80 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
                  <span>{translate(service.category)}</span>
                </div>
                
                <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl leading-[1.12]">
                  {translate(service.title)}
                </h1>
                
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg font-normal max-w-2xl">
                  {translate(service.summary)}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/40"
                  >
                    <span className="relative z-10">{translate("Consult Service")}</span>
                    <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>

              {/* Frame Gambar Utama */}
              <div className="relative flex min-h-[300px] w-full items-center justify-center rounded-[2rem] bg-white border border-slate-200/80 p-6 shadow-xl shadow-slate-100 group transition-all duration-500 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-sky-50/50 rounded-[2rem] pointer-events-none" />
                
                {imageSrc ? (
                  <div className="relative h-full w-full max-w-md min-h-[240px] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.04]">
                    <Image
                      src={imageSrc}
                      alt={translate(service.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      unoptimized
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-blue-50/80 border border-blue-200 text-blue-600 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-16 w-16 stroke-[1.8]" />
                  </div>
                )}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Section Tentang Layanan & Keunggulan */}
        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start pt-4">
          <ScrollReveal delay={0.1}>
            <div className="lg:sticky lg:top-8 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-700 border border-blue-200/80">
                <Zap className="h-3.5 w-3.5 text-blue-600" />
                <span>{translate("About Service")}</span>
              </span>
              <h2 className="text-2xl font-black tracking-tight sm:text-4xl text-slate-900 leading-tight">
                {translate("A Measured Approach for Your Business")}
              </h2>
              <p className="leading-relaxed text-slate-600 text-base font-normal">
                {translate(service.introduction)}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {service.benefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <article className="group relative flex gap-4 rounded-2xl bg-white border border-slate-200/90 p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/80 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-110">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-medium self-center">
                    {translate(benefit)}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Section Tahapan Layanan */}
        <ScrollReveal>
          <section className="rounded-[2.5rem] bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-100 relative overflow-hidden transition-all duration-500 hover:border-blue-300/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/80">
                  {translate("Workflow")}
                </span>
                <h2 className="mt-3 text-2xl font-black sm:text-3xl text-slate-900">{translate("Service Delivery Stages")}</h2>
              </div>
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-xl shadow-2xs">
                {service.steps.length} {translate("Main Steps")}
              </span>
            </div>

            <ol className="grid gap-6 sm:grid-cols-2">
              {service.steps.map((step, index) => (
                <ScrollReveal key={index} delay={0.08 * index}>
                  <li className="group flex gap-4 rounded-2xl bg-white border border-slate-200/90 p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-600 text-sm font-black text-white shadow-md shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="self-center text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                      {translate(step)}
                    </p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </section>
        </ScrollReveal>

        {/* Bottom CTA Card */}
        <ScrollReveal>
          <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 sm:p-12 text-white shadow-2xl border border-slate-900 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center transition-all duration-500 hover:shadow-blue-950/30">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <h2 className="text-2xl font-black sm:text-3xl tracking-tight">
                {translate("Discuss Your Service Needs")}
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                {translate("Contact the Prima Services specialist team to discuss the most efficient operational scope and approach.")}
              </p>
            </div>

            <Link
              href="/contact"
              className="relative z-10 shrink-0 inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-sm font-extrabold text-slate-950 shadow-xl transition-all duration-300 hover:bg-blue-50 hover:scale-105 active:scale-95"
            >
              <span>{translate("Contact Us")}</span>
              <ArrowRight className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </section>
        </ScrollReveal>

      </div>
    </main>
  );
}
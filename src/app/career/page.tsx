"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Copy,
  Check,
  Search,
  ArrowRight,
  ChevronDown,
  X
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

interface Job {
  id: string;
  title: string;
  type: "hr" | "dc" | "fc" | "network";
  region: string;
  badgeBg: string;
  gradient: string;
  subtitle: string;
  description: string;
  bgImageUrl: string;
  focus?: string[];
  qualifications: string[];
  locations: string[];
  hrEmails?: string[];
}

const JOBS: Job[] = [
  {
    id: "hr-senior-jakarta",
    title: "HR Senior",
    type: "hr",
    region: "Jakarta",
    badgeBg: "bg-blue-600 text-white",
    gradient: "from-blue-600 to-indigo-700",
    subtitle: "Siap memimpin strategi HR yang berdampak?",
    description: "Memimpin dan mengelola strategi rekrutmen end-to-end, payroll, kepatuhan ketenagakerjaan, serta hubungan industrial untuk operasional Jakarta.",
    bgImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    focus: [
      "Mengelola proses rekrutmen end-to-end",
      "Menangani administrasi HR, kontrak, data karyawan, dan payroll",
      "Mengelola BPJS, asuransi karyawan, dan administrasi benefit",
      "Mendukung implementasi SOP, evaluasi kinerja, hubungan industrial, dan kepatuhan ketenagakerjaan",
      "Berkoordinasi dengan user dan manajemen terkait kebutuhan tenaga kerja",
    ],
    qualifications: [
      "Pendidikan minimal S1",
      "Pengalaman di bidang HR minimal 3 tahun",
      "Berpengalaman mengelola payroll, BPJS, dan asuransi karyawan",
      "Memahami rekrutmen, administrasi HR, serta peraturan/regulasi pemerintah terkait ketenagakerjaan",
      "Komunikatif, teliti, dan memiliki jiwa leadership",
      "Mampu bekerja di area Jakarta",
    ],
    locations: ["Jakarta"],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "hr-junior-yogyakarta",
    title: "HR Junior",
    type: "hr",
    region: "Yogyakarta",
    badgeBg: "bg-sky-500 text-white",
    gradient: "from-sky-500 to-blue-600",
    subtitle: "Siap memulai karier HR yang bertumbuh?",
    description: "Mendukung operasional HR sehari-hari mulai dari screening kandidat, penjadwalan interview, hingga pelaksanaan onboarding karyawan baru.",
    bgImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    focus: [
      "Mendukung proses rekrutmen dan screening kandidat",
      "Mengelola administrasi HR dan database karyawan",
      "Menjadwalkan interview dan koordinasi dengan user",
      "Membantu pelaksanaan onboarding dan kebutuhan operasional HR",
    ],
    qualifications: [
      "Pendidikan minimal D3/S1",
      "Pengalaman di bidang HR minimal 1 tahun atau fresh graduate dipersilakan",
      "Teliti, komunikatif, dan mampu bekerja rapi",
      "Terbiasa menggunakan Microsoft Office / Google Workspace",
      "Bersedia bekerja di area Yogyakarta",
    ],
    locations: ["Yogyakarta"],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "talent-network",
    title: "Join Our Talent Network",
    type: "network",
    region: "Multi-Region / National & Regional",
    badgeBg: "bg-emerald-600 text-white",
    gradient: "from-emerald-600 to-teal-700",
    subtitle: "Your Next Career Opportunity Starts Here!",
    description: "Kirimkan CV Anda untuk dipertimbangkan dalam berbagai peluang karir saat ini dan mendatang bersama jaringan mitra bisnis Prima Services across industries & countries.",
    bgImageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    focus: [
      "Industri: Finance & Lending, Retail & E-commerce, Education & EdTech, Healthcare, Logistics, etc.",
      "Level Pekerjaan: Fresh Graduate / Entry, Staff / Junior, Supervisor / Team Leader, Manager, Senior / Specialist",
      "Cakupan Wilayah: Indonesia, Singapore, Malaysia, Thailand, Philippines, etc.",
    ],
    qualifications: [
      "Terbuka untuk semua latar belakang pendidikan dan pengalaman",
      "Memiliki semangat belajar dan adaptabilitas tinggi",
      "Siap berkembang di berbagai industri mitra Prima Services (Teknoloka Group)",
    ],
    locations: ["Indonesia", "Singapore", "Malaysia", "Thailand", "Philippines"],
    hrEmails: ["eufrasia.ardani@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "desk-collection-yogyakarta",
    title: "Desk Collection (DC)",
    type: "dc",
    region: "Yogyakarta",
    badgeBg: "bg-amber-500 text-white",
    gradient: "from-amber-500 to-orange-600",
    subtitle: "Kelola Penagihan Nasabah Secara Profesional via Telepon & Sistem",
    description: "Layanan penagihan terpusat yang berfokus pada komunikasi persuasif, negosiasi skema pembayaran yang efisien, serta pembaruan data sistem yang akurat.",
    bgImageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    focus: [
      "Menghubungi nasabah secara santun & profesional untuk tindak lanjut pembayaran",
      "Melakukan negosiasi skema pembayaran yang efisien dan solutif",
      "Mencatat serta memperbarui status komunikasi nasabah secara akurat di sistem",
    ],
    qualifications: [
      "Komunikatif dan persuasif",
      "Terbiasa menggunakan komputer & bekerja dengan target",
      "Pengalaman desk collection menjadi nilai tambah",
    ],
    locations: ["Yogyakarta"],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "field-collection-jabodetabek-banten",
    title: "Field Collection (FC)",
    type: "fc",
    region: "Jabodetabek & Banten",
    badgeBg: "bg-emerald-600 text-white",
    gradient: "from-emerald-500 to-teal-600",
    subtitle: "Penanganan Lapangan Langsung di Area Jabodetabek & Banten",
    description: "Kunjungi dan fasilitasi negosiasi pembayaran nasabah secara langsung di wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi, hingga Serang & Cilegon.",
    bgImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    locations: [
      "Jakarta",
      "Bogor",
      "Depok",
      "Bekasi",
      "Tangerang & Tangsel",
      "Serang & Cilegon",
    ],
    qualifications: [
      "Berpengalaman di bidang field collection (diutamakan)",
      "Memiliki SIM C aktif & kendaraan untuk mobilitas",
      "Siap bekerja lapangan dan berorientasi pada target",
    ],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "field-collection-yogyakarta-jawatengah",
    title: "Field Collection (FC)",
    type: "fc",
    region: "Yogyakarta & Jawa Tengah",
    badgeBg: "bg-purple-600 text-white",
    gradient: "from-purple-500 to-indigo-600",
    subtitle: "Penanganan Lapangan Wilayah DIY & Jawa Tengah",
    description: "Menjangkau berbagai kota di Jawa Tengah dan Yogyakarta seperti Banjarnegara, Kudus, Magelang, Klaten, Brebes, hingga Pati & Pekalongan.",
    bgImageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    locations: [
      "Banjarnegara",
      "Brebes",
      "Kudus",
      "Magelang",
      "Klaten",
      "Pati & Pekalongan",
    ],
    qualifications: [
      "Berpengalaman di bidang field collection (diutamakan)",
      "Memiliki SIM C aktif & kendaraan untuk mobilitas",
      "Siap bekerja lapangan dan berorientasi pada target",
    ],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "field-collection-jawa-timur",
    title: "Field Collection (FC)",
    type: "fc",
    region: "Jawa Timur",
    badgeBg: "bg-rose-600 text-white",
    gradient: "from-rose-500 to-pink-600",
    subtitle: "Penanganan Lapangan Strategis Wilayah Jawa Timur",
    description: "Penempatan kerja mencakup wilayah prioritas seperti Surabaya, Sidoarjo, Malang, Kediri, Madiun, dan Mojokerto.",
    bgImageUrl: "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&q=80&w=800",
    locations: [
      "Surabaya",
      "Sidoarjo",
      "Malang",
      "Kediri",
      "Madiun",
      "Mojokerto",
    ],
    qualifications: [
      "Berpengalaman di bidang field collection (diutamakan)",
      "Memiliki SIM C aktif & kendaraan untuk mobilitas",
      "Siap bekerja lapangan dan berorientasi pada target",
    ],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
  {
    id: "field-collection-jawa-barat",
    title: "Field Collection (FC)",
    type: "fc",
    region: "Jawa Barat",
    badgeBg: "bg-sky-600 text-white",
    gradient: "from-sky-500 to-blue-600",
    subtitle: "Penanganan Lapangan Wilayah Jawa Barat",
    description: "Menjaga kualitas pembayaran nasabah untuk area penempatan Bandung, Cirebon, Karawang, Sumedang, Indramayu, hingga Subang.",
    bgImageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800",
    locations: [
      "Bandung",
      "Cirebon",
      "Karawang",
      "Sumedang",
      "Indramayu",
      "Subang",
    ],
    qualifications: [
      "Berpengalaman di bidang field collection (diutamakan)",
      "Memiliki SIM C aktif & kendaraan untuk mobilitas",
      "Siap bekerja lapangan dan berorientasi pada target",
    ],
    hrEmails: ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]
  },
];

export default function CareerPage() {
  const { translate } = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const filteredJobs = JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.locations.some((loc) =>
        loc.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white pb-24">
      
      {/* ================= HERO BANNER SEARCH ================= */}
      <section className="relative min-h-[420px] flex items-center justify-center bg-slate-900 text-white px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-900" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{translate("Recruitment 2026")} — PT Teknoloka Prima Services</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            {translate("Let's Find Your Future Job!")}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            {translate("Temukan peluang karir HR, Collection, hingga Talent Network multinasional bersama Prima Services (Teknoloka Group). 100% Bebas Biaya Rekrutmen.")}
          </p>

          {/* SEARCH BAR WIDGET */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-2 border border-slate-200 shadow-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-2 text-slate-800">
            <div className="flex items-center gap-3 px-4 py-2.5 w-full">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Cari HR Senior, HR Junior, Field Collection, lokasi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm font-medium focus:outline-none placeholder:text-slate-400"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto bg-[#2152a3] hover:bg-[#1a4387] text-white font-extrabold text-sm px-8 py-3.5 rounded-xl sm:rounded-full transition-all duration-200 shrink-0 flex items-center justify-center gap-2"
            >
              <span>{translate("Find Job")}</span>
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= JOB CATEGORIES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 space-y-8">
        <div className="text-center space-y-2">
          {/* JUDUL DENGAN ANGKA DIHAPUS */}
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {translate("Job Openings & Categories")}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            {translate("Klik kartu lowongan di bawah untuk menampilkan rincian tugas, kriteria kandidat, dan cara pendaftaran.")}
          </p>
        </div>

        {/* GRID POSISI LOWONGAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer min-h-[270px] flex flex-col justify-end p-6 border border-slate-200/50"
            >
              {/* Background Image Card */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${job.bgImageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Card Content Overlay */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs ${job.badgeBg}`}>
                    {translate(job.title)}
                  </span>
                  <span className="text-xs font-bold text-white/80 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/20">
                    {translate("Full-Time")}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-1.5 group-hover:text-sky-300 transition-colors">
                    <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>{translate(job.region)}</span>
                  </h3>
                  <p className="text-xs text-slate-300 font-medium line-clamp-1 mt-1">
                    {translate(job.subtitle)}
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 group-hover:bg-blue-600 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl backdrop-blur-md border border-white/20 transition-all duration-300"
                >
                  <span>{translate("Lihat Detail Lowongan")}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL DETAIL LOWONGAN ================= */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Detail */}
            <div className="space-y-3 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full ${selectedJob.badgeBg}`}>
                  {translate(selectedJob.title)}
                </span>
                <span className="text-xs font-bold text-slate-400">{translate("Recruitment 2026")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
                <span>{translate(selectedJob.region)}</span>
              </h2>
              <p className="text-sm font-semibold text-slate-700">{translate(selectedJob.subtitle)}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{translate(selectedJob.description)}</p>
            </div>

            {/* Apa yang Akan Kamu Lakukan / Fokus Pekerjaan */}
            {selectedJob.focus && (
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>{translate("Apa Yang Akan Kamu Lakukan?")}</span>
                </h3>
                <ul className="space-y-2">
                  {selectedJob.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{translate(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Kriteria Kandidat / Kualifikasi */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <span>{translate("Kriteria Kandidat:")}</span>
              </h3>
              <ul className="space-y-2">
                {selectedJob.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{translate(qual)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Area Penempatan / Lokasi Prioritas */}
            {selectedJob.locations && selectedJob.locations.length > 1 && (
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{translate("Area Penempatan:")}</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJob.locations.map((loc, idx) => (
                    <span key={idx} className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-xl border border-blue-100">
                      {translate(loc)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons & Salin Email HR (TOMBOL "Kirim CV via Email" DIHAPUS) */}
            <div className="pt-2 space-y-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2152a3] hover:bg-[#1a4387] text-white font-extrabold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-md transition-all group"
              >
                <span>{translate("Try it For Free")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Salin Email HR */}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-[11px] text-slate-500">
                <p className="font-bold text-slate-600 text-center">{translate("Kirim CV Kamu ke Email HR:")}</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  {(selectedJob.hrEmails || ["marianus@teknoloka.co.id", "desti.nandasari@teknoloka.co.id"]).map((email, eIdx) => (
                    <button
                      key={eIdx}
                      type="button"
                      onClick={() => handleCopyEmail(email)}
                      className="w-full inline-flex items-center justify-between bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <span className="truncate font-mono font-semibold text-blue-600">{email}</span>
                      {copiedEmail === email ? <Check className="w-4 h-4 text-emerald-600 shrink-0" /> : <Copy className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER NOTE */}
      <footer className="max-w-3xl mx-auto text-center mt-20 px-6 text-xs text-slate-400 font-medium space-y-1">
        <p className="font-extrabold text-slate-500 uppercase tracking-widest">
          {translate("PT TEKNOLOKA PRIMA SERVICES — RECRUITMENT 2026")}
        </p>
        <p>{translate("People • Process • Technology for a Better Workforce")}</p>
      </footer>
    </div>
  );
}
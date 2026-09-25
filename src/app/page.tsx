"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Target, 
  Headphones, 
  Package, 
  MonitorCheck, 
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Cpu,
  CheckCircle2
} from "lucide-react";

const ANIMATED_TITLES = [
  "IT Managed Services and Talent Management",
  "Ops Services and Process Optimization",
  "Customer Support and CX Management",
  "Back Office Ops and Data Management"
] as const;

const HERO_SLIDES = [
  { id: 1, src: "/images/dashboard1.jpg", alt: "Dashboard 1" },
  { id: 2, src: "/images/dashboard2.jpg", alt: "Dashboard 2" },
  { id: 3, src: "/images/dashboard3.jpg", alt: "Dashboard 3" },
  { id: 4, src: "/images/dashboard4.jpg", alt: "Dashboard 4" },
];

const BPO_SUB_SERVICES = [
  {
    title: "Recruitment & Headhunter",
    icon: Target,
    imageSrc: "/images/talent-mapping.png",
    description: "Layanan pencarian dan penyediaan tenaga kerja profesional serta eksekutif yang disesuaikan dengan kebutuhan bisnis Anda.",
    points: [
      "Staff to C-Level Search",
      "Recruitment Process Outsourcing (RPO)",
      "Talent Mapping & Market Intelligence",
      "Contract Staffing & Payroll Services",
      "Technical & Programming Talent Search",
    ],
  },
  {
    title: "Outsourcing Solution",
    icon: Package,
    imageSrc: "/images/contract-payroll.png",
    description: "Solusi alih daya operasional untuk meningkatkan efisiensi dan pengelolaan tim kerja secara fleksibel.",
    points: [
      "Employee Outsourcing",
      "Remote Workforce Management",
      "Virtual Team Setup & Monitoring",
      "Cross-Border Compliance & HR Support",
    ],
  },
  {
    title: "Global Relations & Business Support",
    icon: MonitorCheck,
    imageSrc: "/images/technical-talent.png",
    description: "Dukungan ekspansi bisnis internasional dan konsultasi strategis lintas negara di Asia Tenggara hingga Eropa.",
    points: [
      "Building international partnerships across Southeast Asia, East Asia, and Europe",
      "Market entry advisory & localization support",
      "Business matching and cross-border collaboration",
      "Strategic consulting for global expansion",
      "Research & Market Insight capabilities",
    ],
  },
];

const BPO_MAIN_SERVICE = {
  title: "Business Process Outsourcing",
  icon: Headphones,
  description: "Layanan Business Process Outsourcing (BPO) kami menyediakan solusi operasional bisnis yang komprehensif, mencakup layanan dukungan pelanggan nonstop melalui 24/7 Contact Center & Customer Service serta pendorong pertumbuhan bisnis lewat Telemarketing & Sales Support. Untuk pengelolaan keuangan dan validasi, kami menangani penagihan secara profesional melalui Collections & Payment Follow-up dan menjamin keamanan data pengguna melalui KYC & Data Verification. Seluruh proses operasional ini senantiasa dijaga kualitasnya melalui Quality Assurance & Monitoring demi menghadirkan solusi pengoptimalan pengalaman pelanggan secara menyeluruh melalui Customer Experience Solution.",
};

const BPO_CARDS = [
  {
    title: "CX | Contact Center\n(Customer Service)",
    desc: "Diagnosa, Map Journeys & Scripts, Operate with QC, Weekly Reporting & Improvements",
    imageSrc: "/images/icon1.png",
    alt: "CX Contact Center Avatar",
  },
  {
    title: "Sales Telesales",
    desc: "Segment & Script, Outreach & Logging, Weekly Coaching, Optimize Message & Target",
    imageSrc: "/images/icon2.png",
    alt: "Sales Telesales Avatar",
  },
  {
    title: "Collection",
    desc: "Bucket Mapping, Communication Strategy, Execution & Negotiation, Results Review",
    imageSrc: "/images/icon3.png",
    alt: "Collection Icon",
  },
  {
    title: "KYC",
    desc: "Data Intake, Stepwise Verification, Clarification, Archiving & Reporting",
    imageSrc: "/images/icon4.png",
    alt: "KYC Icon",
  },
];

const PLAYBOOKS = [
  {
    id: "01",
    iconSrc: "/images/playbook1.png",
    title: "Short SOPs per function",
    desc: "Easy to understand and repeat across teams.",
  },
  {
    id: "02",
    iconSrc: "/images/playbook2.png",
    title: "QA scorecards & weekly coaching",
    desc: "Steady quality and performance consistency.",
  },
  {
    id: "03",
    iconSrc: "/images/playbook3.png",
    title: "Real-time Operations Dashboards",
    desc: "Faster, evidence-based decisions with a clean audit trail.",
  },
];

const INTEGRATIONS = [
  {
    logoSrc: "/images/enable1.png",
    title: "Sobot (Omnichannel)",
    sub: "One place for voice / chat / tickets",
    desc: "Shorter response times & zero tab-hopping",
  },
  {
    logoSrc: "/images/enable2.png",
    title: "Mitel (Voice Analytics & AI IVR)",
    sub: "Auto transcripts, summaries, talk/listen balance & QA dashboards",
    desc: "Objective coaching & actionable insights",
  },
  {
    logoSrc: "/images/enable3.png",
    title: "Selective Integrations",
    sub: "CRM & BI connectors for seamless data flow",
    desc: "Data stays connected, never scattered",
  },
];

const RPO_CARDS = [
  {
    step: "01",
    badge: "TALENT MAPPING",
    title: "Where We Look",
    subtitle: "(Talent Mapping & Insights)",
    desc: "Understanding the talent market is essential to staying competitive. Prima Service provides actionable insights on workforce availability, salary benchmarks, and future hiring trends.",
    imageSrc: "/images/talent-mapping.png",
    alt: "Talent Mapping",
    points: [
      "Benchmark & Salary Data",
      "Insights across regions",
      "Passive talent mapping",
      "Reports & Dashboards",
    ],
  },
  {
    step: "02",
    badge: "CONTRACT & PAYROLL",
    title: "How We Staff",
    subtitle: "(Contract & Payroll)",
    desc: "Focus on your core business strategy while Prima Service takes care of everything from contracts and BPJS to payroll.",
    imageSrc: "/images/contract-payroll.png",
    alt: "Contract & Payroll",
    points: [
      "You supervise, we employ",
      "Fast Deployment",
      "Payroll, Insurance & HR Admin",
      "Reduce Risk & Cost",
    ],
  },
  {
    step: "03",
    badge: "TECHNICAL TALENT",
    title: "How We Source",
    subtitle: "(Technical Talent)",
    desc: "From startups to scale-ups, your tech team deserves the best talent. Prima Service delivers skilled programmers and engineers—tested, verified, and ready to code.",
    imageSrc: "/images/technical-talent.png",
    alt: "Technical Talent",
    points: [
      "Access to a wide range of IT professionals across different roles",
      "Ensure candidate quality through coding tests, problem solving tasks, and technical interviews",
      "Each candidate is evaluated and matched with specific programming languages, tools, and frameworks.",
      "Reduce time-to-hire and quickly build agile, high-performing teams",
    ],
  },
];

const SCALE_CARDS = [
  {
    id: "employee",
    step: "01",
    title: "Employee & Team Outsourcing",
    imageSrc: "/images/scale-employee.png",
    alt: "Employee & Team Outsourcing Icon",
  },
  {
    id: "remote",
    step: "02",
    title: "Remote Workforce Management",
    imageSrc: "/images/scale-remote.png",
    alt: "Remote Workforce Management Icon",
  },
  {
    id: "virtual",
    step: "03",
    title: "Virtual Team Setup & Monitoring",
    imageSrc: "/images/scale-virtual.png",
    alt: "Virtual Team Setup & Monitoring Icon",
  },
  {
    id: "compliance",
    step: "04",
    title: "Cross-Border Compliance & HR Support",
    imageSrc: "/images/scale-compliance.png",
    alt: "Cross-Border Compliance & HR Support Icon",
  },
];

const GLOBAL_POINTS = [
  {
    iconSrc: "/images/global-icon-1.png",
    text: "Connect with potential partners, clients, or distributors across regions",
  },
  {
    iconSrc: "/images/global-icon-2.png",
    text: "Guidance on regulations, cultural nuances, and business practices for smooth market entry",
  },
  {
    iconSrc: "/images/global-icon-3.png",
    text: "Establish a local presence with flexible and compliant solutions",
  },
  {
    iconSrc: "/images/global-icon-4.png",
    text: "Access to a curated network of investors, suppliers, and strategic allies in key markets.",
  },
];

const DELIVER_STEPS = [
  {
    step: "01",
    title: "Client Need Identification",
    desc: "Analisis mendalam terhadap kebutuhan & kualifikasi spesifik bisnis Anda.",
    imageSrc: "/images/icon1.png",
    alt: "Client Need Identification Icon",
  },
  {
    step: "02",
    title: "Talent / Team Selection",
    desc: "Proses seleksi ketat untuk mencocokkan kandidat/tim terbaik.",
    imageSrc: "/images/icon2.png",
    alt: "Talent Selection Icon",
  },
  {
    step: "03",
    title: "Onboarding & Equipment Setup",
    desc: "Penyiapan infrastruktur, perangkat, dan integrasi awal tim.",
    imageSrc: "/images/icon3.png",
    alt: "Onboarding & Setup Icon",
  },
  {
    step: "04",
    title: "Live Monitoring & Reporting",
    desc: "Pengawasan operasional harian beserta laporan kinerja real-time.",
    imageSrc: "/images/icon4.png",
    alt: "Live Monitoring Icon",
  },
];

const GLOBAL_STEPS = [
  {
    step: "01",
    title: "Discovery Call &\nBusiness Need",
    desc: "Pemetaan kebutuhan bisnis awal dan konsultasi eksklusif.",
    icon: Headphones,
    isActive: false,
  },
  {
    step: "02",
    title: "Market Research &\nLocalization Plan",
    desc: "Riset pasar mendalam dan penyesuaian strategi lokal.",
    icon: Target,
    isActive: false,
  },
  {
    step: "03",
    title: "Business Matching &\nLocal Contacts",
    desc: "Menghubungkan dengan mitra dan jaringan lokal tepercaya.",
    icon: Package,
    isActive: true,
  },
  {
    step: "04",
    title: "Virtual Rep Office &\nOps Setup",
    desc: "Pendirian kantor virtual dan infrastruktur operasional.",
    icon: Cpu,
    isActive: false,
  },
  {
    step: "05",
    title: "Ongoing Advisory &\nMonitoring",
    desc: "Dukungan konsultasi berkala dan pengawasan kualitatif.",
    icon: MonitorCheck,
    isActive: false,
  },
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    imageSrc: "/images/tampilan dashboard.png",
    alt: "Tampilan Dashboard Admin",
  },
  {
    id: 2,
    imageSrc: "/images/tambahandashboard.jpg",
    alt: "Tambahan Dashboard UI",
  },
  {
    id: 3,
    imageSrc: "/images/analisis.png",
    alt: "Analisis Dashboard Laptop",
  },
  {
    id: 4,
    imageSrc: "/images/abiday.png",
    alt: "Abiday Mobile App",
  },
];

export default function Page() {
  const [isBpoOpen, setIsBpoOpen] = useState(true);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % ANIMATED_TITLES.length);
        setIsAnimating(false);
      }, 300);

      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const MainIcon = BPO_MAIN_SERVICE.icon;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-blue-600 selection:text-white antialiased pt-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/30 to-white text-slate-900 overflow-hidden py-8 md:py-12 px-6 border-b border-slate-100">
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1.2px, transparent 1.2px)`,
            backgroundSize: `20px 20px`
          }}
        />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-400/20 via-sky-300/15 to-indigo-200/20 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-20">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Enterprise Managed Services & Talent</span>
            </div>

            <div className="min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-start">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.18] text-slate-900">
                <span 
                  className={`inline-block transition-all duration-300 transform ${
                    isAnimating ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
                  }`}
                >
                  {ANIMATED_TITLES[titleIndex]}
                </span>
                <span className="block mt-1.5 font-black">
                  for your{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                    Business Needs
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-blue-600 text-xs md:text-sm font-bold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              PEOPLE • PROCESS • TOOLS, ALIGNED FOR REAL RESULTS
            </p>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl font-normal">
              Prima Services helps companies in Indonesia accelerate growth with integrated, secure, and innovative ops services and talent management solutions.
            </p>

            <div className="pt-2 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 group"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ISO Certified Ops</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-[4/3.2] flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-blue-50/50 to-sky-100/40 border border-white/80 rounded-3xl shadow-xl backdrop-blur-md transform transition-all duration-500" />
              <div className="absolute inset-x-4 -bottom-3 h-8 bg-blue-600/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative w-full h-full p-4 flex items-center justify-center z-10 overflow-hidden rounded-3xl">
                <Image
                  key={heroSlideIndex}
                  src={HERO_SLIDES[heroSlideIndex].src}
                  alt={HERO_SLIDES[heroSlideIndex].alt}
                  fill
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-contain p-2 transition-all duration-700 ease-in-out hover:scale-105 drop-shadow-md"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      heroSlideIndex === idx ? "w-6 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION */}
      <section className="bg-slate-50/70 py-28 px-6 border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0256cc] text-xs font-bold tracking-wider uppercase shadow-xs">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              OUR SERVICES
            </h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto">
              Integrated operational solutions and talent management designed to scale your business efficiently.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main BPO Card */}
            <div className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0256cc] via-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 border border-blue-200/60 flex items-center justify-center text-[#0256cc] group-hover:bg-[#0256cc] group-hover:text-white transition-all duration-300 shadow-sm shrink-0 group-hover:scale-105">
                      <MainIcon className="w-7 h-7 stroke-[2]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#0256cc] uppercase bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 inline-block mb-1">
                        Core Offering
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-xl md:text-2xl group-hover:text-[#0256cc] transition-colors duration-200">
                        {BPO_MAIN_SERVICE.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsBpoOpen(!isBpoOpen)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#0256cc] border border-slate-200/80 hover:border-blue-200 transition-all focus:outline-none"
                    aria-label="Toggle Details"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        isBpoOpen ? "rotate-180 text-[#0256cc]" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>

                {isBpoOpen && (
                  <div className="pt-8 space-y-8 animate-in fade-in slide-in-from-top-3 duration-300">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>OVERVIEW & CAPABILITIES</span>
                      </p>
                      
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/20 to-sky-50/30 border border-blue-100/80 shadow-2xs">
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-left md:text-justify font-normal">
                          {BPO_MAIN_SERVICE.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 space-y-6">
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                        OUR BPO SOLUTIONS & SERVICES:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {BPO_SUB_SERVICES.map((sub, sIdx) => {
                          return (
                            <div
                              key={sIdx}
                              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 border-b-4 border-b-red-600 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group/card"
                            >
                              <div>
                                <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                                  <Image
                                    src={sub.imageSrc}
                                    alt={sub.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                                  />
                                </div>

                                <div className="p-5 border-b border-slate-100">
                                  <h4 className="font-extrabold text-slate-900 text-lg leading-snug group-hover/card:text-[#0256cc] transition-colors mb-2">
                                    {sub.title}
                                  </h4>
                                  <p className="text-xs text-slate-500 leading-relaxed">
                                    {sub.description}
                                  </p>
                                </div>

                                <div className="p-5 bg-slate-50/50">
                                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                                    Key Offerings:
                                  </p>
                                  <ul className="space-y-2">
                                    {sub.points.map((pt, ptIdx) => (
                                      <li key={ptIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                                        <span className="leading-snug">{pt}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsBpoOpen(!isBpoOpen)}
                className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center gap-2 text-xs font-extrabold tracking-wider uppercase text-[#0256cc] hover:text-blue-700 transition-colors focus:outline-none"
              >
                <span>{isBpoOpen ? "Show Less" : "Explore Capabilities"}</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    isBpoOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BPO SECTION */}
      <section className="relative bg-white text-slate-900 py-24 px-6 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold uppercase tracking-wider">
              Operational Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Business Process Outsourcing (BPO)
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Your one-stop solutions technology services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BPO_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="bg-slate-50/50 hover:bg-white text-slate-900 rounded-3xl p-7 flex flex-col items-center text-center border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="relative w-28 h-28 mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    width={112}
                    height={112}
                    quality={100}
                    unoptimized
                    className="object-contain"
                    priority
                  />
                </div>

                <h3 className="font-bold text-sm md:text-base mb-2 leading-snug text-slate-900 whitespace-pre-line group-hover:text-[#0256cc] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-slate-700 text-xs md:text-sm font-semibold">
              Start telling us what you need
            </span>
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-7 py-3 rounded-full text-xs transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW WE CONTROL & ENABLE SECTION */}
      <section className="relative bg-slate-50/80 text-slate-900 py-28 px-4 md:px-8 overflow-hidden border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-28 relative z-10">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 border-b border-slate-200/80 pb-6">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-4 py-1.5 rounded-full border border-amber-300 mb-3 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  Governance & Quality Assurance
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                  How We Control{" "}
                  <span className="text-[#0256cc] font-normal text-lg md:text-2xl block md:inline">
                    (Playbooks & Governance)
                  </span>
                </h3>
                <p className="text-slate-500 text-xs md:text-sm max-w-xl mt-2 leading-relaxed font-normal">
                  We provide flexible end-to-end services (on-site/remote) with SLAs, QA, and live dashboards.
                </p>
              </div>

              <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl flex items-center shadow-xs shrink-0 hover:border-blue-300 transition-all duration-300 group">
                <div className="relative w-32 h-8">
                  <Image
                    src="/images/logo.png"
                    alt="Prima Services Logo"
                    fill
                    quality={100}
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {PLAYBOOKS.map((row) => (
                <div 
                  key={row.id} 
                  className="group relative flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-3.5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 p-3 relative border border-slate-200 shadow-xs group-hover:scale-105 group-hover:border-blue-300 transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={row.iconSrc}
                        alt={row.title}
                        fill
                        quality={100}
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1 w-full bg-gradient-to-r from-[#0256cc] via-[#0262e6] to-[#004bb8] rounded-2xl md:rounded-full px-6 py-4 md:py-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-sm border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                        {row.id}
                      </div>
                      <span className="text-sm md:text-base font-bold text-white tracking-wide">
                        {row.title}
                      </span>
                    </div>

                    <span className="text-xs md:text-sm text-sky-100 font-medium text-left md:text-right max-w-sm leading-relaxed md:pr-2">
                      {row.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10 pt-4">
            <div className="text-left space-y-3 border-b border-slate-200/80 pb-6">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#0256cc] bg-blue-100/70 px-4 py-1.5 rounded-full border border-blue-200 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-[#0256cc]" />
                Integrated Tech Stack
              </span>
              
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                How We Enable{" "}
                <span className="text-[#0256cc] font-normal text-lg md:text-2xl block sm:inline">
                  (Tools & Integrations)
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {INTEGRATIONS.map((row, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white rounded-2xl md:rounded-full p-4 md:p-3 md:pr-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex items-center gap-4 md:gap-5 z-10 max-w-2xl">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center shrink-0 shadow-xs p-2 relative group-hover:scale-110 transition-transform duration-300 border border-slate-200">
                      <Image
                        src={row.logoSrc}
                        alt="Integration Logo"
                        fill
                        quality={100}
                        unoptimized
                        sizes="64px"
                        className="object-contain p-2 rounded-full"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-900 leading-snug tracking-wide group-hover:text-[#0256cc] transition-colors">
                        {row.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal leading-tight mt-0.5">
                        {row.sub}
                      </p>
                    </div>
                  </div>

                  <div className="z-10 w-full md:w-auto flex justify-end">
                    <div className="bg-blue-50 border border-blue-200 px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-semibold text-[#0256cc] text-left md:text-right group-hover:bg-[#0256cc] group-hover:text-white transition-all duration-300 w-full md:w-auto">
                      {row.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECRUITMENT & HEADHUNTER SERVICES SECTION */}
      <section className="bg-white text-slate-900 py-24 px-4 md:px-8 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="text-center md:text-left space-y-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0256cc] text-xs font-bold tracking-wider uppercase">
                End-to-End Talent Acquisition
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
                How We Recruit <span className="text-[#0256cc] font-normal text-lg md:text-2xl block md:inline">(RPO Process)</span>
              </h2>
            </div>

            <div className="bg-white border border-slate-200/80 px-5 py-2.5 rounded-2xl shadow-xs flex items-center shrink-0">
              <div className="relative w-28 h-7">
                <Image
                  src="/images/logo.png"
                  alt="Prima Services Logo"
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-100 via-sky-300 to-blue-100 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
              {RPO_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white text-slate-900 rounded-3xl p-7 shadow-sm border border-slate-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 flex flex-col justify-between h-full overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-sky-50 text-[#0256cc] border border-sky-200">
                        {card.badge}
                      </span>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-[#0256cc] transition-colors duration-300">
                        {card.step}
                      </span>
                    </div>

                    <div className="relative w-full h-44 mb-5 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0">
                      <Image
                        src={card.imageSrc}
                        alt={card.alt}
                        fill
                        quality={100}
                        unoptimized
                        sizes="380px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug group-hover:text-[#0256cc] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0256cc] mb-3">
                      {card.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 group/pt">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover/pt:bg-[#0256cc] mt-1.5 shrink-0 transition-colors" />
                          <span className="leading-tight group-hover/pt:text-slate-950 transition-colors">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW WE SCALE SECTION */}
      <section className="relative bg-slate-50/70 text-slate-900 py-24 px-4 md:px-8 border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="text-center md:text-left space-y-2 max-w-2xl">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#0256cc] text-xs font-bold tracking-wider uppercase">
                Scalable Operation Framework
              </span>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
                How We Scale <span className="text-[#0256cc] font-normal text-lg md:text-2xl block md:inline">(Outsourcing Services)</span>
              </h2>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal pt-1">
                We design, run, and continuously improve your business processes end-to-end, on-site or remote, delivering managed operations, staffing, and global delivery.
              </p>
            </div>

            <div className="bg-white border border-slate-200/80 px-5 py-2.5 rounded-2xl shadow-xs flex items-center shrink-0">
              <div className="relative w-28 h-7">
                <Image
                  src="/images/logo.png"
                  alt="Prima Services Logo"
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative p-3 md:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/40">
            <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-200 via-sky-400 to-blue-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 items-stretch">
              {SCALE_CARDS.map((card, idx, arr) => (
                <div key={card.id} className="relative flex flex-col group">
                  <div
                    className="h-full bg-slate-50/50 border border-slate-200/80 hover:border-blue-300 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white flex flex-col justify-between overflow-hidden shadow-xs"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0256cc] via-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex flex-col items-center">
                      <div className="w-full flex items-center justify-end mb-4">
                        <span className="text-xl font-black text-slate-300 group-hover:text-[#0256cc] transition-colors">
                          {card.step}
                        </span>
                      </div>

                      <div className="relative w-full h-36 mb-6 rounded-xl bg-white border border-slate-200/60 p-4 flex items-center justify-center group-hover:border-sky-300 transition-colors duration-300 shadow-xs">
                        <Image
                          src={card.imageSrc}
                          alt={card.alt}
                          fill
                          unoptimized
                          className="object-contain p-3 group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>

                    <div className="text-center pt-2 border-t border-slate-200/60 transition-colors">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0256cc] transition-colors leading-snug">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center text-[#0256cc] shadow-md group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW WE DELIVER SECTION */}
      <section className="bg-white text-slate-900 py-24 px-4 md:px-8 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0256cc] text-xs font-bold tracking-wider uppercase">
              Step-by-Step Execution
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
              How We Deliver <span className="text-[#0256cc] font-normal text-lg md:text-2xl block md:inline">(Outsourcing Flow)</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              Proses alur kerja yang terstruktur dan terukur untuk memastikan kualitas layanan terbaik bagi bisnis Anda.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 items-stretch">
              {DELIVER_STEPS.map((card, idx, arr) => (
                <div key={idx} className="relative flex flex-col group">
                  <div className="h-full bg-white border border-slate-200/80 hover:border-blue-300 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={card.imageSrc}
                            alt={card.alt}
                            width={48}
                            height={48}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <span className="text-2xl font-black text-slate-300 group-hover:text-[#0256cc] transition-colors">
                          {card.step}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0256cc] transition-colors leading-snug mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#0256cc] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Phase {card.step}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300 font-black text-lg pointer-events-none">
                      ➔
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 px-5 py-2.5 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Proses transparan & dapat dipantau kapan saja melalui dashboard terintegrasi.
            </span>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL RELATIONS SECTION */}
      <section className="bg-gradient-to-b from-slate-50 via-sky-50/30 to-white text-slate-800 py-28 px-4 md:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 border border-blue-300/30 shadow-2xl flex flex-col md:flex-row items-stretch group">
            <div className="w-full md:w-[48%] relative min-h-[300px] md:min-h-[380px] overflow-hidden">
              <Image
                src="/images/beatiful.png"
                alt="Global Business Support Representative"
                fill
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-blue-950/80 via-transparent to-transparent" />
            </div>

            <div className="w-full md:w-[52%] p-8 md:p-12 flex flex-col justify-center items-start text-white relative z-10">
              <div className="space-y-6 max-w-lg">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                  Global Network & Expansion
                </span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
                  Global Relations &<br />
                  <span className="text-amber-300">
                    Business Support
                  </span>
                </h3>

                <div className="bg-white rounded-2xl px-5 py-3 inline-flex items-center shadow-lg border border-white/20">
                  <div className="relative w-32 md:w-36 h-8">
                    <Image
                      src="/images/logo.png"
                      alt="Prima Services Logo"
                      fill
                      quality={100}
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0256cc] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
                  Cross-Border Growth
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                  Global Relations &<br />
                  <span className="text-[#0256cc]">Business Support</span>
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  From market entry to strategic partnerships, we connect your business with the right opportunities across <strong className="text-slate-900">SEA, East Asia, and Europe</strong>—ensuring smooth expansion and sustainable growth.
                </p>
              </div>

              <div className="space-y-4">
                {GLOBAL_POINTS.map((point, idx) => (
                  <div 
                    key={idx} 
                    className="group p-4.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-sky-300 hover:bg-gradient-to-r hover:from-white hover:to-sky-50/50 transition-all duration-300 flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 p-2.5 shadow-xs group-hover:bg-[#0256cc] transition-colors duration-300">
                      <Image
                        src={point.iconSrc}
                        alt="Point Icon"
                        width={28}
                        height={28}
                        unoptimized
                        className="object-contain group-hover:brightness-0 group-hover:invert transition-all"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed pt-1 group-hover:text-slate-950 transition-colors">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[550px] aspect-[4/3] bg-gradient-to-b from-sky-50/80 to-transparent rounded-3xl p-6 border border-slate-200/60 shadow-inner">
                <Image
                  src="/images/global-map.png"
                  alt="Global World Map Connections"
                  fill
                  quality={100}
                  unoptimized
                  sizes="550px"
                  className="object-contain p-2"
                />

                <div className="absolute top-[48%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-blue-500/30 animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0256cc] shadow-md border border-white" />
                </div>

                <div className="absolute top-[35%] left-[68%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-amber-500/30 animate-ping absolute delay-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-md border border-white" />
                </div>

                <div className="absolute top-[30%] left-[48%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/30 animate-ping absolute delay-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-md border border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOW WE ENABLE GLOBAL GROWTH SECTION */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-24 px-4 md:px-8 border-b border-slate-200/70 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0256cc] text-xs font-bold tracking-widest uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>END-TO-END METHODOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              How We Enable <span className="bg-gradient-to-r from-[#0256cc] via-sky-500 to-indigo-600 bg-clip-text text-transparent">Global Growth</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              Proses transisi dan ekspansi global yang terstruktur, terukur, dan berkelanjutan untuk mengakselerasi bisnis Anda.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-blue-200 via-sky-400 to-blue-600 rounded-full z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {GLOBAL_STEPS.map((item, index, arr) => {
                const IconComponent = item.icon;

                return (
                  <div key={index} className="flex flex-col group relative">
                    <div 
                      className={`h-full rounded-3xl p-6 transition-all duration-500 flex flex-col justify-between backdrop-blur-md relative overflow-hidden ${
                        item.isActive
                          ? "bg-gradient-to-b from-blue-600 to-[#0256cc] text-white shadow-xl shadow-blue-500/25 scale-[1.03] border-2 border-blue-400"
                          : "bg-white/90 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-2 text-slate-800"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span 
                            className={`text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase border ${
                              item.isActive
                                ? "bg-white/20 border-white/30 text-amber-300"
                                : "bg-blue-50 border-blue-200/60 text-[#0256cc]"
                            }`}
                          >
                            Step {item.step}
                          </span>

                          <div 
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                              item.isActive
                                ? "bg-white text-[#0256cc]"
                                : "bg-gradient-to-br from-blue-50 to-sky-50 text-[#0256cc] border border-blue-100"
                            }`}
                          >
                            <IconComponent className="w-6 h-6 stroke-[2]" />
                          </div>
                        </div>

                        <h3 
                          className={`text-sm md:text-base font-bold leading-snug whitespace-pre-line mb-3 ${
                            item.isActive ? "text-white" : "text-slate-900 group-hover:text-[#0256cc] transition-colors"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p 
                          className={`text-xs leading-relaxed font-normal ${
                            item.isActive ? "text-blue-100" : "text-slate-500"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100/20 flex items-center justify-between text-[11px] font-semibold">
                        {item.isActive ? (
                          <span className="inline-flex items-center gap-1.5 text-amber-300 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Core Focus
                          </span>
                        ) : (
                          <span className="text-slate-400 group-hover:text-[#0256cc] transition-colors">
                            Phase {item.step}
                          </span>
                        )}

                        {index < arr.length - 1 && (
                          <ArrowRight 
                            className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                              item.isActive ? "text-white" : "text-slate-400 group-hover:text-[#0256cc]"
                            }`} 
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. OUR PORTFOLIO SECTION */}
      <section className="bg-slate-50/50 text-slate-900 py-24 px-4 md:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0256cc] text-xs font-bold tracking-wider uppercase">
              Showcase & Works
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our Portfolios
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              Your one-stop solutions technology services
            </p>
          </div>

          <div className="border border-blue-100 rounded-3xl bg-white p-6 sm:p-10 shadow-xl shadow-blue-500/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {PORTFOLIO_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#0256cc] rounded-3xl p-3 sm:p-4 flex items-center justify-center h-[280px] sm:h-[340px] md:h-[380px] shadow-md hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      quality={100}
                      unoptimized
                      className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION (CTA) SECTION */}
      <section className="bg-slate-50/50 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900 text-white min-h-[420px] md:min-h-[450px] flex items-center p-8 md:p-14 border border-blue-400/30">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-[350px] h-[350px] bg-indigo-400/25 rounded-full blur-[100px] pointer-events-none" />
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
                backgroundSize: `24px 24px`
              }}
            />

            <div className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-7/12 z-0 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/images/bitmap2.png"
                  alt="Prima Services Team Discussion"
                  fill
                  quality={100}
                  unoptimized
                  priority
                  className="object-cover object-right md:object-center opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-700/80 to-transparent md:from-blue-700 md:via-blue-700/60 md:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="relative z-10 max-w-lg space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Let's Scale Together</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                  Ready to Grow Your{" "}
                  <span className="text-amber-300 drop-shadow-md block sm:inline">
                    Business?
                  </span>
                </h2>
                <p className="text-xs md:text-sm text-blue-50/90 leading-relaxed font-normal max-w-md">
                  Start your digital transformation journey today. Contact us for a free consultation and find the right solution tailored for your team.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-full text-xs md:text-sm transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-400/40 hover:scale-105 group"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { usePageContent } from "@/lib/use-page-content";
import Link from "next/link";
import Image from "next/image";
import { getPortfolios, type PortfolioItem } from "@/lib/portfolioService";
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
  CheckCircle2,
  Puzzle,
  Handshake,
  LineChart,
  Shield,
  ChevronRight,
  Zap,
  Layers,
  Globe2,
  ArrowUpRight,
  Activity,
  TrendingUp,
  Workflow
} from "lucide-react";

// --- DATA CONSTANTS ---
























export default function Page() {
  const { content, error: contentError } = usePageContent('home');

  const ANIMATED_TITLES = [
  content['animated-titles.0'] ?? 'IT Managed Services & Talent Management',
  content['animated-titles.1'] ?? 'Ops Services & Process Optimization',
  content['animated-titles.2'] ?? 'Customer Support & CX Management',
  content['animated-titles.3'] ?? 'Back Office Ops & Data Management'
];

  const HERO_SLIDES = [
  { id: 1, src: content['hero-slides.0.src'] ?? "/images/dashboard1.jpg", alt: content['hero-slides.0.alt'] ?? 'Dashboard Preview 1' },
  { id: 2, src: content['hero-slides.1.src'] ?? "/images/dashboard2.jpg", alt: content['hero-slides.1.alt'] ?? 'Dashboard Preview 2' },
  { id: 3, src: content['hero-slides.2.src'] ?? "/images/dashboard3.jpg", alt: content['hero-slides.2.alt'] ?? 'Dashboard Preview 3' },
  { id: 4, src: content['hero-slides.3.src'] ?? "/images/dashboard4.jpg", alt: content['hero-slides.3.alt'] ?? 'Dashboard Preview 4' },
];

  const BPO_MAIN_SERVICE = {
  title: content['bpo-main-service.title'] ?? 'Business Process Outsourcing',
  icon: Workflow,
  description: content['bpo-main-service.description'] ?? 'Layanan Business Process Outsourcing (BPO) kami menyediakan solusi operasional bisnis yang komprehensif, mencakup layanan dukungan pelanggan nonstop melalui 24/7 Contact Center & Customer Service serta pendorong pertumbuhan bisnis lewat Telemarketing & Sales Support. Untuk pengelolaan keuangan dan validasi, kami menangani penagihan secara profesional melalui Collections & Payment Follow-up dan menjamin keamanan data pengguna melalui KYC & Data Verification.',
};

  const BPO_SUB_SERVICES = [
  {
    slug: "recruitment-headhunter",
    title: content['bpo-sub-services.0.title'] ?? 'Recruitment & Headhunter',
    description: content['bpo-sub-services.0.description'] ?? 'Layanan pencarian dan penyediaan tenaga kerja profesional serta eksekutif yang disesuaikan dengan kebutuhan bisnis Anda.',
    imageSrc: content['bpo-sub-services.0.imageSrc'] ?? "/images/talent-mapping.png",
    points: [
      content['bpo-sub-services.0.points.0'] ?? 'Staff to C-Level Search',
      content['bpo-sub-services.0.points.1'] ?? 'Recruitment Process Outsourcing (RPO)',
      content['bpo-sub-services.0.points.2'] ?? 'Talent Mapping & Market Intelligence',
      content['bpo-sub-services.0.points.3'] ?? 'Contract Staffing & Payroll Services',
      content['bpo-sub-services.0.points.4'] ?? 'Technical & Programming Talent Search',
    ],
  },
  {
    slug: "outsourcing-solution",
    title: content['bpo-sub-services.1.title'] ?? 'Outsourcing Solution',
    description: content['bpo-sub-services.1.description'] ?? 'Solusi alih daya operasional untuk meningkatkan efisiensi dan pengelolaan tim kerja secara fleksibel.',
    imageSrc: content['bpo-sub-services.1.imageSrc'] ?? "/images/contract-payroll.png",
    points: [
      content['bpo-sub-services.1.points.0'] ?? 'Employee Outsourcing',
      content['bpo-sub-services.1.points.1'] ?? 'Remote Workforce Management',
      content['bpo-sub-services.1.points.2'] ?? 'Virtual Team Setup & Monitoring',
      content['bpo-sub-services.1.points.3'] ?? 'Cross-Border Compliance & HR Support',
    ],
  },
  {
    slug: "global-relations-business-support",
    title: content['bpo-sub-services.2.title'] ?? 'Global Relations & Business Support',
    description: content['bpo-sub-services.2.description'] ?? 'Dukungan ekspansi bisnis internasional dan konsultasi strategis lintas negara di Asia Tenggara hingga Eropa.',
    imageSrc: content['bpo-sub-services.2.imageSrc'] ?? "/images/technical-talent.png",
    points: [
      content['bpo-sub-services.2.points.0'] ?? 'Building international partnerships across SEA, East Asia, Europe',
      content['bpo-sub-services.2.points.1'] ?? 'Market entry advisory & localization support',
      content['bpo-sub-services.2.points.2'] ?? 'Business matching and cross-border collaboration',
      content['bpo-sub-services.2.points.3'] ?? 'Strategic consulting for global expansion',
      content['bpo-sub-services.2.points.4'] ?? 'Research & Market Insight capabilities',
    ],
  },
];

  const BPO_CARDS = [
  {
    slug: "cx-contact-center",
    title: content['bpo-cards.0.title'] ?? 'CX | Contact Center\n(Customer Service)',
    desc: content['bpo-cards.0.desc'] ?? 'Diagnosa, Map Journeys & Scripts, Operate with QC, Weekly Reporting & Improvements',
    imageSrc: content['bpo-cards.0.imageSrc'] ?? "/images/icon1.png",
    alt: content['bpo-cards.0.alt'] ?? 'CX Contact Center Avatar',
  },
  {
    slug: "sales-telesales",
    title: content['bpo-cards.1.title'] ?? 'Sales Telesales',
    desc: content['bpo-cards.1.desc'] ?? 'Segment & Script, Outreach & Logging, Weekly Coaching, Optimize Message & Target',
    imageSrc: content['bpo-cards.1.imageSrc'] ?? "/images/icon2.png",
    alt: content['bpo-cards.1.alt'] ?? 'Sales Telesales Avatar',
  },
  {
    slug: "collection",
    title: content['bpo-cards.2.title'] ?? 'Collection',
    desc: content['bpo-cards.2.desc'] ?? 'Bucket Mapping, Communication Strategy, Execution & Negotiation, Results Review',
    imageSrc: content['bpo-cards.2.imageSrc'] ?? "/images/icon3.png",
    alt: content['bpo-cards.2.alt'] ?? 'Collection Icon',
  },
  {
    slug: "kyc-verification",
    title: content['bpo-cards.3.title'] ?? 'KYC Verification',
    desc: content['bpo-cards.3.desc'] ?? 'Data Intake, Stepwise Verification, Clarification, Archiving & Reporting',
    imageSrc: content['bpo-cards.3.imageSrc'] ?? "/images/icon4.png",
    alt: content['bpo-cards.3.alt'] ?? 'KYC Icon',
  },
];

  const CONTROL_ITEMS = [
  {
    slug: "sop-operasional",
    icon: Puzzle,
    title: content['control-items.0.title'] ?? 'Short SOPs per Function',
    description: content['control-items.0.description'] ?? 'Easy to understand and repeat across teams with clear, standardized operational guidelines.',
    accentColor: "from-blue-600 via-sky-500 to-cyan-400",
    badgeBg: "bg-blue-50/80 text-blue-600 border-blue-200/80",
  },
  {
    slug: "quality-assurance-coaching",
    icon: Handshake,
    title: content['control-items.1.title'] ?? 'QA Scorecards & Coaching',
    description: content['control-items.1.description'] ?? 'Steady quality and performance consistency through regular feedback loops and evaluation.',
    accentColor: "from-amber-500 via-orange-500 to-yellow-400",
    badgeBg: "bg-amber-50/80 text-amber-600 border-amber-200/80",
  },
  {
    slug: "dashboard-real-time",
    icon: LineChart,
    title: content['control-items.2.title'] ?? 'Real-time Dashboards',
    description: content['control-items.2.description'] ?? 'Faster, evidence-based decisions with live data analytics and a clean audit trail.',
    accentColor: "from-indigo-600 via-blue-600 to-sky-400",
    badgeBg: "bg-indigo-50/80 text-indigo-600 border-indigo-200/80",
  },
];

  const INTEGRATIONS = [
  {
    logoSrc: content['integrations.0.logoSrc'] ?? "/images/enable1.png",
    title: content['integrations.0.title'] ?? 'Sobot (Omnichannel Platform)',
    sub: content['integrations.0.sub'] ?? 'One place for voice / chat / tickets',
    desc: content['integrations.0.desc'] ?? 'Shorter response times & zero tab-hopping',
    accent: "bg-gradient-to-r from-sky-400 to-blue-600",
  },
  {
    logoSrc: content['integrations.1.logoSrc'] ?? "/images/enable2.png",
    title: content['integrations.1.title'] ?? 'Mitel (Voice Analytics & AI IVR)',
    sub: content['integrations.1.sub'] ?? 'Auto transcripts, summaries, talk/listen balance & QA dashboards',
    desc: content['integrations.1.desc'] ?? 'Objective coaching & actionable insights',
    accent: "bg-gradient-to-r from-indigo-500 to-purple-600",
  },
  {
    logoSrc: content['integrations.2.logoSrc'] ?? "/images/enable3.png",
    title: content['integrations.2.title'] ?? 'Selective Integrations Hub',
    sub: content['integrations.2.sub'] ?? 'CRM & BI connectors for seamless data flow',
    desc: content['integrations.2.desc'] ?? 'Data stays connected, never scattered',
    accent: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
];

  const SCALE_CARDS = [
  {
    id: "employee",
    step: content['scale-cards.0.step'] ?? '01',
    title: content['scale-cards.0.title'] ?? 'Employee & Team Outsourcing',
    imageSrc: content['scale-cards.0.imageSrc'] ?? "/images/scale-employee.png",
    alt: content['scale-cards.0.alt'] ?? 'Employee & Team Outsourcing Icon',
    badge: content['scale-cards.0.badge'] ?? 'Scale Rapidly'
  },
  {
    id: "remote",
    step: content['scale-cards.1.step'] ?? '02',
    title: content['scale-cards.1.title'] ?? 'Remote Workforce Management',
    imageSrc: content['scale-cards.1.imageSrc'] ?? "/images/scale-remote.png",
    alt: content['scale-cards.1.alt'] ?? 'Remote Workforce Management Icon',
    badge: content['scale-cards.1.badge'] ?? 'Global Reach'
  },
  {
    id: "virtual",
    step: content['scale-cards.2.step'] ?? '03',
    title: content['scale-cards.2.title'] ?? 'Virtual Team Setup & Monitoring',
    imageSrc: content['scale-cards.2.imageSrc'] ?? "/images/scale-virtual.png",
    alt: content['scale-cards.2.alt'] ?? 'Virtual Team Setup & Monitoring Icon',
    badge: content['scale-cards.2.badge'] ?? 'Real-time Control'
  },
  {
    id: "compliance",
    step: content['scale-cards.3.step'] ?? '04',
    title: content['scale-cards.3.title'] ?? 'Cross-Border Compliance & HR Support',
    imageSrc: content['scale-cards.3.imageSrc'] ?? "/images/scale-compliance.png",
    alt: content['scale-cards.3.alt'] ?? 'Cross-Border Compliance & HR Support Icon',
    badge: content['scale-cards.3.badge'] ?? '100% Compliant'
  },
];

  const DELIVER_STEPS = [
  {
    step: content['deliver-steps.0.step'] ?? '01',
    title: content['deliver-steps.0.title'] ?? 'Client Need Identification',
    desc: content['deliver-steps.0.desc'] ?? 'Analisis mendalam terhadap kebutuhan & kualifikasi spesifik bisnis Anda.',
    imageSrc: content['deliver-steps.0.imageSrc'] ?? "/images/icon1.png",
    alt: content['deliver-steps.0.alt'] ?? 'Client Need Identification Icon',
  },
  {
    step: content['deliver-steps.1.step'] ?? '02',
    title: content['deliver-steps.1.title'] ?? 'Talent / Team Selection',
    desc: content['deliver-steps.1.desc'] ?? 'Proses seleksi ketat untuk mencocokkan kandidat/tim terbaik.',
    imageSrc: content['deliver-steps.1.imageSrc'] ?? "/images/icon2.png",
    alt: content['deliver-steps.1.alt'] ?? 'Talent Selection Icon',
  },
  {
    step: content['deliver-steps.2.step'] ?? '03',
    title: content['deliver-steps.2.title'] ?? 'Onboarding & Equipment Setup',
    desc: content['deliver-steps.2.desc'] ?? 'Penyiapan infrastruktur, perangkat, dan integrasi awal tim.',
    imageSrc: content['deliver-steps.2.imageSrc'] ?? "/images/icon3.png",
    alt: content['deliver-steps.2.alt'] ?? 'Onboarding & Setup Icon',
  },
  {
    step: content['deliver-steps.3.step'] ?? '04',
    title: content['deliver-steps.3.title'] ?? 'Live Monitoring & Reporting',
    desc: content['deliver-steps.3.desc'] ?? 'Pengawasan operasional harian beserta laporan kinerja real-time.',
    imageSrc: content['deliver-steps.3.imageSrc'] ?? "/images/icon4.png",
    alt: content['deliver-steps.3.alt'] ?? 'Live Monitoring Icon',
  },
];

  const GLOBAL_POINTS = [
  { text: content['global-points.0.text'] ?? 'Connect with potential partners, clients, or distributors across strategic Asian & European markets.' },
  { text: content['global-points.1.text'] ?? 'Expert guidance on regulatory frameworks, local culture, and tailored business practices.' },
  { text: content['global-points.2.text'] ?? 'Establish a robust local operational footprint with flexible, fully compliant solutions.' },
  { text: content['global-points.3.text'] ?? 'Gain priority access to a curated network of investors, suppliers, and strategic industry allies.' },
];

  const GLOBAL_STEPS = [
  {
    step: content['global-steps.0.step'] ?? '01',
    title: content['global-steps.0.title'] ?? 'Discovery Call &\nBusiness Need',
    desc: content['global-steps.0.desc'] ?? 'Pemetaan kebutuhan bisnis awal dan konsultasi eksklusif.',
    icon: Headphones,
    isActive: false,
  },
  {
    step: content['global-steps.1.step'] ?? '02',
    title: content['global-steps.1.title'] ?? 'Market Research &\nLocalization Plan',
    desc: content['global-steps.1.desc'] ?? 'Riset pasar mendalam dan penyesuaian strategi lokal.',
    icon: Target,
    isActive: false,
  },
  {
    step: content['global-steps.2.step'] ?? '03',
    title: content['global-steps.2.title'] ?? 'Business Matching &\nLocal Contacts',
    desc: content['global-steps.2.desc'] ?? 'Menghubungkan dengan mitra dan jaringan lokal tepercaya.',
    icon: Package,
    isActive: true,
  },
  {
    step: content['global-steps.3.step'] ?? '04',
    title: content['global-steps.3.title'] ?? 'Virtual Rep Office &\nOps Setup',
    desc: content['global-steps.3.desc'] ?? 'Pendirian kantor virtual dan infrastruktur operasional.',
    icon: Cpu,
    isActive: false,
  },
  {
    step: content['global-steps.4.step'] ?? '05',
    title: content['global-steps.4.title'] ?? 'Ongoing Advisory &\nMonitoring',
    desc: content['global-steps.4.desc'] ?? 'Dukungan konsultasi berkala dan pengawasan kualitatif.',
    icon: MonitorCheck,
    isActive: false,
  },
];

  const FEATURE_HIGHLIGHTS = [
  {
    slug: "layanan-ujung-ke-ujung",
    title: content['feature-highlights.0.title'] ?? 'Layanan Ujung-ke-Ujung',
    description: content['feature-highlights.0.description'] ?? 'Layanan menyeluruh dari analisis, perancangan, pengembangan, hingga pemeliharaan oleh tim profesional.',
    icon: Puzzle,
    bgColor: "bg-blue-50 text-blue-600 border-blue-200/80",
  },
  {
    slug: "mitra-resmi-terpercaya",
    title: content['feature-highlights.1.title'] ?? 'Mitra Resmi & Tepercaya',
    description: content['feature-highlights.1.description'] ?? 'Mitra resmi Google dan Sobot.io, bukti pengakuan standar global atas solusi andal kami.',
    icon: Handshake,
    bgColor: "bg-sky-50 text-sky-600 border-sky-200/80",
  },
  {
    slug: "roi-terukur",
    title: content['feature-highlights.2.title'] ?? 'ROI yang Terukur',
    description: content['feature-highlights.2.description'] ?? 'Berfokus pada efisiensi biaya, akselerasi proses, serta kepuasan pelanggan secara konkrit.',
    icon: LineChart,
    bgColor: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
  },
  {
    slug: "keamanan-kepatuhan",
    title: content['feature-highlights.3.title'] ?? 'Keamanan & Kepatuhan',
    description: content['feature-highlights.3.description'] ?? 'Prioritas tertinggi pada kepatuhan regulasi dan standar keamanan data global.',
    icon: Shield,
    bgColor: "bg-amber-50 text-amber-600 border-amber-200/80",
  },
];

  const [isBpoOpen, setIsBpoOpen] = useState<boolean>(true);
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState<number>(0);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [portfolioError, setPortfolioError] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const interval = setInterval(() => {
      setIsAnimating(true);
      timeoutId = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % ANIMATED_TITLES.length);
        setIsAnimating(false);
      }, 300);

      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [ANIMATED_TITLES.length, HERO_SLIDES.length]);

  useEffect(() => {
    let isMounted = true;

    getPortfolios()
      .then((items) => {
        if (isMounted) setPortfolios(items);
      })
      .catch((error: unknown) => {
        console.error("Gagal mengambil portofolio:", error);
        if (isMounted) setPortfolioError("Portofolio tidak dapat dimuat saat ini.");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const MainIcon = BPO_MAIN_SERVICE.icon;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {contentError && (
        <p role="alert" className="mx-auto max-w-7xl px-4 py-2 text-center text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg">
          {contentError}
        </p>
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-slate-50/90 via-white to-blue-50/50 text-slate-900 overflow-hidden pt-4 pb-6 lg:pt-6 lg:pb-8 px-6 border-b border-slate-200/80">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/25 via-sky-300/15 to-transparent rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-indigo-300/25 via-blue-200/20 to-transparent rounded-full blur-[160px] animate-pulse pointer-events-none" style={{ animationDuration: "9s" }} />

        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/3 right-12 w-40 h-40 bg-indigo-300/20 rounded-full blur-2xl animate-float-delayed pointer-events-none" />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: `36px 36px`
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/90 text-blue-700 text-xs font-black tracking-wide shadow-md backdrop-blur-md hover:border-blue-400 transition-all hover:scale-105 duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500 animate-spin" style={{ animationDuration: "6s" }} />
              <span>{content['home.hero-section.text.enterprise-managed-services-talent-solutions'] ?? 'Enterprise Managed Services & Talent Solutions'}</span>
            </div>

            <div className="min-h-[90px] sm:min-h-[110px] flex flex-col justify-start">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span
                  className={`block text-slate-900 transition-all duration-500 transform ${
                    isAnimating ? "opacity-0 -translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                >
                  {ANIMATED_TITLES[titleIndex]}
                </span>
                <span className="block mt-1 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent font-black">
                  {content['home.hero-section.text.for-your-business-growth'] ?? 'for Your Business Growth\r'}</span>
              </h1>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0">
              {content['home.hero-section.text.prima-services-membantu-enterprise-dan-bisnis-be'] ?? 'Prima Services membantu enterprise dan bisnis berkembang di Indonesia mengakselerasi operasional dengan solusi terintegrasi, aman, dan berstandar global.\r'}</p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={content['home.hero-section.href.contact'] ?? '/contact'}
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 text-white font-extrabold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                <span className="relative z-10">{content['home.hero-section.text.get-free-consultation'] ?? 'Get Free Consultation'}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 shadow-xs hover:shadow-md transition-shadow">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 animate-pulse" />
                  <span>{content['home.hero-section.text.iso-certified'] ?? 'ISO Certified'}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 shadow-xs hover:shadow-md transition-shadow">
                  <Clock className="w-4 h-4 text-blue-600 animate-pulse" />
                  <span>{content['home.hero-section.text.24-7-sla'] ?? '24/7 SLA'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[520px] aspect-[4/3]">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              <div className="relative w-full h-full p-3.5 bg-white/90 backdrop-blur-2xl border border-white/80 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group">
                <Image
                  key={heroSlideIndex}
                  src={HERO_SLIDES[heroSlideIndex].src}
                  alt={HERO_SLIDES[heroSlideIndex].alt}
                  fill
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-contain p-2 rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-105"
                  priority
                />
              </div>

              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl border border-slate-200/90 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 animate-float">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">{content['home.hero-section.text.efficiency'] ?? 'Efficiency'}</p>
                  <p className="text-xs font-black text-slate-900">{content['home.hero-section.text.45-growth'] ?? '+45% Growth'}</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-xl border border-slate-200/90 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 animate-float-delayed">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">{content['home.hero-section.text.status'] ?? 'Status'}</p>
                  <p className="text-xs font-black text-slate-900">{content['home.hero-section.text.24-7-active-sla'] ?? '24/7 Active SLA'}</p>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-white/90 backdrop-blur-md border border-slate-200/90 px-4 py-1.5 rounded-full shadow-md">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      heroSlideIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES SECTION ================= */}
      <section className="pt-6 pb-8 lg:pt-8 lg:pb-10 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-1.5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-700 text-xs font-black tracking-widest uppercase shadow-xs">
              {content['home.our-services-section.text.what-we-offer'] ?? 'What We Offer\r'}</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {content['home.our-services-section.text.our-services'] ?? 'OUR SERVICES\r'}</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
              {content['home.our-services-section.text.solusi-operasional-terpadu-dan-manajemen-talenta'] ?? 'Solusi operasional terpadu dan manajemen talenta yang dirancang untuk mempercepat skala bisnis Anda.\r'}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="group relative bg-gradient-to-br from-slate-50/90 via-white to-blue-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 rounded-t-3xl" />

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200/90 flex items-center justify-center text-blue-600 shadow-md shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <MainIcon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-100/80 px-2.5 py-0.5 rounded-md border border-blue-200 inline-block mb-1">
                      {content['home.our-services-section.text.core-offering'] ?? 'Core Offering\r'}</span>
                    <h3 className="font-extrabold text-slate-900 text-2xl md:text-3xl leading-snug">
                      {BPO_MAIN_SERVICE.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsBpoOpen(!isBpoOpen)}
                  className="p-3 rounded-2xl bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300 transition-all focus:outline-none cursor-pointer shadow-sm hover:scale-105"
                  aria-label={content['home.our-services-section.aria-label.toggle-details'] ?? 'Toggle Details'}
                >
                  <ChevronDown
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      isBpoOpen ? "rotate-180 text-blue-600" : "rotate-0"
                    }`}
                  />
                </button>
              </div>

              {isBpoOpen && (
                <div className="pt-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                      <span>{content['home.our-services-section.text.overview-capabilities'] ?? 'OVERVIEW & CAPABILITIES'}</span>
                    </p>

                    <div className="p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs">
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                        {BPO_MAIN_SERVICE.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 space-y-4">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                      {content['home.our-services-section.text.our-bpo-solutions-services'] ?? 'OUR BPO SOLUTIONS & SERVICES:\r'}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {BPO_SUB_SERVICES.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={`/services/details/${sub.slug}`}
                          aria-label={`Pelajari lebih lanjut: ${sub.title}`}
                          className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group/card"
                        >
                          <div>
                            <div className="relative w-full h-40 bg-slate-100 overflow-hidden" >
                              <Image
                                src={sub.imageSrc}
                                alt={sub.title}
                                fill
                                unoptimized
                                className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                              />
                            </div>

                            <div className="p-5 border-b border-slate-100" >
                              <h4 className="font-extrabold text-slate-900 text-base leading-snug group-hover/card:text-blue-600 transition-colors mb-1.5" >
                                {sub.title}
                              </h4>
                              <p className="text-xs text-slate-500 leading-relaxed" >
                                {sub.description}
                              </p>
                            </div>

                            <div className="p-5 bg-slate-50/50" >
                              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2" >
                                {content['home.our-services-section.text.key-offerings'] ?? 'Key Offerings:\r'}</p>
                              <ul className="space-y-2" >
                                {sub.points.map((pt, ptIdx) => (
                                  <li key={ptIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700" >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"  />
                                    <span className="leading-snug" >{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsBpoOpen(!isBpoOpen)}
                className="mt-4 pt-3 border-t border-slate-200/80 w-full flex items-center justify-center gap-2 text-xs font-extrabold tracking-wider uppercase text-blue-600 hover:text-blue-700 transition-colors focus:outline-none cursor-pointer"
              >
                <span>{isBpoOpen ? content['home.our-services-section.text.show-less'] ?? 'Show Less' : content['home.our-services-section.text.explore-capabilities'] ?? 'Explore Capabilities'}</span>
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

      {/* ================= BPO CAPABILITIES SECTION ================= */}
      <section className="bg-gradient-to-b from-white via-slate-50/80 to-white pt-6 pb-12 lg:pt-8 lg:pb-14 px-6 border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-700 text-xs font-extrabold uppercase tracking-wider shadow-xs">
              {content['home.bpo-capabilities-section.text.operational-excellence'] ?? 'Operational Excellence\r'}</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {content['home.bpo-capabilities-section.text.business-process-outsourcing-bpo'] ?? 'Business Process Outsourcing (BPO)\r'}</h2>
            <p className="text-slate-500 text-sm md:text-base">
              {content['home.bpo-capabilities-section.text.teknologi-dan-infrastruktur-operasional-terdedik'] ?? 'Teknologi dan infrastruktur operasional terdedikasi untuk skalabilitas bisnis.\r'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BPO_CARDS.map((card, idx) => (
              <Link
                key={idx}
                href={`/services/details/${card.slug}`}
                aria-label={`Pelajari lebih lanjut: ${card.title.replace(/\n/g, " ")}`}
                className="bg-white rounded-3xl p-6 text-center border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="relative w-20 h-20 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    width={80}
                    height={80}
                    quality={100}
                    unoptimized
                    className="object-contain"
                  />
                </div>

                <h3 className="font-extrabold text-slate-900 text-base mb-1.5 whitespace-pre-line group-hover:text-blue-600 transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE CONTROL & ENABLE SECTION ================= */}
      <section className="bg-white py-12 lg:py-14 px-6 border-b border-slate-200/80 relative">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-700 text-xs font-extrabold tracking-wider uppercase shadow-xs">
                <Shield className="w-3.5 h-3.5 text-amber-600 animate-bounce" />
                <span>{content['home.how-we-control-enable-section.text.governance-quality-assurance'] ?? 'Governance & Quality Assurance'}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {content['home.how-we-control-enable-section.text.how-we-control'] ?? 'How We Control '}<span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent font-extrabold text-2xl md:text-3xl block sm:inline">{content['home.how-we-control-enable-section.text.playbooks-governance'] ?? '(Playbooks & Governance)'}</span>
              </h2>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                {content['home.how-we-control-enable-section.text.kami-menyediakan-standar-operasional-fleksibel-b'] ?? 'Kami menyediakan standar operasional fleksibel berbasis SLA, QA terukur, dan pemantauan berkala.\r'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTROL_ITEMS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={`/services/details/${item.slug}`}
                    aria-label={`Pelajari lebih lanjut: ${item.title}`}
                    className="group relative bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:border-blue-300 flex flex-col justify-between overflow-hidden shadow-xs"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor} opacity-90 group-hover:opacity-100 transition-opacity`} />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${item.badgeBg} flex items-center justify-center border shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-6 h-6 stroke-[1.8]" />
                        </div>
                        <span className="text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                          {content['home.how-we-control-enable-section.text.0'] ?? '0'}{index + 1}
                        </span>
                      </div>

                      <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span>{content['home.how-we-control-enable-section.text.standards-verified'] ?? 'Standards Verified'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <div className="text-center md:text-left space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/90 shadow-xs">
                <Cpu className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: "10s" }} />
                <span>{content['home.how-we-control-enable-section.text.integrated-tech-stack'] ?? 'Integrated Tech Stack'}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {content['home.how-we-control-enable-section.text.how-we-enable'] ?? 'How We Enable '}<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold text-lg md:text-2xl block sm:inline">{content['home.how-we-control-enable-section.text.tools-integrations'] ?? '(Tools & Integrations)'}</span>
              </h2>
            </div>

            <div className="space-y-3">
              {INTEGRATIONS.map((row, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-50/60 hover:bg-white rounded-2xl p-4 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${row.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 p-2 shadow-sm group-hover:scale-110 transition-transform">
                      <Image
                        src={row.logoSrc}
                        alt={row.title}
                        width={36}
                        height={36}
                        quality={100}
                        unoptimized
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {row.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {row.sub}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-auto shrink-0">
                    <div className="inline-flex items-center justify-center gap-2 bg-blue-50 border border-blue-200/80 px-4 py-2 rounded-full text-xs font-bold text-blue-700 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-300" />
                      <span>{row.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= RECRUITMENT & RPO SECTION ================= */}
      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-12 lg:py-14 px-6 border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-600 text-xs font-extrabold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{content['home.recruitment-rpo-section.text.end-to-end-talent-acquisition'] ?? 'End-to-End Talent Acquisition'}</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {content['home.recruitment-rpo-section.text.how-we-recruit'] ?? 'How We Recruit '}<span className="text-blue-600 font-bold text-xl md:text-2xl block sm:inline">{content['home.recruitment-rpo-section.text.rpo-process'] ?? '(RPO Process)'}</span>
              </h2>
            </div>

            <div className="bg-white border border-slate-200/90 px-4 py-2 rounded-2xl shadow-xs shrink-0">
              <div className="relative w-24 h-6">
                <Image
                  src={content['recruitment-rpo-section.logo.src'] ?? "/images/logo.png"}
                  alt={content['home.recruitment-rpo-section.alt.prima-services-logo'] ?? 'Prima Services Logo'}
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BPO_SUB_SERVICES.map((card, idx) => (
              <Link
                key={idx}
                href={`/services/details/${card.slug}`}
                aria-label={`Pelajari lebih lanjut: ${card.title}`}
                className="group relative bg-white text-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black tracking-wider uppercase px-3 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/90">
                      {content['home.recruitment-rpo-section.text.service-0'] ?? 'SERVICE 0'}{idx + 1}
                    </span>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-600 transition-colors">
                      {content['home.recruitment-rpo-section.text.0'] ?? '0'}{idx + 1}
                    </span>
                  </div>

                  <div className="relative w-full h-40 mb-4 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner group/img">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      quality={100}
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                    />
                  </div>

                  <h3 className="text-base font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50/60 group-hover:bg-blue-50/30 -mx-6 -mb-6 p-6 transition-colors">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">{content['home.recruitment-rpo-section.text.key-deliverables'] ?? 'Key Deliverables:'}</p>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2" >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"  />
                        <span className="leading-snug" >{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE SCALE SECTION ================= */}
      <section className="bg-white py-12 lg:py-14 px-6 border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-600 text-xs font-extrabold tracking-wider uppercase">
                <Layers className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
                <span>{content['home.how-we-scale-section.text.scalable-operation-framework'] ?? 'Scalable Operation Framework'}</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {content['home.how-we-scale-section.text.how-we-scale'] ?? 'How We Scale '}<span className="text-blue-600 font-bold text-xl md:text-2xl block sm:inline">{content['home.how-we-scale-section.text.outsourcing-services'] ?? '(Outsourcing Services)'}</span>
              </h2>
              <p className="text-slate-500 text-xs md:text-sm font-normal pt-0.5">
                {content['home.how-we-scale-section.text.merancang-menjalankan-dan-mengoptimalkan-operasi'] ?? 'Merancang, menjalankan, dan mengoptimalkan operasional bisnis Anda secara fleksibel baik on-site maupun remote.\r'}</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl shadow-xs shrink-0">
              <div className="relative w-24 h-6">
                <Image
                  src={content['how-we-scale-section.logo.src'] ?? "/images/logo.png"}
                  alt={content['home.how-we-scale-section.alt.prima-services-logo'] ?? 'Prima Services Logo'}
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCALE_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-300 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group shadow-xs relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-md border border-blue-200">
                      {card.badge}
                    </span>
                    <span className="text-lg font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {card.step}
                    </span>
                  </div>

                  <div className="relative w-full h-32 mb-4 rounded-2xl bg-white border border-slate-200/80 p-3 flex items-center justify-center group-hover:bg-blue-50/40 transition-colors">
                    <Image
                      src={card.imageSrc}
                      alt={card.alt}
                      fill
                      unoptimized
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-200/80">
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE DELIVER SECTION ================= */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-12 lg:py-14 px-6 border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-600 text-xs font-black tracking-wider uppercase">
              {content['home.how-we-deliver-section.text.step-by-step-execution'] ?? 'Step-by-Step Execution\r'}</span>
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {content['home.how-we-deliver-section.text.how-we-deliver'] ?? 'How We Deliver '}<span className="text-blue-600 font-normal text-lg md:text-2xl block md:inline">{content['home.how-we-deliver-section.text.outsourcing-flow'] ?? '(Outsourcing Flow)'}</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              {content['home.how-we-deliver-section.text.proses-alur-kerja-yang-terstruktur-dan-terukur-u'] ?? 'Proses alur kerja yang terstruktur dan terukur untuk memastikan efisiensi optimal.\r'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVER_STEPS.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-blue-300 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <Image
                        src={card.imageSrc}
                        alt={card.alt}
                        width={40}
                        height={40}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {card.step}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-end text-[11px] text-blue-600 font-extrabold">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL RELATIONS SECTION ================= */}
      <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-12 lg:py-14 px-6 border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
                  <Globe2 className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: "12s" }} />
                  <span>{content['home.global-relations-section.text.global-relations-expansion'] ?? 'GLOBAL RELATIONS & EXPANSION'}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {content['home.global-relations-section.text.international'] ?? 'International '}<br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    {content['home.global-relations-section.text.partnerships-expansion'] ?? 'Partnerships & Expansion\r'}</span>
                </h2>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg">
                  {content['home.global-relations-section.text.akselerasi-jangkauan-bisnis-anda-ke-pasar-global'] ?? 'Akselerasi jangkauan bisnis Anda ke pasar global dengan dukungan konsultasi regulasi, pemetaan jaringan lokal, dan kemitraan strategis.\r'}</p>
              </div>

              <div className="space-y-2.5 pt-1">
                {GLOBAL_POINTS.map((point, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-start gap-3.5 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-600 group-hover:text-white flex items-center justify-center shrink-0 font-bold text-xs transition-colors duration-300 shadow-xs">
                      {content['home.global-relations-section.text.0'] ?? '0'}{idx + 1}
                    </div>

                    <div className="space-y-0.5 pt-0.5">
                      <p className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-slate-900 leading-snug transition-colors">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center relative pt-4 lg:pt-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 via-indigo-100 to-sky-100 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

              <div className="relative w-full max-w-[500px] bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-xl shadow-slate-200/50">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <Image
                    src={content['global-relations-section.image.src'] ?? "/images/global-map.png"}
                    alt={content['home.global-relations-section.alt.global-world-map'] ?? 'Global World Map'}
                    fill
                    unoptimized
                    className="object-contain p-2 hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3 py-1.5 rounded-2xl shadow-lg hidden sm:flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    <Globe2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{content['home.global-relations-section.text.network'] ?? 'Network'}</p>
                    <p className="text-xs font-extrabold text-slate-900">{content['home.global-relations-section.text.50-global-partners'] ?? '50+ Global Partners'}</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3 py-1.5 rounded-2xl shadow-lg hidden sm:flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{content['home.global-relations-section.text.compliance'] ?? 'Compliance'}</p>
                    <p className="text-xs font-extrabold text-slate-900">{content['home.global-relations-section.text.100-regulated'] ?? '100% Regulated'}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW WE ENABLE GLOBAL GROWTH ================= */}
      <section className="bg-gradient-to-b from-slate-50 via-blue-50/20 to-white py-12 lg:py-14 px-6 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200/90 text-blue-700 text-xs font-black tracking-widest uppercase shadow-xs">
              {content['home.how-we-enable-global-growth.text.end-to-end-methodology'] ?? 'End-to-End Methodology\r'}</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {content['home.how-we-enable-global-growth.text.how-we-enable'] ?? 'How We Enable '}<span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">{content['home.how-we-enable-global-growth.text.global-growth'] ?? 'Global Growth'}</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto font-normal">
              {content['home.how-we-enable-global-growth.text.metodologi-terstruktur-untuk-mendukung-akseleras'] ?? 'Metodologi terstruktur untuk mendukung akselerasi bisnis ke ranah global secara berkelanjutan.\r'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {GLOBAL_STEPS.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className={`group rounded-3xl p-5 transition-all duration-500 flex flex-col justify-between border relative overflow-hidden ${
                    item.isActive
                      ? 'bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 text-white border-blue-500 shadow-2xl shadow-blue-500/30 lg:-translate-y-2 z-10'
                      : 'bg-white border-slate-200/90 text-slate-700 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1.5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-extrabold tracking-widest px-2.5 py-0.5 rounded-full uppercase border ${
                        item.isActive ? 'bg-white/20 border-white/30 text-white' : 'bg-blue-50 border-blue-100 text-blue-600'
                      }`}>
                        {content['home.how-we-enable-global-growth.text.step'] ?? 'STEP '}{item.step}
                      </span>
                      <div className={`p-2.5 rounded-2xl ${item.isActive ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-600 group-hover:text-blue-600 group-hover:bg-blue-50'} transition-colors`}>
                        <IconComponent className="w-4 h-4 stroke-[1.8]" />
                      </div>
                    </div>

                    <h3 className={`text-sm md:text-base font-extrabold leading-snug whitespace-pre-line mb-2 ${item.isActive ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-normal ${item.isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${item.isActive ? 'border-white/20' : 'border-slate-100'}`}>
                    {item.isActive && (
                      <span className="text-amber-300 font-black flex items-center gap-1.5 animate-pulse" >
                        <CheckCircle2 className="w-4 h-4 text-amber-300 fill-amber-300/20"  /> {content['home.how-we-enable-global-growth.text.active'] ?? 'Active\r'}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section className="bg-white py-12 lg:py-14 px-6 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-1.5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-black tracking-wider uppercase">
              {content['home.portfolio-section.text.showcase-works'] ?? 'Showcase & Works\r'}</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {content['home.portfolio-section.text.our-portfolios'] ?? 'Our Portfolios\r'}</h2>
            <p className="text-sm text-slate-500">
              {content['home.portfolio-section.text.dokumentasi-antarmuka-dan-hasil-kerja-sistem-yan'] ?? 'Dokumentasi antarmuka dan hasil kerja sistem yang telah kami kembangkan\r'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolios.map((item) => (
              <div
                key={item.id}
                className="group relative bg-slate-900 rounded-3xl p-3.5 h-[300px] sm:h-[350px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-slate-800 flex flex-col justify-between"
              >
                <div className="relative w-full h-[80%] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={100}
                    unoptimized
                    className="object-contain p-2 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="px-2 py-1 flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">{item.category}</p>
                    <h3 className="text-sm font-extrabold">{item.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {portfolioError ? (
            <p role="alert" className="text-center text-xs text-rose-600 py-6">{portfolioError}</p>
          ) : portfolios.length === 0 ? (
            <p className="text-center text-xs text-slate-400 py-6">{content['home.portfolio-section.text.portofolio-belum-tersedia'] ?? 'Portofolio belum tersedia.'}</p>
          ) : null}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-12 lg:py-14 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 md:p-12 shadow-2xl border border-blue-700/50 flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="max-w-xl space-y-4 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold backdrop-blur-md">
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300 animate-bounce" />
                <span>{content['home.cta-section.text.scalable-reliable-solutions'] ?? 'Scalable & Reliable Solutions'}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                {content['home.cta-section.text.ready-to-scale-your'] ?? 'Ready to Scale Your '}<span className="text-amber-300 block sm:inline">{content['home.cta-section.text.business-operations'] ?? 'Business Operations?'}</span>
              </h2>

              <p className="text-xs md:text-sm text-blue-100 leading-relaxed font-normal">
                {content['home.cta-section.text.mulai-transformasi-efisiensi-operasional-dan-tal'] ?? 'Mulai transformasi efisiensi operasional dan talenta terbaik bisnis Anda hari ini bersama tim profesional kami.\r'}</p>

              <div className="pt-1">
                <Link
                  href={content['home.cta-section.href.contact'] ?? '/contact'}
                  className="relative group overflow-hidden inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-full text-xs md:text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                >
                  <span className="relative z-10">{content['home.cta-section.text.hubungi-kami-sekarang'] ?? 'Hubungi Kami Sekarang'}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2 h-[240px] md:h-[280px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
              <Image
                src={content['cta-section.image.src'] ?? "/images/bitmap2.png"}
                alt={content['home.cta-section.alt.discussion'] ?? 'Discussion'}
                fill
                quality={100}
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE HIGHLIGHTS SECTION ================= */}
      <section className="bg-white py-12 px-6 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_HIGHLIGHTS.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <Link
                  key={idx}
                  href={`/advantages/${feature.slug}`}
                  aria-label={`Pelajari lebih lanjut: ${feature.title}`}
                  className="bg-slate-50/70 rounded-3xl p-6 text-center border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center group"
                >
                  <div className={`w-12 h-12 ${feature.bgColor} border rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-xs`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Keyframes Animation Injection */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 6s ease-in-out infinite;
        }
      `}</style>

    </div>
  );
}
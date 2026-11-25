"use client";

import React, { useState, useEffect } from "react";
import { usePageContent } from "@/lib/use-page-content";
import { useLocale } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { getPortfolios, type PortfolioItem } from "@/lib/portfolioService";
import {
  Target,
  Headphones,
  Package,
  MonitorCheck,
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
  Users,
  Settings,
  Cloud,
  BarChart3,
  PhoneCall,
  MessageSquareText,
  UserCheck,
  PlugZap,
  MessagesSquare,
  Bot,
  Share2,
  BookOpen,
  LayoutDashboard,
  Code2,
  Server,
  X
} from "lucide-react";

type IntegrationPlatform = {
  slug: string;
  name: string;
  subtitle: string;
  logoSrc: string;
  fallbackIcon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  desc: string;
  fullDescription: string;
  accent: string;
  badgeBg: string;
  iconBg: string;
  features: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
};

export default function Page() {
  const { content, error: contentError } = usePageContent('home');
  const { translate } = useLocale();

  const ANIMATED_TITLES = [
    content['animated-titles.0'] ?? 'IT Managed Services & Talent Management',
    content['animated-titles.1'] ?? 'Ops Services & Process Optimization',
    content['animated-titles.2'] ?? 'Customer Support & CX Management',
    content['animated-titles.3'] ?? 'Back Office Ops & Data Management'
  ];

  const heroSlideCount = Math.min(
    10,
    Math.max(1, Number.parseInt(content["hero-slides.count"] ?? "4", 10) || 4),
  );
  const HERO_SLIDES = Array.from({ length: heroSlideCount }, (_, index) => ({
    id: index + 1,
    src:
      content[`hero-slides.${index}.src`] ??
      (index < 4 ? `/images/dashboard${index + 1}.jpg` : ""),
    alt: content[`hero-slides.${index}.alt`] ?? `Dashboard Preview ${index + 1}`,
  }));

  const CONTROL_ITEMS = [
    {
      slug: "sop-operasional",
      icon: Puzzle,
      title: content['control-items.0.title'] ?? 'Short SOPs per Function',
      accentColor: "from-blue-600 via-sky-500 to-cyan-400",
      badgeBg: "bg-blue-50/80 text-blue-600 border-blue-200/80",
    },
    {
      slug: "quality-assurance-coaching",
      icon: Handshake,
      title: content['control-items.1.title'] ?? 'QA Scorecards & Coaching',
      accentColor: "from-amber-500 via-orange-500 to-yellow-400",
      badgeBg: "bg-amber-50/80 text-amber-600 border-amber-200/80",
    },
    {
      slug: "dashboard-real-time",
      icon: LineChart,
      title: content['control-items.2.title'] ?? 'Real-time Dashboards',
      accentColor: "from-indigo-600 via-blue-600 to-sky-400",
      badgeBg: "bg-indigo-50/80 text-indigo-600 border-indigo-200/80",
    },
  ];

  const INTEGRATIONS: IntegrationPlatform[] = [
    {
      slug: "google-partner",
      name: "Google Partner",
      subtitle: "Cloud, Productivity & Collaboration",
      logoSrc: content['integrations.0.logoSrc'] ?? "/images/enable3.png",
      fallbackIcon: Cpu,
      title: content['integrations.0.title'] ?? 'Google Partner (Cloud, Productivity & Collaboration)',
      sub:
        content['integrations.0.sub'] ??
        'Google Cloud Infrastructure, Google Workspace, Data & Analytics, Security & Compliance',
      desc:
        content['integrations.0.desc'] ??
        'Work smarter & scale faster with unified cloud platforms',
      fullDescription:
        'Cloud, productivity, and collaboration solutions to help organizations work smarter and scale faster.',
      accent: "bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/80",
      features: [
        { label: "Google Cloud Infrastructure", icon: Cloud },
        { label: "Google Workspace", icon: Users },
        { label: "Data & Analytics", icon: BarChart3 },
        { label: "Security & Compliance", icon: ShieldCheck },
      ],
    },
    {
      slug: "mitel-voice-intelligence",
      name: "MiiTel",
      subtitle: "Voice Intelligence",
      logoSrc: content['integrations.1.logoSrc'] ?? "/images/enable2.png",
      fallbackIcon: Activity,
      title: content['integrations.1.title'] ?? 'MiiTel (Voice Intelligence)',
      sub:
        content['integrations.1.sub'] ??
        'Voice Analytics, Conversation Intelligence, Quality Management, Agent Coaching & CRM/CC Integrations',
      desc:
        content['integrations.1.desc'] ??
        'Turns conversations into measurable performance',
      fullDescription:
        'AI-powered voice analytics that turns conversations into measurable performance.',
      accent: "bg-gradient-to-r from-indigo-500 to-purple-600",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200/80",
      features: [
        { label: "Voice Analytics", icon: PhoneCall },
        { label: "Conversation Intelligence", icon: MessageSquareText },
        { label: "Quality Management", icon: CheckCircle2 },
        { label: "Agent Coaching", icon: UserCheck },
        { label: "CRM / CC Integrations (Optional Dialer & AI IVR)", icon: PlugZap },
      ],
    },
    {
      slug: "sobot-customer-engagement",
      name: "Sobot",
      subtitle: "Customer Engagement",
      logoSrc: content['integrations.2.logoSrc'] ?? "/images/enable1.png",
      fallbackIcon: Headphones,
      title: content['integrations.2.title'] ?? 'Sobot (Customer Engagement)',
      sub:
        content['integrations.2.sub'] ??
        'Omnichannel Messaging, Chatbot & Automation, CRM Integration, Knowledge Management & Unified Agent Workspace',
      desc:
        content['integrations.2.desc'] ??
        'Seamless & consistent omnichannel experiences',
      fullDescription:
        'Omnichannel customer engagement platform to deliver seamless and consistent experiences.',
      accent: "bg-gradient-to-r from-sky-400 to-teal-500",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      iconBg: "bg-teal-50 text-teal-600 border-teal-200/80",
      features: [
        { label: "Omnichannel Messaging", icon: MessagesSquare },
        { label: "Chatbot & Automation", icon: Bot },
        { label: "CRM Integration", icon: Share2 },
        { label: "Knowledge Management", icon: BookOpen },
        { label: "Unified Agent Workspace & Reporting", icon: LayoutDashboard },
      ],
    },
    {
      slug: "stack-technology-solutions",
      name: "STACK",
      subtitle: "Technology & Digital Solutions",
      logoSrc: content['integrations.3.logoSrc'] ?? "/images/enable4.png",
      fallbackIcon: Layers,
      title: content['integrations.3.title'] ?? 'STACK (Technology & Digital Solutions)',
      sub:
        content['integrations.3.sub'] ??
        'Digital Platform, System Integration, Product Engineering, Managed Services & Support',
      desc:
        content['integrations.3.desc'] ??
        'Accelerate business transformation with digital products',
      fullDescription:
        'Advanced technology solutions and digital products to accelerate business transformation.',
      accent: "bg-gradient-to-r from-violet-600 to-indigo-600",
      badgeBg: "bg-violet-50 text-violet-700 border-violet-200",
      iconBg: "bg-violet-50 text-violet-600 border-violet-200/80",
      features: [
        { label: "Digital Platform", icon: Code2 },
        { label: "System Integration", icon: Puzzle },
        { label: "Product Engineering", icon: Settings },
        { label: "Managed Services & Support", icon: Server },
      ],
    },
  ];

  const SCALE_CARDS = [
    {
      id: "employee",
      slug: "employee-team-outsourcing",
      step: content['scale-cards.0.step'] ?? '01',
      title: content['scale-cards.0.title'] ?? 'Employee & Team Outsourcing',
      imageSrc: content['scale-cards.0.imageSrc'] ?? "/images/scale-employee.png",
      alt: content['scale-cards.0.alt'] ?? 'Employee & Team Outsourcing Icon',
      badge: content['scale-cards.0.badge'] ?? 'Scale Rapidly'
    },
    {
      id: "remote",
      slug: "remote-workforce-management",
      step: content['scale-cards.1.step'] ?? '02',
      title: content['scale-cards.1.title'] ?? 'Remote Workforce Management',
      imageSrc: content['scale-cards.1.imageSrc'] ?? "/images/scale-remote.png",
      alt: content['scale-cards.1.alt'] ?? 'Remote Workforce Management Icon',
      badge: content['scale-cards.1.badge'] ?? 'Global Reach'
    },
    {
      id: "virtual",
      slug: "virtual-team-setup-monitoring",
      step: content['scale-cards.2.step'] ?? '03',
      title: content['scale-cards.2.title'] ?? 'Virtual Team Setup & Monitoring',
      imageSrc: content['scale-cards.2.imageSrc'] ?? "/images/scale-virtual.png",
      alt: content['scale-cards.2.alt'] ?? 'Virtual Team Setup & Monitoring Icon',
      badge: content['scale-cards.2.badge'] ?? 'Real-time Control'
    },
    {
      id: "compliance",
      slug: "cross-border-compliance-hr-support",
      step: content['scale-cards.3.step'] ?? '04',
      title: content['scale-cards.3.title'] ?? 'Cross-Border Compliance & HR Support',
      imageSrc: content['scale-cards.3.imageSrc'] ?? "/images/scale-compliance.png",
      alt: content['scale-cards.3.alt'] ?? 'Cross-Border Compliance & HR Support Icon',
      badge: content['scale-cards.3.badge'] ?? '100% Compliant'
    },
  ];

  const DELIVER_STEPS = [
    {
      slug: "outsourcing-solution",
      step: content['deliver-steps.0.step'] ?? '01',
      title: content['deliver-steps.0.title'] ?? 'Client Need Identification',
      imageSrc: content['deliver-steps.0.imageSrc'] ?? "/images/icon1.png",
      alt: content['deliver-steps.0.alt'] ?? 'Client Need Identification Icon',
    },
    {
      slug: "outsourcing-solution",
      step: content['deliver-steps.1.step'] ?? '02',
      title: content['deliver-steps.1.title'] ?? 'Talent / Team Selection',
      imageSrc: content['deliver-steps.1.imageSrc'] ?? "/images/icon2.png",
      alt: content['deliver-steps.1.alt'] ?? 'Talent Selection Icon',
    },
    {
      slug: "outsourcing-solution",
      step: content['deliver-steps.2.step'] ?? '03',
      title: content['deliver-steps.2.title'] ?? 'Onboarding & Equipment Setup',
      imageSrc: content['deliver-steps.2.imageSrc'] ?? "/images/icon3.png",
      alt: content['deliver-steps.2.alt'] ?? 'Onboarding & Setup Icon',
    },
    {
      slug: "outsourcing-solution",
      step: content['deliver-steps.3.step'] ?? '04',
      title: content['deliver-steps.3.title'] ?? 'Live Monitoring & Reporting',
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

  const [governanceTab, setGovernanceTab] = useState<'control' | 'enable'>('enable');
  const [scaleTab, setScaleTab] = useState<'scale' | 'deliver'>('scale');
  const [selectedPlatform, setSelectedPlatform] = useState<IntegrationPlatform | null>(null);
  const [titleIndex, setTitleIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState<number>(0);
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [portfolioError, setPortfolioError] = useState("");
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  // Simpan tab aktif dan kembalikan posisi scroll tepat di kartu yang ditekan
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedScaleTab = sessionStorage.getItem("home_scale_tab");
    if (savedScaleTab === "scale" || savedScaleTab === "deliver") {
      setScaleTab(savedScaleTab);
    }

    const savedGovernanceTab = sessionStorage.getItem("home_governance_tab");
    if (savedGovernanceTab === "control" || savedGovernanceTab === "enable") {
      setGovernanceTab(savedGovernanceTab);
    }

    const savedScrollY = sessionStorage.getItem("home_scroll_y");
    if (savedScrollY) {
      const targetY = Number(savedScrollY);
      sessionStorage.removeItem("home_scroll_y");
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: targetY, behavior: "instant" });
        }, 60);
      });
    }
  }, []);

  const handleCardClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("home_scroll_y", String(window.scrollY));
      sessionStorage.setItem("home_scale_tab", scaleTab);
      sessionStorage.setItem("home_governance_tab", governanceTab);
    }
  };

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

  // Daftar judul kartu portofolio yang dinonaktifkan kliknya
  const isDisabledPortfolio = (title: string) => {
    const normalized = title.toLowerCase().trim();
    return (
      normalized.includes("performance & insights analytics") ||
      normalized.includes("real-time telemetry center")
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {contentError && (
        <p role="alert" className="mx-auto max-w-7xl px-4 py-2 text-center text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg">
          {translate(contentError)}
        </p>
      )}

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-slate-50/90 via-white to-blue-50/50 text-slate-900 overflow-hidden pt-4 pb-6 lg:pt-6 lg:pb-8 px-6 border-b border-slate-200/80">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 via-sky-300/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] bg-gradient-to-tl from-indigo-300/20 via-blue-200/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: `36px 36px`
          }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/90 text-blue-700 text-xs font-black tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{translate(content['home.hero-section.text.enterprise-managed-services-talent-solutions'] ?? 'Enterprise Managed Services & Talent Solutions')}</span>
            </div>

            <div className="min-h-[84px] sm:min-h-[104px] flex flex-col justify-start">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span
                  className={`block text-slate-900 transition-all duration-500 transform ${
                    isAnimating ? "opacity-0 -translate-y-3 scale-95" : "opacity-100 translate-y-0 scale-100"
                  }`}
                >
                  {translate(ANIMATED_TITLES[titleIndex])}
                </span>
                <span className="block mt-1 bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent font-black">
                  {translate(content['home.hero-section.text.for-your-business-growth'] ?? 'for Your Business Growth')}
                </span>
              </h1>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0">
              {translate(content['home.hero-section.text.prima-services-membantu-enterprise-dan-bisnis-be'] ?? 'Prima Services membantu Indonesian enterprises and businesses accelerate operations with integrated, secure, and globally standardized solutions.')}
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href={content['home.hero-section.href.contact'] ?? '/contact'}
                className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 text-white font-extrabold text-sm px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="relative z-10">{translate(content['home.hero-section.text.get-free-consultation'] ?? 'Get Free Consultation')}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{translate(content['home.hero-section.text.iso-certified'] ?? 'ISO Certified')}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-700 shadow-xs">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{translate(content['home.hero-section.text.24-7-sla'] ?? '24/7 SLA')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[480px] aspect-[4/3]">
              <div className="relative w-full h-full p-3 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden group">
                <Image
                  key={heroSlideIndex}
                  src={HERO_SLIDES[heroSlideIndex].src}
                  alt={translate(HERO_SLIDES[heroSlideIndex].alt)}
                  fill
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain p-2 rounded-2xl transition-all duration-700 ease-in-out"
                  priority
                />
              </div>

              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl shadow-lg hidden sm:flex items-center gap-2.5 animate-float">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">{translate(content['home.hero-section.text.efficiency'] ?? 'Efficiency')}</p>
                  <p className="text-xs font-black text-slate-900">{translate(content['home.hero-section.text.45-growth'] ?? '+45% Growth')}</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 p-3 rounded-2xl shadow-lg hidden sm:flex items-center gap-2.5 animate-float-delayed">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">{translate(content['home.hero-section.text.status'] ?? 'Status')}</p>
                  <p className="text-xs font-black text-slate-900">{translate(content['home.hero-section.text.24-7-active-sla'] ?? '24/7 Active SLA')}</p>
                </div>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-white/90 backdrop-blur-md border border-slate-200/90 px-3 py-1 rounded-full shadow-sm">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setHeroSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      heroSlideIndex === idx ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`${translate("Go to slide")} ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. DELIVERY & SCALING FRAMEWORK (RIGHT AFTER HERO) ================= */}
      <section id="scale-deliver" className="bg-gradient-to-b from-slate-50/60 to-white py-10 px-6 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200/90 text-blue-600 text-[11px] font-extrabold tracking-wider uppercase">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>{translate("Execution & Delivery")}</span>
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {translate("How We Scale & Deliver")}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xl">
                {translate(content['home.how-we-scale-section.text.merancang-menjalankan-dan-mengoptimalkan-operasi'] ?? 'Structured workflows for managing remote and on-site teams, with regular reporting.')}
              </p>
            </div>

            <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200/80 self-start">
              <button
                type="button"
                onClick={() => setScaleTab('scale')}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  scaleTab === 'scale'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {translate("How We Scale")}
              </button>
              <button
                type="button"
                onClick={() => setScaleTab('deliver')}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  scaleTab === 'deliver'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {translate("Delivery Flow")}
              </button>
            </div>
          </div>

          {scaleTab === 'scale' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
              {SCALE_CARDS.map((card) => (
                <Link
                  key={card.id}
                  href={`/services/details/${card.slug}`}
                  scroll={false}
                  onClick={handleCardClick}
                  aria-label={`${translate("Learn more:")} ${translate(card.title)}`}
                  className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-4 transition-all hover:shadow-lg flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                        {translate(card.badge)}
                      </span>
                      <span className="text-base font-black text-slate-300 group-hover:text-blue-600">
                        {card.step}
                      </span>
                    </div>
                    <div className="relative w-full h-24 mb-3 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                      <Image
                        src={card.imageSrc}
                        alt={translate(card.alt)}
                        fill
                        unoptimized
                        className="object-contain p-1.5 group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </div>
                  <div className="text-center pt-2 border-t border-slate-100">
                    <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {translate(card.title)}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {scaleTab === 'deliver' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-300">
              {DELIVER_STEPS.map((card, idx) => (
                <Link
                  key={idx}
                  href={`/services/details/${card.slug}`}
                  scroll={false}
                  onClick={handleCardClick}
                  aria-label={`${translate("Learn more:")} ${translate(card.title)}`}
                  className="bg-white border border-slate-200/90 hover:border-blue-300 rounded-2xl p-4 transition-all hover:shadow-lg flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 p-1.5 flex items-center justify-center">
                      <Image
                        src={card.imageSrc}
                        alt={translate(card.alt)}
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-lg font-black text-slate-300 group-hover:text-blue-600">
                      {card.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {translate(card.title)}
                  </h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= 3. GOVERNANCE & TECH STACK (COMPACT TABBED) ================= */}
      <section id="control-enable" className="bg-white py-10 px-6 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200/90 text-amber-700 text-[11px] font-extrabold tracking-wider uppercase">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>{translate(content['home.how-we-control-enable-section.text.governance-quality-assurance'] ?? 'Governance & Quality Assurance')}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {translate("How We Control & Enable")}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xl">
                {governanceTab === 'enable'
                  ? translate('A unified set of collaboration, engagement, intelligence and business platforms.')
                  : translate(content['home.how-we-control-enable-section.text.kami-menyediakan-standar-operasional-fleksibel-b'] ?? 'We provide flexible operational standards based on SLAs, measurable QA, and regular monitoring.')}
              </p>
            </div>

            <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200/80 self-start">
              <button
                type="button"
                onClick={() => setGovernanceTab('control')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  governanceTab === 'control'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {translate("Playbooks & Governance")}
              </button>
              <button
                type="button"
                onClick={() => setGovernanceTab('enable')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  governanceTab === 'enable'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {translate("Tools & Integrations")}
              </button>
            </div>
          </div>

          {governanceTab === 'control' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
              {CONTROL_ITEMS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={`/services/details/${item.slug}`}
                    scroll={false}
                    onClick={handleCardClick}
                    aria-label={`${translate("Learn more:")} ${translate(item.title)}`}
                    className="group relative bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 transition-all hover:bg-white hover:shadow-lg hover:border-blue-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor}`} />
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${item.badgeBg} flex items-center justify-center border`}>
                        <IconComponent className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-black text-slate-300 group-hover:text-blue-600">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {translate(item.title)}
                    </h3>
                    <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-extrabold text-slate-400 group-hover:text-blue-600">
                      <span>{translate(content['home.how-we-control-enable-section.text.standards-verified'] ?? 'Standards Verified')}</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="space-y-2.5 animate-in fade-in duration-300">
              {INTEGRATIONS.map((row) => {
                const FallbackIcon = row.fallbackIcon;
                return (
                  <button
                    key={row.slug}
                    type="button"
                    onClick={() => setSelectedPlatform(row)}
                    aria-label={`${translate("View platform details:")} ${translate(row.title)}`}
                    className="w-full text-left group relative bg-slate-50/70 hover:bg-white rounded-2xl p-3.5 md:px-5 flex flex-col md:flex-row items-center justify-between gap-3 border border-slate-200/90 hover:shadow-md hover:border-blue-300 transition-all overflow-hidden cursor-pointer"
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${row.accent}`} />
                    <div className="flex items-center gap-3.5 w-full md:w-auto">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 p-1.5">
                        {!failedLogos[row.slug] ? (
                          <Image
                            src={row.logoSrc}
                            alt={translate(row.title)}
                            width={32}
                            height={32}
                            quality={100}
                            unoptimized
                            className="object-contain"
                            onError={() =>
                              setFailedLogos((prev) => ({ ...prev, [row.slug]: true }))
                            }
                          />
                        ) : (
                          <FallbackIcon className="w-5 h-5 text-indigo-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {translate(row.title)}
                        </h4>
                        <p className="text-xs text-slate-500">{translate(row.sub)}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-auto shrink-0 flex items-center justify-between md:justify-end gap-2">
                      <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-300" />
                        <span>{translate(row.desc)}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ================= MODAL DETAIL PLATFORM ================= */}
      {selectedPlatform && (() => {
        const SelectedFallbackIcon = selectedPlatform.fallbackIcon;
        return (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
            onClick={() => setSelectedPlatform(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 w-full ${selectedPlatform.accent}`} />

              <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-center p-2.5 shrink-0">
                    {!failedLogos[selectedPlatform.slug] ? (
                      <Image
                        src={selectedPlatform.logoSrc}
                        alt={translate(selectedPlatform.name)}
                        width={44}
                        height={44}
                        unoptimized
                        className="object-contain"
                        onError={() =>
                          setFailedLogos((prev) => ({
                            ...prev,
                            [selectedPlatform.slug]: true,
                          }))
                        }
                      />
                    ) : (
                      <SelectedFallbackIcon className="w-7 h-7 text-indigo-600" />
                    )}
                  </div>
                  <div>
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full border text-[11px] font-extrabold uppercase tracking-wider ${selectedPlatform.badgeBg}`}
                    >
                      {translate(selectedPlatform.subtitle)}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      {translate(selectedPlatform.name)}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPlatform(null)}
                  aria-label={translate("Close details")}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {translate(selectedPlatform.fullDescription)}
                </p>

                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                    {translate("Key Capabilities & Solutions")}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPlatform.features.map((feat, fIdx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80"
                        >
                          <div
                            className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${selectedPlatform.iconBg}`}
                          >
                            <FeatIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                            {translate(feat.label)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedPlatform(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {translate("Close")}
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-2.5 rounded-full transition-all shadow-md"
                >
                  <span>{translate("Consult about")} {translate(selectedPlatform.name)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ================= 4. GLOBAL RELATIONS & EXPANSION (UNIFIED COMPACT) ================= */}
      <section className="bg-white py-10 px-6 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] font-bold tracking-wide">
                <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{translate(content['home.global-relations-section.text.global-relations-expansion'] ?? 'GLOBAL RELATIONS & EXPANSION')}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {translate(content['home.global-relations-section.text.international'] ?? 'International ')}
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                  {translate(content['home.global-relations-section.text.partnerships-expansion'] ?? 'Partnerships & Expansion')}
                </span>
              </h2>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {translate(content['home.global-relations-section.text.akselerasi-jangkauan-bisnis-anda-ke-pasar-global'] ?? 'Accelerate your business reach into global markets with regulatory consulting, local network mapping, and strategic partnerships.')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {GLOBAL_POINTS.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-2.5"
                  >
                    <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-[11px]">
                      0{idx + 1}
                    </span>
                    <p className="text-xs font-medium text-slate-700 leading-snug">
                      {translate(point.text)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[460px] bg-slate-50 rounded-3xl p-3 border border-slate-200/80 shadow-md">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={content['global-relations-section.image.src'] ?? "/images/global-map.png"}
                    alt={translate(content['home.global-relations-section.alt.global-world-map'] ?? 'Global World Map')}
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between px-2 text-xs font-bold text-slate-700">
                  <span className="inline-flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                    {translate(content['home.global-relations-section.text.50-global-partners'] ?? '50+ Global Partners')}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {translate(content['home.global-relations-section.text.100-regulated'] ?? '100% Regulated')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
            {GLOBAL_STEPS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-4 border flex flex-col justify-between ${
                    item.isActive
                      ? 'bg-gradient-to-b from-blue-600 to-blue-800 text-white border-blue-500 shadow-lg'
                      : 'bg-slate-50/70 border-slate-200/90 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`text-[10px] font-extrabold tracking-widest px-2 py-0.5 rounded-full uppercase ${
                        item.isActive ? 'bg-white/20 text-white' : 'bg-blue-100/80 text-blue-700'
                      }`}>
                        {translate("STEP")} {item.step}
                      </span>
                      <IconComponent className={`w-4 h-4 ${item.isActive ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <h3 className={`text-xs sm:text-sm font-extrabold leading-snug whitespace-pre-line mb-1 ${item.isActive ? 'text-white' : 'text-slate-900'}`}>
                      {translate(item.title)}
                    </h3>
                    <p className={`text-[11px] leading-relaxed ${item.isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {translate(item.desc)}
                    </p>
                  </div>
                  {item.isActive && (
                    <div className="mt-3 pt-2 border-t border-white/20 text-[10px] text-amber-300 font-black flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {translate(content['home.how-we-enable-global-growth.text.active'] ?? 'Active')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. PORTFOLIO SECTION ================= */}
      <section id="portfolios" className="bg-slate-50/50 py-10 px-6 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-[11px] font-black tracking-wider uppercase">
              {translate(content['home.portfolio-section.text.showcase-works'] ?? 'Showcase & Works')}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
              {translate(content['home.portfolio-section.text.our-portfolios'] ?? 'Our Portfolios')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {translate(content['home.portfolio-section.text.dokumentasi-antarmuka-dan-hasil-kerja-sistem-yan'] ?? 'Documentation of interfaces and the systems we have developed.')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolios.map((item) => {
              const disabled = isDisabledPortfolio(item.title);

              if (disabled) {
                return (
                  <div
                    key={item.id}
                    className="relative bg-slate-900 rounded-2xl p-3 h-[260px] sm:h-[290px] shadow-md overflow-hidden border border-slate-800 flex flex-col justify-between select-none"
                  >
                    <div className="relative w-full h-[78%] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={translate(item.title)}
                        fill
                        quality={100}
                        unoptimized
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="px-2 py-1 flex items-center justify-between text-white">
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">{translate(item.category)}</p>
                        <h3 className="text-sm font-extrabold">{translate(item.title)}</h3>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={`/portfolio/${encodeURIComponent(String(item.id))}`}
                  scroll={false}
                  onClick={handleCardClick}
                  aria-label={`${translate("View portfolio details:")} ${translate(item.title)}`}
                  className="group relative bg-slate-900 rounded-2xl p-3 h-[260px] sm:h-[290px] shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-800 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative w-full h-[78%] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={translate(item.title)}
                      fill
                      quality={100}
                      unoptimized
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="px-2 py-1 flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">{translate(item.category)}</p>
                      <h3 className="text-sm font-extrabold group-hover:text-sky-300 transition-colors">{translate(item.title)}</h3>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {portfolioError ? (
            <p role="alert" className="text-center text-xs text-rose-600 py-4">{portfolioError}</p>
          ) : portfolios.length === 0 ? (
            <p className="text-center text-xs text-slate-400 py-4">{translate(content['home.portfolio-section.text.portofolio-belum-tersedia'] ?? 'There are no portfolios available yet.')}</p>
          ) : null}
        </div>
      </section>

      {/* ================= 6. CTA SECTION ================= */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 md:p-10 shadow-xl border border-blue-700/50 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl space-y-3 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>{translate(content['home.cta-section.text.scalable-reliable-solutions'] ?? 'Scalable & Reliable Solutions')}</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                {translate(content['home.cta-section.text.ready-to-scale-your'] ?? 'Ready to Scale Your ')}
                <span className="text-amber-300">{translate(content['home.cta-section.text.business-operations'] ?? 'Business Operations?')}</span>
              </h2>

              <p className="text-xs md:text-sm text-blue-100 leading-relaxed">
                {translate(content['home.cta-section.text.mulai-transformasi-efisiensi-operasional-dan-tal'] ?? 'Begin transforming operational efficiency and finding the best talent for your business with our professional team.')}
              </p>

              <div className="pt-1">
                <Link
                  href={content['home.cta-section.href.contact'] ?? '/contact'}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs md:text-sm transition-all shadow-lg cursor-pointer"
                >
                  <span>{translate(content['home.cta-section.text.hubungi-kami-sekarang'] ?? 'Contact Us Now')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative w-full lg:w-5/12 h-[200px] md:h-[230px] rounded-2xl overflow-hidden border border-white/20 shadow-lg">
              <Image
                src={content['cta-section.image.src'] ?? "/images/bitmap2.png"}
                alt={translate(content['home.cta-section.alt.discussion'] ?? 'Discussion')}
                fill
                quality={100}
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
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
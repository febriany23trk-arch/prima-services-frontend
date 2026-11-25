"use client";

import React, { useEffect, useState } from "react";
import { usePageContent } from "@/lib/use-page-content";
import { useLocale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { apiUrl } from "@/lib/api";
import {
  Target,
  UserCheck,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Workflow,
  Users,
  Settings,
  Wrench,
  Headphones,
  PhoneCall,
  Wallet,
  ShieldCheck,
  MapPin,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Cpu,
  Shield,
  Code2,
  Layers,
  Cloud,
  Database,
  Award,
  Search,
  BookOpen,
  ClipboardCheck,
  Rocket,
} from "lucide-react";

interface PublicService {
  id: string;
  name: string;
  category: string;
  description: string;
}

export default function ServicesPage() {
  const { content, error: contentError } = usePageContent("services");
  const { translate } = useLocale();

  const CORE_SERVICE_CARDS = [
    {
      slug: "recruitment-headhunter",
      title: content["core-service-cards.0.title"] ?? "Recruitment & Headhunter",
      imageSrc: content["core-service-cards.0.imageSrc"] ?? "/images/talent-mapping.png",
    },
    {
      slug: "outsourcing-solution",
      title: content["core-service-cards.1.title"] ?? "Outsourcing Solution",
      imageSrc: content["core-service-cards.1.imageSrc"] ?? "/images/contract-payroll.png",
    },
    {
      slug: "global-relations-business-support",
      title: content["core-service-cards.2.title"] ?? "Global Relations & Business Support",
      imageSrc: content["core-service-cards.2.imageSrc"] ?? "/images/technical-talent.png",
    },
  ];

  const RECRUITMENT_FEATURES = [
    {
      title: content["recruitment-features.0.title"] ?? "Expertise",
      badge: content["recruitment-features.0.badge"] ?? "Core Advantage",
      description:
        content["recruitment-features.0.description"] ??
        "Our recruitment consultants bring an average of 15 years of experience, applying time-tested methodologies and international best practices to search, shortlist, and deliver highly qualified candidates.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: content["recruitment-features.1.title"] ?? "Quality of Candidates",
      description:
        content["recruitment-features.1.description"] ??
        "With access to a comprehensive talent database and strong industry networks, we ensure that every candidate we present is not only technically competent but also fits your organization's culture and values.",
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: content["recruitment-features.2.title"] ?? "Time Saving",
      description:
        content["recruitment-features.2.description"] ??
        "By leveraging our broad talent pool, market intelligence, and established networks, we enable a faster and more efficient hiring process, reducing the time-to-hire significantly.",
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
      hoverBorder: "hover:border-emerald-400/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: content["recruitment-features.3.title"] ?? "Culture Driven",
      description:
        content["recruitment-features.3.description"] ??
        "We go beyond qualifications, understanding what matters to your organization to ensure the talent we recommend will thrive in your culture, community, and long-term goals.",
      iconBg: "bg-violet-500/10 text-violet-600 border-violet-200/60",
      hoverBorder: "hover:border-violet-400/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: content["recruitment-features.4.title"] ?? "Broad Industry & Role Coverage",
      description:
        content["recruitment-features.4.description"] ??
        "Our recruitment services cover multiple industries and roles at every level, from entry-level staff and mid-management to senior leadership and C-Level executives, making us a trusted partner in building strong teams.",
      iconBg: "bg-sky-500/10 text-sky-600 border-sky-200/60",
      hoverBorder: "hover:border-sky-400/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  const RPO_KEY_POINTS = [
    {
      bold: content["rpo-key-points.0.bold"] ?? "End-to-end ownership:",
      text: content["rpo-key-points.0.text"] ?? "from job brief to onboarding (incl. 90-day success).",
    },
    {
      bold: content["rpo-key-points.1.bold"] ?? "Embedded partnership:",
      text: content["rpo-key-points.1.text"] ?? "seamless extension of your internal HR team with a shared hiring playbook.",
    },
    {
      bold: content["rpo-key-points.2.bold"] ?? "SLA-driven delivery:",
      text: content["rpo-key-points.2.text"] ?? "3-7 business-day shortlist and clear funnel targets (Submittal → Interview → Offer → Accept).",
    },
    {
      bold: content["rpo-key-points.3.bold"] ?? "Staff-to-C-Level coverage,",
      text: content["rpo-key-points.3.text"] ?? "including technical/programming roles.",
    },
    {
      bold: content["rpo-key-points.4.bold"] ?? "Data-driven, bias-aware hiring:",
      text: content["rpo-key-points.4.text"] ?? "structured scorecards, interviewer calibration, and funnel KPIs.",
    },
    {
      bold: content["rpo-key-points.5.bold"] ?? "Secure & compliant:",
      text: content["rpo-key-points.5.text"] ?? "UU PDP/PDPA/GDPR, ISO 27001.",
    },
  ];

  const RPO_PROCESS_STEPS = [
    {
      step: "01",
      title: "Understand",
      desc: "Align role, skills, seniority, timeline, work model, and success criteria.",
      icon: Target,
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/60",
      hoverBorder: "hover:border-blue-400/60",
    },
    {
      step: "02",
      title: "Source & Assess",
      desc: "Source candidates, screen profiles, conduct technical assessments, and coordinate interviews based on agreed criteria.",
      icon: UserCheck,
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/60",
    },
    {
      step: "03",
      title: "Deploy & Onboard",
      desc: "Contract completion, access setup, orientation, and team alignment.",
      icon: CheckCircle2,
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
      hoverBorder: "hover:border-emerald-400/60",
    },
    {
      step: "04",
      title: "Manage & Monitor",
      desc: "Track attendance, performance, delivery, SLA, and regular reporting.",
      icon: BarChart3,
      iconBg: "bg-sky-500/10 text-sky-600 border-sky-200/60",
      hoverBorder: "hover:border-sky-400/60",
    },
    {
      step: "05",
      title: "Optimize & Replace",
      desc: "Improve performance, scale the team, or provide replacement support.",
      icon: TrendingUp,
      iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200/60",
      hoverBorder: "hover:border-indigo-400/60",
    },
  ];

  const TALENT_MAPPING_CARDS = [
    {
      slug: "market-benchmarks",
      title: content["talent-mapping-cards.0.title"] ?? "Market Benchmarks",
      desc: content["talent-mapping-cards.0.desc"] ?? "Tolok ukur pasar talenta dan standar kompetensi industri terkini.",
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/60",
      hoverBorder: "hover:border-blue-400/60",
      linkColor: "text-blue-600 hover:text-blue-800",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      slug: "location-insights",
      title: content["talent-mapping-cards.1.title"] ?? "Location Insights",
      desc: content["talent-mapping-cards.1.desc"] ?? "Analisis mendalam ketersediaan talenta berbasis wilayah dan geografis.",
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
      hoverBorder: "hover:border-emerald-400/60",
      linkColor: "text-emerald-600 hover:text-emerald-800",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      slug: "role-coverage",
      title: content["talent-mapping-cards.2.title"] ?? "Role Coverage",
      desc: content["talent-mapping-cards.2.desc"] ?? "Pemetaan cakupan posisi strategis dari level spesialis hingga eksekutif.",
      iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200/60",
      hoverBorder: "hover:border-indigo-400/60",
      linkColor: "text-indigo-600 hover:text-indigo-800",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      slug: "compensation-trends",
      title: content["talent-mapping-cards.3.title"] ?? "Compensation Trends",
      desc: content["talent-mapping-cards.3.desc"] ?? "Tren gaji dan paket kompensasi pasar untuk efisiensi anggaran SDM.",
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/60",
      linkColor: "text-amber-600 hover:text-amber-800",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      slug: "data-driven-decisions",
      title: content["talent-mapping-cards.4.title"] ?? "Data-Driven Decisions",
      desc: content["talent-mapping-cards.4.desc"] ?? "Insight berbasis data akurat untuk pengambilan keputusan rekrutmen.",
      iconBg: "bg-sky-500/10 text-sky-600 border-sky-200/60",
      hoverBorder: "hover:border-sky-400/60",
      linkColor: "text-sky-600 hover:text-sky-800",
      icon: <Lightbulb className="w-5 h-5" />,
    },
  ];

  // Dihubungkan langsung ke slug di /services/details/[slug]
  const BPO_FUNCTIONS_CARDS = [
    {
      id: "cx",
      slug: "cx-contact-center",
      cardTitle: "CX | Contact Center (Customer Service)",
      imageSrc: content["bpo-cards.0.imageSrc"] ?? "/images/Model.png",
      tabIcon: Headphones,
    },
    {
      id: "telesales",
      slug: "sales-telesales",
      cardTitle: "Sales Telesales",
      imageSrc: content["bpo-cards.1.imageSrc"] ?? "/images/Man.png",
      tabIcon: PhoneCall,
    },
    {
      id: "collection",
      slug: "collection",
      cardTitle: "Collection",
      imageSrc: content["bpo-cards.2.imageSrc"] ?? "/images/Collection.png",
      tabIcon: Wallet,
    },
    {
      id: "kyc",
      slug: "kyc-verification",
      cardTitle: "KYC Verification",
      imageSrc: content["bpo-cards.3.imageSrc"] ?? "/images/Kyc.png",
      tabIcon: ShieldCheck,
    },
  ];

  const BPO_CORE_PILLARS = [
    {
      title: "People",
      desc: "Qualified professionals and dedicated teams across IT and business operations, aligned with role requirements, business objectives, and service standards.",
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/60",
      icon: Users,
    },
    {
      title: "Process",
      desc: "Structured, measurable, and continuously optimized workflows supported by clear governance, SLAs, performance monitoring, and reporting.",
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/60",
      hoverBorder: "hover:border-blue-400/60",
      icon: Settings,
    },
    {
      title: "Tools",
      desc: "Technology platforms, cloud solutions, collaboration tools, analytics, and automation that improve visibility, productivity, and performance.",
      iconBg: "bg-purple-500/10 text-purple-600 border-purple-200/60",
      hoverBorder: "hover:border-purple-400/60",
      icon: Wrench,
    },
  ];

  // 1. IT TRAINING CENTRE & BOOTCAMP
  const IT_BOOTCAMP_STEPS = [
    {
      step: "01",
      title: "ATTRACT & SELECT",
      desc: "Candidate outreach, screening and baseline competency assessment.",
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/60",
      hoverBorder: "hover:border-blue-400/60",
      icon: Search,
    },
    {
      step: "02",
      title: "TRAIN & UPSKILL",
      desc: "Practical technical bootcamps, soft skills, project simulations and career readiness.",
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/60",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "ASSESS & MATCH",
      desc: "Skill validation, portfolio review and mapping to client role requirements.",
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
      hoverBorder: "hover:border-emerald-400/60",
      icon: ClipboardCheck,
    },
    {
      step: "04",
      title: "PLACE & SUPPORT",
      desc: "Job-matching assistance, client interviews and potential deployment through IT outsourcing.",
      iconBg: "bg-sky-500/10 text-sky-600 border-sky-200/60",
      hoverBorder: "hover:border-sky-400/60",
      icon: Rocket,
    },
  ];

  // 2. AI TRAINING & EXPERT FACULTY
  const AI_TRAINING_TRACKS = [
    { num: "01", title: "AI Fundamentals & Business Applications" },
    { num: "02", title: "Generative AI & Prompt Engineering" },
    { num: "03", title: "AI Productivity & Workflow Automation" },
    { num: "04", title: "Agentic AI & Enterprise AI" },
    { num: "05", title: "Responsible AI, Governance & Risk" },
    { num: "06", title: "AI Strategy, Adoption & Transformation" },
  ];

  // 3. SECURITY & CLEANING SERVICES
  const FACILITY_SERVICES = [
    {
      title: "SECURITY SERVICES",
      desc: "Security personnel deployment; access control and visitor management; patrol and incident escalation; site supervision and reporting.",
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/60",
      hoverBorder: "hover:border-blue-400/60",
      icon: Shield,
    },
    {
      title: "CLEANING SERVICES",
      desc: "Routine building cleaning; office and common-area housekeeping; specialized cleaning coordination; hygiene checks and service quality monitoring.",
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/60",
      icon: Sparkles,
    },
    {
      title: "WORKFORCE MANAGEMENT",
      desc: "Recruitment and onboarding; attendance and shift coordination; training, grooming and SOPs; performance supervision and replacement support.",
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
      hoverBorder: "hover:border-emerald-400/60",
      icon: Users,
    },
  ];

  // 4. CONSULTING & TECHNOLOGY
  const CONSULTING_TECH_PILLARS = [
    {
      num: "01",
      title: "Product & Project Development",
      roles: "PM, Product Owner, Business Analyst, Scrum Master",
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/60",
      hoverBorder: "hover:border-blue-400/60",
      icon: Layers,
    },
    {
      num: "02",
      title: "Software Engineering",
      roles: "Frontend, Backend, Mobile, Full Stack Engineer",
      iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200/60",
      hoverBorder: "hover:border-indigo-400/60",
      icon: Code2,
    },
    {
      num: "03",
      title: "Quality & Experience",
      roles: "QA, Automation, UI/UX Design, UX Research",
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
      hoverBorder: "hover:border-emerald-400/60",
      icon: UserCheck,
    },
    {
      num: "04",
      title: "Cloud & Security",
      roles: "DevOps, SRE, Cloud Engineer, Cybersecurity",
      iconBg: "bg-sky-500/10 text-sky-600 border-sky-200/60",
      hoverBorder: "hover:border-sky-400/60",
      icon: Cloud,
    },
    {
      num: "05",
      title: "Data & Enterprise",
      roles: "Data Engineer, BI, ERP, CRM, Integration",
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
      hoverBorder: "hover:border-amber-400/60",
      icon: Database,
    },
  ];

  const heroFeature = RECRUITMENT_FEATURES[0];
  const secondaryFeatures = RECRUITMENT_FEATURES.slice(1);
  const catalogError = content["services.catalog.error"] ?? "Katalog layanan belum dapat dimuat. Silakan coba lagi nanti.";
  const [services, setServices] = useState<PublicService[]>([]);
  const [servicesError, setServicesError] = useState("");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [activeRpoTab, setActiveRpoTab] = useState<"services" | "pillars" | "roadmap">("services");
  const [activeBpoTab, setActiveBpoTab] = useState<"pillars" | "solutions" | "functions">("pillars");
  const [activeExtendedTab, setActiveExtendedTab] = useState<"bootcamp" | "ai" | "facility" | "consulting">("bootcamp");

  // Simpan state tab/accordion dan kembalikan posisi scroll tepat di kartu yang ditekan
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedBpoTab = sessionStorage.getItem("services_bpo_tab");
    if (savedBpoTab === "pillars" || savedBpoTab === "solutions" || savedBpoTab === "functions") {
      setActiveBpoTab(savedBpoTab);
    }

    const savedRpoTab = sessionStorage.getItem("services_rpo_tab");
    if (savedRpoTab === "services" || savedRpoTab === "pillars" || savedRpoTab === "roadmap") {
      setActiveRpoTab(savedRpoTab);
    }

    const savedExtendedTab = sessionStorage.getItem("services_extended_tab");
    if (
      savedExtendedTab === "bootcamp" ||
      savedExtendedTab === "ai" ||
      savedExtendedTab === "facility" ||
      savedExtendedTab === "consulting"
    ) {
      setActiveExtendedTab(savedExtendedTab);
    }

    const savedExpanded = sessionStorage.getItem("services_expanded_cards");
    if (savedExpanded) {
      try {
        setExpandedCards(JSON.parse(savedExpanded));
      } catch {
        // Abaikan jika format JSON tidak valid
      }
    }

    const savedScrollY = sessionStorage.getItem("services_scroll_y");
    if (savedScrollY) {
      const targetY = Number(savedScrollY);
      sessionStorage.removeItem("services_scroll_y");
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: targetY, behavior: "instant" });
        }, 80);
      });
    }
  }, []);

  const handleServiceCardClick = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("services_scroll_y", String(window.scrollY));
      sessionStorage.setItem("services_bpo_tab", activeBpoTab);
      sessionStorage.setItem("services_rpo_tab", activeRpoTab);
      sessionStorage.setItem("services_extended_tab", activeExtendedTab);
      sessionStorage.setItem("services_expanded_cards", JSON.stringify(expandedCards));
    }
  };

  const toggleCard = (key: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    let isMounted = true;

    fetch(apiUrl("/api/v1/services"), { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}.`);
        }
        const result: { data: PublicService[] } = await response.json();
        if (isMounted) setServices(result.data);
      })
      .catch((error: unknown) => {
        console.error("Gagal memuat katalog layanan:", error);
        if (isMounted) {
          setServicesError(catalogError);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [catalogError]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white relative overflow-x-hidden pb-12">
      {contentError && (
        <p role="alert" className="mx-auto max-w-7xl px-4 py-2 text-center text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg">
          {contentError}
        </p>
      )}

      {/* Background Ambient Glow FX */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent pointer-events-none -z-10 blur-3xl"></div>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30 border border-blue-100 grid grid-cols-1 md:grid-cols-12 shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400"></div>
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 border border-blue-200/80 w-fit mb-3.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-extrabold text-blue-800 tracking-wider uppercase">{content["services.hero-section.text.enterprise-solutions"] ?? "Enterprise Solutions"}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-2 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent">
                {content["services.hero-section.text.what-we-can-do-for-you"] ?? "What We Can Do For You"}
              </span>
            </h1>

            <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-xl">
              {content["services.hero-section.text.we-are-your-strategic-partner-not-just-building-"] ?? "We are your strategic partner — not just building systems, but ensuring technology becomes the foundation of sustainable growth and operational excellence."}
            </p>
          </div>

          <div className="md:col-span-5 relative bg-gradient-to-br from-blue-100/50 via-sky-50/40 to-indigo-100/60 overflow-hidden flex items-center justify-center p-2 border-t md:border-t-0 md:border-l border-blue-100/80">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-sky-300/10 to-transparent blur-xl pointer-events-none" />
            <div className="relative z-10 w-full flex items-center justify-center">
              <Image
                src={content["services.hero-section.image.src"] ?? "/images/Bitmap.png"}
                alt={content["services.hero-section.alt.our-services-team"] ?? "Our Services Team"}
                width={360}
                height={240}
                className="object-contain max-h-[220px] scale-110 drop-shadow-md transition-transform duration-500 hover:scale-115"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {services.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-6 w-full">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-sm p-6 md:p-8">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
                {content["services.subtle-gradient-glow-behind-image.text.prima-services"] ?? "Prima Services"}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {content["services.subtle-gradient-glow-behind-image.text.layanan-kami"] ?? "Layanan Kami"}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {content["services.subtle-gradient-glow-behind-image.text.katalog-layanan-terbaru-dari-tim-prima-services"] ?? "Katalog layanan terbaru dari tim Prima Services."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/catalog/${encodeURIComponent(service.id)}`}
                  scroll={false}
                  onClick={handleServiceCardClick}
                  aria-label={`${translate("Learn more about")} ${translate(service.name)}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    {translate(service.category)}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-slate-900">
                    {translate(service.name)}
                  </h3>
                  {service.description && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {translate(service.description)}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700">
                    {translate("Learn about this service")}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {servicesError && (
        <p role="alert" className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-rose-600">
          {servicesError}
        </p>
      )}

      {/* PRIMA SERVICE RECRUITMENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-3">
        <div className="bg-gradient-to-br from-white via-slate-50/60 to-blue-50/30 rounded-3xl p-6 md:p-10 border border-blue-100/80 shadow-sm relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 via-indigo-300/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              {content["services.prima-service-recruitment-section.text.talent-acquisition-solutions"] ?? "Talent Acquisition Solutions"}
            </div>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-2">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {content["services.prima-service-recruitment-section.text.prima-service-recruitment"] ?? "Prima Service Recruitment"}
              </span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {content["services.prima-service-recruitment-section.text.at"] ?? "At "}
              <span className="font-bold text-slate-900">{content["services.prima-service-recruitment-section.text.prima-service"] ?? "Prima Service"}</span>
              , {translate((content["services.prima-service-recruitment-section.text.our-recruitment-division-is-dedicated-to-helping"] ?? ", our recruitment division is dedicated to helping businesses find and retain top-tier talent efficiently, spanning staff-level roles up to C-Level executives.").replace(/^,\s*/, ""))}
            </p>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/60 via-indigo-50 to-sky-50 border-l-4 border-blue-600 px-4 py-2.5 rounded-r-xl shadow-xs">
              <span className="text-blue-600 text-lg">{content["services.prima-service-recruitment-section.text.copy"] ?? "“"}</span>
              <p className="text-xs md:text-sm font-bold italic text-blue-950">
                {content["services.prima-service-recruitment-section.text.from-staff-to-c-level-we-deliver-the-right-talen"] ?? "From Staff to C-Level: We Deliver the Right Talent."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10 items-start">
            <div
              onClick={() => toggleCard("hero")}
              className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl p-6 md:p-7 flex flex-col justify-between border border-slate-800 shadow-lg relative overflow-hidden group cursor-pointer select-none"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner">
                    {heroFeature.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full">
                    {heroFeature.badge && translate(heroFeature.badge)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {translate(heroFeature.title)}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-300 shrink-0 transition-transform duration-300 ${
                      expandedCards["hero"] ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedCards["hero"] && heroFeature.description && (
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {translate(heroFeature.description)}
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-blue-400">
                <span>{content["services.prima-service-recruitment-section.text.proven-15-years-track-record"] ?? "Proven 15+ Years Track Record"}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              {secondaryFeatures.map((item, idx) => {
                const cardKey = `secondary-${idx}`;
                const isExpanded = !!expandedCards[cardKey];

                return (
                  <div
                    key={idx}
                    onClick={() => toggleCard(cardKey)}
                    className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${item.hoverBorder}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                          {item.icon}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <h3 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                        {translate(item.title)}
                      </h3>

                      {isExpanded && (
                        <p className="text-xs text-slate-500 leading-relaxed font-normal">
                          {translate(item.description)}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BPO DETAIL SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="space-y-5">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-1.5">
              {content["services.bpo-detail-section.text.solutions-deep-dive"] ?? "Solutions Deep-Dive"}
            </span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase">
              {content["services.bpo-detail-section.text.business-process-outsourcing-bpo"] ?? "Business Process Outsourcing (BPO)"}
            </h2>
            <p className="text-xs text-slate-500 font-normal max-w-md mx-auto">
              {content["services.bpo-detail-section.text.your-comprehensive-target-driven-technology-oper"] ?? "Your comprehensive target-driven technology & operational services"}
            </p>
          </div>

          {/* CORE OFFERING — BUSINESS PROCESS OUTSOURCING CARD */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md text-left">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600" />

            {/* Header Core Offering */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4 max-w-2xl">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
                  <Workflow className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-blue-600 block mb-1">
                    {translate("CORE OFFERING")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                    {translate("Business Process Outsourcing")}
                  </h3>
                </div>
              </div>

              {/* Pill Tab Switcher BPO */}
              <div
                role="tablist"
                aria-label={translate("BPO Service Categories")}
                className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-inner self-start lg:self-center shrink-0"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeBpoTab === "pillars"}
                  onClick={() => setActiveBpoTab("pillars")}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    activeBpoTab === "pillars"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {translate("Core Pillars (3)")}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeBpoTab === "solutions"}
                  onClick={() => setActiveBpoTab("solutions")}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    activeBpoTab === "solutions"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {translate("BPO Solutions (3)")}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeBpoTab === "functions"}
                  onClick={() => setActiveBpoTab("functions")}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    activeBpoTab === "functions"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {translate("BPO Functions (4)")}
                </button>
              </div>
            </div>

            {/* Konten Tab Aktif BPO */}
            <div className="pt-6">
              {/* TAB 1: CORE PILLARS (3) — Accordion ID Card */}
              {activeBpoTab === "pillars" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start animate-fadeIn">
                  {BPO_CORE_PILLARS.map((item, idx) => {
                    const TabIcon = item.icon;
                    const cardKey = `bpo-pillar-${idx}`;
                    const isExpanded = !!expandedCards[cardKey];

                    return (
                      <div
                        key={item.title}
                        onClick={() => toggleCard(cardKey)}
                        className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${item.hoverBorder}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                              <TabIcon className="w-5 h-5" />
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          <h4 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                            {translate(item.title)}
                          </h4>

                          {isExpanded && (
                            <p className="text-xs text-slate-500 leading-relaxed font-normal">
                              {translate(item.desc)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 2: BPO SOLUTIONS (3) */}
              {activeBpoTab === "solutions" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fadeIn">
                  {CORE_SERVICE_CARDS.map((card, idx) => (
                    <Link
                      key={card.slug}
                      href={`/services/details/${card.slug}?from=services`}
                      scroll={false}
                      onClick={handleServiceCardClick}
                      aria-label={`${translate("Learn more:")} ${translate(card.title)}`}
                      className="group bg-white rounded-2xl p-4 border border-slate-200/90 transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/90">
                            {translate("SERVICE")} 0{idx + 1}
                          </span>
                          <span className="text-lg font-black text-slate-200 group-hover:text-blue-600 transition-colors">
                            0{idx + 1}
                          </span>
                        </div>
                        <div className="relative w-full h-36 mb-3 rounded-xl overflow-hidden bg-slate-100">
                          <Image
                            src={card.imageSrc}
                            alt={translate(card.title)}
                            fill
                            quality={100}
                            unoptimized
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-1">
                          <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                            {translate(card.title)}
                          </h4>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* TAB 3: BPO FUNCTIONS (4) */}
              {activeBpoTab === "functions" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
                  {BPO_FUNCTIONS_CARDS.map((card) => (
                    <Link
                      key={card.slug}
                      href={`/services/details/${card.slug}?from=services`}
                      scroll={false}
                      onClick={handleServiceCardClick}
                      aria-label={`${translate("Learn more:")} ${translate(card.cardTitle)}`}
                      className="group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[175px] cursor-pointer"
                    >
                      <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
                        <Image
                          src={card.imageSrc}
                          alt={translate(card.cardTitle)}
                          width={56}
                          height={56}
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug max-w-[180px]">
                        {translate(card.cardTitle)}
                      </h4>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RECRUITMENT PROCESS OUTSOURCING (RPO) SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/35 to-indigo-50/40 rounded-3xl p-6 md:p-10 border border-blue-200/70 shadow-lg text-left">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/15 via-sky-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 via-blue-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Section Header + Pill Tab Switcher */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-blue-100/80">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/90 to-indigo-100/90 border border-blue-200 text-blue-800 text-[10px] font-black uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>{translate("Operations & Workforce")}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-blue-200/80 shadow-2xs text-[10px] font-extrabold text-blue-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{translate("3–7 Days Shortlist SLA")}</span>
                </div>
              </div>

              <h2 className="text-xl md:text-3xl font-black tracking-tight uppercase">
                <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent">
                  {content["services.recruitment-process-outsourcing-rpo-section.text.recruitment-process-outsourcing-rpo"] ?? "RECRUITMENT PROCESS OUTSOURCING (RPO)"}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {translate(content["services.recruitment-process-outsourcing-rpo-section.text.full-cycle-hiring-with-recruitment-process-outso"] ?? "Full-Cycle Hiring with Recruitment Process Outsourcing (RPO)")} — {translate("From Staff to C-Level, Delivering the Right Talent")}
              </p>
            </div>

            {/* Pill Tab Switcher RPO */}
            <div
              role="tablist"
              aria-label={translate("RPO Service Categories")}
              className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-inner self-start lg:self-end shrink-0"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeRpoTab === "services"}
                onClick={() => setActiveRpoTab("services")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeRpoTab === "services"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("RPO Services (3)")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeRpoTab === "pillars"}
                onClick={() => setActiveRpoTab("pillars")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeRpoTab === "pillars"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("Program Pillars (6)")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeRpoTab === "roadmap"}
                onClick={() => setActiveRpoTab("roadmap")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeRpoTab === "roadmap"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("Delivery Roadmap (5)")}
              </button>
            </div>
          </div>

          {/* Konten Tab Aktif RPO */}
          <div className="relative z-10 pt-7">
            {/* TAB 1: RPO SERVICES (3) */}
            {activeRpoTab === "services" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fadeIn">
                {CORE_SERVICE_CARDS.map((card, idx) => (
                  <Link
                    key={card.slug}
                    href={`/services/details/${card.slug}?from=services`}
                    scroll={false}
                    onClick={handleServiceCardClick}
                    aria-label={`${translate("Learn more:")} ${translate(card.title)}`}
                    className="group bg-white rounded-2xl p-4 border border-slate-200/90 transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/90">
                          {translate("SERVICE")} 0{idx + 1}
                        </span>
                        <span className="text-lg font-black text-slate-200 group-hover:text-blue-600 transition-colors">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="relative w-full h-36 mb-3 rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={card.imageSrc}
                          alt={translate(card.title)}
                          fill
                          quality={100}
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                          {translate(card.title)}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* TAB 2: PROGRAM PILLARS (6) & CIRCULAR DIAGRAM */}
            {activeRpoTab === "pillars" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-2 animate-fadeIn">
                <div className="lg:col-span-5 flex flex-col items-center justify-center py-4">
                  <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/15 via-sky-400/10 to-indigo-500/15 blur-xl" />
                    <div className="absolute inset-2 rounded-full border-8 border-white/90 bg-slate-100/60 shadow-inner" />
                    <div className="absolute inset-5 rounded-full border-2 border-dashed border-blue-400/50 animate-[spin_60s_linear_infinite]" />

                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white flex flex-col items-center justify-center p-3 text-center shadow-xl shadow-blue-950/30 z-20 border-4 border-white ring-4 ring-blue-500/15">
                      <span className="text-xs font-black tracking-widest uppercase text-sky-400">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.rpo"] ?? "RPO"}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-200 leading-tight mt-0.5">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.full-cycle-hiring"] ?? "Full-Cycle Hiring"}
                      </span>
                    </div>

                    <div className="absolute top-1 right-1 flex items-center gap-1.5 z-30 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-blue-200/80 shadow-md hover:scale-105 transition-transform">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.01"] ?? "01"}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.job-request"] ?? "Job Request"}
                      </span>
                    </div>

                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1.5 z-30 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-blue-200/80 shadow-md hover:scale-105 transition-transform">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.02"] ?? "02"}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.sourcing"] ?? "Sourcing"}
                      </span>
                    </div>

                    <div className="absolute bottom-1 right-1 flex items-center gap-1.5 z-30 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-blue-200/80 shadow-md hover:scale-105 transition-transform">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-600 to-blue-700 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.03"] ?? "03"}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.assessment"] ?? "Assessment"}
                      </span>
                    </div>

                    <div className="absolute bottom-1 left-1 flex items-center gap-1.5 flex-row-reverse z-30 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-blue-200/80 shadow-md hover:scale-105 transition-transform">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.04"] ?? "04"}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.interview"] ?? "Interview"}
                      </span>
                    </div>

                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-1.5 flex-row-reverse z-30 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-sky-200/80 shadow-md hover:scale-105 transition-transform">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.05"] ?? "05"}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.offer"] ?? "Offer"}
                      </span>
                    </div>

                    <div className="absolute top-1 left-1 flex items-center gap-1.5 flex-row-reverse z-30 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-md hover:scale-105 transition-transform">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.06"] ?? "06"}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800">
                        {content["services.recruitment-process-outsourcing-rpo-section.text.onboard"] ?? "Onboard"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white/85 backdrop-blur-xs rounded-2xl p-5 md:p-6 border border-blue-100 shadow-sm space-y-3.5">
                  <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
                      {content["services.recruitment-process-outsourcing-rpo-section.text.key-program-pillars"] ?? "Key Program Pillars"}
                    </span>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {translate("6 Core Commitments")}
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {RPO_KEY_POINTS.map((kp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/60 hover:border-blue-200 transition-colors text-xs leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <p className="flex-1 text-slate-600">
                          <strong className="text-slate-900 font-bold mr-1">{translate(kp.bold)}</strong>
                          <span>{translate(kp.text)}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: 5-STAGE DELIVERY ROADMAP — Accordion ID Card */}
            {activeRpoTab === "roadmap" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-blue-600">
                      {translate("End-to-End Execution Roadmap")}
                    </span>
                    <h3 className="text-base md:text-lg font-black text-slate-900">
                      {translate("5-Stage RPO Delivery Framework")}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {translate("Click each card to view stage details")}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
                  {RPO_PROCESS_STEPS.map((item) => {
                    const StepIcon = item.icon;
                    const cardKey = `rpo-step-${item.step}`;
                    const isExpanded = !!expandedCards[cardKey];

                    return (
                      <div
                        key={item.step}
                        onClick={() => toggleCard(cardKey)}
                        className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${item.hoverBorder}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                              <StepIcon className="w-5 h-5" />
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          <h4 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                            {item.step}. {translate(item.title)}
                          </h4>

                          {isExpanded && (
                            <p className="text-xs text-slate-500 leading-relaxed font-normal">
                              {translate(item.desc)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TALENT MAPPING & MARKET INTELLIGENCE SECTION — Accordion ID Card */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100/60 p-6 md:p-8 rounded-3xl border border-blue-100/80 shadow-md text-left">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-indigo-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-300/20 via-blue-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 via-blue-50 to-indigo-100/80 border border-blue-200/80 text-[#2b5ba3] text-[10px] font-black uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#2b5ba3] animate-pulse" />
                {content["services.talent-mapping-market-intelligence-section.text.market-intelligence"] ?? "MARKET INTELLIGENCE"}
              </div>

              <h2 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                {content["services.talent-mapping-market-intelligence-section.text.talent-mapping"] ?? "TALENT MAPPING &"}{" "}
                <span className="bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#0288d1] bg-clip-text text-transparent">
                  {content["services.talent-mapping-market-intelligence-section.text.market-intelligence-2"] ?? "MARKET INTELLIGENCE"}
                </span>
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {content["services.talent-mapping-market-intelligence-section.text.understanding-the-talent-market-is-essential-to-"] ?? "Understanding the talent market is essential to staying competitive. Prima Service provides actionable insights on workforce availability, salary benchmarks, and future hiring trends."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
              {TALENT_MAPPING_CARDS.map((card, idx) => {
                const cardKey = `talent-mapping-${idx}`;
                const isExpanded = !!expandedCards[cardKey];

                return (
                  <div
                    key={card.slug}
                    onClick={() => toggleCard(cardKey)}
                    className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${card.hoverBorder}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl border ${card.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                          {card.icon}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <h3 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                        {translate(card.title)}
                      </h3>

                      {isExpanded && (
                        <div className="space-y-3">
                          <p className="text-xs text-slate-500 leading-relaxed font-normal">
                            {translate(card.desc)}
                          </p>
                          <Link
                            href={`/services/details/${card.slug}?from=services`}
                            scroll={false}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleServiceCardClick();
                            }}
                            className={`inline-flex items-center gap-1 text-[11px] font-bold ${card.linkColor}`}
                          >
                            <span>{translate(content["services.talent-mapping-market-intelligence-section.text.explore-details"] ?? "Explore Details")}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED EXTENDED CAPABILITIES & TRAINING SECTION (4 TABS IN ONE PILL SWITCHER) */}
      <section className="max-w-6xl mx-auto px-6 py-4 mb-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/35 to-indigo-50/40 rounded-3xl p-6 md:p-10 border border-blue-200/70 shadow-lg text-left">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-500 to-indigo-600" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/15 via-sky-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 via-blue-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Section Header + Pill Tab Switcher */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-blue-100/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/90 to-indigo-100/90 border border-blue-200 text-blue-800 text-[10px] font-black uppercase tracking-wider shadow-xs mb-3">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>{translate("Extended Solutions & Academy")}</span>
              </div>

              <h2 className="text-xl md:text-3xl font-black tracking-tight uppercase">
                <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent">
                  {translate("WORKFORCE DEVELOPMENT & SPECIALIZED SERVICES")}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                {translate("Integrated talent academy, executive AI training, on-site facility operations, and technology consulting")}
              </p>
            </div>

            {/* Pill Tab Switcher */}
            <div
              role="tablist"
              aria-label={translate("Extended Solutions & Academy Categories")}
              className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-inner self-start lg:self-end shrink-0"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeExtendedTab === "bootcamp"}
                onClick={() => setActiveExtendedTab("bootcamp")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeExtendedTab === "bootcamp"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("IT Bootcamp (4)")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeExtendedTab === "ai"}
                onClick={() => setActiveExtendedTab("ai")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeExtendedTab === "ai"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("AI Training (6)")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeExtendedTab === "facility"}
                onClick={() => setActiveExtendedTab("facility")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeExtendedTab === "facility"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("Facility Services (3)")}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeExtendedTab === "consulting"}
                onClick={() => setActiveExtendedTab("consulting")}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  activeExtendedTab === "consulting"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {translate("Consulting & Tech (5)")}
              </button>
            </div>
          </div>

          {/* Konten Tab Aktif */}
          <div className="relative z-10 pt-7">
            {/* TAB 1: IT TRAINING CENTRE & BOOTCAMP (4) — Accordion ID Card */}
            {activeExtendedTab === "bootcamp" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-amber-700">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{translate("WORKFORCE DEVELOPMENT / PLANNED")}</span>
                    </span>
                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-0.5">
                      {translate("IT Training Centre & Bootcamp")}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 max-w-md">
                    {translate("Building job-ready technology talent and connecting graduates with real employment opportunities through Teknoloka outsourcing solutions.")}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                  {IT_BOOTCAMP_STEPS.map((item) => {
                    const StepIcon = item.icon;
                    const cardKey = `bootcamp-${item.step}`;
                    const isExpanded = !!expandedCards[cardKey];

                    return (
                      <div
                        key={item.step}
                        onClick={() => toggleCard(cardKey)}
                        className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${item.hoverBorder}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                              <StepIcon className="w-5 h-5" />
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          <h4 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                            {translate(item.title)}
                          </h4>

                          {isExpanded && (
                            <p className="text-xs text-slate-500 leading-relaxed font-normal">
                              {translate(item.desc)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl bg-slate-900 px-4 py-3 text-center">
                  <p className="text-[11px] font-medium text-slate-200">
                    {translate("Planned initiative. Training and job-matching support do not guarantee employment or client placement.")}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: AI TRAINING & EXPERT FACULTY (6) — Accordion ID Card */}
            {activeExtendedTab === "ai" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-amber-700">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>{translate("TALENT DEVELOPMENT / EXECUTIVE-LED LEARNING")}</span>
                    </span>
                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-0.5">
                      {translate("AI Training & Expert Faculty")}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600">
                    {translate("Applied AI programmes shaped by enterprise leadership experience and client needs.")}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                  {/* Faculty Profile Accordion Card */}
                  <div
                    onClick={() => toggleCard("ai-faculty")}
                    className="lg:col-span-5 bg-white/90 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-400/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl border bg-blue-500/10 text-blue-600 border-blue-200/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs">
                          <Award className="w-5 h-5" />
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                            expandedCards["ai-faculty"] ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <h4 className={`font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors ${expandedCards["ai-faculty"] ? "mb-2" : ""}`}>
                        IRWAN PRABOWO
                      </h4>

                      {expandedCards["ai-faculty"] && (
                        <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed pt-1">
                          <p className="font-extrabold text-blue-900">
                            {translate("Technology Executive | CTO & CISO — AI Strategy & Digital Transformation")}
                          </p>
                          <p>
                            {translate("20+ years in technology, financial services, cybersecurity, AI and digital transformation.")}
                          </p>
                          <p>
                            {translate("Leadership and advisory experience includes roles across")} <strong className="text-slate-800">{translate("IBM, Red Hat, NTT DATA and Home Credit")}</strong>.
                          </p>
                          <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                            {translate("Selected speaking and mentoring: OJK, AFPI, DevFest, NASA Space Apps & ADPList")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Potential Training Tracks Accordion Cards */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                    {AI_TRAINING_TRACKS.map((track) => {
                      const cardKey = `ai-track-${track.num}`;
                      const isExpanded = !!expandedCards[cardKey];

                      return (
                        <div
                          key={track.num}
                          onClick={() => toggleCard(cardKey)}
                          className="bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-amber-400/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 rounded-xl border bg-amber-500/10 text-amber-600 border-amber-200/60 flex items-center justify-center font-black text-xs transition-transform duration-300 group-hover:scale-110 shadow-xs">
                                {track.num}
                              </div>
                              <ChevronDown
                                className={`w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </div>

                            <h4 className={`font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                              {translate(track.title)}
                            </h4>

                            {isExpanded && (
                              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                                {translate("Executive-led applied AI training module tailored for enterprise teams and client business needs.")}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900 px-4 py-3 flex flex-wrap items-center justify-center gap-2 text-center">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <p className="text-[11px] font-semibold text-slate-100">
                    {translate("Selected credentials: NVIDIA Agentic AI / GenAI LLMs • Google Cloud ML Engineer • AWS & Azure Architect")}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: SECURITY & CLEANING SERVICES (3) — Accordion ID Card */}
            {activeExtendedTab === "facility" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-amber-700">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{translate("MANAGED OPERATIONS / EXTENDED SOLUTIONS")}</span>
                    </span>
                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-0.5">
                      {translate("Security & Cleaning Services")}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600">
                    {translate("Extending our BPO offering into on-site manpower and facility support, aligned with")} <strong>{translate("People")} • {translate("Process")} • {translate("Tools")}</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  {FACILITY_SERVICES.map((item, idx) => {
                    const Icon = item.icon;
                    const cardKey = `facility-${idx}`;
                    const isExpanded = !!expandedCards[cardKey];

                    return (
                      <div
                        key={item.title}
                        onClick={() => toggleCard(cardKey)}
                        className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${item.hoverBorder}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          <h4 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                            {translate(item.title)}
                          </h4>

                          {isExpanded && (
                            <p className="text-xs text-slate-500 leading-relaxed font-normal">
                              {translate(item.desc)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl bg-slate-900 px-4 py-3 text-center">
                  <p className="text-xs font-bold text-white tracking-wide">
                    {translate("Delivery approach: qualified manpower + site SOPs / K3 + supervision / reporting")}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: CONSULTING & TECHNOLOGY (5) — Accordion ID Card */}
            {activeExtendedTab === "consulting" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-blue-600">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{translate("DIGITAL & ENGINEERING CAPABILITIES")}</span>
                    </span>
                    <h3 className="text-base md:text-lg font-black text-slate-900 mt-0.5">
                      {translate("Consulting & Technology")}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600">
                    {translate("End-to-end technology talent and digital engineering capabilities across five core delivery domains.")}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
                  {CONSULTING_TECH_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    const cardKey = `consulting-${pillar.num}`;
                    const isExpanded = !!expandedCards[cardKey];

                    return (
                      <div
                        key={pillar.num}
                        onClick={() => toggleCard(cardKey)}
                        className={`bg-white/90 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group cursor-pointer select-none ${pillar.hoverBorder}`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-xl border ${pillar.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          <h4 className={`font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors ${isExpanded ? "mb-2" : ""}`}>
                            {translate(pillar.title)}
                          </h4>

                          {isExpanded && (
                            <p className="text-xs text-slate-500 leading-relaxed font-normal">
                              {translate(pillar.roles)}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import { usePageContent } from "@/lib/use-page-content";
import Image from "next/image";
import Link from "next/link";
import { apiUrl } from "@/lib/api";

interface PublicService {
  id: string;
  name: string;
  category: string;
  description: string;
}

// ==========================================
// DATA CONFIGURATIONS
// ==========================================









export default function ServicesPage() {
  const { content, error: contentError } = usePageContent('services');

  const RECRUITMENT_FEATURES = [
  {
    title: content['recruitment-features.0.title'] ?? 'Expertise',
    badge: content['recruitment-features.0.badge'] ?? 'Core Advantage',
    description:
      content['recruitment-features.0.description'] ?? 'Our recruitment consultants bring an average of 15 years of experience, applying time-tested methodologies and international best practices to search, shortlist, and deliver highly qualified candidates.',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: content['recruitment-features.1.title'] ?? 'Quality of Candidates',
    description:
      content['recruitment-features.1.description'] ?? 'With access to a comprehensive talent database and strong industry networks, we ensure that every candidate we present is not only technically competent but also fits your organization\'s culture and values.',
    iconBg: "bg-amber-500/10 text-amber-600 border-amber-200/60",
    hoverBorder: "hover:border-amber-400/50",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: content['recruitment-features.2.title'] ?? 'Time Saving',
    description:
      content['recruitment-features.2.description'] ?? 'By leveraging our broad talent pool, market intelligence, and established networks, we enable a faster and more efficient hiring process, reducing the time-to-hire significantly.',
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60",
    hoverBorder: "hover:border-emerald-400/50",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: content['recruitment-features.3.title'] ?? 'Culture Driven',
    description:
      content['recruitment-features.3.description'] ?? 'We go beyond qualifications, understanding what matters to your organization to ensure the talent we recommend will thrive in your culture, community, and long-term goals.',
    iconBg: "bg-violet-500/10 text-violet-600 border-violet-200/60",
    hoverBorder: "hover:border-violet-400/50",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: content['recruitment-features.4.title'] ?? 'Broad Industry & Role Coverage',
    description:
      content['recruitment-features.4.description'] ?? 'Our recruitment services cover multiple industries and roles at every level, from entry-level staff and mid-management to senior leadership and C-Level executives, making us a trusted partner in building strong teams.',
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
    bold: content['rpo-key-points.0.bold'] ?? 'End-to-end ownership:',
    text: content['rpo-key-points.0.text'] ?? 'from job brief to onboarding (incl. 90-day success).',
  },
  {
    bold: content['rpo-key-points.1.bold'] ?? 'Embedded partnership:',
    text: content['rpo-key-points.1.text'] ?? 'seamless extension of your internal HR team with a shared hiring playbook.',
  },
  {
    bold: content['rpo-key-points.2.bold'] ?? 'SLA-driven delivery:',
    text: content['rpo-key-points.2.text'] ?? '3-7 business-day shortlist and clear funnel targets (Submittal → Interview → Offer → Accept).',
  },
  {
    bold: content['rpo-key-points.3.bold'] ?? 'Staff-to-C-Level coverage,',
    text: content['rpo-key-points.3.text'] ?? 'including technical/programming roles.',
  },
  {
    bold: content['rpo-key-points.4.bold'] ?? 'Data-driven, bias-aware hiring:',
    text: content['rpo-key-points.4.text'] ?? 'structured scorecards, interviewer calibration, and funnel KPIs.',
  },
  {
    bold: content['rpo-key-points.5.bold'] ?? 'Secure & compliant:',
    text: content['rpo-key-points.5.text'] ?? 'UU PDP/PDPA/GDPR, ISO 27001.',
  },
];

  const TALENT_MAPPING_CARDS = [
  {
    slug: "salary-benchmark-data",
    title: content['talent-mapping-cards.0.title'] ?? 'Benchmark & Salary Data',
    desc: content['talent-mapping-cards.0.desc'] ?? 'Akurasi data gaji dan kompensasi pasar terkini untuk efisiensi budget SDM.',
    cardBg: "bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40",
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white",
    accentBar: "bg-gradient-to-r from-blue-600 to-indigo-500",
    hoverBorder: "hover:border-blue-400",
    hoverGlow: "hover:shadow-blue-500/15",
    badgeColor: "bg-blue-100 text-blue-700",
    linkColor: "text-blue-600 hover:text-blue-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: "regional-talent-insights",
    title: content['talent-mapping-cards.1.title'] ?? 'Insights Across Regions',
    desc: content['talent-mapping-cards.1.desc'] ?? 'Analisis mendalam ketersediaan talenta berbasis wilayah dan geografis.',
    cardBg: "bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/40",
    iconBg: "bg-gradient-to-br from-sky-500 to-cyan-600 text-white",
    accentBar: "bg-gradient-to-r from-sky-500 to-cyan-500",
    hoverBorder: "hover:border-sky-400",
    hoverGlow: "hover:shadow-sky-500/15",
    badgeColor: "bg-sky-100 text-sky-700",
    linkColor: "text-sky-600 hover:text-sky-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1.5a2.5 2.5 0 002.5 2.5h.5a2 2 0 012 2v.5h.5a2 2 0 002-2v-1.5a2.5 2.5 0 00-2.5-2.5H18a2 2 0 01-2-2v-.5H14a2 2 0 00-2-2V4.5A2.5 2.5 0 009.5 2H9a2 2 0 00-2 2v.5" />
      </svg>
    ),
  },
  {
    slug: "passive-talent-mapping",
    title: content['talent-mapping-cards.2.title'] ?? 'Passive Talent Mapping',
    desc: content['talent-mapping-cards.2.desc'] ?? 'Pemetaan kandidat potensial pasif terbaik yang siap direkrut sesuai kebutuhan.',
    cardBg: "bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/50",
    iconBg: "bg-gradient-to-br from-[#0b2545] to-[#2b5ba3] text-white",
    accentBar: "bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#3b82f6]",
    hoverBorder: "hover:border-indigo-400",
    hoverGlow: "hover:shadow-indigo-500/20",
    badgeColor: "bg-indigo-100 text-indigo-700",
    linkColor: "text-indigo-600 hover:text-indigo-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    slug: "talent-reports-dashboards",
    title: content['talent-mapping-cards.3.title'] ?? 'Reports & Dashboards',
    desc: content['talent-mapping-cards.3.desc'] ?? 'Visualisasi laporan dan dashboard intuitif untuk pengambilan keputusan strategis.',
    cardBg: "bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/40",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white",
    accentBar: "bg-gradient-to-r from-emerald-500 to-teal-500",
    hoverBorder: "hover:border-emerald-400",
    hoverGlow: "hover:shadow-emerald-500/15",
    badgeColor: "bg-emerald-100 text-emerald-700",
    linkColor: "text-emerald-600 hover:text-emerald-800",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

  const BPO_CARDS = [
  {
    id: "cx",
    title: content['bpo-cards.0.title'] ?? 'CX | Contact Center',
    subtitle: content['bpo-cards.0.subtitle'] ?? '(Customer Service)',
    imageSrc: content['bpo-cards.0.imageSrc'] ?? "/images/Model.png",
    accentGlow: "from-sky-500/10 via-blue-500/5 to-transparent",
    badgeTheme: "bg-sky-50 text-sky-700 border-sky-200/60",
    flowIconBg: "bg-sky-50 text-sky-600 border-sky-100 group-hover/step:bg-sky-500 group-hover/step:text-white group-hover/step:border-sky-500",
    outcomes: [
      { icon: "⏱️", label: content['bpo-cards.0.0.outcomes.label'] ?? 'Faster Responses' },
      { icon: "📉", label: content['bpo-cards.0.1.outcomes.label'] ?? 'Lower cost per contact' },
      { icon: "🛡️", label: content['bpo-cards.0.2.outcomes.label'] ?? 'Stable CSAT' },
    ],
    flowSteps: [
      { num: 1, icon: "🎧", label: content['bpo-cards.0.0.flowSteps.label'] ?? 'Diagnosa' },
      { num: 2, icon: "📁", label: content['bpo-cards.0.1.flowSteps.label'] ?? 'Map Journeys & Scripts' },
      { num: 3, icon: "☑️", label: content['bpo-cards.0.2.flowSteps.label'] ?? 'Operate with QC' },
      { num: 4, icon: "📋", label: content['bpo-cards.0.3.flowSteps.label'] ?? 'Weekly Reporting & Improvements' },
    ],
    whatWeDo: content['bpo-cards.0.whatWeDo'] ?? 'Trained CS teams, contextual scripts, QA & coaching cadence, clear dashboards',
  },
  {
    id: "telesales",
    title: content['bpo-cards.1.title'] ?? 'Sales Telesales',
    subtitle: "",
    imageSrc: content['bpo-cards.1.imageSrc'] ?? "/images/Man.png",
    accentGlow: "from-amber-500/10 via-orange-500/5 to-transparent",
    badgeTheme: "bg-amber-50 text-amber-700 border-amber-200/60",
    flowIconBg: "bg-amber-50 text-amber-600 border-amber-100 group-hover/step:bg-amber-500 group-hover/step:text-white group-hover/step:border-amber-500",
    outcomes: [
      { icon: "💬", label: content['bpo-cards.1.0.outcomes.label'] ?? 'More meaningful conversations' },
      { icon: "🤝", label: content['bpo-cards.1.1.outcomes.label'] ?? 'More meetings / closings' },
    ],
    flowSteps: [
      { num: 1, icon: "📝", label: content['bpo-cards.1.0.flowSteps.label'] ?? 'Segment & Script' },
      { num: 2, icon: "📞", label: content['bpo-cards.1.1.flowSteps.label'] ?? 'Outreach & Logging' },
      { num: 3, icon: "🗣️", label: content['bpo-cards.1.2.flowSteps.label'] ?? 'Weekly Coaching' },
      { num: 4, icon: "🎯", label: content['bpo-cards.1.3.flowSteps.label'] ?? 'Optimize Message & Target' },
    ],
    whatWeDo: content['bpo-cards.1.whatWeDo'] ?? 'Human-sounding scripts, coaching driven by conversation insights, daily snapshots (connect, booked, next actions).',
  },
  {
    id: "collection",
    title: content['bpo-cards.2.title'] ?? 'Collection',
    subtitle: "",
    imageSrc: content['bpo-cards.2.imageSrc'] ?? "/images/Collection.png",
    accentGlow: "from-emerald-500/10 via-teal-500/5 to-transparent",
    badgeTheme: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    flowIconBg: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover/step:bg-emerald-500 group-hover/step:text-white group-hover/step:border-emerald-500",
    outcomes: [
      { icon: "📉", label: content['bpo-cards.2.0.outcomes.label'] ?? 'Better FPD & recovery' },
      { icon: "🤝", label: content['bpo-cards.2.1.outcomes.label'] ?? 'With a respectful approach' },
    ],
    flowSteps: [
      { num: 1, icon: "📊", label: content['bpo-cards.2.0.flowSteps.label'] ?? 'Bucket Mapping' },
      { num: 2, icon: "💡", label: content['bpo-cards.2.1.flowSteps.label'] ?? 'Communication Strategy' },
      { num: 3, icon: "⚖️", label: content['bpo-cards.2.2.flowSteps.label'] ?? 'Execution & Negotiation' },
      { num: 4, icon: "🔍", label: content['bpo-cards.2.3.flowSteps.label'] ?? 'Results Review' },
    ],
    whatWeDo: content['bpo-cards.2.whatWeDo'] ?? 'Bucket-specific handling, clear escalation, compliant documentation.',
  },
  {
    id: "kyc",
    title: content['bpo-cards.3.title'] ?? 'KYC (Verification)',
    subtitle: "",
    imageSrc: content['bpo-cards.3.imageSrc'] ?? "/images/Kyc.png",
    accentGlow: "from-indigo-500/10 via-violet-500/5 to-transparent",
    badgeTheme: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    flowIconBg: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover/step:bg-indigo-500 group-hover/step:text-white group-hover/step:border-indigo-500",
    outcomes: [
      { icon: "⚡", label: content['bpo-cards.3.0.outcomes.label'] ?? 'Accurate and fast verification' },
      { icon: "📋", label: content['bpo-cards.3.1.outcomes.label'] ?? 'Audit-ready' },
    ],
    flowSteps: [
      { num: 1, icon: "📥", label: content['bpo-cards.3.0.flowSteps.label'] ?? 'Data Intake' },
      { num: 2, icon: "✔️", label: content['bpo-cards.3.1.flowSteps.label'] ?? 'Stepwise Verification' },
      { num: 3, icon: "💬", label: content['bpo-cards.3.2.flowSteps.label'] ?? 'Clarification' },
      { num: 4, icon: "📁", label: content['bpo-cards.3.3.flowSteps.label'] ?? 'Archiving & Reporting' },
    ],
    whatWeDo: content['bpo-cards.3.whatWeDo'] ?? 'Consistent checks, quality controls, traceable records.',
  },
];

  const heroFeature = RECRUITMENT_FEATURES[0];
  const secondaryFeatures = RECRUITMENT_FEATURES.slice(1);
  const catalogError = content["services.catalog.error"] ?? "Katalog layanan belum dapat dimuat. Silakan coba lagi nanti.";
  const [services, setServices] = useState<PublicService[]>([]);
  const [servicesError, setServicesError] = useState("");

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

          {/* Top Rainbow Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400"></div>

          {/* Background Ambient Glow Blur for Hero */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 border border-blue-200/80 w-fit mb-3.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-extrabold text-blue-800 tracking-wider uppercase">{content['services.hero-section.text.enterprise-solutions'] ?? 'Enterprise Solutions'}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-2 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent">
                {content['services.hero-section.text.what-we-can-do-for-you'] ?? 'What We Can Do For You\r'}</span>
            </h1>

            <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-xl">
              {content['services.hero-section.text.we-are-your-strategic-partner-not-just-building-'] ?? 'We are your strategic partner — not just building systems, but ensuring technology becomes the foundation of sustainable growth and operational excellence.\r'}</p>
          </div>

          <div className="md:col-span-5 relative bg-gradient-to-br from-blue-100/50 via-sky-50/40 to-indigo-100/60 overflow-hidden flex items-center justify-center p-2 border-t md:border-t-0 md:border-l border-blue-100/80">
            {/* Subtle Gradient Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-sky-300/10 to-transparent blur-xl pointer-events-none" />

            <div className="relative z-10 w-full flex items-center justify-center">
              <Image
                src={content['services.hero-section.image.src'] ?? "/images/Bitmap.png"}
                alt={content['services.hero-section.alt.our-services-team'] ?? 'Our Services Team'}
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
                {content['services.subtle-gradient-glow-behind-image.text.prima-services'] ?? 'Prima Services\r'}</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                {content['services.subtle-gradient-glow-behind-image.text.layanan-kami'] ?? 'Layanan Kami\r'}</h2>
              <p className="text-xs text-slate-500 mt-1">
                {content['services.subtle-gradient-glow-behind-image.text.katalog-layanan-terbaru-dari-tim-prima-services'] ?? 'Katalog layanan terbaru dari tim Prima Services.\r'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/catalog/${encodeURIComponent(service.id)}`}
                  aria-label={`Pelajari lebih lanjut tentang ${service.name}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700" >
                    {service.category}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-slate-900" >
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600" >
                      {service.description}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700">
                    Pelajari layanan
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

          {/* Ambient Glow FX */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 via-indigo-300/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="max-w-3xl mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              {content['services.prima-service-recruitment-section.text.talent-acquisition-solutions'] ?? 'Talent Acquisition Solutions\r'}</div>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase mb-2">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {content['services.prima-service-recruitment-section.text.prima-service-recruitment'] ?? 'Prima Service Recruitment\r'}</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {content['services.prima-service-recruitment-section.text.at'] ?? 'At '}<span className="font-bold text-slate-900">{content['services.prima-service-recruitment-section.text.prima-service'] ?? 'Prima Service'}</span>{content['services.prima-service-recruitment-section.text.our-recruitment-division-is-dedicated-to-helping'] ?? ', our recruitment division is dedicated to helping businesses find and retain top-tier talent efficiently, spanning staff-level roles up to C-Level executives.\r'}</p>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/60 via-indigo-50 to-sky-50 border-l-4 border-blue-600 px-4 py-2.5 rounded-r-xl shadow-xs">
              <span className="text-blue-600 text-lg">{content['services.prima-service-recruitment-section.text.copy'] ?? '“'}</span>
              <p className="text-xs md:text-sm font-bold italic text-blue-950">
                {content['services.prima-service-recruitment-section.text.from-staff-to-c-level-we-deliver-the-right-talen'] ?? 'From Staff to C-Level: We Deliver the Right Talent.\r'}</p>
            </div>
          </div>

          {/* Asymmetric 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10">

            {/* Focal Point / Hero Card (Left Side) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl p-6 md:p-7 flex flex-col justify-between border border-slate-800 shadow-lg relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shadow-inner">
                    {heroFeature.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full">
                    {heroFeature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                  {heroFeature.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {heroFeature.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-blue-400">
                <span>{content['services.prima-service-recruitment-section.text.proven-15-years-track-record'] ?? 'Proven 15+ Years Track Record'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* 4 Feature Cards (Right Side) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white/80 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group ${item.hoverBorder}`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                      {item.icon}
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* RECRUITMENT PROCESS OUTSOURCING (RPO) SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-3">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden text-left">

          <div className="mb-6 relative z-10">
            <h2 className="text-lg md:text-xl font-black tracking-tight text-slate-900 uppercase mb-1">
              {content['services.recruitment-process-outsourcing-rpo-section.text.recruitment-process-outsourcing-rpo'] ?? 'RECRUITMENT PROCESS OUTSOURCING (RPO)\r'}</h2>
            <p className="text-xs text-slate-500 font-medium">
              {content['services.recruitment-process-outsourcing-rpo-section.text.full-cycle-hiring-with-recruitment-process-outso'] ?? 'Full-Cycle Hiring with Recruitment Process Outsourcing (RPO)\r'}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

            {/* RPO Circular Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center py-2">
              <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-slate-100 shadow-inner"></div>
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-blue-400/40 animate-[spin_60s_linear_infinite]"></div>

                <div className="w-24 h-24 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center p-2 text-center shadow-lg z-20 border-2 border-white">
                  <span className="text-[10px] font-black tracking-widest uppercase text-blue-400">{content['services.recruitment-process-outsourcing-rpo-section.text.rpo'] ?? 'RPO'}</span>
                  <span className="text-[8px] font-medium text-slate-300 leading-tight mt-0.5">{content['services.recruitment-process-outsourcing-rpo-section.text.full-cycle-hiring'] ?? 'Full-Cycle Hiring'}</span>
                </div>

                {/* Nodes */}
                <div className="absolute top-1 right-2 flex items-center gap-1.5 z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-900 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.01'] ?? '01'}</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.job-request'] ?? 'Job Request'}</span>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1.5 z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-800 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.02'] ?? '02'}</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.sourcing'] ?? 'Sourcing'}</span>
                </div>
                <div className="absolute bottom-1 right-2 flex items-center gap-1.5 z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-700 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.03'] ?? '03'}</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.assessment'] ?? 'Assessment'}</span>
                </div>
                <div className="absolute bottom-1 left-2 flex items-center gap-1.5 flex-row-reverse z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.04'] ?? '04'}</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.interview'] ?? 'Interview'}</span>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-1.5 flex-row-reverse z-30">
                  <div className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.05'] ?? '05'}</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.offer'] ?? 'Offer'}</span>
                </div>
                <div className="absolute top-1 left-2 flex items-center gap-1.5 flex-row-reverse z-30">
                  <div className="w-5 h-5 rounded-full bg-sky-700 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.06'] ?? '06'}</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">{content['services.recruitment-process-outsourcing-rpo-section.text.onboard'] ?? 'Onboard'}</span>
                </div>
              </div>
            </div>

            {/* RPO Key Points */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                {content['services.recruitment-process-outsourcing-rpo-section.text.key-program-pillars'] ?? 'Key Program Pillars\r'}</h3>
              <ul className="space-y-2">
                {RPO_KEY_POINTS.map((kp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <p className="flex-1">
                      <strong className="text-slate-900 font-bold mr-1">{kp.bold}</strong>
                      <span className="text-slate-600 font-normal">{kp.text}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* TALENT MAPPING & MARKET INTELLIGENCE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-3">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100/60 p-6 md:p-8 rounded-3xl border border-blue-100/80 shadow-md text-left">

          {/* Decorative Ambient Background Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-300/20 via-indigo-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-300/20 via-blue-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Section Header */}
            <div className="space-y-3 max-w-3xl">
              {/* Badge Category */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100/80 via-blue-50 to-indigo-100/80 border border-blue-200/80 text-[#2b5ba3] text-[10px] font-black uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#2b5ba3] animate-pulse" />
                {content['services.talent-mapping-market-intelligence-section.text.market-intelligence'] ?? 'MARKET INTELLIGENCE\r'}</div>

              {/* Title with Gradient Text */}
              <h2 className="text-lg md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                {content['services.talent-mapping-market-intelligence-section.text.talent-mapping'] ?? 'TALENT MAPPING &'}{" "}
                <span className="bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#0288d1] bg-clip-text text-transparent">
                  {content['services.talent-mapping-market-intelligence-section.text.market-intelligence-2'] ?? 'MARKET INTELLIGENCE\r'}</span>
              </h2>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {content['services.talent-mapping-market-intelligence-section.text.understanding-the-talent-market-is-essential-to-'] ?? 'Understanding the talent market is essential to staying competitive. Prima Service provides actionable insights on workforce availability, salary benchmarks, and future hiring trends.\r'}</p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TALENT_MAPPING_CARDS.map((card, idx) => (
                <Link
                  key={card.slug}
                  href={`/services/details/${card.slug}`}
                  aria-label={`Pelajari lebih lanjut: ${card.title}`}
                  className={`group relative p-5 rounded-2xl ${card.cardBg} border border-slate-200/90 shadow-xs hover:shadow-xl ${card.hoverGlow} ${card.hoverBorder} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Top Accent Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${card.accentBar} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div>
                    {/* Icon & ID Header */}
                    <div className="flex justify-between items-start mb-4 pt-1">
                      <div className={`p-3 rounded-xl ${card.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {card.icon}
                      </div>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${card.badgeColor}`}>
                        {content['services.talent-mapping-market-intelligence-section.text.0'] ?? '0'}{idx + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xs font-extrabold text-slate-900 tracking-tight mb-1.5 group-hover:text-[#0b2545] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>

                  {/* Explore Details Link */}
                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold ${card.linkColor} transition-all duration-200`}>
                      <span>{content['services.talent-mapping-market-intelligence-section.text.explore-details'] ?? 'Explore Details'}</span>
                      <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BPO DETAIL SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-4 mb-4">
        <div className="space-y-4">

          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-1.5">
              {content['services.bpo-detail-section.text.solutions-deep-dive'] ?? 'Solutions Deep-Dive\r'}</span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase">
              {content['services.bpo-detail-section.text.business-process-outsourcing-bpo'] ?? 'Business Process Outsourcing (BPO)\r'}</h2>
            <p className="text-xs text-slate-500 font-normal max-w-md mx-auto">
              {content['services.bpo-detail-section.text.your-comprehensive-target-driven-technology-oper'] ?? 'Your comprehensive target-driven technology & operational services\r'}</p>
          </div>

          {BPO_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white text-slate-900 rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 group relative overflow-hidden text-left"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${card.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">

                {/* Image & Title */}
                <div className="md:col-span-4 flex items-center border-b md:border-b-0 md:border-r border-slate-100 pr-0 md:pr-6 pb-4 md:pb-0 h-full">
                  <div className="flex flex-col items-center text-center w-full">
                    <div className="relative w-20 h-20 rounded-xl bg-slate-50 flex items-center justify-center mb-2.5 overflow-hidden p-2 transition-transform duration-300 group-hover:scale-105 border border-slate-100 shadow-inner">
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900 leading-tight">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <span className="text-[11px] font-semibold text-slate-400 mt-0.5" >
                        {card.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Workflow & Outcomes */}
                <div className="md:col-span-8 space-y-4">

                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                      {content['services.bpo-detail-section.text.execution-flow'] ?? 'Execution Flow\r'}</h4>

                    <div className="relative grid grid-cols-4 gap-2 text-center">
                      <div className="absolute top-4 left-6 right-6 h-0.5 bg-slate-100 -z-0 hidden md:block"></div>

                      {card.flowSteps.map((step) => (
                        <div key={step.num} className="flex flex-col items-center group/step cursor-pointer relative z-10" >
                          <div className="relative w-8 h-8 mb-1.5" >
                            <span className="absolute -top-1 -left-1 w-4 h-4 bg-white border border-slate-200 rounded-full text-[9px] font-bold text-slate-800 flex items-center justify-center z-20 shadow-xs" >
                              {step.num}
                            </span>
                            <div className={`w-full h-full rounded-lg ${card.flowIconBg} flex items-center justify-center text-sm border transition-all duration-300 shadow-xs group-hover/step:scale-110`}>
                              {step.icon}
                            </div>
                          </div>
                          <p className="text-[10px] font-semibold text-slate-600 leading-tight px-1 transition-colors group-hover/step:text-slate-900" >
                            {step.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch pt-3 border-t border-slate-100">
                    <div className="sm:col-span-7 flex flex-col justify-between">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                        {content['services.bpo-detail-section.text.target-outcomes'] ?? 'Target Outcomes\r'}</h4>
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {card.outcomes.map((out, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/70" >
                            <span className="text-xs" >{out.icon}</span>
                            <span className="text-[10px] font-semibold text-slate-700 leading-tight" >
                              {out.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl text-[10px] flex flex-col justify-center">
                      <h5 className="font-bold text-slate-900 mb-0.5">
                        {content['services.bpo-detail-section.text.what-we-do'] ?? 'What we do:\r'}</h5>
                      <p className="text-slate-500 leading-relaxed font-normal">
                        {card.whatWeDo}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
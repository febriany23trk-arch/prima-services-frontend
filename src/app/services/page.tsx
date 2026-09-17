"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// DATA CONFIGURATIONS
// ==========================================

const RECRUITMENT_FEATURES = [
  {
    title: "Expertise",
    badge: "Core Advantage",
    description:
      "Our recruitment consultants bring an average of 15 years of experience, applying time-tested methodologies and international best practices to search, shortlist, and deliver highly qualified candidates.",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Quality of Candidates",
    description:
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
    title: "Time Saving",
    description:
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
    title: "Culture Driven",
    description:
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
    title: "Broad Industry & Role Coverage",
    description:
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
    bold: "End-to-end ownership:",
    text: "from job brief to onboarding (incl. 90-day success).",
  },
  {
    bold: "Embedded partnership:",
    text: "seamless extension of your internal HR team with a shared hiring playbook.",
  },
  {
    bold: "SLA-driven delivery:",
    text: "3-7 business-day shortlist and clear funnel targets (Submittal → Interview → Offer → Accept).",
  },
  {
    bold: "Staff-to-C-Level coverage,",
    text: "including technical/programming roles.",
  },
  {
    bold: "Data-driven, bias-aware hiring:",
    text: "structured scorecards, interviewer calibration, and funnel KPIs.",
  },
  {
    bold: "Secure & compliant:",
    text: "UU PDP/PDPA/GDPR, ISO 27001.",
  },
];

const TALENT_MAPPING_CARDS = [
  {
    title: "Benchmark & Salary Data",
    desc: "Akurasi data gaji dan kompensasi pasar terkini untuk efisiensi budget SDM.",
    badgeBg: "bg-blue-50 text-blue-600 border-blue-100/80 group-hover:bg-blue-600 group-hover:text-white",
    glowColor: "hover:border-blue-500/40 hover:shadow-blue-500/5",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Insights Across Regions",
    desc: "Analisis mendalam ketersediaan talenta berbasis wilayah dan geografis.",
    badgeBg: "bg-sky-50 text-sky-600 border-sky-100/80 group-hover:bg-sky-500 group-hover:text-white",
    glowColor: "hover:border-sky-500/40 hover:shadow-sky-500/5",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1.5a2.5 2.5 0 002.5 2.5h.5a2 2 0 012 2v.5h.5a2 2 0 002-2v-1.5a2.5 2.5 0 00-2.5-2.5H18a2 2 0 01-2-2v-.5H14a2 2 0 00-2-2V4.5A2.5 2.5 0 009.5 2H9a2 2 0 00-2 2v.5" />
      </svg>
    ),
  },
  {
    title: "Passive Talent Mapping",
    desc: "Pemetaan kandidat potensial pasif terbaik yang siap direkrut sesuai kebutuhan.",
    badgeBg: "bg-indigo-50 text-indigo-600 border-indigo-100/80 group-hover:bg-indigo-600 group-hover:text-white",
    glowColor: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Reports & Dashboards",
    desc: "Visualisasi laporan dan dashboard intuitif untuk pengambilan keputusan strategis.",
    badgeBg: "bg-emerald-50 text-emerald-600 border-emerald-100/80 group-hover:bg-emerald-600 group-hover:text-white",
    glowColor: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

const BPO_CARDS = [
  {
    id: "cx",
    title: "CX | Contact Center",
    subtitle: "(Customer Service)",
    imageSrc: "/images/Model.png",
    accentGlow: "from-sky-500/10 via-blue-500/5 to-transparent",
    badgeTheme: "bg-sky-50 text-sky-700 border-sky-200/60",
    flowIconBg: "bg-sky-50 text-sky-600 border-sky-100 group-hover/step:bg-sky-500 group-hover/step:text-white group-hover/step:border-sky-500",
    outcomes: [
      { icon: "⏱️", label: "Faster Responses" },
      { icon: "📉", label: "Lower cost per contact" },
      { icon: "🛡️", label: "Stable CSAT" },
    ],
    flowSteps: [
      { num: 1, icon: "🎧", label: "Diagnosa" },
      { num: 2, icon: "📁", label: "Map Journeys & Scripts" },
      { num: 3, icon: "☑️", label: "Operate with QC" },
      { num: 4, icon: "📋", label: "Weekly Reporting & Improvements" },
    ],
    whatWeDo: "Trained CS teams, contextual scripts, QA & coaching cadence, clear dashboards",
  },
  {
    id: "telesales",
    title: "Sales Telesales",
    subtitle: "",
    imageSrc: "/images/Man.png",
    accentGlow: "from-amber-500/10 via-orange-500/5 to-transparent",
    badgeTheme: "bg-amber-50 text-amber-700 border-amber-200/60",
    flowIconBg: "bg-amber-50 text-amber-600 border-amber-100 group-hover/step:bg-amber-500 group-hover/step:text-white group-hover/step:border-amber-500",
    outcomes: [
      { icon: "💬", label: "More meaningful conversations" },
      { icon: "🤝", label: "More meetings / closings" },
    ],
    flowSteps: [
      { num: 1, icon: "📝", label: "Segment & Script" },
      { num: 2, icon: "📞", label: "Outreach & Logging" },
      { num: 3, icon: "🗣️", label: "Weekly Coaching" },
      { num: 4, icon: "🎯", label: "Optimize Message & Target" },
    ],
    whatWeDo: "Human-sounding scripts, coaching driven by conversation insights, daily snapshots (connect, booked, next actions).",
  },
  {
    id: "collection",
    title: "Collection",
    subtitle: "",
    imageSrc: "/images/Collection.png",
    accentGlow: "from-emerald-500/10 via-teal-500/5 to-transparent",
    badgeTheme: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    flowIconBg: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover/step:bg-emerald-500 group-hover/step:text-white group-hover/step:border-emerald-500",
    outcomes: [
      { icon: "📉", label: "Better FPD & recovery" },
      { icon: "🤝", label: "With a respectful approach" },
    ],
    flowSteps: [
      { num: 1, icon: "📊", label: "Bucket Mapping" },
      { num: 2, icon: "💡", label: "Communication Strategy" },
      { num: 3, icon: "⚖️", label: "Execution & Negotiation" },
      { num: 4, icon: "🔍", label: "Results Review" },
    ],
    whatWeDo: "Bucket-specific handling, clear escalation, compliant documentation.",
  },
  {
    id: "kyc",
    title: "KYC (Verification)",
    subtitle: "",
    imageSrc: "/images/Kyc.png",
    accentGlow: "from-indigo-500/10 via-violet-500/5 to-transparent",
    badgeTheme: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
    flowIconBg: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover/step:bg-indigo-500 group-hover/step:text-white group-hover/step:border-indigo-500",
    outcomes: [
      { icon: "⚡", label: "Accurate and fast verification" },
      { icon: "📋", label: "Audit-ready" },
    ],
    flowSteps: [
      { num: 1, icon: "📥", label: "Data Intake" },
      { num: 2, icon: "✔️", label: "Stepwise Verification" },
      { num: 3, icon: "💬", label: "Clarification" },
      { num: 4, icon: "📁", label: "Archiving & Reporting" },
    ],
    whatWeDo: "Consistent checks, quality controls, traceable records.",
  },
];

export default function ServicesPage() {
  const heroFeature = RECRUITMENT_FEATURES[0];
  const secondaryFeatures = RECRUITMENT_FEATURES.slice(1);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white relative overflow-x-hidden pb-12">
      
      {/* Background Ambient Glow FX */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-100/40 via-sky-50/20 to-transparent pointer-events-none -z-10 blur-3xl"></div>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 grid grid-cols-1 md:grid-cols-12 shadow-sm">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400"></div>

          <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-center relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100/80 w-fit mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-700 tracking-wider uppercase">Enterprise Solutions</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 leading-tight">
              What We Can Do For You
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-xl">
              We are your strategic partner — not just building systems, but ensuring technology becomes the foundation of sustainable growth and operational excellence.
            </p>
          </div>

          <div className="md:col-span-5 relative bg-gradient-to-br from-slate-50 to-slate-100/80 overflow-hidden flex items-center justify-center p-2 border-t md:border-t-0 md:border-l border-slate-200/80">
            <div className="relative z-10 w-full flex items-center justify-center">
              <Image
                src="/images/Bitmap.png"
                alt="Our Services Team"
                width={360}
                height={240}
                className="object-contain max-h-[220px] scale-110 drop-shadow-sm transition-transform duration-500 hover:scale-115"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRIMA SERVICE RECRUITMENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-3">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden text-left">
          
          {/* Ambient Glow FX */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="max-w-3xl mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Talent Acquisition Solutions
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase mb-2">
              Prima Service Recruitment
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              At <span className="font-bold text-slate-900">Prima Service</span>, our recruitment division is dedicated to helping businesses find and retain top-tier talent efficiently, spanning staff-level roles up to C-Level executives.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50/50 border-l-4 border-blue-600 px-4 py-2.5 rounded-r-xl">
              <span className="text-blue-600 text-lg">“</span>
              <p className="text-xs md:text-sm font-semibold italic text-blue-900">
                From Staff to C-Level: We Deliver the Right Talent.
              </p>
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
                <span>Proven 15+ Years Track Record</span>
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
                  className={`bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between group ${item.hoverBorder}`}
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
              RECRUITMENT PROCESS OUTSOURCING (RPO)
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Full-Cycle Hiring with Recruitment Process Outsourcing (RPO)
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* RPO Circular Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center py-2">
              <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-slate-100 shadow-inner"></div>
                <div className="absolute inset-2 rounded-full border-2 border-dashed border-blue-400/40 animate-[spin_60s_linear_infinite]"></div>

                <div className="w-24 h-24 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center p-2 text-center shadow-lg z-20 border-2 border-white">
                  <span className="text-[10px] font-black tracking-widest uppercase text-blue-400">RPO</span>
                  <span className="text-[8px] font-medium text-slate-300 leading-tight mt-0.5">Full-Cycle Hiring</span>
                </div>

                {/* Nodes */}
                <div className="absolute top-1 right-2 flex items-center gap-1.5 z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-900 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">01</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">Job Request</span>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center gap-1.5 z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-800 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">02</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">Sourcing</span>
                </div>
                <div className="absolute bottom-1 right-2 flex items-center gap-1.5 z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-700 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">03</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">Assessment</span>
                </div>
                <div className="absolute bottom-1 left-2 flex items-center gap-1.5 flex-row-reverse z-30">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">04</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">Interview</span>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex items-center gap-1.5 flex-row-reverse z-30">
                  <div className="w-5 h-5 rounded-full bg-sky-600 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">05</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">Offer</span>
                </div>
                <div className="absolute top-1 left-2 flex items-center gap-1.5 flex-row-reverse z-30">
                  <div className="w-5 h-5 rounded-full bg-sky-700 text-white font-bold text-[9px] flex items-center justify-center shadow-xs">06</div>
                  <span className="text-[9px] font-bold text-slate-800 bg-white/95 px-2 py-0.5 rounded-md border border-slate-200 shadow-xs">Onboard</span>
                </div>
              </div>
            </div>

            {/* RPO Key Points */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Key Program Pillars
              </h3>
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
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-sm relative overflow-hidden text-left">
          
          <div className="mb-6 relative z-10 border-b border-slate-100 pb-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              Market Intelligence
            </div>
            <h2 className="text-lg md:text-xl font-black tracking-tight text-slate-900 uppercase mb-1.5">
              Talent Mapping &amp; Market Intelligence
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-3xl">
              Understanding the talent market is essential to staying competitive. Prima Service provides actionable insights on workforce availability, salary benchmarks, and future hiring trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {TALENT_MAPPING_CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`group bg-slate-50/70 hover:bg-white rounded-xl p-4 border border-slate-200/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${card.glowColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-lg border ${card.badgeBg} flex items-center justify-center transition-colors duration-300 shadow-xs`}>
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-bold text-xs text-slate-900 leading-snug mb-1.5 group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Explore Details</span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BPO DETAIL SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-4 mb-4">
        <div className="space-y-4">
          
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-1.5">
              Solutions Deep-Dive
            </span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase">
              Business Process Outsourcing (BPO)
            </h2>
            <p className="text-xs text-slate-500 font-normal max-w-md mx-auto">
              Your comprehensive target-driven technology & operational services
            </p>
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
                      <span className="text-[11px] font-semibold text-slate-400 mt-0.5">
                        {card.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Workflow & Outcomes */}
                <div className="md:col-span-8 space-y-4">
                  
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                      Execution Flow
                    </h4>
                    
                    <div className="relative grid grid-cols-4 gap-2 text-center">
                      <div className="absolute top-4 left-6 right-6 h-0.5 bg-slate-100 -z-0 hidden md:block"></div>

                      {card.flowSteps.map((step) => (
                        <div key={step.num} className="flex flex-col items-center group/step cursor-pointer relative z-10">
                          <div className="relative w-8 h-8 mb-1.5">
                            <span className="absolute -top-1 -left-1 w-4 h-4 bg-white border border-slate-200 rounded-full text-[9px] font-bold text-slate-800 flex items-center justify-center z-20 shadow-xs">
                              {step.num}
                            </span>
                            <div className={`w-full h-full rounded-lg ${card.flowIconBg} flex items-center justify-center text-sm border transition-all duration-300 shadow-xs group-hover/step:scale-110`}>
                              {step.icon}
                            </div>
                          </div>
                          <p className="text-[10px] font-semibold text-slate-600 leading-tight px-1 transition-colors group-hover/step:text-slate-900">
                            {step.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch pt-3 border-t border-slate-100">
                    <div className="sm:col-span-7 flex flex-col justify-between">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                        Target Outcomes
                      </h4>
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {card.outcomes.map((out, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200/70">
                            <span className="text-xs">{out.icon}</span>
                            <span className="text-[10px] font-semibold text-slate-700 leading-tight">
                              {out.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-5 bg-slate-50/80 border border-slate-200/70 p-3 rounded-xl text-[10px] flex flex-col justify-center">
                      <h5 className="font-bold text-slate-900 mb-0.5">
                        What we do:
                      </h5>
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
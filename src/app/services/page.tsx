"use client";

import React from "react";
import Image from "next/image";
import { 
  Target, 
  Headphones, 
  Package, 
  BarChart3, 
  CheckCircle2,
  Clock,
  TrendingDown,
  ShieldCheck,
  MessageSquare,
  Users,
  RefreshCw,
  FileCheck,
  UserCheck,
  PhoneCall,
  TrendingUp,
  Wallet,
  Search,
  Globe
} from "lucide-react";

export default function ServicesPage() {
  const bpoProcesses = [
    {
      badge: "CUSTOMER EXPERIENCE",
      title: "CX | Contact Center",
      subtitle: "(Customer Service)",
      mainIcon: <Headphones className="w-10 h-10 text-cyan-400" />,
      flows: [
        { step: 1, label: "Diagnosis", icon: <PhoneCall className="w-5 h-5 text-slate-950" /> },
        { step: 2, label: "Map Journeys & Scripts", icon: <Package className="w-5 h-5 text-slate-950" /> },
        { step: 3, label: "Operate with QC", icon: <CheckCircle2 className="w-5 h-5 text-slate-950" /> },
        { step: 4, label: "Weekly Reporting & Improvements", icon: <BarChart3 className="w-5 h-5 text-slate-950" /> }
      ],
      outcomes: [
        { icon: <Clock className="w-4 h-4 text-amber-400" />, label: "Faster Responses" },
        { icon: <TrendingDown className="w-4 h-4 text-amber-400" />, label: "Lower cost per contact" },
        { icon: <ShieldCheck className="w-4 h-4 text-amber-400" />, label: "Stable CSAT" }
      ],
      whatWeDo: "Trained CS teams, contextual scripts, QA & coaching cadence, clear dashboards."
    },
    {
      badge: "REVENUE GROWTH",
      title: "Sales & Telesales",
      subtitle: "",
      mainIcon: <TrendingUp className="w-10 h-10 text-cyan-400" />,
      flows: [
        { step: 1, label: "Segment & Script", icon: <Target className="w-5 h-5 text-slate-950" /> },
        { step: 2, label: "Outreach & Logging", icon: <PhoneCall className="w-5 h-5 text-slate-950" /> },
        { step: 3, label: "Weekly Coaching", icon: <Users className="w-5 h-5 text-slate-950" /> },
        { step: 4, label: "Optimize Message & Target", icon: <MessageSquare className="w-5 h-5 text-slate-950" /> }
      ],
      outcomes: [
        { icon: <MessageSquare className="w-4 h-4 text-amber-400" />, label: "More meaningful conversations" },
        { icon: <Users className="w-4 h-4 text-amber-400" />, label: "More meetings / closings" }
      ],
      whatWeDo: "Human-sounding scripts, coaching driven by conversation insights, daily snapshots (connect, booked, next actions)."
    },
    {
      badge: "FINANCE OPS",
      title: "Collection Services",
      subtitle: "",
      mainIcon: <Wallet className="w-10 h-10 text-cyan-400" />,
      flows: [
        { step: 1, label: "Bucket Mapping", icon: <Package className="w-5 h-5 text-slate-950" /> },
        { step: 2, label: "Communication Strategy", icon: <MessageSquare className="w-5 h-5 text-slate-950" /> },
        { step: 3, label: "Execution & Negotiation", icon: <UserCheck className="w-5 h-5 text-slate-950" /> },
        { step: 4, label: "Results Review", icon: <BarChart3 className="w-5 h-5 text-slate-950" /> }
      ],
      outcomes: [
        { icon: <RefreshCw className="w-4 h-4 text-amber-400" />, label: "Better RPC & recovery" },
        { icon: <UserCheck className="w-4 h-4 text-amber-400" />, label: "With a respectful approach" }
      ],
      whatWeDo: "Bucket-specific handling, clear escalation, compliant documentation."
    },
    {
      badge: "SECURITY & RISK",
      title: "KYC Verification",
      subtitle: "",
      mainIcon: <Globe className="w-10 h-10 text-cyan-400" />,
      flows: [
        { step: 1, label: "Data Intake", icon: <FileCheck className="w-5 h-5 text-slate-950" /> },
        { step: 2, label: "Stepwise Verification", icon: <Search className="w-5 h-5 text-slate-950" /> },
        { step: 3, label: "Clarification", icon: <UserCheck className="w-5 h-5 text-slate-950" /> },
        { step: 4, label: "Archiving & Reporting", icon: <BarChart3 className="w-5 h-5 text-slate-950" /> }
      ],
      outcomes: [
        { icon: <FileCheck className="w-4 h-4 text-amber-400" />, label: "Accurate and fast verification" },
        { icon: <ShieldCheck className="w-4 h-4 text-amber-400" />, label: "Audit-ready" }
      ],
      whatWeDo: "Consistent checks, quality controls, traceable records."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      <div>
        {/* HERO BANNER SECTION */}
        <section className="max-w-6xl mx-auto px-6 pt-10 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-900 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:col-span-6 p-8 md:p-12 lg:p-14 flex flex-col justify-center items-start z-10">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-3 block">
                Our Services
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                What We Can Do For You
              </h1>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal max-w-lg">
                We are your strategic partner not just building systems, but ensuring technology becomes the foundation of growth and operational efficiency.
              </p>
            </div>

            <div className="lg:col-span-6 relative w-full h-[300px] lg:h-auto min-h-[350px]">
              <Image
                src="/images/services-hero.jpg"
                alt="Prima Services Team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </section>

        {/* BPO PROCESS SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Business Process Outsourcing (BPO)
            </h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-lg mx-auto">
              Your one-stop solutions technology services
            </p>
          </div>

          <div className="space-y-8">
            {bpoProcesses.map((item, index) => (
              <div 
                key={index}
                className="bg-[#080d1a] border border-slate-800/80 hover:border-cyan-500/40 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* SISI KIRI (GLOW ICON + BADGE + JUDUL) */}
                <div className="lg:col-span-4 flex flex-col items-center text-center lg:border-r border-slate-800/80 lg:pr-8 py-2">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-[#0d162b] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:shadow-[0_0_45px_rgba(6,182,212,0.5)] transition-all duration-300">
                      {item.mainIcon}
                    </div>
                  </div>

                  <div className="inline-block px-4 py-1 rounded-full bg-[#0d1a33] border border-cyan-500/40 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-3">
                    {item.badge}
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <span className="text-xs text-slate-400 font-medium mt-1">{item.subtitle}</span>
                  )}
                </div>

                {/* SISI KANAN (FLOW STEPS & OUTCOMES) */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                  <div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest block mb-4">
                      Our flow:
                    </span>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {item.flows.map((flow) => (
                        <div key={flow.step} className="flex flex-col items-center text-center group">
                          <div className="relative mb-3">
                            <div className="w-13 h-13 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                              {flow.icon}
                            </div>
                            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-slate-950 border border-cyan-400 text-cyan-400 font-bold text-[10px] flex items-center justify-center">
                              {flow.step}
                            </span>
                          </div>
                          <span className="text-xs text-slate-300 font-medium leading-tight">
                            {flow.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch border-t border-slate-800/80 pt-6">
                    <div className="md:col-span-7 flex flex-col justify-center">
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest block mb-3">
                        Outcome we aim for:
                      </span>
                      <div className="flex flex-wrap items-center gap-2.5">
                        {item.outcomes.map((out, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0b1326] border border-slate-800"
                          >
                            <div className="p-1 rounded bg-amber-400/10 border border-amber-400/20 shrink-0">
                              {out.icon}
                            </div>
                            <span className="text-xs text-slate-300 font-medium leading-tight">
                              {out.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-[#0b1326] border border-slate-800 p-4 rounded-2xl flex flex-col justify-center">
                      <span className="text-[11px] text-amber-400 font-extrabold uppercase tracking-widest block mb-1">
                        What we do:
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.whatWeDo}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
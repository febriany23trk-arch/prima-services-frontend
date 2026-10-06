'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePageContent } from '@/lib/use-page-content';
import {
  Ticket,
  Laptop,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Sparkles,
  Zap,
  Terminal,
  Activity,
  Layers,
  Wrench,
  Package,
  MonitorCheck,
  Lock,
  Workflow,
  Server,
  Headphones,
  Check,
  ChevronRight
} from 'lucide-react';

export default function ITManagedServicesPage() {
  const { content, error } = usePageContent('solutions-it');
  const [language] = useState<'id' | 'en'>('id');
  const [activeTab, setActiveTab] = useState<'desk' | 'asset' | 'sec'>('desk');
  const [activeModule, setActiveModule] = useState<'itsm' | 'asset' | 'endpoint'>('itsm');

  // Realtime System Metric Simulation
  const uptime = content['metrics.uptime'] ?? '99.98%';
  const mttr = content['metrics.mttr'] ?? '11.4 min';
  const [logs, setLogs] = useState<string[]>([
    content['live-logs.initial.01'] ?? '[ITS-01] Auto-routing ticket #9842 to Tier-2 Support',
    content['live-logs.initial.02'] ?? '[ASSET] Mac Studio M3 Max synced with Endpoint Manager',
    content['live-logs.initial.03'] ?? '[PATCH] Security Hotfix KB503819 deployed to 340 devices',
  ]);

  useEffect(() => {
    const pool = [
      content['pool.01'] ?? '[SECURITY] Zero-Trust session refreshed for 120 users',
      content['pool.02'] ?? '[AUTOMATION] Onboarding workflow triggered for New Hire #382',
      content['pool.03'] ?? '[MONITORING] CPU Spike on DB-Cluster-02 resolved automatically',
      content['pool.04'] ?? '[CSAT] Ticket #9810 closed with 5/5 Rating'
    ];

    const interval = setInterval(() => {
      const randomLog = pool[Math.floor(Math.random() * pool.length)];
      setLogs((prev) => [randomLog, ...prev.slice(0, 2)]);
    }, 3500);

    return () => clearInterval(interval);
  }, [content]);

  const initialLogContent = new Map<string, string>([
    ['[ITS-01] Auto-routing ticket #9842 to Tier-2 Support', content['live-logs.initial.01'] ?? '[ITS-01] Auto-routing ticket #9842 to Tier-2 Support'],
    ['[ASSET] Mac Studio M3 Max synced with Endpoint Manager', content['live-logs.initial.02'] ?? '[ASSET] Mac Studio M3 Max synced with Endpoint Manager'],
    ['[PATCH] Security Hotfix KB503819 deployed to 340 devices', content['live-logs.initial.03'] ?? '[PATCH] Security Hotfix KB503819 deployed to 340 devices'],
  ]);
  const displayedLogs = logs.map((log) => initialLogContent.get(log) ?? log);

  return (
    <main className="min-h-screen bg-[#030712] font-sans pt-12 pb-20 px-3 sm:px-6 text-slate-100 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {error && (
        <p role="alert" className="relative z-20 mx-auto mb-3 max-w-7xl text-sm text-amber-300">
          {error}
        </p>
      )}

      {/* Dynamic Background Glowing Grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-[40%] -left-32 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] -right-32 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">

        {/* HERO SECTION */}
        <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-slate-800/80 p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-emerald-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[11px] font-black tracking-wider uppercase shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>
                  {language === 'id'
                    ? content['hero.span.text-001'] ?? 'NEXT-GEN IT MANAGEMENT • SERVICE DESK • ENDPOINT SECURITY'
                    : content['hero.span.text-002'] ?? 'NEXT-GEN IT MANAGEMENT • SERVICE DESK • ENDPOINT SECURITY'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                {language === 'id' ? content['hero.h1.text-001'] ?? 'Kelola Infrastruktur IT' : content['hero.h1.text-002'] ?? 'Manage IT Infrastructure'}{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">
                  {language === 'id' ? content['hero.span.text-003'] ?? 'Tanpa Hambatan' : content['hero.span.text-004'] ?? 'Without Friction'}
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                {language === 'id'
                  ? content['hero.p.text-001'] ?? 'Otomatisasi IT Service Desk, pemantauan aset komprehensif, patching otomatis, serta perlindungan endpoint tingkat lanjut—semua terpusat dengan jaminan SLA transparan.'
                  : content['hero.p.text-002'] ?? 'Automate IT Service Desk, real-time asset tracking, automated patching, and enterprise endpoint security under clear SLAs.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={content['hero.link.href-001'] ?? '/contact'}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{language === 'id' ? content['hero.span.text-005'] ?? 'Diskusikan Kebutuhan' : content['hero.span.text-006'] ?? 'Discuss Needs'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Badges / Metrics Highlights */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3 max-w-lg text-left">
                <div>
                  <div className="text-lg font-black text-emerald-400 font-mono">{uptime}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{content['hero.div.text-001'] ?? 'System Availability'}</div>
                </div>
                <div>
                  <div className="text-lg font-black text-blue-400 font-mono">{mttr}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{content['hero.div.text-002'] ?? 'Avg Resolution (MTTR)'}</div>
                </div>
                <div>
                  <div className="text-lg font-black text-amber-400 font-mono">{content['hero.div.text-003'] ?? '24/7/365'}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{content['hero.div.text-004'] ?? 'NOC Operations'}</div>
                </div>
              </div>
            </div>

            {/* Right Interactive NOC Control Visual */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-950/90 rounded-2xl border border-slate-800/90 p-4 shadow-2xl space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    <Terminal className="w-3 h-3 text-blue-400" /> {content['hero.span.text-007'] ?? 'NOC_CONTROL_v4.2'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {content['hero.span.text-008'] ?? 'ONLINE'}
                  </span>
                </div>

                {/* Sub Interactive Selector */}
                <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveTab('desk')}
                    className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                      activeTab === 'desk' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {content['hero.button.text-001'] ?? 'Service Desk'}
                  </button>
                  <button
                    onClick={() => setActiveTab('asset')}
                    className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                      activeTab === 'asset' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {content['hero.button.text-002'] ?? 'Asset Tracking'}
                  </button>
                  <button
                    onClick={() => setActiveTab('sec')}
                    className={`py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                      activeTab === 'sec' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {content['hero.button.text-003'] ?? 'Endpoint SOC'}
                  </button>
                </div>

                {/* Tab Dynamic Card Content */}
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 min-h-[120px] flex flex-col justify-between space-y-2">
                  {activeTab === 'desk' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span className="flex items-center gap-1.5 text-blue-400"><Headphones className="w-3.5 h-3.5" /> {content['hero.span.text-009'] ?? 'Service Desk L1-L3'}</span>
                        <span className="text-[10px] font-mono text-emerald-400">{content['hero.span.text-010'] ?? 'SLA: 99.8%'}</span>
                      </div>
                      <p className="text-[11px] text-slate-300">{content['hero.p.text-003'] ?? 'Routing insiden cerdas, otomatisasi penugasan tiket, dan templat penyelesaian cepat.'}</p>
                      <div className="flex gap-2 text-[9px] font-mono text-slate-400 pt-1">
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{content['hero.span.text-011'] ?? 'MTTR: 12 min'}</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{content['hero.span.text-012'] ?? 'CSAT: 4.9/5'}</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'asset' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span className="flex items-center gap-1.5 text-indigo-400"><Package className="w-3.5 h-3.5" /> {content['hero.span.text-013'] ?? 'CMDB & Asset Inventory'}</span>
                        <span className="text-[10px] font-mono text-blue-400">{content['hero.span.text-014'] ?? '3,420 Active Assets'}</span>
                      </div>
                      <p className="text-[11px] text-slate-300">{content['hero.p.text-004'] ?? 'Penemuan perangkat otomatis, audit lisensi, dan pelacakan lifecycle hardware.'}</p>
                      <div className="flex gap-2 text-[9px] font-mono text-slate-400 pt-1">
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{content['hero.span.text-015'] ?? 'License: Compliant'}</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{content['hero.span.text-016'] ?? 'Auto-Discovery ON'}</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'sec' && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-white">
                        <span className="flex items-center gap-1.5 text-emerald-400"><ShieldCheck className="w-3.5 h-3.5" /> {content['hero.span.text-017'] ?? 'Managed EDR & Patching'}</span>
                        <span className="text-[10px] font-mono text-emerald-400">{content['hero.span.text-018'] ?? 'Zero Vulnerabilities'}</span>
                      </div>
                      <p className="text-[11px] text-slate-300">{content['hero.p.text-005'] ?? 'Penerapan patch sistem otomatis, antivirus generasi baru, dan isolasi ancaman instant.'}</p>
                      <div className="flex gap-2 text-[9px] font-mono text-slate-400 pt-1">
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{content['hero.span.text-019'] ?? 'Agent: Active'}</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{content['hero.span.text-020'] ?? 'Patch Level: Latest'}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Output Feed */}
                <div className="bg-slate-900 rounded-xl p-2.5 border border-slate-800/80 font-mono text-[10px] space-y-1">
                  <div className="text-slate-500 flex items-center justify-between text-[9px] border-b border-slate-800 pb-1">
                    <span>{content['hero.span.text-021'] ?? 'LIVE NOC CONSOLE FEED'}</span>
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  </div>
                  {displayedLogs.map((log, index) => (
                    <div key={index} className="text-slate-300 truncate flex items-center gap-1.5">
                      <span className="text-blue-500 font-bold">{content['hero.span.text-022'] ?? '>'}</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 4 PILAR KEUNGGULAN (HOVER CARDS WITH GRADIENT BORDERS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Ticket,
              title: language === 'id' ? content['cards.dataset-01.01.title.id'] ?? 'Respon Tiket Cepat' : content['cards.dataset-01.01.title.en'] ?? 'Faster Ticket Resolution',
              desc: language === 'id' ? content['cards.dataset-01.01.desc.id'] ?? 'Routing otomatis, templat solusi cerdas, & SLA ketat.' : content['cards.dataset-01.01.desc.en'] ?? 'Smart routing, response templates, and clear SLAs.',
              color: 'from-amber-500 to-orange-500',
              accent: 'text-amber-400',
            },
            {
              icon: Laptop,
              title: language === 'id' ? content['cards.dataset-01.02.title.id'] ?? 'Visibilitas Aset Real-Time' : content['cards.dataset-01.02.title.en'] ?? 'Real-Time Asset Visibility',
              desc: language === 'id' ? content['cards.dataset-01.02.desc.id'] ?? 'Inventaris penuh untuk hardware, lisensi, & software.' : content['cards.dataset-01.02.desc.en'] ?? 'Real-time inventory for devices, licenses, & software.',
              color: 'from-blue-500 to-indigo-500',
              accent: 'text-blue-400',
            },
            {
              icon: ShieldCheck,
              title: language === 'id' ? content['cards.dataset-01.03.title.id'] ?? 'Keamanan Berlapis' : content['cards.dataset-01.03.title.en'] ?? 'Secure by Default',
              desc: language === 'id' ? content['cards.dataset-01.03.desc.id'] ?? 'Automated patching, hardening, & integrasi EDR/AV.' : content['cards.dataset-01.03.desc.en'] ?? 'Patch mgmt, hardening, integrated EDR/AV.',
              color: 'from-emerald-500 to-teal-500',
              accent: 'text-emerald-400',
            },
            {
              icon: BarChart3,
              title: language === 'id' ? content['cards.dataset-01.04.title.id'] ?? 'Analitik Operasional' : content['cards.dataset-01.04.title.en'] ?? 'Operational Insights',
              desc: language === 'id' ? content['cards.dataset-01.04.desc.id'] ?? 'Dasbor KPI, tren insiden, & laporan audit otomatis.' : content['cards.dataset-01.04.desc.en'] ?? 'KPI dashboard, incident trends, and audit trail.',
              color: 'from-purple-500 to-pink-500',
              accent: 'text-purple-400',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl p-4 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer overflow-hidden"
            >
              <div className="flex items-start gap-3.5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white group-hover:text-blue-300 transition-colors">{item.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODUL UTAMA DENGAN TAB ACCORDION & VISUAL SPECIFICATION */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {language === 'id' ? content['hero.span.text-023'] ?? 'MODUL TERPADU' : content['hero.span.text-024'] ?? 'UNIFIED MODULES'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {language === 'id' ? content['hero.h2.text-001'] ?? 'Paket Modul Layanan IT' : content['hero.h2.text-002'] ?? 'Core IT Service Modules'}
              </h2>
            </div>

            {/* Interactive Module Selector */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => setActiveModule('itsm')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeModule === 'itsm' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {content['hero.button.text-004'] ?? 'ITSM Service Desk'}
              </button>
              <button
                onClick={() => setActiveModule('asset')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeModule === 'asset' ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {content['hero.button.text-005'] ?? 'Asset CMDB'}
              </button>
              <button
                onClick={() => setActiveModule('endpoint')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeModule === 'endpoint' ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {content['hero.button.text-006'] ?? 'Endpoint Security'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Module 1 */}
            <div
              onClick={() => setActiveModule('itsm')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                activeModule === 'itsm'
                  ? 'bg-slate-900 border-blue-500/80 shadow-2xl shadow-blue-500/10'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-white">{content['hero.h3.text-001'] ?? 'ITSM / Service Desk'}</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-025'] ?? 'Manajemen Insiden, Permintaan, Perubahan, & Masalah' : content['hero.span.text-026'] ?? 'Incident, Request, Change, & Problem Management'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-027'] ?? 'Portal Mandiri (Self-Service) & Knowledge Base' : content['hero.span.text-028'] ?? 'Knowledge Base & Self-Service Portal'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-029'] ?? 'Aturan SLA/OLA, persetujuan & eskalasi bertingkat' : content['hero.span.text-030'] ?? 'SLA/OLA rules, multi-tier approvals'}</span>
                </li>
              </ul>
            </div>

            {/* Module 2 */}
            <div
              onClick={() => setActiveModule('asset')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                activeModule === 'asset'
                  ? 'bg-slate-900 border-amber-500/80 shadow-2xl shadow-amber-500/10'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-white">{language === 'id' ? content['hero.h3.text-002'] ?? 'Aset & Inventaris IT' : content['hero.h3.text-003'] ?? 'IT Asset & Inventory'}</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-031'] ?? 'Penemuan otomatis (CMDB) & pengukuran software' : content['hero.span.text-032'] ?? 'Auto-discovery, CMDB, & software metering'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-033'] ?? 'Kepatuhan lisensi & manajemen kontrak vendor' : content['hero.span.text-034'] ?? 'License compliance & vendor contract mgmt'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-035'] ?? 'Siklus hidup aset penuh (Procure-to-Retire)' : content['hero.span.text-036'] ?? 'Full asset lifecycle (Procure-to-Retire)'}</span>
                </li>
              </ul>
            </div>

            {/* Module 3 */}
            <div
              onClick={() => setActiveModule('endpoint')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                activeModule === 'endpoint'
                  ? 'bg-slate-900 border-emerald-500/80 shadow-2xl shadow-emerald-500/10'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <MonitorCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-white">{language === 'id' ? content['hero.h3.text-004'] ?? 'Keamanan Endpoint' : content['hero.h3.text-005'] ?? 'Endpoint Security'}</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{content['hero.span.text-037'] ?? 'MDM/MAM Windows, macOS, Linux, iOS, & Android'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-038'] ?? 'Patching terjadwal, kebijakan remote & akses' : content['hero.span.text-039'] ?? 'Automated patching, remote policy, & access control'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'id' ? content['hero.span.text-040'] ?? 'Antivirus/EDR terintegrasi & enkripsi disk' : content['hero.span.text-041'] ?? 'Integrated EDR/AV & full disk encryption'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* OTOMATISASI OPERASI IT & EKOSISTEM INTEGRASI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Automation List */}
          <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                {language === 'id' ? content['hero.span.text-042'] ?? 'EFISIENSI MAKSIMAL' : content['hero.span.text-043'] ?? 'MAXIMUM EFFICIENCY'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {language === 'id' ? content['hero.h2.text-003'] ?? 'Otomatisasi Operasi IT' : content['hero.h2.text-004'] ?? 'IT Operations Automation'}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                {language === 'id'
                  ? content['hero.p.text-006'] ?? 'Eliminasi pekerjaan manual berulang menggunakan alur kerja otomatis berbasis kejadian (event-driven workflow).'
                  : content['hero.p.text-007'] ?? 'Eliminate repetitive tasks with event-driven automated workflows and scheduled tasks.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  num: '01',
                  title: language === 'id' ? content['cards.dataset-02.01.title.id'] ?? 'Auto-Routing Tiket' : content['cards.dataset-02.01.title.en'] ?? 'Auto-Ticket Routing',
                  desc: language === 'id' ? content['cards.dataset-02.01.desc.id'] ?? 'Berdasarkan beban tim & kategori insiden' : content['cards.dataset-02.01.desc.en'] ?? 'Based on team load & incident category',
                },
                {
                  num: '02',
                  title: language === 'id' ? content['cards.dataset-02.02.title.id'] ?? 'User Onboarding' : content['cards.dataset-02.02.title.en'] ?? 'User Onboarding',
                  desc: language === 'id' ? content['cards.dataset-02.02.desc.id'] ?? 'Otomatisasi provisi akun & akses perangkat' : content['cards.dataset-02.02.desc.en'] ?? 'Automated user provisioning & device setup',
                },
                {
                  num: '03',
                  title: language === 'id' ? content['cards.dataset-02.03.title.id'] ?? 'Patching Terjadwal' : content['cards.dataset-02.03.title.en'] ?? 'Scheduled Patching',
                  desc: language === 'id' ? content['cards.dataset-02.03.desc.id'] ?? 'Pembaruan OS & software tanpa downtime' : content['cards.dataset-02.03.desc.en'] ?? 'Seamless OS & app updates without friction',
                },
                {
                  num: '04',
                  title: language === 'id' ? content['cards.dataset-02.04.title.id'] ?? 'Alerting Webhook' : content['cards.dataset-02.04.title.en'] ?? 'Webhook Alerts',
                  desc: language === 'id' ? content['cards.dataset-02.04.desc.id'] ?? 'Integrasi langsung dari sistem NMS/Monitoring' : content['cards.dataset-02.04.desc.en'] ?? 'Direct triggers from NMS/Monitoring tools',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 transition-all flex items-start gap-3">
                  <span className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-extrabold text-xs shrink-0 font-mono">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystem / Integrations Card */}
          <div className="lg:col-span-5 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5" />
                {language === 'id' ? content['hero.span.text-044'] ?? 'DUKUNGAN EKOSISTEM' : content['hero.span.text-045'] ?? 'ECOSYSTEM COMPATIBILITY'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {language === 'id' ? content['hero.h2.text-005'] ?? 'Integrasi Sistem' : content['hero.h2.text-006'] ?? 'System Integrations'}
              </h2>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-1">
                <h4 className="text-xs font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400" />
                  {language === 'id' ? content['hero.h4.text-001'] ?? 'Identitas & Direktori' : content['hero.h4.text-002'] ?? 'Identity & Directory'}
                </h4>
                <p className="text-[11px] text-slate-400">{content['hero.p.text-008'] ?? 'Active Directory, Azure AD / Entra ID, Okta, Google Workspace SSO.'}</p>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-1">
                <h4 className="text-xs font-bold text-white flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-amber-400" />
                  {language === 'id' ? content['hero.h4.text-003'] ?? 'ChatOps & Kolaborasi' : content['hero.h4.text-004'] ?? 'ChatOps & Collaboration'}
                </h4>
                <p className="text-[11px] text-slate-400">{content['hero.p.text-009'] ?? 'Microsoft Teams, Slack, Email Gateways, Telephony, Jira Cloud API.'}</p>
              </div>

              <div className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-1">
                <h4 className="text-xs font-bold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-emerald-400" />
                  {language === 'id' ? content['hero.h4.text-005'] ?? 'Observabilitas & Keamanan' : content['hero.h4.text-006'] ?? 'Observability & Security'}
                </h4>
                <p className="text-[11px] text-slate-400">{content['hero.p.text-010'] ?? 'SIEM / SOAR tools, NMS exporters, Endpoint Logs ke Central Data Lake.'}</p>
              </div>
            </div>
          </div>

        </div>

        {/* PAKET LAYANAN & ENGAGEMENT CARDS */}
        <div className="space-y-6 pt-4 text-center">
          <div>
            <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">
              {language === 'id' ? content['hero.span.text-046'] ?? 'SKEMA KERJASAMA' : content['hero.span.text-047'] ?? 'ENGAGEMENT MODELS'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">
              {language === 'id' ? content['hero.h2.text-007'] ?? 'Pilihan Paket Layanan' : content['hero.h2.text-008'] ?? 'Service Package Options'}
            </h2>
            <p className="text-xs text-slate-400 font-medium max-w-lg mx-auto mt-1">
              {language === 'id' ? content['hero.p.text-011'] ?? 'Fleksibel sesuai dengan skala dan kompleksitas operasional IT perusahaan Anda.' : content['hero.p.text-012'] ?? 'Flexible plans tailored to your organization scale and requirements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">

            {/* Implementation Pack */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-extrabold uppercase tracking-wider inline-block">
                  {content['hero.span.text-048'] ?? 'SETUP PACK'}
                </span>
                <h3 className="font-black text-xl text-white">{content['hero.h3.text-006'] ?? 'Implementation Pack'}</h3>
                <p className="text-xs text-slate-400">
                  {language === 'id' ? content['hero.p.text-013'] ?? 'Pengaturan awal cepat + transfer pengetahuan tim.' : content['hero.p.text-014'] ?? 'Quick rollout + full knowledge transfer to internal IT.'}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 shrink-0" /> {language === 'id' ? content['hero.li.text-001'] ?? 'Asesmen alur kerja & proses IT' : content['hero.li.text-002'] ?? 'Process assessment & workflow design'}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 shrink-0" /> {language === 'id' ? content['hero.li.text-003'] ?? 'Konfigurasi modul & integrasi dasar' : content['hero.li.text-004'] ?? 'Module setup & basic SSO integration'}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 shrink-0" /> {language === 'id' ? content['hero.li.text-005'] ?? 'Pelatihan admin & penyerahan SOP' : content['hero.li.text-006'] ?? 'Admin training & full SOP handover'}</li>
                </ul>
              </div>
              <Link href={content['hero.link.href-002'] ?? '/contact'} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs text-center transition border border-slate-700">
                {language === 'id' ? content['hero.link.text-001'] ?? 'Minta Penawaran' : content['hero.link.text-002'] ?? 'Request a Quote'}
              </Link>
            </div>

            {/* Managed Service */}
            <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 border border-blue-500/60 shadow-2xl shadow-blue-500/10 flex flex-col justify-between space-y-6 relative overflow-hidden transform hover:-translate-y-1 transition-all">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[9px] px-3.5 py-1 rounded-bl-xl uppercase tracking-widest shadow-md">
                {content['features.div.text-005'] ?? 'RECOMMENDED'}
              </div>
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-extrabold uppercase tracking-wider inline-block">
                  {content['features.span.text-049'] ?? 'FULL MANAGED'}
                </span>
                <h3 className="font-black text-xl text-white">{content['features.h3.text-007'] ?? 'Managed Service'}</h3>
                <p className="text-xs text-slate-400">
                  {language === 'id' ? content['features.p.text-015'] ?? 'Dukungan penuh operasional harian IT oleh pakar kami.' : content['features.p.text-016'] ?? 'End-to-end daily IT service operations handled by our team.'}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {language === 'id' ? content['features.li.text-007'] ?? 'Dukungan Service Desk L1–L3 sesuai SLA' : content['features.li.text-008'] ?? 'Service desk L1–L3 with SLA compliance'}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {language === 'id' ? content['features.li.text-009'] ?? 'Patching, monitoring, & penanganan insiden' : content['features.li.text-010'] ?? 'Proactive patching & incident response'}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {language === 'id' ? content['features.li.text-011'] ?? 'Laporan bulanan & evaluasi berkala' : content['features.li.text-012'] ?? 'Monthly KPI reports & continuous review'}</li>
                </ul>
              </div>
              <Link href={content['features.link.href-003'] ?? '/contact'} className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs text-center transition shadow-lg shadow-blue-600/30">
                {language === 'id' ? content['features.link.text-003'] ?? 'Minta Penawaran' : content['features.link.text-004'] ?? 'Request a Quote'}
              </Link>
            </div>

            {/* Managed Service Plus */}
            <div className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 border border-slate-800 flex flex-col justify-between space-y-6 hover:border-slate-700 transition">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider inline-block">
                  {content['features.span.text-050'] ?? 'ENTERPRISE SOC'}
                </span>
                <h3 className="font-black text-xl text-white">{content['features.h3.text-008'] ?? 'Managed Service Plus'}</h3>
                <p className="text-xs text-slate-400">
                  {language === 'id' ? content['features.p.text-017'] ?? 'Operasional IT lengkap ditambah keamanan & kepatuhan.' : content['features.p.text-018'] ?? 'Full IT operations plus advanced security & compliance.'}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {language === 'id' ? content['features.li.text-013'] ?? 'Managed EDR/AV & vulnerability scanning' : content['features.li.text-014'] ?? 'Managed EDR/AV & vulnerability scan'}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {language === 'id' ? content['features.li.text-015'] ?? 'Security hardening & Zero-Trust access' : content['features.li.text-016'] ?? 'Security hardening & Zero-Trust controls'}</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> {language === 'id' ? content['features.li.text-017'] ?? 'Latihan simulasi ancaman berkala' : content['features.li.text-018'] ?? 'Periodic risk reviews & tabletop exercises'}</li>
                </ul>
              </div>
              <Link href={content['features.link.href-004'] ?? '/contact'} className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs text-center transition border border-slate-700">
                {language === 'id' ? content['features.link.text-005'] ?? 'Minta Penawaran' : content['features.link.text-006'] ?? 'Request a Quote'}
              </Link>
            </div>

          </div>
        </div>

        {/* HIGH-IMPACT CALL TO ACTION */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 border border-blue-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-[90px] pointer-events-none rounded-full" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
            <div className="space-y-1.5 max-w-xl">
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                {language === 'id' ? content['cta.h2.text-009'] ?? 'Tingkatkan Efisiensi IT Anda Sekarang' : content['cta.h2.text-010'] ?? 'Elevate Your IT Operations Today'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'id'
                  ? content['cta.p.text-019'] ?? 'Diskusikan kebutuhan manajemen IT perusahaan Anda dengan tim spesialis kami untuk mendapatkan rekomendasi terbaik.'
                  : content['cta.p.text-020'] ?? 'Consult your service desk and endpoint security strategy with our enterprise IT specialists.'}
              </p>
            </div>

            <Link
              href={content['cta.link.href-005'] ?? '/contact'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-xs px-8 py-4 rounded-2xl shadow-xl shadow-amber-400/20 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span>{language === 'id' ? content['cta.span.text-051'] ?? 'Konsultasi Gratis' : content['cta.span.text-052'] ?? 'Free Consultation'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
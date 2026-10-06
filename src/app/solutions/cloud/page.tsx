'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePageContent } from '@/lib/use-page-content';
import {
  ArrowRight,
  Rocket,
  Brain,
  ShieldAlert,
  Coins,
  Server,
  HardDrive,
  BarChart3,
  Globe2,
  Lock,
  Cpu,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  ShieldCheck,
  Cloud,
  ChevronRight,
  Database,
  Activity,
  Terminal,
  Code2,
  CpuIcon,
  RefreshCw,
  Sliders,
  Check
} from 'lucide-react';

export default function GoogleCloudPlatformPage() {
  const { content, error } = usePageContent('solutions-cloud');
  // State Dinamis untuk Active Tab Blueprint
  const [activeTab, setActiveTab] = useState<'analytics' | 'microservices' | 'genai'>('analytics');

  // State Dinamis untuk Live Log Terminal
  const [logs, setLogs] = useState<string[]>([
    content['live-logs.initial.01'] ?? '[INIT] Connecting to Google Cloud Region asia-southeast2...',
    content['live-logs.initial.02'] ?? '[INFO] GKE Cluster Autoscaler status: OPTIMAL',
    content['live-logs.initial.03'] ?? '[INFO] BigQuery streaming buffer active (0.2ms latency)',
  ]);

  // Simulasi log dinamis berjalan
  useEffect(() => {
    const logPool = [
      content['logpool.01'] ?? '[METRIC] Vertex AI inference response: 12ms',
      content['logpool.02'] ?? '[SECURITY] Cloud Armor WAF blocked 0 threats',
      content['logpool.03'] ?? '[FINOPS] Cost optimization engine running...',
      content['logpool.04'] ?? '[SYNC] AlloyDB replication lag: <1ms',
      content['logpool.05'] ?? '[BUILD] Cloud Build pipeline #8492 finished'
    ];

    const interval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      setLogs((prev) => [randomLog, ...prev.slice(0, 2)]);
    }, 3500);

    return () => clearInterval(interval);
  }, [content]);

  const initialLogContent = new Map<string, string>([
    ['[INIT] Connecting to Google Cloud Region asia-southeast2...', content['live-logs.initial.01'] ?? '[INIT] Connecting to Google Cloud Region asia-southeast2...'],
    ['[INFO] GKE Cluster Autoscaler status: OPTIMAL', content['live-logs.initial.02'] ?? '[INFO] GKE Cluster Autoscaler status: OPTIMAL'],
    ['[INFO] BigQuery streaming buffer active (0.2ms latency)', content['live-logs.initial.03'] ?? '[INFO] BigQuery streaming buffer active (0.2ms latency)'],
  ]);
  const displayedLogs = logs.map((log) => initialLogContent.get(log) ?? log);

  return (
    <main className="min-h-screen bg-[#050811] font-sans pt-16 pb-8 px-2 sm:px-4 text-slate-100 relative overflow-hidden">
      {error && (
        <p role="alert" className="relative z-20 mx-auto mb-3 max-w-7xl text-sm text-amber-300">
          {error}
        </p>
      )}

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-4 relative z-10">

        {/* HERO BANNER */}
        <div className="relative bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-red-500 via-amber-400 to-emerald-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-blue-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{content['hero.span.text-001'] ?? 'Next-Gen Enterprise Infrastructure'}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {content['hero.h1.text-001'] ?? 'Google Cloud'} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">{content['hero.span.text-002'] ?? 'Modern Apps & Data'}</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-normal max-w-xl">
                {content['hero.p.text-001'] ?? 'Akselerasi transformasi digital dengan fondasi cloud Google berkecepatan tinggi. Siap untuk microservices, analytics, dan GenAI.'}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Link
                  href={content['hero.link.href-001'] ?? '/contact'}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>{content['hero.span.text-003'] ?? 'Konsultasi Gratis'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={content['hero.link.href-002'] ?? '#services'}
                  className="inline-flex items-center gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold px-5 py-2.5 rounded-xl hover:border-slate-500 transition-all cursor-pointer"
                >
                  {content['hero.link.text-001'] ?? 'Jelajahi Kapabilitas'}
                </Link>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-4 text-[11px] font-medium text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {content['hero.span.text-004'] ?? '99.99% SLA'}</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> {content['hero.span.text-005'] ?? 'ISO 27001 & SOC 2'}</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-400" /> {content['hero.span.text-006'] ?? 'Low Latency'}</span>
              </div>
            </div>

            {/* Terminal Dinamis dengan Live Log */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="w-full bg-slate-950/90 rounded-2xl border border-slate-800 p-3 shadow-xl space-y-2">

                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-blue-400" /> {content['hero.span.text-007'] ?? 'gcp-live-feed'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-bold border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {content['hero.span.text-008'] ?? 'LIVE'}
                  </span>
                </div>

                {/* Grid Widget */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80 space-y-1 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <Server className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[9px] font-mono text-emerald-400">{content['hero.span.text-009'] ?? '0.2ms'}</span>
                    </div>
                    <div className="text-xs font-bold text-white">{content['hero.div.text-001'] ?? 'Google GKE'}</div>
                    <p className="text-[10px] text-slate-400">{content['hero.p.text-002'] ?? 'Autoscaling Active'}</p>
                  </div>

                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800/80 space-y-1 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <Database className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-[9px] font-mono text-blue-400">{content['hero.span.text-010'] ?? 'Petabyte'}</span>
                    </div>
                    <div className="text-xs font-bold text-white">{content['hero.div.text-002'] ?? 'BigQuery'}</div>
                    <p className="text-[10px] text-slate-400">{content['hero.p.text-003'] ?? 'Data Lakehouse'}</p>
                  </div>
                </div>

                {/* Live Console Output Box */}
                <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 font-mono text-[10px] space-y-1">
                  <div className="text-slate-500 flex items-center justify-between text-[9px] border-b border-slate-800/60 pb-1">
                    <span>{content['hero.span.text-011'] ?? 'LIVE STREAM LOGS'}</span>
                    <RefreshCw className="w-2.5 h-2.5 animate-spin text-blue-400" />
                  </div>
                  {displayedLogs.map((log, index) => (
                    <p key={index} className="text-slate-300 truncate transition-all duration-300">
                      {log}
                    </p>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 PILAR UTAMA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: Rocket, title: content['cards.dataset-01.01.title'] ?? 'Scalable by Design', desc: content['cards.dataset-01.01.desc'] ?? 'Skala global otomatis dengan load balancing cerdas & standar SRE.', gradient: "from-orange-500 to-amber-500" },
            { icon: Brain, title: content['cards.dataset-01.02.title'] ?? 'Data & AI Ready', desc: content['cards.dataset-01.02.desc'] ?? 'BigQuery & Vertex AI terintegrasi untuk kecerdasan bisnis mutakhir.', gradient: "from-pink-500 to-rose-500" },
            { icon: ShieldAlert, title: content['cards.dataset-01.03.title'] ?? 'Zero-Trust Posture', desc: content['cards.dataset-01.03.desc'] ?? 'Proteksi IAM, VPC Service Controls & Cloud Armor.', gradient: "from-red-500 to-orange-500" },
            { icon: Coins, title: content['cards.dataset-01.04.title'] ?? 'Cost Efficient', desc: content['cards.dataset-01.04.desc'] ?? 'Optimasi TCO dengan Committed Use Discounts dan FinOps.', gradient: "from-emerald-500 to-teal-500" }
          ].map((item, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-md rounded-xl p-3.5 border border-slate-800/80 flex items-start gap-3 hover:bg-slate-900/90 hover:scale-[1.02] hover:border-slate-700 transition-all cursor-pointer">
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-white">{item.title}</h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CORE SERVICES */}
        <div id="services" className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{content['features.span.text-012'] ?? 'Ecosystem Stack'}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">{content['features.h2.text-001'] ?? 'Google Cloud Core Services'}</h2>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block max-w-xs text-right">{content['features.p.text-004'] ?? 'Layanan komprehensif komputasi, storage, keamanan & DevOps.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: content['cards.dataset-02.01.title'] ?? 'Compute Engine', icon: Server, items: [content['cards.dataset-02.01.items.01'] ?? 'Google Kubernetes Engine (GKE)', content['cards.dataset-02.01.items.02'] ?? 'Cloud Run (Serverless)', content['cards.dataset-02.01.items.03'] ?? 'Compute Engine (Custom VMs)', content['cards.dataset-02.01.items.04'] ?? 'App Engine Platform'], accent: "text-blue-400", hover: "hover:border-blue-500/50" },
              { title: content['cards.dataset-02.02.title'] ?? 'Storage & Databases', icon: HardDrive, items: [content['cards.dataset-02.02.items.01'] ?? 'Cloud Storage (High-Speed)', content['cards.dataset-02.02.items.02'] ?? 'AlloyDB & Cloud SQL', content['cards.dataset-02.02.items.03'] ?? 'Filestore (NFS Enterprise)', content['cards.dataset-02.02.items.04'] ?? 'Persistent Disk & DR'], accent: "text-amber-400", hover: "hover:border-amber-500/50" },
              { title: content['cards.dataset-02.03.title'] ?? 'Data Analytics & AI', icon: BarChart3, items: [content['cards.dataset-02.03.items.01'] ?? 'BigQuery Enterprise', content['cards.dataset-02.03.items.02'] ?? 'Vertex AI & GenAI Studio', content['cards.dataset-02.03.items.03'] ?? 'Dataflow Real-Time Streaming', content['cards.dataset-02.03.items.04'] ?? 'Looker Business Intelligence'], accent: "text-pink-400", hover: "hover:border-pink-500/50" },
              { title: content['cards.dataset-02.04.title'] ?? 'Global Networking', icon: Globe2, items: [content['cards.dataset-02.04.items.01'] ?? 'Enterprise VPC & Cloud NAT', content['cards.dataset-02.04.items.02'] ?? 'Cloud Load Balancing', content['cards.dataset-02.04.items.03'] ?? 'Cloud CDN Global Edge', content['cards.dataset-02.04.items.04'] ?? 'Cloud Armor WAF Protection'], accent: "text-cyan-400", hover: "hover:border-cyan-500/50" },
              { title: content['cards.dataset-02.05.title'] ?? 'Security & IAM', icon: Lock, items: [content['cards.dataset-02.05.items.01'] ?? 'Context-Aware Access & IAM', content['cards.dataset-02.05.items.02'] ?? 'Key Management (KMS)', content['cards.dataset-02.05.items.03'] ?? 'Security Command Center', content['cards.dataset-02.05.items.04'] ?? 'Chronicle SIEM & SOAR'], accent: "text-purple-400", hover: "hover:border-purple-500/50" },
              { title: content['cards.dataset-02.06.title'] ?? 'DevOps & SRE', icon: Cpu, items: [content['cards.dataset-02.06.items.01'] ?? 'Cloud Build & Artifact Registry', content['cards.dataset-02.06.items.02'] ?? 'Google Cloud Deploy', content['cards.dataset-02.06.items.03'] ?? 'Cloud Operations Suite', content['cards.dataset-02.06.items.04'] ?? 'Automated SRE Incident'], accent: "text-emerald-400", hover: "hover:border-emerald-500/50" }
            ].map((service, i) => (
              <div key={i} className={`bg-slate-950/70 rounded-xl p-3.5 border border-slate-800/80 space-y-2 ${service.hover} hover:bg-slate-900/90 transition-all group`}>
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${service.accent} group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-white">{service.title}</h3>
                </div>

                <ul className="space-y-1 pt-1">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <ChevronRight className={`w-3 h-3 ${service.accent} shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DYNAMIC TAB ARCHITECTURE BLUEPRINTS */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{content['architecture.span.text-013'] ?? 'Interactive Blueprints'}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">{content['architecture.h2.text-002'] ?? 'Ready-to-Use Architecture'}</h2>
            </div>

            {/* Dynamic Tab Selector */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {content['architecture.button.text-001'] ?? 'Analytics'}
              </button>
              <button
                onClick={() => setActiveTab('microservices')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'microservices'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {content['architecture.button.text-002'] ?? 'Microservices'}
              </button>
              <button
                onClick={() => setActiveTab('genai')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'genai'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {content['architecture.button.text-003'] ?? 'GenAI Agent'}
              </button>
            </div>
          </div>

          {/* Dynamic Tab Content Display */}
          <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 space-y-3 transition-all">
            {activeTab === 'analytics' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold rounded">
                  <Database className="w-3 h-3" /> {content['architecture.div.text-003'] ?? 'Modern Analytics Warehouse'}
                </div>
                <h3 className="font-bold text-base text-white">{content['architecture.h3.text-001'] ?? 'Real-Time Enterprise Analytics Engine'}</h3>
                <p className="text-xs text-slate-300">{content['architecture.p.text-005'] ?? 'Sentralisasi & analisis jutaan data real-time dengan BigQuery, Pub/Sub, Dataflow & Looker BI.'}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-blue-400 font-bold block">{content['architecture.span.text-014'] ?? '01. Ingestion'}</span>
                    {content['architecture.div.text-004'] ?? 'Pub/Sub & Dataflow Real-time Stream'}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-blue-400 font-bold block">{content['architecture.span.text-015'] ?? '02. Storage & SQL'}</span>
                    {content['architecture.div.text-005'] ?? 'BigQuery Petabyte Analytics'}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-blue-400 font-bold block">{content['architecture.span.text-016'] ?? '03. BI & Dashboards'}</span>
                    {content['architecture.div.text-006'] ?? 'Looker Enterprise Business Intelligence'}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'microservices' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold rounded">
                  <Layers className="w-3 h-3" /> {content['architecture.div.text-007'] ?? 'Microservices Mesh'}
                </div>
                <h3 className="font-bold text-base text-white">{content['architecture.h3.text-002'] ?? 'GKE Enterprise Container Platform'}</h3>
                <p className="text-xs text-slate-300">{content['architecture.p.text-006'] ?? 'Arsitektur kontainer berskala tinggi dengan visibilitas Service Mesh & zero-trust network.'}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-amber-400 font-bold block">{content['architecture.span.text-017'] ?? '01. CI/CD Pipeline'}</span>
                    {content['architecture.div.text-008'] ?? 'Cloud Build & GitHub Actions Sync'}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-amber-400 font-bold block">{content['architecture.span.text-018'] ?? '02. Mesh & Security'}</span>
                    {content['architecture.div.text-009'] ?? 'Anthos Service Mesh & mTLS Encryption'}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-amber-400 font-bold block">{content['architecture.span.text-019'] ?? '03. Deployment'}</span>
                    {content['architecture.div.text-010'] ?? 'Zero-Downtime Canary Rollout'}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'genai' && (
              <div className="space-y-2 animate-fadeIn">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-bold rounded">
                  <Brain className="w-3 h-3" /> {content['architecture.div.text-011'] ?? 'GenAI Solutions'}
                </div>
                <h3 className="font-bold text-base text-white">{content['architecture.h3.text-003'] ?? 'Enterprise RAG & AI Agent on Vertex AI'}</h3>
                <p className="text-xs text-slate-300">{content['architecture.p.text-007'] ?? 'Pengembangan AI Agent & sistem pencarian cerdas berbasis data internal secara privat dan aman.'}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-purple-400 font-bold block">{content['architecture.span.text-020'] ?? '01. Vector Database'}</span>
                    {content['architecture.div.text-012'] ?? 'Vertex Vector Search & Embeddings'}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-purple-400 font-bold block">{content['architecture.span.text-021'] ?? '02. Guardrails'}</span>
                    {content['architecture.div.text-013'] ?? 'Custom AI Prompt & Safety Filters'}
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-purple-400 font-bold block">{content['architecture.span.text-022'] ?? '03. Data Privacy'}</span>
                    {content['architecture.div.text-014'] ?? 'Enterprise Private Data Shield'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MIGRATION & FINOPS */}
        <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

            <div className="lg:col-span-7 space-y-3">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{content['architecture.span.text-023'] ?? 'Seamless Transition'}</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">{content['architecture.h2.text-003'] ?? 'Migrasi Tanpa Downtime & Risk'}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {[
                  { step: "01", title: content['cards.dataset-03.01.title'] ?? 'Discovery & TCO', desc: content['cards.dataset-03.01.desc'] ?? 'Pemetaan legacy & estimasi hemat.' },
                  { step: "02", title: content['cards.dataset-03.02.title'] ?? 'Landing Zone', desc: content['cards.dataset-03.02.desc'] ?? 'Setup IAM & struktur VPC awal.' },
                  { step: "03", title: content['cards.dataset-03.03.title'] ?? 'Pilot Workload', desc: content['cards.dataset-03.03.desc'] ?? 'Pengujian migrasi tanpa mengganggu.' },
                  { step: "04", title: content['cards.dataset-03.04.title'] ?? 'FinOps Optimization', desc: content['cards.dataset-03.04.desc'] ?? 'Monitoring & efisiensi berkala.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-xs shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[10px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-950 rounded-xl p-3.5 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-mono text-slate-400">{content['architecture.span.text-024'] ?? 'Migration Pipeline'}</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{content['architecture.span.text-025'] ?? 'Active Sync'}</span>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-300 font-medium">
                      <span>{content['architecture.span.text-026'] ?? 'Source Workload Mapped'}</span>
                      <span className="text-emerald-400 font-mono">{content['architecture.span.text-027'] ?? '100%'}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div className="h-full bg-blue-500 rounded-full w-full" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-300 font-medium">
                      <span>{content['architecture.span.text-028'] ?? 'Data Syncing'}</span>
                      <span className="text-amber-400 font-mono">{content['architecture.span.text-029'] ?? '88%'}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div className="h-full bg-amber-500 rounded-full w-[88%] animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 flex items-center gap-2">
                  <Cloud className="w-4 h-4 shrink-0 text-blue-400" />
                  <span>{content['architecture.span.text-030'] ?? 'Didukung Google Cloud Certified Architect profesional.'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 border border-blue-500/30 p-4 sm:p-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">{content['cta.h2.text-004'] ?? 'Siap Mentransformasi Cloud Anda?'}</h2>
              <p className="text-xs text-slate-300 mt-0.5">{content['cta.p.text-008'] ?? 'Konsultasikan arsitektur, migrasi, atau optimasi biaya Google Cloud hari ini.'}</p>
            </div>

            <Link
              href={content['cta.link.href-003'] ?? '/contact'}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
            >
              {content['cta.link.text-002'] ?? 'Konsultasi Gratis'}
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
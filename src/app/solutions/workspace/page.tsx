'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePageContent } from '@/lib/use-page-content';
import {
  ArrowRight,
  Mail,
  Video,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Users,
  Check,
  ChevronRight,
  Zap,
  Star,
  Activity,
  Globe,
  ArrowUpRight,
  Shield,
  Clock,
  Database
} from 'lucide-react';

export default function GoogleWorkspaceSolutionPage() {
  const { content, error } = usePageContent('solutions-workspace');
  const [userCount, setUserCount] = useState<number>(15);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activeTab, setActiveTab] = useState<'all' | 'email' | 'meet' | 'drive' | 'security'>('all');
  const [activePlan, setActivePlan] = useState<string>('standard');
  const getPrice = (value: string | undefined, fallback: number) => {
    const price = Number(value);
    return value?.trim() && Number.isFinite(price) && price >= 0 ? price : fallback;
  };

  // Harga perkiraan per user/bulan dalam ribuan IDR
  const plans = [
    {
      id: 'starter',
      name: content['plans.starter.name'] ?? 'Business Starter',
      tagline: content['plans.starter.tagline'] ?? 'Ideal untuk tim berkembang yang butuh email domain profesional.',
      popular: false,
      monthlyPrice: getPrice(content['plans.starter.monthlyprice'], 110),
      annualPrice: getPrice(content['plans.starter.annualprice'], 90),
      badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      features: [
        content['plans.starter.features.01'] ?? '30 GB Storage per user',
        content['plans.starter.features.02'] ?? 'Email Bisnis Kustom (@domain.com)',
        content['plans.starter.features.03'] ?? 'Video Conference hingga 100 Peserta',
        content['plans.starter.features.04'] ?? 'Standard Security & Admin Controls',
        content['plans.starter.features.05'] ?? 'Dukungan Teknis 24/7'
      ]
    },
    {
      id: 'standard',
      name: content['plans.standard.name'] ?? 'Business Standard',
      tagline: content['plans.standard.tagline'] ?? 'Pilihan paling populer dengan kapasitas lega & rekam rapat.',
      popular: true,
      monthlyPrice: getPrice(content['plans.standard.monthlyprice'], 220),
      annualPrice: getPrice(content['plans.standard.annualprice'], 180),
      badgeColor: 'border-amber-500/50 text-amber-300 bg-amber-500/20',
      features: [
        content['plans.standard.features.01'] ?? '2 TB Storage Pooled per user',
        content['plans.standard.features.02'] ?? 'Rekam Rapat Video ke Google Drive',
        content['plans.standard.features.03'] ?? 'Shared Drives untuk Kolaborasi Tim',
        content['plans.standard.features.04'] ?? 'Pencarian Canggih dengan Cloud Search',
        content['plans.standard.features.05'] ?? 'DLP & Keamanan Tingkat Menengah'
      ]
    },
    {
      id: 'plus',
      name: content['plans.plus.name'] ?? 'Business Plus',
      tagline: content['plans.plus.tagline'] ?? 'Fitur keamanan ekstra, eDiscovery, & kontrol endpoint lanjutan.',
      popular: false,
      monthlyPrice: getPrice(content['plans.plus.monthlyprice'], 330),
      annualPrice: getPrice(content['plans.plus.annualprice'], 270),
      badgeColor: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      features: [
        content['plans.plus.features.01'] ?? '5 TB Storage Pooled per user',
        content['plans.plus.features.02'] ?? 'Rapat Video hingga 500 Peserta + Absensi',
        content['plans.plus.features.03'] ?? 'Vault untuk eDiscovery & Retensi Data',
        content['plans.plus.features.04'] ?? 'Context-Aware Access Control',
        content['plans.plus.features.05'] ?? 'Advanced Endpoint Management'
      ]
    },
    {
      id: 'enterprise',
      name: content['plans.enterprise.name'] ?? 'Enterprise',
      tagline: content['plans.enterprise.tagline'] ?? 'Solusi skala besar tanpa batas kapasitas & proteksi S/MIME.',
      popular: false,
      monthlyPrice: getPrice(content['plans.enterprise.monthlyprice'], 450),
      annualPrice: getPrice(content['plans.enterprise.annualprice'], 380),
      badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      features: [
        content['plans.enterprise.features.01'] ?? 'Penyimpanan Fleksibel (Uncapped)',
        content['plans.enterprise.features.02'] ?? 'S/MIME Data Encryption',
        content['plans.enterprise.features.03'] ?? 'Integrasi AppSheet Core Level Perusahaan',
        content['plans.enterprise.features.04'] ?? 'Noise Cancellation Canggih saat Meet',
        content['plans.enterprise.features.05'] ?? 'Priority Premier Enterprise Support'
      ]
    }
  ];

  const appFeatures = [
    {
      category: 'email',
      name: content['appfeatures.0.name'] ?? 'Gmail for Business',
      desc: content['appfeatures.0.desc'] ?? 'Email domain profesional anti-spam dengan integrasi AI, smart reply, & keamanan tingkat lanjut.',
      badge: content['appfeatures.0.badge'] ?? 'Communication',
      bgGlow: 'from-red-500/20 via-rose-500/10 to-transparent',
      borderColor: 'group-hover:border-red-500/50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9">
          <path fill="#EA4335" d="M12 12.75l10-6.25V6.5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v.25l10 6.25z"/>
          <path fill="#4285F4" d="M22 8.75v8.5c0 1.1-.9 2-2 2h-3.5V11L12 14.5 7.5 11v8.25H4c-1.1 0-2-.9-2-2v-8.5c0-.6.3-1.1.8-1.4l7.2 4.5 7.2-4.5c.5.3.8.8.8 1.4z"/>
        </svg>
      )
    },
    {
      category: 'meet',
      name: content['appfeatures.1.name'] ?? 'Google Meet',
      desc: content['appfeatures.1.desc'] ?? 'Rapat video HD hingga ratusan peserta, rekam otomatis, pembatalan bising, & live transcription.',
      badge: content['appfeatures.1.badge'] ?? 'Video Conference',
      bgGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9">
          <path fill="#00832d" d="M15 12.5l5 3.75v-8.5L15 12.5z"/>
          <path fill="#0066da" d="M2 16.5V7.5C2 6.4 2.9 5.5 4 5.5h10c1.1 0 2 .9 2 2v2.5l5-3.75v12.5l-5-3.75V16.5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z"/>
        </svg>
      )
    },
    {
      category: 'drive',
      name: content['appfeatures.2.name'] ?? 'Google Drive',
      desc: content['appfeatures.2.desc'] ?? 'Penyimpanan cloud terpusat, kontrol akses bertingkat, & kemudahan berbagi antar divisi.',
      badge: content['appfeatures.2.badge'] ?? 'Cloud Storage',
      bgGlow: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9">
          <path fill="#0066da" d="M7.71 3.5L1.5 14.28h6.21l6.21-10.78H7.71z"/>
          <path fill="#00832d" d="M16.29 3.5H7.71L13.92 14.28h8.58L16.29 3.5z"/>
          <path fill="#fbbc04" d="M1.5 14.28L4.61 19.68h14.78l3.11-5.4H1.5z"/>
        </svg>
      )
    },
    {
      category: 'security',
      name: content['appfeatures.3.name'] ?? 'Docs, Sheets, Slides',
      desc: content['appfeatures.3.desc'] ?? 'Kolaborasi dokumen real-time tanpa resiko tumpang tindih data. Edit bersama secara transparan.',
      badge: content['appfeatures.3.badge'] ?? 'Productivity Suite',
      bgGlow: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/50',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9">
          <path fill="#0066da" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/>
          <path fill="#2684fc" d="M14 2v6h6L14 2z"/>
          <path fill="#fff" d="M8 12h8v2H8zm0 4h8v2H8zm0-8h4v2H8z"/>
        </svg>
      )
    }
  ];

  const filteredApps = activeTab === 'all' ? appFeatures : appFeatures.filter(app => app.category === activeTab);

  return (
    <main className="min-h-screen bg-[#060913] font-sans pt-4 sm:pt-6 pb-28 px-4 sm:px-6 lg:px-12 text-slate-100 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {error && (
        <p role="alert" className="relative z-20 mx-auto mb-3 max-w-7xl text-sm text-amber-300">
          {error}
        </p>
      )}

      {/* Background Neon Mesh Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/20 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-[800px] -left-40 w-[600px] h-[600px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute top-[1600px] -right-40 w-[600px] h-[600px] bg-indigo-500/10 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">

        {/* ================= 1. HERO BANNER ULTRA-MODERN ================= */}
        <div className="relative bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950/90 backdrop-blur-3xl rounded-[3rem] border border-slate-800/80 shadow-[0_25px_100px_rgba(0,0,0,0.8)] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden">

          {/* Top Glowing Gradient Rainbow Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-teal-400 to-amber-400" />

          {/* Left Side: Hero Content */}
          <div className="lg:col-span-7 space-y-8">

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-widest uppercase shadow-inner">
              <Sparkles className="w-4 h-4 animate-spin text-blue-400" />
              <span>{content['hero.span.text-001'] ?? 'Official Google Cloud Premier Partner'}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-white">
              {content['hero.h1.text-001'] ?? 'Google Workspace'} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                {content['hero.span.text-002'] ?? 'For Enterprise Scaling'}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              {content['hero.p.text-001'] ?? 'Tingkatkan produktivitas tim dengan email domain resmi, kolaborasi cloud tanpa hambatan, serta proteksi keamanan setingkat bank. Termasuk sertifikasi ISO 27001 dan dukungan tim teknis lokal.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={content['hero.link.href-001'] ?? '/contact'}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>{content['hero.span.text-003'] ?? 'Free Consultation Now'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={content['hero.link.href-002'] ?? '#plans'}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white px-7 py-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:bg-slate-800 transition-all cursor-pointer backdrop-blur-md"
              >
                <span>{content['hero.span.text-004'] ?? 'Lihat Simulasi Paket'}</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Metric Counters */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl">
              <div className="bg-slate-950/40 border border-slate-800/60 p-3.5 rounded-2xl">
                <p className="text-lg sm:text-2xl font-black text-white">{content['hero.p.text-002'] ?? '99.9%'}</p>
                <p className="text-[11px] text-slate-400 font-medium">{content['hero.p.text-003'] ?? 'Uptime Guarantee SLA'}</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/60 p-3.5 rounded-2xl">
                <p className="text-lg sm:text-2xl font-black text-cyan-400">{content['hero.p.text-004'] ?? '0%'}</p>
                <p className="text-[11px] text-slate-400 font-medium">{content['hero.p.text-005'] ?? 'Downtime Migration'}</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/60 p-3.5 rounded-2xl">
                <p className="text-lg sm:text-2xl font-black text-amber-400">{content['hero.p.text-006'] ?? '24/7'}</p>
                <p className="text-[11px] text-slate-400 font-medium">{content['hero.p.text-007'] ?? 'Local Tech Support'}</p>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Dynamic Showcase Window */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px]">

              {/* Outer Neon Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 rounded-[2.8rem] blur-2xl opacity-40 animate-pulse" />

              {/* Central Glass Card Showcase */}
              <div className="relative bg-slate-950/90 border border-slate-700/80 rounded-[2.5rem] p-7 shadow-2xl backdrop-blur-2xl space-y-6 overflow-hidden">

                {/* Header Widget */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.29 21.39 7.37 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.29 2.61 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white flex items-center gap-2">
                        {content['hero.h3.text-001'] ?? 'Google Workspace'}
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </h3>
                      <p className="text-[10px] text-slate-400">{content['hero.p.text-008'] ?? 'Cloud Enterprise Infrastructure'}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                    {content['hero.span.text-005'] ?? 'Verified'}
                  </span>
                </div>

                {/* Animated Interactive App Chips */}
                <div className="space-y-3">
                  {[
                    { title: content['cards.dataset-01.01.title'] ?? 'Email Domain Resmi', status: 'Active & Encrypted', icon: <Mail className="w-4 h-4 text-blue-400" /> },
                    { title: content['cards.dataset-01.02.title'] ?? 'Google Meet Enterprise', status: 'Up to 500 Participants', icon: <Video className="w-4 h-4 text-emerald-400" /> },
                    { title: content['cards.dataset-01.03.title'] ?? 'Unlimited Shared Drive', status: 'Vault & DLP Active', icon: <HardDrive className="w-4 h-4 text-amber-400" /> },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between hover:border-slate-700 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-slate-800 border border-slate-700">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-200">{item.title}</p>
                          <p className="text-[10px] text-slate-400">{item.status}</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                  ))}
                </div>

                {/* Security Footprint Badge */}
                <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-300 text-[11px] font-medium">{content['security.span.text-006'] ?? 'ISO 27001 & SOC 2/3 Compliant'}</span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400">{content['security.span.text-007'] ?? '100% Safe'}</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= 2. 4 PILAR UTAMA SOLUSI ================= */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
              {content['security.span.text-008'] ?? 'Pilar Solusi'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{content['security.h2.text-001'] ?? '4 Fondasi Kolaborasi Modern'}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: content['cards.dataset-02.01.title'] ?? 'Email Bisnis',
                desc: content['cards.dataset-02.01.desc'] ?? '@domain Anda dengan proteksi spam, phishing, dan malware otomatis.',
                icon: <Mail className="w-7 h-7 text-blue-400" />,
                bg: 'from-blue-600/20 to-indigo-600/5',
              },
              {
                title: content['cards.dataset-02.02.title'] ?? 'Meet & Chat',
                desc: content['cards.dataset-02.02.desc'] ?? 'Rapat video 1 klik, rekam otomatis, noise cancel, & breakout rooms.',
                icon: <Video className="w-7 h-7 text-emerald-400" />,
                bg: 'from-emerald-600/20 to-teal-600/5',
              },
              {
                title: content['cards.dataset-02.03.title'] ?? 'Drive & Shared Drive',
                desc: content['cards.dataset-02.03.desc'] ?? 'Penyimpanan terpusat aman, akses berbasis otorisasi, & audit trail lengkap.',
                icon: <HardDrive className="w-7 h-7 text-amber-400" />,
                bg: 'from-amber-600/20 to-yellow-600/5',
              },
              {
                title: content['cards.dataset-02.04.title'] ?? 'Keamanan & Admin',
                desc: content['cards.dataset-02.04.desc'] ?? '2-Step Verification, DLP, Context-Aware Access, Vault & eDiscovery.',
                icon: <ShieldCheck className="w-7 h-7 text-purple-400" />,
                bg: 'from-purple-600/20 to-pink-600/5',
              },
            ].map((pilar, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-b ${pilar.bg} bg-slate-900/60 rounded-[2.2rem] p-7 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 backdrop-blur-xl shadow-xl`}
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {pilar.icon}
                </div>
                <h3 className="font-extrabold text-lg text-white">{pilar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 3. EVERYTHING YOUR TEAM NEEDS (WITH TAB FILTER) ================= */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 sm:p-12 lg:p-16 space-y-10 backdrop-blur-2xl relative overflow-hidden">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
                {content['security.span.text-009'] ?? 'Aplikasi Ekosistem'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {content['security.h2.text-002'] ?? 'Everything your team needs'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {content['security.p.text-009'] ?? 'Pilih aplikasi untuk melihat kemampuan integrasi dan fitur spesifik.'}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
              {[
                { id: 'all', label: content['cards.dataset-03.all.label'] ?? 'Semua Aplikasi' },
                { id: 'email', label: content['cards.dataset-03.email.label'] ?? 'Gmail' },
                { id: 'meet', label: content['cards.dataset-03.meet.label'] ?? 'Google Meet' },
                { id: 'drive', label: content['cards.dataset-03.drive.label'] ?? 'Drive' },
                { id: 'security', label: content['cards.dataset-03.security.label'] ?? 'Docs Suite' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredApps.map((app, index) => (
              <div
                key={index}
                className={`group relative bg-slate-950/70 rounded-[2.2rem] p-7 border border-slate-800/80 ${app.borderColor} transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-5 overflow-hidden backdrop-blur-xl shadow-xl`}
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${app.bgGlow} rounded-full blur-2xl pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {app.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700">
                      {app.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{app.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{app.desc}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform relative z-10">
                  <span>{content['security.span.text-010'] ?? 'Included in Plan'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= 4. PLANS & DYNAMIC PRICE CALCULATOR ================= */}
        <div id="plans" className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 sm:p-12 lg:p-16 space-y-12 backdrop-blur-2xl relative overflow-hidden">

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              {content['pricing.span.text-011'] ?? 'Kalkulator & Paket Resmi'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {content['pricing.h2.text-003'] ?? 'Google Workspace Plans'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {content['pricing.p.text-010'] ?? 'Pilih paket yang sesuai dengan skala tim, kebutuhan penyimpanan, dan kebijakan privasi Anda.'}
            </p>

            {/* Billing Cycle Toggle */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>{content['pricing.span.text-012'] ?? 'Bulanan'}</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="w-14 h-8 bg-slate-800 border border-slate-700 rounded-full p-1 relative transition-colors cursor-pointer"
              >
                <div className={`w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-transform ${billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
              <span className={`text-xs font-bold flex items-center gap-2 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-500'}`}>
                {content['pricing.span.text-013'] ?? 'Tahunan'} <span className="text-[10px] bg-amber-500/20 border border-amber-500/30 text-amber-300 px-2.5 py-0.5 rounded-full font-black">{content['pricing.span.text-014'] ?? 'Hemat 18%'}</span>
              </span>
            </div>

            {/* Interactive User Slider */}
            <div className="pt-4 max-w-lg mx-auto bg-slate-950/80 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-inner">
              <div className="flex justify-between items-center text-xs font-extrabold">
                <span className="text-slate-300 flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" /> {content['pricing.span.text-015'] ?? 'Simulasi Jumlah User:'}</span>
                <span className="text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-lg text-sm">{userCount} {content['pricing.span.text-016'] ?? 'Lisensi'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={userCount}
                onChange={(e) => setUserCount(parseInt(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => {
              const unitPrice = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
              const estTotal = (unitPrice * userCount).toLocaleString('id-ID');

              return (
                <div
                  key={plan.id}
                  onClick={() => setActivePlan(plan.id)}
                  className={`relative rounded-[2.2rem] p-7 border transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer backdrop-blur-xl ${
                    plan.popular
                      ? 'bg-slate-900 border-amber-500/70 shadow-2xl shadow-amber-500/10 scale-[1.03]'
                      : activePlan === plan.id
                      ? 'bg-slate-900 border-blue-500 shadow-xl'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {content['pricing.span.text-017'] ?? 'Most Popular'}
                    </span>
                  )}

                  <div className="space-y-4">
                    <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                      {plan.name}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{plan.tagline}</p>

                    <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{content['pricing.p.text-011'] ?? 'Estimasi Biaya ('}{userCount} {content['pricing.p.text-012'] ?? 'User):'}</p>
                      <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                        {content['pricing.p.text-013'] ?? 'Rp'} {estTotal}{content['pricing.p.text-014'] ?? 'k'} <span className="text-[10px] font-normal text-slate-400">{content['pricing.span.text-018'] ?? '/bln'}</span>
                      </p>
                      <p className="text-[10px] text-slate-500 mt-1">{content['pricing.p.text-015'] ?? '@ Rp'} {unitPrice}{content['pricing.p.text-016'] ?? 'k / user / bulan'}</p>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300 pt-1">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?plan=${plan.id}&users=${userCount}`}
                    className={`w-full py-4 font-black text-xs rounded-2xl text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>{content['pricing.span.text-019'] ?? 'Request Official Quote'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= 5. MIGRATION & ADVANCED SECURITY ================= */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 sm:p-12 lg:p-16 space-y-12 backdrop-blur-2xl relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                {content['architecture.span.text-020'] ?? 'Smooth Cutover'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {content['architecture.h2.text-004'] ?? 'Zero Downtime Migration Service'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {content['architecture.p.text-017'] ?? 'Pindahkan seluruh data email, kalender, kontak, & file dokumen dari platform lama (Microsoft 365, IMAP, cPanel, dll) secara aman tanpa ada email yang hilang.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { step: '01', title: content['cards.dataset-04.01.title'] ?? 'Assessment', desc: content['cards.dataset-04.01.desc'] ?? 'Audit domain & rencana migrasi data' },
                  { step: '02', title: content['cards.dataset-04.02.title'] ?? 'Proof-of-Concept', desc: content['cards.dataset-04.02.desc'] ?? 'Uji coba pilot pada subset user' },
                  { step: '03', title: content['cards.dataset-04.03.title'] ?? 'Cutover Sync', desc: content['cards.dataset-04.03.desc'] ?? 'Sinkronisasi latar belakang & DNS' },
                  { step: '04', title: content['cards.dataset-04.04.title'] ?? 'Training & Support', desc: content['cards.dataset-04.04.desc'] ?? 'Pendampingan pengguna pasca-migrasi' },
                ].map((s) => (
                  <div key={s.step} className="bg-slate-950/70 border border-slate-800 p-3.5 rounded-2xl flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">{s.title}</h4>
                      <p className="text-[10px] text-slate-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[400px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-[2.5rem] p-8 shadow-2xl text-center space-y-5 border border-slate-800 relative overflow-hidden">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md">
                  <Database className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">{content['architecture.h3.text-002'] ?? 'Migration Ready Portal'}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {content['architecture.p.text-018'] ?? 'Sistem migrasi otomatis berbasis Google Cloud Migration Tools untuk keandalan 100%.'}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4" /> {content['architecture.span.text-021'] ?? 'Data Integrity Guarantee'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800">
            <div className="bg-slate-950/60 p-7 rounded-3xl border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
              <h4 className="font-extrabold text-sm text-blue-400">{content['architecture.h4.text-001'] ?? 'Identity & Access'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{content['architecture.p.text-019'] ?? 'SSO/OAuth, MFA, Context-Aware Access, serta kontrol granular per-OU/Group.'}</p>
            </div>

            <div className="bg-slate-950/60 p-7 rounded-3xl border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
              <h4 className="font-extrabold text-sm text-emerald-400">{content['architecture.h4.text-002'] ?? 'Data Protection'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{content['architecture.p.text-020'] ?? 'DLP untuk Gmail/Drive, pelabelan data sensitif, Vault audit, & eDiscovery.'}</p>
            </div>

            <div className="bg-slate-950/60 p-7 rounded-3xl border border-slate-800 space-y-2 hover:border-slate-700 transition-colors">
              <h4 className="font-extrabold text-sm text-purple-400">{content['architecture.h4.text-003'] ?? 'Operational Security'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{content['architecture.p.text-021'] ?? 'Alert Center real-time, ekspor log ke SIEM, & audit Endpoint Management.'}</p>
            </div>
          </div>

        </div>

        {/* ================= 6. FINAL CTA BANNER ================= */}
        <div className="relative w-full rounded-[3rem] overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between border border-slate-800">

          <div className="space-y-5 max-w-lg z-10 mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>{content['cta.span.text-022'] ?? 'Certified Partner Deployment'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {content['cta.h2.text-005'] ?? 'Siap Modernisasi'} <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                {content['cta.span.text-023'] ?? 'Cara Kerja Tim Anda?'}
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {content['cta.p.text-022'] ?? 'Konsultasikan struktur lisensi, perencanaan migrasi, dan pelatihan pengguna dengan konsultan ahli kami secara gratis.'}
            </p>

            <div className="pt-2">
              <Link
                href={content['cta.link.href-003'] ?? '/contact'}
                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all hover:scale-105 cursor-pointer"
              >
                {content['cta.link.text-001'] ?? 'Hubungi Konsultan Sekarang'}
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[380px] h-[220px] sm:h-[250px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt={content['cta.img.alt-001'] ?? 'Google Workspace Partner Representative'}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white flex items-center justify-between">
                <span>{content['cta.span.text-024'] ?? 'Tim Konsultan Resmi'}</span>
                <span className="text-amber-400 font-black">{content['cta.span.text-025'] ?? '★ 4.9/5 SLA Rating'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
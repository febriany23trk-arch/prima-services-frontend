'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePageContent } from '@/lib/use-page-content';
import {
  ShieldCheck,
  FileCheck2,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  ChevronRight,
  Search,
  FileText,
  UserCheck,
  Sliders,
  Check,
  Clock,
  CheckSquare,
  Zap,
  Globe,
  Users,
  BarChart3
} from 'lucide-react';

export default function IsoCompliancePage() {
  const { content, error } = usePageContent('solutions-iso');
  const [language] = useState<'id' | 'en'>('id');
  const [selectedStandard, setSelectedStandard] = useState<'27001' | '20000' | '22301' | '27701'>('27001');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [companySize, setCompanySize] = useState<number>(50);

  // Realtime Audit Simulation Logs
  const [logs, setLogs] = useState<string[]>([
    content['live-logs.initial.01'] ?? '[ISMS] ISO 27001 Annex A.5 Security Policies verified',
    content['live-logs.initial.02'] ?? '[COMPLIANCE] Risk Register updated (0 High Risks)',
    content['live-logs.initial.03'] ?? '[EVIDENCE] Access Control Logs & MFA Enforcement synced',
  ]);

  useEffect(() => {
    const pool = [
      content['pool.01'] ?? '[ITSMS] ISO 20000 Incident Management OLA verified',
      content['pool.02'] ?? '[BCMS] ISO 22301 Disaster Recovery Simulation Passed',
      content['pool.03'] ?? '[PRIVACY] ISO 27701 Data Processor Agreement Auto-Audited',
      content['pool.04'] ?? '[AUDIT] External Stage 2 Audit Readiness: 99.4%',
      content['pool.05'] ?? '[SECURITY] Zero Major Non-Conformity Detected',
      content['pool.06'] ?? '[EVIDENCE] Continuous Vulnerability Assessment Logged'
    ];

    const interval = setInterval(() => {
      const randomLog = pool[Math.floor(Math.random() * pool.length)];
      setLogs((prev) => [randomLog, ...prev.slice(0, 2)]);
    }, 3200);

    return () => clearInterval(interval);
  }, [content]);

  const initialLogContent = new Map<string, string>([
    ['[ISMS] ISO 27001 Annex A.5 Security Policies verified', content['live-logs.initial.01'] ?? '[ISMS] ISO 27001 Annex A.5 Security Policies verified'],
    ['[COMPLIANCE] Risk Register updated (0 High Risks)', content['live-logs.initial.02'] ?? '[COMPLIANCE] Risk Register updated (0 High Risks)'],
    ['[EVIDENCE] Access Control Logs & MFA Enforcement synced', content['live-logs.initial.03'] ?? '[EVIDENCE] Access Control Logs & MFA Enforcement synced'],
  ]);
  const displayedLogs = logs.map((log) => initialLogContent.get(log) ?? log);

  const standardsData = {
    '27001': {
      code: content['standardsdata.27001.code'] ?? 'ISO/IEC 27001:2022',
      name: content['standardsdata.27001.name'] ?? 'Information Security Management System (ISMS)',
      controls: content['standardsdata.27001.controls'] ?? '93 Control Clauses',
      timeframe: companySize > 200 ? content['standardsdata.27001.timeframe.id'] ?? '4 - 6 Bulan' : companySize > 50 ? content['standardsdata.27001.timeframe.en.id'] ?? '3 - 4 Bulan' : content['standardsdata.27001.timeframe.en.en'] ?? '2 - 3 Bulan',
      focus: content['standardsdata.27001.focus'] ?? 'Kerahasiaan, Integritas, & Ketersediaan Data Aset Informasi',
      badge: content['standardsdata.27001.badge'] ?? 'SMKI / ISMS',
      highlights: [content['standardsdata.27001.highlights.01'] ?? 'Annex A Security Controls', content['standardsdata.27001.highlights.02'] ?? 'Risk Assessment Framework', content['standardsdata.27001.highlights.03'] ?? 'SoA (Statement of Applicability)', content['standardsdata.27001.highlights.04'] ?? 'MFA & Access Management']
    },
    '20000': {
      code: content['standardsdata.20000.code'] ?? 'ISO/IEC 20000-1:2018',
      name: content['standardsdata.20000.name'] ?? 'IT Service Management System (ITSMS)',
      controls: content['standardsdata.20000.controls'] ?? 'Service Lifecycle Clauses',
      timeframe: companySize > 200 ? content['standardsdata.20000.timeframe.id'] ?? '3 - 5 Bulan' : companySize > 50 ? content['standardsdata.20000.timeframe.en.id'] ?? '2 - 4 Bulan' : content['standardsdata.20000.timeframe.en.en'] ?? '2 - 3 Bulan',
      focus: content['standardsdata.20000.focus'] ?? 'Kualitas, SLA, & Efisiensi Layanan Teknologi Informasi',
      badge: content['standardsdata.20000.badge'] ?? 'ITSMS',
      highlights: [content['standardsdata.20000.highlights.01'] ?? 'SLA & OLA Monitoring', content['standardsdata.20000.highlights.02'] ?? 'Incident & Change Management', content['standardsdata.20000.highlights.03'] ?? 'Capacity Planning', content['standardsdata.20000.highlights.04'] ?? 'Service Desk Best Practice']
    },
    '22301': {
      code: content['standardsdata.22301.code'] ?? 'ISO 22301:2019',
      name: content['standardsdata.22301.name'] ?? 'Business Continuity Management System (BCMS)',
      controls: content['standardsdata.22301.controls'] ?? 'Business Impact Analysis',
      timeframe: companySize > 200 ? content['standardsdata.22301.timeframe.id'] ?? '4 - 5 Bulan' : companySize > 50 ? content['standardsdata.22301.timeframe.en.id'] ?? '3 - 4 Bulan' : content['standardsdata.22301.timeframe.en.en'] ?? '2 - 3 Bulan',
      focus: content['standardsdata.22301.focus'] ?? 'Ketahanan Operasional Bisnis & Pemulihan Bencana (DRP)',
      badge: content['standardsdata.22301.badge'] ?? 'BCMS',
      highlights: [content['standardsdata.22301.highlights.01'] ?? 'Business Impact Analysis (BIA)', content['standardsdata.22301.highlights.02'] ?? 'Disaster Recovery Plan (DRP)', content['standardsdata.22301.highlights.03'] ?? 'Crisis Communication Protocol', content['standardsdata.22301.highlights.04'] ?? 'RTO & RPO Benchmarking']
    },
    '27701': {
      code: content['standardsdata.27701.code'] ?? 'ISO/IEC 27701:2019',
      name: content['standardsdata.27701.name'] ?? 'Privacy Information Management System (PIMS)',
      controls: content['standardsdata.27701.controls'] ?? 'GDPR & UU PDP Alignment',
      timeframe: companySize > 200 ? content['standardsdata.27701.timeframe.id'] ?? '3 - 4 Bulan' : companySize > 50 ? content['standardsdata.27701.timeframe.en.id'] ?? '2 - 3 Bulan' : content['standardsdata.27701.timeframe.en.en'] ?? '1 - 2 Bulan',
      focus: content['standardsdata.27701.focus'] ?? 'Perlindungan Data Pribadi (PDP) & Tata Kelola Privasi',
      badge: content['standardsdata.27701.badge'] ?? 'PIMS / PDP',
      highlights: [content['standardsdata.27701.highlights.01'] ?? 'Personal Data Processing (PII)', content['standardsdata.27701.highlights.02'] ?? 'Data Protection Impact Assessment (DPIA)', content['standardsdata.27701.highlights.03'] ?? 'Data Subject Rights Management', content['standardsdata.27701.highlights.04'] ?? 'Cross-Border Data Transfer']
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] font-sans pt-10 pb-28 px-3 sm:px-6 text-slate-100 relative overflow-hidden selection:bg-emerald-500 selection:text-white">
      {error && (
        <p role="alert" className="relative z-20 mx-auto mb-3 max-w-7xl text-sm text-amber-300">
          {error}
        </p>
      )}

      {/* Background Glowing Mesh Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-tr from-emerald-600/25 via-teal-500/15 to-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-[35%] -left-48 w-[650px] h-[650px] bg-emerald-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] -right-48 w-[750px] h-[750px] bg-blue-600/10 blur-[190px] pointer-events-none rounded-full" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* HERO SECTION */}
        <div className="relative bg-slate-900/40 backdrop-blur-3xl rounded-3xl border border-slate-800/90 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-teal-400 via-cyan-400 to-blue-600 animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-black tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>
                  {content['hero.span.text-001'] ?? 'ISO 27001 • ISO 20000 • ISO 22301 • ISO 27701'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                {language === 'id' ? content['hero.h1.text-001'] ?? 'Layanan Kepatuhan &' : content['hero.h1.text-002'] ?? 'Compliance &'}{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {language === 'id' ? content['hero.span.text-002'] ?? 'Sertifikasi ISO' : content['hero.span.text-003'] ?? 'ISO Certification'}
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                {language === 'id'
                  ? content['hero.p.text-001'] ?? 'Dampingi organisasi Anda meraih dan mempertahankan standar internasional keamanan informasi, manajemen layanan IT, dan kelangsungan bisnis dengan garansi kelulusan audit 100%.'
                  : content['hero.p.text-002'] ?? 'Guide your organization to achieve and maintain international information security, IT service management, and business continuity standards with guaranteed 100% audit pass rate.'}
              </p>

              <div className="pt-1">
                <Link
                  href={content['hero.link.href-001'] ?? '/contact'}
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm px-8 py-4 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{language === 'id' ? content['hero.span.text-004'] ?? 'Konsultasi Sekarang' : content['hero.span.text-005'] ?? 'Consult Now'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {content['hero.span.text-006'] ?? '100% Audit Pass Rate'}
                </span>
                <span className="flex items-center gap-1.5 text-teal-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> {content['hero.span.text-007'] ?? 'Full Documentation Support'}
                </span>
                <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {content['hero.span.text-008'] ?? 'IRCA Lead Auditors'}
                </span>
              </div>
            </div>

            {/* Right Interactive Visual Console */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-950/95 rounded-2xl border border-slate-800/90 p-4 shadow-2xl space-y-3.5 relative overflow-hidden backdrop-blur-xl">

                {/* Console Bar Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    <Terminal className="w-3 h-3 text-emerald-400" /> {content['hero.span.text-009'] ?? 'ISO_COMPLIANCE_HUB_v4.0'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {content['hero.span.text-010'] ?? 'AUDIT READY'}
                  </span>
                </div>

                {/* Live Audit Metrics Widget */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-4 h-4" /> {content['hero.span.text-011'] ?? 'ISO 27001 ISMS Readiness'}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400">{content['hero.span.text-012'] ?? '99.4% Compliant'}</span>
                  </div>

                  {/* Dynamic Progress Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden p-0.5 border border-slate-700/50">
                    <div className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-1.5 rounded-full w-[99.4%]" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-300 pt-1">
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 space-y-0.5">
                      <span className="text-slate-500 block">{content['hero.span.text-013'] ?? 'Annex A Controls'}</span>
                      <span className="text-emerald-400 font-bold">{content['hero.span.text-014'] ?? '93 / 93 Verified'}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 space-y-0.5">
                      <span className="text-slate-500 block">{content['hero.span.text-015'] ?? 'Major Non-Conformity'}</span>
                      <span className="text-cyan-400 font-bold">{content['hero.span.text-016'] ?? '0 Non-Conformity'}</span>
                    </div>
                  </div>
                </div>

                {/* Live Audit Trail Logs */}
                <div className="bg-slate-900 rounded-xl p-3 border border-slate-800/80 font-mono text-[10px] space-y-1.5">
                  <div className="text-slate-500 flex items-center justify-between text-[9px] border-b border-slate-800 pb-1">
                    <span>{content['hero.span.text-017'] ?? 'REALTIME AUDIT FEED'}</span>
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  </div>
                  {displayedLogs.map((log, index) => (
                    <div key={index} className="text-slate-300 truncate flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">{content['hero.span.text-018'] ?? '>'}</span>
                      <span className="text-slate-200">{log}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* INTERACTIVE ESTIMATOR & ISO CALCULATOR */}
        <div className="bg-slate-900/40 backdrop-blur-2xl rounded-3xl border border-slate-800 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" />
              {content['hero.span.text-019'] ?? 'SIMULASI TINGKAT KERUMITAN & ESTIMASI WAKTU'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {content['hero.h2.text-001'] ?? 'Kalkulator Estimasi Implementasi ISO'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {content['hero.p.text-003'] ?? 'Geser jumlah personel/skala organisasi untuk melihat perkiraan durasi pendampingan hingga sertifikat terbit secara real-time.'}
            </p>

            <div className="space-y-3 pt-3">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" /> {content['hero.span.text-020'] ?? 'Jumlah Karyawan / Skala Organisasi:'}
                </span>
                <span className="text-emerald-400 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-500/30">
                  {companySize} {content['hero.span.text-021'] ?? 'Karyawan'}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={companySize}
                onChange={(e) => setCompanySize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>{content['hero.span.text-022'] ?? '< 20 (Startup)'}</span>
                <span>{content['hero.span.text-023'] ?? '100 (SME)'}</span>
                <span>{content['hero.span.text-024'] ?? '500+ (Enterprise)'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2 text-left">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">{content['hero.span.text-025'] ?? 'Estimasi Durasi Project'}</span>
              <div className="text-2xl font-black text-emerald-400 font-mono">
                {standardsData[selectedStandard].timeframe}
              </div>
              <p className="text-[11px] text-slate-400">{content['hero.p.text-004'] ?? 'Terhitung dari Gap Analysis hingga Stage 2 Audit Eksternal.'}</p>
            </div>

            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-2 text-left">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">{content['hero.span.text-026'] ?? 'Jaminan Kelulusan'}</span>
              <div className="text-2xl font-black text-cyan-400 font-mono">
                {content['hero.div.text-001'] ?? '100% Pass Rate'}
              </div>
              <p className="text-[11px] text-slate-400">{content['hero.p.text-005'] ?? 'Garansi pendampingan ulang tanpa biaya tambahan jika ada insiden.'}</p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE ISO STANDARDS EXPLORER */}
        <div className="space-y-6">
          <div className="text-center space-y-1.5">
            <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              {content['hero.span.text-027'] ?? 'KERANGKA KERJA UTAMA'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              {content['hero.h2.text-002'] ?? 'Cakupan Standar Sertifikasi ISO'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {content['hero.p.text-006'] ?? 'Pilih standar ISO di bawah untuk mempelajari klausul utama, fokus kontrol, serta hasil deliverables project.'}
            </p>
          </div>

          {/* Standard Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-slate-900/80 rounded-2xl border border-slate-800">
            {[
              { id: '27001', label: content['cards.dataset-01.27001.label'] ?? 'ISO 27001', sub: 'Keamanan Informasi' },
              { id: '20000', label: content['cards.dataset-01.20000.label'] ?? 'ISO 20000', sub: 'Layanan IT' },
              { id: '22301', label: content['cards.dataset-01.22301.label'] ?? 'ISO 22301', sub: 'Kelangsungan Usaha' },
              { id: '27701', label: content['cards.dataset-01.27701.label'] ?? 'ISO 27701', sub: 'Privasi Data / PDP' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStandard(tab.id as typeof selectedStandard)}
                className={`py-3 px-4 rounded-xl text-center transition-all cursor-pointer ${
                  selectedStandard === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold shadow-lg shadow-emerald-600/20'
                    : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div className="text-xs font-black">{tab.label}</div>
                <div className="text-[10px] opacity-80 font-normal">{tab.sub}</div>
              </button>
            ))}
          </div>

          {/* Detailed Selected Standard Card */}
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                  {standardsData[selectedStandard].code}
                </span>
                <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {content['hero.span.text-028'] ?? 'Estimasi:'} {standardsData[selectedStandard].timeframe}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white">
                {standardsData[selectedStandard].name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-emerald-400">{content['hero.strong.text-001'] ?? 'Fokus Utama:'}</strong> {standardsData[selectedStandard].focus}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {standardsData[selectedStandard].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                    <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 space-y-4 text-left">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" /> {content['hero.h4.text-001'] ?? 'Target Output & Certification'}
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400 block text-[10px]">{content['hero.span.text-029'] ?? 'Cakupan Kontrol'}</span>
                  <span className="text-white font-bold">{standardsData[selectedStandard].controls}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400 block text-[10px]">{content['hero.span.text-030'] ?? 'Hasil Konsultasi'}</span>
                  <span className="text-emerald-400 font-bold">{content['hero.span.text-031'] ?? 'Dokumentasi Lengkap + Sertifikat Resmi'}</span>
                </div>
              </div>

              <Link
                href={content['hero.link.href-002'] ?? '/contact'}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs py-3 rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                <span>{content['hero.span.text-032'] ?? 'Minta Proposal ISO'}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* TAHAPAN KONSULTASI (INTERACTIVE ROADMAP) */}
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800/80 pb-5 text-left">
            <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              {content['hero.span.text-033'] ?? 'METODOLOGI TERSTRUKTUR'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">
              {content['hero.h2.text-003'] ?? 'Tahapan Konsultasi & Sertifikasi'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {content['hero.p.text-007'] ?? 'Pendekatan 4 langkah terukur hingga organisasi Anda meraih sertifikasi resmi.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: 1,
                title: content['cards.dataset-02.01.title'] ?? 'Gap Analysis',
                icon: Search,
                desc: content['cards.dataset-02.01.desc'] ?? 'Evaluasi komprehensif kondisi sistem, kebijakan, & infrastruktur eksisting terhadap klausa ISO.',
                deliverable: 'Dokumen Gap Analysis & Implementation Roadmap',
              },
              {
                step: 2,
                title: content['cards.dataset-02.02.title'] ?? 'Dokumentasi',
                icon: FileText,
                desc: content['cards.dataset-02.02.desc'] ?? 'Penyusunan kebijakan, SOP, pedoman kerja, Risk Assessment, & Statement of Applicability (SoA).',
                deliverable: 'Dokumen Kebijakan & Prosedur Lengkap',
              },
              {
                step: 3,
                title: content['cards.dataset-02.03.title'] ?? 'Implementasi & Audit Internal',
                icon: Sliders,
                desc: content['cards.dataset-02.03.desc'] ?? 'Penerapan kontrol teknis, awareness training karyawan, & eksekusi audit internal awal.',
                deliverable: 'Laporan Audit Internal & Management Review',
              },
              {
                step: 4,
                title: content['cards.dataset-02.04.title'] ?? 'Audit Sertifikasi Eksternal',
                icon: UserCheck,
                desc: content['cards.dataset-02.04.desc'] ?? 'Pendampingan penuh tim konsultan saat Audit Stage 1 & Stage 2 oleh Badan Sertifikasi Resmi.',
                deliverable: 'Sertifikat ISO Resmi Berakreditasi KAN / UKAS',
              },
            ].map((item) => (
              <div
                key={item.step}
                onMouseEnter={() => setActiveStep(item.step)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  activeStep === item.step
                    ? 'bg-slate-900 border-emerald-500/80 shadow-xl shadow-emerald-500/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {content['hero.span.text-034'] ?? 'STEP 0'}{item.step}
                    </span>
                    <item.icon className={`w-5 h-5 ${activeStep === item.step ? 'text-emerald-400' : 'text-slate-500'}`} />
                  </div>
                  <h3 className="font-extrabold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-left">
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">{content['hero.span.text-035'] ?? 'Main Deliverable'}</span>
                  <span className="text-[11px] font-bold text-emerald-400">{item.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFIT & ACCREDITATION VALUE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Key Deliverables */}
          <div className="lg:col-span-7 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-4 text-left">
            <div>
              <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                {content['hero.span.text-036'] ?? 'NILAI TAMBAH'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {content['hero.h2.text-004'] ?? 'Mengapa Memilih Layanan Kami?'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  title: content['cards.dataset-03.01.title'] ?? 'Jaminan Kelulusan 100%',
                  desc: content['cards.dataset-03.01.desc'] ?? 'Pendampingan berlanjut tanpa biaya tambahan hingga sertifikat diterbitkan resmi.',
                },
                {
                  title: content['cards.dataset-03.02.title'] ?? 'Tim IRCA Lead Auditor',
                  desc: content['cards.dataset-03.02.desc'] ?? 'Konsultan bersertifikasi internasional dengan pengalaman audit di berbagai industri enterprise.',
                },
                {
                  title: content['cards.dataset-03.03.title'] ?? 'Dokumentasi Praktis & Efisien',
                  desc: content['cards.dataset-03.03.desc'] ?? 'Penyusunan SOP disesuaikan dengan alur bisnis eksisting tanpa membebani operasional.',
                },
                {
                  title: content['cards.dataset-03.04.title'] ?? 'Dukungan Tools & Templates',
                  desc: content['cards.dataset-03.04.desc'] ?? 'Akses ke pustaka template kebijakan ISO & alat pengumpul bukti audit digital.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 pl-5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Badges / Accreditation Info */}
          <div className="lg:col-span-5 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-4 text-left">
            <div>
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                {content['hero.span.text-037'] ?? 'AKREDITASI GLOBAL'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {content['hero.h2.text-005'] ?? 'Mitra Badan Sertifikasi'}
              </h2>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {content['hero.p.text-008'] ?? 'Kami memfasilitasi pendampingan audit dengan Badan Sertifikasi Internasional terkemuka yang terakreditasi KAN, UKAS, JAS-ANZ, dan ANAB untuk pengakuan global.'}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">{content['hero.span.text-038'] ?? 'KAN (Komite Akreditasi Nasional)'}</span>
                <span className="text-emerald-400 font-bold">{content['hero.span.text-039'] ?? '✓ Terakreditasi'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span>{content['hero.span.text-040'] ?? 'UKAS (United Kingdom Accreditation)'}</span>
                <span className="text-emerald-400 font-bold">{content['hero.span.text-041'] ?? '✓ Terakreditasi'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span>{content['hero.span.text-042'] ?? 'ANAB & JAS-ANZ Accredited'}</span>
                <span className="text-emerald-400 font-bold">{content['hero.span.text-043'] ?? '✓ Terakreditasi'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* HIGH-IMPACT CALL TO ACTION */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border border-emerald-500/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {content['cta.h2.text-006'] ?? 'Siap Meraih Sertifikasi ISO Organisasi Anda?'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {content['cta.p.text-009'] ?? 'Jadwalkan sesi konsultasi gratis dan Gap Analysis awal bersama tim IRCA Lead Auditor kami hari ini.'}
              </p>
            </div>

            <Link
              href={content['cta.link.href-003'] ?? '/contact'}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-400/25 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span>{content['cta.span.text-044'] ?? 'Jadwalkan Konsultasi Gratis'}</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
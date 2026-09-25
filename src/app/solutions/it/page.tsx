'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ITManagedServicesPage() {
  // Menggunakan state lokal sebagai pengganti context
  const [language] = useState<'id' | 'en'>('id');

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans pt-28 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HERO SECTION */}
        <div className="bg-[#f8fafc] rounded-[36px] border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              {language === 'id' ? 'IT SERVICE DESK • MANAJEMEN ASET • KEAMANAN ENDPOINT' : 'IT SERVICE DESK • ASSET MANAGEMENT • ENDPOINT SECURITY'}
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-black text-[#0c1f3d] tracking-tight leading-[1.12]">
              {language === 'id' ? 'Manajemen & Dukungan IT' : 'IT Management & Support'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-slate-800">
                {language === 'id' ? 'untuk Tim Modern' : 'for Modern Teams'}
              </span>
            </h1>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              {language === 'id' 
                ? 'Kelola layanan IT dari ujung ke ujung: tiket, aset, patching, dan keamanan endpoint dengan otomatisasi serta SLA yang jelas.'
                : 'Manage end-to-end IT services: tickets, assets, patching, and endpoint security—with automation and clear SLAs.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#0c1f3d] hover:bg-[#122e54] text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {language === 'id' ? 'Diskusikan Kebutuhan' : 'Discuss Needs'}
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl border border-slate-300 transition-all cursor-pointer shadow-xs"
              >
                {language === 'id' ? 'Unduh Proposal Solusi' : 'Download Solution Deck'}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">✓ {language === 'id' ? 'SLA & KPI Transparan' : 'Transparent SLAs & KPIs'}</span>
              <span className="flex items-center gap-1.5">✓ {language === 'id' ? 'Otomatisasi & Alur Kerja' : 'Automation & Workflow'}</span>
              <span className="flex items-center gap-1.5">✓ {language === 'id' ? 'Keamanan Bawaan' : 'Security by default'}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="IT Managed Services Operations Center"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* 4 PILAR UTAMA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-slate-50 text-slate-800 rounded-3xl p-7 shadow-md border border-slate-200/80 flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-110 transition-transform">🎫</div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">
              {language === 'id' ? 'Penyelesaian Tiket Cepat' : 'Faster Ticket Resolution'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {language === 'id' ? 'Routing cerdas, templat respons, dan SLA yang jelas.' : 'Smart routing, response templates, and clear SLAs.'}
            </p>
          </div>

          <div className="group bg-slate-50 text-slate-800 rounded-3xl p-7 shadow-md border border-slate-200/80 flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-110 transition-transform">💻</div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">
              {language === 'id' ? 'Visibilitas Aset' : 'Visibility of Assets'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {language === 'id' ? 'Inventaris waktu nyata untuk perangkat, lisensi, & software.' : 'Real-time inventory for devices, licenses, & software.'}
            </p>
          </div>

          <div className="group bg-slate-50 text-slate-800 rounded-3xl p-7 shadow-md border border-slate-200/80 flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-110 transition-transform">🛡️</div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">
              {language === 'id' ? 'Aman Sejak Awal' : 'Secure by Default'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {language === 'id' ? 'Manajemen patch, hardening, EDR/AV terintegrasi.' : 'Patch mgmt, hardening, integrated EDR/AV.'}
            </p>
          </div>

          <div className="group bg-slate-50 text-slate-800 rounded-3xl p-7 shadow-md border border-slate-200/80 flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shadow-xs group-hover:scale-110 transition-transform">📊</div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">
              {language === 'id' ? 'Wawasan Operasional' : 'Operational Insight'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {language === 'id' ? 'Dasbor KPI, tren insiden, dan jejak audit.' : 'KPI dashboard, incident trends, and audit trail.'}
            </p>
          </div>
        </div>

        {/* MAIN MODULE SECTION */}
        <div className="space-y-8 bg-[#f8fafc] text-slate-800 rounded-[36px] p-8 sm:p-12 shadow-xl border border-slate-200/90">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c1f3d] tracking-tight mb-2">
              {language === 'id' ? 'Modul Utama' : 'Main Module'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'id' ? 'Paket terpadu untuk mengelola layanan IT dan aset perusahaan.' : 'Unified package for managing IT services and corporate assets.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-blue-400 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">🛠️</div>
              <h3 className="font-extrabold text-base text-[#0c1f3d]">ITSM / Service Desk</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>{language === 'id' ? '• Insiden, Permintaan, Perubahan, Masalah' : '• Incident, Request, Change, Problem'}</li>
                <li>{language === 'id' ? '• Basis pengetahuan & portal mandiri' : '• Knowledge base & self-service portal'}</li>
                <li>{language === 'id' ? '• Aturan SLA/OLA, persetujuan & eskalasi' : '• SLA/OLA, approval & escalation rules'}</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-amber-400 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">📦</div>
              <h3 className="font-extrabold text-base text-[#0c1f3d]">
                {language === 'id' ? 'Aset & Inventaris IT' : 'IT Asset & Inventory'}
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>{language === 'id' ? '• Penemuan otomatis, CMDB, pengukuran software' : '• Auto-discovery, CMDB, software metering'}</li>
                <li>{language === 'id' ? '• Kepatuhan lisensi & manajemen kontrak' : '• License compliance & contract mgmt'}</li>
                <li>{language === 'id' ? '• Siklus hidup aset (pengadaan hingga pensiun)' : '• Asset lifecycle (procure-to-retire)'}</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-emerald-400 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">🖥️</div>
              <h3 className="font-extrabold text-base text-[#0c1f3d]">
                {language === 'id' ? 'Manajemen & Keamanan Endpoint' : 'Endpoint Management & Security'}
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• MDM/MAM untuk Windows/macOS/Linux/iOS/Android</li>
                <li>{language === 'id' ? '• Patching, kebijakan, remote control' : '• Patching, policy, remote control'}</li>
                <li>{language === 'id' ? '• Antivirus/EDR & enkripsi disk' : '• Antivirus/EDR & disk encryption'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IT OPERATIONS AUTOMATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#f8fafc] text-slate-800 rounded-[36px] p-8 sm:p-12 shadow-xl border border-slate-200/90">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c1f3d] tracking-tight">
              {language === 'id' ? 'Otomatisasi Operasi IT' : 'IT Operations Automation'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'id' 
                ? 'Kurangi pekerjaan manual dengan aturan, jadwal, dan integrasi berbasis kejadian.'
                : 'Reduce manual work with rules, schedules, and event-driven integrations.'}
            </p>
            <div className="space-y-3 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs"><span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">01</span> {language === 'id' ? 'Penetapan tiket otomatis berdasarkan kategori & beban tim' : 'Auto-assign tickets based on category & team load'}</div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs"><span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">02</span> {language === 'id' ? 'Otomatisasi orientasi/offboarding pengguna & perangkat' : 'Automate user & device onboarding/offboarding'}</div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs"><span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">03</span> {language === 'id' ? 'Penjadwalan patching & penerapan software' : 'Scheduled patching & software deployment'}</div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs"><span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md">04</span> {language === 'id' ? 'Webhook untuk peringatan dari monitoring/NMS' : 'Webhook for alerting from monitoring/NMS'}</div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
                alt="Automation AI Dashboard"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* INTEGRATION & ECOSYSTEM */}
        <div className="space-y-8 bg-[#f8fafc] text-slate-800 rounded-[36px] p-8 sm:p-12 shadow-xl border border-slate-200/90">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0c1f3d] tracking-tight">
            {language === 'id' ? 'Integrasi & Ekosistem' : 'Integration & Ecosystem'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <h3 className="font-extrabold text-sm text-[#0c1f3d]">
                {language === 'id' ? 'Direktori & Identitas' : 'Directory & Identity'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">AD/Azure AD/Okta/Google Workspace untuk SSO & provisioning.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <h3 className="font-extrabold text-sm text-[#0c1f3d]">
                {language === 'id' ? 'Peralatan & Kolaborasi' : 'Tooling & Collaboration'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'id' ? 'Integrasi ChatOps (Slack/Teams), email, telepon, dan alat proyek.' : 'Integrasi ChatOps (Slack/Teams), e-mail, telephony, dan project tool.'}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
              <h3 className="font-extrabold text-sm text-[#0c1f3d]">
                {language === 'id' ? 'Observabilitas & Keamanan' : 'Observability & Security'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">SIEM/SOAR, NMS, endpoint security, log export ke data lake.</p>
            </div>
          </div>
        </div>

        {/* REPORTING, SLA & COMPLIANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#f8fafc] text-slate-800 rounded-[36px] p-8 sm:p-12 shadow-xl border border-slate-200/90">
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
                alt="Reporting and Compliance Analytics"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c1f3d] tracking-tight">Reporting, SLA & Compliance</h2>
            <div className="space-y-3 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                <span>{language === 'id' ? 'Dasbor real-time untuk SLA, backlog, MTTR' : 'Real-time dashboard for SLA, backlog, MTTR'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                <span>{language === 'id' ? 'Templat laporan bulanan & jejak audit lengkap' : 'Monthly report template & complete audit trail'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                <span>{language === 'id' ? 'Umpan balik CSAT/NPS & perbaikan berkelanjutan' : 'CSAT/NPS feedback & continuous improvement'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE PACKAGES & ENGAGEMENT */}
        <div className="space-y-10 text-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0c1f3d] tracking-tight mb-2">
              {language === 'id' ? 'Paket Layanan & Kemitraan' : 'Service Packages & Engagement'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {language === 'id' ? 'Dari implementasi satu kali hingga layanan terkelola penuh.' : 'From one-off implementation to full managed service.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Implementation Pack */}
            <div className="bg-[#f8fafc] text-slate-800 rounded-3xl p-8 shadow-md border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-2xl transition">
              <div className="space-y-4">
                <h3 className="font-black text-xl text-[#0c1f3d]">Implementation Pack</h3>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'id' ? 'Pengaturan cepat + transfer pengetahuan' : 'Quick setup + knowledge transfer'}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Asesmen proses & desain alur kerja' : 'Process assessment & workflow design'}</li>
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Konfigurasi modul & integrasi dasar' : 'Module configuration & basic integration'}</li>
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Pelatihan admin & dokumentasi' : 'Admin training & documentation'}</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3.5 rounded-xl bg-[#0c1f3d] hover:bg-[#122e54] text-white font-extrabold text-xs text-center transition shadow-md">
                {language === 'id' ? 'Minta Penawaran' : 'Request a Quote'}
              </Link>
            </div>

            {/* Managed Service */}
            <div className="bg-[#f8fafc] text-slate-800 rounded-3xl p-8 shadow-md border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-2xl transition">
              <div className="space-y-4">
                <h3 className="font-black text-xl text-[#0c1f3d]">Managed Service</h3>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'id' ? 'Operasional harian oleh tim kami' : 'Daily operations by our team'}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Service desk L1–L3 sesuai SLA' : 'Service desk L1–L3 according to SLA'}</li>
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Patching, monitoring, penanganan insiden' : 'Patching, monitoring, incident response'}</li>
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Laporan bulanan & peningkatan berkelanjutan' : 'Monthly reporting & continuous improvement'}</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3.5 rounded-xl bg-[#0c1f3d] hover:bg-[#122e54] text-white font-extrabold text-xs text-center transition shadow-md">
                {language === 'id' ? 'Minta Penawaran' : 'Request a Quote'}
              </Link>
            </div>

            {/* Managed Service Plus */}
            <div className="bg-[#f8fafc] text-slate-800 rounded-3xl p-8 shadow-md border border-slate-200/90 flex flex-col justify-between space-y-6 hover:shadow-2xl transition">
              <div className="space-y-4">
                <h3 className="font-black text-xl text-[#0c1f3d]">Managed Service Plus</h3>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'id' ? 'Tambah keamanan & kepatuhan' : 'Add security & compliance'}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Manajemen EDR/AV & kerentanan' : 'Managed EDR/AV & vulnerability management'}</li>
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Baseline pengerasan & kontrol akses' : 'Hardening baseline & access control'}</li>
                  <li className="flex items-center gap-2">✅ {language === 'id' ? 'Tinjauan risiko & latihan simulasi berkala' : 'Risk review & periodic tabletop exercises'}</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3.5 rounded-xl bg-[#0c1f3d] hover:bg-[#122e54] text-white font-extrabold text-xs text-center transition shadow-md">
                {language === 'id' ? 'Minta Penawaran' : 'Request a Quote'}
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
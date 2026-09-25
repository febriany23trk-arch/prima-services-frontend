'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function IsoCompliancePage() {
  // Menggunakan state lokal sebagai pengganti context yang hilang
  const [language] = useState<'id' | 'en'>('id');

  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans pt-28 pb-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HERO SECTION */}
        <div className="bg-[#f8fafc] rounded-[36px] border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
              {language === 'id' ? 'ISO 27001 • ISO 20000 • KEPATUHAN REGULASI' : 'ISO 27001 • ISO 20000 • REGULATORY COMPLIANCE'}
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-black text-[#0c1f3d] tracking-tight leading-[1.12]">
              {language === 'id' ? 'Layanan Kepatuhan &' : 'Compliance &'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-slate-800">
                {language === 'id' ? 'Sertifikasi ISO' : 'ISO Certification'}
              </span>
            </h1>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              {language === 'id' 
                ? 'Dampingi organisasi Anda mencapai dan mempertahankan standar internasional keamanan informasi dan manajemen layanan IT secara efisien.'
                : 'Guide your organization to achieve and maintain international information security and IT service management standards efficiently.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#0c1f3d] hover:bg-[#122e54] text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {language === 'id' ? 'Konsultasi Sekarang' : 'Consult Now'}
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl border border-slate-300 transition-all cursor-pointer shadow-xs"
              >
                {language === 'id' ? 'Unduh Panduan ISO' : 'Download ISO Guide'}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">✓ {language === 'id' ? 'Pendampingan Audit' : 'Audit Assistance'}</span>
              <span className="flex items-center gap-1.5">✓ {language === 'id' ? 'Dokumentasi Lengkap' : 'Full Documentation'}</span>
              <span className="flex items-center gap-1.5">✓ {language === 'id' ? 'Tingkat Kelulusan 100%' : '100% Pass Rate'}</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                alt="ISO Compliance Consulting"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* STANDAR ISO UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f8fafc] text-slate-800 rounded-3xl p-8 shadow-md border border-slate-200/90 space-y-4 hover:shadow-xl transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">🛡️</div>
            <h3 className="font-extrabold text-lg text-[#0c1f3d]">ISO/IEC 27001</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'id' 
                ? 'Sistem Manajemen Keamanan Informasi (SMKI) untuk melindungi kerahasiaan dan integritas data perusahaan.' 
                : 'Information Security Management System (ISMS) to protect company data confidentiality and integrity.'}
            </p>
          </div>

          <div className="bg-[#f8fafc] text-slate-800 rounded-3xl p-8 shadow-md border border-slate-200/90 space-y-4 hover:shadow-xl transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">⚙️</div>
            <h3 className="font-extrabold text-lg text-[#0c1f3d]">ISO/IEC 20000</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'id' 
                ? 'Sistem Manajemen Layanan IT (ITSM) untuk memastikan kualitas dan efisiensi penyampaian layanan IT.' 
                : 'IT Service Management System (ITSMS) to ensure quality and efficiency in IT service delivery.'}
            </p>
          </div>

          <div className="bg-[#f8fafc] text-slate-800 rounded-3xl p-8 shadow-md border border-slate-200/90 space-y-4 hover:shadow-xl transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">📋</div>
            <h3 className="font-extrabold text-lg text-[#0c1f3d]">ISO 22301</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'id' 
                ? 'Sistem Manajemen Kelangsungan Usaha (BCMS) untuk kesiapan menghadapi insiden dan krisis.' 
                : 'Business Continuity Management System (BCMS) for preparedness against incidents and crises.'}
            </p>
          </div>
        </div>

        {/* PROSES PENDAMPINGAN */}
        <div className="space-y-8 bg-[#f8fafc] text-slate-800 rounded-[36px] p-8 sm:p-12 shadow-xl border border-slate-200/90">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0c1f3d] tracking-tight mb-2">
              {language === 'id' ? 'Tahapan Konsultasi & Sertifikasi' : 'Consulting & Certification Stages'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {language === 'id' ? 'Pendekatan terstruktur hingga organisasi Anda meraih sertifikasi resmi.' : 'Structured approach until your organization achieves official certification.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-md">Langkah 01</span>
              <h3 className="font-extrabold text-sm text-[#0c1f3d] pt-1">{language === 'id' ? 'Gap Analysis' : 'Gap Analysis'}</h3>
              <p className="text-xs text-slate-600">{language === 'id' ? 'Evaluasi kondisi sistem saat ini terhadap standar ISO.' : 'Evaluation of current system state against ISO standards.'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-md">Langkah 02</span>
              <h3 className="font-extrabold text-sm text-[#0c1f3d] pt-1">{language === 'id' ? 'Dokumentasi' : 'Documentation'}</h3>
              <p className="text-xs text-slate-600">{language === 'id' ? 'Penyusunan kebijakan, prosedur, dan pedoman kerja.' : 'Preparation of policies, procedures, and working guidelines.'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-md">Langkah 03</span>
              <h3 className="font-extrabold text-sm text-[#0c1f3d] pt-1">{language === 'id' ? 'Implementasi' : 'Implementation'}</h3>
              <p className="text-xs text-slate-600">{language === 'id' ? 'Penerapan kontrol, pelatihan internal & audit internal.' : 'Control implementation, internal training & internal audit.'}</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-md">Langkah 04</span>
              <h3 className="font-extrabold text-sm text-[#0c1f3d] pt-1">{language === 'id' ? 'Audit Sertifikasi' : 'Certification Audit'}</h3>
              <p className="text-xs text-slate-600">{language === 'id' ? 'Pendampingan saat audit oleh Badan Sertifikasi eksternal.' : 'Assistance during audit by external Certification Body.'}</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
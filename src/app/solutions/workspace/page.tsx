'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Mail, 
  Video, 
  HardDrive, 
  ShieldCheck, 
  FileText, 
  CheckCircle2,
  Lock,
  Database,
  Server,
  Layers
} from 'lucide-react';

export default function GoogleWorkspaceSolutionPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans pt-28 pb-24 px-6 sm:px-10 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* 1. HERO / BANNER UTAMA */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#1d4ed8] bg-blue-50 px-3.5 py-1.5 rounded-full">
              Our Solutions
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c1f3d] tracking-tight leading-[1.18]">
              Google Workspace for Modern Business
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Business email, real-time collaboration, and enterprise-grade security all in one easy-to-use package.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#193d70] hover:bg-[#122e54] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Free Consultant Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a182c] via-[#0d2244] to-[#173868] shadow-2xl p-6 flex items-center justify-center border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="bg-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 border border-slate-100 z-10">
                <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.29 21.39 7.37 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.29 2.61 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span className="text-xl font-bold tracking-tight text-slate-800">Google Workspace</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. 4 PILAR UTAMA SOLUSI (Logo di Tengah & Hover Lift) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Email Bisnis</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              @domain Anda dengan proteksi spam & phishing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Video className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Meet & Chat</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Rapat video 1 klik, rekam, noise cancel, breakout.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <HardDrive className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Drive & Shared Drive</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Penyimpanan aman, berbagi terkendali, audit trail.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Keamanan & Admin</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              2-Step, DLP, Context-Aware Access, Vault & eDiscovery.
            </p>
          </div>

        </div>

        {/* 3. SECTION: Everything your team needs (Logo di Tengah & Hover Lift) */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-10">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Everything your team needs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Professional email, secure storage, video meetings, chat, documents, spreadsheets, presentations, forms, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Gmail */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#EA4335" d="M12 12.75l10-6.25V6.5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v.25l10 6.25z"/>
                  <path fill="#4285F4" d="M22 8.75v8.5c0 1.1-.9 2-2 2h-3.5V11L12 14.5 7.5 11v8.25H4c-1.1 0-2-.9-2-2v-8.5c0-.6.3-1.1.8-1.4l7.2 4.5 7.2-4.5c.5.3.8.8.8 1.4z"/>
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Gmail</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Professional & secure business email.</p>
            </div>

            {/* Google Meet */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#00832d" d="M15 12.5l5 3.75v-8.5L15 12.5z"/>
                  <path fill="#0066da" d="M2 16.5V7.5C2 6.4 2.9 5.5 4 5.5h10c1.1 0 2 .9 2 2v2.5l5-3.75v12.5l-5-3.75V16.5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z"/>
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Google Meet</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Video meetings for up to hundreds of participants.</p>
            </div>

            {/* Drive */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#0066da" d="M7.71 3.5L1.5 14.28h6.21l6.21-10.78H7.71z"/>
                  <path fill="#00832d" d="M16.29 3.5H7.71L13.92 14.28h8.58L16.29 3.5z"/>
                  <path fill="#fbbc04" d="M1.5 14.28L4.61 19.68h14.78l3.11-5.4H1.5z"/>
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Drive</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Cloud storage & secure sharing.</p>
            </div>

            {/* Docs/Sheets/Slides */}
            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#0066da" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/>
                  <path fill="#2684fc" d="M14 2v6h6L14 2z"/>
                  <path fill="#fff" d="M8 12h8v2H8zm0 4h8v2H8zm0-8h4v2H8z"/>
                </svg>
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Docs/Sheets/Slides</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Real-time collaboration on documents.</p>
            </div>

          </div>

        </div>

        {/* 4. SECTION: Google Workspace Plans */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Google Workspace Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Choose a plan based on your capacity, security, and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Business Starter */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="font-black text-lg text-[#0c1f3d]">Business Starter</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Business email & basic collaboration.</p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2">✓ 30 GB/user Drive</li>
                  <li className="flex items-center gap-2">✓ Meetings for up to 100 participants</li>
                  <li className="flex items-center gap-2">✓ Basic security & standard support</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 bg-[#0c1f3d] hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition cursor-pointer">
                Request a Quote
              </Link>
            </div>

            {/* Business Standard (Most Popular) */}
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-400 shadow-xl flex flex-col justify-between space-y-6 relative hover:-translate-y-2 transition-transform duration-300">
              <span className="absolute -top-3.5 right-6 bg-amber-400 text-[#0c1f3d] font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </span>
              <div className="space-y-3">
                <h3 className="font-black text-lg text-[#0c1f3d]">Business Standard</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Advanced collaboration.</p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2">✓ 2 TB/user Drive (or pool)</li>
                  <li className="flex items-center gap-2">✓ Meetings for up to 150 participants + recording</li>
                  <li className="flex items-center gap-2">✓ Shared Drives & advanced collaboration features</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 bg-[#0c1f3d] hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition cursor-pointer">
                Request a Quote
              </Link>
            </div>

            {/* Business Plus */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="font-black text-lg text-[#0c1f3d]">Business Plus</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Advanced security & compliance.</p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2">✓ 5 TB/user (or pool, depending on region)</li>
                  <li className="flex items-center gap-2">✓ Vault, eDiscovery, Retention</li>
                  <li className="flex items-center gap-2">✓ Enhanced security & device management</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 bg-[#0c1f3d] hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition cursor-pointer">
                Request a Quote
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="font-black text-lg text-[#0c1f3d]">Enterprise</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Large scale & custom needs.</p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2">
                  <li className="flex items-center gap-2">✓ Flexible storage</li>
                  <li className="flex items-center gap-2">✓ S/MIME, advanced DLP, AppSheet Core</li>
                  <li className="flex items-center gap-2">✓ Enterprise-level support & contracts</li>
                </ul>
              </div>
              <Link href="/contact" className="w-full py-3 bg-[#0c1f3d] hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition cursor-pointer">
                Request a Quote
              </Link>
            </div>

          </div>

        </div>

        {/* 5. SECTION: Zero Downtime Migration & Keamanan Tambahan */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight">
                Zero Downtime Migration
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Move email, calendars, contacts, and files from legacy platforms (Microsoft 365, IMAP, cPanel, and more) securely and with a plan.
              </p>
              
              <div className="space-y-2.5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">01</span>
                  <span>Assessment & domain planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">02</span>
                  <span>Proof-of-Concept & user pilot</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">03</span>
                  <span>Scheduled synchronization & cutover</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">04</span>
                  <span>Training, change management, support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] bg-gradient-to-br from-[#0a182c] via-[#0d2244] to-[#173868] rounded-3xl p-8 shadow-xl text-center space-y-3 text-white">
                <div className="text-3xl">🖥️ 📋 ✉️</div>
                <p className="text-xs font-bold text-amber-300">G Suite / Google Workspace Migration Ready</p>
                <p className="text-[11px] text-slate-300">Seamless transition with zero data loss.</p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            
            <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/50 p-7 rounded-3xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-2">
              <h4 className="font-extrabold text-sm text-blue-900">Identity & Access</h4>
              <p className="text-xs text-slate-600">SSO/OAuth, MFA, Context-Aware Access, granularity per-OU/Group.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50/70 to-emerald-50/50 p-7 rounded-3xl border border-teal-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-2">
              <h4 className="font-extrabold text-sm text-teal-900">Data Protection</h4>
              <p className="text-xs text-slate-600">DLP for Gmail/Drive, labels, Vault (hold, audit), eDiscovery+.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/50 p-7 rounded-3xl border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-2">
              <h4 className="font-extrabold text-sm text-purple-900">Operational Security</h4>
              <p className="text-xs text-slate-600">Alert Center, Log export to SIEM, admin audit Endpoint Management.</p>
            </div>

          </div>

        </div>

        {/* 6. SECTION: Ready to modernize your team's work? (CTA BANNER) */}
        <div className="relative w-full rounded-[36px] overflow-hidden bg-gradient-to-r from-[#0d2244] via-[#102750] to-[#12233f] shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white border border-slate-800">
          <div className="space-y-4 max-w-lg z-10 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight">
              Ready to modernize your team&apos;s work?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              We help with licensing planning, deployment, migration, and adoption training.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0c1f3d] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              Free Consultation Now
            </Link>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[380px] h-[220px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Workspace Representative"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
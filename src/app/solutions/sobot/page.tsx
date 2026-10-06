'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePageContent } from '@/lib/use-page-content';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Bot,
  MessageSquare,
  Zap,
  CheckCircle2,
  Activity,
  Layers,
  ShoppingBag,
  Building2,
  Gamepad2,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Mic,
  MessageCircle,
  PhoneCall,
  Search,
  Lock
} from 'lucide-react';

export default function SobotSolutionPage() {
  const { content, error } = usePageContent('solutions-sobot');
  const [activeTab, setActiveTab] = useState<'agent' | 'chatbot' | 'voice'>('agent');
  const [activeChannel, setActiveChannel] = useState<'wa' | 'ig' | 'web' | 'voice'>('wa');
  const [activeIndustry, setActiveIndustry] = useState<'retail' | 'financial' | 'gaming' | 'education' | 'enterprise' | 'life'>('retail');
  const [industryFilter, setIndustryFilter] = useState('');

  const channelMessages = {
    wa: {
      channelName: content['channelmessages.wa.channelname'] ?? 'WhatsApp Business API',
      userMsg: content['channelmessages.wa.usermsg'] ?? 'Halo, saya mau cek status pesanan #ORD-89211 dong.',
      aiMsg: content['channelmessages.wa.aimsg'] ?? 'Pesanan #ORD-89211 sedang dikirim oleh kurir (JNT) dan diperkirakan tiba hari ini sebelum pukul 17:00 WIB. Klik link untuk lacak live location: sobot.link/track',
    },
    ig: {
      channelName: content['channelmessages.ig.channelname'] ?? 'Instagram Direct Message',
      userMsg: content['channelmessages.ig.usermsg'] ?? 'Min, produk promo diskon 50% masih ready?',
      aiMsg: content['channelmessages.ig.aimsg'] ?? 'Masih ready kak! Promo berakhir dalam 2 jam lagi. Mau AI kirimkan langsung katalog & voucher checkout-nya ke DM ini?',
    },
    web: {
      channelName: content['channelmessages.web.channelname'] ?? 'Website Live Chat Widget',
      userMsg: content['channelmessages.web.usermsg'] ?? 'Bagaimana cara integrasi AI Sobot ke CRM Salesforce kami?',
      aiMsg: content['channelmessages.web.aimsg'] ?? 'Sangat mudah! Sobot menyediakan Native API & Webhook siap pakai. Tim teknis kami dapat menyelesaikan integrasi dalam < 24 jam.',
    },
    voice: {
      channelName: content['channelmessages.voice.channelname'] ?? 'Voice AI Auto-Call',
      userMsg: content['channelmessages.voice.usermsg'] ?? '[Voice Call Active] Halo Sobot Assistant...',
      aiMsg: content['channelmessages.voice.aimsg'] ?? 'Halo Pak Budi! Saya AI Voice Sobot. Jadwal janji temu Anda dengan konsultan kami ditetapkan esok pukul 10:00 WIB. Apakah ingin dikonfirmasi?',
    },
  };

  const industryData = {
    retail: {
      title: content['industrydata.retail.title'] ?? 'Retail & E-commerce',
      subtitle: content['industrydata.retail.subtitle'] ?? 'Tingkatkan konversi penjualan & bantu lacak pesanan otomatis.',
      icon: <ShoppingBag className="w-5 h-5 text-orange-400" />,
      features: [
        { title: content['industrydata.retail.features.01.title'] ?? 'Bantuan Pra-Penjualan', desc: content['industrydata.retail.features.01.desc'] ?? 'Rekomendasi produk personal, FAQ, dan perbandingan harga.' },
        { title: content['industrydata.retail.features.02.title'] ?? 'Otomatisasi Pembayaran', desc: content['industrydata.retail.features.02.desc'] ?? 'Pengingat keranjang (cart recovery) dan bantuan instruksi bayar.' },
        { title: content['industrydata.retail.features.03.title'] ?? 'Layanan Purna Jual', desc: content['industrydata.retail.features.03.desc'] ?? 'Lacak resi instan, klaim garansi, dan retur tanpa ribet.' },
      ],
      illustrationTitle: content['industrydata.retail.illustrationtitle'] ?? 'Shopping Assistant & Cart Recovery',
    },
    financial: {
      title: content['industrydata.financial.title'] ?? 'Financial Services & Banking',
      subtitle: content['industrydata.financial.subtitle'] ?? 'Layanan keuangan aman dengan kepatuhan ISO & GDPR.',
      icon: <Building2 className="w-5 h-5 text-emerald-400" />,
      features: [
        { title: content['industrydata.financial.features.01.title'] ?? 'KYC & Registrasi', desc: content['industrydata.financial.features.01.desc'] ?? 'Onboarding nasabah, verifikasi dokumen, dan cek limit.' },
        { title: content['industrydata.financial.features.02.title'] ?? 'Navigasi Transaksi', desc: content['industrydata.financial.features.02.desc'] ?? 'Info mutasi, blokir kartu darurat, dan peringatan fraud.' },
        { title: content['industrydata.financial.features.03.title'] ?? 'Edukasi Produk', desc: content['industrydata.financial.features.03.desc'] ?? 'Simulasi pinjaman, asuransi, dan panduan investasi.' },
      ],
      illustrationTitle: content['industrydata.financial.illustrationtitle'] ?? 'Secure Banking & Verification Portal',
    },
    gaming: {
      title: content['industrydata.gaming.title'] ?? 'Gaming & Entertainment',
      subtitle: content['industrydata.gaming.subtitle'] ?? 'Dukungan player 24/7 untuk meningkatkan retensi pemain.',
      icon: <Gamepad2 className="w-5 h-5 text-cyan-400" />,
      features: [
        { title: content['industrydata.gaming.features.01.title'] ?? 'Layanan Player 24/7', desc: content['industrydata.gaming.features.01.desc'] ?? 'Penanganan keluhan top-up & bug game secara instan.' },
        { title: content['industrydata.gaming.features.02.title'] ?? 'Pengingat Event & Update', desc: content['industrydata.gaming.features.02.desc'] ?? 'Notifikasi patch note, membership, dan event khusus.' },
        { title: content['industrydata.gaming.features.03.title'] ?? 'Pemasaran Segmentasi', desc: content['industrydata.gaming.features.03.desc'] ?? 'Tagging perilaku player untuk promo in-game yang akurat.' },
      ],
      illustrationTitle: content['industrydata.gaming.illustrationtitle'] ?? 'Player Support & Event Engagement',
    },
    education: {
      title: content['industrydata.education.title'] ?? 'Education & University',
      subtitle: content['industrydata.education.subtitle'] ?? 'Solusi fleksibel untuk mahasiswa, dosen, dan calon pendaftar.',
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />,
      features: [
        { title: content['industrydata.education.features.01.title'] ?? 'Informasi Pendaftaran', desc: content['industrydata.education.features.01.desc'] ?? 'Bot pendaftaran, info beasiswa, dan syarat masuk.' },
        { title: content['industrydata.education.features.02.title'] ?? 'Layanan Mahasiswa', desc: content['industrydata.education.features.02.desc'] ?? 'Cek jadwal kuliah, transkrip nilai, dan administrasi.' },
        { title: content['industrydata.education.features.03.title'] ?? 'Broadcast Otomatis', desc: content['industrydata.education.features.03.desc'] ?? 'Pengumuman ujian, perkuliahan, dan batas pembayaran.' },
      ],
      illustrationTitle: content['industrydata.education.illustrationtitle'] ?? 'Campus AI Support Center',
    },
    enterprise: {
      title: content['industrydata.enterprise.title'] ?? 'Enterprise & Corporate Services',
      subtitle: content['industrydata.enterprise.subtitle'] ?? 'Dukungan internal perusahaan untuk IT, HR, dan Finance.',
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      features: [
        { title: content['industrydata.enterprise.features.01.title'] ?? 'IT Helpdesk Automated', desc: content['industrydata.enterprise.features.01.desc'] ?? 'Tiket kendala IT, permintaan akses, dan kuesioner.' },
        { title: content['industrydata.enterprise.features.02.title'] ?? 'HR Self-Service', desc: content['industrydata.enterprise.features.02.desc'] ?? 'Pengajuan cuti, cek slip gaji, dan info benefit karyawan.' },
        { title: content['industrydata.enterprise.features.03.title'] ?? 'Finance Operations', desc: content['industrydata.enterprise.features.03.desc'] ?? 'Verifikasi invoice, klaim reimbursement, dan approval.' },
      ],
      illustrationTitle: content['industrydata.enterprise.illustrationtitle'] ?? 'Internal Employee Assistance Desk',
    },
    life: {
      title: content['industrydata.life.title'] ?? 'Public & Life Services',
      subtitle: content['industrydata.life.subtitle'] ?? 'Pelayanan publik cepat tanggap untuk skala pengguna besar.',
      icon: <HeartPulse className="w-5 h-5 text-rose-400" />,
      features: [
        { title: content['industrydata.life.features.01.title'] ?? 'Layanan Pengaduan', desc: content['industrydata.life.features.01.desc'] ?? 'Penerimaan aduan warga dan penjejakan status laporan.' },
        { title: content['industrydata.life.features.02.title'] ?? 'Informasi Tagihan Publik', desc: content['industrydata.life.features.02.desc'] ?? 'Cek tagihan listrik/air dan integrasi pembayaran.' },
        { title: content['industrydata.life.features.03.title'] ?? 'Pemberitahuan Darurat', desc: content['industrydata.life.features.03.desc'] ?? 'Broadcast bencana, informasi cuaca, dan kampanye kesehatan.' },
      ],
      illustrationTitle: content['industrydata.life.illustrationtitle'] ?? 'Public Utility & Assistance Hub',
    },
  };

  const currentIndustry = industryData[activeIndustry];

  const filteredFeatures = currentIndustry.features.filter(
    (f) =>
      f.title.toLowerCase().includes(industryFilter.toLowerCase()) ||
      f.desc.toLowerCase().includes(industryFilter.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#05070c] font-sans pt-4 sm:pt-6 pb-28 px-4 sm:px-6 lg:px-12 text-slate-100 relative overflow-hidden selection:bg-orange-500 selection:text-white">
      {error && (
        <p role="alert" className="relative z-20 mx-auto mb-3 max-w-7xl text-sm text-amber-300">
          {error}
        </p>
      )}

      {/* Dynamic Ambient Blur Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-orange-500/20 via-rose-500/10 to-indigo-600/20 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-[600px] -left-40 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute top-[1200px] -right-40 w-[600px] h-[600px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">

        {/* ================= HERO SECTION ================= */}
        <div className="relative bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 backdrop-blur-3xl rounded-[3rem] border border-slate-800/80 shadow-[0_20px_90px_rgba(0,0,0,0.8)] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden">

          {/* Glowing Top Rainbow Bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-400 to-indigo-500" />

          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7">

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-orange-400 text-xs font-black tracking-widest uppercase shadow-inner">
              <Sparkles className="w-4 h-4 animate-spin text-orange-400" />
              <span>{content['hero.span.text-001'] ?? 'Next-Generation AI CRM'}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-white">
              {content['hero.h1.text-001'] ?? 'Sobot.io – All In One'} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-indigo-400 bg-clip-text text-transparent">
                {content['hero.span.text-002'] ?? 'CRM Omnichannel'}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              {content['hero.p.text-001'] ?? 'Otomatiskan layanan pelanggan, tingkatkan efisiensi operasional, dan pangkas biaya operasional hingga'} <span className="font-extrabold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-lg">{content['hero.span.text-003'] ?? '50%'}</span> {content['hero.p.text-002'] ?? 'dengan dukungan sertifikasi ISO 27001, ISO 9001, kepatuhan GDPR, serta terdaftar resmi PSE Kominfo.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={content['hero.link.href-001'] ?? '/contact'}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>{content['hero.span.text-004'] ?? 'Free Consultation Now'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 px-5 py-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shadow-lg">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
                <span>{content['hero.span.text-005'] ?? 'ISO 27001 & PSE Kominfo'}</span>
              </div>
            </div>

            {/* Live Performance Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl">
              <div className="bg-slate-950/40 border border-slate-800/60 p-3 rounded-2xl">
                <p className="text-lg sm:text-2xl font-black text-white">{content['contact.p.text-003'] ?? '99.9%'}</p>
                <p className="text-[11px] text-slate-400 font-medium">{content['contact.p.text-004'] ?? 'Uptime Guarantee'}</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/60 p-3 rounded-2xl">
                <p className="text-lg sm:text-2xl font-black text-emerald-400">{content['contact.p.text-005'] ?? '< 0.2s'}</p>
                <p className="text-[11px] text-slate-400 font-medium">{content['contact.p.text-006'] ?? 'AI Latency SLA'}</p>
              </div>
              <div className="bg-slate-950/40 border border-slate-800/60 p-3 rounded-2xl">
                <p className="text-lg sm:text-2xl font-black text-amber-400">{content['contact.p.text-007'] ?? '50%'}</p>
                <p className="text-[11px] text-slate-400 font-medium">{content['contact.p.text-008'] ?? 'Cost Saving'}</p>
              </div>
            </div>
          </div>

          {/* Right Interactive Omnichannel Demo Simulator */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px]">

              {/* Outer Neon Glow Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-600 rounded-[2.8rem] blur-2xl opacity-40 animate-pulse" />

              {/* Main Demo Window */}
              <div className="relative bg-slate-950/90 border border-slate-700/80 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-2xl space-y-5 overflow-hidden">

                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-black text-slate-950 text-sm shadow-lg">
                      {content['contact.div.text-001'] ?? 'S'}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white flex items-center gap-2">
                        {content['contact.h3.text-001'] ?? 'Sobot AI Hub'}
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </h3>
                      <p className="text-[10px] text-slate-400">{content['contact.p.text-009'] ?? 'Pilih channel di bawah untuk simulasi:'}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                    {content['contact.span.text-006'] ?? 'Online'}
                  </span>
                </div>

                {/* Channel Switcher Buttons */}
                <div className="grid grid-cols-4 gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
                  {[
                    { id: 'wa', label: content['cards.dataset-01.wa.label'] ?? 'WA', icon: <MessageCircle className="w-3.5 h-3.5" /> },
                    { id: 'ig', label: content['cards.dataset-01.ig.label'] ?? 'IG', icon: <MessageSquare className="w-3.5 h-3.5" /> },
                    { id: 'web', label: content['cards.dataset-01.web.label'] ?? 'Web', icon: <Zap className="w-3.5 h-3.5" /> },
                    { id: 'voice', label: content['cards.dataset-01.voice.label'] ?? 'Voice', icon: <PhoneCall className="w-3.5 h-3.5" /> },
                  ].map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => setActiveChannel(ch.id as typeof activeChannel)}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                        activeChannel === ch.id
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-md'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      {ch.icon}
                      <span>{ch.label}</span>
                    </button>
                  ))}
                </div>

                {/* Simulated Conversation Body */}
                <div className="space-y-3 min-h-[200px] flex flex-col justify-center">
                  <div className="text-[10px] text-slate-400 text-center font-semibold bg-slate-900/50 py-1 rounded-lg border border-slate-800">
                    {content['contact.div.text-002'] ?? 'Kanal Aktif:'} <span className="text-orange-400">{channelMessages[activeChannel].channelName}</span>
                  </div>

                  {/* Customer Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-slate-800 border border-slate-700 text-slate-200 text-xs p-3.5 rounded-2xl rounded-tr-none max-w-[88%] shadow-md">
                      {channelMessages[activeChannel].userMsg}
                    </div>
                  </div>

                  {/* AI Response Bubble */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800/90 border border-orange-500/30 text-xs p-3.5 rounded-2xl rounded-tl-none space-y-1.5 shadow-lg">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Bot className="w-3 h-3" /> {content['contact.span.text-007'] ?? 'Sobot AI Agent'}
                      </span>
                      <span className="text-emerald-400 text-[9px] font-mono">{content['contact.span.text-008'] ?? 'Respon 0.1s'}</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      {channelMessages[activeChannel].aiMsg}
                    </p>
                  </div>
                </div>

                {/* Security Footer Badge */}
                <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-300 text-[11px] font-medium">{content['security.span.text-009'] ?? 'End-to-End Encrypted & GDPR Compliant'}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= AI ENGINE CAPABILITIES ================= */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
              {content['features.span.text-010'] ?? 'Core Intelligence'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {content['features.h2.text-001'] ?? '3 Pilar Utama Teknologi AI Sobot'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {content['features.p.text-010'] ?? 'Solusi otomatisasi lengkap berbasis AI untuk percakapan teks, pesan terstruktur, hingga panggilan suara.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'agent',
                title: content['cards.dataset-02.agent.title'] ?? 'AI Agent (LLM)',
                icon: <Bot className="w-7 h-7 text-orange-400" />,
                desc: content['cards.dataset-02.agent.desc'] ?? 'Memahami bahasa alami kompleks (NLU), melayani penjualan dan customer support 24/7 tanpa halusinasi.',
                badge: content['cards.dataset-02.agent.badge'] ?? 'Generative AI',
              },
              {
                id: 'chatbot',
                title: content['cards.dataset-02.chatbot.title'] ?? 'Rule & Flow Chatbot',
                icon: <MessageSquare className="w-7 h-7 text-cyan-400" />,
                desc: content['cards.dataset-02.chatbot.desc'] ?? 'Alur percakapan terstruktur presisi tinggi untuk penanganan FAQ, pengumpulan data form, dan ticketing.',
                badge: content['cards.dataset-02.chatbot.badge'] ?? 'Workflow Bot',
              },
              {
                id: 'voice',
                title: content['cards.dataset-02.voice.title'] ?? 'Voice AI Calling',
                icon: <Mic className="w-7 h-7 text-purple-400" />,
                desc: content['cards.dataset-02.voice.desc'] ?? 'Melakukan panggilan suara alami (inbound & outbound) dengan kemampuan transfer langsung ke agen manusia.',
                badge: content['cards.dataset-02.voice.badge'] ?? 'Real-Time Voice',
              },
            ].map((card) => (
              <div
                key={card.id}
                onClick={() => setActiveTab(card.id as typeof activeTab)}
                className={`group relative rounded-[2.2rem] p-8 transition-all duration-300 cursor-pointer border backdrop-blur-xl ${
                  activeTab === card.id
                    ? 'bg-slate-900 border-orange-500/60 shadow-2xl shadow-orange-500/15 scale-[1.02]'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/70 shadow-inner">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-3.5 py-1 rounded-full border border-slate-700">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6">{card.desc}</p>

                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 group-hover:translate-x-1.5 transition-transform">
                  <span>{content['features.span.text-011'] ?? 'Lihat Detail Fitur'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INDUSTRY SOLUTIONS ================= */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-8 sm:p-12 lg:p-16 space-y-12 backdrop-blur-2xl relative overflow-hidden">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                {content['industries.span.text-012'] ?? 'Tailored By Industry'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {content['industries.h2.text-002'] ?? 'Solusi CRM Berdasarkan Sektor Industri'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {content['industries.p.text-011'] ?? 'Dioptimalkan untuk alur kerja dan kepatuhan spesifik pada sektor bisnis Anda.'}
              </p>
            </div>

            {/* Filter Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={content['industries.input.placeholder-001'] ?? 'Cari fitur industri...'}
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>

          {/* Industry Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {[
              { id: 'retail', label: content['cards.dataset-03.retail.label'] ?? 'Retail & E-commerce' },
              { id: 'financial', label: content['cards.dataset-03.financial.label'] ?? 'Financial Services' },
              { id: 'gaming', label: content['cards.dataset-03.gaming.label'] ?? 'Gaming' },
              { id: 'education', label: content['cards.dataset-03.education.label'] ?? 'Education' },
              { id: 'enterprise', label: content['cards.dataset-03.enterprise.label'] ?? 'Enterprise' },
              { id: 'life', label: content['cards.dataset-03.life.label'] ?? 'Public Services' },
            ].map((ind) => (
              <button
                key={ind.id}
                onClick={() => {
                  setActiveIndustry(ind.id as typeof activeIndustry);
                  setIndustryFilter('');
                }}
                className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeIndustry === ind.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-lg shadow-orange-500/20 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>

          {/* Active Industry Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-inner">
                  {currentIndustry.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{currentIndustry.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">{currentIndustry.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {filteredFeatures.length > 0 ? (
                  filteredFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950/60 border border-slate-800 hover:border-slate-700 p-4 rounded-2xl flex items-start gap-3.5 transition-colors"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-extrabold text-white">{feat.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 italic py-4">{content['industries.p.text-012'] ?? 'Tidak ada fitur yang cocok dengan kata kunci pencarian.'}</p>
                )}
              </div>
            </div>

            {/* Industry Feature Callout Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 rounded-[2.2rem] text-center space-y-5 shadow-xl relative">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-md">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">{currentIndustry.illustrationTitle}</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                  {content['features.p.text-013'] ?? 'Siap diintegrasikan langsung dengan sistem CRM, Database internal, & API eksisting bisnis Anda secara aman.'}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href={content['features.link.href-002'] ?? '/contact'}
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>{content['features.span.text-013'] ?? 'Minta Demo Khusus Industri Ini'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
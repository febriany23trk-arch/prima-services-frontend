'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Bot, 
  MessageSquare, 
  Mic, 
  ArrowUpRight,
  MessageCircle,
  PhoneCall,
  Ticket,
  Send,
  Gamepad2,
  ShoppingBag,
  Building2,
  GraduationCap,
  Briefcase,
  HeartPulse
} from 'lucide-react';

export default function SobotSolutionPage() {
  const [activeTab, setActiveTab] = useState<'agent' | 'chatbot' | 'voice'>('agent');
  const [activeContactTab, setActiveContactTab] = useState<'livechat' | 'voice' | 'ticketing' | 'whatsapp'>('livechat');
  
  // State untuk tab Industri yang aktif
  const [activeIndustry, setActiveIndustry] = useState<'retail' | 'financial' | 'gaming' | 'education' | 'enterprise' | 'life'>('retail');

  // Mapping file video untuk tab AI Features (Bagian Atas)
  const aiVideoMap = {
    agent: '/ai-agent.mp4',
    chatbot: '/chatbot.mp4',
    voice: '/voice-ai.mp4',
  };

  // Mapping file video untuk tab Contact Center (Bagian Bawah)
  const contactVideoMap = {
    livechat: '/livechat.mp4',
    voice: '/voice.mp4',
    ticketing: '/ticketing.mp4',
    whatsapp: '/whatsapp.mp4',
  };

  // Data konten untuk masing-masing industri
  const industryData = {
    retail: {
      title: 'Retail & E-commerce',
      subtitle: 'Drive conversions with guided shopping and proactive service.',
      icon: <ShoppingBag className="w-6 h-6" />,
      features: [
        { title: 'Pre-Purchase', desc: 'Personalized assist, FAQ, product compare.' },
        { title: 'Purchase', desc: 'Payment help, promo, checkout support.' },
        { title: 'Post-Purchase', desc: 'Order tracking, return/exchange, warranty.' },
      ],
      illustrationTitle: 'Shopping Assistant & Cart Recovery',
    },
    financial: {
      title: 'Financial Services',
      subtitle: 'Secure, compliant support for banking & fintech.',
      icon: <Building2 className="w-6 h-6" />,
      features: [
        { title: 'Account & KYC', desc: 'Onboarding, verification, limit & statement requests.' },
        { title: 'Transaction Help', desc: 'Transfer, dispute, fraud flag & alerts.' },
        { title: 'Product Education', desc: 'Credit, investment & insurance guidance.' },
      ],
      illustrationTitle: 'Secure Banking & Verification Portal',
    },
    gaming: {
      title: 'Gaming',
      subtitle: 'Improve player retention and conversion.',
      icon: <Gamepad2 className="w-6 h-6" />,
      features: [
        { title: 'Around-the-clock Customer Service', desc: 'AI Agent delivers 24/7 assistance for player satisfaction.' },
        { title: 'Notification Reminders', desc: 'Version updates, membership benefits, events.' },
        { title: 'Targeted Marketing', desc: 'Cross-channel tags to boost conversions.' },
      ],
      illustrationTitle: 'Raffle Event • Inushima Paul',
    },
    education: {
      title: 'Education',
      subtitle: 'Flexible solutions that support students & staff.',
      icon: <GraduationCap className="w-6 h-6" />,
      features: [
        { title: 'Admission & FAQs', desc: 'Info beasiswa, pendaftaran, jadwal.' },
        { title: 'Student Services', desc: 'Kehadiran, transkrip, konseling.' },
        { title: 'Notifications', desc: 'Pengumuman kelas & pembayaran.' },
      ],
      illustrationTitle: 'Campus Support System',
    },
    enterprise: {
      title: 'Enterprise Services',
      subtitle: 'Internal support for IT, HR, and Finance.',
      icon: <Briefcase className="w-6 h-6" />,
      features: [
        { title: 'IT Helpdesk', desc: 'Tickets, asset & access requests.' },
        { title: 'HR Services', desc: 'Leave, payroll, benefits.' },
        { title: 'Finance Ops', desc: 'Invoice, reimbursement, approval.' },
      ],
      illustrationTitle: 'Internal Employee Assistance',
    },
    life: {
      title: 'Life Services',
      subtitle: 'Public & daily services at scale.',
      icon: <HeartPulse className="w-6 h-6" />,
      features: [
        { title: 'Citizen Service', desc: 'Info layanan, pengaduan, status permohonan.' },
        { title: 'Utilities', desc: 'Tagihan, gangguan, penjadwalan.' },
        { title: 'Mass Notifications', desc: 'Pemberitahuan darurat & kampanye.' },
      ],
      illustrationTitle: 'Public Utility & Assistance Desk',
    },
  };

  const currentIndustry = industryData[activeIndustry];

  return (
    <main className="min-h-screen bg-[#f4f7fb] font-sans pt-28 pb-24 px-6 sm:px-10 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* 1. HERO / BANNER UTAMA */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#e6005c] bg-pink-50 px-3.5 py-1.5 rounded-full">
              Our Solutions
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c1f3d] tracking-tight leading-[1.18]">
              Sobot.io – All In One CRM Omnichannel
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              An omnichannel AI chatbot helps automate customer service, improve operational efficiency, and cut costs by up to 50%, with ISO 27001, ISO 9001 certification support, GDPR compliance, and is registered as a PSE Kominfo to ensure security, quality, and regulatory compliance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Free Consultation Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a182c] via-[#0d2244] to-[#173868] shadow-2xl p-8 flex items-center justify-center border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="bg-white rounded-2xl px-8 py-5 shadow-2xl flex flex-col items-center justify-center border border-slate-100 z-10 w-48 h-28 relative">
                <div className="w-16 h-4 mb-1 flex items-center justify-center">
                  <svg viewBox="0 0 80 20" className="w-full h-full" fill="none">
                    <path d="M 5 18 Q 40 -5 75 18" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-3xl font-black tracking-tight text-[#00A896] font-sans leading-none">
                  Sobot
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. SECTION: Best AI */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Best AI, providing human-like service with 80% automation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              LLMs, Human-like conversations, Omnichannel, High resolution with low hallucinations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div
                onClick={() => setActiveTab('agent')}
                className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer border ${
                  activeTab === 'agent' ? 'bg-[#0a182c] text-white shadow-xl border-slate-800' : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeTab === 'agent' ? 'bg-white/10 text-cyan-400' : 'bg-slate-100 text-blue-600'}`}>
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-base">AI Agent</h3>
                    <p className={`text-xs leading-relaxed ${activeTab === 'agent' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Based on advanced LLMs, the best conversational AI features with human-like sales and support skills 24/7 across all your channels.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold pt-1 ${activeTab === 'agent' ? 'text-cyan-400 hover:underline' : 'text-blue-600 hover:underline'}`}>
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setActiveTab('chatbot')}
                className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer border ${
                  activeTab === 'chatbot' ? 'bg-[#0a182c] text-white shadow-xl border-slate-800' : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeTab === 'chatbot' ? 'bg-white/10 text-cyan-400' : 'bg-slate-100 text-blue-600'}`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-base">Chatbot</h3>
                    <p className={`text-xs leading-relaxed ${activeTab === 'chatbot' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Deliver faster and more personalized customer experiences with an AI-powered chatbot. Boost team efficiency and drive your business forward.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold pt-1 ${activeTab === 'chatbot' ? 'text-cyan-400 hover:underline' : 'text-blue-600 hover:underline'}`}>
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setActiveTab('voice')}
                className={`rounded-3xl p-6 transition-all duration-300 cursor-pointer border ${
                  activeTab === 'voice' ? 'bg-[#0a182c] text-white shadow-xl border-slate-800' : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeTab === 'voice' ? 'bg-white/10 text-cyan-400' : 'bg-slate-100 text-blue-600'}`}>
                    <Mic className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-base">Voice AI</h3>
                    <p className={`text-xs leading-relaxed ${activeTab === 'voice' ? 'text-slate-300' : 'text-slate-500'}`}>
                      Unlock scalable engagement via voice AI. Voicebot can handle sophisticated interactions and transfer inbound/outbound calls from AI to human agents.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold pt-1 ${activeTab === 'voice' ? 'text-cyan-400 hover:underline' : 'text-blue-600 hover:underline'}`}>
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[480px] bg-[#f0f8ff] rounded-[32px] p-4 sm:p-6 border border-slate-200/80 shadow-inner flex items-center justify-center relative overflow-hidden">
                <video
                  key={aiVideoMap[activeTab]}
                  src={aiVideoMap[activeTab]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* 3. SECTION: Best Contact Center */}
        <div className="bg-[#0a182c] rounded-[36px] shadow-2xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden border border-slate-800">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 text-white">
              Best Contact Center, maksimalkan produktivitas agen
            </h2>
            <p className="text-xs sm:text-sm text-cyan-400 font-semibold tracking-wider uppercase">
              Omnichannel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 bg-[#132644] rounded-3xl p-6 border border-slate-700 shadow-xl overflow-hidden flex items-center justify-center">
              <video
                key={contactVideoMap[activeContactTab]}
                src={contactVideoMap[activeContactTab]}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              
              <div
                onClick={() => setActiveContactTab('livechat')}
                className={`rounded-3xl p-5 transition-all duration-300 cursor-pointer border ${
                  activeContactTab === 'livechat' ? 'bg-white text-slate-900 shadow-xl border-white' : 'bg-[#132644] text-white hover:bg-[#183156] border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeContactTab === 'livechat' ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-cyan-400'}`}>
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base">Live Chat</h3>
                    <p className={`text-xs mt-1 ${activeContactTab === 'livechat' ? 'text-slate-600' : 'text-slate-300'}`}>
                      Satukan chat lintas kanal dengan routing cerdas dan kolaborasi agen.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold pt-2 ${activeContactTab === 'livechat' ? 'text-blue-600' : 'text-cyan-400'}`}>
                      <span>Pelajari Lebih Lanjut &rarr;</span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setActiveContactTab('voice')}
                className={`rounded-3xl p-5 transition-all duration-300 cursor-pointer border ${
                  activeContactTab === 'voice' ? 'bg-white text-slate-900 shadow-xl border-white' : 'bg-[#132644] text-white hover:bg-[#183156] border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeContactTab === 'voice' ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-cyan-400'}`}>
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base">Voice</h3>
                    <p className={`text-xs mt-1 ${activeContactTab === 'voice' ? 'text-slate-600' : 'text-slate-300'}`}>
                      Inbound/outbound, IVR, perekaman, analitik, serta AI copilot untuk agen.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold pt-2 ${activeContactTab === 'voice' ? 'text-blue-600' : 'text-cyan-400'}`}>
                      <span>Pelajari Lebih Lanjut &rarr;</span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setActiveContactTab('ticketing')}
                className={`rounded-3xl p-5 transition-all duration-300 cursor-pointer border ${
                  activeContactTab === 'ticketing' ? 'bg-white text-slate-900 shadow-xl border-white' : 'bg-[#132644] text-white hover:bg-[#183156] border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeContactTab === 'ticketing' ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-cyan-400'}`}>
                    <Ticket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base">Ticketing</h3>
                    <p className={`text-xs mt-1 ${activeContactTab === 'ticketing' ? 'text-slate-600' : 'text-slate-300'}`}>
                      Pelacakan end-to-end, SLA, otomatisasi, dan kolaborasi lintas tim.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold pt-2 ${activeContactTab === 'ticketing' ? 'text-blue-600' : 'text-cyan-400'}`}>
                      <span>Pelajari Lebih Lanjut &rarr;</span>
                    </span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setActiveContactTab('whatsapp')}
                className={`rounded-3xl p-5 transition-all duration-300 cursor-pointer border ${
                  activeContactTab === 'whatsapp' ? 'bg-white text-slate-900 shadow-xl border-white' : 'bg-[#132644] text-white hover:bg-[#183156] border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${activeContactTab === 'whatsapp' ? 'bg-emerald-50 text-emerald-600' : 'bg-white/10 text-cyan-400'}`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base">WhatsApp API</h3>
                    <p className={`text-xs mt-1 ${activeContactTab === 'whatsapp' ? 'text-slate-600' : 'text-slate-300'}`}>
                      WA resmi untuk layanan, notifikasi, dan kampanye pemasaran.
                    </p>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-bold pt-2 ${activeContactTab === 'whatsapp' ? 'text-emerald-600' : 'text-cyan-400'}`}>
                      <span>Pelajari Lebih Lanjut &rarr;</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4. SECTION: Solutions for Various Industries */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-10">
          
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight">
              Solutions for Various Industries
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-bold text-slate-500">
              {[
                { id: 'retail', label: 'Retail & E-commerce' },
                { id: 'financial', label: 'Financial Services' },
                { id: 'gaming', label: 'Gaming' },
                { id: 'education', label: 'Education' },
                { id: 'enterprise', label: 'Enterprise Services' },
                { id: 'life', label: 'Life Services' },
              ].map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIndustry(ind.id as any)}
                  className={`px-4 py-2 rounded-full transition cursor-pointer ${
                    activeIndustry === ind.id
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  {currentIndustry.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0c1f3d]">
                    {currentIndustry.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{currentIndustry.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                {currentIndustry.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <strong className="text-slate-900 block mb-0.5">{feat.title}</strong>
                      <p className="text-slate-500">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[420px] bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center relative min-h-[280px]">
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 p-2.5 rounded-full shadow-xs">
                  <span className="text-xs font-bold">📢 Solution</span>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto flex items-center justify-center text-3xl">🚀</div>
                  <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200 inline-block">
                    <p className="text-xs font-extrabold text-slate-800">{currentIndustry.illustrationTitle}</p>
                  </div>
                  <p className="text-[11px] text-slate-400">Automated workflow active for {currentIndustry.title}.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 5. SECTION: Cover All Engagement Scenarios & ROI */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Cover All Engagement Scenarios
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#f0fdf4] rounded-3xl p-8 border border-emerald-100 flex flex-col justify-between gap-6 shadow-xs">
              <div className="space-y-3">
                <h3 className="text-xl font-black text-[#0c1f3d]">AI & Automation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sobot AI, like the best agent, instantly handles complex inquiries across all customer touchpoints. It can also build AI workflows that enable you to support your customers at scale, as well as free your team for more complicated and important work.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline pt-1">
                  <span>Explore AI &rarr;</span>
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 text-xs font-semibold text-slate-700 flex items-center justify-between">
                <span>Pre-Purchase • Purchase • Post-Purchase</span>
              </div>
            </div>

            <div className="bg-[#f0fdf4] rounded-3xl p-8 border border-emerald-100 flex flex-col justify-between gap-6 shadow-xs">
              <div className="space-y-3">
                <h3 className="text-xl font-black text-[#0c1f3d]">Omnichannel Services</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Centralize all your support channels, customer conversations and bring all your tools together in one AI-powered contact center platform.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline pt-1">
                  <span>Explore Omnichannel &rarr;</span>
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex items-center gap-3">
                <span className="text-xs font-bold text-slate-800">WhatsApp, Email, Instagram, Live Chat</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 space-y-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight">
                Maximize Return on Investment
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              <div className="bg-[#f0fdf4] p-6 rounded-2xl border border-emerald-100 shadow-xs space-y-2">
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Increase Conversion</p>
                <h4 className="text-2xl font-black text-emerald-900">+38%</h4>
                <p className="text-[11px] text-slate-600">Konversi meningkat di setiap tahap customer journey.</p>
              </div>

              <div className="bg-[#fefce8] p-6 rounded-2xl border border-amber-100 shadow-xs space-y-2">
                <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Improve NPS</p>
                <h4 className="text-2xl font-black text-amber-900">35%</h4>
                <p className="text-[11px] text-slate-600">Pengalaman pelanggan lebih personal dan memuaskan.</p>
              </div>

              <div className="bg-[#eff6ff] p-6 rounded-2xl border border-blue-100 shadow-xs space-y-2">
                <p className="text-[10px] font-bold text-blue-800 uppercase tracking-wider">Resolution Time</p>
                <h4 className="text-2xl font-black text-blue-900">&lt;1 minute</h4>
                <p className="text-[11px] text-slate-600">Workflow cerdas hasil kombinasi AI + manusia.</p>
              </div>

              <div className="bg-[#ccfbf1] p-6 rounded-2xl border border-teal-100 shadow-xs space-y-2">
                <p className="text-[10px] font-bold text-teal-800 uppercase tracking-wider">ROI</p>
                <h4 className="text-2xl font-black text-teal-900">234%</h4>
                <p className="text-[11px] text-slate-600">Tingkatkan pengembalian dari setiap investasi Anda.</p>
              </div>

              <div className="bg-[#f3e8ff] p-6 rounded-2xl border border-purple-100 shadow-xs space-y-2">
                <p className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">Improve Efficiency</p>
                <h4 className="text-2xl font-black text-purple-900">60%</h4>
                <p className="text-[11px] text-slate-600">Kurangi beban kerja dengan AI Copilot otomatis.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 6. SECTION: CTA BANNER */}
        <div className="relative w-full rounded-[36px] overflow-hidden bg-gradient-to-r from-[#0d2244] via-[#102750] to-[#12233f] shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white border border-slate-800">
          <div className="space-y-4 max-w-lg z-10 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight">
              Want to try Sobot.io?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Contact us for a consultation, free demo, and 15-day trial for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0c1f3d] font-bold text-xs sm:text-sm px-6.5 py-3.5 rounded-xl shadow-md transition hover:scale-105 active:scale-95"
            >
              Consultation & Get Free Demo
            </Link>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[380px] h-[220px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                alt="Sobot Representatives"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
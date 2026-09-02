"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Trophy, 
  Handshake, 
  Zap, 
  TrendingUp, 
  Leaf, 
  Mail 
} from "lucide-react";

export default function AboutPage() {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMore = () => {
    setShowDetails(true);
    setTimeout(() => {
      const element = document.getElementById("details-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const coreValues = [
    {
      icon: <Users className="w-5 h-5 text-amber-400" />,
      title: "Client-Centric",
      desc: "Designing solutions based on each client's specific needs and expectations."
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      title: "Innovation",
      desc: "Driving technological breakthroughs for relevant and adaptive solutions."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "Integrity",
      desc: "Maintaining trust through transparency, ethics, and commitment."
    },
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      title: "Excellence",
      desc: "Delivering the best results through professionalism and high standards."
    },
    {
      icon: <Handshake className="w-5 h-5 text-amber-400" />,
      title: "Collaboration",
      desc: "Building strong synergy with clients, partners, and internal teams."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Agility",
      desc: "Responding quickly to changing market and technology needs."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
      title: "Impact",
      desc: "Focusing on tangible results that enhance business value and efficiency."
    },
    {
      icon: <Leaf className="w-5 h-5 text-amber-400" />,
      title: "Sustainability",
      desc: "Prioritizing sustainable solutions for the future of the organization."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between scroll-smooth">
      <div>
        {/* HERO BANNER SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 bg-slate-900 border-b border-slate-800/80">
          <div className="relative min-h-[380px] lg:min-h-[560px] w-full overflow-hidden flex items-center justify-center p-8 bg-slate-950">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 opacity-80"
              style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/40 to-slate-950/90 lg:to-slate-950" />

            <div className="relative z-10 flex items-center justify-center p-6 bg-slate-950/40 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Prima Services Logo"
                className="h-auto w-64 md:w-80 lg:w-96 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          <div className="relative p-8 md:p-12 lg:p-14 flex flex-col justify-center items-start bg-slate-950 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-5 mix-blend-screen pointer-events-none bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('https://svgsilh.com/svg/306338.svg')" }}
            />

            <div className="relative z-10 w-full max-w-xl">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-3 block">
                Tentang Kami
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
                ABOUT TEKNOLOKA PRIMA SERVICES
              </h1>
              
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                PT. Teknoloka Prima Services is a strategic technology and business partner providing end-to-end services from consulting, development, integration, to ongoing support. We help companies across industries accelerate digital transformation and enhance competitiveness through secure, innovative, and measurable solutions. Supported by a multidisciplinary expert team and official partnerships with Google and Sobot.io, we are committed to delivering tangible value that drives sustainable business growth.
              </p>

              {/* VISION & MISSION */}
              <div className="bg-[#0b0f19]/90 border border-slate-800/80 rounded-xl p-5 mb-6 shadow-lg backdrop-blur-sm w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center relative">
                  
                  <div className="text-center sm:text-left sm:pr-2">
                    <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">
                      Vision
                    </h3>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      Human-centered, agile, and trustworthy operations at every customer touchpoint.
                    </p>
                  </div>

                  <div className="hidden sm:block absolute left-1/2 top-1 bottom-1 w-[1px] bg-slate-800 -translate-x-1/2" />
                  <div className="block sm:hidden w-full h-[1px] bg-slate-800 my-1" />

                  <div className="text-center sm:text-left sm:pl-2">
                    <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">
                      Mission
                    </h3>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      Combine deployment-ready teams, concise playbooks, and practical tools so outcomes improve without adding complexity.
                    </p>
                  </div>

                </div>
              </div>

              {/* BUTTON LEARN MORE */}
              <button 
                onClick={handleLearnMore}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3 rounded text-xs tracking-wider uppercase transition shadow-lg inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* DETAILS SECTION */}
        {showDetails && (
          <div id="details-section" className="pt-6 animate-fadeIn transition-all duration-500">
            
            {/* OUR CORE VALUES */}
            <section className="max-w-6xl mx-auto px-6 py-16">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Our Core Values
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-[#0b0f19] border border-slate-800/80 rounded-xl p-5 hover:border-amber-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* OUR TEAM */}
            <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Our Team
                </h2>
              </div>

              <div className="bg-[#0b0f19] border border-slate-800/80 rounded-2xl p-6 md:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                <div className="md:col-span-5 relative w-full h-[360px] md:h-[400px] rounded-xl overflow-hidden border border-slate-700/50 shadow-md bg-slate-900 flex items-center justify-center p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/mita.jpeg" 
                    alt="Eufrasia Primita Ardani"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                <div className="md:col-span-7 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Eufrasia Primita Ardani
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-4">
                    Co-Founder & Business Strategist at Teknoloka
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    With over a decade of experience in market research, marketing strategy, and business development.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Started her career in 2009 at Nielsen, building a reputation as a leader who understands consumer behavior.
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    At Teknoloka, she drives strategy and partner relations to deliver relevant and ethical technology.
                  </p>

                  <div className="border-l-2 border-amber-500 pl-4 py-1 mb-6 bg-slate-900/50 rounded-r-lg">
                    <p className="text-xs italic text-slate-200">
                      "Building a business is not just about hitting targets, but fostering trust that creates long-term impact."
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* BUTTON LINKEDIN YANG DIUBAH */}
                    <a 
                      href="https://www.linkedin.com/in/eufrasia-ardani-52904168?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition shadow-md"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.66a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <Link 
                      href="/contact"
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact Us</span>
                    </Link>
                    
                    <div className="ml-auto bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="/images/logo.png" 
                        alt="Prima Services Logo" 
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* OUR TRUSTED PARTNERS */}
            <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                Our Trusted Partners
              </h2>
              <p className="text-xs text-slate-400 max-w-lg mx-auto mb-12">
                Who we work with us for the technology ecosystem, Stronger together product + enablement + local execution
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center bg-[#0b0f19] border border-slate-800/80 rounded-2xl p-8 md:p-12 shadow-xl">
                
                {/* 1. GOOGLE PARTNER LOGO */}
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-9 h-9" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                  <span className="text-slate-200 text-lg font-medium tracking-tight mb-3">Google Partner</span>
                  
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 87.3 78" className="w-4 h-4">
                        <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z" fill="#0066DA"/>
                        <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L1.2 51.5c-.8 1.4-1.2 2.95-1.2 4.5h27.5L43.65 25z" fill="#00AC47"/>
                        <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l5.4-9.35c.8-1.4 1.2-2.95 1.2-4.5H55.95l17.6 30.55c1.35 0 2.9-.4 4.35-1.25z" fill="#EA4335"/>
                        <path d="M43.65 25L57.4 1.2c-1.35-.8-2.9-1.2-4.45-1.2H34.35c-1.55 0-3.1.4-4.45 1.2L43.65 25z" fill="#00832D"/>
                        <path d="M55.95 56H27.5L13.75 79.8c1.35.8 2.9 1.2 4.45 1.2h50.9c1.55 0 3.1-.4 4.45-1.2L55.95 56z" fill="#2684FC"/>
                        <path d="M73.55 25L59.8 1.2c-1.35.8-2.5 1.9-3.3 3.3L38.9 56h27.5l16.9-29.2c.8-1.4 1.2-2.95 1.2-4.5s-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
                      </svg>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="#4285F4" d="M1.5 19.5v-13l9 6.75 9-6.75v13h-18z" opacity="0"/>
                        <path fill="#4285F4" d="M22.5 5.5l-10.5 7.875L1.5 5.5V18.5c0 .828.672 1.5 1.5 1.5h2v-9l7 5.25 7-5.25v9h2c.828 0 1.5-.672 1.5-1.5V5.5z"/>
                        <path fill="#EA4335" d="M12 13.375L1.5 5.5h21L12 13.375z"/>
                        <path fill="#FBBC04" d="M1.5 5.5v1.75l10.5 7.875 10.5-7.875V5.5c0-.828-.672-1.5-1.5-1.5h-18c-.828 0-1.5.672-1.5 1.5z"/>
                        <path fill="#C5221F" d="M21 4H3C2.17 4 1.5 4.67 1.5 5.5v.75l10.5 7.875L22.5 6.25V5.5c0-.83-.67-1.5-1.5-1.5z"/>
                      </svg>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="#00832D" d="M12 11.5l3.5 2.5v-7L12 9.5v2z"/>
                        <path fill="#00AC47" d="M4 6.5C4 5.67 4.67 5 5.5 5H13v6.5H4V6.5z"/>
                        <path fill="#0066DA" d="M4 11.5h9V18H5.5C4.67 18 4 17.33 4 16.5v-5z"/>
                        <path fill="#EA4335" d="M13 5h4.5c.83 0 1.5.67 1.5 1.5v3.5L13 7.5V5z"/>
                        <path fill="#FFBA00" d="M13 11.5l6 2.5v3.5c0 .83-.67 1.5-1.5 1.5H13v-7.5z"/>
                      </svg>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                        <path fill="#EA4335" d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 2. MIITEL LOGO */}
                <div className="flex items-center justify-center p-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-6 bg-cyan-400 rounded-full inline-block"></span>
                      <span className="w-1.5 h-9 bg-cyan-400 rounded-full inline-block"></span>
                      <span className="w-1.5 h-4 bg-cyan-400 rounded-full inline-block"></span>
                      <span className="w-1.5 h-7 bg-cyan-400 rounded-full inline-block"></span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white ml-1">MiiTel</span>
                  </div>
                </div>

                {/* 3. SOBOT LOGO */}
                <div className="flex flex-col items-center justify-center p-2">
                  <div className="relative">
                    <div className="w-16 h-4 border-t-4 border-amber-400 rounded-t-full mx-auto mb-[-6px]"></div>
                    <span className="text-3xl font-extrabold text-teal-400 tracking-tight">Sobot</span>
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}
      </div>
    </div>
  );
}
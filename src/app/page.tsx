"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Zap, PhoneCall, Globe, ArrowRight } from "lucide-react";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  const [beStatus, setBeStatus] = useState<string>("Checking...");

  // Cek koneksi ke FastAPI Python Backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/info")
      .then((res) => res.json())
      .then((data) => setBeStatus(`Connected (${data.project_name})`))
      .catch(() => setBeStatus("Offline"));
  }, []);

  // Data slide untuk Hero Section
  const heroSlides = [
    {
      title: "OPS SERVICES AND TALENT MANAGEMENT",
      subtitle: "PEOPLE • PROCESS • TOOLS, ALIGNED FOR REAL RESULTS",
      description:
        "Prima Services helps companies in Indonesia accelerate growth with integrated, secure, and innovative ops services and talent management solutions.",
    },
    {
      title: "BUSINESS PROCESS OUTSOURCING",
      subtitle: "GLOBAL STANDARDS • LOCAL EXPERTISE",
      description:
        "Empowering businesses with robust operational support, strategic management, and specialized BPO solutions tailored to scale your operations.",
    },
    {
      title: "INNOVATIVE INFRASTRUCTURE SUPPORT",
      subtitle: "SCALABLE • RELIABLE • SECURE",
      description:
        "Transforming work processes through end-to-end tech-enabled operations, optimizing efficiency, and driving sustainable business growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      <div>
        {/* Indicator status backend */}
        <div className="bg-[#030712] text-xs text-slate-400 px-4 py-2 text-right border-b border-slate-900 z-20 relative">
          Backend Status:{" "}
          <span className={beStatus.includes("Connected") ? "text-green-400 font-semibold" : "text-yellow-400"}>
            {beStatus}
          </span>
        </div>

        {/* TOP BAR / SLIDER HERO SECTION WITH VIDEO BACKGROUND */}
        <section className="relative overflow-hidden min-h-[480px]">
          {/* VIDEO BACKGROUND */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            Browser kamu tidak mendukung tag video.
          </video>

          {/* OVERLAY GELAP */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

          {/* KONTEN SWIPER */}
          <div className="relative z-20">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full hero-swiper"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="min-h-[480px] flex flex-col justify-center items-center text-center px-6 py-16">
                    <div className="max-w-4xl mx-auto flex flex-col items-center">
                      
                      {/* LOGO PRIMA SERVICES */}
                      <div className="mb-6 drop-shadow-lg">
                        <Image
                          src="/images/logo.png"
                          alt="Prima Services Logo"
                          width={240}
                          height={80}
                          className="h-auto w-48 md:w-60 object-contain"
                          priority
                        />
                      </div>

                      <h1 className="text-3xl md:text-5xl font-black tracking-wide uppercase leading-tight mb-4 text-white drop-shadow">
                        {slide.title}
                      </h1>
                      <p className="text-blue-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-6 drop-shadow">
                        {slide.subtitle}
                      </p>
                      <p className="text-slate-200 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-4 font-normal drop-shadow">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* WELCOME SECTION DENGAN BACKGROUND IMAGE */}
        <section className="relative bg-slate-950 py-20 px-6 border-b border-slate-900 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-0" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              WELCOME TO
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Prima Services
            </h2>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-medium mb-4 max-w-3xl mx-auto">
              Prima Services helps companies in Indonesia accelerate growth with integrated, secure, and innovative ops services and talent management solutions.
            </p>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-8 max-w-3xl mx-auto font-normal">
              We are a dependable partner capable of catering to individual business needs as well as larger corporation requirements. Our dedicated team works hard to maintain long-lasting relationships with our clients by ensuring that we are attentive to their operational needs.
            </p>
            
            <div className="flex justify-center gap-4">
              <Link 
                href="/about" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3 rounded text-xs tracking-wider uppercase transition shadow-lg"
              >
                LEARN MORE
              </Link>
              <Link 
                href="/contact" 
                className="border border-slate-700 hover:border-slate-400 text-white font-semibold px-7 py-3 rounded text-xs tracking-wider uppercase transition bg-slate-900/50 backdrop-blur-sm"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>

        {/* SPLIT FEATURED BANNER (ENHANCED OPS & INFRASTRUCTURE SECTION) */}
        <section className="grid grid-cols-1 md:grid-cols-2 bg-slate-900 text-white border-b border-slate-900">
          
          {/* SISI KIRI: OPS & INFRASTRUCTURE SUPPORT WITH GLOW & BACKGROUND */}
          <div className="relative min-h-[300px] flex items-center justify-center p-10 border-r border-slate-800/80 overflow-hidden bg-slate-950 group">
            {/* Background pattern & overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950/30 to-slate-950 z-0" />
            
            {/* Dynamic Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

            <div className="relative z-10 text-center flex flex-col items-center">
              {/* Animated Glow Icon */}
              <div className="relative mb-5">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-20 h-20 rounded-full bg-slate-900/90 border border-blue-500/40 flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <Globe className="w-9 h-9 text-blue-400 animate-pulse" />
                </div>
              </div>

              {/* Title & Badge */}
              <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-2">
                CORE INFRASTRUCTURE
              </span>
              <h4 className="text-lg md:text-xl font-extrabold text-white tracking-wide">
                Ops & Infrastructure Support
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mt-2 leading-relaxed">
                Reliable tech-enabled operations & enterprise-grade infrastructure.
              </p>
            </div>
          </div>

          {/* SISI KANAN: BPO DESCRIPTION */}
          <div className="p-10 md:p-14 flex flex-col justify-center items-start bg-slate-950 relative z-10">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-3 text-white">
              Business Process Outsourcing (BPO)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Our team is trained to handle international & local operational standards, giving you peace of mind to focus on large-scale core business growth.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Our end-to-end coverage, in-depth analysis, and knowledge of various tech stacks give us the title of experts in strategic process management and talent placement.
            </p>
            <Link 
              href="/services" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded text-xs tracking-wider uppercase transition flex items-center gap-2 group shadow-lg"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </section>

        {/* 3 COLUMN BOTTOM CARDS SECTION */}
        <section className="bg-slate-950 py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Purple Gradient Icon */}
            <div className="bg-[#0b0f19] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl hover:border-purple-500/50 transition-all duration-300 flex flex-col group">
              <div className="bg-slate-900/50 py-12 flex items-center justify-center border-b border-slate-800/60 group-hover:bg-purple-950/20 transition duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.25)] group-hover:scale-110 transition duration-300">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-3">
                    ABOUT PRIMA SERVICES
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    We are a dependable and reliable operations partner capable of catering to individual personal needs as well as larger corporation requirements.
                  </p>
                </div>
                <Link 
                  href="/about" 
                  className="text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-wider flex items-center gap-1 transition"
                >
                  READ MORE »
                </Link>
              </div>
            </div>

            {/* Card 2 - Orange/Yellow Gradient Icon */}
            <div className="bg-[#0b0f19] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col group">
              <div className="bg-slate-900/50 py-12 flex items-center justify-center border-b border-slate-800/60 group-hover:bg-amber-950/20 transition duration-300">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.25)] group-hover:scale-110 transition duration-300">
                  <Zap className="w-8 h-8 text-amber-400 fill-amber-400/20" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-3">
                    OUR SOLUTIONS
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    You may want to take a look and browse through our portfolio of services that we manage and have delivered to clients.
                  </p>
                </div>
                <Link 
                  href="/services" 
                  className="text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-wider flex items-center gap-1 transition"
                >
                  READ MORE »
                </Link>
              </div>
            </div>

            {/* Card 3 - Pink/Rose Gradient Icon */}
            <div className="bg-[#0b0f19] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl hover:border-pink-500/50 transition-all duration-300 flex flex-col group">
              <div className="bg-slate-900/50 py-12 flex items-center justify-center border-b border-slate-800/60 group-hover:bg-pink-950/20 transition duration-300">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center shadow-[0_0_25px_rgba(236,72,153,0.25)] group-hover:scale-110 transition duration-300">
                  <PhoneCall className="w-8 h-8 text-pink-400" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-3">
                    CONTACT US
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    If you have any inquiries about our services, or wish to get in touch with our staff, please feel free to contact us now.
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="text-xs font-bold text-[#f59e0b] hover:text-amber-400 uppercase tracking-wider flex items-center gap-1 transition"
                >
                  READ MORE »
                </Link>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lightbulb, 
  Handshake, 
  Zap, 
  Trophy,
  Server,
  Building2,
  Clock,
  Code,
  Laptop,
  Users,
  Wifi,
  HelpCircle,
  Target,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Globe2,
  TrendingUp,
  Quote,
  Award
} from "lucide-react";

interface CoreValue {
  id: string | number;
  key: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
}

interface Facility {
  id: string | number;
  icon: string;
  colorClass: string;
  text: string;
}

const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className={className} />,
    Lightbulb: <Lightbulb className={className} />,
    Handshake: <Handshake className={className} />,
    Zap: <Zap className={className} />,
    Trophy: <Trophy className={className} />,
    Server: <Server className={className} />,
    Building2: <Building2 className={className} />,
    Clock: <Clock className={className} />,
    Code: <Code className={className} />,
    Laptop: <Laptop className={className} />,
    Users: <Users className={className} />,
    Wifi: <Wifi className={className} />
  };

  return icons[iconName] || <HelpCircle className={className} />;
};

const DEFAULT_MISSIONS = [
  "Provide flexible, scalable, and results-driven BPO services tailored to client needs.",
  "Support companies in discovering and managing top talent through professional recruitment and headhunting services.",
  "Build and strengthen global networks across countries to unlock cross-border business opportunities.",
  "Integrate technology, data, and human resource expertise to ensure consistent performance and value creation.",
  "Maintain a client satisfaction rate above 95% through transparency, accountability, and continuous performance tracking.",
  "Develop internal talent into world-class, adaptive, and globally competitive teams.",
  "Continuously innovate work models to deliver high ROI and sustainable business efficiency for clients."
];

export default function AboutPage() {
  const [companyProfile, setCompanyProfile] = useState({
    vision: "",
    mission: "",
    address_jakarta: "",
    address_yogyakarta: "",
    phone: "",
    email: ""
  });

  const defaultValues: CoreValue[] = [
    {
      id: "integrity",
      key: "integrity",
      title: "INTEGRITY",
      desc: "Upholding honesty, transparency, and accountability in every process.",
      icon: "ShieldCheck",
      color: "bg-[#0b2545]"
    },
    {
      id: "innovation",
      key: "innovation",
      title: "INNOVATION",
      desc: "Constantly seeking new and creative ways to solve client challenges.",
      icon: "Lightbulb",
      color: "bg-[#f57c00]"
    },
    {
      id: "collaboration",
      key: "collaboration",
      title: "COLLABORATION",
      desc: "Working closely with clients as strategic partners, not just a vendor.",
      icon: "Handshake",
      color: "bg-[#2b5ba3]"
    },
    {
      id: "agility",
      key: "agility",
      title: "AGILITY",
      desc: "Responding swiftly to market changes and client needs.",
      icon: "Zap",
      color: "bg-[#0d47a1]"
    },
    {
      id: "excellence",
      key: "excellence",
      title: "EXCELLENCE",
      desc: "Delivering service quality that exceeds expectations.",
      icon: "Trophy",
      color: "bg-[#1565c0]"
    }
  ];

  const defaultFacilities: Facility[] = [
    {
      id: 1,
      icon: "ShieldCheck",
      colorClass: "text-[#0b2545]",
      text: "Information Security management is ISO 27001 certified"
    },
    {
      id: 2,
      icon: "Server",
      colorClass: "text-[#2b5ba3]",
      text: "Server room with 24 hour dedicated IT Support"
    },
    {
      id: 3,
      icon: "Building2",
      colorClass: "text-[#f57c00]",
      text: "Complete amenities etc, pantry, dining room, smoking area, praying room, relax room, transit room for agents who is ill"
    },
    {
      id: 4,
      icon: "Clock",
      colorClass: "text-[#0d47a1]",
      text: "24 hours operation and security: CCTV and Access Door"
    },
    {
      id: 5,
      icon: "Code",
      colorClass: "text-[#1565c0]",
      text: "IT Development, dedicated team ready to help client integrate the system with Teknoloka Okta Perkasa (TOP)."
    },
    {
      id: 6,
      icon: "Laptop",
      colorClass: "text-[#2b5ba3]",
      text: "Workstation equipped with Laptop/PC and Headset, Wallboard"
    },
    {
      id: 7,
      icon: "Users",
      colorClass: "text-[#0b2545]",
      text: "Online training facilities: meeting room, coaching rooms, and training room with a total of 100 seats. All occupied with WIFI"
    },
    {
      id: 8,
      icon: "Wifi",
      colorClass: "text-[#f57c00]",
      text: "Data center bandwidth 2 layers, main 100 Mbps with backup link fiberoptic and secondary 100 Mbps with backup link wireless( all dedicated)"
    },
    {
      id: 9,
      icon: "Zap",
      colorClass: "text-[#0d47a1]",
      text: "Two layers UPS and genset electrical backup, UPS capacity 10 KVA for datacenter and 600va for each workstation"
    }
  ];

  const iconMapByTitle: Record<string, string> = {
    INTEGRITY: "ShieldCheck",
    INNOVATION: "Lightbulb",
    COLLABORATION: "Handshake",
    AGILITY: "Zap",
    EXCELLENCE: "Trophy"
  };

  const colorMapByTitle: Record<string, string> = {
    INTEGRITY: "bg-[#0b2545]",
    INNOVATION: "bg-[#f57c00]",
    COLLABORATION: "bg-[#2b5ba3]",
    AGILITY: "bg-[#0d47a1]",
    EXCELLENCE: "bg-[#1565c0]"
  };

  const [coreValues, setCoreValues] = useState<CoreValue[]>(defaultValues);
  const [facilities, setFacilities] = useState<Facility[]>(defaultFacilities);
  const [activeValueKey, setActiveValueKey] = useState<string>("integrity");

  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) return;

    const animate = () => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/admin/company");
        if (res.ok) {
          const data = await res.json();
          setCompanyProfile({
            vision: data.vision || "",
            mission: data.mission || "",
            address_jakarta: data.address_jakarta || "",
            address_yogyakarta: data.address_yogyakarta || "",
            phone: data.phone || "",
            email: data.email || ""
          });
        }
      } catch (error) {
        console.error("Gagal mengambil data company profile:", error);
      }

      try {
        const resValues = await fetch("http://127.0.0.1:8000/api/v1/admin/core-values");
        if (resValues.ok) {
          const rawValues = await resValues.json();
          const dataValues = Array.isArray(rawValues) ? rawValues : (rawValues.data || rawValues.core_values || []);

          if (dataValues.length > 0) {
            const formattedValues: CoreValue[] = dataValues.map((v: any, idx: number) => {
              const titleUpper = (v.title || v.name || "").toUpperCase().trim();
              const keyName = v.key || titleUpper.toLowerCase().replace(/\s+/g, "-") || `val-${idx}`;
              
              return {
                id: v.id || idx,
                key: keyName,
                title: titleUpper,
                desc: v.desc || v.description || v.content || v.detail || "",
                icon: v.icon || v.icon_name || iconMapByTitle[titleUpper] || "ShieldCheck",
                color: v.color || colorMapByTitle[titleUpper] || "bg-[#2b5ba3]"
              };
            });

            setCoreValues(formattedValues);
            if (formattedValues[0]?.key) {
              setActiveValueKey(formattedValues[0].key);
            }
          }
        }
      } catch (error) {
        console.error("Gagal mengambil data core values:", error);
      }

      try {
        const resFacilities = await fetch("http://127.0.0.1:8000/api/v1/admin/facilities");
        if (resFacilities.ok) {
          const rawFacilities = await resFacilities.json();
          const dataFacilities = Array.isArray(rawFacilities) ? rawFacilities : (rawFacilities.data || []);

          if (dataFacilities.length > 0) {
            const formattedFacilities: Facility[] = dataFacilities.map((f: any, idx: number) => ({
              id: f.id || idx,
              icon: f.icon || f.icon_name || "ShieldCheck",
              colorClass: f.colorClass || f.color_class || "text-[#0b2545]",
              text: f.text || f.description || f.title || ""
            }));
            setFacilities(formattedFacilities);
          }
        }
      } catch (error) {
        console.error("Gagal mengambil data facilities:", error);
      }
    };

    fetchAllData();
  }, []);

  const activeValueData = coreValues.find((v) => v.key === activeValueKey) || coreValues[0];

  const missionList = companyProfile.mission
    ? companyProfile.mission
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
        .map((item) => item.replace(/^\d+[\.\)]\s*/, ""))
    : DEFAULT_MISSIONS;

  const renderPartnerLogos = useCallback(() => (
    <>
      <div className="flex flex-col items-center justify-center min-w-[140px]">
        <div className="mb-1">
          <svg className="w-10 h-10" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>
        <span className="text-[#5f6368] text-sm font-bold tracking-tight">Google Partner</span>
      </div>

      <div className="flex items-center justify-center min-w-[140px]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-5 bg-[#21a8eb] rounded-full inline-block"></span>
            <span className="w-1.5 h-8 bg-[#21a8eb] rounded-full inline-block"></span>
            <span className="w-1.5 h-3 bg-[#21a8eb] rounded-full inline-block"></span>
            <span className="w-1.5 h-7 bg-[#21a8eb] rounded-full inline-block"></span>
          </div>
          <span className="text-2xl font-black tracking-tight text-[#2d3748]">MiiTel</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-w-[140px]">
        <div className="relative">
          <div className="w-12 h-3 border-t-4 border-[#ffbe00] rounded-t-full mx-auto mb-[-4px]"></div>
          <span className="text-2xl font-black text-[#00a896] tracking-tight">Sobot</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-w-[140px]">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 fill-[#EE4D2D]" viewBox="0 0 24 24">
            <path d="M19.27 8.35h-3.21a4.06 4.06 0 0 0-8.12 0H4.73A1.73 1.73 0 0 0 3 10.08v9.19A1.73 1.73 0 0 0 4.73 21h14.54A1.73 1.73 0 0 0 21 19.27v-9.19a1.73 1.73 0 0 0-1.73-1.73zm-7.27-4a2.56 2.56 0 0 1 2.55 2.5h-5.1a2.56 2.56 0 0 1 2.55-2.5zm4.8 10.74a4.11 4.11 0 0 1-2.61 1.23c-.37.03-.7-.18-.75-.52a.51.51 0 0 1 .42-.58c1.07-.15 1.83-.56 1.83-1.34 0-.82-.87-1.16-2-1.44l-.27-.07c-1.32-.33-2.62-.66-2.62-2.12 0-1.28 1.1-2.07 2.65-2.17a3.87 3.87 0 0 1 2.3.82.51.51 0 0 1 .08.71.5.5 0 0 1-.71.09 2.87 2.87 0 0 0-1.68-.61c-1-.02-1.65.41-1.65 1.13 0 .74.83 1.05 1.92 1.32l.28.07c1.39.34 2.69.7 2.69 2.18 0 1.25-1 2.08-2.69 2.2z"/>
          </svg>
          <span className="text-2xl font-black text-[#EE4D2D] tracking-tight">Shopee</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-w-[140px]">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 fill-black" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.08a8.2 8.2 0 0 0 4.81 1.53v-3.7a4.85 4.85 0 0 1-0.9-.22z"/>
          </svg>
          <span className="text-2xl font-black text-black tracking-tight">TikTok</span>
        </div>
      </div>
    </>
  ), []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-[#2b5ba3] selection:text-white">
      <div>
        
        {/* MAIN CONTAINER */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-20 w-full">
          
          {/* HERO / ABOUT US */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f5ff] via-slate-50 to-blue-50/50 rounded-3xl p-8 md:p-14 border border-blue-100/80 shadow-xs">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 border border-blue-200 text-[#2b5ba3] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  About Teknoloka Prima Services
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Accelerating Scale.<br />
                  <span className="bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00] bg-clip-text text-transparent">
                    Unlocking Global Talent.
                  </span>
                </h1>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                  Established in 2025, PT Teknoloka Prima Service was founded to answer the growing demand for flexible, innovative, and results-driven business solutions. We specialize in Business Process Outsourcing (BPO), Recruitment & Headhunter Services, and Global Outsourcing.
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                  Backed by senior professionals with more than 15 years of proven expertise in BPO operations, recruitment strategy, process management, and technology-driven outsourcing, we bring deep expertise across multiple business industries.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <Globe2 className="w-4 h-4 text-[#2b5ba3]" />
                    Global Reach
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <Layers className="w-4 h-4 text-[#f57c00]" />
                    End-to-End Solutions
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    High Growth ROI
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-[440px] h-[340px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#1b2a47] group">
                  <img
                    src="/images/about-team.png"
                    alt="Teknoloka Prima Services Team"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                    <p className="text-xs font-semibold tracking-wide uppercase text-blue-200">Our Strategic Expertise</p>
                    <p className="text-sm font-bold mt-0.5">Empowering Businesses Across Regions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* VISION & MISSION SECTION */}
          <section className="space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#2b5ba3] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 inline-block shadow-xs">
                Strategic Foundation
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Driven by Vision, Powered by Mission
              </h2>
              <p className="text-slate-500 text-xs md:text-sm font-normal">
                Our core purpose and operational commitments driving sustainable growth for partners worldwide.
              </p>
            </div>

            <div className="space-y-8">
              <div className="relative rounded-3xl bg-gradient-to-r from-[#0b2545] via-[#1b365d] to-[#2b5ba3] p-8 md:p-14 text-white overflow-hidden shadow-2xl border border-blue-900/30">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-blue-200 border border-white/20 shadow-inner">
                        <Compass className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-blue-200 uppercase">Our Vision Statement</span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-black leading-tight text-white tracking-tight">
                      &quot;Building the Future of Strategic Partnerships in Southeast Asia&quot;
                    </h3>

                    <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light max-w-3xl">
                      {companyProfile.vision || "To be the most innovative and trusted strategic partner in Southeast Asia for Business Process Outsourcing (BPO), Recruitment & Headhunter, and Global Outsourcing, backed by strong global connections to deliver high-impact business solutions."}
                    </p>
                  </div>

                  <div className="lg:col-span-4 grid grid-cols-2 gap-4 pt-4 lg:pt-0 lg:border-l border-white/15 lg:pl-8">
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-1 hover:bg-white/20 transition-all">
                      <span className="text-3xl md:text-4xl font-black text-white block">95%+</span>
                      <span className="text-[11px] text-blue-200 font-bold uppercase tracking-wider">Client Satisfaction</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-1 hover:bg-white/20 transition-all">
                      <span className="text-3xl md:text-4xl font-black text-white block">SEA</span>
                      <span className="text-[11px] text-blue-200 font-bold uppercase tracking-wider">Regional Focus</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-white to-slate-50/80 rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-md space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#2b5ba3] text-white rounded-2xl shadow-md">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">Our Mission Pillars</h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">Core action items guiding our everyday operations</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 self-start sm:self-auto">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {missionList.filter((item) => item && item.trim().length > 3).length} Strategic Goals
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {missionList
                    .filter((item) => item && item.trim().length > 3)
                    .map((item, index) => {
                      const num = String(index + 1).padStart(2, "0");

                      return (
                        <div
                          key={index}
                          className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-200 group-hover:bg-gradient-to-b group-hover:from-[#1b365d] group-hover:to-[#2b5ba3] transition-all duration-300" />
                          
                          <div className="space-y-4 pl-2">
                            <div className="flex items-center justify-between">
                              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#2b5ba3] font-black text-xs flex items-center justify-center border border-blue-100 group-hover:bg-[#2b5ba3] group-hover:text-white transition-colors duration-300 shadow-xs">
                                {num}
                              </span>
                              <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#2b5ba3] transition-colors" />
                              </div>
                            </div>

                            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold group-hover:text-slate-900 transition-colors">
                              {item}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </section>

          {/* OUR CORE VALUES */}
          <section className="bg-gradient-to-br from-[#f0f5ff] via-slate-50 to-blue-50/40 rounded-3xl p-8 md:p-14 border border-blue-100/80 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#2b5ba3] bg-blue-100/60 px-3 py-1 rounded-full inline-block">
                Our DNA
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                CORE VALUES
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                The core principles that guide our work, culture, and strategic decisions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div 
                className="lg:col-span-6 flex justify-center items-center relative py-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                  <div 
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0b2545] via-[#2b5ba3] to-[#f57c00] p-3 shadow-2xl transition-transform duration-75 ease-linear"
                    style={{ transform: `rotate(${rotationAngle}deg)` }}
                  >
                    <div 
                      className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-6 text-center shadow-inner"
                      style={{ transform: `rotate(${-rotationAngle}deg)` }}
                    >
                      <span className="text-xs font-black text-[#2b5ba3] uppercase tracking-widest mb-1">
                        Teknoloka Values
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        Click Icon to View Detail
                      </span>
                    </div>
                  </div>

                  {coreValues.map((val, idx) => {
                    const total = coreValues.length;
                    const baseAngle = (idx / total) * 360 - 90;
                    const currentAngle = baseAngle + rotationAngle;
                    const radius = 155;

                    const x = Math.cos((currentAngle * Math.PI) / 180) * radius;
                    const y = Math.sin((currentAngle * Math.PI) / 180) * radius;

                    return (
                      <div 
                        key={val.key || idx} 
                        className="absolute z-20 transition-transform duration-75 ease-linear"
                        style={{ transform: `translate(${x}px, ${y}px)` }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveValueKey(val.key)}
                          className={`p-4 rounded-2xl shadow-xl border-2 border-white transition-all duration-300 cursor-pointer ${
                            activeValueKey === val.key
                              ? `${val.color} scale-125 ring-4 ring-blue-300 shadow-2xl`
                              : `${val.color} opacity-85 hover:opacity-100 hover:scale-110`
                          } text-white`}
                          title={val.title}
                        >
                          <div style={{ transform: `rotate(${-rotationAngle}deg)` }}>
                            {renderIcon(val.icon, "w-6 h-6")}
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                {activeValueData && (
                  <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-4 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10" />
                    
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-2xl text-white shadow-md ${activeValueData.color}`}>
                        {renderIcon(activeValueData.icon, "w-7 h-7")}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-[#2b5ba3] uppercase tracking-widest block">Selected Value</span>
                        <h3 className="text-2xl font-black text-[#0f172a] tracking-tight">
                          {activeValueData.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed border-l-4 border-[#2b5ba3] pl-4 py-1 font-normal">
                      {activeValueData.desc}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {coreValues.map((val) => (
                    <button
                      key={val.key}
                      onClick={() => setActiveValueKey(val.key)}
                      className={`flex items-center gap-3.5 p-3.5 rounded-2xl text-left border transition-all duration-200 ${
                        activeValueKey === val.key
                          ? "bg-white border-[#2b5ba3] shadow-md ring-2 ring-[#2b5ba3]/20"
                          : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className={`p-2 rounded-xl text-white text-xs shadow-xs ${val.color}`}>
                        {renderIcon(val.icon, "w-4 h-4")}
                      </div>
                      <span className="text-xs font-black text-slate-800 tracking-wide uppercase">
                        {val.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* OUR FACILITIES */}
          <section className="relative overflow-hidden py-16 px-6 md:px-12 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 rounded-3xl border border-slate-200/80 shadow-sm">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#2b5ba3] text-xs font-black uppercase tracking-widest shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#f57c00]" />
                  Infrastructure & Capabilities
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black text-[#0b2545] tracking-tight uppercase">
                  OUR FACILITIES
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00] rounded-full mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {facilities.map((item, index) => {
                  const colors = [
                    { bg: "bg-blue-50/80", text: "text-[#0b2545]", border: "group-hover:border-blue-300", glow: "group-hover:shadow-blue-500/10" },
                    { bg: "bg-amber-50/80", text: "text-[#f57c00]", border: "group-hover:border-amber-300", glow: "group-hover:shadow-amber-500/10" },
                    { bg: "bg-indigo-50/80", text: "text-[#2b5ba3]", border: "group-hover:border-indigo-300", glow: "group-hover:shadow-indigo-500/10" },
                  ];
                  const colorScheme = colors[index % colors.length];

                  return (
                    <div
                      key={item.id}
                      className={`group relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-2xl ${colorScheme.glow} ${colorScheme.border} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#2b5ba3] transition-all duration-300" />

                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 p-3.5 rounded-2xl ${colorScheme.bg} border border-slate-100 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                          {renderIcon(item.icon, `w-6 h-6 ${colorScheme.text}`)}
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            Facility #{String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold group-hover:text-slate-900 transition-colors">
                            {item.text}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-bold text-[#2b5ba3]">Teknoloka Standard</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* OUR EXECUTIVE TEAM */}
          <section className="relative py-12">
            <div className="max-w-6xl mx-auto space-y-12">
              
              {/* Header Executive */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2b5ba3] text-xs font-black uppercase tracking-widest shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#f57c00]" />
                  Leadership
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-[#0b2545] tracking-tight uppercase">
                  Our Executive Team
                </h2>

                <div className="w-16 h-1 bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00] rounded-full mx-auto" />
              </div>

              {/* Card Main Container */}
              <div className="relative group rounded-3xl bg-white p-6 sm:p-10 md:p-14 border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                
                {/* Visual Background Glow Elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-indigo-100/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-amber-100/40 to-orange-100/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  
                  {/* Foto Profile */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[340px]">
                      
                      {/* Decorative Border Frame Background */}
                      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0b2545] via-[#2b5ba3] to-[#f57c00] opacity-30 blur-md group-hover:opacity-70 transition duration-500" />
                      
                      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                        <img 
                          src="/images/mita.jpeg" 
                          alt="Eufrasia Primita Ardani"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Informasi Detail Executive */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#2b5ba3]">
                        Executive Leadership
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black text-[#0b2545] tracking-tight mt-1">
                        Eufrasia Primita Ardani
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#f57c00] tracking-wide mt-1">
                        Co-Founder & Business Strategist at Teknoloka
                      </p>
                    </div>

                    {/* Highlights List Poin */}
                    <div className="space-y-3.5">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-1 rounded-full bg-blue-50 border border-blue-200 text-[#2b5ba3]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          Over a decade of experience in market research, marketing strategy, and business development.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-1 rounded-full bg-blue-50 border border-blue-200 text-[#2b5ba3]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          Started career in 2009 at Nielsen, building a strong reputation as a leader who deeply understands consumer behavior.
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-1 rounded-full bg-blue-50 border border-blue-200 text-[#2b5ba3]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          Drives business strategy and strategic partner relations at Teknoloka to deliver relevant, impactful, and ethical technology solutions.
                        </p>
                      </div>
                    </div>

                    {/* Quote Box Card */}
                    <div className="relative bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-l-4 border-[#2b5ba3] rounded-r-2xl p-4 sm:p-5 shadow-xs">
                      <Quote className="w-5 h-5 text-[#2b5ba3]/40 absolute top-3 right-4" />
                      <p className="text-xs sm:text-sm font-semibold italic text-slate-800 leading-relaxed pr-6">
                        &ldquo;Building a business is not just about hitting targets, but fostering trust that creates long-term impact.&rdquo;
                      </p>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a 
                        href="https://www.linkedin.com/in/eufrasia-ardani-52904168" 
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-[#0a66c2] hover:bg-[#084e96] text-white text-xs font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.66a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                        </svg>
                        <span>LinkedIn Profile</span>
                      </a>

                      <Link 
                        href="/contact"
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 transition shadow-xs hover:shadow-sm"
                      >
                        <span>Contact Us</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* OUR TRUSTED PARTNERS */}
          <section className="pt-4 text-center pb-8 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black text-[#0f172a] mb-2 tracking-tight">
              Our Trusted Partners
            </h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-12">
              Who we work with us for the technology ecosystem, Stronger together product + enablement + local execution
            </p>

            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="animate-marquee flex items-center gap-12 md:gap-16 w-max">
                <div className="flex items-center gap-12 md:gap-16 shrink-0">
                  {renderPartnerLogos()}
                </div>
                <div className="flex items-center gap-12 md:gap-16 shrink-0" aria-hidden="true">
                  {renderPartnerLogos()}
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
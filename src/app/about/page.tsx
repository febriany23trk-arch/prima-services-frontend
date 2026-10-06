"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePageContent } from "@/lib/use-page-content";
import Link from "next/link";
import { apiUrl } from "@/lib/api";
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

interface ApiCoreValue {
  id?: string | number;
  key?: string;
  title?: string;
  name?: string;
  desc?: string;
  description?: string;
  content?: string;
  detail?: string;
  icon?: string;
  icon_name?: string;
  color?: string;
}

interface Facility {
  id: string | number;
  icon: string;
  colorClass: string;
  text: string;
}

interface ApiFacility {
  id?: string | number;
  icon?: string;
  icon_name?: string;
  colorClass?: string;
  color_class?: string;
  text?: string;
  description?: string;
  title?: string;
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



export default function AboutPage() {
  const { content, error: contentError } = usePageContent('about');

  const DEFAULT_MISSIONS = [
  content['default-missions.0'] ?? 'Provide flexible, scalable, and results-driven BPO services tailored to client needs.',
  content['default-missions.1'] ?? 'Support companies in discovering and managing top talent through professional recruitment and headhunting services.',
  content['default-missions.2'] ?? 'Build and strengthen global networks across countries to unlock cross-border business opportunities.',
  content['default-missions.3'] ?? 'Integrate technology, data, and human resource expertise to ensure consistent performance and value creation.',
  content['default-missions.4'] ?? 'Maintain a client satisfaction rate above 95% through transparency, accountability, and continuous performance tracking.',
  content['default-missions.5'] ?? 'Develop internal talent into world-class, adaptive, and globally competitive teams.',
  content['default-missions.6'] ?? 'Continuously innovate work models to deliver high ROI and sustainable business efficiency for clients.'
];

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
        const res = await fetch(apiUrl("/api/v1/company"), { cache: "no-store" });
        if (!res.ok) throw new Error(`Backend returned ${res.status}`);
        const data = await res.json();
        setCompanyProfile({
          vision: data.vision || "",
          mission: data.mission || "",
          address_jakarta: data.address_jakarta || "",
          address_yogyakarta: data.address_yogyakarta || "",
          phone: data.phone || "",
          email: data.email || ""
        });
      } catch (error) {
        console.error("Gagal mengambil data company profile:", error);
      }

      try {
        const resValues = await fetch(apiUrl("/api/v1/core-values"), { cache: "no-store" });
        if (!resValues.ok) throw new Error(`Backend returned ${resValues.status}`);
        const rawValues: ApiCoreValue[] | {
          data?: ApiCoreValue[];
          core_values?: ApiCoreValue[];
        } = await resValues.json();
        const dataValues = Array.isArray(rawValues) ? rawValues : (rawValues.data || rawValues.core_values || []);

        if (dataValues.length > 0) {
          const formattedValues: CoreValue[] = dataValues.map((v, idx) => {
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
      } catch (error) {
        console.error("Gagal mengambil data core values:", error);
      }

      try {
        const resFacilities = await fetch(apiUrl("/api/v1/facilities"), { cache: "no-store" });
        if (!resFacilities.ok) throw new Error(`Backend returned ${resFacilities.status}`);
        const rawFacilities: ApiFacility[] | { data?: ApiFacility[] } =
          await resFacilities.json();
        const dataFacilities = Array.isArray(rawFacilities) ? rawFacilities : (rawFacilities.data || []);

        if (dataFacilities.length > 0) {
          const formattedFacilities: Facility[] = dataFacilities.map((f, idx) => ({
            id: f.id || idx,
            icon: f.icon || f.icon_name || "ShieldCheck",
            colorClass: f.colorClass || f.color_class || "text-[#0b2545]",
            text: f.text || f.description || f.title || ""
          }));
          setFacilities(formattedFacilities);
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
        <span className="text-[#5f6368] text-sm font-bold tracking-tight">{content['about.layout.text.google-partner'] ?? 'Google Partner'}</span>
      </div>

      <div className="flex items-center justify-center min-w-[140px]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-5 bg-[#21a8eb] rounded-full inline-block"></span>
            <span className="w-1.5 h-8 bg-[#21a8eb] rounded-full inline-block"></span>
            <span className="w-1.5 h-3 bg-[#21a8eb] rounded-full inline-block"></span>
            <span className="w-1.5 h-7 bg-[#21a8eb] rounded-full inline-block"></span>
          </div>
          <span className="text-2xl font-black tracking-tight text-[#2d3748]">{content['about.layout.text.miitel'] ?? 'MiiTel'}</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-w-[140px]">
        <div className="relative">
          <div className="w-12 h-3 border-t-4 border-[#ffbe00] rounded-t-full mx-auto mb-[-4px]"></div>
          <span className="text-2xl font-black text-[#00a896] tracking-tight">{content['about.layout.text.sobot'] ?? 'Sobot'}</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-w-[140px]">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 fill-[#EE4D2D]" viewBox="0 0 24 24">
            <path d="M19.27 8.35h-3.21a4.06 4.06 0 0 0-8.12 0H4.73A1.73 1.73 0 0 0 3 10.08v9.19A1.73 1.73 0 0 0 4.73 21h14.54A1.73 1.73 0 0 0 21 19.27v-9.19a1.73 1.73 0 0 0-1.73-1.73zm-7.27-4a2.56 2.56 0 0 1 2.55 2.5h-5.1a2.56 2.56 0 0 1 2.55-2.5zm4.8 10.74a4.11 4.11 0 0 1-2.61 1.23c-.37.03-.7-.18-.75-.52a.51.51 0 0 1 .42-.58c1.07-.15 1.83-.56 1.83-1.34 0-.82-.87-1.16-2-1.44l-.27-.07c-1.32-.33-2.62-.66-2.62-2.12 0-1.28 1.1-2.07 2.65-2.17a3.87 3.87 0 0 1 2.3.82.51.51 0 0 1 .08.71.5.5 0 0 1-.71.09 2.87 2.87 0 0 0-1.68-.61c-1-.02-1.65.41-1.65 1.13 0 .74.83 1.05 1.92 1.32l.28.07c1.39.34 2.69.7 2.69 2.18 0 1.25-1 2.08-2.69 2.2z"/>
          </svg>
          <span className="text-2xl font-black text-[#EE4D2D] tracking-tight">{content['about.layout.text.shopee'] ?? 'Shopee'}</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-w-[140px]">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 fill-black" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.08a8.2 8.2 0 0 0 4.81 1.53v-3.7a4.85 4.85 0 0 1-0.9-.22z"/>
          </svg>
          <span className="text-2xl font-black text-black tracking-tight">{content['about.layout.text.tiktok'] ?? 'TikTok'}</span>
        </div>
      </div>
    </>
  ), [content]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-[#2b5ba3] selection:text-white pt-0">
      {contentError && (
        <p role="alert" className="mx-auto max-w-7xl px-4 py-2 text-center text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg">
          {contentError}
        </p>
      )}
      <div>

        {/* MAIN CONTAINER: Padding Atas dijadikan pt-0 sm:pt-2 md:pt-4 dan ditambahkan negative margin (-mt-2 md:-mt-4) */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8 space-y-10 w-full -mt-2 md:-mt-4">

          {/* HERO / ABOUT US */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f5ff] via-slate-50 to-blue-50/50 rounded-3xl p-6 md:p-8 border border-blue-100/80 shadow-xs">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/60 border border-blue-200 text-[#2b5ba3] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {content['about.hero-about-us.text.about-teknoloka-prima-services'] ?? 'About Teknoloka Prima Services\r'}</div>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  {content['about.hero-about-us.text.accelerating-scale'] ?? 'Accelerating Scale.'}<br />
                  <span className="bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00] bg-clip-text text-transparent">
                    {content['about.hero-about-us.text.unlocking-global-talent'] ?? 'Unlocking Global Talent.\r'}</span>
                </h1>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                  {content['about.hero-about-us.text.established-in-2025-pt-teknoloka-prima-service-w'] ?? 'Established in 2025, PT Teknoloka Prima Service was founded to answer the growing demand for flexible, innovative, and results-driven business solutions. We specialize in Business Process Outsourcing (BPO), Recruitment & Headhunter Services, and Global Outsourcing.\r'}</p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                  {content['about.hero-about-us.text.backed-by-senior-professionals-with-more-than-15'] ?? 'Backed by senior professionals with more than 15 years of proven expertise in BPO operations, recruitment strategy, process management, and technology-driven outsourcing, we bring deep expertise across multiple business industries.\r'}</p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <Globe2 className="w-4 h-4 text-[#2b5ba3]" />
                    {content['about.hero-about-us.text.global-reach'] ?? 'Global Reach\r'}</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <Layers className="w-4 h-4 text-[#f57c00]" />
                    {content['about.hero-about-us.text.end-to-end-solutions'] ?? 'End-to-End Solutions\r'}</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    {content['about.hero-about-us.text.high-growth-roi'] ?? 'High Growth ROI\r'}</div>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-[440px] h-[300px] md:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#1b2a47] group">
                  <img
                    src={content['about.hero-about-us.image.src'] ?? "/images/about-team.png"}
                    alt={content['about.hero-about-us.alt.teknoloka-prima-services-team'] ?? 'Teknoloka Prima Services Team'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                    <p className="text-xs font-semibold tracking-wide uppercase text-blue-200">{content['about.hero-about-us.text.our-strategic-expertise'] ?? 'Our Strategic Expertise'}</p>
                    <p className="text-sm font-bold mt-0.5">{content['about.hero-about-us.text.empowering-businesses-across-regions'] ?? 'Empowering Businesses Across Regions'}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* VISION & MISSION SECTION */}
          <section className="space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-1.5">
              <span className="text-xs font-black uppercase tracking-widest text-[#2b5ba3] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 inline-block shadow-xs">
                {content['about.vision-mission-section.text.strategic-foundation'] ?? 'Strategic Foundation\r'}</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                {content['about.vision-mission-section.text.driven-by-vision-powered-by-mission'] ?? 'Driven by Vision, Powered by Mission\r'}</h2>
              <p className="text-slate-500 text-xs md:text-sm font-normal">
                {content['about.vision-mission-section.text.our-core-purpose-and-operational-commitments-dri'] ?? 'Our core purpose and operational commitments driving sustainable growth for partners worldwide.\r'}</p>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl bg-gradient-to-r from-[#0b2545] via-[#1b365d] to-[#2b5ba3] p-6 md:p-10 text-white overflow-hidden shadow-2xl border border-blue-900/30">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-2xl text-blue-200 border border-white/20 shadow-inner">
                        <Compass className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-blue-200 uppercase">{content['about.vision-mission-section.text.our-vision-statement'] ?? 'Our Vision Statement'}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black leading-tight text-white tracking-tight">
                      {content['about.vision-mission-section.text.building-the-future-of-strategic-partnerships-in'] ?? '"Building the Future of Strategic Partnerships in Southeast Asia"\r'}</h3>

                    <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light max-w-3xl">
                      {companyProfile.vision}
                    </p>
                  </div>

                  <div className="lg:col-span-4 grid grid-cols-2 gap-4 pt-4 lg:pt-0 lg:border-l border-white/15 lg:pl-8">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center space-y-1 hover:bg-white/20 transition-all">
                      <span className="text-3xl md:text-4xl font-black text-white block">{content['about.vision-mission-section.text.95'] ?? '95%+'}</span>
                      <span className="text-[11px] text-blue-200 font-bold uppercase tracking-wider">{content['about.vision-mission-section.text.client-satisfaction'] ?? 'Client Satisfaction'}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center space-y-1 hover:bg-white/20 transition-all">
                      <span className="text-3xl md:text-4xl font-black text-white block">{content['about.vision-mission-section.text.sea'] ?? 'SEA'}</span>
                      <span className="text-[11px] text-blue-200 font-bold uppercase tracking-wider">{content['about.vision-mission-section.text.regional-focus'] ?? 'Regional Focus'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* OUR MISSION PILLARS */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-50/80 rounded-3xl border border-blue-100/80 p-6 sm:p-8 shadow-lg">
                <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-blue-200/30 via-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-amber-100/30 via-blue-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#0b2545] to-[#2b5ba3] text-white shadow-md shadow-blue-900/20 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                          {content['about.vision-mission-section.text.our-mission-pillars'] ?? 'Our Mission Pillars\r'}</h3>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {content['about.vision-mission-section.text.core-action-items-guiding-our-everyday-operation'] ?? 'Core action items guiding our everyday operations\r'}</p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100/80 via-blue-50 to-indigo-100/80 border border-blue-200 text-xs font-bold text-[#2b5ba3] shadow-xs">
                      <Zap className="w-3.5 h-3.5 text-[#f57c00]" />
                      <span>{missionList.filter((item) => item && item.trim().length > 3).length} {content['about.vision-mission-section.text.strategic-goals'] ?? 'Strategic Goals'}</span>
                    </div>
                  </div>

                  {/* Grid Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {missionList
                      .filter((item) => item && item.trim().length > 3)
                      .map((item, index) => {
                        const num = String(index + 1).padStart(2, "0");

                        const cardThemes = [
                          {
                            cardBg: 'bg-gradient-to-br from-white via-slate-50/90 to-blue-50/60',
                            numBg: 'bg-gradient-to-r from-[#0b2545] to-[#2b5ba3] text-white shadow-md shadow-blue-900/20',
                            accentBar: 'bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#06b6d4]',
                            hoverBorder: 'hover:border-blue-300',
                            hoverGlow: 'hover:shadow-blue-500/10',
                            arrowColor: 'group-hover:text-[#2b5ba3]'
                          },
                          {
                            cardBg: 'bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/50',
                            numBg: 'bg-gradient-to-r from-[#2b5ba3] to-[#1565c0] text-white shadow-md shadow-blue-600/20',
                            accentBar: 'bg-gradient-to-r from-[#2b5ba3] via-[#1565c0] to-[#38bdf8]',
                            hoverBorder: 'hover:border-sky-300',
                            hoverGlow: 'hover:shadow-sky-500/10',
                            arrowColor: 'group-hover:text-[#1565c0]'
                          },
                          {
                            cardBg: 'bg-gradient-to-br from-white via-amber-50/30 to-orange-50/40',
                            numBg: 'bg-gradient-to-r from-[#f57c00] to-[#ff9800] text-white shadow-md shadow-orange-500/20',
                            accentBar: 'bg-gradient-to-r from-[#f57c00] via-[#ff9800] to-[#ffc107]',
                            hoverBorder: 'hover:border-amber-300',
                            hoverGlow: 'hover:shadow-amber-500/10',
                            arrowColor: 'group-hover:text-[#f57c00]'
                          }
                        ];

                        const theme = cardThemes[index % cardThemes.length];

                        return (
                          <div
                            key={index}
                            className={`group relative ${theme.cardBg} border border-slate-200/90 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl ${theme.hoverGlow} ${theme.hoverBorder} flex flex-col justify-between overflow-hidden`}
                          >
                            <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.accentBar} opacity-80 group-hover:opacity-100 transition-opacity`} />

                            <div>
                              <div className="flex justify-between items-center mb-3 pt-1">
                                <span className={`text-xs font-black px-3 py-0.5 rounded-xl ${theme.numBg}`}>
                                  {num}
                                </span>
                                <div className={'p-1.5 rounded-lg bg-slate-100/80 group-hover:bg-white transition-colors'}>
                                  <ArrowUpRight className={`w-4 h-4 text-slate-400 ${theme.arrowColor} transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                                </div>
                              </div>

                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                                {item}
                              </p>
                            </div>

                            <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                {content['about.vision-mission-section.text.strategic-goal'] ?? 'Strategic Goal\r'}</span>
                              <Sparkles className="w-3.5 h-3.5 text-[#2b5ba3]" />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* OUR CORE VALUES */}
          <section className="bg-gradient-to-br from-[#f0f5ff] via-slate-50 to-blue-50/40 rounded-3xl p-6 md:p-10 border border-blue-100/80 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
              <span className="text-xs font-black uppercase tracking-widest text-[#2b5ba3] bg-blue-100/60 px-3 py-1 rounded-full inline-block">
                {content['about.our-core-values.text.our-dna'] ?? 'Our DNA\r'}</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                {content['about.our-core-values.text.core-values'] ?? 'CORE VALUES\r'}</h2>
              <p className="text-xs md:text-sm text-slate-500">
                {content['about.our-core-values.text.the-core-principles-that-guide-our-work-culture-'] ?? 'The core principles that guide our work, culture, and strategic decisions\r'}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div
                className="lg:col-span-6 flex justify-center items-center relative py-4"
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
                        {content['about.our-core-values.text.teknoloka-values'] ?? 'Teknoloka Values\r'}</span>
                      <span className="text-xs font-semibold text-slate-400">
                        {content['about.our-core-values.text.click-icon-to-view-detail'] ?? 'Click Icon to View Detail\r'}</span>
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
                          title={content[`about.values.${val.key}.title`] ?? val.title}
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

              <div className="lg:col-span-6 space-y-4">
                {activeValueData && (
                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xl space-y-3 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-[#2b5ba3]/10 bg-blue-50 rounded-bl-full -z-10" />

                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl text-white shadow-md ${activeValueData.color}`}>
                        {renderIcon(activeValueData.icon, "w-6 h-6")}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-[#2b5ba3] uppercase tracking-widest block">{content['about.our-core-values.text.selected-value'] ?? 'Selected Value'}</span>
                        <h3 className="text-2xl font-black text-[#0f172a] tracking-tight">
                          {content[`about.values.${activeValueData.key}.title`] ?? activeValueData.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed border-l-4 border-[#2b5ba3] pl-4 py-1 font-normal">
                      {content[`about.values.${activeValueData.key}.desc`] ?? activeValueData.desc}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {coreValues.map((val) => (
                    <button
                      key={val.key}
                      onClick={() => setActiveValueKey(val.key)}
                      className={`flex items-center gap-3 p-3 rounded-2xl text-left border transition-all duration-200 ${
                        activeValueKey === val.key
                          ? 'bg-white border-[#2b5ba3] shadow-md ring-2 ring-[#2b5ba3]/20'
                          : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className={`p-2 rounded-xl text-white text-xs shadow-xs ${val.color}`}>
                        {renderIcon(val.icon, "w-4 h-4")}
                      </div>
                      <span className="text-xs font-black text-slate-800 tracking-wide uppercase">
                        {content[`about.values.${val.key}.title`] ?? val.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* OUR FACILITIES */}
          <section className="relative overflow-hidden py-10 px-6 md:px-10 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/30 rounded-3xl border border-slate-200/80 shadow-md">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-gradient-to-bl from-blue-300/20 via-cyan-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-gradient-to-tr from-indigo-300/20 via-amber-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100/80 to-indigo-100/80 border border-blue-200 text-[#2b5ba3] text-xs font-black uppercase tracking-widest shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#f57c00]" />
                  {content['about.our-facilities.text.infrastructure-capabilities'] ?? 'Infrastructure & Capabilities\r'}</div>

                <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#06b6d4] bg-clip-text text-transparent">
                  {content['about.our-facilities.text.our-facilities'] ?? 'OUR FACILITIES\r'}</h2>

                <div className="w-20 h-1.5 bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00] rounded-full mx-auto shadow-xs" />
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                {facilities.map((item, index) => {
                  const gradientStyles = [
                    {
                      cardBg: 'bg-gradient-to-br from-white via-slate-50/90 to-blue-50/60',
                      iconBg: 'bg-gradient-to-br from-[#0b2545] to-[#2b5ba3]',
                      accentBar: 'bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#06b6d4]',
                      borderHover: 'hover:border-blue-400',
                      glowHover: 'hover:shadow-blue-500/15'
                    },
                    {
                      cardBg: 'bg-gradient-to-br from-white via-amber-50/30 to-orange-50/50',
                      iconBg: 'bg-gradient-to-br from-[#f57c00] to-[#ff9800]',
                      accentBar: 'bg-gradient-to-r from-[#f57c00] via-[#ff9800] to-[#ffc107]',
                      borderHover: 'hover:border-amber-400',
                      glowHover: 'hover:shadow-amber-500/15'
                    },
                    {
                      cardBg: 'bg-gradient-to-br from-white via-indigo-50/30 to-sky-50/50',
                      iconBg: 'bg-gradient-to-br from-[#1565c0] to-[#0288d1]',
                      accentBar: 'bg-gradient-to-r from-[#1565c0] via-[#0288d1] to-[#00acc1]',
                      borderHover: 'hover:border-sky-400',
                      glowHover: 'hover:shadow-sky-500/15'
                    }
                  ];

                  const scheme = gradientStyles[index % gradientStyles.length];

                  return (
                    <div
                      key={item.id}
                      className={`group relative p-5 rounded-2xl ${scheme.cardBg} border border-slate-200/90 shadow-sm hover:shadow-2xl ${scheme.glowHover} ${scheme.borderHover} transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden`}
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${scheme.accentBar} opacity-80 group-hover:opacity-100 transition-opacity`} />

                      <div className="flex items-start gap-3.5">
                        <div className={`shrink-0 p-3 rounded-2xl ${scheme.iconBg} text-white shadow-md shadow-slate-300/50 group-hover:scale-110 transition-transform duration-300`}>
                          {renderIcon(item.icon, "w-5 h-5 text-white")}
                        </div>

                        <div className="space-y-0.5">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                            {content['about.our-facilities.text.facility'] ?? 'Facility #'}{String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-semibold group-hover:text-slate-950 transition-colors">
                            {content[`about.facilities.${item.id}.text`] ?? item.text}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#0b2545] to-[#2b5ba3] bg-clip-text text-transparent">
                          {content['about.our-facilities.text.teknoloka-standard'] ?? 'Teknoloka Standard\r'}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* OUR EXECUTIVE TEAM */}
          <section className="relative py-6">
            <div className="max-w-6xl mx-auto space-y-6">

              {/* Header Executive */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#2b5ba3] text-xs font-black uppercase tracking-widest shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#f57c00]" />
                  {content['about.our-executive-team.text.leadership'] ?? 'Leadership\r'}</div>

                <h2 className="text-3xl md:text-5xl font-black text-[#0b2545] tracking-tight uppercase">
                  {content['about.our-executive-team.text.our-executive-team'] ?? 'Our Executive Team\r'}</h2>

                <div className="w-16 h-1 bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00] rounded-full mx-auto" />
              </div>

              {/* Card Main Container */}
              <div className="relative group rounded-3xl bg-white p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-indigo-100/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-amber-100/40 to-orange-100/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0b2545] via-[#2b5ba3] to-[#f57c00]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-center">

                  {/* Foto Profile */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[320px]">
                      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0b2545] via-[#2b5ba3] to-[#f57c00] opacity-30 blur-md group-hover:opacity-70 transition duration-500" />

                      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                        <img
                          src={content['about.our-executive-team.image.src'] ?? "/images/mita.jpeg"}
                          alt={content['about.our-executive-team.alt.eufrasia-primita-ardani'] ?? 'Eufrasia Primita Ardani'}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Informasi Detail Executive */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#2b5ba3]">
                        {content['about.our-executive-team.text.executive-leadership'] ?? 'Executive Leadership\r'}</span>
                      <h3 className="text-2xl md:text-3xl font-black text-[#0b2545] tracking-tight mt-0.5">
                        {content['about.our-executive-team.text.eufrasia-primita-ardani'] ?? 'Eufrasia Primita Ardani\r'}</h3>
                      <p className="text-xs sm:text-sm font-bold text-[#f57c00] tracking-wide mt-0.5">
                        {content['about.our-executive-team.text.co-founder-business-strategist-at-teknoloka'] ?? 'Co-Founder & Business Strategist at Teknoloka\r'}</p>
                    </div>

                    {/* Highlights List Poin */}
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-1 rounded-full bg-blue-50 border border-blue-200 text-[#2b5ba3]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {content['about.our-executive-team.text.over-a-decade-of-experience-in-market-research-m'] ?? 'Over a decade of experience in market research, marketing strategy, and business development.\r'}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-1 rounded-full bg-blue-50 border border-blue-200 text-[#2b5ba3]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {content['about.our-executive-team.text.started-career-in-2009-at-nielsen-building-a-str'] ?? 'Started career in 2009 at Nielsen, building a strong reputation as a leader who deeply understands consumer behavior.\r'}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 p-1 rounded-full bg-blue-50 border border-blue-200 text-[#2b5ba3]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {content['about.our-executive-team.text.drives-business-strategy-and-strategic-partner-r'] ?? 'Drives business strategy and strategic partner relations at Teknoloka to deliver relevant, impactful, and ethical technology solutions.\r'}</p>
                      </div>
                    </div>

                    {/* Quote Box Card */}
                    <div className="relative bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-l-4 border-[#2b5ba3] rounded-r-2xl p-3.5 sm:p-4 shadow-xs">
                      <Quote className="w-5 h-5 text-[#2b5ba3]/40 absolute top-3 right-4" />
                      <p className="text-xs sm:text-sm font-semibold italic text-slate-800 leading-relaxed pr-6">
                        {content['about.our-executive-team.text.building-a-business-is-not-just-about-hitting-ta'] ?? '?Building a business is not just about hitting targets, but fostering trust that creates long-term impact.?\r'}</p>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={content['about.our-executive-team.href.https-www-linkedin-com-in-eufrasia-ardani-529041'] ?? 'https://www.linkedin.com/in/eufrasia-ardani-52904168'}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#0a66c2] hover:bg-[#084e96] text-white text-xs font-bold px-5 py-2.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.66a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                        </svg>
                        <span>{content['about.our-executive-team.text.linkedin-profile'] ?? 'LinkedIn Profile'}</span>
                      </a>

                      <Link
                        href={content['about.our-executive-team.href.contact'] ?? '/contact'}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl inline-flex items-center gap-2 transition shadow-xs hover:shadow-sm"
                      >
                        <span>{content['about.our-executive-team.text.contact-us'] ?? 'Contact Us'}</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* OUR TRUSTED PARTNERS */}
          <section className="pt-2 text-center pb-4 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black text-[#0f172a] mb-1.5 tracking-tight">
              {content['about.our-trusted-partners.text.our-trusted-partners'] ?? 'Our Trusted Partners\r'}</h2>
            <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-6">
              {content['about.our-trusted-partners.text.who-we-work-with-us-for-the-technology-ecosystem'] ?? 'Who we work with us for the technology ecosystem, Stronger together product + enablement + local execution\r'}</p>

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
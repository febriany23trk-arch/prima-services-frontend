"use client";

import React from "react";
import Image from "next/image";
import { Globe2, ShieldCheck } from "lucide-react";

export default function GlobalMapAnimation() {
  return (
    <div className="relative w-full max-w-[500px] bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-xl">
      {/* Container Peta - Ditambahkan 'animate-float' agar gambarnya ikut bergerak halus */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center animate-float">
        <Image 
          src="/images/global-map.png" 
          alt="Global World Map" 
          fill 
          unoptimized 
          className="object-contain p-2 hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      {/* Floating Badge Kanan Atas */}
      <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-2 rounded-2xl shadow-lg hidden sm:flex items-center gap-2.5 animate-float-delayed z-10">
        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
          <Globe2 className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Network</p>
          <p className="text-xs font-extrabold text-slate-900">50+ Global Partners</p>
        </div>
      </div>

      {/* Floating Badge Kiri Bawah */}
      <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md border border-slate-200/90 px-3.5 py-2 rounded-2xl shadow-lg hidden sm:flex items-center gap-2.5 animate-float z-10">
        <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
          <ShieldCheck className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Compliance</p>
          <p className="text-xs font-extrabold text-slate-900">100% Regulated</p>
        </div>
      </div>
    </div>
  );
}
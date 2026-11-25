"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPortfolios, type PortfolioItem } from "@/lib/portfolioService";
import { useLocale } from "@/lib/i18n";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Store,
  CheckCircle2,
  Sparkles,
  Smartphone,
  QrCode,
  Wallet,
} from "lucide-react";

export default function PortfolioDetailPage() {
  const { translate } = useLocale();
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const portfolioId = params?.id ?? "";

  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getPortfolios()
      .then((items) => {
        if (!isMounted) return;
        const foundIdx = items.findIndex(
          (p) => String(p.id) === String(portfolioId)
        );
        const resolvedIdx = foundIdx >= 0 ? foundIdx : 0;
        setItemIndex(resolvedIdx);
        setItem(items[resolvedIdx] ?? null);
      })
      .catch((err) => {
        console.error("Gagal memuat detail portofolio:", err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [portfolioId]);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/#portfolios");
    }
  };

  const titleLower = (item?.title ?? "").toLowerCase();
  const categoryLower = (item?.category ?? "").toLowerCase();
  const isAbdiPay =
    itemIndex === 1 ||
    String(portfolioId) === "2" ||
    titleLower.includes("abdi") ||
    titleLower.includes("fintech") ||
    titleLower.includes("mobile") ||
    categoryLower.includes("fintech") ||
    categoryLower.includes("mobile");

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{translate("Kembali ke Beranda")}</span>
          </button>

          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
            {translate(
              item?.category ??
                (isAbdiPay ? "FINTECH & MOBILE APP" : "ANALYTICS & MONITORING"),
            )}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 bg-white">
        {loading ? (
          <div className="bg-white rounded-3xl p-10 border border-slate-200/90 shadow-sm text-center text-sm text-slate-500">
            {translate("Loading portfolio details...")}
          </div>
        ) : (
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl">
            {/* Banner Header */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white px-6 sm:px-12 py-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-amber-400/20 -translate-x-10 -translate-y-10 rotate-45 pointer-events-none" />
              <div className="relative z-10 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-400">
                  {translate(item?.title ??
                    (isAbdiPay
                      ? "ABDI PAY Digital Wallet"
                      : "Executive Operations Dashboard"))}
                </p>
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                  {translate("Portfolio Highlights")}
                </h1>
              </div>
            </div>

            {/* Sub-header Kategori */}
            <div className="px-6 sm:px-12 pt-8 pb-4 text-center bg-white">
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
                {isAbdiPay
                  ? translate("Fintech, EduTech, E-commerce")
                  : translate("Integrated Enterprise Software Ecosystem")}
              </h2>
            </div>

            {/* ================= KONTEN 1: CUSTOM SOFTWARE DEVELOPMENT (CUSTOM ERP) ================= */}
            {!isAbdiPay ? (
              <div className="px-6 sm:px-12 pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start bg-white">
                {/* Kolom Kiri */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white font-extrabold text-sm sm:text-base px-7 py-2.5 rounded-xl shadow-md shadow-blue-500/20">
                    <span>{translate("Custom Software Development")}</span>
                  </div>

                  <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                    <p>
                      <strong className="font-extrabold text-slate-900">
                        {translate("Custom ERP")}
                      </strong>{" "}
                      {translate("is a fully integrated retail ecosystem that centralizes purchasing, inventory (multi-warehouse & return warehouse), finance, POS, web-commerce, and marketplace operations in one platform.")}
                    </p>

                    <p>
                      {translate("In addition to the ERP, we built a custom")}{" "}
                      <strong className="font-extrabold text-slate-900">
                        {translate("web-commerce")}
                      </strong>{" "}
                      {translate("tightly integrated with the back-office system and developed omnichannel marketplace connectors for")}{" "}
                      <strong className="font-extrabold text-slate-900">
                        Shopee, Tokopedia, TikTok Shop, Lazada
                      </strong>
                      {translate(", and other e-commerce platforms, enabling real-time synchronization of products, inventory, pricing, and orders.")}
                    </p>

                    <p>
                      {translate("Our engagement covered the complete delivery lifecycle from business discovery and solution design to development, integration, legacy data migration, cloud deployment, and post go-live support.")}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      "Multi-Warehouse Inventory",
                      "Real-Time Marketplace Sync",
                      "Integrated Finance & POS",
                      "Cloud Deployment & SLA",
                    ].map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200/90 px-3 py-2 rounded-xl"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{translate(feat)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kolom Kanan */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-md">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-white border border-slate-100">
                      <Image
                        src={item?.image ?? "/images/dashboard1.jpg"}
                        alt={translate(item?.title ?? "Custom ERP Preview")}
                        fill
                        quality={100}
                        unoptimized
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Ecommerce Connector */}
                  <div className="bg-slate-800 rounded-2xl p-3.5 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                    <div className="flex items-center gap-2.5 px-2">
                      <Store className="w-5 h-5 text-sky-400 shrink-0" />
                      <div className="text-left">
                        <p className="text-xs sm:text-sm font-extrabold leading-tight">
                          {translate("Ecommerce Connector")}
                        </p>
                        <p className="text-[10px] text-slate-300">
                          {translate("Integrated to marketplace")}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white text-slate-900 rounded-xl px-3.5 py-2 flex flex-wrap items-center justify-center gap-2 shadow-inner">
                      <span className="inline-flex items-center gap-1 text-[11px] font-black text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">
                        <ShoppingBag className="w-3 h-3" /> Shopee
                      </span>
                      <span className="text-[11px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                        Tokopedia
                      </span>
                      <span className="text-[11px] font-black text-slate-900 bg-slate-100 border border-slate-300 px-2 py-0.5 rounded-md">
                        TikTok Shop
                      </span>
                      <span className="text-[11px] font-black text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                        Lazada
                      </span>
                    </div>
                  </div>

                  {/* Brand Logos: Rosca., TJP, tokotab */}
                  <div className="grid grid-cols-3 gap-3 items-center text-center pt-1">
                    <div className="py-3 px-4 rounded-xl bg-white border border-slate-200/90">
                      <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                        Rosca<span className="text-blue-600">.</span>
                      </span>
                    </div>
                    <div className="py-2.5 px-3 rounded-xl bg-white border border-slate-200/90">
                      <span className="block text-base sm:text-lg font-black tracking-wider text-slate-900 leading-none">
                        TJP
                      </span>
                      <span className="block text-[8px] font-bold text-slate-500 mt-1 uppercase">
                        CV. Tunggal Jaya Perkasa
                      </span>
                    </div>
                    <div className="py-3 px-4 rounded-xl bg-white border border-slate-200/90">
                      <span className="text-lg sm:text-xl font-black tracking-tight text-indigo-700">
                        tokotab
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ================= KONTEN 2: PRODUCT DEVELOPMENT (ABDI PAY) ================= */
              <div className="px-6 sm:px-12 pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white">
                {/* Kolom Kiri */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white font-extrabold text-sm sm:text-base px-8 py-2.5 rounded-xl shadow-md shadow-blue-500/20">
                    <span>{translate("Product Development")}</span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                    <strong className="font-extrabold text-slate-900">
                      ABDI PAY
                    </strong>{" "}
                    {translate("is a modern e-money solution designed to simplify QRIS payments, peer-to-peer transfers, and utility bill payments in Indonesia. Teknoloka acted as an end-to-end partner for ideation, UI/UX design, mobile development, backend integration, and business strategy consultation.")}
                  </p>

                  {/* Logo Brand ABDIPAY */}
                  <div className="inline-flex flex-col items-center p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-lime-400 flex items-center justify-center text-white font-black text-xl shadow-sm rotate-45 mb-2">
                      <span className="-rotate-45">A</span>
                    </div>
                    <span className="text-base font-black tracking-wider text-emerald-700">
                      ABDIPAY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200/90 px-3 py-2 rounded-xl">
                      <QrCode className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{translate("QRIS Payments")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200/90 px-3 py-2 rounded-xl">
                      <Wallet className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{translate("P2P Transfers")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white border border-slate-200/90 px-3 py-2 rounded-xl">
                      <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{translate("Utility Bills")}</span>
                    </div>
                  </div>
                </div>

                {/* Kolom Kanan: Tampilan Preview Aplikasi Mobile ABDIPAY */}
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-md">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-slate-100">
                      <Image
                        src={item?.image ?? "/images/dashboard2.jpg"}
                        alt={translate(item?.title ?? "ABDI PAY Mobile App Preview")}
                        fill
                        quality={100}
                        unoptimized
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer CTA Banner */}
            <div className="bg-white border-t border-slate-200/80 px-6 sm:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>
                  {isAbdiPay
                    ? translate("Ingin mengembangkan produk digital atau aplikasi fintech end-to-end?")
                    : translate("Tertarik membangun sistem ERP atau integrasi omnichannel serupa untuk bisnis Anda?")}
                </span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md shrink-0"
              >
                <span>{translate("Konsultasi Solusi Ini")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
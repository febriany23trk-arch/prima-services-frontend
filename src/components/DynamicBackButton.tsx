"use client";

import { useSyncExternalStore } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/i18n";

type BackInfo = {
  href: string;
  label: string;
};

const HOME_BACK_INFO: BackInfo = {
  href: "/",
  label: "Kembali ke Home",
};
const SERVICES_BACK_INFO: BackInfo = {
  href: "/services",
  label: "Kembali ke Halaman Services",
};
const ABOUT_BACK_INFO: BackInfo = {
  href: "/about",
  label: "Kembali ke Halaman About",
};
const CONTACT_BACK_INFO: BackInfo = {
  href: "/contact",
  label: "Kembali ke Halaman Contact",
};

function subscribeToBackInfoChanges() {
  return () => {};
}

function getBackInfo(fromParam: string | null): BackInfo {
  const referrer = typeof document === "undefined" ? "" : document.referrer.toLowerCase();

  if (fromParam === "services" || referrer.includes("/services")) {
    return SERVICES_BACK_INFO;
  }
  if (fromParam === "about" || referrer.includes("/about")) {
    return ABOUT_BACK_INFO;
  }
  if (fromParam === "contact" || referrer.includes("/contact")) {
    return CONTACT_BACK_INFO;
  }
  return HOME_BACK_INFO;
}

export default function DynamicBackButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { translate } = useLocale();
  const fromParam = searchParams.get("from")?.toLowerCase() ?? null;
  const backInfo = useSyncExternalStore(
    subscribeToBackInfoChanges,
    () => getBackInfo(fromParam),
    () => HOME_BACK_INFO,
  );

  return (
    <button
      type="button"
      onClick={() => router.push(backInfo.href)}
      className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-700 border border-slate-200/90 shadow-xs transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:-translate-x-1.5"
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 text-blue-600" />
      <span>{translate(backInfo.label)}</span>
    </button>
  );
}
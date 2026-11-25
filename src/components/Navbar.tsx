"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePageContent } from "@/lib/use-page-content";
import { useLocale } from "@/lib/i18n";

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale, translate } = useLocale();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-slate-200 bg-white p-1 ${
        mobile ? "w-full justify-center" : "shrink-0"
      }`}
      role="group"
      aria-label={translate("Select language")}
    >
      {(["id", "en"] as const).map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => setLocale(language)}
          aria-pressed={locale === language}
          aria-label={language === "id" ? "Bahasa Indonesia" : "English"}
          className={`min-w-10 rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
            locale === language
              ? "bg-[#2152a3] text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function PageNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { content } = usePageContent("shared");
  const { translate } = useLocale();

  const navLinks = [
    {
      name: translate(content["navigation.home.label"] ?? "Home"),
      href: content["navigation.home.href"] ?? "/",
    },
    {
      name: translate(content["navigation.about.label"] ?? "About Us"),
      href: content["navigation.about.href"] ?? "/about",
    },
    {
      name: translate(content["navigation.services.label"] ?? "Services"),
      href: content["navigation.services.href"] ?? "/services",
    },
    {
      name: translate(content["navigation.career.label"] ?? "Career"),
      href: content["navigation.career.href"] ?? "/career",
    },
    {
      name: translate(content["navigation.contact.label"] ?? "Contact"),
      href: content["navigation.contact.href"] ?? "/contact",
    },
  ];
  const ctaLabel = translate(
    content["navigation.cta.label"] ?? "Free Consultant Now",
  );
  const ctaHref = content["navigation.cta.href"] ?? "/contact";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href={content["navigation.logo.href"] ?? "/"} className="flex items-center gap-2.5">
          <Image
            src={content["navigation.logo.src"] ?? "/images/logo.png"}
            alt={content["navigation.logo.alt"] ?? "Prima Services Logo"}
            width={160}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 text-sm font-bold transition-colors duration-200 ${
                  isActive
                    ? "text-[#2b5ba3]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}

                {/* Indikator Garis Bawah */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#2b5ba3] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-[#2152a3] hover:bg-[#1a4387] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label={translate("Toggle navigation menu")}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 text-base font-bold rounded-lg transition-colors ${
                    isActive
                      ? "bg-slate-50 text-[#2b5ba3]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#2152a3] hover:bg-[#1a4387] text-white text-sm font-bold px-5 py-3 rounded-full shadow-md transition-all duration-200"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          <div className="pt-2">
            <LanguageSwitcher mobile />
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function PageNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png" // Pastikan path file logo sesuai dengan di project kamu
            alt="Prima Services Logo"
            width={160}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/about" &&
                (pathname === "/about" || pathname === "/about-us"));

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
                
                {/* Indikator Garis Bawah (Hanya Aktif pada Link Terkait) */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#2b5ba3] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2152a3] hover:bg-[#1a4387] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Free Consultant Now</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </header>
  );
}
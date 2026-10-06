"use client";

import React from "react";
import Link from "next/link";
import { usePageContent } from "@/lib/use-page-content";

export default function Footer() {
  const { content } = usePageContent("shared");

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#070c1a] text-slate-300 font-sans pt-12 pb-12 border-t border-slate-800/80 overflow-hidden mt-0">

      {/* GLOW BACKGROUND EFEK & GRID PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-20" />
      {/* Posisi top diubah dari -top-40 menjadi top-0 agar tidak menyenggol area di atas footer */}
      <div className="absolute top-0 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* UTAMA: GRID CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* COL 1: BRAND & DESKRIPSI */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-cyan-400 font-black text-lg">
                  {content["footer.brand.initial"] ?? "T"}
                </div>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">
                {content["footer.brand.name-primary"] ?? "Teknoloka"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {content["footer.brand.name-secondary"] ?? "Prima Services"}
                </span>
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {content["footer.tagline"] ??
                "Teknoloka Prima Services helps businesses achieve digital transformation through trusted software development, IT services, UI/UX design, cybersecurity, cloud solutions, and ISO consulting."}
            </p>

            {/* STATUS AVAILABILITY BADGE */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/80 text-[11px] font-medium text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">
                {content["footer.availability"] ?? "Available for New Projects"}
              </span>
            </div>
          </div>

          {/* COL 2: COMPANY */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">
              {content["footer.company.title"] ?? "Company"}
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              {[
                {
                  name: content["footer.company.home.label"] ?? "Home",
                  href: content["footer.company.home.href"] ?? "/",
                },
                {
                  name: content["footer.company.about.label"] ?? "About Us",
                  href: content["footer.company.about.href"] ?? "/about",
                },
                {
                  name: content["footer.company.services.label"] ?? "Services",
                  href: content["footer.company.services.href"] ?? "/services",
                },
                {
                  name: content["footer.company.contact.label"] ?? "Contact",
                  href: content["footer.company.contact.href"] ?? "/contact",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: SOLUTIONS & SOCIALS */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">
                {content["footer.solutions.title"] ?? "Solutions"}
              </h4>
              <ul className="space-y-3 text-xs font-medium">
                {[
                  {
                    name: content["footer.solutions.sobot.label"] ?? "Sobot.io - AI Contact Center",
                    href: content["footer.solutions.sobot.href"] ?? "/solutions/sobot",
                  },
                  {
                    name: content["footer.solutions.workspace.label"] ?? "Google Workspace - Business",
                    href: content["footer.solutions.workspace.href"] ?? "/solutions/workspace",
                  },
                  {
                    name: content["footer.solutions.cloud.label"] ?? "Google Cloud - Computing",
                    href: content["footer.solutions.cloud.href"] ?? "/solutions/cloud",
                  },
                  {
                    name: content["footer.solutions.it.label"] ?? "IT Managed Services",
                    href: content["footer.solutions.it.href"] ?? "/solutions/it",
                  },
                  {
                    name: content["footer.solutions.iso.label"] ?? "ISO Assistance & Compliance",
                    href: content["footer.solutions.iso.href"] ?? "/solutions/iso",
                  },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm">›</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* MEDIA SOSIAL */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">
                {content["footer.social.title"] ?? "Follow Us"}
              </h4>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <span title={content["footer.social.facebook.label"] ?? "Facebook"} className="w-9 h-9 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-600 flex items-center justify-center cursor-not-allowed opacity-40">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>

                {/* Instagram */}
                <span title={content["footer.social.instagram.label"] ?? "Instagram"} className="w-9 h-9 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-600 flex items-center justify-center cursor-not-allowed opacity-40">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>

                {/* LinkedIn - Active */}
                <a
                  href={content["footer.social.linkedin.href"] ?? "https://www.linkedin.com/in/eufrasia-ardani-52904168/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={content["footer.social.linkedin.label"] ?? "LinkedIn"}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <span title={content["footer.social.youtube.label"] ?? "YouTube"} className="w-9 h-9 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-600 flex items-center justify-center cursor-not-allowed opacity-40">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186c-.275-1.026-1.082-1.833-2.108-2.108-1.861-.5-9.39-.5-9.39-.5s-7.529 0-9.39.5c-1.026.275-1.833 1.082-2.108 2.108-.5 1.861-.5 5.739-.5 5.739s0 3.878.5 5.739c.275 1.026 1.082 1.833 2.108 2.108 1.861.5 9.39.5 9.39.5s7.529 0 9.39-.5c1.026-.275 1.833-1.082 2.108-2.108.5-1.861.5-5.739.5-5.739s0-3.878-.5-5.739zm-13.498 9.214v-6.804l6.299 3.402-6.299 3.402z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* COL 4: ADDRESS & CONTACT */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">
              {content["footer.contact.title"] ?? "Address & Contact"}
            </h4>

            <div className="space-y-3.5 text-slate-400 leading-relaxed">
              <div className="flex gap-2.5">
                <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <strong className="text-white block font-semibold mb-0.5">
                    {content["footer.contact.jakarta-office.label"] ?? "Jakarta Office"}
                  </strong>
                  <p className="text-slate-400 text-[11px]">
                    {content["footer.contact.jakarta-office.address"] ??
                      "Permata Hijau, Bellezza BSA, Jl. Permata Hijau No.106 lt. 1, Grogol Utara, Jakarta Selatan, 12210"}
                  </p>
                </div>
              </div>

              <div className="flex gap-2.5">
                <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <strong className="text-white block font-semibold mb-0.5">
                    {content["footer.contact.yogyakarta-office.label"] ?? "Yogyakarta Office"}
                  </strong>
                  <p className="text-slate-400 text-[11px]">
                    {content["footer.contact.yogyakarta-office.address"] ??
                      "Jl. Magelang No.188, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, 55242"}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={content["footer.contact.phone.href"] ?? "tel:+6282150091305"} className="text-slate-300 hover:text-cyan-400 font-semibold transition-colors">
                    {content["footer.contact.phone.label"] ?? "+62 821-5009-1305"}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={content["footer.contact.email.href"] ?? "mailto:business@teknoloka.co.id"} className="text-slate-300 hover:text-cyan-400 font-semibold transition-colors">
                    {content["footer.contact.email.label"] ?? "business@teknoloka.co.id"}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()}{" "}
            {content["footer.copyright"] ?? "PT Teknoloka Prima Services. All rights reserved."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href={content["footer.privacy.href"] ?? "/privacy-policy"} className="hover:text-slate-300 transition-colors">
              {content["footer.privacy.label"] ?? "Privacy Policy"}
            </Link>
            <Link href={content["footer.terms.href"] ?? "/terms-and-conditions"} className="hover:text-slate-300 transition-colors">
              {content["footer.terms.label"] ?? "Terms & Conditions"}
            </Link>
            <span className="max-w-md text-center text-[10px] leading-relaxed text-slate-400">
              Statistik kunjungan mencatat IP, halaman, dan waktu; disimpan maksimal 30 hari.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent text-slate-400 transition-all cursor-pointer shadow-md group"
              title={content["footer.back-to-top.title"] ?? "Back to top"}
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
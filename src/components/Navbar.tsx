"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [consultantData, setConsultantData] = useState({ name: "", email: "", message: "" });

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const handleConsultantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${consultantData.name}, tim kami akan segera menghubungi kamu!`);
    setIsModalOpen(false);
    setConsultantData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* HEADER DARK THEME */}
      <header className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand dengan Bulatan Putih */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md shadow-white/10 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image 
                src="/images/logo.png" // Pastikan lokasi file logo Anda sudah benar
                alt="Prima Services Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="font-extrabold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              PRIMA SERVICES
            </span>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center h-full text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-cyan-400 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Tombol CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-slate-950 font-bold text-xs tracking-wide px-5 py-3 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200 cursor-pointer"
            >
              Free Consultant Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Dropdown Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-semibold py-2 ${
                    isActive ? "text-cyan-400 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Modal Popup Consultant */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95 duration-200 border border-slate-800">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white font-bold p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Konsultasi Gratis</h3>
            <p className="text-xs text-slate-400 mb-6">
              Isi formulir di bawah ini untuk berdiskusi langsung dengan tim kami.
            </p>

            <form onSubmit={handleConsultantSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={consultantData.name}
                  onChange={(e) => setConsultantData({ ...consultantData, name: e.target.value })}
                  className="w-full text-sm bg-slate-950 border border-slate-800 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all text-white placeholder-slate-500"
                  placeholder="Masukkan nama kamu"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={consultantData.email}
                  onChange={(e) => setConsultantData({ ...consultantData, email: e.target.value })}
                  className="w-full text-sm bg-slate-950 border border-slate-800 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all text-white placeholder-slate-500"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pesan / Kebutuhan
                </label>
                <textarea
                  rows={3}
                  required
                  value={consultantData.message}
                  onChange={(e) => setConsultantData({ ...consultantData, message: e.target.value })}
                  className="w-full text-sm bg-slate-950 border border-slate-800 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 transition-all text-white placeholder-slate-500"
                  placeholder="Ceritakan kebutuhan bisnis kamu..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold tracking-wide py-3.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-[0.98] cursor-pointer"
              >
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
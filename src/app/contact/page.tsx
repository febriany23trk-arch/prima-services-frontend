"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  ChevronDown, 
  HelpCircle,
  Headphones,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How fast is the response?",
      a: "Our team typically responds within 1-2 business hours during working days."
    },
    {
      q: "Can I have a demo?",
      a: "Yes, absolutely! Select your service of interest and our sales team will schedule a live demo session."
    },
    {
      q: "Is my data secure?",
      a: "We adhere to strict data protection regulations (GDPR/ISO certified) and keep your information fully confidential."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HERO BANNER SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#080d1a] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl items-center relative">
          
          {/* KIRI: TEKS HEADER & TOMBOL CONTACT US */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center items-start z-10">
            <span className="text-amber-400 font-bold text-xs tracking-widest uppercase mb-3 block">
              Contact
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Let's discuss <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
                your needs
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal max-w-lg mb-8">
              Fill out the following form and our team will contact you within 1-2 business days.
            </p>

            <div>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2.5 bg-[#070d19]/90 hover:bg-[#0c182e] text-cyan-400 border border-cyan-500/60 hover:border-cyan-400 font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* KANAN: ORNAMEN DEKORATIF ELEGAN */}
          <div className="lg:col-span-5 p-8 lg:p-12 relative flex items-center justify-center bg-slate-900/40 min-h-[300px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 gap-4 w-full relative z-10">
              <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-lg">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">24/7 Dedicated Support</h4>
                  <p className="text-[11px] text-slate-400">Fast assistance for technical inquiries</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-lg">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Fast Response</h4>
                  <p className="text-[11px] text-slate-400">Get response within 1-2 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-lg">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">ISO & Data Certified</h4>
                  <p className="text-[11px] text-slate-400">Strict privacy & confidentiality</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION FORMULIR & SIDEBAR INFORMASI */}
      <section id="contact-form" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SISI KIRI: FORMULIR LENGKAP */}
          <div className="lg:col-span-8 bg-[#080d1a] border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-xs text-slate-400 mb-8">
              Please fill out the details below and we will get back to you shortly.
            </p>

            <form className="space-y-6">
              {/* BARIS 1: NAME & WORK EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Enter your work email"
                  />
                </div>
              </div>

              {/* BARIS 2: PHONE/WHATSAPP & COMPANY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Phone/WhatsApp
                  </label>
                  <input
                    type="text"
                    className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Enter your Phone/WhatsApp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>

              {/* BARIS 3: INTERESTED IN */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Interested in
                </label>
                <div className="relative">
                  <select className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer">
                    <option value="">Select Service</option>
                    <option value="bpo">BPO & Dedicated Team</option>
                    <option value="dev">Custom Software Development</option>
                    <option value="cloud">Cloud & Infrastructure</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* BARIS 4: TIMELINE & BUDGET */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Implementation Timeline
                  </label>
                  <div className="relative">
                    <select className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer">
                      <option value="">Select Timeline</option>
                      <option value="immediate">Immediately (&lt; 1 month)</option>
                      <option value="short">1 - 3 months</option>
                      <option value="medium">3 - 6 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Budget Estimate
                  </label>
                  <div className="relative">
                    <select className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all appearance-none cursor-pointer">
                      <option value="">Select Budget Estimate</option>
                      <option value="b1">&lt; $5,000</option>
                      <option value="b2">$5,000 - $15,000</option>
                      <option value="b3">$15,000 - $50,000</option>
                      <option value="b4">$50,000+</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* BARIS 5: TELL US YOUR NEEDS */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Tell Us Your Needs
                </label>
                <textarea
                  rows={4}
                  className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  placeholder="Briefly describe the project, current tools this purpose and timeline"
                ></textarea>
              </div>

              {/* CHECKBOX PRIVACY POLICY */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-0.5 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-400 cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                  I agree to be contacted and my data processed according to the Privacy Policy.
                </label>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* SISI KANAN: SIDEBAR INFORMASI */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* KARTU 1: CONTACT INFO */}
            <div className="bg-[#080d1a] border border-slate-800/80 rounded-3xl p-6 shadow-xl">
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide">Contact</h4>
              <div className="space-y-3.5 text-xs text-slate-300">
                <a href="mailto:business@teknoloka.co.id" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">business@teknoloka.co.id</span>
                </a>
                
                {/* WHATSAPP LINK DIPERBAIKI SINI */}
                <a 
                  href="https://wa.me/6282150091305" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+62 821-5009-1305</span>
                </a>

                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Belleza BSA, Jl. Permata Hijau No.106 Lantai 1, Kel. Grogol Utara, Kec. Kebayoran Lama, Kota Adm. Jakarta Selatan, DKI Jakarta 12210
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Mon–Fri, 9:00–18:00 WIB</span>
                </div>
              </div>
            </div>

            {/* KARTU 2: GOOGLE MAPS EMBED */}
            <div className="bg-[#080d1a] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl h-48 relative">
              <iframe
                title="Belleza Permata Hijau Location"
                src="https://maps.google.com/maps?q=Belleza%20Permata%20Hijau&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* KARTU 3: FAQ */}
            <div className="bg-[#080d1a] border border-slate-800/80 rounded-3xl p-6 shadow-xl">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-800/60 pb-3 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-2 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      <span>▶ {faq.q}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${openFaq === index ? "rotate-180 text-cyan-400" : ""}`} />
                    </button>
                    {openFaq === index && (
                      <p className="mt-2 text-[11px] text-slate-400 leading-relaxed pl-3 border-l border-cyan-500/30">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
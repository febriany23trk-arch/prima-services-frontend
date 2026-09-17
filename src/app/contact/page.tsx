"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  HelpCircle
} from "lucide-react";

interface ContactInfo {
  email: string;
  phone: string;
  address_jakarta: string;
  address_yogyakarta: string;
}

export default function ContactPage() {
  const router = useRouter(); 
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "febriany23trk@mahasiswa.pcr.ac.id",
    phone: "+62 821-5003-1305",
    address_jakarta: "Permata Hijau, Bellezza BSA, Jl. Permata Hijau No.106 lt. 1, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210",
    address_yogyakarta: "Jl. Magelang No.188, Karangwaru, Tegalrejo, Kota Yogyakarta, DIY 55242"
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeline: "",
    budget: "",
    message: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/v1/company", {
          cache: "no-store"
        });
        if (res.ok) {
          const data = await res.json();
          setContactInfo(data);
        }
      } catch (error) {
        console.error("Gagal mengambil data kontak dari backend:", error);
      }
    };

    fetchContactInfo();
  }, []);

  const formattedWaNumber = contactInfo.phone.replace(/[^0-9]/g, "");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setErrorMessage("Harap setujui persetujuan pemrosesan data terlebih dahulu.");
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage("");

    try {
      // 1. Simpan data ke FastAPI (Backend Database)
      fetch("http://localhost:8000/api/v1/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch((err) => console.error("FastAPI Error:", err));

      // 2. Kirim notifikasi email langsung via Web3Forms
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "2f38f520-81ee-44e6-bdcd-f1a4afd1ba2e",
          subject: `Pesan Baru dari Website: ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Gagal mengirim pesan.");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        timeline: "",
        budget: "",
        message: "",
        consent: false,
      });

    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.message || "Terjadi masalah saat mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="bg-slate-50/60 text-slate-800 font-sans">
      
      {/* HERO BANNER SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 items-stretch relative min-h-[320px]">
          <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-center items-start z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0052cc] text-xs font-semibold mb-3">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Let's discuss <br className="hidden sm:block" />
              your needs
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Fill out the form below and our team will get back to you within 1-2 business days.
            </p>
          </div>

          <div className="lg:col-span-6 relative bg-[#1c2c4c] flex items-center justify-center p-6 min-h-[240px] overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e67e22] rounded-bl-full pointer-events-none opacity-80" />
            <div className="absolute top-0 left-0 w-3/4 h-full bg-[#16233d] rounded-r-full pointer-events-none" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contact.png"
                alt="Contact Us Team"
                className="w-full h-full max-h-[280px] object-contain object-center drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FORMULIR & SIDEBAR INFORMASI */}
      <section id="contact-form" className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SISI KIRI: FORMULIR LENGKAP */}
          <div className="lg:col-span-8 bg-white border border-slate-200/70 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            {isSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.</span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all"
                    placeholder="Enter your work email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all"
                    placeholder="Enter your Phone / WhatsApp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all"
                    placeholder="Enter Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Interested In
                </label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    <option value="BPO & Dedicated Team">BPO & Dedicated Team</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                    <option value="IT Consulting">IT Consulting</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Implementation Timeline
                  </label>
                  <div className="relative">
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Timeline</option>
                      <option value="Immediately (< 1 month)">Immediately (&lt; 1 month)</option>
                      <option value="1 - 3 months">1 - 3 months</option>
                      <option value="3 - 6 months">3 - 6 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Budget Estimate
                  </label>
                  <div className="relative">
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Budget Estimate</option>
                      <option value="< $5,000">&lt; $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Tell Us Your Needs <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-sm bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:border-[#0052cc] focus:bg-white transition-all"
                  placeholder="Briefly describe your project scope, goals, or current setup..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-0.5 rounded border-slate-300 text-[#0052cc] focus:ring-[#0052cc] cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                  I agree to be contacted and my data processed according to the <Link href="/privacy" className="text-[#0052cc] underline hover:text-[#1e4580]">Privacy Policy</Link>.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2b5ba3] hover:bg-[#1e4580] text-white font-semibold text-sm px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* SISI KANAN: SIDEBAR INFORMASI */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* KARTU 1: CONTACT INFO */}
            <div className="bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Contact Details</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </h4>
              
              <div className="space-y-4 text-xs text-slate-600">
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 text-slate-700 hover:text-[#0052cc] transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0052cc] transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email Us</p>
                    <p className="truncate font-medium text-slate-800">{contactInfo.email}</p>
                  </div>
                </a>
                
                <a 
                  href={`https://wa.me/${formattedWaNumber}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-start gap-3 text-slate-700 hover:text-[#0052cc] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">WhatsApp / Call</p>
                    <p className="font-medium text-slate-800">{contactInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-700 group">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Head Office</p>
                    <p className="leading-relaxed font-medium text-slate-800">{contactInfo.address_jakarta}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 group">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Working Hours</p>
                    <p className="font-medium text-slate-800">Mon–Fri, 9:00–18:00 WIB</p>
                    <p className="font-medium text-slate-800">Sat, 9:00–14:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KARTU 2: GOOGLE MAPS EMBED */}
            <div className="bg-white border border-slate-200/70 rounded-3xl overflow-hidden shadow-sm h-48 relative group">
              <iframe
                title="Jakarta Location"
                src="https://maps.google.com/maps?q=Jakarta,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>

            {/* KARTU 3: FAQ */}
            <div className="bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#0052cc]" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-2 text-xs font-bold text-slate-800 hover:text-[#0052cc] transition-colors py-1"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180 text-[#0052cc]" : ""}`} />
                    </button>
                    {openFaq === index && (
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed pl-3 border-l-2 border-[#0052cc] bg-slate-50/50 py-1 rounded-r-lg">
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

      {/* WHATSAPP CTA BANNER SECTION */}
      <section className="max-w-6xl mx-auto px-6 mb-0 pb-4">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0d172a] via-[#162440] to-[#0f1d38] border border-slate-700/50 overflow-hidden p-8 md:p-10 lg:p-12 min-h-[260px] shadow-xl flex items-center">
          
          <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 -top-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full relative z-10 gap-8">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Instant Response Available
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#f39c12] tracking-tight leading-tight">
                More convenient via <br className="hidden sm:block" />
                <span className="text-white">WhatsApp?</span>
              </h2>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-md font-normal">
                Start your digital transformation journey today. Contact us directly for a quick consultation and find the right solution.
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${formattedWaNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f39c12] to-[#e67e22] hover:from-[#e67e22] hover:to-[#d35400] text-slate-950 font-bold text-sm px-7 py-3 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 group transform hover:-translate-y-0.5"
                >
                  <span>Free Consultant Now</span>
                  <svg 
                    className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end min-h-[200px]">
              <div className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-center animate-bounce [animation-duration:3s]">
                <svg className="w-9 h-9 fill-[#25D366] drop-shadow-sm" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-800/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Bitmap1.png"
                  alt="WhatsApp Consultation"
                  className="w-full max-h-[240px] object-contain object-bottom relative z-10 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
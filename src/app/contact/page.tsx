"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePageContent } from "@/lib/use-page-content";
import { apiUrl } from "@/lib/api";
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
  HelpCircle,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  User,
  Building2,
  Briefcase,
  Calendar,
  Wallet,
  Check
} from "lucide-react";

interface ContactInfo {
  email: string;
  phone: string;
  address_jakarta: string;
  address_yogyakarta: string;
}

export default function ContactPage() {
  const { content, error } = usePageContent('contact');
  const SERVICES_OPTIONS = [
    content['services_options.01'] ?? 'BPO & Dedicated Team',
    content['services_options.02'] ?? 'Custom Software Development',
    content['services_options.03'] ?? 'Cloud & Infrastructure',
    content['services_options.04'] ?? 'IT Consulting'
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: content["contact.email"] ?? "febrianydeltrida@gmail.com",
    phone: content["contact.phone"] ?? "+62 821-5009-1305",
    address_jakarta: content["contact.address-jakarta"] ?? "Permata Hijau Belleza RSA, Jl. Permata Hijau No.100 lt. 1, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210",
    address_yogyakarta: content["contact.address-yogyakarta"] ?? "Jl. Magelang No.188, Karangwaru, Tegalrejo, Kota Yogyakarta, DIY 55242"
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
  const [notificationSent, setNotificationSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [notificationWarning, setNotificationWarning] = useState("");

  const initialContactInfo = {
    email: "febrianydeltrida@gmail.com",
    phone: "+62 821-5009-1305",
    address_jakarta: "Permata Hijau Belleza RSA, Jl. Permata Hijau No.100 lt. 1, Grogol Utara, Kebayoran Lama, Jakarta Selatan 12210",
    address_yogyakarta: "Jl. Magelang No.188, Karangwaru, Tegalrejo, Kota Yogyakarta, DIY 55242"
  };
  const displayContactInfo: ContactInfo = {
    email: contactInfo.email === initialContactInfo.email
      ? content["contact.email"] ?? initialContactInfo.email
      : contactInfo.email,
    phone: contactInfo.phone === initialContactInfo.phone
      ? content["contact.phone"] ?? initialContactInfo.phone
      : contactInfo.phone,
    address_jakarta: contactInfo.address_jakarta === initialContactInfo.address_jakarta
      ? content["contact.address-jakarta"] ?? initialContactInfo.address_jakarta
      : contactInfo.address_jakarta,
    address_yogyakarta: contactInfo.address_yogyakarta === initialContactInfo.address_yogyakarta
      ? content["contact.address-yogyakarta"] ?? initialContactInfo.address_yogyakarta
      : contactInfo.address_yogyakarta,
  };

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/company"), {
          cache: "no-store"
        });
        if (!res.ok) throw new Error(`Backend returned ${res.status}`);
        const data = await res.json();
        setContactInfo(data);
      } catch (error) {
        console.error("Gagal mengambil data kontak dari backend:", error);
      }
    };

    fetchContactInfo();
  }, []);

  const formattedWaNumber = displayContactInfo.phone.replace(/[^0-9]/g, "");

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

  const handleSelectService = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      service: prev.service === serviceName ? "" : serviceName
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage(content['feedback-seterrormessage.text-001'] ?? 'Format email tidak valid. Harap masukkan email yang benar (contoh: name@domain.com).');
      return false;
    }

    if (formData.phone) {
      const phoneDigits = formData.phone.replace(/[^0-9]/g, "");
      if (phoneDigits.length < 10) {
        setErrorMessage(content['feedback-seterrormessage.text-002'] ?? 'Nomor telepon tidak valid. Harap masukkan setidaknya 10 digit angka.');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setErrorMessage(content['feedback-seterrormessage.text-003'] ?? 'Harap setujui persetujuan pemrosesan data terlebih dahulu.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);
    setNotificationSent(false);
    setErrorMessage("");
    setNotificationWarning("");

    try {
      const res = await fetch(apiUrl("/api/v1/inquiries"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: {
        status?: string;
        notification?: "sent" | "failed";
        notificationDetail?: string;
        detail?: string;
      } = await res.json();

      if (!res.ok || result.status !== "success") {
        throw new Error(
          (typeof result.detail === "string" ? result.detail : null) ??
          "Gagal mengirim pesan."
        );
      }

      setIsSuccess(true);
      setNotificationSent(result.notification === "sent");
      if (result.notification === "failed") {
        setNotificationWarning(
          result.notificationDetail ||
            "Pesan tersimpan dan tersedia di halaman admin, tetapi email notifikasi ke admin gagal dikirim.",
        );
      }
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

    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        error instanceof Error ? error.message : content['feedback-seterrormessage.text-005'] ?? 'Terjadi masalah saat mengirim pesan.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: content['faqs.0.q'] ?? 'How fast is the response?',
      a: content['faqs.0.a'] ?? 'Our team typically responds within 1-2 business hours during working days.'
    },
    {
      q: content['faqs.1.q'] ?? 'Can I have a demo?',
      a: content['faqs.1.a'] ?? 'Yes, absolutely! Select your service of interest and our sales team will schedule a live demo session.'
    },
    {
      q: content['faqs.2.q'] ?? 'Is my data secure?',
      a: content['faqs.2.a'] ?? 'We adhere to strict data protection regulations (GDPR/ISO certified) and keep your information fully confidential.'
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-sans relative overflow-x-hidden selection:bg-indigo-600 selection:text-white min-h-screen">
      {error && (
        <p role="alert" className="relative z-20 mx-auto mt-3 max-w-7xl px-4 text-sm text-amber-800">
          {error}
        </p>
      )}

      {/* GRID PATTERN OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none -z-10" />

      {/* HERO BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-0 pb-12 -mt-6 sm:-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm overflow-hidden items-stretch relative">

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start z-10 relative">

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 text-xs font-black mb-8 shadow-xs">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="tracking-widest uppercase">{content['hero.span.text-001'] ?? "Let's Build Together"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="text-slate-900">{content['hero.span.text-002'] ?? "Let's discuss"}</span> <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {content['hero.span.text-003'] ?? 'your vision.'}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium mb-10">
              {content['hero.p.text-001'] ?? 'Fill out the form below and our dedicated tech specialists will reach out to schedule your personalized consultation within'} <span className="font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">{content['hero.span.text-004'] ?? '1-2 business hours'}</span>{content['hero.p.text-002'] ?? '.'}
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-slate-100 w-full max-w-xl">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-xl bg-amber-100/80 text-amber-600 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="leading-tight">{content['features.span.text-005'] ?? 'Fast Turnaround'}</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-xl bg-emerald-100/80 text-emerald-600 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="leading-tight">{content['features.span.text-006'] ?? 'NDA Protected'}</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="p-2 rounded-xl bg-blue-100/80 text-blue-600 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="leading-tight">{content['features.span.text-007'] ?? '24/7 Support'}</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative bg-white flex items-center justify-center p-8 lg:p-12 overflow-hidden min-h-[480px]">
            <div className="relative z-10 w-full max-w-sm flex flex-col items-center justify-center space-y-4">

              <div className="w-full bg-white border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between text-slate-800 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-500 border border-amber-100">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{content['features.span.text-008'] ?? 'Avg. Response Time'}</span>
                </div>
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">{content['features.span.text-009'] ?? '< 15 Mins'}</span>
              </div>

              <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={content['contact.features.image.src'] ?? "/images/contact.png"}
                  alt={content['features.img.alt-001'] ?? 'Team Specialist'}
                  className="w-full h-auto object-cover rounded-2xl relative z-10"
                />

                <div className="absolute bottom-5 left-5 right-5 z-20 bg-white/95 border border-slate-200 p-3.5 rounded-2xl flex items-center justify-between text-slate-900 shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <p className="text-xs font-black text-slate-900">{content['features.p.text-003'] ?? 'Tech Specialists'}</p>
                      <p className="text-[10px] font-medium text-slate-500">{content['features.p.text-004'] ?? 'Ready to assist you live'}</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-700 font-black px-2.5 py-1 rounded-full">
                    {content['features.span.text-010'] ?? 'Online'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FORM & SIDEBAR SECTION */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* FORM CONTAINER */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div>
              <div className="mb-10">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                  {content['contact.span.text-011'] ?? 'Project Inquiry'}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 mb-2 tracking-tight">
                  {content['contact.h3.text-001'] ?? 'Send Us a Message'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">{content['contact.p.text-005'] ?? "Tell us about your project or inquiry and we'll prepare a customized proposal."}</p>
              </div>

              {isSuccess && (
                <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-extrabold text-emerald-900">
                      {notificationSent ? "Pesan terkirim ke email admin" : "Pesan berhasil disimpan"}
                    </p>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      {notificationSent
                        ? "Inquiry juga tersimpan di portal admin. Tim kami akan segera menghubungi Anda."
                        : "Inquiry tersimpan dan dapat dilihat di portal admin."}
                    </p>
                    {notificationWarning && (
                      <p className="text-xs text-amber-700 mt-2" role="status">
                        {notificationWarning}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-8 p-5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-sm flex items-center gap-4">
                  <AlertCircle className="w-6 h-6 text-rose-600 shrink-0" />
                  <div>
                    <p className="font-extrabold text-rose-900">{content['contact.p.text-008'] ?? 'Unable to Send Message'}</p>
                    <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{content['contact.span.text-012'] ?? 'Name'}</span> <span className="text-indigo-600">{content['contact.span.text-013'] ?? '*'}</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 font-medium"
                      placeholder={content['contact.input.placeholder-001'] ?? 'John Doe'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{content['contact.span.text-014'] ?? 'Work Email'}</span> <span className="text-indigo-600">{content['contact.span.text-015'] ?? '*'}</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 font-medium"
                      placeholder={content['contact.input.placeholder-002'] ?? 'john@company.com'}
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{content['contact.span.text-016'] ?? 'Phone / WhatsApp'}</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 font-medium"
                      placeholder={content['contact.input.placeholder-003'] ?? '+62 812 3456 7890'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{content['contact.span.text-017'] ?? 'Company'}</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 font-medium"
                      placeholder={content['contact.input.placeholder-004'] ?? 'Company Inc.'}
                    />
                  </div>
                </div>

                {/* Service Chips */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{content['features.span.text-018'] ?? 'Interested In'}</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES_OPTIONS.map((svc) => {
                      const isSelected = formData.service === svc;
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleSelectService(svc)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl border text-xs font-extrabold transition-all duration-200 cursor-pointer text-left ${
                            isSelected
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-indigo-600 shadow-xs"
                              : "bg-white border-slate-200 text-slate-700 hover:border-indigo-300"
                          }`}
                        >
                          <span>{svc}</span>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{content['features.span.text-019'] ?? 'Implementation Timeline'}</span>
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 appearance-none cursor-pointer font-medium"
                      >
                        <option value="" className="text-slate-400">{content['features.option.text-001'] ?? 'Select Timeline'}</option>
                        <option value={"Immediately (< 1 month)"}>{content['features.option.text-002'] ?? 'Immediately (< 1 month)'}</option>
                        <option value="1 - 3 months">{content['features.option.text-003'] ?? '1 - 3 months'}</option>
                        <option value="3 - 6 months">{content['features.option.text-004'] ?? '3 - 6 months'}</option>
                        <option value="Just exploring">{content['features.option.text-005'] ?? 'Just exploring'}</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{content['features.span.text-020'] ?? 'Budget Estimate'}</span>
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full text-sm bg-white border border-slate-200 rounded-2xl px-4 py-3.5 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 appearance-none cursor-pointer font-medium"
                      >
                        <option value="" className="text-slate-400">{content['features.option.text-006'] ?? 'Select Budget Estimate'}</option>
                        <option value={"< $5,000"}>{content['features.option.text-007'] ?? '< $5,000'}</option>
                        <option value="$5,000 - $15,000">{content['features.option.text-008'] ?? '$5,000 - $15,000'}</option>
                        <option value="$15,000 - $50,000">{content['features.option.text-009'] ?? '$15,000 - $50,000'}</option>
                        <option value="$50,000+">{content['features.option.text-010'] ?? '$50,000+'}</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                    {content['features.label.text-001'] ?? 'Tell Us Your Needs'} <span className="text-indigo-600">{content['features.span.text-021'] ?? '*'}</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 font-medium"
                    placeholder={content['features.textarea.placeholder-001'] ?? 'Briefly describe your project scope, timeline, or current challenges...'}
                  ></textarea>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-0.5 rounded-lg border-slate-300 bg-white text-indigo-600 focus:ring-indigo-500 cursor-pointer w-4 h-4 accent-indigo-600"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none font-medium">
                    {content['features.label.text-002'] ?? 'I agree to be contacted and my data processed according to the'} <Link href={content['features.link.href-001'] ?? '/privacy'} className="text-indigo-600 font-extrabold hover:underline">{content['features.link.text-001'] ?? 'Privacy Policy'}</Link>{content['features.label.text-003'] ?? '.'}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-sm px-10 py-4 rounded-2xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>{content['features.span.text-022'] ?? 'Sending Message...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{content['features.span.text-023'] ?? 'Send Message'}</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT INFO SIDEBAR */}
          <div className="lg:col-span-4 space-y-6 flex flex-col">

            <div className="shrink-0 bg-white rounded-[2.5rem] p-8 border border-slate-200/80 shadow-sm relative overflow-hidden">

              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400" />

              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 pb-4 border-b border-slate-100 flex items-center justify-between">
                <span>{content['contact.span.text-024'] ?? 'Contact Details'}</span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </h4>

              <div className="space-y-6 text-xs">
                {/* Email */}
                <a href={`mailto:${displayContactInfo.email}`} className="flex items-start gap-4 group/item">
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-200 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-1">{content['contact.p.text-009'] ?? 'Email Us'}</p>
                    <p className="truncate font-extrabold text-slate-800 group-hover/item:text-indigo-600 transition-colors">{displayContactInfo.email}</p>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={`https://wa.me/${formattedWaNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 group/item"
                >
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all duration-200 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-1">{content['contact.p.text-010'] ?? 'WhatsApp / Call'}</p>
                    <p className="font-extrabold text-slate-800 group-hover/item:text-emerald-600 transition-colors">{displayContactInfo.phone}</p>
                  </div>
                </a>

                {/* Head Office */}
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="w-full min-w-0 pt-0.5">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-1">{content['contact.p.text-011'] ?? 'Head Office'}</p>
                    <p className="font-semibold text-slate-700 text-xs leading-relaxed break-words [overflow-wrap:anywhere]">
                      {displayContactInfo.address_jakarta}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-1">{content['contact.p.text-012'] ?? 'Working Hours'}</p>
                    <p className="font-semibold text-slate-700">{content['contact.p.text-013'] ?? 'Mon–Fri, 9:00–18:00 WIB'}</p>
                    <p className="font-semibold text-slate-700">{content['contact.p.text-014'] ?? 'Sat, 9:00–14:00 WIB'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP EMBED */}
            <div className="bg-white border border-slate-200/80 rounded-[2.5rem] overflow-hidden shadow-sm h-[320px] min-h-[260px] relative">
              <iframe
                title={content['contact.iframe.title-001'] ?? 'Jakarta Location'}
                src="https://maps.google.com/maps?q=Jakarta,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-14 shadow-sm relative overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-black mb-4">
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span className="tracking-widest uppercase text-[11px]">{content['faq.span.text-025'] ?? 'Frequently Asked Questions'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {content['faq.h2.text-001'] ?? 'Frequently Asked'} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {content['faq.span.text-026'] ?? 'Questions'}
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-200 p-[1px] ${
                    isOpen
                      ? "bg-indigo-500 shadow-sm"
                      : "bg-slate-200"
                  }`}
                >
                  <div className="bg-white rounded-[15px] overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-800 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-black w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                            : "bg-white border border-slate-200 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        }`}>
                          {content['faq.span.text-027'] ?? '0'}{index + 1}
                        </span>
                        <span className={`text-base sm:text-lg tracking-tight transition-colors ${
                          isOpen ? "text-indigo-950 font-black" : "text-slate-800 group-hover:text-indigo-600"
                        }`}>
                          {faq.q}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                        isOpen
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rotate-180"
                          : "bg-white border border-slate-200 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600"
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed">
                        <div className="pl-4 border-l-2 border-indigo-500 py-2 bg-white rounded-r-2xl p-4 border border-slate-100 shadow-xs">
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHATSAPP CTA BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border border-indigo-500/30 overflow-hidden p-8 sm:p-12 lg:p-16 shadow-lg text-white">

          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full relative z-10 gap-10">

            <div className="lg:col-span-7 space-y-6 text-left">

              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="tracking-wider uppercase text-[11px]">{content['cta.span.text-028'] ?? 'Instant Response Available'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12]">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {content['cta.span.text-029'] ?? 'More convenient via'}
                </span> <br />
                <span className="text-white">{content['cta.span.text-030'] ?? 'WhatsApp?'}</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg font-medium">
                {content['cta.p.text-015'] ?? 'Start your digital transformation journey today. Chat with our solutions architect directly for a quick consultation.'}
              </p>

              <div className="pt-3">
                <a
                  href={`https://wa.me/${formattedWaNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base px-9 py-4 rounded-2xl shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <span>{content['cta.span.text-031'] ?? 'Free Consultation Now'}</span>
                  <div className="p-1 rounded-xl bg-slate-950/10 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5 text-slate-950" />
                  </div>
                </a>
              </div>

            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[300px]">

              <div className="relative w-full max-w-sm rounded-3xl p-3 bg-white/5 border border-white/10 shadow-2xl">

                <div className="absolute top-6 left-6 z-20 bg-slate-950/80 border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-black text-slate-200">{content['cta.span.text-032'] ?? '24/7 WhatsApp Specialist'}</span>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={content['contact.cta.image.src'] ?? "/images/Bitmap1.png"}
                    alt={content['cta.img.alt-002'] ?? 'WhatsApp Consultation Specialist'}
                    className="w-full h-64 sm:h-72 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 border border-white/20 p-3.5 rounded-2xl flex items-center justify-between text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                      {content['cta.div.text-001'] ?? 'WA'}
                    </div>
                    <div>
                      <p className="text-xs font-black text-white">{content['cta.p.text-016'] ?? 'Direct Consultation'}</p>
                      <p className="text-[10px] text-slate-300 font-medium">{content['cta.p.text-017'] ?? 'Fast response guaranteed'}</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-black px-2.5 py-1 rounded-full">
                    {content['cta.span.text-033'] ?? 'Active'}
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
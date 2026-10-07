"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Layers,
  Building2,
  Inbox,
  LogOut,
  Search,
  Bell,
  Plus,
  FileText,
  Pencil,
  Trash2,
  Clock,
  X,
  ArrowLeft,
  UserCheck,
  Loader2,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Shield,
  Lightbulb,
  Handshake,
  Zap,
  Trophy,
  Server,
  Building,
  Code,
  Laptop,
  Users,
  Wifi,
  Activity,
} from "lucide-react";
import PageContentEditor from "@/app/admin/PageContentEditor";
import PortfolioManager from "@/app/admin/PortfolioManager";

// Tipe Data TypeScript
interface CoreValue {
  id: number;
  name: string;
  description: string;
}

interface Facility {
  id: number;
  icon: string;
  text: string;
}

interface CompanyProfile {
  vision: string;
  mission: string;
  email: string;
  phone: string;
  address_jakarta: string;
  address_yogyakarta: string;
  coreValues: CoreValue[];
  facilities: Facility[];
}

interface Service {
  id: string | number;
  name: string;
  category: string;
  description: string;
  status?: string;
}

interface Inquiry {
  id: string | number;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  notes?: string;
  replySubject?: string | null;
  replyBody?: string | null;
  repliedAt?: string | null;
  isOverdue?: boolean;
  date?: string;
  status: "New" | "Pending" | "Replied" | string;
}

interface VisitorEvent {
  id: string;
  ipAddress: string;
  path: string;
  visitedAt: string;
}

type InquiryFilter = "all" | "new-pending" | "replied" | "overdue";
type RecentInquiryStatusFilter = "all" | "new" | "pending" | "replied";
type VisitorRange = "7d" | "30d" | "1y";

const API_BASE_URL = "/api/v1/admin";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"dashboard" | "services" | "portfolios" | "company" | "inquiries" | "content" | "analytics">("dashboard");

  // State awal dikosongkan (tanpa dummy data)
  const [services, setServices] = useState<Service[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [companyProfile, setCompanyProfile] = useState<CompanyProfile>({
    vision: "",
    mission: "",
    email: "",
    phone: "",
    address_jakarta: "",
    address_yogyakarta: "",
    coreValues: [],
    facilities: []
  });

  const [selectedCoreValueId, setSelectedCoreValueId] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [adminDataError, setAdminDataError] = useState("");
  const [dataLoadAttempt, setDataLoadAttempt] = useState(0);
  const [isSubmittingCompany, setIsSubmittingCompany] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryFilter, setInquiryFilter] = useState<InquiryFilter>("all");
  const [recentStatusFilter, setRecentStatusFilter] =
    useState<RecentInquiryStatusFilter>("all");
  const [recentServiceFilter, setRecentServiceFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState<"all" | "active">("all");
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [visitorEvents, setVisitorEvents] = useState<VisitorEvent[]>([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorAnalyticsError, setVisitorAnalyticsError] = useState("");
  const [isLoadingVisitorAnalytics, setIsLoadingVisitorAnalytics] = useState(true);
  const [visitorAnalyticsReload, setVisitorAnalyticsReload] = useState(0);
  const [visitorRange, setVisitorRange] = useState<VisitorRange>("30d");
  const visitorRangeLabels: Record<VisitorRange, string> = {
    "7d": "7 hari terakhir",
    "30d": "1 bulan terakhir",
    "1y": "1 tahun terakhir",
  };

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [inquiryStatus, setInquiryStatus] = useState<string>("New");
  const [inquiryNotes, setInquiryNotes] = useState<string>("");
  const [inquiryReplySubject, setInquiryReplySubject] = useState("Re: Inquiry Prima Services");
  const [inquiryReplyBody, setInquiryReplyBody] = useState("");
  const [inquiryActionError, setInquiryActionError] = useState("");
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [isSendingInquiryReply, setIsSendingInquiryReply] = useState(false);

  const [newService, setNewService] = useState({ name: "", category: "", description: "" });
  const [editingService, setEditingService] = useState<Service | null>(null);

  const [isSubmittingService, setIsSubmittingService] = useState(false);

  const totalInquiries = inquiries.length;
  const activeServicesCount = services.filter((s) => !s.status || s.status === "Active").length;
  const pendingRepliesCount = inquiries.filter((i) => i.status === "New" || i.status === "Pending").length;
  const repliedInquiriesCount = inquiries.filter((i) => i.status === "Replied").length;
  const overdueInquiriesCount = inquiries.filter((i) => i.isOverdue).length;
  const newInquiries = inquiries.filter((i) => i.status === "New");
  const inquiryServices = [...new Set(inquiries.map((inquiry) => inquiry.service).filter(Boolean))];
  const recentInquiries = inquiries
    .filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchesStatus =
        recentStatusFilter === "all" ||
        (recentStatusFilter === "new" && item.status === "New") ||
        (recentStatusFilter === "pending" && item.status === "Pending") ||
        (recentStatusFilter === "replied" && item.status === "Replied");
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.message.toLowerCase().includes(query) ||
        Boolean(item.company?.toLowerCase().includes(query));
      return (
        matchesStatus &&
        matchesSearch &&
        (recentServiceFilter === "all" || item.service === recentServiceFilter)
      );
    })
    .slice(0, 5);

  const filteredInquiries = inquiries.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      (item.name && item.name.toLowerCase().includes(q)) ||
      (item.company && item.company.toLowerCase().includes(q)) ||
      (item.email && item.email.toLowerCase().includes(q)) ||
      (item.service && item.service.toLowerCase().includes(q)) ||
      (item.message && item.message.toLowerCase().includes(q));
    const matchesFilter =
      inquiryFilter === "all" ||
      (inquiryFilter === "new-pending" &&
        (item.status === "New" || item.status === "Pending")) ||
      (inquiryFilter === "replied" && item.status === "Replied") ||
      (inquiryFilter === "overdue" && item.isOverdue);
    return Boolean(matchesSearch && matchesFilter);
  });

  const openInquiries = (filter: InquiryFilter) => {
    setInquiryFilter(filter);
    setSearchQuery("");
    setActiveTab("inquiries");
  };

  const filteredServices = services.filter((item) => {
    const q = searchQuery.toLowerCase();
    const isActive = !item.status || item.status === "Active";
    return (serviceFilter === "all" || isActive) && (
      (item.name && item.name.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  });

  const openServices = () => {
    setServiceFilter("active");
    setSearchQuery("");
    setActiveTab("services");
  };

  const openFacilities = () => {
    setActiveTab("company");
    window.setTimeout(() => {
      document.getElementById("company-facilities")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  useEffect(() => {
    if (activeTab !== "analytics") return;
    let cancelled = false;

    void fetch(`${API_BASE_URL}/analytics/visitors?range=${visitorRange}`, {
      cache: "no-store",
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.detail || `Gagal memuat analytics (${response.status}).`);
        }
        if (
          !Array.isArray(result.visits) ||
          typeof result.total !== "number"
        ) {
          throw new Error("Format data Visitor Analytics tidak valid.");
        }
        if (!cancelled) {
          setVisitorEvents(result.visits);
          setVisitorCount(result.total);
          setVisitorAnalyticsError("");
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setVisitorAnalyticsError(
            error instanceof Error ? error.message : "Visitor Analytics gagal dimuat.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoadingVisitorAnalytics(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeTab, visitorAnalyticsReload, visitorRange]);
  const fetchBackendData = async () => {
    try {
      const [resServices, resInquiries, resCompany] = await Promise.all([
        fetch(`${API_BASE_URL}/services`, { cache: "no-store" }),
        fetch(`${API_BASE_URL}/inquiries`, { cache: "no-store" }),
        fetch(`${API_BASE_URL}/company`, { cache: "no-store" })
      ]);

      if (resServices.ok) {
        const dataServices = await resServices.json();
        setServices(Array.isArray(dataServices) ? dataServices : []);
      }
      if (resInquiries.ok) {
        const dataInquiries = await resInquiries.json();
        setInquiries(Array.isArray(dataInquiries) ? dataInquiries : []);
      }
      if (resCompany.ok) {
        const data = await resCompany.json();
        if (data && Object.keys(data).length > 0) {
          setCompanyProfile({
            vision: data.vision || "",
            mission: data.mission || "",
            email: data.email || "",
            phone: data.phone || "",
            address_jakarta: data.address_jakarta || "",
            address_yogyakarta: data.address_yogyakarta || "",
            coreValues: Array.isArray(data.coreValues) ? data.coreValues : [],
            facilities: Array.isArray(data.facilities) ? data.facilities : []
          });

          if (Array.isArray(data.coreValues) && data.coreValues.length > 0) {
            setSelectedCoreValueId(data.coreValues[0].id);
          }
        }
      }
    } catch (error) {
      console.error("Failed to load admin data from the application server:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error(`Logout failed (${response.status}).`);
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Failed to sign out:", error);
      alert("Gagal keluar. Silakan coba lagi.");
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      let lastError = "Database belum merespons.";
      try {
        for (let attempt = 0; attempt < 3; attempt += 1) {
          try {
            const endpoints = [
              ["services", `${API_BASE_URL}/services`],
              ["inquiries", `${API_BASE_URL}/inquiries`],
              ["company profile", `${API_BASE_URL}/company`],
            ] as const;
            const responses = await Promise.all(
              endpoints.map(([, url]) => fetch(url, { cache: "no-store" })),
            );
            const failed = responses
              .map((response, index) =>
                response.ok ? null : `${endpoints[index][0]} (${response.status})`,
              )
              .filter((failure): failure is string => failure !== null);

            if (failed.length > 0) {
              lastError = `Gagal memuat: ${failed.join(", ")}.`;
            } else {
              const [dataServices, dataInquiries, dataCompany] = await Promise.all(
                responses.map((response) => response.json()),
              );
              setServices(dataServices);
              setInquiries(dataInquiries);
              setCompanyProfile(dataCompany);
              if (dataCompany.coreValues.length > 0) {
                setSelectedCoreValueId(dataCompany.coreValues[0].id);
              }
              setAdminDataError("");
              return;
            }
          } catch {
            lastError = "Tidak dapat terhubung ke server aplikasi atau database.";
          }

          if (attempt < 2) {
            await new Promise((resolve) => setTimeout(resolve, 1500));
          }
        }
        setAdminDataError(
          `${lastError} Periksa koneksi database Neon, lalu coba muat ulang data.`,
        );
      } finally {
        setLoading(false);
      }
    };
    void loadInitialData();
  }, [dataLoadAttempt]);

  useEffect(() => {
    const refreshInquiries = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/inquiries`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Inquiry refresh failed (${response.status}).`);
        }
        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Inquiry refresh returned invalid data.");
        }
        setInquiries(data as Inquiry[]);
      } catch (error) {
        console.error("Failed to refresh inquiry statuses:", error);
      }
    };

    const intervalId = window.setInterval(() => void refreshInquiries(), 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  const handleSaveVisionMission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCompany(true);
    try {
      const res = await fetch(`${API_BASE_URL}/company`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companyProfile)
      });
      if (res.ok) {
        const updatedData = await res.json().catch(() => null);
        if (updatedData) {
          setCompanyProfile((prev) => ({ ...prev, ...updatedData }));
        }
        alert("Company Profile updated successfully!");
      } else {
        alert("Failed to save to server.");
      }
    } catch (error) {
      console.error("Failed to update Vision & Mission:", error);
      alert("Network error occurred.");
    } finally {
      setIsSubmittingCompany(false);
    }
  };

  const handleSaveContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCompany(true);
    try {
      const res = await fetch(`${API_BASE_URL}/company`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companyProfile)
      });
      if (res.ok) {
        const updatedData = await res.json().catch(() => null);
        if (updatedData) {
          setCompanyProfile((prev) => ({ ...prev, ...updatedData }));
        }
        alert("Office contact information updated successfully!");
      } else {
        alert("Failed to save contact info to server.");
      }
    } catch (error) {
      console.error("Failed to update contact:", error);
    } finally {
      setIsSubmittingCompany(false);
    }
  };

  const handleUpdateCoreValueItem = (id: number, field: string, value: string) => {
    setCompanyProfile((prev) => ({
      ...prev,
      coreValues: prev.coreValues.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    }));
  };

  const handleAddCoreValue = () => {
    const newId = Date.now();
    const newItem = {
      id: newId,
      name: "NEW VALUE",
      description: "Description of the new core value."
    };
    setCompanyProfile((prev) => ({
      ...prev,
      coreValues: [...prev.coreValues, newItem]
    }));
    setSelectedCoreValueId(newId);
  };

  const handleDeleteCoreValue = (id: number) => {
    setCompanyProfile((prev) => {
      const updated = prev.coreValues.filter((v) => v.id !== id);
      if (selectedCoreValueId === id && updated.length > 0) {
        setSelectedCoreValueId(updated[0].id);
      }
      return { ...prev, coreValues: updated };
    });
  };

  const handleUpdateFacilityItem = (id: number, field: string, value: string) => {
    setCompanyProfile((prev) => ({
      ...prev,
      facilities: prev.facilities.map((f) => (f.id === id ? { ...f, [field]: value } : f))
    }));
  };

  const handleAddFacility = () => {
    const newId = Date.now();
    const newItem = {
      id: newId,
      icon: "Shield",
      text: "New facility description."
    };
    setCompanyProfile((prev) => ({
      ...prev,
      facilities: [...prev.facilities, newItem]
    }));
  };

  const handleDeleteFacility = (id: number) => {
    setCompanyProfile((prev) => ({
      ...prev,
      facilities: prev.facilities.filter((f) => f.id !== id)
    }));
  };

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newService.name || !newService.category) return;
    setIsSubmittingService(true);
    try {
      const res = await fetch(`${API_BASE_URL}/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService)
      });
      if (res.ok) {
        setNewService({ name: "", category: "", description: "" });
        setIsServiceModalOpen(false);
        fetchBackendData();
      }
    } catch (error) {
      console.error("Failed to add service:", error);
    } finally {
      setIsSubmittingService(false);
    }
  };

  const handleOpenEditModal = (service: Service) => {
    setEditingService({
      id: service.id,
      name: service.name || "",
      category: service.category || "",
      description: service.description || "",
      status: service.status || "Active"
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    setIsSubmittingService(true);
    try {
      const res = await fetch(`${API_BASE_URL}/services/${editingService.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingService)
      });
      if (res.ok) {
        setIsEditModalOpen(false);
        setEditingService(null);
        fetchBackendData();
      }
    } catch (error) {
      console.error("Failed to update service:", error);
    } finally {
      setIsSubmittingService(false);
    }
  };

  const handleDeleteService = async (id: string | number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/services/${id}`, { method: "DELETE" });
      if (res.ok) fetchBackendData();
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  const handleOpenRespondModal = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setInquiryStatus(inquiry.status);
    setInquiryNotes(inquiry.notes || "");
    setInquiryReplySubject(inquiry.replySubject || "Re: Inquiry Prima Services");
    setInquiryReplyBody("");
    setInquiryActionError("");
  };

  const handleUpdateInquiryStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInquiry) return;
    setIsSubmittingInquiry(true);
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries/${selectedInquiry.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: inquiryStatus, notes: inquiryNotes })
      });
      const result: { detail?: string } = await res.json();
      if (!res.ok) {
        throw new Error(result.detail || `Failed to save inquiry (${res.status}).`);
      }
      setSelectedInquiry(null);
      void fetchBackendData();
    } catch (error) {
      console.error("Failed to update inquiry:", error);
      setInquiryActionError(error instanceof Error ? error.message : "Gagal menyimpan inquiry.");
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  const handleSendInquiryReply = async () => {
    if (!selectedInquiry) return;
    setIsSendingInquiryReply(true);
    setInquiryActionError("");
    try {
      const response = await fetch(`${API_BASE_URL}/inquiries/${selectedInquiry.id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channel: "email",
          subject: inquiryReplySubject,
          message: inquiryReplyBody,
        }),
      });
      const result: {
        detail?: string;
        inquiry?: Inquiry;
        status?: string;
      } = await response.json().catch(() => ({}));
      if (!response.ok) {
        setInquiryActionError(
          result.detail || `Balasan gagal dikirim (${response.status}).`,
        );
        return;
      }
      if (result.inquiry) {
        setSelectedInquiry(result.inquiry);
        setInquiryStatus(result.inquiry.status);
        setInquiries((current) =>
          current.map((inquiry) =>
            inquiry.id === result.inquiry?.id ? result.inquiry : inquiry,
          ),
        );
      }
      void fetchBackendData();
      alert(
        "Server email menerima balasan. Status inquiry diubah menjadi Done Respond.",
      );
    } catch (error) {
      console.error("Failed to send inquiry reply:", {
        name: error instanceof Error ? error.name : "unknown",
      });
      setInquiryActionError(
        "Tidak dapat menghubungi server untuk mengirim balasan. Periksa koneksi lalu coba lagi.",
      );
    } finally {
      setIsSendingInquiryReply(false);
    }
  };

  const renderValueIcon = (name: string, isSelected: boolean) => {
    const iconClass = `w-4 h-4 ${isSelected ? "text-indigo-600" : "text-slate-500"}`;
    switch ((name || "").toUpperCase()) {
      case "INTEGRITY":
        return <Shield className={iconClass} />;
      case "INNOVATION":
        return <Lightbulb className={iconClass} />;
      case "COLLABORATION":
        return <Handshake className={iconClass} />;
      case "AGILITY":
        return <Zap className={iconClass} />;
      case "EXCELLENCE":
        return <Trophy className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const renderFacilityIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-indigo-900";
    switch (iconName) {
      case "Shield":
        return <Shield className={iconClass} />;
      case "Server":
        return <Server className={iconClass} />;
      case "Building":
        return <Building className={iconClass} />;
      case "Clock":
        return <Clock className={iconClass} />;
      case "Code":
        return <Code className={iconClass} />;
      case "Laptop":
        return <Laptop className={iconClass} />;
      case "Users":
        return <Users className={iconClass} />;
      case "Wifi":
        return <Wifi className={iconClass} />;
      case "Zap":
        return <Zap className={iconClass} />;
      default:
        return <Building className={iconClass} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-600 gap-4 font-sans">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xl flex items-center gap-4">
          <Loader2 className="w-7 h-7 animate-spin text-indigo-600" />
          <div>
            <p className="text-sm font-semibold text-slate-800">Loading Prima Services Admin...</p>
            <p className="text-xs text-slate-500 mt-0.5">Memuat data dari database...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 font-sans flex antialiased selection:bg-indigo-500 selection:text-white">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white text-slate-700 flex flex-col justify-between shrink-0 hidden lg:flex border-r border-slate-200 sticky top-0 h-screen z-40 shadow-sm">
        <div>
          <div className="h-20 flex items-center px-7 border-b border-slate-100 bg-white">
            <div className="relative w-40 h-10 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Prima Services Admin Logo"
                fill
                quality={100}
                unoptimized
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="p-4 space-y-1.5 mt-2">
            <span className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
              Core Management
            </span>

            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "dashboard"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className={`w-4 h-4 ${activeTab === "dashboard" ? "text-white" : "text-slate-500"}`} />
              <span>Dashboard Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "services"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className={`w-4 h-4 ${activeTab === "services" ? "text-white" : "text-slate-500"}`} />
              <span>Services Catalog</span>
            </button>

            <button
              onClick={() => setActiveTab("content")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "content"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className={`w-4 h-4 ${activeTab === "content" ? "text-white" : "text-slate-500"}`} />
              <span>Public Page Content</span>
            </button>

            <button
              onClick={() => setActiveTab("portfolios")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "portfolios"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className={`w-4 h-4 ${activeTab === "portfolios" ? "text-white" : "text-slate-500"}`} />
              <span>Portfolio Gallery</span>
            </button>

            <button
              onClick={() => setActiveTab("company")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "company"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Building2 className={`w-4 h-4 ${activeTab === "company" ? "text-white" : "text-slate-500"}`} />
              <span>Company Profile</span>
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Inbox className={`w-4 h-4 ${activeTab === "inquiries" ? "text-white" : "text-slate-500"}`} />
                <span>Customer Inquiries</span>
              </div>
              <span className={`font-bold text-[10px] px-2.5 py-0.5 rounded-full ${
                activeTab === "inquiries" ? "bg-white/20 text-white" : "bg-amber-100 text-amber-700 border border-amber-200"
              }`}>
                {totalInquiries}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "analytics"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
              }`}
            >
              <Activity className={`w-4 h-4 ${activeTab === "analytics" ? "text-white" : "text-slate-500"}`} />
              <span>Visitor Analytics</span>
            </button>
          </div>
        </div>

        <div className="p-4 m-3 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-sm shrink-0">
                  A
                </div>
                <span className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full absolute -bottom-0.5 -right-0.5"></span>
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-900 truncate">Prima Services Admin</p>
                <p className="text-[10px] text-slate-500 truncate">{companyProfile.email || "admin@teknoloka.co.id"}</p>
              </div>
            </div>
            <button onClick={handleLogout} title="Sign Out" aria-label="Sign Out" className="text-slate-400 hover:text-red-600 transition-colors p-2 rounded-xl hover:bg-white shrink-0 cursor-pointer">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-100/50">
        <header className="h-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight capitalize flex items-center gap-2">
              {activeTab === "dashboard" && "Dashboard Overview"}
              {activeTab === "services" && "Services Management"}
              {activeTab === "company" && "Company Profile Settings"}
              {activeTab === "inquiries" && "Customer Inquiries"}
              {activeTab === "content" && "Public Page Content"}
              {activeTab === "portfolios" && "Portfolio Gallery"}
              {activeTab === "analytics" && "Visitor Analytics"}
            </h1>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block mt-0.5">
              Control Panel & System Management Prima Services
            </p>
          </div>

          <div className="flex items-center gap-3.5 relative">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                className="pl-9 pr-8 py-2 text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear Search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                aria-label="Notifications"
                className="relative p-2.5 bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <Bell className="w-4 h-4" />
                {newInquiries.length > 0 && (
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full absolute top-2 right-2 ring-2 ring-white animate-pulse"></span>
                )}
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl py-3 z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-slate-900">Notifications</span>
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {newInquiries.length} New
                    </span>
                  </div>

                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                    {newInquiries.length > 0 ? (
                      newInquiries.map((notif) => (
                        <div
                          key={notif.id}
                          onClick={() => {
                            setActiveTab("inquiries");
                            handleOpenRespondModal(notif);
                            setIsNotifOpen(false);
                          }}
                          className="p-3.5 hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                          <p className="font-semibold text-slate-800 truncate">{notif.name}</p>
                          <p className="text-[11px] text-slate-500 truncate mb-1">{notif.service}</p>
                          <span className="text-[10px] text-slate-400">{notif.date || "Just now"}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-slate-400 text-[11px]">
                        No new unread inquiries.
                      </div>
                    )}
                  </div>

                  <div className="pt-2.5 px-4 border-t border-slate-100 text-center">
                    <button
                      onClick={() => {
                        setActiveTab("inquiries");
                        setIsNotifOpen(false);
                      }}
                      className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All Inquiries</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="p-6 lg:p-10 flex-1 overflow-y-auto">
          {adminDataError && (
            <div
              role="alert"
              className="mx-auto mb-6 flex max-w-7xl flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 sm:flex-row sm:items-center sm:justify-between"
            >
              <p>{adminDataError}</p>
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setDataLoadAttempt((attempt) => attempt + 1);
                }}
                className="shrink-0 rounded-xl bg-amber-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-800"
              >
                Coba Lagi
              </button>
            </div>
          )}
          {activeTab === "dashboard" && (
            <div className="space-y-8 max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 sm:p-8 shadow-lg shadow-indigo-600/10">
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-medium mb-3 backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5" /> Prima Services Admin System
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold">Welcome Back, Admin!</h2>
                    <p className="text-indigo-100 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                      Manage enterprise services, review client inquiries, and update company profile information in real time.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("analytics")}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/30 bg-white/15 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/25"
                  >
                    <Activity className="h-4 w-4" />
                    Visitor Analytics
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <button
                  type="button"
                  onClick={() => openInquiries("all")}
                  className="w-full cursor-pointer rounded-2xl bg-white border border-slate-200/80 p-5 text-left shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500">Total Inquiries</span>
                    <div className="p-3 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Inbox className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{totalInquiries}</h3>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-2.5 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> Live Data Connected
                  </p>
                </button>

                <button
                  type="button"
                  onClick={openServices}
                  className="w-full cursor-pointer rounded-2xl bg-white border border-slate-200/80 p-5 text-left shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500">Active Services</span>
                    <div className="p-3 bg-cyan-50 text-cyan-600 border border-cyan-100 rounded-xl group-hover:bg-cyan-600 group-hover:text-white transition-all">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{activeServicesCount}</h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-2.5">Active services on website</p>
                </button>

                <button
                  type="button"
                  onClick={() => openInquiries("new-pending")}
                  className="w-full cursor-pointer rounded-2xl bg-white border border-slate-200/80 p-5 text-left shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500">Pending Replies</span>
                    <div className="p-3 bg-amber-50 text-amber-600 border border-amber-100 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{pendingRepliesCount}</h3>
                  <p className="text-[11px] text-amber-600 font-semibold mt-2.5">Action required</p>
                </button>

                <button
                  type="button"
                  onClick={openFacilities}
                  className="w-full cursor-pointer rounded-2xl bg-white border border-slate-200/80 p-5 text-left shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-500">Facilities</span>
                    <div className="p-3 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <UserCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{companyProfile.facilities.length}</h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-2.5">Configured items</p>
                </button>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Recent Inquiries</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {searchQuery
                        ? `Search results: "${searchQuery}"`
                        : `Menampilkan hingga 5 pesan terbaru${recentServiceFilter !== "all" ? ` untuk ${recentServiceFilter}` : ""}`}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="sr-only" htmlFor="recent-inquiry-service">
                      Filter berdasarkan layanan
                    </label>
                    <select
                      id="recent-inquiry-service"
                      value={recentServiceFilter}
                      onChange={(event) => setRecentServiceFilter(event.target.value)}
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option value="all">Semua Layanan</option>
                      {inquiryServices.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => openInquiries("all")}
                      className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-bold text-indigo-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Kelompok pesan terbaru">
                  {([
                    ["all", "Semua", totalInquiries],
                    ["new", "Baru", inquiries.filter((item) => item.status === "New").length],
                    ["pending", "Pending", inquiries.filter((item) => item.status === "Pending").length],
                    ["replied", "Done Respond", repliedInquiriesCount],
                  ] as const).map(([filter, label, count]) => (
                    <button
                      key={filter}
                      type="button"
                      role="tab"
                      aria-selected={recentStatusFilter === filter}
                      onClick={() => setRecentStatusFilter(filter)}
                      className={`shrink-0 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors ${
                        recentStatusFilter === filter
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700"
                      }`}
                    >
                      {label}<span className="ml-1.5 opacity-75">{count}</span>
                    </button>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 uppercase tracking-wider text-[10px]">
                        <th className="pb-3.5 font-semibold">Name & Company</th>
                        <th className="pb-3.5 font-semibold">Email</th>
                        <th className="pb-3.5 font-semibold">Requested Service</th>
                        <th className="pb-3.5 font-semibold">Date</th>
                        <th className="pb-3.5 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {recentInquiries.length > 0 ? (
                        recentInquiries.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4">
                              <p className="font-semibold text-slate-800">{item.name}</p>
                              <p className="text-[11px] text-slate-400 mt-0.5">{item.company || "-"}</p>
                            </td>
                            <td className="py-4 text-slate-600 font-medium">{item.email}</td>
                            <td className="py-4 text-slate-600 font-medium">{item.service}</td>
                            <td className="py-4 text-slate-400">{item.date || "-"}</td>
                            <td className="py-4">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5 ${
                                item.status === "New" 
                                  ? "bg-amber-50 text-amber-700 border border-amber-200" 
                                  : item.status === "Replied"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-slate-100 text-slate-600 border border-slate-200"
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  item.status === "New" ? "bg-amber-500" : item.status === "Replied" ? "bg-emerald-500" : "bg-slate-400"
                                }`}></span>
                                {item.status === "Replied" ? "Done Respond" : item.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="py-10 text-center text-slate-400">
                            Tidak ada pesan untuk filter ini.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services">
                {([
                  ["active", "Active Services"],
                  ["all", "All Services"],
                ] as const).map(([filter, label]) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setServiceFilter(filter)}
                    aria-pressed={serviceFilter === filter}
                    className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-colors ${
                      serviceFilter === filter
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Prima Services Catalog</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {searchQuery ? `Search results for service "${searchQuery}"` : "Manage official service list from backend database"}
                  </p>
                </div>
                <button
                  onClick={() => setIsServiceModalOpen(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20 cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" /> Add Service
                </button>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="p-4.5 font-semibold">Service Name</th>
                      <th className="p-4.5 font-semibold">Category</th>
                      <th className="p-4.5 font-semibold">Status</th>
                      <th className="p-4.5 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4.5 font-semibold text-slate-800">{item.name}</td>
                          <td className="p-4.5 text-slate-500 font-medium">{item.category}</td>
                          <td className="p-4.5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5 ${
                              item.status === "Active" || !item.status
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                                : "bg-slate-100 text-slate-600 border border-slate-200"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${item.status === "Active" || !item.status ? "bg-emerald-500" : "bg-slate-400"}`}></span>
                              {item.status || "Active"}
                            </span>
                          </td>
                          <td className="p-4.5 text-right space-x-1">
                            <button 
                              onClick={() => handleOpenEditModal(item)}
                              title="Edit Service"
                              aria-label="Edit Service"
                              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            
                            <button 
                              onClick={() => handleDeleteService(item.id)}
                              title="Delete Service"
                              aria-label="Delete Service"
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="py-10 text-center text-slate-400">
                          No services found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "content" && <PageContentEditor />}
          {activeTab === "portfolios" && <PortfolioManager />}

          {activeTab === "company" && (
            <div className="space-y-8 max-w-5xl mx-auto">
              <form onSubmit={handleSaveVisionMission} className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Vision & Mission</h3>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Prima Services Vision</label>
                  <textarea
                    rows={4}
                    placeholder="Enter company vision..."
                    className="w-full text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                    value={companyProfile.vision}
                    onChange={(e) => setCompanyProfile((prev) => ({ ...prev, vision: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Prima Services Mission</label>
                  <textarea
                    rows={10}
                    placeholder="Enter company mission..."
                    className="w-full text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                    value={companyProfile.mission}
                    onChange={(e) => setCompanyProfile((prev) => ({ ...prev, mission: e.target.value }))}
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmittingCompany}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/20 disabled:opacity-50"
                >
                  {isSubmittingCompany ? "Saving..." : "Save Vision & Mission"}
                </button>
              </form>

              {/* CORE VALUES MANAGEMENT SECTION */}
              <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Core Values Settings</h3>
                      <p className="text-[11px] text-slate-500">Edit values content and live preview visual display</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddCoreValue}
                    className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-xs font-semibold px-3.5 py-2 rounded-xl border border-indigo-200 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Add Core Value
                  </button>
                </div>

                {/* Live Preview UI */}
                {companyProfile.coreValues.length > 0 ? (
                  <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                      Interactive Live Preview
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* Left Circular Ring Display */}
                      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs relative">
                        <div className="w-44 h-44 rounded-full border-4 border-indigo-100 border-t-indigo-600 border-r-indigo-400 flex items-center justify-center relative shadow-inner">
                          <div className="text-center p-3">
                            <span className="text-[10px] font-extrabold text-indigo-950 uppercase tracking-wider block">TEKNOLOKA VALUES</span>
                            <span className="text-[9px] text-slate-400 block mt-0.5">Click Icon to View</span>
                          </div>

                          {/* Floating Icon Rings */}
                          {companyProfile.coreValues.map((val, idx) => {
                            const isSelected = selectedCoreValueId === val.id;
                            return (
                              <button
                                key={val.id}
                                type="button"
                                aria-label={`Select ${val.name}`}
                                onClick={() => setSelectedCoreValueId(val.id)}
                                className={`absolute p-2 rounded-full border transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md ring-4 ring-indigo-100 scale-110"
                                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                }`}
                                style={{
                                  top: `${50 - 42 * Math.cos((2 * Math.PI * idx) / companyProfile.coreValues.length)}%`,
                                  left: `${50 + 42 * Math.sin((2 * Math.PI * idx) / companyProfile.coreValues.length)}%`,
                                  transform: "translate(-50%, -50%)"
                                }}
                              >
                                {renderValueIcon(val.name, false)}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Card Display & Buttons */}
                      <div className="space-y-4">
                        {(() => {
                          const activeItem = companyProfile.coreValues.find((v) => v.id === selectedCoreValueId) || companyProfile.coreValues[0];
                          return (
                            <div className="p-4 bg-white rounded-2xl border-l-4 border-l-indigo-600 border border-slate-200 shadow-xs space-y-1">
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">SELECTED VALUE</span>
                              <h4 className="text-sm font-extrabold text-slate-900">{activeItem?.name}</h4>
                              <p className="text-xs text-slate-600 leading-relaxed">{activeItem?.description}</p>
                            </div>
                          );
                        })()}

                        <div className="grid grid-cols-2 gap-2">
                          {companyProfile.coreValues.map((val) => {
                            const isSelected = selectedCoreValueId === val.id;
                            return (
                              <button
                                key={val.id}
                                type="button"
                                onClick={() => setSelectedCoreValueId(val.id)}
                                className={`p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center gap-2.5 cursor-pointer ${
                                  isSelected
                                    ? "border-indigo-600 bg-indigo-50/60 text-indigo-900 shadow-xs ring-1 ring-indigo-600/30"
                                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                              >
                                {renderValueIcon(val.name, isSelected)}
                                <span className="truncate">{val.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 text-center text-xs text-slate-400">
                    No Core Values added yet. Click &quot;Add Core Value&quot; below.
                  </div>
                )}

                {/* Core Values Editable Fields */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-800">Edit Core Value Content</h4>
                    <span className="text-[11px] font-medium text-slate-400">Total: {companyProfile.coreValues.length} items</span>
                  </div>

                  <div className="space-y-3">
                    {companyProfile.coreValues.map((val, idx) => (
                      <div key={val.id} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-3 relative group">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                          <div className="sm:col-span-1">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Title #{idx + 1}</label>
                            <input
                              type="text"
                              value={val.name}
                              onChange={(e) => handleUpdateCoreValueItem(val.id, "name", e.target.value)}
                              className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Description</label>
                            <input
                              type="text"
                              value={val.description}
                              onChange={(e) => handleUpdateCoreValueItem(val.id, "description", e.target.value)}
                              className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteCoreValue(val.id)}
                          title="Remove Core Value"
                          aria-label="Remove Core Value"
                          className="mt-6 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100 cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleAddCoreValue}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 border border-slate-200"
                  >
                    <Plus className="w-4 h-4 text-slate-500" /> Add Item
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveVisionMission}
                    disabled={isSubmittingCompany}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/20 disabled:opacity-50"
                  >
                    {isSubmittingCompany ? "Saving..." : "Save Core Values"}
                  </button>
                </div>
              </div>

              {/* OUR FACILITIES MANAGEMENT SECTION */}
              <div id="company-facilities" className="scroll-mt-24 bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Our Facilities Settings</h3>
                      <p className="text-[11px] text-slate-500">Edit company facility features and view live preview</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddFacility}
                    className="bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-xs font-semibold px-3.5 py-2 rounded-xl border border-indigo-200 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Add Facility
                  </button>
                </div>

                {/* Facilities Live Preview UI */}
                {companyProfile.facilities.length > 0 ? (
                  <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-8">
                    <div className="text-center">
                      <h2 className="text-xl sm:text-2xl font-black text-indigo-950 uppercase tracking-wide">
                        OUR FACILITIES
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {companyProfile.facilities.map((fac) => (
                        <div key={fac.id} className="flex items-start gap-4 p-2">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center shrink-0">
                            {renderFacilityIcon(fac.icon)}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                            {fac.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 text-center text-xs text-slate-400">
                    No Facilities added yet. Click &quot;Add Facility&quot; below.
                  </div>
                )}

                {/* Facilities Editable Fields */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-800">Edit Facilities List</h4>
                    <span className="text-[11px] font-medium text-slate-400">Total: {companyProfile.facilities.length} items</span>
                  </div>

                  <div className="space-y-3">
                    {companyProfile.facilities.map((fac, idx) => (
                      <div key={fac.id} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex items-start gap-3 relative group">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 flex-1">
                          <div className="sm:col-span-1">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Icon #{idx + 1}</label>
                            <select
                              value={fac.icon}
                              onChange={(e) => handleUpdateFacilityItem(fac.id, "icon", e.target.value)}
                              className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                            >
                              <option value="Shield">Shield (ISO/Security)</option>
                              <option value="Server">Server (Dedicated IT)</option>
                              <option value="Building">Building (Amenities)</option>
                              <option value="Clock">Clock (24/7 Ops)</option>
                              <option value="Code">Code (IT Dev)</option>
                              <option value="Laptop">Laptop (Workstation)</option>
                              <option value="Users">Users (Training/Seats)</option>
                              <option value="Wifi">Wifi (Bandwidth)</option>
                              <option value="Zap">Zap (UPS/Electrical)</option>
                            </select>
                          </div>
                          <div className="sm:col-span-3">
                            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Facility Description</label>
                            <textarea
                              rows={2}
                              value={fac.text}
                              onChange={(e) => handleUpdateFacilityItem(fac.id, "text", e.target.value)}
                              className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteFacility(fac.id)}
                          title="Remove Facility"
                          aria-label="Remove Facility"
                          className="mt-6 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100 cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleAddFacility}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 border border-slate-200"
                  >
                    <Plus className="w-4 h-4 text-slate-500" /> Add Facility
                  </button>

                  <button
                    type="button"
                    onClick={handleSaveVisionMission}
                    disabled={isSubmittingCompany}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/20 disabled:opacity-50"
                  >
                    {isSubmittingCompany ? "Saving..." : "Save Facilities"}
                  </button>
                </div>
              </div>

              <form onSubmit={handleSaveContact} className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                  <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Office Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Official Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. info@company.com"
                        className="w-full text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl pl-10 pr-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                        value={companyProfile.email}
                        onChange={(e) => setCompanyProfile((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">WhatsApp / Phone Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="e.g. +62 812 3456 7890"
                        className="w-full text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl pl-10 pr-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                        value={companyProfile.phone}
                        onChange={(e) => setCompanyProfile((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Jakarta Office Address</label>
                  <textarea
                    rows={2}
                    placeholder="Enter Jakarta address..."
                    className="w-full text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                    value={companyProfile.address_jakarta}
                    onChange={(e) => setCompanyProfile((prev) => ({ ...prev, address_jakarta: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Yogyakarta Office Address</label>
                  <textarea
                    rows={2}
                    placeholder="Enter Yogyakarta address..."
                    className="w-full text-xs bg-slate-50 text-slate-800 border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all placeholder:text-slate-400"
                    value={companyProfile.address_yogyakarta}
                    onChange={(e) => setCompanyProfile((prev) => ({ ...prev, address_yogyakarta: e.target.value }))}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmittingCompany}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-indigo-600/20 disabled:opacity-50"
                >
                  {isSubmittingCompany ? "Saving..." : "Update Contact Info"}
                </button>
              </form>
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="space-y-6 max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter pesan masuk">
                {([
                  ["all", "Semua Pesan"],
                  ["new-pending", "Baru / Pending"],
                  ["replied", "Sudah Direspons"],
                  ["overdue", "Pending > 3 Hari"],
                ] as const).map(([filter, label]) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setInquiryFilter(filter)}
                    aria-pressed={inquiryFilter === filter}
                    className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-colors ${
                      inquiryFilter === filter
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700"
                    }`}
                  >
                    {label}
                    {filter === "new-pending" && ` (${pendingRepliesCount})`}
                    {filter === "replied" && ` (${repliedInquiriesCount})`}
                    {filter === "overdue" && ` (${overdueInquiriesCount})`}
                  </button>
                ))}
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="p-4.5 font-semibold">Sender</th>
                      <th className="p-4.5 font-semibold">Contact</th>
                      <th className="p-4.5 font-semibold">Service</th>
                      <th className="p-4.5 font-semibold">Message</th>
                      <th className="p-4.5 font-semibold">Status</th>
                      <th className="p-4.5 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredInquiries.length > 0 ? (
                      filteredInquiries.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4.5">
                            <p className="font-semibold text-slate-800">{item.name}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{item.company || "-"}</p>
                          </td>
                          <td className="p-4.5">
                            <p className="text-slate-700 font-medium">{item.email}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{item.phone || "-"}</p>
                          </td>
                          <td className="p-4.5">
                            <p className="text-slate-800 font-semibold">{item.service}</p>
                          </td>
                          <td className="p-4.5 max-w-xs">
                            <p className="text-slate-500 line-clamp-2 leading-relaxed">{item.message}</p>
                          </td>
                          <td className="p-4.5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold inline-flex items-center gap-1.5 ${
                              item.status === "New" 
                                ? "bg-amber-50 text-amber-700 border border-amber-200" 
                                : item.status === "Replied"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-slate-100 text-slate-600 border border-slate-200"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                item.status === "New" ? "bg-amber-500" : item.status === "Replied" ? "bg-emerald-500" : "bg-slate-400"
                              }`}></span>
                              {item.status === "Replied" ? "Done Respond" : item.status}
                            </span>
                          </td>
                          <td className="p-4.5 text-right">
                            <button 
                              onClick={() => handleOpenRespondModal(item)}
                              className="bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white font-semibold px-4 py-1.5 rounded-xl transition-all text-[11px] cursor-pointer border border-slate-200 hover:border-indigo-600 shadow-xs"
                            >
                              Respond
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-10 text-center text-slate-400">
                          No customer inquiry data found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <section className="mx-auto max-w-7xl space-y-6">
              <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Visitor Analytics</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      {visitorCount} kunjungan dalam {visitorRangeLabels[visitorRange]}. Data disimpan maksimal 1 tahun.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoadingVisitorAnalytics(true);
                      setVisitorAnalyticsError("");
                      setVisitorAnalyticsReload((reload) => reload + 1);
                    }}
                    disabled={isLoadingVisitorAnalytics}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60"
                  >
                    {isLoadingVisitorAnalytics && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                    Muat Ulang Data
                  </button>
                </div>

                <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Filter rentang waktu Visitor Analytics">
                    {([
                      ["7d", "7 Hari Terakhir"],
                      ["30d", "1 Bulan Terakhir"],
                      ["1y", "1 Tahun Terakhir"],
                    ] as const).map(([range, label]) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => {
                          if (visitorRange === range) return;
                          setIsLoadingVisitorAnalytics(true);
                          setVisitorAnalyticsError("");
                          setVisitorRange(range);
                        }}
                        aria-pressed={visitorRange === range}
                        className={`rounded-xl border px-4 py-2.5 text-xs font-semibold transition-colors ${
                          visitorRange === range
                            ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-700"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Menampilkan maksimal 500 kunjungan terbaru per rentang.
                  </p>
                </div>
              </div>

              {visitorAnalyticsError && (
                <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {visitorAnalyticsError}
                </div>
              )}

              <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <table className="w-full min-w-[760px] text-left text-xs">
                  <thead className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="p-4 font-semibold">Alamat IP</th>
                      <th className="p-4 font-semibold">Halaman</th>
                      <th className="p-4 font-semibold">Tanggal</th>
                      <th className="p-4 font-semibold">Hari</th>
                      <th className="p-4 font-semibold">Jam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {isLoadingVisitorAnalytics && visitorEvents.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-500">
                          Memuat data kunjungan...
                        </td>
                      </tr>
                    ) : visitorEvents.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-500">
                          Belum ada data kunjungan dalam {visitorRangeLabels[visitorRange]}.
                        </td>
                      </tr>
                    ) : (
                      visitorEvents.map((visit) => {
                        const visitedAt = new Date(visit.visitedAt);
                        return (
                          <tr key={visit.id} className="hover:bg-slate-50">
                            <td className="whitespace-nowrap p-4 font-mono text-slate-700">{visit.ipAddress}</td>
                            <td className="max-w-sm break-all p-4 font-medium text-indigo-700">{visit.path}</td>
                            <td className="whitespace-nowrap p-4 text-slate-600">
                              {new Intl.DateTimeFormat("id-ID", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              }).format(visitedAt)}
                            </td>
                            <td className="whitespace-nowrap p-4 text-slate-600">
                              {new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(visitedAt)}
                            </td>
                            <td className="whitespace-nowrap p-4 text-slate-600">
                              {new Intl.DateTimeFormat("id-ID", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                                hour12: false,
                              }).format(visitedAt)}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
                {visitorCount > visitorEvents.length && (
                  <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-500">
                    Menampilkan {visitorEvents.length} kunjungan terbaru dari {visitorCount}.
                  </p>
                )}
              </div>
            </section>
          )}
        </main>
      </div>

      {/* MODALS */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 text-slate-800">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-sm font-bold text-slate-900">Add New Service</h3>
              <button onClick={() => setIsServiceModalOpen(false)} aria-label="Close modal" className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleAddService} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Service Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cybersecurity Assessment"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Category</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Security"
                  value={newService.category}
                  onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Short Description</label>
                <textarea
                  rows={3}
                  placeholder="Service description..."
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-slate-100">
                <button type="button" onClick={() => setIsServiceModalOpen(false)} className="px-4 py-2 rounded-xl font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmittingService} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold cursor-pointer transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50">
                  {isSubmittingService ? "Saving..." : "Save Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && editingService && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 text-slate-800">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-sm font-bold text-slate-900">Edit Service</h3>
              <button onClick={() => { setIsEditModalOpen(false); setEditingService(null); }} aria-label="Close modal" className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleUpdateService} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Service Name</label>
                <input
                  type="text"
                  required
                  value={editingService.name}
                  onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Category</label>
                <input
                  type="text"
                  required
                  value={editingService.category}
                  onChange={(e) => setEditingService({ ...editingService, category: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Status</label>
                <select
                  value={editingService.status || "Active"}
                  onChange={(e) => setEditingService({ ...editingService, status: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Short Description</label>
                <textarea
                  rows={3}
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                />
              </div>
              <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-slate-100">
                <button type="button" onClick={() => { setIsEditModalOpen(false); setEditingService(null); }} className="px-4 py-2 rounded-xl font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmittingService} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold cursor-pointer transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50">
                  {isSubmittingService ? "Saving..." : "Update Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedInquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 p-4 backdrop-blur-xs">
          <div className="mx-auto my-2 w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-2xl sm:my-4 sm:p-7">
            <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Respond to Inquiry</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  From: <span className="font-semibold text-slate-800">{selectedInquiry.name}</span> ({selectedInquiry.company || "-"})
                </p>
              </div>
              <button type="button" onClick={() => setSelectedInquiry(null)} aria-label="Kembali ke daftar inquiry" className="flex items-center gap-1.5 rounded-xl p-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800">
                <ArrowLeft className="h-4 w-4" />
                <span className="sm:hidden">Kembali</span>
              </button>
              <button type="button" onClick={() => setSelectedInquiry(null)} aria-label="Close modal" className="rounded-xl p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2">
              <div>
                <span className="text-slate-400 font-medium">Service: </span>
                <span className="text-slate-800 font-semibold">{selectedInquiry.service}</span>
              </div>
              <div>
                <span className="text-slate-400 font-medium">Contact: </span>
                <a href={`mailto:${selectedInquiry.email}`} className="text-indigo-600 hover:underline font-medium">
                  {selectedInquiry.email}
                </a>
                {selectedInquiry.phone && <span> • {selectedInquiry.phone}</span>}
              </div>
              <div className="pt-2.5 border-t border-slate-200/60 text-slate-600 leading-relaxed whitespace-pre-wrap italic">
                &quot;{selectedInquiry.message}&quot;
              </div>
            </div>

            <form onSubmit={handleUpdateInquiryStatus} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Update Inquiry Status</label>
                <select
                  value={inquiryStatus}
                  onChange={(e) => setInquiryStatus(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800"
                >
                  <option value="New">New (Unprocessed)</option>
                  <option value="Pending">Pending (belum dibalas lebih dari 3 hari / sedang diproses)</option>
                  {selectedInquiry.status === "Replied" && (
                    <option value="Replied">Done Respond (provider menerima balasan)</option>
                  )}
                </select>
              </div>

              <div>
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 space-y-3">
                  <div>
                    <h4 className="font-bold text-slate-800">Balas Pesan Client</h4>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Balasan dikirim ke email client. Status menjadi Done Respond setelah server email menerima pesan.
                    </p>
                  </div>
                  <label className="block font-semibold text-slate-700">
                    Subjek Email
                    <input
                      type="text"
                      required
                      maxLength={180}
                      value={inquiryReplySubject}
                      onChange={(event) => setInquiryReplySubject(event.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 font-normal text-slate-800 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </label>
                  <label className="block font-semibold text-slate-700">
                    Isi Balasan
                    <textarea
                      rows={5}
                      required
                      maxLength={10000}
                      placeholder="Tulis balasan untuk client..."
                      value={inquiryReplyBody}
                      onChange={(event) => setInquiryReplyBody(event.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3 font-normal leading-relaxed text-slate-800 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </label>
                  {selectedInquiry.replyBody && selectedInquiry.repliedAt && (
                    <p className="text-[11px] text-slate-600">
                      Balasan terakhir ditandai terkirim: {selectedInquiry.repliedAt
                        ? new Date(selectedInquiry.repliedAt).toLocaleString()
                        : selectedInquiry.replySubject}
                    </p>
                  )}
                  <div>
                    <button
                      type="button"
                      onClick={() => void handleSendInquiryReply()}
                      disabled={
                        isSendingInquiryReply ||
                        !inquiryReplySubject.trim() ||
                        !inquiryReplyBody.trim()
                      }
                      className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white shadow-md shadow-indigo-600/20 transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {isSendingInquiryReply ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Mail className="h-3.5 w-3.5" />
                        )}
                        Kirim Email
                      </span>
                    </button>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Email dikirim ke {selectedInquiry.email}. Status berubah otomatis setelah server email menerima pesan. Penerimaan server bukan jaminan email masuk ke inbox atau sudah dibaca.
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Internal Notes (Optional — not emailed)</label>
                <textarea
                  rows={3}
                  placeholder="Catatan internal tindak lanjut..."
                  value={inquiryNotes}
                  onChange={(e) => setInquiryNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-slate-100">
                {inquiryActionError && (
                  <p role="alert" className="mr-auto text-[11px] leading-relaxed text-rose-700">
                    {inquiryActionError}
                  </p>
                )}
                <button type="button" onClick={() => setSelectedInquiry(null)} className="px-4 py-2 rounded-xl font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSubmittingInquiry} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50">
                  {isSubmittingInquiry ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
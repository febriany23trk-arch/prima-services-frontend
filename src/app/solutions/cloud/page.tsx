'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Rocket, 
  Brain, 
  ShieldAlert, 
  Coins, 
  Server, 
  HardDrive, 
  BarChart3, 
  Globe2, 
  Lock, 
  Cpu
} from 'lucide-react';

export default function GoogleCloudPlatformPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans pt-28 pb-24 px-6 sm:px-10 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* 1. HERO / BANNER UTAMA */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#1d4ed8] bg-blue-50 px-3.5 py-1.5 rounded-full">
              Our Solutions
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c1f3d] tracking-tight leading-[1.18]">
              Google Cloud for Modern Applications & Data
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Business email, real-time collaboration, and enterprise-grade security all in one easy-to-use package.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#193d70] hover:bg-[#122e54] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Free Consultant Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a182c] via-[#0d2244] to-[#173868] shadow-2xl p-6 flex flex-col items-center justify-center border border-slate-800">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 z-10 w-full flex flex-col items-center space-y-4">
                <div className="flex items-center justify-center gap-2 flex-wrap max-w-[280px]">
                  <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm rotate-3">⚡</div>
                  <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm -rotate-3">🔗</div>
                  <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm rotate-6">⚙️</div>
                  <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">📊</div>
                  <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 via-red-500 to-amber-400 rounded-xl flex items-center justify-center text-white font-black shadow-md">☁️</div>
                  <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm rotate-3">📈</div>
                  <div className="w-9 h-9 bg-cyan-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm -rotate-6">🔍</div>
                </div>

                <div className="text-center">
                  <span className="text-base font-black tracking-widest text-slate-700 uppercase block">Google Cloud Platform</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-6 bg-white rounded-2xl px-5 py-2.5 shadow-xl flex items-center gap-2 border border-slate-100 z-20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                  <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
                <span className="text-xs font-bold text-slate-800">Google Cloud</span>
              </div>
            </div>
          </div>

        </div>

        {/* 2. 4 PILAR UTAMA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Scalable by Design</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Scale globally with load balancing, autoscaling, and SRE best practices.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Data & AI Ready</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              BigQuery, Vertex AI, and the modern analytics ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Security First</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Granular IAM, VPC-SC, Cloud Armor, SCC, Chronicle.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
              <Coins className="w-7 h-7" />
            </div>
            <h3 className="font-extrabold text-base text-[#0c1f3d]">Cost Efficient</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Committed use, autoscale, rightsizing, and routine FinOps.
            </p>
          </div>

        </div>

        {/* 3. GOOGLE CLOUD CORE SERVICES */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-10">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Google Cloud Core Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Choose the right components for your apps, data, and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Compute</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                <li>• GKE (Kubernetes)</li>
                <li>• Cloud Run</li>
                <li>• Compute Engine</li>
                <li>• App Engine</li>
              </ul>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <HardDrive className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Storage</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                <li>• Cloud Storage</li>
                <li>• Filestore</li>
                <li>• Persistent Disk</li>
                <li>• Backup & DR</li>
              </ul>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Data & AI</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                <li>• BigQuery</li>
                <li>• Vertex AI</li>
                <li>• Dataflow / Dataproc</li>
                <li>• Looker / Data Studio</li>
              </ul>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-teal-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Networking</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                <li>• VPC, Cloud NAT, Load Balancing</li>
                <li>• Cloud CDN</li>
                <li>• Cloud DNS</li>
                <li>• Cloud Armor / WAF</li>
              </ul>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">Security</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                <li>• IAM, VPC-SC, KMS / HSM</li>
                <li>• Security Command Center</li>
                <li>• Chronicle SIEM / SOAR</li>
              </ul>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">DevOps</h3>
              <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                <li>• Cloud Build / Deploy</li>
                <li>• Artifact Registry</li>
                <li>• Cloud Logging / Monitoring</li>
                <li>• SRE playbooks</li>
              </ul>
            </div>

          </div>

        </div>

        {/* 4. READY-TO-USE ARCHITECTURE & SOLUTIONS */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-10">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Ready-to-Use Architecture & Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Blueprints that we can adapt to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="bg-[#e0f2fe] rounded-2xl p-4 text-center font-bold text-blue-700 text-xs">
                  📊 🗄️ Google Architecture Blueprint
                </div>
                <h3 className="font-extrabold text-base text-[#0c1f3d]">Modern Data Warehouse</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Centralize, transform, and quickly analyze in BigQuery.
                </p>
                <ul className="space-y-1 text-xs text-slate-600 pt-2">
                  <li>• Batch/streaming ingest (Pub/Sub, Dataflow)</li>
                  <li>• Modeling & governance (Dataform, Dataplex)</li>
                  <li>• BI with Looker & self-service data</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="bg-[#fef3c7] rounded-2xl p-4 text-center font-bold text-amber-700 text-xs">
                  📱 ☁️ Microservices Blueprint
                </div>
                <h3 className="font-extrabold text-base text-[#0c1f3d]">Modern App on GKE/Cloud Run</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Microservices architecture with full observability.
                </p>
                <ul className="space-y-1 text-xs text-slate-600 pt-2">
                  <li>• CI/CD: Cloud Build & GitHub Actions</li>
                  <li>• Service Mesh & Zero-trust (mTLS, IAM)</li>
                  <li>• Autoscaling, canary, secure rollback</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#f8fafc] rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="bg-[#fae8ff] rounded-2xl p-4 text-center font-bold text-purple-700 text-xs">
                  🤖 🧠 Vertex AI GenAI Blueprint
                </div>
                <h3 className="font-extrabold text-base text-[#0c1f3d]">GenAI & RAG on Vertex AI</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Chatbot/agent & retrieval for enterprise documents.
                </p>
                <ul className="space-y-1 text-xs text-slate-600 pt-2">
                  <li>• Embeddings + Vector Search</li>
                  <li>• Guardrails, eval, prompt mgmt</li>
                  <li>• Monitoring & cost control</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* 5. MIGRATION & MODERNIZATION WITHOUT DRAMA */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight">
                Migration & Modernization without drama
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lift-and-shift, replatform, or refactor—we choose the safest and most cost-effective path.
              </p>
              
              <div className="space-y-3 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">01</span>
                  <span>Discovery & TCO</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">02</span>
                  <span>Landing zone & security</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">03</span>
                  <span>Pilot workload & cut-over</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">04</span>
                  <span>Operational & continuous optimization</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[460px] bg-gradient-to-br from-[#0a182c] via-[#0d2244] to-[#173868] rounded-3xl p-8 shadow-2xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[260px] text-white">
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-center gap-6 z-10 w-full">
                  <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/20 text-center shadow-lg">
                    <span className="text-2xl block mb-1">☁️</span>
                    <span className="text-[11px] font-bold text-slate-200">Legacy / On-Prem</span>
                  </div>
                  <div className="text-2xl animate-pulse text-amber-400 font-bold">➡️</div>
                  <div className="bg-blue-600/30 backdrop-blur-md px-5 py-4 rounded-2xl border border-blue-400/40 text-center shadow-lg">
                    <span className="text-2xl block mb-1">☁️</span>
                    <span className="text-[11px] font-bold text-amber-300">Google Cloud</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 font-medium mt-6 z-10">Seamless Cloud Architecture & Data Transfer</p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-2">
              <h4 className="font-bold text-sm text-[#0c1f3d]">Committed Reservations</h4>
              <p className="text-xs text-slate-500">Plan committed usage plans (CUDs) to significantly reduce compute costs.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-2">
              <h4 className="font-bold text-sm text-[#0c1f3d]">Rightsizing & Autoscale</h4>
              <p className="text-xs text-slate-500">Monitor utilization and automatically adjust resources to workloads.</p>
            </div>
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-2">
              <h4 className="font-bold text-sm text-[#0c1f3d]">FinOps & Budget Guardrails</h4>
              <p className="text-xs text-slate-500">Budget, alerting, labeling/tagging, and chargeback between teams.</p>
            </div>
          </div>

        </div>

        {/* 6. SECURITY & COMPLIANCE */}
        <div className="bg-white rounded-[36px] border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1f3d] tracking-tight mb-2">
              Security & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/50 p-7 rounded-3xl border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-3">
              <h4 className="font-extrabold text-sm text-blue-900">Identity-Aware Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">IAM least-privilege, CA Access, BeyondCorp Enterprise.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50/70 to-emerald-50/50 p-7 rounded-3xl border border-teal-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-3">
              <h4 className="font-extrabold text-sm text-teal-900">Data Protection</h4>
              <p className="text-xs text-slate-600 leading-relaxed">KMS, CMEK, DLP API, object lock, backup & DR.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50/70 to-pink-50/50 p-7 rounded-3xl border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 space-y-3">
              <h4 className="font-extrabold text-sm text-purple-900">Observability & Threat</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Cloud Logging/Monitoring, Cloud IDS, SCC, Chronicle.</p>
            </div>

          </div>
        </div>

        {/* 7. READY TO START OR OPTIMIZE YOUR GOOGLE CLOUD? (CTA BANNER) */}
        <div className="relative w-full rounded-[36px] overflow-hidden bg-gradient-to-r from-[#0d2244] via-[#102750] to-[#12233f] shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white border border-slate-800">
          <div className="space-y-4 max-w-lg z-10 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight">
              Ready to start or optimize your Google Cloud?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              We help with everything from architecture and implementation to managed services and FinOps.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-[#0c1f3d] font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              Discuss Solutions with Us
            </Link>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[380px] h-[220px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
                alt="Cloud Optimization Team"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
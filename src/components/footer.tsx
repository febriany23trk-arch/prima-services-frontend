import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#244b7a] text-slate-200 pt-16 pb-8 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* LOGO & DESKRIPSI */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-amber-400">
              Teknoloka Prima Services
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Teknoloka Prima Services helps businesses achieve digital transformation through trusted software development, IT services, UI/UX design, cybersecurity, cloud solutions, and ISO consulting.
            </p>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* SOLUTIONS & SOCIAL MEDIA */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">SOLUTIONS</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Sobot.io - AI Contact Center</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Google Workspace - Business Solutions</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Google Cloud - Computing Solutions</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">IT Managed Services</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">ISO Assistance & Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">FOLLOW US</h4>
              <div className="flex items-center gap-2">
                {/* Facebook SVG */}
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-amber-400 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram SVG */}
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-amber-400 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* LinkedIn SVG */}
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-amber-400 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* YouTube SVG */}
                <a href="#" className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center hover:bg-amber-400 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186c-.275-1.026-1.082-1.833-2.108-2.108-1.861-.5-9.39-.5-9.39-.5s-7.529 0-9.39.5c-1.026.275-1.833 1.082-2.108 2.108-.5 1.861-.5 5.739-.5 5.739s0 3.878.5 5.739c.275 1.026 1.082 1.833 2.108 2.108 1.861.5 9.39.5 9.39.5s7.529 0 9.39-.5c1.026-.275 1.833-1.082 2.108-2.108.5-1.861.5-5.739.5-5.739s0-3.878-.5-5.739zm-13.498 9.214v-6.804l6.299 3.402-6.299 3.402z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ADDRESS & CONTACT */}
          <div className="lg:col-span-3 space-y-4 text-xs text-slate-300">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">ADDRESS</h4>
            
            <div className="space-y-1">
              <p className="font-semibold text-white">Jakarta</p>
              <p className="leading-relaxed text-slate-300">
                Permata Hijau, Bellezza BSA, Jl. Permata Hijau No.106 lt. 1, Grogol Utara, Kec. Keb. Lama, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta, 12210
              </p>
            </div>

            <div className="space-y-1 pt-1">
              <p className="font-semibold text-white">Yogyakarta</p>
              <p className="leading-relaxed text-slate-300">
                Jl. Magelang No.188, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta, 55242
              </p>
            </div>

            <div className="pt-2 space-y-1">
              <p className="font-semibold text-white">MOBILE PHONE</p>
              <p className="text-slate-300">+62 821-5009-1305</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-white">EMAIL</p>
              <p className="text-slate-300">business@teknoloka.co.id</p>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-slate-600/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
          <p>© 2026 PT Teknoloka Prima Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function PublicLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  // Jika halaman admin, panggil children saja tanpa Navbar & Footer
  if (isAdminPage) {
    return <>{children}</>;
  }

  // Jika bukan halaman admin, tampilkan Navbar & Footer
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
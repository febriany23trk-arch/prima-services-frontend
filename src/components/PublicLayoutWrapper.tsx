"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function PublicLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const isAdminPage = pathname.startsWith("/admin") || pathname.startsWith("/login");

  useEffect(() => {
    if (!pathname || lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return;

    void fetch("/api/analytics/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).then((response) => {
      if (!response.ok) {
        console.error("Visitor analytics request failed:", response.status);
      }
    }).catch((error: unknown) => {
      console.error("Visitor analytics request could not reach the server:", error);
    });
  }, [pathname]);

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PublicLayoutWrapper from "@/components/PublicLayoutWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prima Services",
  description: "Official Website Prima Services",
  icons: {
    icon: "/logo-icon.jpeg",
    shortcut: "/logo-icon.jpeg",
    apple: "/logo-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
      </body>
    </html>
  );
}
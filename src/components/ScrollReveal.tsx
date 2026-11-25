"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Mulai dari transparan dan 50px di bawah posisi asli
      whileInView={{ opacity: 1, y: 0 }} // Saat di-scroll ke area tampilan, opacity jadi 1 & naik ke atas
      viewport={{ once: true, margin: "-50px" }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.6, ease: "easeOut", delay }} // Durasi dan jeda animasi
    >
      {children}
    </motion.div>
  );
}
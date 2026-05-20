"use client";

import { motion } from "framer-motion";
import ServicesHero from "@/components/ServicesHero";
import ServicesPreview from "@/components/ServicesPreview";
import Button from "@/components/Button";

export default function ServicesPage() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="bg-[#051A3D] min-h-screen">

      {/* ── Cinematic video hero ── */}
      <div className="pt-[72px]">
        <ServicesHero />
      </div>

      {/* ── CTA strip below hero ── */}
      <section className="px-6 max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-xl md:text-2xl text-white/70 font-light max-w-2xl leading-relaxed"
        >
          Premium legal and medical graphics designed to simplify complex evidence for{" "}
          <span className="text-gold font-medium">mediation, trial, and case strategy.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase, delay: 0.15 }}
          className="flex-shrink-0"
        >
          <Button href="/contact" variant="primary">Schedule a Demo</Button>
        </motion.div>
      </section>

      {/* ── Services cards ── */}
      <ServicesPreview />
    </div>
  );
}

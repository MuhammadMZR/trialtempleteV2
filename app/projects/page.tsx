"use client";

import { motion } from "framer-motion";
import Globe from "@/components/Globe";

export default function ProjectsPage() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase }}
          className="text-5xl md:text-7xl font-bold tracking-widest text-white uppercase mb-8"
        >
          Visual Work Built for <br className="hidden md:block"/> High-Stakes Cases
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted font-light max-w-3xl mx-auto"
        >
          A showcase of medical, legal, and strategic demonstratives designed to make complex case information clear.
        </motion.p>
      </section>

      <Globe />
    </div>
  );
}

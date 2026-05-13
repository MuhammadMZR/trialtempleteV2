"use client";

import { motion } from "framer-motion";
import ServicesPreview from "@/components/ServicesPreview";
import Button from "@/components/Button";

export default function ServicesPage() {
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
          Flat-Rate <br className="hidden md:block"/> Trial Demonstratives
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted font-light max-w-3xl mx-auto mb-10"
        >
          Premium legal and medical graphics designed to simplify complex evidence for mediation, trial, and case strategy.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.3 }}
        >
          <Button href="/contact" variant="primary">Schedule a Demo</Button>
        </motion.div>
      </section>

      <ServicesPreview />
    </div>
  );
}

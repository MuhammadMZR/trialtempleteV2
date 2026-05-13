"use client";

import { motion } from "framer-motion";
import TestimonialVideoSection from "@/components/TestimonialVideoSection";

export default function TestimonialsPage() {
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
          Words From the <br className="hidden md:block"/> People Behind the Cases
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted font-light max-w-3xl mx-auto"
        >
          Video testimonials from professionals who value clear, persuasive visual communication.
        </motion.p>
      </section>

      <TestimonialVideoSection />
      
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight">
          Clear visuals change the way <span className="text-gold">complex</span> cases are <span className="text-gold">understood</span>.
        </h2>
      </section>
    </div>
  );
}

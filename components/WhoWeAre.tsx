"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function WhoWeAre() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftCardY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="bg-[#051A3D] py-16 sm:py-32 md:py-56 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={containerRef} className="flex flex-col md:flex-row items-center gap-12 relative">
          
          {/* Left Video Card */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase }}
            style={{ y: leftCardY }}
            className="w-full md:w-[60%] relative aspect-video bg-[#051A3D] rounded-sm overflow-hidden shadow-2xl z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-burgundy/40 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-gold/80 hover:bg-gold backdrop-blur-md rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_30px_rgba(210,155,45,0.3)] group">
                <Play className="w-8 h-8 text-black ml-1 group-hover:scale-95 transition-transform" fill="currentColor" />
              </button>
            </div>
          </motion.div>

          {/* Right Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
            style={{ y: rightCardY }}
            className="w-full md:w-[45%] md:-ml-[10%] bg-[#051A3D] p-6 sm:p-10 md:p-14 border border-white/10 rounded-sm shadow-2xl z-20"
          >
            <div className="mb-8">
              {/* Headshot placeholder */}
              <div className="w-20 h-20 rounded-full bg-burgundy mb-6 overflow-hidden border-2 border-gold/30">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-transparent" />
              </div>
              
              <span className="text-gold text-xs font-bold tracking-widest uppercase mb-4 block">
                Legal Visual Strategy
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white mb-4 sm:mb-6 leading-tight">
                Built for attorneys who need clarity fast.
              </h2>
              <p className="text-muted leading-relaxed">
                We transform complex medical and legal arguments into clear, persuasive visual stories for mediation and trial.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

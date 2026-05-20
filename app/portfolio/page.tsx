"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Eye } from "lucide-react";

const portfolioItems = [
  {
    id: "neuro-trauma-reconstruction",
    category: "Medical Malpractice",
    title: "Neuro-Anatomical Trauma Reconstruction",
    description: "A high-fidelity 3D reconstruction of cranial nerve pathways and localized brainstem trauma, engineered to make complex neurosurgery reports immediately understandable to a lay jury.",
    videoSrc: "/rachel-montes-testimonial.mp4",
    poster: "/testimonials/rachel_montes.png",
    stat: "100% Verdict Clarity",
    tag: "[ MED-LEGAL ]"
  },
  {
    id: "biomechanical-valve-failure",
    category: "Product Liability",
    title: "Biomechanical Valve Breakdown & Trajectory",
    description: "A physics-backed visual simulation tracing stress fractures and pressure thresholds in industrial hydraulic valves, proving structural design defects with clear timeline sequences.",
    videoSrc: "/david-angeloff-testimonial.mp4",
    poster: "/testimonials/david_angeloff.png",
    stat: "Multi-Million Settlement",
    tag: "[ MECHANICAL ]"
  },
  {
    id: "global-data-infringement",
    category: "Intellectual Property",
    title: "Global Server & IP Infringement Flow",
    description: "An animated global system flow demonstrating unauthorized software logic access across network regions, transforming thousands of log files into a single cohesive story.",
    videoSrc: "/globe-loop.mp4",
    poster: "/testimonials/sarah_jenkins.png",
    stat: "Proven Tech Infringement",
    tag: "[ TECH-LITIGATION ]"
  },
  {
    id: "pedestrian-collision-analysis",
    category: "Personal Injury",
    title: "Collision Dynamics & Impact Analysis",
    description: "A multi-angle biomechanical collision trajectory detailing vehicle deceleration, impact velocity, and severe orthopedic trauma angles.",
    videoSrc: "/rachel-montes-testimonial.mp4",
    poster: "/testimonials/michael_chen.png",
    stat: "Full Liability Established",
    tag: "[ ACCIDENT-RECON ]"
  }
];

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Video play interrupted", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 hover:border-gold/40 transition-colors duration-500 bg-[#080808] group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
    >
      {/* ── Background Video / Poster ── */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={item.videoSrc}
          poster={item.poster}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-[1.2s] ease-[0.16,1,0.3,1]"
        />
      </div>

      {/* ── Overlay Gradients (Promoting Legibility) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D] via-[#051A3D]/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(5,26,61,0.8) 100%) pointer-events-none" />
      
      {/* Laser line shimmer on hover */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
        background: "linear-gradient(180deg, rgba(229,181,58,0.05) 0%, transparent 50%, rgba(229,181,58,0.02) 100%)"
      }} />

      {/* ── HUD Corner Accents ── */}
      <div className="absolute top-6 left-6 w-8 h-8 pointer-events-none" style={{ borderTop: "1.5px solid rgba(229,181,58,0.3)", borderLeft: "1.5px solid rgba(229,181,58,0.3)" }} />
      <div className="absolute top-6 right-6 w-8 h-8 pointer-events-none" style={{ borderTop: "1.5px solid rgba(229,181,58,0.3)", borderRight: "1.5px solid rgba(229,181,58,0.3)" }} />
      <div className="absolute bottom-6 left-6 w-8 h-8 pointer-events-none" style={{ borderBottom: "1.5px solid rgba(229,181,58,0.3)", borderLeft: "1.5px solid rgba(229,181,58,0.3)" }} />
      <div className="absolute bottom-6 right-6 w-8 h-8 pointer-events-none" style={{ borderBottom: "1.5px solid rgba(229,181,58,0.3)", borderRight: "1.5px solid rgba(229,181,58,0.3)" }} />

      {/* ── Content Layout ── */}
      <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-20 pointer-events-none">
        
        {/* Top bar: Category & Tags */}
        <div className="flex justify-between items-start w-full">
          <div className="flex items-center gap-3">
            <span className="text-gold font-mono text-xs tracking-widest uppercase">{item.tag}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 animate-pulse" />
            <span className="text-white/60 font-mono text-xs uppercase tracking-wider">{item.category}</span>
          </div>
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hidden sm:block">
            <span className="text-gold font-mono text-xs tracking-widest uppercase">{item.stat}</span>
          </div>
        </div>

        {/* Bottom bar: Title, Description, CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end w-full">
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide uppercase mb-4 leading-tight"
            >
              {item.title}
            </motion.h3>
            <p className="text-sm md:text-base text-muted font-light max-w-2xl leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity duration-300">
              {item.description}
            </p>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 group-hover:bg-gold text-gold group-hover:text-black border border-gold/30 group-hover:border-gold transition-all duration-500 shadow-[0_0_20px_rgba(210,155,45,0.0)] group-hover:shadow-[0_0_30px_rgba(210,155,45,0.3)]">
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Interactive View</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
      
      {/* ── Hover Play Indicator ── */}
      <div className="absolute top-6 right-6 flex items-center gap-2 pointer-events-none z-30 transition-opacity duration-500 opacity-40 group-hover:opacity-100">
        <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase group-hover:text-gold">
          {isHovered ? "PLAYING LOOP" : "HOVER TO PREVIEW"}
        </span>
        <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center bg-black/40">
          <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const categories = ["All", ...Array.from(new Set(portfolioItems.map((i) => i.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen pb-32 bg-[#051A3D]">
      
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-36 pb-20 flex flex-col justify-center border-b border-white/5">
        <div className="absolute inset-0 bg-radial-gradient(ellipse 80% 60% at 50% 0%, rgba(229,181,58,0.06) 0%, transparent 70%) pointer-events-none" />
        
        {/* Subtle Tech Grid lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span className="text-gold font-mono text-xs tracking-widest uppercase">[ STRATEGIC DEMONSTRATIVES ]</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white uppercase mb-8 leading-tight"
          >
            Our Case <span className="text-gold">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase, delay: 0.2 }}
            className="text-lg md:text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed border-l-2 border-gold/40 pl-6 text-left"
          >
            Premium medical, mechanical, and industrial trajectory case studies. Designed with exact anatomical and physics accuracy to drive absolute juror persuasion.
          </motion.p>
        </div>
      </section>

      {/* ── Category Filter Tabs ── */}
      <section className="px-6 max-w-7xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: premiumEase, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 justify-center"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "relative px-6 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 border",
                  isActive
                    ? "bg-gold text-black border-gold shadow-[0_0_20px_rgba(229,181,58,0.35)] font-bold"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-gold/40 hover:text-white hover:bg-white/10",
                ].join(" ")}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-gold -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* divider */}
        <div className="mt-10 border-t border-white/5" />
      </section>

      {/* ── Case Grid Section ── */}
      <section className="px-6 max-w-7xl mx-auto pt-16">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: premiumEase }}
          className="flex flex-col gap-16"
        >
          {filtered.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}

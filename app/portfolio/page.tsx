"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Eye } from "lucide-react";

const portfolioItems = [
  {
    id: "cervical-spine-sagittal",
    category: "Medical Malpractice",
    title: "Sagittal Spine Views & Trajectory Analysis",
    description: "High-fidelity 3D anatomical modeling demonstrating sagittal views of cervical spinal trauma, engineered to render complex diagnostic imaging immediately clear to the jury.",
    vimeoId: "1133182919",
    poster: "https://i.vimeocdn.com/video/2077706973-c44d2f212d4f2065816d831d80ec38c909933daa6a9dd0c51d9ee80921a2d44c-d_960?region=us",
    stat: "100% Anatomical Accuracy",
    tag: "[ MED-LEGAL ]"
  },
  {
    id: "ct-scan-compositing",
    category: "Product Liability",
    title: "CT Scan Compositing & Skeletal Reconstruction",
    description: "Seamless 3D volumetric reconstruction and multi-slice CT compositing that layers diagnostic imaging directly over bone trauma models to verify exact injury severity.",
    vimeoId: "1139423913",
    poster: "https://i.vimeocdn.com/video/2086069396-0cc31272863212ee46c088776fd5678f186924d350fc3910e577cf4247d9eac1-d_960?region=us",
    stat: "Volumetric Clarity",
    tag: "[ MEDICAL ILLUSTRATION ]"
  },
  {
    id: "accident-reconstruction",
    category: "Personal Injury",
    title: "Collision Dynamics & Impact Reconstruction",
    description: "A high-impact accident reconstruction showcasing biomechanical impact zones, vehicle velocities, and line-of-sight analysis to defeat common liability defenses.",
    vimeoId: "1131323759",
    poster: "https://i.vimeocdn.com/video/2075220084-921b71a4c51b879fee4913ffce91bff37f93bd0559320270ab61ea6ce5770756-d_960?region=us",
    stat: "Full Liability Established",
    tag: "[ ACCIDENT-RECON ]"
  },
  {
    id: "augmented-reality-trial",
    category: "Interactive Tech",
    title: "Augmented Reality Spatial Demonstratives",
    description: "Our cutting-edge AR platform allows judges and jurors to interact directly with 3D exhibits, exploring evidence spatial relationships in real-time.",
    vimeoId: "1144950481",
    poster: "https://i.vimeocdn.com/video/2093728812-e44e4a5009add1619fc64049c60216fb0def5b2438546c8db99aed0c7801cdbf-d_960?region=us",
    stat: "Next-Gen PERSUASION",
    tag: "[ INTERACTIVE DEMO ]"
  }
];

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!isPlaying) setIsPlaying(true);
      }}
      className={`relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border transition-all duration-500 bg-[#080808] group shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
        isPlaying ? "border-gold/50" : "border-white/10 hover:border-gold/40 cursor-pointer"
      }`}
    >
      {/* ── Background Video / Poster ── */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {isPlaying ? (
          <iframe
            src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full z-10"
            title={item.title}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.poster}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.5] group-hover:scale-105 transition-all duration-[1.2s] ease-[0.16,1,0.3,1]"
          />
        )}
      </div>

      {/* ── Close Button when Playing ── */}
      {isPlaying && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(false);
          }}
          className="absolute top-6 right-6 z-30 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black/60 hover:bg-black/90 hover:border-gold/60 text-white transition-all cursor-pointer shadow-lg"
          title="Close Video"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* ── Overlay Gradients (Promoting Legibility, Hidden when Playing) ── */}
      {!isPlaying && (
        <>
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
                <p className="text-sm md:text-base text-white/60 font-light max-w-2xl leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-start lg:justify-end">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 group-hover:bg-gold text-gold group-hover:text-black border border-gold/30 group-hover:border-gold transition-all duration-500 shadow-[0_0_20px_rgba(210,155,45,0.0)] group-hover:shadow-[0_0_30px_rgba(210,155,45,0.3)]">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">Play Case Video</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
          
          {/* ── Hover Play Indicator ── */}
          <div className="absolute top-6 right-6 flex items-center gap-2 pointer-events-none z-30 transition-opacity duration-500 opacity-40 group-hover:opacity-100">
            <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase group-hover:text-gold">
              CLICK TO PLAY VIDEO
            </span>
            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center bg-black/40">
              <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
            </div>
          </div>
        </>
      )}
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
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white uppercase mb-6 sm:mb-8 leading-tight"
          >
            Our Case <span className="text-gold">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed border-l-2 border-gold/40 pl-4 sm:pl-6 text-left"
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
                  "relative px-6 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer",
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

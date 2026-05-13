"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";

const steps = [
  { 
    num: "01", 
    title: "Submit Materials", 
    desc: "Send the records, reports, timelines, and case context needed to understand the visual problem.",
    image: "/sequence-1/0020.jpg"
  },
  { 
    num: "02", 
    title: "Visual Strategy", 
    desc: "We identify what needs to be simplified, emphasized, or clarified for mediation or trial.",
    image: "/wireframe_face.png"
  },
  { 
    num: "03", 
    title: "Demonstrative Build", 
    desc: "Graphics are created with a focus on accuracy, clarity, and persuasive communication.",
    image: "/sequence-1/0080.jpg"
  },
  { 
    num: "04", 
    title: "Delivery & Review", 
    desc: "Receive polished trial demonstratives ready for review, presentation, and use.",
    image: "/sequence-3/0060.jpg"
  }
];

function RoadmapCard({ 
  step, 
  index,
  isActive, 
  onHover,
  onLeave,
  onClick
}: { 
  step: typeof steps[0], 
  index: number,
  isActive: boolean, 
  onHover: () => void,
  onLeave: () => void,
  onClick: () => void
}) {
  return (
    <motion.div 
      initial={false}
      animate={{ 
        flexGrow: isActive ? 6 : 1,
        flexBasis: 0
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="relative flex flex-col justify-end overflow-hidden rounded-[2rem] bg-[#051A3D] border border-white/5 transition-colors group cursor-pointer h-[500px] md:h-[60vh] min-w-[80px]"
    >
      {/* Background Graphic/Glow */}
      <div className={`absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Always prominent image background */}
      <div className="absolute inset-0">
        <img 
          src={step.image} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-75 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#051A3D]/70 via-transparent to-[#051A3D]/70" />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <span className={`w-10 h-10 md:w-12 md:h-12 border text-gold rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-500 ${isActive ? 'bg-gold text-[#051A3D] border-gold shadow-[0_0_25px_rgba(229,181,58,0.5)]' : 'bg-[#051A3D] border-gold/50 shadow-[0_0_15px_rgba(210,155,45,0.3)]'}`}>
          {step.num}
        </span>
      </div>

      <div className="relative z-20 p-6 md:p-10 h-full flex flex-col justify-end pointer-events-none min-w-0">
        <div className="w-full max-w-[400px]">
          <h3 className={`text-xl md:text-3xl font-bold text-white tracking-wide transition-all duration-500 ${isActive ? 'mb-4' : 'mb-0'}`}>
            {step.title}
          </h3>
          
          <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted text-sm md:text-base leading-relaxed border-l-2 border-gold/50 pl-4">
              {step.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Track scroll position using modern event hook
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(Math.floor(v * 4), 3);
    if (index !== scrollIndex) {
      setScrollIndex(index);
    }
  });

  // Determine which card is active
  // Priority: Hover > Click > Scroll
  const getActiveIndex = () => {
    if (hoveredIndex !== null) return hoveredIndex;
    if (clickedIndex !== null) return clickedIndex;
    return scrollIndex;
  };

  const activeIndex = getActiveIndex();

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-[#051A3D] overflow-hidden min-h-[150vh]">
      <div className="sticky top-1/2 -translate-y-1/2 max-w-7xl mx-auto px-4 md:px-12 w-full">
        
        <div className="mb-12 md:mb-20 text-center">
          <span className="text-gold font-mono text-sm tracking-widest uppercase mb-4 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-white uppercase max-w-4xl mx-auto leading-tight">
            A Simple System for High-Stakes Visuals
          </h2>
        </div>
        
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
          {steps.map((step, i) => (
            <RoadmapCard 
              key={i} 
              index={i}
              step={step} 
              isActive={activeIndex === i}
              onHover={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(null)}
              onClick={() => setClickedIndex(clickedIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />
    </section>
  );
}

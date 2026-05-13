"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Play } from "lucide-react";

const testimonials = [
  {
    label: "TRIAL ATTORNEY",
    heading: "Clear visuals changed the entire dynamic of the mediation.",
    text: "The demonstratives simplified our timeline so effectively that the opposing side had no choice but to engage in meaningful settlement talks.",
    author: "Rachel Montes",
    videoSrc: "/rachel-montes-testimonial.mp4",
    poster: "/testimonials/rachel_montes.png"
  },
  {
    label: "PARTNER",
    heading: "Complex medical facts made undeniably clear.",
    text: "We needed to explain a very specific surgical error. The visuals built by the team did the heavy lifting for us in front of the jury.",
    author: "David Angeloff",
    videoSrc: "/david-angeloff-testimonial.mp4",
    poster: "/testimonials/david_angeloff.png"
  },
  {
    label: "MANAGING PARTNER",
    heading: "An essential part of our trial prep.",
    text: "I won't go to trial without having the visual strategy mapped out. It's just too critical for the jury to understand the medicine.",
    author: "Sarah Jenkins",
    videoSrc: "/globe-loop.mp4",
    poster: "/testimonials/sarah_jenkins.png"
  },
  {
    label: "LITIGATOR",
    heading: "Juries understand what they can see.",
    text: "Words are quickly forgotten, but a strong medical demonstrative sticks in the jury's mind throughout the entire trial.",
    author: "Michael Chen",
    videoSrc: "/rachel-montes-testimonial.mp4",
    poster: "/testimonials/michael_chen.png"
  },
];

function StackCard({
  testimonial,
  index,
  total,
  scrollYProgress,
}: {
  testimonial: typeof testimonials[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const step = 1 / (total - 1); 
  const enterStart = (index - 1) * step;
  const enterEnd = index * step;
  const exitStart = index * step;
  const exitEnd = (index + 1) * step;

  // Ultra-robust full-spectrum mapping to prevent Framer Motion clamping bugs on specific browsers
  const yRange = [0, Math.max(0, enterStart - 0.0001), Math.max(0, enterStart), Math.min(1, enterEnd), Math.min(1, enterEnd + 0.0001), 1];
  const yOutput = index === 0 
    ? ["0%", "0%", "0%", "0%", "0%", "0%"] 
    : ["100%", "100%", "100%", "0%", "0%", "0%"];
  const y = useTransform(scrollYProgress, yRange, yOutput);

  const scaleRange = [0, Math.max(0, exitStart - 0.0001), Math.max(0, exitStart), Math.min(1, exitEnd), Math.min(1, exitEnd + 0.0001), 1];
  const scaleOutput = [1, 1, 1, 0.9, 0.9, 0.9];
  const scale = useTransform(scrollYProgress, scaleRange, scaleOutput);

  // We will no longer use a dynamic overlay, ensuring all cards stay uniformly dark
  const zIndex = index;

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 py-12 h-auto md:h-[85vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative drop-shadow-2xl bg-[#080808] border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Left Side: Large Portrait Media */}
        <div className="w-full md:w-[45%] h-[400px] md:h-full bg-[#051A3D] rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 z-10 flex-shrink-0">
          <video 
            src={testimonial.videoSrc}
            poster={testimonial.poster}
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          {/* Subtle gradient only at the bottom for aesthetic blending, not to darken the whole image */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#051A3D]/60 to-transparent pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-between py-8 md:py-16 relative z-20">
          
          {/* Top part: Centered Square Image with Text Overlap */}
          <div className="flex-1 flex items-center justify-center relative w-full mt-8 md:mt-0">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-2xl overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] opacity-100 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#051A3D]/30 to-transparent z-10" />
              <img src={testimonial.poster} alt="" className="w-full h-full object-cover" />
            </div>
            
            {/* The overlapping text */}
            <h2 className="absolute text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] z-20 text-center w-[120%] leading-tight pointer-events-none">
              {testimonial.author}
            </h2>
          </div>

          {/* Bottom part: Label and Text */}
          <div className="mt-12 md:mt-auto flex flex-col items-start justify-end w-full">
            <h3 className="text-white font-bold text-xl md:text-2xl mb-4 leading-snug max-w-md">
              {testimonial.heading}
            </h3>
            <p className="text-muted text-sm md:text-base leading-relaxed max-w-md border-l border-gold/50 pl-4">
              {testimonial.text}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function TestimonialStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#051A3D]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-burgundy/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative w-full h-full">
          {testimonials.map((t, i) => (
            <StackCard 
              key={i} 
              testimonial={t} 
              index={i} 
              total={testimonials.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { services } from "@/lib/services-data";

function ServiceCard({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: typeof services[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const step = 1 / (total - 1); 
  const enterStart = (index - 1) * step;
  const enterEnd = index * step;
  const exitStart = index * step;
  const exitEnd = (index + 1) * step;

  // Slide in from right to left
  const xRange = [enterStart, enterEnd];
  const xOutput = index === 0 ? ["0%", "0%"] : ["100%", "0%"];
  const x = useTransform(scrollYProgress, xRange, xOutput);

  // Scale down when exiting
  const scaleRange = [exitStart, exitEnd];
  const scaleOutput = [1, 0.9];
  const scale = useTransform(scrollYProgress, scaleRange, scaleOutput);

  // Fade to black overlay for depth
  const overlayOpacityOutput = [0, 0.8];
  const overlayOpacity = useTransform(scrollYProgress, scaleRange, overlayOpacityOutput);

  const zIndex = index;

  return (
    <motion.div
      style={{
        x,
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
      <Link
        href={`/services/${service.slug}`}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 h-auto md:h-[65vh] relative drop-shadow-2xl group cursor-pointer block"
      >
        <div className="w-full h-full bg-[#051A3D] border border-white/5 rounded-xl sm:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col md:flex-row items-stretch hover:border-gold/30 transition-colors duration-500">
          
          {/* Darkening overlay for depth effect */}
          {index !== total - 1 && (
            <motion.div 
              className="absolute inset-0 bg-[#051A3D] z-50 pointer-events-none"
              style={{ opacity: overlayOpacity }}
            />
          )}

          {/* Left Side Text Content */}
          <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-16 flex flex-col justify-center relative z-20 bg-[#051A3D]">
            <span className="text-gold font-mono tracking-widest mb-4 text-lg md:text-xl opacity-80 block group-hover:text-gold transition-colors">
              {service.num}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-4 sm:mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed border-l-2 border-gold/50 pl-4 sm:pl-6 max-w-lg">
              {service.desc}
            </p>

            {/* View Details indicator */}
            <div className="mt-6 flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
              <span>View Details</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-full relative z-10 flex-shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#051A3D] via-[#051A3D]/30 to-transparent z-10" />
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  if (!mounted) {
    return (
      <section className="relative bg-[#051A3D] py-24 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase leading-tight">
            Visuals Built for Legal Impact
          </h2>
        </div>
      </section>
    );
  }

  if (isMobile) {
    return (
      <section className="relative bg-[#051A3D] py-24 md:py-32">
        {/* Title */}
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest text-white uppercase leading-tight">
            Visuals Built for <br className="hidden md:block" /> Legal Impact
          </h2>
        </div>

        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[200px]" />
        </div>

        {/* Cards Grid */}
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="group bg-[#0a2550] border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:border-gold/20 hover:shadow-[0_0_40px_rgba(210,155,45,0.1)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2550] via-transparent to-transparent z-10" />
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Number Badge */}
                <span className="absolute top-4 left-4 z-20 w-10 h-10 border border-gold/50 text-gold rounded-full flex items-center justify-center font-bold text-sm bg-[#051A3D]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(210,155,45,0.2)]">
                  {service.num}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/50 leading-relaxed border-l-2 border-gold/30 pl-4">
                  {service.desc}
                </p>

                {/* View Details Arrow */}
                <div className="mt-5 flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#051A3D]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        
        {/* Title */}
        <div className="w-full z-40 flex flex-col items-center justify-center pointer-events-none px-6 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest text-white uppercase text-center drop-shadow-2xl">
            Visuals Built for <br className="hidden md:block" /> Legal Impact
          </h2>
        </div>

        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[200px]" />
        </div>

        {/* Cards Container */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {services.map((s, i) => (
            <ServiceCard 
              key={i} 
              service={s} 
              index={i} 
              total={services.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

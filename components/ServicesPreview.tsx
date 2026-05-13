"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const services = [
  { num: "01", title: "Trial Graphics", desc: "Courtroom-ready visuals that help jurors and decision-makers understand the story.", img: "/sequence-1/0001.jpg" },
  { num: "02", title: "Medical Illustrations", desc: "Visual explanations of anatomy, injury, treatment, procedures, and causation.", img: "/sequence-2/0001.jpg" },
  { num: "03", title: "Mediation Presentations", desc: "Concise visual packages designed to communicate case value and liability clearly.", img: "/sequence-3/0001.jpg" },
  { num: "04", title: "Injury Visualizations", desc: "Graphics that explain how an injury occurred and why it matters.", img: "/sequence-2/0060.jpg" },
  { num: "05", title: "Timelines", desc: "Chronological visuals that organize events, treatment, injuries, and case development.", img: "/sequence-1/0060.jpg" },
  { num: "06", title: "Expert Demonstratives", desc: "Visual assets that help expert opinions become easier to understand.", img: "/sequence-3/0060.jpg" }
];

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
      <div className="w-full max-w-6xl mx-auto px-6 h-auto md:h-[65vh] relative drop-shadow-2xl">
        <div className="w-full h-full bg-[#051A3D] border border-white/5 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col md:flex-row items-stretch">
          
          {/* Darkening overlay for depth effect */}
          {index !== total - 1 && (
            <motion.div 
              className="absolute inset-0 bg-[#051A3D] z-50 pointer-events-none"
              style={{ opacity: overlayOpacity }}
            />
          )}

          {/* Left Side Text Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20 bg-[#051A3D]">
            <span className="text-gold font-mono tracking-widest mb-4 text-lg md:text-xl opacity-80 block">
              {service.num}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-6 leading-tight">
              {service.title}
            </h3>
            <p className="text-base md:text-lg text-muted leading-relaxed border-l-2 border-gold/50 pl-6 max-w-lg">
              {service.desc}
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 h-[250px] md:h-full relative z-10 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#051A3D] via-[#051A3D]/30 to-transparent z-10" />
            <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#051A3D]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">
        
        {/* Title */}
        <div className="w-full z-40 flex flex-col items-center justify-center pointer-events-none px-6 mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-white uppercase text-center drop-shadow-2xl">
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

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const miniProjects = [
  "/sequence-1/0020.jpg",
  "/sequence-2/0020.jpg",
  "/sequence-3/0020.jpg",
  "/sequence-1/0060.jpg",
  "/sequence-2/0060.jpg",
  "/sequence-3/0060.jpg",
];

function MiniProjectCard({ img }: { img: string }) {
  return (
    <div className="w-[220px] h-[124px] sm:w-[280px] sm:h-[158px] md:w-[320px] md:h-[180px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shrink-0 shadow-2xl relative group">
      <img src={img} alt="" className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500" />
      {/* Mini Play Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-10 h-10 bg-gold/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(210,155,45,0.3)] group-hover:scale-110 transition-transform duration-500">
          <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function VideoScaleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale the video down
  const videoWidth = useTransform(scrollYProgress, [0, 0.8], ["95vw", "60vw"]);
  const videoHeight = useTransform(scrollYProgress, [0, 0.8], ["85vh", "45vh"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.8], ["2rem", "1.5rem"]);

  // Fade in the background text
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 0.1]);
  const textScale = useTransform(scrollYProgress, [0.2, 1], [0.8, 1.1]);
  const textX = useTransform(scrollYProgress, [0.2, 1], ["5vw", "-5vw"]);

  // Scroll-linked offset
  const scrollOffset1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const scrollOffset2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  if (!mounted) return <section ref={containerRef} className="h-screen md:h-[400vh] bg-[#051A3D]" />;

  const wVal = isMobile ? "90vw" : videoWidth;
  const hVal = isMobile ? "50vh" : videoHeight;
  const rVal = isMobile ? "1.5rem" : videoRadius;
  const xVal1 = isMobile ? 0 : scrollOffset1;
  const xVal2 = isMobile ? 0 : scrollOffset2;

  const displayProjects = isMobile ? miniProjects : [...miniProjects, ...miniProjects, ...miniProjects];

  return (
    <section ref={containerRef} className="relative h-screen md:h-[400vh] bg-[#051A3D]" suppressHydrationWarning>
      <div className="relative md:sticky md:top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Top Infinite Strip - Increased prominence (opacity 80) */}
        <div className="absolute top-[8vh] left-0 w-full overflow-hidden z-0 opacity-80">
          <motion.div 
            style={{ x: xVal1 }}
            className="flex gap-6 w-max"
          >
            <motion.div 
              animate={isMobile ? {} : { x: [0, -1000] }}
              transition={isMobile ? {} : { repeat: Infinity, duration: 35, ease: "linear" }}
              className="flex gap-6"
            >
              {displayProjects.map((img, i) => (
                <MiniProjectCard key={i} img={img} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Infinite Strip - Increased prominence (opacity 80) */}
        <div className="absolute bottom-[8vh] left-0 w-full overflow-hidden z-0 opacity-80">
          <motion.div 
            style={{ x: xVal2 }}
            className="flex gap-6 w-max"
          >
            <motion.div 
              animate={isMobile ? {} : { x: [-1000, 0] }}
              transition={isMobile ? {} : { repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-6"
            >
              {displayProjects.map((img, i) => (
                <MiniProjectCard key={i} img={img} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
        </div>

        {/* Large Text Behind Video */}
        <motion.div 
          style={{ opacity: isMobile ? 0.05 : textOpacity, scale: isMobile ? 1 : textScale, x: isMobile ? 0 : textX }}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        >
          <h2 className="text-4xl sm:text-6xl md:text-[10vw] lg:text-[12vw] font-sans text-white whitespace-nowrap tracking-tighter uppercase font-black">
            Flat Rate Trial Graphics
          </h2>
        </motion.div>

        {/* Video Frame */}
        <motion.div
          style={{ 
            width: wVal, 
            height: hVal,
            borderRadius: rVal
          }}
          className="relative bg-[#051A3D] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.9)] z-20 flex items-center justify-center origin-center border border-white/15"
        >
          <img 
            src="/wireframe_face.png" 
            alt="3D Wireframe Face Graphic"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Main Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-16 h-16 md:w-24 md:h-24 bg-gold/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(210,155,45,0.6)] transition-transform hover:scale-110">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 md:ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
             </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

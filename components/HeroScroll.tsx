"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import Button from "./Button";

export default function HeroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Setup Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { images, loaded } = useImagePreloader({
    path: "/sequence-1",
    frameCount: 120, // Adjust based on actual frame count in zip
    extension: "jpg",
  });

  // Text Animations based on scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.65, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45, 0.75], [40, 0, -40]);

  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let currentFrameIndex = -1;

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameIndex === -1 ? 0 : currentFrameIndex);
    };

    const drawFrame = (frameIndex: number) => {
      if (frameIndex < 0 || frameIndex >= images.length) return;
      const img = images[frameIndex];
      if (!img) return;

      // Object-cover calculation
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Subscribe to scroll updates
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        images.length - 1,
        Math.floor(latest * images.length)
      );
      
      if (frameIndex !== currentFrameIndex) {
        currentFrameIndex = frameIndex;
        animationFrameId = requestAnimationFrame(() => drawFrame(frameIndex));
      }
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded, images, scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-[#051A3D]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051A3D]/80 via-transparent to-[#051A3D] pointer-events-none" />
        <div className="absolute inset-0 bg-[#051A3D]/70 pointer-events-none" />

        {/* Loading State */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gold">
            Loading...
          </div>
        )}

        {/* CSS Tech Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* UI Accents */}
        <motion.div style={{ opacity: textOpacity }} className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-8 left-8 hidden md:block text-gold font-mono text-[10px] tracking-[0.3em] opacity-80">
            [SYSTEM.ACTIVE] // TRIAL_TEMPLATE_V1
          </div>
          <div className="absolute top-8 right-8 hidden md:block text-white/40 font-mono text-[10px] tracking-widest text-right">
            EVIDENTIARY GRAPHICS<br/>MED_LEGAL_ENGINE
          </div>
          <div className="absolute bottom-8 left-8 hidden md:block text-white/30 font-mono text-[10px] tracking-[0.2em]">
            SCROLL TRIGGERED
          </div>
        </motion.div>

        {/* Hero Content */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20"
        >
          {/* Subtle top badge */}
          <div className="mb-6 px-4 py-1 border border-gold/30 rounded-full bg-gold/5 backdrop-blur-sm inline-block">
            <span className="text-gold text-xs font-mono tracking-widest uppercase">
              Visual Strategy for Litigators
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest text-white mb-4 sm:mb-6 leading-tight max-w-6xl drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            FLAT-RATE TRIAL <br className="hidden md:block" /> DEMONSTRATIVES
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted max-w-2xl mb-8 sm:mb-12 tracking-wide font-light border-l-2 border-gold/50 pl-4 sm:pl-6 text-left mx-auto">
            Impactful graphics built for mediation & trial. We simplify complex evidence so your jury understands the facts instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center">
            <Button href="/services" variant="secondary">Explore Services</Button>
            <Button href="/contact" variant="primary">Schedule a Demo</Button>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none z-20"
        >
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4 font-mono">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "200%"] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-gold to-transparent" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

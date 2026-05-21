"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

function PlaneMorphMobile() {
  return (
    <section className="relative bg-[#051A3D] h-screen">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Static Background Image (Fully revealed morph frame) */}
        <img
          src="/sequence-2/0060.jpg"
          alt="Trial Graphics Head/Brain Visualization"
          className="absolute inset-0 h-full w-full object-cover opacity-60 filter brightness-[0.7]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#051A3D] via-transparent to-[#051A3D] pointer-events-none" />
        <div className="absolute inset-0 bg-[#051A3D]/30 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none z-15">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-white uppercase max-w-xl leading-tight">
              Anatomy. Injury.<br/> Causation. Procedure.
            </h2>
            <p className="text-base sm:text-lg font-light tracking-wide text-white/60 max-w-md leading-relaxed mx-auto">
              Every frame is designed to make complex evidence easier to understand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaneMorphDesktop() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { images, loaded } = useImagePreloader({
    path: "/sequence-2",
    frameCount: 120,
    extension: "jpg",
  });

  // Phase 1 Text
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
  const phase1Y = useTransform(scrollYProgress, [0, 0.25], [40, -40]);

  // Phase 2 Text
  const phase2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
  const phase2Y = useTransform(scrollYProgress, [0.35, 0.6], [40, -40]);

  // Phase 3 Text
  const phase3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const phase3Y = useTransform(scrollYProgress, [0.7, 0.95], [40, -40]);

  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let currentFrameIndex = -1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameIndex === -1 ? 0 : currentFrameIndex);
    };

    const drawFrame = (frameIndex: number) => {
      if (frameIndex < 0 || frameIndex >= images.length) return;
      const img = images[frameIndex];
      if (!img) return;

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

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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
    <section ref={sectionRef} className="relative bg-[#051A3D] h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas morph visualization */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#051A3D] via-transparent to-[#051A3D] pointer-events-none" />
        <div className="absolute inset-0 bg-[#051A3D]/30 pointer-events-none" />
        
        {/* Subtle gold lines overlay */}
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gold/10 hidden md:block" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-gold/10 hidden md:block" />

        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gold">
            Loading...
          </div>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none">
          <motion.div style={{ opacity: phase1Opacity, y: phase1Y }} className="absolute">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-widest text-white uppercase max-w-4xl leading-tight">
              Medical Visuals <br/> Built for Trial
            </h2>
          </motion.div>

          <motion.div style={{ opacity: phase2Opacity, y: phase2Y }} className="absolute">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-white uppercase max-w-4xl leading-tight">
              Anatomy. Injury.<br/> Causation. Procedure.
            </h2>
          </motion.div>

          <motion.div style={{ opacity: phase3Opacity, y: phase3Y }} className="absolute">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-light tracking-wide text-muted max-w-3xl leading-relaxed">
              Every frame is designed to make complex evidence easier to understand.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function PlaneMorph() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  if (!mounted) {
    return (
      <section className="relative bg-[#051A3D] h-screen">
        <div className="absolute inset-0 bg-[#051A3D]" />
      </section>
    );
  }

  if (isMobile) {
    return <PlaneMorphMobile />;
  }

  return <PlaneMorphDesktop />;
}

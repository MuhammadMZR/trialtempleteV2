"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

export default function FinalMorph() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { images, loaded } = useImagePreloader({
    path: "/sequence-3",
    frameCount: 120,
    extension: "jpg",
  });

  // Phase 1 Text
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
  const phase1Y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  // Phase 2 Text
  const phase2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const phase2Y = useTransform(scrollYProgress, [0.5, 0.6], [40, 0]);

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
    <section ref={sectionRef} className="relative h-[300vh] bg-[#051A3D]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#051A3D] via-transparent to-[#051A3D] pointer-events-none" />
        <div className="absolute inset-0 bg-[#051A3D]/40 pointer-events-none" />
        
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-gold">
            Loading...
          </div>
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none">
          <motion.div style={{ opacity: phase1Opacity, y: phase1Y }} className="absolute">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-widest text-white uppercase max-w-4xl leading-tight drop-shadow-2xl">
              Precision in <br/> Every Detail
            </h2>
          </motion.div>

          <motion.div style={{ opacity: phase2Opacity, y: phase2Y }} className="absolute">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-light tracking-wide text-white max-w-3xl leading-relaxed drop-shadow-2xl">
              Transforming <span className="text-gold font-bold">complex data</span> into clear, undeniable visual facts.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

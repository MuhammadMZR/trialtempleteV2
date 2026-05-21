"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── Count-Up Number ─── */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <>{val}{suffix}</>;
}

function ServicesHeroMobile() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: 480 }}>
      {/* Static Background Image */}
      <img
        src="/sequence-1/0050.jpg"
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.7]"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(5,26,61,0.85) 0%, rgba(5,26,61,0.3) 35%, rgba(5,26,61,0.3) 65%, rgba(5,26,61,1) 100%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.45)" }} />

      {/* CSS grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.03,
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pt-16">
        {/* Pill badge */}
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#E5B53A" }} />
          </span>
          <div
            className="px-4 py-1 rounded-full font-mono text-xs tracking-widest uppercase"
            style={{
              border: "1px solid rgba(229,181,58,0.3)",
              background: "rgba(229,181,58,0.06)",
              backdropFilter: "blur(8px)",
              color: "#E5B53A",
            }}
          >
            Flat-Rate Demonstratives
          </div>
        </div>

        {/* Main title */}
        <h1
          className="font-bold tracking-widest text-white uppercase leading-tight mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.08)] text-4xl sm:text-5xl"
          style={{ maxWidth: 900 }}
        >
          OUR <span style={{
            background: "linear-gradient(135deg, #E5B53A 0%, #fff8dc 50%, #D29B2D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>SERVICES</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base max-w-xl mb-8 tracking-wide font-light border-l-2 pl-4 text-left mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(229,181,58,0.45)" }}
        >
          Premium legal and medical graphics designed to simplify complex evidence —{" "}
          <em style={{ color: "rgba(229,181,58,0.9)" }}>built for mediation, trial, and case strategy.</em>
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 justify-center">
          {[
            { value: 500, suffix: "+",   label: "Cases Supported" },
            { value: 12,  suffix: " yrs", label: "Of Expertise" },
            { value: 100, suffix: "%",   label: "Flat-Rate Pricing" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6">
              {i !== 0 && <div className="w-px h-6" style={{ background: "rgba(229,181,58,0.2)" }} />}
              <div className="text-center">
                <p className="text-lg font-bold text-white tracking-wide">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-[8px] font-bold tracking-[0.25em] uppercase mt-0.5" style={{ color: "rgba(229,181,58,0.7)" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesHeroDesktop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);

  const { images, loaded } = useImagePreloader({
    path: "/sequence-1",
    frameCount: 120,
    extension: "jpg",
  });

  /* ── Auto-play loop at ~24 fps ── */
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const FPS = 24;
    const interval = 1000 / FPS;
    let last = 0;

    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick);
      if (now - last < interval) return;
      last = now;

      frameRef.current = (frameRef.current + 1) % images.length;
      const img = images[frameRef.current];
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const ir = img.width / img.height;
      const cr = cw / ch;

      let dw = cw, dh = ch, ox = 0, oy = 0;
      if (cr > ir) { dh = cw / ir; oy = (ch - dh) / 2; }
      else         { dw = ch * ir; ox = (cw - dw) / 2; }

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, ox, oy, dw, dh);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [loaded, images]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "60vh", minHeight: 480 }}>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover" }}
      />

      {/* Loading placeholder */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#051A3D" }}>
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-t-transparent"
              style={{ borderColor: "rgba(229,181,58,0.5)", borderTopColor: "transparent" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-xs tracking-[0.3em] uppercase font-bold" style={{ color: "rgba(229,181,58,0.7)" }}>
              Loading
            </span>
          </div>
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, rgba(5,26,61,0.85) 0%, rgba(5,26,61,0.3) 35%, rgba(5,26,61,0.3) 65%, rgba(5,26,61,1) 100%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.45)" }} />

      {/* CSS grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.03,
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HUD corner labels */}
      <motion.div
        style={{ opacity: loaded ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="absolute top-24 left-8 hidden md:block font-mono text-[10px] tracking-[0.3em] opacity-80" style={{ color: "#E5B53A" }}>
          [SERVICES.ACTIVE] // CAPABILITIES_ENGINE
        </div>
        <div className="absolute top-24 right-8 hidden md:block font-mono text-[10px] tracking-widest text-right" style={{ color: "rgba(255,255,255,0.35)" }}>
          TRIAL TEMPLATE<br />SERVICES_BASE
        </div>
        <div className="absolute bottom-8 left-8 hidden md:block font-mono text-[10px] tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.25)" }}>
          SERVICES // DEMONSTRATIVES
        </div>

        {/* Corner brackets */}
        <div className="absolute top-20 left-6 w-12 h-12 hidden md:block" style={{ borderTop: "1.5px solid rgba(229,181,58,0.35)", borderLeft: "1.5px solid rgba(229,181,58,0.35)" }} />
        <div className="absolute top-20 right-6 w-12 h-12 hidden md:block" style={{ borderTop: "1.5px solid rgba(229,181,58,0.35)", borderRight: "1.5px solid rgba(229,181,58,0.35)" }} />
        <div className="absolute bottom-6 left-6 w-12 h-12 hidden md:block" style={{ borderBottom: "1.5px solid rgba(229,181,58,0.2)", borderLeft: "1.5px solid rgba(229,181,58,0.2)" }} />
        <div className="absolute bottom-6 right-6 w-12 h-12 hidden md:block" style={{ borderBottom: "1.5px solid rgba(229,181,58,0.2)", borderRight: "1.5px solid rgba(229,181,58,0.2)" }} />
      </motion.div>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pt-16">
        {/* Pulsing live dot/badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{ background: "rgba(229,181,58,0.6)" }}
              animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#E5B53A" }} />
          </span>
          <div
            className="px-4 py-1 rounded-full font-mono text-xs tracking-widest uppercase"
            style={{
              border: "1px solid rgba(229,181,58,0.3)",
              background: "rgba(229,181,58,0.06)",
              backdropFilter: "blur(8px)",
              color: "#E5B53A",
            }}
          >
            Flat-Rate Demonstratives
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-bold tracking-widest text-white uppercase leading-tight mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", maxWidth: 900 }}
        >
          {["OUR", "SERVICES"].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.4 + i * 0.18 }}
              style={word === "SERVICES" ? {
                background: "linear-gradient(135deg, #E5B53A 0%, #fff8dc 50%, #D29B2D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              } : {}}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg max-w-xl mb-8 tracking-wide font-light border-l-2 pl-6 text-left mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)", borderColor: "rgba(229,181,58,0.45)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: premiumEase, delay: 0.8 }}
        >
          Premium legal and medical graphics designed to simplify complex evidence —{" "}
          <em style={{ color: "rgba(229,181,58,0.9)" }}>built for mediation, trial, and case strategy.</em>
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center gap-4 sm:gap-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: premiumEase, delay: 1.0 }}
        >
          {[
            { value: 500, suffix: "+",   label: "Cases Supported" },
            { value: 12,  suffix: " yrs", label: "Of Expertise" },
            { value: 100, suffix: "%",   label: "Flat-Rate Pricing" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              {i !== 0 && <div className="w-px h-6" style={{ background: "rgba(229,181,58,0.2)" }} />}
              <div className="text-center">
                <p className="text-xl font-bold text-white tracking-wide">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[9px] font-bold tracking-[0.25em] uppercase mt-0.5" style={{ color: "rgba(229,181,58,0.7)" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
        <div className="w-px h-8 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #E5B53A, transparent)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default function ServicesHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  if (!mounted) {
    return (
      <section className="relative w-full bg-[#051A3D]" style={{ height: "60vh", minHeight: 480 }} />
    );
  }

  if (isMobile) {
    return <ServicesHeroMobile />;
  }

  return <ServicesHeroDesktop />;
}

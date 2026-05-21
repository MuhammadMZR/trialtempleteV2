"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable Lenis on mobile screens or touch devices for native smooth scroll
    const isMobile = window.matchMedia("(max-width: 1024px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);

    if (isMobile) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

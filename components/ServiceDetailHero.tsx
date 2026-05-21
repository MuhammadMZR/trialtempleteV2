"use client";

import Link from "next/link";
import type { Service } from "@/lib/services-data";

export default function ServiceDetailHero({ service }: { service: Service }) {
  return (
    <section className="relative pt-[72px]">
      {/* Full-width Video Hero */}
      <div className="relative w-full overflow-hidden bg-black">

        {/* Vimeo Embedded Player */}
        <div className="w-full aspect-video max-h-[75vh]">
          <iframe
            src={`https://player.vimeo.com/video/${service.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            className="w-full h-full"
            title={service.title}
          />
        </div>

        {/* Bottom Gradient into Content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#051A3D] to-transparent pointer-events-none" />
      </div>

      {/* Title Section Below Video */}
      <div className="relative bg-[#051A3D] px-6 pb-12 pt-8 -mt-16 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6 tracking-wide">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </div>

          {/* Service Number + Title */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-12 border-2 border-gold text-gold rounded-full flex items-center justify-center font-bold text-lg bg-[#051A3D] shadow-[0_0_25px_rgba(210,155,45,0.3)]">
              {service.num}
            </span>
            <span className="text-gold font-mono text-sm tracking-widest uppercase">Service</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide uppercase leading-tight">
            {service.title}
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
            {service.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

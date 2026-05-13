"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Surgical Error Reconstruction",
    category: "Medical Malpractice",
    image: "/wireframe_face.png",
  },
  {
    title: "Intersection Collision Analysis",
    category: "Personal Injury",
    image: "/sequence-1/0050.jpg",
  },
  {
    title: "Defective Valve Breakdown",
    category: "Product Liability",
    image: "/sequence-1/0080.jpg",
  },
  {
    title: "Financial Fraud Timeline",
    category: "Commercial Litigation",
    image: "/sequence-1/0110.jpg",
  }
];

export default function OurProjects() {
  // We duplicate the projects array multiple times to create a seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className="bg-[#051A3D] py-32 overflow-hidden border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-gold font-mono text-sm tracking-widest uppercase mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white uppercase">Featured Projects</h2>
        </div>
        <button className="flex items-center gap-2 text-muted hover:text-gold transition-colors pb-2">
          <span className="font-mono text-sm uppercase tracking-widest">View All Cases</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative w-full flex overflow-hidden py-10">
        {/* Left/Right Gradient Masks for smooth fade out */}
        <div className="absolute top-0 left-0 w-16 md:w-64 h-full bg-gradient-to-r from-[#051A3D] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-64 h-full bg-gradient-to-l from-[#051A3D] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {duplicatedProjects.map((project, i) => (
            <div 
              key={i} 
              className="w-[280px] md:w-[380px] flex-shrink-0 group cursor-pointer"
            >
              {/* Image Container (Vertical card aspect ratio) */}
              <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 relative shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Text that appears on hover */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    View Case Study <ArrowRight className="w-4 h-4 text-gold" />
                  </span>
                </div>
              </div>
              
              {/* Text */}
              <span className="text-gold font-mono text-[10px] md:text-xs tracking-widest uppercase mb-3 block opacity-80">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-gold transition-colors leading-snug">
                {project.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

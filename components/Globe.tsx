"use client";

import { motion } from "framer-motion";

export default function Globe() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
  
  const projects = [
    { num: "01", category: "Medical Injury Timeline", title: "Spinal Fusion Procedure", desc: "A chronological visual showing pre- and post-op spinal condition." },
    { num: "02", category: "Surgical Visual Demonstrative", title: "Craniotomy Explanation", desc: "Detailed breakdown of a complex neurosurgical intervention." },
    { num: "03", category: "Mediation Graphics Package", title: "Commercial Trucking Accident", desc: "Liability and causation visuals designed for settlement discussion." },
    { num: "04", category: "Trial Exhibit System", title: "Product Liability Flow", desc: "Courtroom-ready exhibits explaining mechanical failure." }
  ];

  return (
    <section className="relative min-h-screen bg-[#051A3D] overflow-hidden py-16 md:py-32">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-[#051A3D]">
        <video
          src="/globe-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40 hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D] via-[#051A3D]/40 to-[#051A3D]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEase }}
          className="mb-20 text-center"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-white uppercase mb-4 sm:mb-6">
            Our Projects
          </h2>
          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-light">
            A cinematic look at the demonstratives, visuals, and case graphics built to support high-stakes legal communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: premiumEase, delay: index * 0.1 }}
              className="group relative bg-[#051A3D]/80 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-sm hover:border-gold/50 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/50 to-transparent transition-all duration-700" />
              
              <span className="text-gold font-mono text-sm tracking-widest mb-6 block">
                {item.num} — {item.category}
              </span>
              <h3 className="text-xl sm:text-2xl text-white font-bold tracking-wide mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

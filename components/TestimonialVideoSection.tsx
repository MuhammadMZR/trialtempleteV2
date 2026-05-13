"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function TestimonialVideoSection() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const testimonials = [
    {
      name: "Rachel Montes",
      title: "Trial Attorney",
      videoSrc: "/rachel-montes-testimonial.mp4",
      poster: "/headshot-rachel.jpg"
    },
    {
      name: "David Angeloff",
      title: "Partner",
      videoSrc: "/david-angeloff-testimonial.mp4",
      poster: "/headshot-david.jpg"
    }
  ];

  return (
    <section className="bg-burgundy py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#051A3D]/60" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: premiumEase }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-white uppercase mb-6 leading-tight">
            Trusted Visuals. <br/> Clearer Arguments.
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto font-light">
            Hear from professionals who use visual storytelling to bring clarity to complex cases.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: premiumEase, delay: i * 0.2 }}
              className={`w-full md:w-[45%] lg:w-[40%] relative group ${i === 1 ? "md:mt-24" : ""}`}
            >
              <div className="aspect-[4/5] bg-[#051A3D] rounded-sm overflow-hidden relative shadow-2xl border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
                <video 
                  src={t.videoSrc}
                  poster={t.poster}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  muted
                  playsInline
                  loop
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D] via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-gold/80 hover:bg-gold backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_30px_rgba(210,155,45,0.3)]">
                    <Play className="w-8 h-8 text-black ml-1 group-hover:scale-95 transition-transform" fill="currentColor" />
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-1">{t.name}</h3>
                  <p className="text-gold text-sm tracking-widest uppercase">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

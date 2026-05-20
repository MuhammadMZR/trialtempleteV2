"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rachel Montes",
    title: "Lead Trial Attorney",
    firm: "Montes & Associates",
    image: "/testimonials/rachel_montes.png",
    rating: 5,
    review:
      "Trial Template's demonstratives were the turning point in our case. The 3D neuro-anatomical reconstruction made the jury immediately understand the severity of our client's injuries — no medical background needed. We secured a full verdict.",
  },
  {
    id: 2,
    name: "David Angeloff",
    title: "Senior Partner",
    firm: "Angeloff Litigation Group",
    image: "/testimonials/david_angeloff.png",
    rating: 5,
    review:
      "The biomechanical valve breakdown sequence was unlike anything opposing counsel had seen. It told the entire story of the defect in under two minutes. The jury didn't just understand it — they felt it. Multi-million dollar result.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    title: "IP Litigation Counsel",
    firm: "Jenkins & Webb LLP",
    image: "/testimonials/sarah_jenkins.png",
    rating: 5,
    review:
      "Complex software infringement cases are notoriously hard to explain. Trial Template turned thousands of server log files into a single, elegant animated flow that the judge described as 'the clearest technical evidence I've seen in 20 years on the bench.'",
  },
  {
    id: 4,
    name: "Michael Chen",
    title: "Personal Injury Attorney",
    firm: "Chen Law Firm",
    image: "/testimonials/michael_chen.png",
    rating: 5,
    review:
      "From our very first call, I knew these were professionals. The collision dynamics animation — impact angles, velocity, orthopaedic trauma — was precise, compelling, and unimpeachable. Full liability was established before cross-examination even started.",
  },
];

function FlipCard({
  client,
  index,
}: {
  client: (typeof testimonials)[0];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="flex-1 min-w-0 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Rotating wrapper */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full"
      >
        {/* ── FRONT — portrait ── */}
        <div
          className="w-full rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-colors duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.6)] group"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Portrait image */}
          <div className="relative w-full aspect-[3/4] bg-[#0a1f3d]">
            <Image
              src={client.image}
              alt={client.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D] via-[#051A3D]/20 to-transparent" />

            {/* Hover hint badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white/60 font-mono text-[9px] tracking-widest uppercase">Hover to Read</span>
            </div>
          </div>

          {/* Name strip */}
          <div className="bg-[#061c40] px-5 py-4 flex justify-between items-end border-t border-white/5">
            <div>
              <p className="text-white font-semibold text-sm tracking-wide">{client.name}</p>
              <p className="text-white/40 text-xs tracking-wider mt-0.5">{client.title}</p>
            </div>
            <p className="text-white/25 text-[9px] tracking-widest uppercase text-right leading-tight">
              {client.firm}
            </p>
          </div>
        </div>

        {/* ── BACK — review ── */}
        <div
          className="absolute inset-0 w-full rounded-2xl border border-gold/50 bg-gradient-to-br from-[#0e2448] via-[#0a1c3a] to-[#051A3D] shadow-[0_0_60px_rgba(229,181,58,0.18)] flex flex-col justify-between p-7"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Top — stars + quote */}
          <div>
            {/* Stars row */}
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: client.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
              <span className="text-white/35 text-[10px] ml-2 font-mono tracking-widest">
                ({client.rating}.0 Rating)
              </span>
            </div>

            {/* Gold divider */}
            <div className="w-8 h-[1.5px] bg-gold/60 mt-4 mb-5" />

            {/* Review text */}
            <p className="text-white/75 text-xs leading-[1.85] font-light">
              "{client.review}"
            </p>
          </div>

          {/* Bottom — mini avatar + name */}
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold/40 flex-shrink-0">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white text-xs font-semibold tracking-wide">{client.name}</p>
              <p className="text-white/40 text-[10px] tracking-wide mt-0.5">{client.firm}</p>
            </div>
            {/* Gold corner accent */}
            <div className="ml-auto">
              <div className="w-6 h-6 opacity-30" style={{ borderBottom: "1.5px solid #e5b53a", borderRight: "1.5px solid #e5b53a" }} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen bg-[#051A3D] pt-32 pb-32">

      {/* ── Hero label ── */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-[1.5px] bg-gold" />
          <span className="text-gold font-mono text-xs tracking-widest uppercase">Testimonials</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white uppercase leading-tight"
          >
            — Our Happy <span className="text-gold">Clients</span> Say
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: premiumEase, delay: 0.2 }}
            className="text-sm text-white/40 font-light max-w-xs leading-relaxed md:text-right"
          >
            Hover any card to read the full review. Attorneys, partners, and counsel speak for themselves.
          </motion.p>
        </div>
      </section>

      {/* ── 4-card row ── */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex gap-5 items-stretch">
          {testimonials.map((client, i) => (
            <FlipCard key={client.id} client={client} index={i} />
          ))}
        </div>
      </section>

      {/* ── Bottom quote ── */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: premiumEase }}
          className="text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight"
        >
          Clear visuals change the way{" "}
          <span className="text-gold">complex</span> cases are{" "}
          <span className="text-gold">understood</span>.
        </motion.h2>
      </section>
    </div>
  );
}

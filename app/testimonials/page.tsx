"use client";

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
}: {
  client: (typeof testimonials)[0];
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer w-full"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Rotating wrapper */}
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT — portrait ── */}
        <div
          className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-colors duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full aspect-[3/4] bg-[#0a1f3d]">
            <Image
              src={client.image}
              alt={client.name}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D] via-[#051A3D]/20 to-transparent" />

            {/* Tap/Hover hint */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
              <span className="text-white/60 font-mono text-[8px] sm:text-[9px] tracking-widest uppercase">
                Tap to Read
              </span>
            </div>
          </div>

          <div className="bg-[#061c40] px-3 py-3 sm:px-5 sm:py-4 flex justify-between items-end border-t border-white/5">
            <div>
              <p className="text-white font-semibold text-xs sm:text-sm tracking-wide">{client.name}</p>
              <p className="text-white/40 text-[10px] sm:text-xs tracking-wider mt-0.5">{client.title}</p>
            </div>
            <p className="text-white/25 text-[8px] sm:text-[9px] tracking-widest uppercase text-right leading-tight hidden sm:block">
              {client.firm}
            </p>
          </div>
        </div>

        {/* ── BACK — review ── */}
        <div
          className="absolute inset-0 w-full rounded-xl sm:rounded-2xl border border-gold/50 bg-gradient-to-br from-[#0e2448] via-[#0a1c3a] to-[#051A3D] shadow-[0_0_60px_rgba(229,181,58,0.18)] flex flex-col justify-between p-4 sm:p-7"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: client.rating }).map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gold text-gold" />
              ))}
              <span className="text-white/35 text-[9px] sm:text-[10px] ml-2 font-mono tracking-widest">
                ({client.rating}.0)
              </span>
            </div>

            <div className="w-8 h-[1.5px] bg-gold/60 mt-3 mb-4 sm:mt-4 sm:mb-5" />

            <p className="text-white/75 text-[10px] sm:text-xs leading-[1.75] sm:leading-[1.85] font-light">
              &quot;{client.review}&quot;
            </p>
          </div>

          <div className="flex items-center gap-3 mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-gold/40 flex-shrink-0">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white text-[10px] sm:text-xs font-semibold tracking-wide">{client.name}</p>
              <p className="text-white/40 text-[9px] sm:text-[10px] tracking-wide mt-0.5">{client.firm}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#051A3D] pt-24 pb-16 sm:pt-32 sm:pb-32">

      {/* ── Hero label ── */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-[1.5px] bg-gold" />
          <span className="text-gold font-mono text-xs tracking-widest uppercase">Testimonials</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white uppercase leading-tight">
            — Our Happy <span className="text-gold">Clients</span> Say
          </h1>

          <p className="text-xs sm:text-sm text-white/40 font-light max-w-xs leading-relaxed md:text-right">
            Tap any card to read the full review. Attorneys, partners, and counsel speak for themselves.
          </p>
        </div>
      </section>

      {/* ── Card grid — stacks on mobile, 2-col on sm, 4-col on lg ── */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((client) => (
            <FlipCard key={client.id} client={client} />
          ))}
        </div>
      </section>

      {/* ── Bottom quote ── */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-wide text-white leading-tight">
          Clear visuals change the way{" "}
          <span className="text-gold">complex</span> cases are{" "}
          <span className="text-gold">understood</span>.
        </h2>
      </section>
    </div>
  );
}

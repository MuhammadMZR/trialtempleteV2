"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase }}
          className="max-w-4xl"
        >
          <span className="text-gold font-bold tracking-widest uppercase mb-6 block text-sm">
            About Trial Template
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white uppercase mb-8 leading-tight">
            Visual Strategy for <br/> Complex Legal Stories
          </h1>
          <p className="text-xl md:text-2xl text-muted font-light leading-relaxed">
            Trial Template helps attorneys communicate medical facts, timelines, injuries, and case arguments through clear, persuasive demonstratives.
          </p>
        </motion.div>
      </section>

      <section className="bg-[#051A3D] py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase }}
          >
            <h2 className="text-3xl font-bold tracking-wide text-white mb-6">What We Believe</h2>
            <p className="text-lg text-muted leading-relaxed">
              The strongest visual is not the most complicated one. It is the one that makes the argument easier to understand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-wide text-white mb-6">Why It Matters</h2>
            <ul className="space-y-4 text-lg text-muted">
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span>
                Jurors need clarity
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span>
                Mediators need fast understanding
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span>
                Attorneys need visuals that support strategy
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1">✦</span>
                Medical facts need to be simplified without losing accuracy
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

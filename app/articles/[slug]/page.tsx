"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const articles: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  body: string[];
}> = {
  "everything-has-changed": {
    title: "Everything Has Changed. We Have Too. We Can Help.",
    excerpt:
      "Trial Template was created as a means to offer small to mid-sized law offices access to the same quality of litigation graphics that larger firms rely on every day.",
    date: "MARCH 10, 2024",
    category: "Company News",
    image: "/articles/article-3.png",
    readTime: "5 min read",
    body: [
      "The legal landscape has fundamentally shifted. Jurors today are more visually sophisticated than ever — shaped by high-resolution screens, streaming media, and an expectation of compelling visual storytelling. Static, text-heavy exhibits no longer hold attention the way they once did.",
      "Trial Template was born from a simple insight: smaller law firms deserve the same caliber of litigation graphics that BigLaw takes for granted. Our flat-rate model removes the financial gatekeeping that has kept premium demonstratives out of reach.",
      "We've invested in the tools, talent, and process to deliver cinematic-quality medical illustrations, accident reconstructions, and case timelines — on time, on budget, every time.",
      "The change in how cases are won is permanent. The firms that adapt their visual strategy now will have a decisive advantage in the courtroom for years to come. We're here to make sure your firm is one of them.",
    ],
  },
  "sftla-ski-cle-2021": {
    title: "2021 SFTLA Ski And CLE Presentation And Materials",
    excerpt:
      "We were honored to present at this year's SFTLA Ski and CLE conference.",
    date: "MARCH 25–28, 2021",
    category: "Events",
    image: "/articles/article-2.png",
    readTime: "4 min read",
    body: [
      "We were honored to present at this year's SFTLA Ski and CLE conference held in the mountains where we had the opportunity to discuss various graphic resources designed to decrease attorney workload while significantly increasing recovery potential.",
      "Our presentation covered the full spectrum of modern trial graphics: from medical-grade anatomical illustrations to dynamic timeline exhibits and accident reconstruction visualizations.",
      "Attendees were particularly interested in our flat-rate pricing model, which makes premium demonstratives accessible to firms of all sizes without unpredictable hourly billing.",
      "We're grateful to the SFTLA for the opportunity and look forward to continuing our relationship with California's leading plaintiff attorneys. Materials from the presentation are available on request.",
    ],
  },
  "medical-demonstratives-guide": {
    title: "The Power of Medical Demonstratives in High-Stakes Litigation",
    excerpt:
      "Understanding how anatomical visualizations can shift jury perception.",
    date: "JANUARY 18, 2024",
    category: "Strategy",
    image: "/articles/article-4.png",
    readTime: "7 min read",
    body: [
      "In complex medical malpractice and personal injury cases, the gap between what attorneys understand and what jurors can grasp is enormous. Medical demonstratives bridge that gap with precision and persuasive power.",
      "A well-crafted anatomical illustration does more than explain — it creates an emotional connection between the jury and the injury. When jurors can visualize a herniated disc pressing against a nerve root, they don't just understand the damage intellectually — they feel its significance.",
      "Our approach combines medical accuracy with visual clarity: every exhibit is reviewed for anatomical correctness while being designed to communicate at the comprehension level of a lay audience.",
      "The data supports this approach. Studies consistently show that juries award significantly higher damages in cases where high-quality medical demonstratives were used compared to text-only or low-quality visual presentations.",
    ],
  },
  "holographic-courtroom": {
    title: "Inside the Future Courtroom: Holographic Evidence Presentation",
    excerpt:
      "The next frontier of trial graphics is here — 3D holographic exhibits and interactive digital timelines.",
    date: "FEBRUARY 2, 2024",
    category: "Innovation",
    image: "/articles/article-1.png",
    readTime: "6 min read",
    body: [
      "The courtroom of tomorrow is being built today. Emerging technologies — from volumetric 3D displays to interactive AR overlays — are poised to transform how evidence is presented and understood by juries.",
      "We've been at the forefront of this evolution, exploring how holographic and mixed-reality presentations can make complex case narratives immediately comprehensible without losing legal rigor.",
      "Early adopters are already seeing results. Attorneys using advanced 3D reconstructions in complex product liability cases report dramatically improved juror engagement and comprehension scores during mock trial testing.",
      "The technology barrier is lower than most firms expect. Trial Template's team has been developing workflows that make cutting-edge visual presentations accessible within standard trial budgets — no six-figure AV production required.",
    ],
  },
  "timeline-mastery": {
    title: "Timeline Mastery: Structuring Your Case Narrative for Juror Clarity",
    excerpt:
      "A compelling timeline is one of the most powerful demonstrative tools available.",
    date: "DECEMBER 5, 2023",
    category: "Best Practices",
    image: "/articles/article-5.png",
    readTime: "8 min read",
    body: [
      "Of all the demonstrative tools available to trial attorneys, the case timeline is simultaneously the most powerful and the most underutilized. When done well, a timeline transforms a complex web of events into a clear, undeniable narrative.",
      "The key is information hierarchy. Not every event belongs on the primary timeline — cluttered exhibits undermine comprehension. Our process begins with a strategic conversation: which facts support causation? Which demonstrate negligence? Which create emotional impact?",
      "Visual rhythm matters as much as content. Spacing, color-coding, iconography, and typography all contribute to how quickly and accurately jurors absorb timeline information. We design for a three-second comprehension window — the time a juror looks before deciding whether to engage further.",
      "The most effective timelines we've created combine factual precision with visual drama: clean design that doesn't sacrifice accuracy for aesthetics, but uses every design choice in service of persuasion.",
    ],
  },
  "accident-reconstruction": {
    title: "Accident Reconstruction Graphics: Turning Data Into Verdicts",
    excerpt:
      "High-fidelity accident reconstruction graphics help jurors understand physics, sequence, and liability.",
    date: "NOVEMBER 12, 2023",
    category: "Case Studies",
    image: "/articles/article-6.png",
    readTime: "9 min read",
    body: [
      "Accident reconstruction cases present a unique visual communication challenge: the facts are inherently spatial and sequential, yet the traditional methods of conveying them — expert testimony and 2D diagrams — are poorly suited to either dimension.",
      "Modern 3D reconstruction graphics change everything. When a jury can watch a photorealistic animation of an intersection collision from multiple camera angles — including the perspective of each driver — the physics of liability become self-evident in a way that hours of testimony cannot achieve.",
      "Our reconstruction workflow begins with the raw data: police reports, scene measurements, vehicle damage analysis, black box data, and expert reconstruction reports. From this foundation, we build geometrically accurate 3D environments and simulate the event sequence.",
      "The legal standard for demonstrative exhibits is accuracy and relevance. Our reconstructions are built in close collaboration with forensic engineers and accident reconstruction experts to ensure every element reflects the documented evidence — creating exhibits that survive Daubert challenges and resonate with jurors.",
    ],
  },
};

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/articles" className="text-[#E5B53A] hover:underline">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24" style={{ background: "#051A3D" }}>
      {/* Back navigation */}
      <div className="px-6 max-w-4xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: premiumEase }}
        >
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase hover:text-[#E5B53A] transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M20 5H2M2 5L6 1M2 5L6 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Articles
          </Link>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: premiumEase }}
        className="relative w-full mb-16 overflow-hidden"
        style={{ height: "clamp(300px, 50vw, 540px)" }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, #051A3D 0%, rgba(5,26,61,0.5) 40%, transparent 100%)",
          }}
        />
        {/* Category + date over image */}
        <div className="absolute bottom-8 left-6 right-6 max-w-4xl mx-auto flex flex-wrap items-center gap-4">
          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(5,26,61,0.8)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(229,181,58,0.4)",
              color: "#E5B53A",
            }}
          >
            {article.category}
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {article.date}
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            · {article.readTime}
          </span>
        </div>
      </motion.div>

      {/* Article content */}
      <article className="px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: premiumEase, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold tracking-wide text-white leading-tight mb-8"
        >
          {article.title}
        </motion.h1>

        <div
          className="mb-10 h-px"
          style={{
            background: "linear-gradient(90deg, #E5B53A 0%, transparent 100%)",
          }}
        />

        <div className="space-y-6">
          {article.body.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.3 + i * 0.1 }}
              className="text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: premiumEase, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(229,181,58,0.06) 0%, rgba(229,181,58,0.02) 100%)",
            border: "1px solid rgba(229,181,58,0.2)",
          }}
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#E5B53A] mb-3">Ready to elevate your case?</p>
          <h3 className="text-2xl font-bold text-white mb-4">Let's build your next exhibit together.</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #E5B53A, #D29B2D)",
              color: "#051A3D",
            }}
          >
            Schedule a Demo
            <svg width="16" height="8" viewBox="0 0 20 10" fill="none">
              <path d="M0 5H18M18 5L14 1M18 5L14 9" stroke="#051A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </article>
    </div>
  );
}

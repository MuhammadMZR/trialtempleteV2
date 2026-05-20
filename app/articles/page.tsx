"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ArticlesHero from "@/components/ArticlesHero";



const articles = [
  {
    id: "everything-has-changed",
    title: "Everything Has Changed. We Have Too. We Can Help.",
    excerpt:
      "Trial Template was created as a means to offer small to mid-sized law offices access to the same quality of litigation graphics that larger firms rely on every day. The world of legal visual communication has been transformed.",
    date: "MARCH 10, 2024",
    category: "Company News",
    image: "/articles/article-3.png",
    readTime: "5 min read",
  },
  {
    id: "sftla-ski-cle-2021",
    title: "2021 SFTLA Ski And CLE Presentation And Materials",
    excerpt:
      "We were honored to present at this year's SFTLA Ski and CLE conference where we discussed various graphic resources that will decrease your workload and increase your recovery potential.",
    date: "MARCH 25–28, 2021",
    category: "Events",
    image: "/articles/article-2.png",
    readTime: "4 min read",
  },
  {
    id: "medical-demonstratives-guide",
    title: "The Power of Medical Demonstratives in High-Stakes Litigation",
    excerpt:
      "Understanding how anatomical visualizations, injury timelines, and surgical reconstructions can shift jury perception and drive clearer verdicts in complex medical malpractice cases.",
    date: "JANUARY 18, 2024",
    category: "Strategy",
    image: "/articles/article-4.png",
    readTime: "7 min read",
  },
  {
    id: "holographic-courtroom",
    title: "Inside the Future Courtroom: Holographic Evidence Presentation",
    excerpt:
      "The next frontier of trial graphics is here. We explore emerging technologies — from 3D holographic exhibits to interactive digital timelines — that are reshaping how attorneys tell their clients' stories.",
    date: "FEBRUARY 2, 2024",
    category: "Innovation",
    image: "/articles/article-1.png",
    readTime: "6 min read",
  },
  {
    id: "timeline-mastery",
    title: "Timeline Mastery: Structuring Your Case Narrative for Juror Clarity",
    excerpt:
      "A compelling timeline is one of the most powerful demonstrative tools available. Learn how chronological visual storytelling reduces complexity, builds trust with jurors, and supports your legal strategy.",
    date: "DECEMBER 5, 2023",
    category: "Best Practices",
    image: "/articles/article-5.png",
    readTime: "8 min read",
  },
  {
    id: "accident-reconstruction",
    title: "Accident Reconstruction Graphics: Turning Data Into Verdicts",
    excerpt:
      "When the facts are complex, visualization wins. We break down how high-fidelity accident reconstruction graphics help jurors understand physics, sequence of events, and liability with unambiguous clarity.",
    date: "NOVEMBER 12, 2023",
    category: "Case Studies",
    image: "/articles/article-6.png",
    readTime: "9 min read",
  },
];

const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pb-24" style={{ background: "#051A3D" }}>

      {/* ── Cinematic video-style hero ── */}
      <ArticlesHero />

      {/* ── Articles Grid ── */}
      <section className="px-6 max-w-7xl mx-auto pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(229,181,58,0.7)" }}>
            All Articles
          </span>
          <div className="mt-3 h-px w-24" style={{ background: "linear-gradient(90deg, #E5B53A, transparent)" }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  Futuristic Article Card                               */
/* ─────────────────────────────────────────────────────── */
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const premiumEase2: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: premiumEase2, delay: index * 0.08 }}
    >
      <Link href={`/articles/${article.id}`} className="group block h-full">
        <article
          className="relative h-full flex flex-col overflow-hidden rounded-2xl cursor-pointer"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(229,181,58,0.15)",
            boxShadow: "0 0 0 0 rgba(229,181,58,0)",
            transition: "box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 40px rgba(229,181,58,0.12), 0 0 80px rgba(229,181,58,0.05), inset 0 0 30px rgba(229,181,58,0.03)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(229,181,58,0.45)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 0 0 rgba(229,181,58,0)";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(229,181,58,0.15)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          {/* Scan-line shimmer on hover */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(229,181,58,0.04) 0%, transparent 40%, transparent 60%, rgba(229,181,58,0.02) 100%)",
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Corner accents */}
          <span
            className="absolute top-0 left-0 w-6 h-6 z-20 pointer-events-none"
            style={{
              borderTop: "1.5px solid rgba(229,181,58,0.6)",
              borderLeft: "1.5px solid rgba(229,181,58,0.6)",
              borderTopLeftRadius: "14px",
            }}
          />
          <span
            className="absolute top-0 right-0 w-6 h-6 z-20 pointer-events-none"
            style={{
              borderTop: "1.5px solid rgba(229,181,58,0.6)",
              borderRight: "1.5px solid rgba(229,181,58,0.6)",
              borderTopRightRadius: "14px",
            }}
          />
          <span
            className="absolute bottom-0 left-0 w-6 h-6 z-20 pointer-events-none"
            style={{
              borderBottom: "1.5px solid rgba(229,181,58,0.6)",
              borderLeft: "1.5px solid rgba(229,181,58,0.6)",
              borderBottomLeftRadius: "14px",
            }}
          />
          <span
            className="absolute bottom-0 right-0 w-6 h-6 z-20 pointer-events-none"
            style={{
              borderBottom: "1.5px solid rgba(229,181,58,0.6)",
              borderRight: "1.5px solid rgba(229,181,58,0.6)",
              borderBottomRightRadius: "14px",
            }}
          />

          {/* ── Full Image ── */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.06)";
                (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
              }}
            />

            {/* Image gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(5,26,61,0.8) 0%, rgba(5,26,61,0.15) 50%, transparent 100%)",
              }}
            />

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(5,26,61,0.75)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(229,181,58,0.35)",
                  color: "#E5B53A",
                }}
              >
                {article.category}
              </span>
            </div>

            {/* Read time badge */}
            <div className="absolute top-4 right-4 z-10">
              <span
                className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full text-white/70"
                style={{
                  background: "rgba(5,26,61,0.75)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {article.readTime}
              </span>
            </div>
          </div>

          {/* ── Text Content ── */}
          <div className="flex flex-col flex-grow p-6 gap-4">
            {/* Date */}
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-px"
                style={{ background: "rgba(229,181,58,0.5)" }}
              />
              <span
                className="text-[10px] font-bold tracking-[0.25em] uppercase"
                style={{ color: "#E5B53A" }}
              >
                {article.date}
              </span>
            </div>

            {/* Title */}
            <h2
              className="text-lg font-bold tracking-wide leading-snug text-white"
              style={{ transition: "color 0.3s ease" }}
            >
              <span className="group-hover:text-[#E5B53A]" style={{ transition: "color 0.3s ease" }}>
                {article.title}
              </span>
            </h2>

            {/* Excerpt */}
            <p className="text-sm leading-relaxed flex-grow" style={{ color: "rgba(255,255,255,0.55)" }}>
              {article.excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center gap-3 mt-2 pt-4" style={{ borderTop: "1px solid rgba(229,181,58,0.1)" }}>
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "#E5B53A" }}
              >
                Read Article
              </span>
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                className="group-hover:translate-x-2"
                style={{ transition: "transform 0.3s ease" }}
              >
                <path
                  d="M0 5H18M18 5L14 1M18 5L14 9"
                  stroke="#E5B53A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

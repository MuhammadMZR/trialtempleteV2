"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const projects = [
  {
    id: 1,
    title: "Stalwart Law Trial Template Testimonial",
    category: "Testimonial",
    vimeoId: "1158145127",
    duration: 93,
    thumbnail: "https://i.vimeocdn.com/video/2112082922-c2f226925322e5d3c8c4449d4f5f8b01bbea319e4964415c665ae665b294247e-d_960?region=us",
  },
  {
    id: 2,
    title: "Rachel Montes Trial Template Testimonial",
    category: "Testimonial",
    vimeoId: "1157689279",
    duration: 164,
    thumbnail: "https://i.vimeocdn.com/video/2111483011-f2134ae6bd3bea6540eeb4124e8daf684cb595ed93cd024592df65ff045e6bb7-d_960?region=us",
  },
  {
    id: 3,
    title: "Your Entire Case for 1 Price",
    category: "Services Overview",
    vimeoId: "1154061263",
    duration: 90,
    thumbnail: "https://i.vimeocdn.com/video/2106242491-1317e2f6b2f474879182c5034e9b86c5efb32b4c4420b80c777b8d7ebeea8dcd-d_960?region=us",
  },
  {
    id: 4,
    title: "Dec 18 4pm Learn about Augmented Reality",
    category: "Augmented Reality",
    vimeoId: "1146059260",
    duration: 82,
    thumbnail: "https://i.vimeocdn.com/video/2095343042-20f92fe31dbb4c5380d95615e24fa7bf2fdfc4cbc06c433a497ffff093a04f71-d_960?region=us",
  },
  {
    id: 5,
    title: "Augmented Reality the Future of Trial Tech",
    category: "Augmented Reality",
    vimeoId: "1144950481",
    duration: 55,
    thumbnail: "https://i.vimeocdn.com/video/2093728812-e44e4a5009add1619fc64049c60216fb0def5b2438546c8db99aed0c7801cdbf-d_960?region=us",
  },
  {
    id: 6,
    title: "CT Scan Compositing",
    category: "Medical Visualization",
    vimeoId: "1139423913",
    duration: 60,
    thumbnail: "https://i.vimeocdn.com/video/2086069396-0cc31272863212ee46c088776fd5678f186924d350fc3910e577cf4247d9eac1-d_960?region=us",
  },
  {
    id: 7,
    title: "Better Ways to See Sagittal Views of a Spine",
    category: "Medical Visualization",
    vimeoId: "1133182919",
    duration: 58,
    thumbnail: "https://i.vimeocdn.com/video/2077706973-c44d2f212d4f2065816d831d80ec38c909933daa6a9dd0c51d9ee80921a2d44c-d_960?region=us",
  },
  {
    id: 8,
    title: "Not My Fault, Examining Common Excuses in MVA's",
    category: "Trial Graphics",
    vimeoId: "1131323759",
    duration: 250,
    thumbnail: "https://i.vimeocdn.com/video/2075220084-921b71a4c51b879fee4913ffce91bff37f93bd0559320270ab61ea6ce5770756-d_960?region=us",
  },
  {
    id: 9,
    title: "2025 Trial Template Updated Services Menu",
    category: "Services Overview",
    vimeoId: "1127538553",
    duration: 80,
    thumbnail: "https://i.vimeocdn.com/video/2070293510-9f21b5a8f7cc2398a0e1d02ed8401488425ff3647beec59eac8d2f1659a7fbbb-d_960?region=us",
  },
  {
    id: 10,
    title: "2024 Interactive Trial Presentation",
    category: "Trial Graphics",
    vimeoId: "1119511090",
    duration: 69,
    thumbnail: "https://i.vimeocdn.com/video/2060003686-ebf037832787eae245c68e286642f342a3af87fdd9174322640980be3f660a0d-d_960?region=us",
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#051A3D] min-h-screen pt-32 pb-20">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold font-mono text-sm tracking-widest uppercase mb-4 block"
        >
          [ Portfolio ]
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-white uppercase mb-6"
        >
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto"
        >
          A showcase of trial graphics, medical visualizations, and legal
          demonstratives designed for courtroom impact.
        </motion.p>
      </section>

      {/* Category Filter */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setPlayingVideo(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold text-[#051A3D] border-gold shadow-[0_0_20px_rgba(210,155,45,0.3)]"
                  : "bg-transparent text-white/50 border-white/10 hover:border-gold/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Video Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-[#0a2550] border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:border-gold/20 hover:shadow-[0_0_40px_rgba(210,155,45,0.1)] transition-all duration-500"
              >
                {/* Video / Thumbnail Area */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  {playingVideo === project.id ? (
                    /* Vimeo Player */
                    <iframe
                      src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      title={project.title}
                    />
                  ) : (
                    /* Thumbnail with Play Button */
                    <button
                      onClick={() => setPlayingVideo(project.id)}
                      className="w-full h-full relative cursor-pointer"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gold/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(210,155,45,0.4)] group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                          <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-mono">
                        {formatDuration(project.duration)}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 bg-[#051A3D]/80 backdrop-blur-sm text-gold text-xs px-3 py-1 rounded-full border border-gold/20 font-medium tracking-wide uppercase">
                        {project.category}
                      </div>
                    </button>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wide mb-1 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://i.vimeocdn.com/portrait/91033870_640x640?subrect=2%2C4%2C360%2C362&r=cover&sig=2afdae70e078bb95ad9e57f0842237a76a6ea86f5ae9aa4c79abce6aa4c4524a&v=1&region=us"
                      alt="Trial Template"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-white/40 text-sm">Trial Template</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

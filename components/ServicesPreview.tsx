import Link from "next/link";
import { services } from "@/lib/services-data";

export default function ServicesPreview() {
  return (
    <section className="relative bg-[#051A3D] py-24 md:py-32">

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest text-white uppercase leading-tight">
          Visuals Built for <br className="hidden md:block" /> Legal Impact
        </h2>
      </div>

      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[200px]" />
      </div>

      {/* Cards Grid */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Link
            key={i}
            href={`/services/${service.slug}`}
            className="group bg-[#0a2550] border border-white/5 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:border-gold/20 hover:shadow-[0_0_40px_rgba(210,155,45,0.1)] transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-[220px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2550] via-transparent to-transparent z-10" />
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Number Badge */}
              <span className="absolute top-4 left-4 z-20 w-10 h-10 border border-gold/50 text-gold rounded-full flex items-center justify-center font-bold text-sm bg-[#051A3D]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(210,155,45,0.2)]">
                {service.num}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed border-l-2 border-gold/30 pl-4">
                {service.desc}
              </p>

              {/* View Details Arrow */}
              <div className="mt-5 flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide uppercase">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

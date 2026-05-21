import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import Button from "@/components/Button";
import ServiceDetailHero from "@/components/ServiceDetailHero";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Trial Template`,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <div className="bg-[#051A3D] min-h-screen">

      {/* ── Hero with Video ── */}
      <ServiceDetailHero service={service} />

      {/* ── Overview Section ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-6">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">
            [ {service.num} — Overview ]
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-8">
          {service.detail.headline}
        </h2>
        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-4xl border-l-2 border-gold/40 pl-6">
          {service.detail.overview}
        </p>
      </section>

      {/* ── Why It Matters ── */}
      <section className="relative bg-[#040f25] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-gold font-mono text-sm tracking-widest uppercase block mb-4">
              [ Why It Matters ]
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
              The Impact of Visual Communication
            </h3>
          </div>
          <div className="bg-[#0a2550] border border-white/5 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              {service.detail.whyItMatters}
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <span className="text-gold font-mono text-sm tracking-widest uppercase block mb-4">
            [ What&apos;s Included ]
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
            Capabilities & Deliverables
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.detail.features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#0a2550] border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 border border-gold/40 text-gold rounded-full flex items-center justify-center text-xs font-bold bg-[#051A3D]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/80 text-sm md:text-base leading-relaxed pt-1">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="relative bg-[#040f25] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-gold font-mono text-sm tracking-widest uppercase block mb-4">
              [ How It Works ]
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
              Our Process
            </h3>
          </div>

          <div className="space-y-0">
            {service.detail.process.map((step, i) => (
              <div key={i} className="relative flex gap-6 md:gap-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-2 border-gold/50 text-gold rounded-full flex items-center justify-center font-bold text-sm bg-[#051A3D] shadow-[0_0_20px_rgba(210,155,45,0.15)] flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < service.detail.process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent min-h-[60px]" />
                  )}
                </div>
                <div className="pb-12">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.step}
                  </h4>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <span className="text-gold font-mono text-sm tracking-widest uppercase block mb-4">
            [ Common Applications ]
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
            Ideal Use Cases
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.detail.useCases.map((useCase, i) => (
            <div key={i} className="flex items-center gap-4 py-4 px-6 bg-[#0a2550]/50 rounded-xl border border-white/5 hover:border-gold/15 transition-colors duration-300">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70 text-sm md:text-base">{useCase}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="relative bg-[#040f25] py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-gold font-mono text-sm tracking-widest uppercase block mb-4">
              [ FAQ ]
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {service.detail.faq.map((item, i) => (
              <div key={i} className="bg-[#0a2550] border border-white/5 rounded-xl p-6 md:p-8 hover:border-gold/15 transition-colors duration-300">
                <h4 className="text-lg md:text-xl font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-gold font-mono text-sm mt-1">Q{i + 1}</span>
                  {item.q}
                </h4>
                <p className="text-white/50 text-sm md:text-base leading-relaxed pl-9">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="bg-[#0a2550] border border-white/5 rounded-2xl p-10 md:p-16 text-center shadow-[0_0_60px_rgba(0,0,0,0.5)]">
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide mb-6">
            {service.detail.cta}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">Schedule a Demo</Button>
            <Button href="/services" variant="secondary">All Services</Button>
          </div>
        </div>
      </section>

      {/* ── Prev / Next Navigation ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-28">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prevService ? (
            <Link
              href={`/services/${prevService.slug}`}
              className="flex-1 bg-[#0a2550] border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all duration-300 group"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">← Previous</span>
              <span className="text-white font-bold text-lg group-hover:text-gold transition-colors">{prevService.title}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {nextService ? (
            <Link
              href={`/services/${nextService.slug}`}
              className="flex-1 bg-[#0a2550] border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-all duration-300 group text-right"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest block mb-2">Next →</span>
              <span className="text-white font-bold text-lg group-hover:text-gold transition-colors">{nextService.title}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </section>
    </div>
  );
}

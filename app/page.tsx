import HeroScroll from "@/components/HeroScroll";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesPreview from "@/components/ServicesPreview";
import PlaneMorph from "@/components/PlaneMorph";
import Globe from "@/components/Globe";
import TestimonialStack from "@/components/TestimonialStack";
import FinalMorph from "@/components/FinalMorph";
import Button from "@/components/Button";

import VideoScaleSection from "@/components/VideoScaleSection";
import OurProjects from "@/components/OurProjects";
import ProcessRoadmap from "@/components/ProcessRoadmap";

export default function Home() {
  return (
    <>
      <HeroScroll />
      
      {/* Intro Statement */}
      <section className="bg-[#051A3D] py-16 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-widest text-white uppercase mb-6 sm:mb-8 leading-tight">
            Complex evidence deserves <br className="hidden md:block"/> more than decoration. <br/>
            <span className="text-gold">It deserves visual strategy.</span>
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-muted font-light leading-relaxed">
            Trial Template creates clear, persuasive demonstratives that help legal teams communicate medical facts, timelines, injuries, and case arguments with confidence.
          </p>
        </div>
      </section>
      
      <ServicesPreview />
      
      <PlaneMorph />

      <ProcessRoadmap />

      <VideoScaleSection />
      
      <OurProjects />

      <Globe />
      
      <TestimonialStack />

      <FinalMorph />

      {/* CTA Section */}
      <section className="bg-[#051A3D] py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
            
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
              <img 
                src="/sequence-3/0060.jpg" 
                alt="Trial Graphics CTA" 
                className="w-full h-full object-cover filter brightness-50 opacity-50 group-hover:scale-105 transition-transform duration-[2s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051A3D] via-[#051A3D]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051A3D] via-transparent to-[#051A3D]/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-8 sm:p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
              
              {/* Text Side */}
              <div className="w-full md:w-[60%] text-left">
                <span className="text-gold font-mono tracking-widest uppercase text-xs md:text-sm mb-6 block opacity-80">
                  [ READY TO PROCEED ]
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white uppercase mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
                  Ready to Make <br className="hidden md:block"/> Your Case Clear?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted font-light mb-8 sm:mb-10 max-w-xl border-l-2 border-gold/50 pl-4 sm:pl-6 leading-relaxed">
                  Schedule a demo and see how flat-rate trial demonstratives can help turn complex evidence into persuasive visual communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button href="/contact" variant="primary">Schedule a Demo</Button>
                  <Button href="/services" variant="secondary">View Services</Button>
                </div>
              </div>

              {/* Decorative Tech Side */}
              <div className="w-full md:w-[40%] flex justify-end hidden md:flex opacity-60 pointer-events-none">
                 <div className="w-64 h-64 border border-gold/20 rounded-full relative flex items-center justify-center shadow-[0_0_50px_rgba(210,155,45,0.1)]">
                    <div className="absolute top-0 w-1 h-4 bg-gold animate-pulse" />
                    <div className="absolute bottom-0 w-1 h-4 bg-gold animate-pulse" />
                    <div className="absolute left-0 w-4 h-1 bg-gold animate-pulse" />
                    <div className="absolute right-0 w-4 h-1 bg-gold animate-pulse" />
                    <div className="w-40 h-40 border border-white/10 rounded-full flex items-center justify-center">
                       <div className="w-16 h-16 bg-gold/5 rounded-full backdrop-blur-md border border-gold/30" />
                    </div>
                 </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

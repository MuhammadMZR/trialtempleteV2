"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-white uppercase mb-6">
            Schedule a Demo
          </h1>
          <p className="text-xl text-muted font-light max-w-2xl mx-auto leading-relaxed">
            Tell us about your case needs and we will help you understand how flat-rate demonstratives can support your mediation or trial strategy.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {submitted ? (
            <div className="bg-[#051A3D] border border-gold/30 p-12 text-center rounded-sm">
              <h3 className="text-3xl font-bold tracking-wide text-white mb-4">Request Received</h3>
              <p className="text-muted text-lg">
                Thank you for reaching out. We will be in touch shortly to schedule your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#051A3D] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted uppercase tracking-widest mb-2">Name</label>
                  <input required type="text" id="name" className="w-full bg-[#051A3D] border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted uppercase tracking-widest mb-2">Email</label>
                  <input required type="email" id="email" className="w-full bg-[#051A3D] border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" id="phone" className="w-full bg-[#051A3D] border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" />
                </div>
                <div>
                  <label htmlFor="firm" className="block text-sm text-muted uppercase tracking-widest mb-2">Law Firm / Company</label>
                  <input type="text" id="firm" className="w-full bg-[#051A3D] border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors rounded-sm" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-sm text-muted uppercase tracking-widest mb-2">Service Interest</label>
                  <select id="service" className="w-full bg-[#051A3D] border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors rounded-sm appearance-none">
                    <option>Trial Graphics</option>
                    <option>Medical Illustration</option>
                    <option>Mediation Graphics</option>
                    <option>Timeline</option>
                    <option>Expert Demonstrative</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm text-muted uppercase tracking-widest mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-[#051A3D] border border-white/10 p-4 text-white focus:outline-none focus:border-gold transition-colors rounded-sm resize-none"></textarea>
                </div>
              </div>
              <button type="submit" className="w-full bg-gold text-black py-4 font-bold tracking-widest uppercase hover:bg-[#E5AA3A] transition-colors rounded-sm shadow-[0_0_15px_rgba(210,155,45,0.2)]">
                Submit Request
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}

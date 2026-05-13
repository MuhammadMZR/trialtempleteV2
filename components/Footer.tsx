import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#051A3D] text-white border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <Image src="/logo.png" alt="Trial Template Logo" width={56} height={56} className="group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(210,155,45,0.3)]" />
            <span className="text-2xl font-bold tracking-widest text-white group-hover:text-gold transition-colors">
              TRIAL <span className="text-gold">TEMPLATE</span>
            </span>
          </Link>
          <p className="text-muted max-w-sm mb-6">
            Flat-rate trial demonstratives. Impactful graphics for mediation and trial built for clarity, persuasion, and high-stakes communication.
          </p>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Trial Template. All rights reserved.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold tracking-wider mb-6 text-gold uppercase text-sm">Company</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-muted hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-muted hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/projects" className="text-muted hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/testimonials" className="text-muted hover:text-white transition-colors">Testimonials</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold tracking-wider mb-6 text-gold uppercase text-sm">Contact</h4>
          <ul className="space-y-4">
            <li><Link href="/contact" className="text-muted hover:text-white transition-colors">Schedule a Demo</Link></li>
            <li className="text-muted">info@trialtemplate.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

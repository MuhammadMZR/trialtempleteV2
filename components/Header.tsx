import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 backdrop-blur-md bg-[#051A3D]/20 border-b border-white/5">
      <Link href="/" className="flex items-center gap-3 group">
        <Image src="/logo.png" alt="Trial Template Logo" width={48} height={48} className="group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(210,155,45,0.3)]" />
        <span className="text-xl font-bold tracking-widest text-white group-hover:text-gold transition-colors hidden sm:block">
          TRIAL <span className="text-gold">TEMPLATE</span>
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
        <Link href="/projects" className="hover:text-gold transition-colors">Projects</Link>
        <Link href="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link>
        <Link href="/about" className="hover:text-gold transition-colors">About</Link>
        <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
      </nav>

      <div className="hidden md:block">
        <Button href="/contact" variant="primary">Schedule a Demo</Button>
      </div>

      {/* Mobile Menu Button - Placeholder */}
      <button className="md:hidden text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </header>
  );
}

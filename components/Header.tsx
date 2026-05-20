"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Articles" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md bg-[#051A3D]/20 border-b border-white/5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.png"
            alt="Trial Template Logo"
            width={40}
            height={40}
            className="sm:w-12 sm:h-12 drop-shadow-[0_0_10px_rgba(210,155,45,0.3)]"
          />
          <span className="text-lg sm:text-xl font-bold tracking-widest text-white hidden sm:block">
            TRIAL <span className="text-gold">TEMPLATE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/contact" variant="primary">Schedule a Demo</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 z-50"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu - No animations, instant open/close */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#051A3D] px-6 pt-24 pb-10 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-2xl font-bold tracking-widest text-white uppercase py-3 border-b border-white/5 active:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Button href="/contact" variant="primary" onClick={() => setMobileOpen(false)}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

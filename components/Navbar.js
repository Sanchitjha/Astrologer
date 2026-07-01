'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'LOVE PROBLEMS', href: '/love-problems' },
  { label: 'PRIVACY SERVICES', href: '/privacy-services' },
  { label: 'POOJA', href: '/pooja' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0714]/97 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-[#180B22]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full ring-2 ring-[#D4AF37]/40 group-hover:ring-[#D4AF37]/80 transition-all" />
            <Image
              src="/logo.jpg"
              alt="ज्योतिष श्रीनाथ जी"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <span className="block text-[#D4AF37] font-bold text-[13px]"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>
              ज्योतिष श्रीनाथ जी
            </span>
            <span className="block text-white/48 text-[9px] tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
              Jyotish Shreenath Ji
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-2 rounded-md text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                  active
                    ? 'text-[#FFD700] bg-[#D4AF37]/10'
                    : 'text-white/60 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 btn-gold !py-2 !px-5 !rounded-full text-[11px] !font-bold tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            GET GENUINE ADVICE
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#D4AF37] p-2 rounded-lg hover:bg-white/8 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0D0714]/98 backdrop-blur-xl border-t border-[#D4AF37]/15 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-widest transition-all ${
                  active
                    ? 'text-[#FFD700] bg-[#D4AF37]/10 border border-[#D4AF37]/20'
                    : 'text-white/60 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 btn-gold !rounded-xl justify-center tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            GET GENUINE ADVICE
          </Link>
        </div>
      </div>
    </nav>
  );
}

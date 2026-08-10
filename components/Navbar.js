'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { vashikaranServices } from '@/data/vashikaranServices';
import GetAdviceModal from './GetAdviceModal';

const privacyDropdown = [
  ...vashikaranServices.map((v) => ({ label: v.title.split('—')[0].trim(), href: `/vashikaran-services/${v.slug}` })),
  { label: 'View All Vashikaran Services →', href: '/vashikaran-services' },
];

const links = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'YANTRAS', href: '/yantras' },
  { label: 'GEMSTONES', href: '/gemstones' },
  { label: 'LOVE PROBLEMS', href: '/love-problems' },
  { label: 'PRIVACY SERVICES', href: '/privacy-services', dropdown: privacyDropdown },
  { label: 'POOJA', href: '/pooja' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [adviceOpen, setAdviceOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMobileDropdown(null); }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#2A0710]/97 backdrop-blur-md border-b border-[#D4AF37]/30'
          : 'bg-[#2A0710]/70 backdrop-blur-sm'
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
            if (l.dropdown) {
              return (
                <div key={l.href} className="relative group">
                  <Link
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`px-3 py-2 rounded-md text-[11px] font-semibold tracking-wider transition-all duration-200 inline-flex items-center gap-1 ${
                      active
                        ? 'text-[#FFD700] bg-[#D4AF37]/10'
                        : 'text-white/60 group-hover:text-[#D4AF37] group-hover:bg-white/5'
                    }`}
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {l.label}
                    <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full pt-2 w-72 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="bg-[#2A0710] border border-[#D4AF37]/25 rounded-xl shadow-2xl py-2 max-h-[70vh] overflow-y-auto">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className="block px-4 py-2.5 text-[12px] text-white/65 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                          style={{ fontFamily: 'var(--font-cinzel)' }}
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
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
          <button
            type="button"
            onClick={() => setAdviceOpen(true)}
            className="ml-3 btn-gold !py-2 !px-5 !rounded-full text-[11px] !font-bold tracking-wider"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            GET GENUINE ADVICE
          </button>
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
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#2A0710]/98 backdrop-blur-xl border-t border-[#D4AF37]/20 px-4 py-4 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">
          {links.map((l) => {
            const active = pathname === l.href;
            if (l.dropdown) {
              const expanded = mobileDropdown === l.href;
              return (
                <div key={l.href}>
                  <button
                    type="button"
                    onClick={() => setMobileDropdown(expanded ? null : l.href)}
                    aria-expanded={expanded}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-widest transition-all ${
                      active
                        ? 'text-[#FFD700] bg-[#D4AF37]/10 border border-[#D4AF37]/20'
                        : 'text-white/60 hover:text-[#D4AF37] hover:bg-white/5'
                    }`}
                    style={{ fontFamily: 'var(--font-cinzel)' }}
                  >
                    {l.label}
                    <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 pr-1 py-1 flex flex-col gap-0.5">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href}
                          href={d.href}
                          className="px-4 py-2.5 rounded-lg text-xs text-white/55 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                          style={{ fontFamily: 'var(--font-cinzel)' }}
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
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
          <button
            type="button"
            onClick={() => setAdviceOpen(true)}
            className="mt-2 btn-gold !rounded-xl justify-center tracking-widest text-sm"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            GET GENUINE ADVICE
          </button>
        </div>
      </div>

      <GetAdviceModal open={adviceOpen} onClose={() => setAdviceOpen(false)} />
    </nav>
  );
}

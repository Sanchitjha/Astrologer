import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Yantras', href: '/yantras' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const yantraLinks = [
  { label: 'Shree Yantra', href: '/yantras/premium-shaligram-shree-yantra' },
  { label: 'Kuber Yantra', href: '/yantras/kuber-yantra' },
  { label: 'Mahamrityunjay', href: '/yantras/mahamrityunjay-yantra' },
  { label: 'Hanuman Yantra', href: '/yantras/hanuman-yantra' },
  { label: 'Navgrah Yantra', href: '/yantras/navgrah-dosh-yantra' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/12 bg-[#030003]">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="ज्योतिष श्रीनाथ जी"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#D4AF37]/30 group-hover:ring-[#D4AF37]/60 transition-all"
            />
            <div>
              <span className="block text-[#D4AF37] font-bold text-[13px]"
                    style={{ fontFamily: 'var(--font-devanagari)' }}>
                ज्योतिष श्रीनाथ जी
              </span>
              <span className="block text-white/30 text-[10px] tracking-wider"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                Jyotish Shreenath Ji
              </span>
            </div>
          </Link>
          <p className="text-white/35 text-xs leading-relaxed">
            Ancient Vedic wisdom for modern life. Kundali, Yantra, Vastu, and Gemstone guidance by Rohit Sharmaji.
          </p>
          <p className="text-[#D4AF37]/40 text-sm" style={{ fontFamily: 'var(--font-devanagari)' }}>
            ॐ नमः शिवाय
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest mb-5"
             style={{ fontFamily: 'var(--font-cinzel)' }}>
            Navigation
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                      className="text-white/40 hover:text-[#D4AF37] text-xs transition-colors"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Yantras */}
        <div>
          <p className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest mb-5"
             style={{ fontFamily: 'var(--font-cinzel)' }}>
            Popular Yantras
          </p>
          <ul className="space-y-2.5">
            {yantraLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                      className="text-white/40 hover:text-[#D4AF37] text-xs transition-colors"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest mb-5"
             style={{ fontFamily: 'var(--font-cinzel)' }}>
            Contact
          </p>
          <div className="space-y-3">
            <a
              href="tel:7600010811"
              className="flex items-center gap-2.5 text-white/40 hover:text-[#D4AF37] transition-colors group"
            >
              <Phone size={14} className="shrink-0 text-[#D4AF37]/40 group-hover:text-[#D4AF37]" />
              <span className="text-xs">76000 10811</span>
            </a>
            <a
              href="https://wa.me/917600010811"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/40 hover:text-green-400 transition-colors group"
            >
              <MessageCircle size={14} className="shrink-0 text-green-500/40 group-hover:text-green-400" />
              <span className="text-xs">WhatsApp Chat</span>
            </a>
            <p className="text-white/25 text-xs mt-3 pt-3 border-t border-white/8">
              Mon – Sat, 9 AM – 7 PM IST
            </p>
            <p className="text-white/20 text-[10px]">
              Products via{' '}
              <a href="https://gemsmantra.com/collections/yantras" target="_blank" rel="noopener noreferrer"
                 className="underline hover:text-white/40">
                GemsMantra.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-[11px]">
            © {new Date().getFullYear()} ज्योतिष श्रीनाथ जी — Rohit Sharmaji. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="text-white/20 hover:text-white/40 text-[11px] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

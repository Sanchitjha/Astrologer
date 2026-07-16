import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Disclaimer', href: '/privacy-services' },
  { label: 'Privacy Policy & Terms', href: '/privacy-services' },
  { label: 'Contact Us', href: '/contact' },
];

const expertise = [
  { label: 'Love Problem Solution', href: '/love-problems' },
  { label: 'Love Marriage Specialist', href: '/love-problems' },
  { label: 'Inter-caste Love Marriage', href: '/love-problems' },
  { label: 'Get Your Love Back', href: '/love-problems' },
  { label: 'Dosh Problem Solution', href: '/services' },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-[#D4AF37]/15 pt-14 pb-6 px-4 mt-auto"
      style={{ background: 'linear-gradient(180deg, #3A0710 0%, #1E0509 100%)' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Column 1 — Logo & About Us */}
        <div className="space-y-4">
          <Link href="/" aria-label="Jyotish Shreenath Ji Home" className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 shrink-0">
              <div className="absolute inset-0 rounded-full ring-2 ring-[#D4AF37]/50" />
              <Image
                src="/logo.jpg"
                alt="Jyotish Shreenath Ji logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <p className="text-[#D4AF37] font-black text-base whitespace-nowrap"
               style={{ fontFamily: 'var(--font-cinzel)' }}>
              Jyotish Shreenath Ji
            </p>
          </Link>
          <p className="text-white/58 text-sm leading-relaxed">
            Rohit Sharma is a trusted astrologer known for accurate predictions and effective
            remedies, helping clients find clarity and solutions for life&apos;s challenges.
          </p>
          <Link href="/about"
                className="inline-block text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/30
                           rounded-full px-4 py-1.5 hover:bg-[#D4AF37]/10 transition-colors"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
            Read More →
          </Link>
          {/* Social Icons — real brand colors */}
          <div className="flex gap-3 pt-2">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/18o5wbJ9pQ/" aria-label="Facebook"
               target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
               style={{ background: '#1877F2' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/astrologernearmee/" aria-label="Instagram"
               target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
               style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter/X"
               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
               style={{ background: '#000000' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/917600010811" aria-label="WhatsApp"
               target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
               style={{ background: '#25D366' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-[#D4AF37] font-bold text-sm mb-5"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}
                      className="text-white/45 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]/40 text-xs">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Our Expertise */}
        <div>
          <h3 className="text-[#D4AF37] font-bold text-sm mb-5"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Our Expertise
          </h3>
          <ul className="space-y-2">
            {expertise.map((e) => (
              <li key={e.label}>
                <Link href={e.href}
                      className="text-white/45 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="text-[#D4AF37]/40 text-xs">›</span>
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact Info */}
        <div>
          <h3 className="text-[#D4AF37] font-bold text-sm mb-5"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li>
              <p className="text-white/48 text-xs uppercase tracking-widest mb-1">Phone / WhatsApp</p>
              <a href="tel:7600010811"
                 className="text-white/65 text-sm hover:text-[#D4AF37] transition-colors">
                76000 10811
              </a>
            </li>
            <li>
              <p className="text-white/48 text-xs uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:jyotishshreenathji@gmail.com"
                 className="text-white/65 text-sm hover:text-[#D4AF37] transition-colors">
                jyotishshreenathji@gmail.com
              </a>
            </li>
            <li>
              <p className="text-white/48 text-xs uppercase tracking-widest mb-1">Hours</p>
              <p className="text-white/65 text-sm">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
            </li>
            <li>
              <p className="text-white/48 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
              <a href="https://wa.me/917600010811"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white/65 text-sm hover:text-[#D4AF37] transition-colors">
                Chat on WhatsApp →
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4AF37]/10 pt-6 flex flex-col sm:flex-row
                      items-center justify-between gap-3">
        <p className="text-white/42 text-xs text-center sm:text-left">
          © 2026 Jyotish Shreenath Ji. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy-services"
                className="text-white/42 text-xs hover:text-[#D4AF37] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact"
                className="text-white/42 text-xs hover:text-[#D4AF37] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

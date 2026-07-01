import Link from 'next/link';

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
      style={{ background: 'linear-gradient(180deg, #080005 0%, #02000A 100%)' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Column 1 — Logo & About Us */}
        <div className="space-y-4">
          <Link href="/" aria-label="Jyotish Shreenath Ji Home">
            <p className="text-[#D4AF37] font-black text-xl"
               style={{ fontFamily: 'var(--font-cinzel)' }}>
              🕉️ Jyotish Shreenath Ji
            </p>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed">
            Rohit Sharma is a trusted astrologer known for accurate predictions and effective
            remedies, helping clients find clarity and solutions for life&apos;s challenges.
          </p>
          <Link href="/about"
                className="inline-block text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/30
                           rounded-full px-4 py-1.5 hover:bg-[#D4AF37]/10 transition-colors"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
            Read More →
          </Link>
          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            {[
              { label: 'Facebook', href: '#', icon: '𝓕' },
              { label: 'Instagram', href: '#', icon: '📷' },
              { label: 'Twitter/X', href: '#', icon: '𝕏' },
              { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: '💬' },
            ].map((s) => (
              <a key={s.label}
                 href={s.href}
                 aria-label={s.label}
                 className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25
                            flex items-center justify-center text-sm text-white/60
                            hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                {s.icon}
              </a>
            ))}
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
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Address</p>
              <p className="text-white/50 text-sm italic">[ To be added ]</p>
            </li>
            <li>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Phone / WhatsApp</p>
              <a href="tel:+919876543210"
                 className="text-white/65 text-sm hover:text-[#D4AF37] transition-colors">
                [ To be added ]
              </a>
            </li>
            <li>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:info@jyotishshreenath.com"
                 className="text-white/65 text-sm hover:text-[#D4AF37] transition-colors">
                [ To be added ]
              </a>
            </li>
            <li>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Hours</p>
              <p className="text-white/65 text-sm">Mon – Sun: 7:00 AM – 10:00 PM IST</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4AF37]/10 pt-6 flex flex-col sm:flex-row
                      items-center justify-between gap-3">
        <p className="text-white/25 text-xs text-center sm:text-left">
          © 2026 Jyotish Shreenath Ji. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy-services"
                className="text-white/25 text-xs hover:text-[#D4AF37] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact"
                className="text-white/25 text-xs hover:text-[#D4AF37] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

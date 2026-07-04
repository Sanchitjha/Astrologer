import Link from 'next/link';

const services = [
  { icon: '🔭', label: 'Kundali Vishleshan', labelHindi: 'कुंडली विश्लेषण', desc: 'In-depth birth chart analysis for career, marriage, health & spiritual growth.' },
  { icon: '🪬', label: 'Yantra Puja', labelHindi: 'यंत्र पूजा', desc: 'Sacred geometric instruments energised with Vedic mantras for prosperity.' },
  { icon: '🏠', label: 'Vastu Shastra', labelHindi: 'वास्तु शास्त्र', desc: 'Harmonise your home and workplace with cosmic energy flows.' },
  { icon: '💎', label: 'Ratna Therapy', labelHindi: 'रत्न चिकित्सा', desc: 'Precision gemstone recommendations aligned with your planetary positions.' },
  { icon: '📅', label: 'Rashifal & Muhurat', labelHindi: 'राशिफल और मुहूर्त', desc: 'Auspicious timing for marriages, business launches & major decisions.' },
  { icon: '🌙', label: 'Dosh Nivaran', labelHindi: 'दोष निवारण', desc: 'Remedies for Kaal Sarp, Mangal, Pitra and other planetary doshas.' },
];

export default function Services({ preview = false }) {
  const shown = preview ? services : services;

  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, #FBF3E0 0%, #FBF3E0 70%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Our <span className="text-[#9E7016]">Services</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0" style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-6 space-y-3 group">
              <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
              <div>
                <h3 className="text-[#9E7016] font-bold text-base"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.label}
                </h3>
                <p className="text-[#2A1408]/52 text-xs" style={{ fontFamily: 'var(--font-devanagari)' }}>
                  {s.labelHindi}
                </p>
              </div>
              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-10">
            <Link href="/services" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              View All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

import Link from 'next/link';

const points = [
  'Over 15 years of dedicated practice in Vedic Astrology, Numerology, and Vastu Shastra',
  'Personalized consultations — every reading is unique and tailored to your situation',
  'Available 24/7 for urgent matters via WhatsApp and phone',
  'Guidance based on authentic ancient scriptures and modern astrological techniques',
  'Remedies that are practical, affordable, and spiritually effective',
  'Strict confidentiality — your personal information is never shared',
  'Consultations available in Hindi, English, and regional languages',
  'Trusted by clients across India, the USA, UK, Canada, and Australia',
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 0% 50%, #1A0000 0%, #050005 60%)' }}
      aria-labelledby="wcu-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Strength</p>
          <h2 id="wcu-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Why Choose <span className="text-[#D4AF37]">Jyotish Shreenath Ji</span>?
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <div>
            <p className="text-white/65 leading-relaxed mb-6">
              At Jyotish Shreenath Ji, we believe that every person deserves accurate, compassionate,
              and life-transforming astrological guidance. Pandit Rohit Sharma Ji combines ancient
              Vedic wisdom with a deep understanding of modern challenges to provide solutions that
              truly make a difference in your life.
            </p>
            <p className="text-white/65 leading-relaxed mb-8">
              Whether you are facing challenges in love, marriage, career, health, or finances,
              our expert astrologers offer precise remedies backed by authentic scriptures and
              years of practical experience. We are committed to helping you find clarity,
              peace, and a path forward.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40
                                   flex items-center justify-center shrink-0 text-[#D4AF37] text-xs">
                    ✓
                  </span>
                  <span className="text-white/65 text-sm leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact"
                  className="btn-crimson inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-sm"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
              Contact Now →
            </Link>
          </div>

          {/* Visual panel */}
          <div className="relative flex items-center justify-center">
            <div className="glass-card rounded-3xl p-10 text-center w-full max-w-sm mx-auto">
              <div className="text-7xl mb-6">🕉️</div>
              <p className="text-[#D4AF37] font-bold text-lg mb-3"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                Jyotish Shreenath Ji
              </p>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                Best Astrologer in India — Trusted by 5000+ Families Worldwide
              </p>
              <div className="border-t border-[#D4AF37]/20 pt-6 grid grid-cols-2 gap-4">
                {[
                  { v: '15+', l: 'Years Exp.' },
                  { v: '5000+', l: 'Clients' },
                  { v: '200+', l: 'Experts' },
                  { v: '24/7', l: 'Support' },
                ].map(({ v, l }) => (
                  <div key={l} className="text-center">
                    <p className="text-[#D4AF37] font-black text-xl"
                       style={{ fontFamily: 'var(--font-cinzel)' }}>{v}</p>
                    <p className="text-white/40 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

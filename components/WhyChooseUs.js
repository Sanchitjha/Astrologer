import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 0% 50%, #FBF3E0 0%, #FBF3E0 60%)' }}
      aria-labelledby="wcu-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Strength</p>
          <h2 id="wcu-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Why Choose <span className="text-[#9E7016]">Rohit Sharma</span>?
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <div>
            <p className="text-[#2A1408]/65 leading-relaxed mb-5">
              When you&apos;re looking for genuine guidance, accurate predictions, and meaningful
              solutions, Rohit Sharma is committed to helping you with trusted Vedic astrology
              services. With over 15+ years of experience, he provides personalized consultations
              for love, marriage, career, business, finance, health, and family-related concerns.
            </p>
            <p className="text-[#2A1408]/65 leading-relaxed mb-5">
              As a trusted Online Astrologer in India, Rohit Sharma offers convenient
              consultations through phone calls, WhatsApp, and online sessions, making expert
              astrology guidance accessible from anywhere. Every horoscope reading is carefully
              analyzed and tailored to your birth details for accurate insights.
            </p>
            <p className="text-[#2A1408]/65 leading-relaxed mb-8">
              Clients choose Rohit Sharma for honest guidance, practical remedies, complete
              confidentiality, and a client-focused approach. Whether you&apos;re facing relationship
              challenges, career uncertainty, financial issues, or personal obstacles, he provides
              effective astrological solutions designed to bring clarity and confidence.
            </p>

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
              <p className="text-[#9E7016] font-bold text-lg mb-3"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                Jyotish Shreenath Ji
              </p>
              <p className="text-[#2A1408]/50 text-sm mb-6 leading-relaxed">
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
                    <p className="text-[#9E7016] font-black text-xl"
                       style={{ fontFamily: 'var(--font-cinzel)' }}>{v}</p>
                    <p className="text-[#2A1408]/58 text-xs">{l}</p>
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

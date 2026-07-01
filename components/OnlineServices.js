import Link from 'next/link';

const services = [
  {
    icon: '🔮',
    title: 'Dosh Problem Solution',
    titleHindi: 'दोष निवारण',
    desc: 'Doshas are stated by effects as well as the positioning of the planets in the horoscope of an individual. Get effective remedies.',
  },
  {
    icon: '📜',
    title: 'Janam Kundali Predictions',
    titleHindi: 'जन्म कुंडली',
    desc: 'Janampatri is the graphical sketch of planets as per the time of a person\'s birth originated by ancient pandits.',
  },
  {
    icon: '💫',
    title: 'Horoscope Matching',
    titleHindi: 'कुंडली मिलान',
    desc: 'A horoscope is a chart showing the position of the sun, moon, planets, astrological elements at the time of a person\'s birth.',
  },
  {
    icon: '💕',
    title: 'Love Problem Solution',
    titleHindi: 'प्रेम समस्या',
    desc: 'Resolve relationship issues with trusted astrology guidance. Get personalized solutions for love problems and emotional conflicts.',
  },
  {
    icon: '💍',
    title: 'Marriage Compatibility',
    titleHindi: 'विवाह मिलान',
    desc: 'Expert guidance on marriage compatibility, Guna Milan, Manglik Dosha check, and other astrological marriage factors.',
  },
  {
    icon: '💼',
    title: 'Career & Business Astrology',
    titleHindi: 'करियर ज्योतिष',
    desc: 'Get astrological guidance on career decisions, business challenges, and professional growth through your birth chart.',
  },
];

export default function OnlineServices() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, #0D0005 0%, #050005 70%)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">What We Offer</p>
          <h2 id="services-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Our Online <span className="text-[#D4AF37]">Astrology Services</span>
          </h2>
          <p className="text-white/45 text-sm mt-3 max-w-xl mx-auto">
            Each consultation is personally conducted by Rohit Sharma through Zoom, WhatsApp, or
            Phone, providing accurate astrological guidance and practical solutions for every stage of life.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="glass-card rounded-2xl p-6 space-y-3 group">
              {/* Geometric circle decoration */}
              <div className="relative h-20 flex items-center justify-center mb-2">
                <div className="absolute w-16 h-16 rounded-full border border-[#D4AF37]/20
                                group-hover:border-[#D4AF37]/50 transition-colors" />
                <div className="absolute w-12 h-12 rounded-full border border-[#D4AF37]/10
                                group-hover:border-[#D4AF37]/30 transition-colors" />
                <span className="text-4xl relative z-10">{s.icon}</span>
              </div>

              <div>
                <h3 className="text-[#D4AF37] font-bold text-base"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h3>
                <p className="text-white/30 text-xs mt-0.5"
                   style={{ fontFamily: 'var(--font-devanagari)' }}>
                  {s.titleHindi}
                </p>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline-gold"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

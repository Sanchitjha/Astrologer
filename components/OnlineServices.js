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
      style={{ background: 'radial-gradient(ellipse at 50% 100%, #FBF3E0 0%, #FBF3E0 70%)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">What We Offer</p>
          <h2 id="services-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Our Online <span className="text-[#9E7016]">Astrology Services</span>
          </h2>
          <p className="text-[#2A1408]/45 text-sm mt-3 max-w-xl mx-auto">
            Each consultation is personally conducted by Rohit Sharma through Zoom, WhatsApp, or
            Phone, providing accurate astrological guidance and practical solutions for every stage of life.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="relative rounded-2xl p-6 space-y-3 group bg-white overflow-hidden
                         border border-[#D4AF37]/25 shadow-[0_4px_18px_rgba(122,40,10,0.06)]
                         transition-all duration-300
                         hover:-translate-y-1.5 hover:shadow-[0_16px_38px_rgba(193,16,46,0.14)]
                         hover:border-[#C1102E]/30"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1
                              bg-gradient-to-r from-[#C9962B] via-[#F0C64B] to-[#C1102E]
                              scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              {/* Icon badge */}
              <div className="relative w-20 h-20 mx-auto mb-1 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full"
                     style={{ background: 'radial-gradient(circle, rgba(201,150,43,0.16) 0%, rgba(193,16,46,0.06) 100%)' }} />
                <div className="absolute inset-1.5 rounded-full ring-2 ring-[#D4AF37]/30
                                group-hover:ring-[#C1102E]/40 transition-all duration-300
                                shadow-[inset_0_1px_4px_rgba(122,40,10,0.08)]" />
                <span className="text-4xl relative z-10 transition-transform duration-300
                                  group-hover:scale-110 drop-shadow-sm">
                  {s.icon}
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-[#9E7016] font-bold text-base"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h3>
                <p className="text-[#2A1408]/48 text-xs mt-0.5"
                   style={{ fontFamily: 'var(--font-devanagari)' }}>
                  {s.titleHindi}
                </p>
              </div>
              <p className="text-[#2A1408]/55 text-sm leading-relaxed text-center">{s.desc}</p>
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

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Pooja & Rituals | Vedic Puja Specialist India',
  description:
    'Book authentic Vedic Pooja and rituals with Jyotish Shreenath Ji. Graha Shanti Pooja, Navgraha Puja, Kaal Sarp Dosh Pooja, Mangal Dosh Nivaran, and more.',
  keywords: [
    'pooja online astrologer',
    'graha shanti pooja',
    'navgraha puja',
    'kaal sarp dosh pooja',
    'mangal dosh nivaran',
    'vedic rituals india',
  ],
};

const poojas = [
  {
    icon: '🌙',
    title: 'Graha Shanti Pooja',
    desc: 'Pacify malefic planets in your horoscope through ancient Vedic rituals and mantra recitations.',
    duration: '2–3 hours',
  },
  {
    icon: '🪐',
    title: 'Navgraha Puja',
    desc: 'A comprehensive ritual to balance all nine planets and attract their positive energies into your life.',
    duration: '3–4 hours',
    slug: 'navgrah-pooja',
  },
  {
    icon: '🐍',
    title: 'Kaal Sarp Dosh Nivaran',
    desc: 'Powerful puja to remove the effects of Kaal Sarp Yog and remove obstacles in life, marriage, and career.',
    duration: '4–5 hours',
  },
  {
    icon: '🔴',
    title: 'Mangal Dosh Pooja',
    desc: 'Special Manglik remedies and Puja to reduce the effects of Mangal Dosha for marriage compatibility.',
    duration: '2–3 hours',
    slug: 'mangal-pooja',
  },
  {
    icon: '💰',
    title: 'Lakshmi Puja',
    desc: 'Invoke the blessings of Goddess Lakshmi for financial prosperity, abundance, and business growth.',
    duration: '1–2 hours',
  },
  {
    icon: '🧿',
    title: 'Rudra Abhishek',
    desc: 'Sacred Shiva puja for health, protection, removal of negative energies, and spiritual elevation.',
    duration: '2–3 hours',
  },
  {
    icon: '🌺',
    title: 'Saraswati Puja',
    desc: 'For students, artists, and professionals seeking clarity, knowledge, and success in education and career.',
    duration: '1–2 hours',
  },
  {
    icon: '🕉️',
    title: 'Satyanarayan Katha',
    desc: 'Auspicious Vishnu puja traditionally performed for home blessings, family harmony, and new beginnings.',
    duration: '3–4 hours',
    slug: 'satyanarayan-pooja',
  },
  {
    icon: '🏠',
    title: 'Vastu Shanti Puja',
    desc: 'Purify and energize your home or office space to attract positive energies and remove Vastu doshas.',
    duration: '3–5 hours',
  },
  {
    icon: '🐍',
    title: 'Rahu Ketu Pooja',
    desc: 'Powerful Vedic ritual to pacify Rahu and Ketu and bring positive change to career, relationships, and health.',
    duration: '2–3 hours',
    slug: 'rahu-ketu-pooja',
  },
  {
    icon: '☀️',
    title: 'Surya Pooja',
    desc: 'Strengthen a weak Sun in your horoscope for renewed vitality, success, confidence, and recognition.',
    duration: '1–2 hours',
    slug: 'surya-pooja',
  },
  {
    icon: '🙏',
    title: 'Pitra Dosh Pooja',
    desc: 'Honor your ancestors and restore balance and harmony to the family through traditional Vedic rites.',
    duration: '3–4 hours',
    slug: 'pitra-dosh-pooja',
  },
  {
    icon: '🐘',
    title: 'Ganesh Pooja',
    desc: 'Remove obstacles and invite wealth and prosperity by worshipping Lord Ganesha before any important task.',
    duration: '1–2 hours',
    slug: 'ganesh-pooja',
  },
  {
    icon: '🪔',
    title: 'Shani Pooja',
    desc: 'Appease Saturn to ease the effects of Shani Dasha — relief from delays, stress, and hardship.',
    duration: '2–3 hours',
    slug: 'shani-pooja',
  },
];

export default function PoojaPage() {
  return (
    <>
      <PageHeader
        title="Pooja & Rituals"
        titleHindi="पूजा एवं अनुष्ठान"
        subtitle="Sacred Rituals"
        crumbs={[{ label: 'Pooja' }]}
      />

      <section className="py-20 px-4" style={{ background: '#FBF3E0' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Sacred Rituals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Our Pooja <span className="text-[#9E7016]">Services</span>
            </h2>
            <p className="text-[#2A1408]/50 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
              All poojas are conducted following authentic Vedic rituals by experienced pandits.
              Available at your location or performed on your behalf at sacred temples across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {poojas.map((p) => {
              const Wrapper = p.slug ? Link : 'div';
              const wrapperProps = p.slug ? { href: `/pooja/${p.slug}` } : {};
              return (
                <Wrapper
                  key={p.title}
                  {...wrapperProps}
                  className="glass-card rounded-2xl p-7 flex flex-col gap-3 group"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{p.icon}</span>
                    <span className="text-xs text-[#9E7016]/60 border border-[#D4AF37]/20 rounded-full
                                     px-3 py-1 shrink-0"
                          style={{ fontFamily: 'var(--font-cinzel)' }}>
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="text-[#9E7016] font-bold"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>
                    {p.title}
                  </h3>
                  <p className="text-[#2A1408]/55 text-sm leading-relaxed flex-1">{p.desc}</p>
                  {p.slug && (
                    <span className="inline-flex items-center gap-1 text-[#C1102E] text-xs font-bold mt-auto"
                          style={{ fontFamily: 'var(--font-cinzel)' }}>
                      READ MORE <span className="text-base">→</span>
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </div>

          {/* How to book */}
          <div className="glass-card rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-[#9E7016] font-bold text-xl mb-3"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Book a Pooja
            </h3>
            <p className="text-[#2A1408]/55 text-sm leading-relaxed max-w-xl mx-auto mb-6">
              Contact us with your preferred pooja, date, and location. Our team will prepare
              a complete list of required samagri (materials) and guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7600010811"
                 className="btn-gold rounded-full px-8 py-3 text-sm"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                📞 Call to Book
              </a>
              <a href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20to%20book%20a%20Pooja."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-outline-gold rounded-full px-8 py-3 text-sm"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

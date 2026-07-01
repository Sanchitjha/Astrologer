import Link from 'next/link';

const cards = [
  {
    icon: '💕',
    title: 'Love Problem Solution',
    desc: 'Resolve relationship issues with trusted astrology guidance. Get personalized solutions for love problems, breakups, misunderstandings, and emotional conflicts to bring happiness back into your life.',
    href: '/love-problems',
  },
  {
    icon: '💫',
    title: 'Horoscope Matching',
    desc: 'Find the perfect life partner with accurate Kundli Matching. Check Guna Milan, marriage compatibility, Manglik Dosha, and other important astrological factors before marriage.',
    href: '/services',
  },
  {
    icon: '💍',
    title: 'Love Marriage Specialist',
    desc: 'Receive expert astrology guidance for love marriage, inter-caste marriage, family approval, and relationship challenges with personalized and effective solutions.',
    href: '/love-problems',
  },
];

export default function LoveProblems() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 100% 50%, #1A0000 0%, #050005 60%)' }}
      aria-labelledby="love-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Love & Relationship</p>
          <h2 id="love-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Love <span className="text-[#D4AF37]">Problem Solutions</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title}
                     className="glass-card rounded-2xl p-7 flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center
                              group-hover:bg-[#D4AF37]/20 transition-colors">
                <span className="text-3xl">{c.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-[#D4AF37] font-bold text-lg mb-2"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {c.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
              <Link href={c.href}
                    className="inline-flex items-center gap-1 text-[#D4AF37] text-xs font-bold
                               hover:text-[#FFD700] transition-colors mt-auto"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                VIEW MORE <span className="text-base">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

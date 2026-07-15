import Link from 'next/link';
import Image from 'next/image';
import { findPublicImage } from '@/lib/publicImage';

const cards = [
  {
    slug: 'love-problem-solution',
    icon: '💕',
    title: 'Love Problem Solution',
    desc: 'Resolve relationship issues with trusted astrology guidance. Get personalized solutions for love problems, breakups, misunderstandings, and emotional conflicts to bring happiness back into your life.',
    href: '/love-problems',
  },
  {
    slug: 'horoscope-matching',
    icon: '💫',
    title: 'Horoscope Matching',
    desc: 'Find the perfect life partner with accurate Kundli Matching. Check Guna Milan, marriage compatibility, Manglik Dosha, and other important astrological factors before marriage.',
    href: '/services',
  },
  {
    slug: 'love-marriage-specialist',
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
      style={{ background: 'radial-gradient(ellipse at 100% 50%, #FBF3E0 0%, #FBF3E0 60%)' }}
      aria-labelledby="love-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Love & Relationship</p>
          <h2 id="love-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Love <span className="text-[#9E7016]">Problem Solutions</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => {
            const photo = findPublicImage('love-problems', c.slug);
            return (
            <article key={c.title}
                     className="glass-card rounded-2xl p-7 flex flex-col gap-4 group overflow-hidden">
              {photo ? (
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden -mt-1 -mx-1
                                bg-gradient-to-br from-[#F6ECD4] to-[#FBF3E0]">
                  <Image
                    src={photo}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center
                                group-hover:bg-[#D4AF37]/20 transition-colors">
                  <span className="text-3xl">{c.icon}</span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-[#9E7016] font-bold text-lg mb-2"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {c.title}
                </h3>
                <p className="text-[#2A1408]/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
              <Link href={c.href}
                    className="inline-flex items-center gap-1 text-[#9E7016] text-xs font-bold
                               hover:text-[#C1102E] transition-colors mt-auto"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                VIEW MORE <span className="text-base">→</span>
              </Link>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

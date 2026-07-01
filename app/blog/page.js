import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — Astrology Articles & Insights',
  description:
    'Read the latest astrology articles, Vedic insights, horoscope predictions, and spiritual guidance from Jyotish Shreenath Ji.',
  keywords: ['astrology blog', 'vedic astrology articles', 'horoscope insights', 'jyotish blog'],
  openGraph: {
    title: 'Blog | Jyotish Shreenath Ji',
    description: 'Astrology articles, Vedic insights, and spiritual guidance.',
    images: ['/logo.jpg'],
  },
};

const upcomingTopics = [
  { icon: '🔮', title: 'Understanding Your Janam Kundali', desc: 'Learn what your birth chart reveals about your personality, career, and relationships.' },
  { icon: '💍', title: 'Marriage Compatibility in Vedic Astrology', desc: 'How Guna Milan and planetary positions determine marriage compatibility.' },
  { icon: '💎', title: 'Gemstones & Their Planetary Benefits', desc: 'Which gemstone is right for you based on your zodiac and birth chart.' },
  { icon: '🏠', title: 'Vastu Tips for Home & Office', desc: 'Simple Vastu corrections to bring positive energy into your living spaces.' },
  { icon: '🌙', title: 'Remedies for Mangal Dosh', desc: 'Effective astrological remedies for Manglik Dosha and its effects on marriage.' },
  { icon: '📅', title: 'Choosing Auspicious Dates (Muhurat)', desc: 'How to pick the best dates for weddings, business launches, and major decisions.' },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        titleHindi="ज्योतिष लेख"
        subtitle="Astrology Insights"
        crumbs={[{ label: 'Blog' }]}
      />

      <main className="bg-[#0D0714] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Coming soon message */}
          <div className="text-center mb-14">
            <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto space-y-4">
              <span className="text-5xl block">📝</span>
              <h2 className="text-[#D4AF37] text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                Blog Coming Soon
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
                We are preparing insightful articles on Vedic astrology, horoscope predictions,
                remedies, and spiritual guidance. Stay tuned!
              </p>
              <Link href="/contact" className="btn-gold !py-2.5 !px-6 text-sm inline-flex"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                Get Notified →
              </Link>
            </div>
          </div>

          {/* Upcoming topics preview */}
          <div className="text-center mb-10">
            <p className="section-label mb-3">What to Expect</p>
            <h3 className="text-2xl font-bold text-white"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Upcoming <span className="text-[#D4AF37]">Topics</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingTopics.map((t) => (
              <article key={t.title} className="glass-card rounded-2xl p-6 space-y-3">
                <span className="text-3xl block">{t.icon}</span>
                <h4 className="text-[#D4AF37] font-bold text-sm"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {t.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

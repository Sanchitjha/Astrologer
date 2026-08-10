import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import LoveProblems from '@/components/LoveProblems';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Love Problem Solution | Expert Love Astrologer',
  description:
    'Get expert love problem solutions from Pandit Rohit Sharma Ji. Resolve breakups, one-sided love, family approval, and inter-caste marriage issues with Vedic Astrology.',
  keywords: [
    'love problem solution astrologer',
    'love marriage specialist India',
    'vashikaran specialist',
    'breakup solution astrology',
    'one sided love solution',
  ],
  openGraph: {
    title: 'Love Problem Solution | Jyotish Shreenath Ji',
    description: 'Resolve love and relationship problems with authentic Vedic Astrology guidance.',
    type: 'website',
  },
};

const solutions = [
  {
    slug: 'lost-love-back',
    title: 'Lost Love Back',
    desc: 'Reunite with your lost love through powerful Vedic remedies, mantra japa, and planetary analysis.',
    icon: '💔➡️❤️',
  },
  {
    slug: 'one-sided-love',
    title: 'One-Sided Love',
    desc: 'Transform unrequited feelings with compassionate spiritual guidance and astrological remedies.',
    icon: '💭',
  },
  {
    slug: 'family-opposition',
    title: 'Family Opposition',
    desc: 'Bridge family disagreements and gain acceptance for your relationship through respectful astrological solutions.',
    icon: '🏠',
  },
  {
    slug: 'love-marriage',
    title: 'Love Marriage',
    desc: 'Expert guidance for love marriages — Kundli matching, auspicious timing (muhurat), and family harmony.',
    icon: '💍',
  },
  {
    slug: 'breakup-recovery',
    title: 'Breakup Recovery',
    desc: 'Heal emotional wounds and rebuild trust in relationships with spiritual and astrological support.',
    icon: '🌱',
  },
  {
    slug: 'inter-caste-marriage',
    title: 'Inter-Caste Marriage',
    desc: 'Specialized solutions for inter-caste and inter-religion couples seeking family approval and harmony.',
    icon: '🌍',
  },
];

export default function LoveProblemsPage() {
  return (
    <>
      <PageHeader
        title="Love Problem Solutions"
        titleHindi="प्रेम समस्या समाधान"
        subtitle="Love & Relationship"
        crumbs={[{ label: 'Love Problems' }]}
      />

      <section className="py-20 px-4" style={{ background: '#FBF3E0' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Expert Guidance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Solutions We <span className="text-[#9E7016]">Provide</span>
            </h2>
            <p className="text-[#2A1408]/50 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Every love problem has a solution in Vedic Astrology. Pandit Rohit Sharma Ji
              provides genuine, ethical, and effective remedies tailored to your unique situation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <Link
                key={s.slug}
                href={`/love-problems/${s.slug}`}
                className="glass-card rounded-2xl p-7 group flex flex-col"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[#9E7016] font-bold text-base mb-3"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h3>
                <p className="text-[#2A1408]/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#C1102E] text-xs font-bold mt-4"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>
                  READ MORE <span className="text-base">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LoveProblems />
      <ContactCTA />
    </>
  );
}

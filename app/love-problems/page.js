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
    title: 'Lost Love Back',
    desc: 'Reunite with your lost love through powerful Vedic remedies, mantra japa, and planetary analysis.',
    icon: '💔➡️❤️',
  },
  {
    title: 'One-Sided Love',
    desc: 'Transform unrequited feelings with compassionate spiritual guidance and astrological remedies.',
    icon: '💭',
  },
  {
    title: 'Family Opposition',
    desc: 'Bridge family disagreements and gain acceptance for your relationship through respectful astrological solutions.',
    icon: '🏠',
  },
  {
    title: 'Love Marriage',
    desc: 'Expert guidance for love marriages — Kundli matching, auspicious timing (muhurat), and family harmony.',
    icon: '💍',
  },
  {
    title: 'Breakup Recovery',
    desc: 'Heal emotional wounds and rebuild trust in relationships with spiritual and astrological support.',
    icon: '🌱',
  },
  {
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
        subtitle="Resolve relationship challenges with authentic Vedic Astrology guidance"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Love Problems' }]}
      />

      <section className="py-20 px-4" style={{ background: '#050005' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Expert Guidance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Solutions We <span className="text-[#D4AF37]">Provide</span>
            </h2>
            <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Every love problem has a solution in Vedic Astrology. Pandit Rohit Sharma Ji
              provides genuine, ethical, and effective remedies tailored to your unique situation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-7 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-[#D4AF37] font-bold text-base mb-3"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LoveProblems />
      <ContactCTA />
    </>
  );
}

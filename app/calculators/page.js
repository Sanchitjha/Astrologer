import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Free Astrology Calculators — Rudraksha, Gemstone, Bracelet & Ratti',
  description:
    'Free astrology calculators from Rohit Sharma — find your lucky Rudraksha, gemstone, and crystal bracelet, plus a Carat to Ratti weight converter.',
  keywords: ['rudraksha calculator', 'gemstone calculator', 'bracelet calculator', 'carat to ratti calculator'],
  openGraph: {
    title: 'Free Astrology Calculators | Jyotish Shreenath Ji',
    description: 'Find your lucky Rudraksha, gemstone, bracelet, and convert carat to ratti.',
    images: ['/logo.jpg'],
  },
};

const calculators = [
  { href: '/calculators/rudraksha', icon: '📿', title: 'Rudraksha Calculator', desc: 'Find the Rudraksha Mukhi whose energy matches your birth chart.' },
  { href: '/calculators/gemstone', icon: '💎', title: 'Gemstone Calculator', desc: 'Discover your lucky gemstone as per your birth chart in seconds.' },
  { href: '/calculators/bracelet', icon: '💠', title: 'Bracelet Calculator', desc: 'Answer a few questions and get your perfect crystal bracelet match instantly.' },
  { href: '/calculators/carat-to-ratti', icon: '⚖️', title: 'Carat to Ratti Calculator', desc: 'Convert gemstone weights instantly between carat and the traditional ratti.' },
];

export default function CalculatorsPage() {
  return (
    <>
      <PageHeader
        title="Free Calculators"
        titleHindi="ज्योतिष कैलकुलेटर"
        subtitle="Instant Astrology Tools"
        crumbs={[{ label: 'Calculators' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {calculators.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="glass-card rounded-2xl p-8 flex flex-col items-center text-center gap-4 group hover:-translate-y-1 transition-all"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{c.icon}</span>
                <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {c.title}
                </h2>
                <p className="text-[#2A1408]/55 text-sm leading-relaxed">{c.desc}</p>
                <span className="text-[#C1102E] text-xs font-bold mt-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  TRY IT →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

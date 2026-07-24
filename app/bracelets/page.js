import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Bracelets — Zodiac & Crystal Healing Bracelets',
  description:
    'Shop original zodiac bracelets and natural crystal bracelets recommended by Rohit Sharmaji — energised bracelets for love, wealth, protection, and peace.',
  keywords: ['buy bracelet online', 'zodiac bracelet', 'crystal bracelet', 'rashi bracelet india'],
  openGraph: {
    title: 'Bracelets Collection | Jyotish Shreenath Ji',
    description: 'Zodiac and crystal healing bracelets, energised before dispatch.',
    images: ['/logo.jpg'],
  },
};

const collections = [
  {
    href: '/bracelets/zodiac',
    icon: '♈',
    title: 'Zodiac Bracelets',
    desc: 'A curated crystal combination for each of the 12 zodiac signs — strengthening your sign\'s strengths and softening its challenges.',
  },
  {
    href: '/bracelets/crystal',
    icon: '💠',
    title: 'Crystal Bracelets',
    desc: 'Purpose-picked natural crystals — Amethyst for peace, Rose Quartz for love, Pyrite & Citrine for wealth, Tiger Eye for courage, and more.',
  },
];

export default function BraceletsPage() {
  return (
    <>
      <PageHeader
        title="Bracelets"
        titleHindi="कंगन संग्रह"
        subtitle="Zodiac & Crystal Bracelets"
        crumbs={[{ label: 'Bracelets' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {collections.map((c) => (
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
                  EXPLORE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

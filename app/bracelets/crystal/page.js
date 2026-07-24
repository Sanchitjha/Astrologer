import PageHeader from '@/components/PageHeader';
import BraceletCard from '@/components/BraceletCard';
import { crystalBracelets } from '@/data/crystalBracelets';
import { findPublicImage } from '@/lib/publicImage';

export const metadata = {
  title: 'Crystal Bracelets — 100% Natural Healing Bracelets',
  description:
    'Shop 100% natural crystal bracelets online from Rohit Sharma. Amethyst, Rose Quartz, Tiger Eye, Citrine, Pyrite & more — energised bracelets for love, wealth, protection, and peace.',
  keywords: ['crystal bracelet', 'healing bracelet', 'amethyst bracelet', 'rose quartz bracelet', 'pyrite bracelet'],
  openGraph: {
    title: 'Crystal Bracelets | Jyotish Shreenath Ji',
    description: '100% natural healing bracelets for love, wealth, protection, and peace.',
    images: ['/logo.jpg'],
  },
};

export default function CrystalBraceletsPage() {
  return (
    <>
      <PageHeader
        title="Crystal Bracelets"
        titleHindi="क्रिस्टल कंगन"
        subtitle="100% Natural Healing Bracelets"
        crumbs={[{ label: 'Bracelets', href: '/bracelets' }, { label: 'Crystal Bracelets' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed max-w-2xl mx-auto text-center">
            A crystal bracelet is more than a beautiful accessory — it&apos;s energy you can wear. Each
            natural stone carries its own vibration: Rose Quartz for love, Citrine for abundance, Tiger
            Eye for courage, Amethyst for peace. Unlike astrological gemstones, crystal bracelets don&apos;t
            need horoscope matching, so anyone can wear them safely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {crystalBracelets.map((c) => (
              <BraceletCard
                key={c.slug}
                href={`/bracelets/crystal/${c.slug}`}
                name={c.name}
                badge={c.tagline}
                intro={c.intro}
                icon="💠"
                photo={findPublicImage('bracelets/crystal', c.slug)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

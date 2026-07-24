import PageHeader from '@/components/PageHeader';
import BraceletCard from '@/components/BraceletCard';
import { zodiacBracelets } from '@/data/zodiacBracelets';
import { findPublicImage } from '@/lib/publicImage';

export const metadata = {
  title: 'Zodiac Bracelets — All 12 Rashi Bracelets',
  description:
    'Buy original zodiac bracelets online from Rohit Sharma. Crystal bracelets crafted for all 12 zodiac signs — Aries to Pisces — energised before dispatch with expert astrological guidance.',
  keywords: ['zodiac bracelet', 'rashi bracelet', 'crystal bracelet zodiac sign'],
  openGraph: {
    title: 'Zodiac Bracelets | Jyotish Shreenath Ji',
    description: 'Crystal bracelets crafted for all 12 zodiac signs.',
    images: ['/logo.jpg'],
  },
};

export default function ZodiacBraceletsPage() {
  return (
    <>
      <PageHeader
        title="Zodiac Bracelets"
        titleHindi="राशि कंगन"
        subtitle="All 12 Rashi Bracelets"
        crumbs={[{ label: 'Bracelets', href: '/bracelets' }, { label: 'Zodiac Bracelets' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed max-w-2xl mx-auto text-center">
            Zodiac bracelets are crystal bracelets crafted specifically for each of the 12 zodiac
            signs (rashis). Each bracelet combines the stones most aligned with that sign&apos;s ruling
            planet and natural temperament — believed to strengthen the sign&apos;s positive qualities,
            balance its weaknesses, and attract luck, love, and success for the wearer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {zodiacBracelets.map((z) => (
              <BraceletCard
                key={z.slug}
                href={`/bracelets/zodiac/${z.slug}`}
                name={`${z.sign} Zodiac Bracelet`}
                badge={z.rashi}
                intro={z.intro}
                icon="♈"
                photo={findPublicImage('bracelets/zodiac', z.slug)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

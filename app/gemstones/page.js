import PageHeader from '@/components/PageHeader';
import GemstoneGrid from '@/components/GemstoneGrid';
import { gemstones } from '@/data/gemstones';
import { findPublicImage } from '@/lib/publicImage';

export const metadata = {
  title: 'Certified Gemstones — Ratna Consultation & Guidance',
  description:
    'Explore Vedic gemstones recommended by Rohit Sharmaji — Ruby, Pearl, Blue Sapphire, Yellow Sapphire, Emerald, Coral and more. Learn benefits, how to wear, and book a personalised consultation.',
  keywords: [
    'vedic gemstones', 'navratna', 'ruby manik', 'blue sapphire neelam', 'yellow sapphire pukhraj',
    'emerald panna', 'red coral moonga', 'gomed hessonite', 'gemstone consultation india',
  ],
  openGraph: {
    title: 'Certified Gemstones | Jyotish Shreenath Ji',
    description: 'Vedic gemstone guidance — Navratna and specialty stones recommended by Rohit Sharmaji.',
    images: ['/logo.jpg'],
  },
};

export default function GemstonesPage() {
  const gemstonesWithPhotos = gemstones.map((g) => ({ ...g, photo: findPublicImage('gemstones', g.slug) }));

  return (
    <>
      <PageHeader
        title="Certified Gemstones"
        titleHindi="रत्न भंडार"
        subtitle="Vedic Gem Guidance"
        crumbs={[{ label: 'Gemstones' }]}
      />
      <GemstoneGrid gemstones={gemstonesWithPhotos} />
    </>
  );
}

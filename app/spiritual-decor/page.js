import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import DecorCard from '@/components/DecorCard';
import { spiritualDecor } from '@/data/spiritualDecor';
import { findPublicImage } from '@/lib/publicImage';

export const metadata = {
  title: 'Pooja & Spiritual Decor — Crystal Trees, Pyramids, Shankh & More',
  description:
    'Shop pooja and spiritual decor recommended by Rohit Sharmaji — Crystal Trees, Sphere Balls, Pyramids, Shankh, Singing Bowls, Pooja Kits & more for a blessed, positive home.',
  keywords: [
    'pooja decor online', 'crystal tree', 'shankh online', 'pooja kit', 'singing bowl',
    'spiritual home decor', 'vastu pyramid', 'crystal sphere',
  ],
  openGraph: {
    title: 'Pooja & Spiritual Decor | Jyotish Shreenath Ji',
    description: 'Crystal Trees, Pyramids, Shankh, Singing Bowls, Pooja Kits & more for a blessed home.',
    images: ['/logo.jpg'],
  },
};

export default function SpiritualDecorPage() {
  const items = spiritualDecor.map((d) => ({
    ...d,
    shortTitle: d.title.split(' — ')[0],
    photo: findPublicImage('spiritual-decor', d.slug),
  }));

  return (
    <>
      <PageHeader
        title="Pooja & Spiritual Decor"
        titleHindi="पूजा एवं आध्यात्मिक सजावट"
        subtitle="Crystal Trees, Pyramids, Shankh & More for a Blessed Home"
        crumbs={[{ label: 'Pooja & Spiritual Decor' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              A home is more than walls and furniture — it carries energy. Our curated collection of
              pooja and spiritual decor brings living, breathing positivity into your space: crystal
              trees that radiate wealth and peace, pyramids that concentrate positive energy, sacred
              shankh whose sound purifies the air, and everything in between. Every piece is chosen
              and blessed by Rohit Sharmaji.
            </p>
          </div>

          <div>
            <div className="text-center mb-10">
              <p className="section-label mb-3">Sacred Collections</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Browse Our <span className="text-[#9E7016]">Collections</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {items.map((d) => (
                <DecorCard key={d.slug} slug={d.slug} title={d.shortTitle} icon={d.icon} intro={d.intro} photo={d.photo} />
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3 max-w-3xl mx-auto text-center">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Not Sure What Your Space Needs?
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              Share your home or office layout with Rohit Sharmaji and receive a personalised
              recommendation for which pieces will bring the most benefit to your space.
            </p>
            <Link href="/contact" className="btn-gold inline-block mt-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Get a Personalised Recommendation →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

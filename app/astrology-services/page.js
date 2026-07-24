import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { generalServices } from '@/data/generalServices';

export const metadata = {
  title: 'Astrology Services — Kundali, Matching, Career, Vastu & More',
  description:
    'Comprehensive Vedic astrology services by Rohit Sharma — Janam Kundali, Horoscope Matching, Palm Reading, Vastu Shastra, Child Astrology, Business & Career guidance, Vehicle Muhurat, and Dosh solutions.',
  keywords: [
    'janam kundali', 'horoscope matching', 'palm reading', 'vastu shastra', 'child astrology',
    'business astrology', 'career astrology', 'vehicle purchase muhurat', 'dosh problem solution',
  ],
  openGraph: {
    title: 'Astrology Services | Jyotish Shreenath Ji',
    description: 'Kundali, matching, career, Vastu, and dosh solutions by Rohit Sharmaji.',
    images: ['/logo.jpg'],
  },
};

export default function AstrologyServicesPage() {
  return (
    <>
      <PageHeader
        title="Astrology Services"
        titleHindi="ज्योतिष सेवाएँ"
        subtitle="Guidance for Every Life Stage"
        crumbs={[{ label: 'Astrology Services' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {generalServices.map((s) => (
              <article key={s.slug} className="glass-card rounded-2xl p-6 flex flex-col gap-3 group">
                <span className="text-3xl">{s.icon}</span>
                <h2 className="text-[#9E7016] font-bold text-base leading-snug" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h2>
                <p className="text-[#2A1408]/55 text-sm leading-relaxed line-clamp-3 flex-1">{s.intro}</p>
                <Link
                  href={`/astrology-services/${s.slug}`}
                  className="inline-flex items-center gap-1 text-[#C1102E] text-xs font-bold hover:text-[#8A0A20] transition-colors mt-auto"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  READ MORE <span className="text-base">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { vashikaranServices } from '@/data/vashikaranServices';

export const metadata = {
  title: 'Vashikaran & Tantrik Consultation Services',
  description:
    'Traditional, belief-based Vashikaran and Tantrik guidance from Rohit Sharmaji — for love, marriage, family, and life concerns. Confidential consultations by phone, WhatsApp, or in person.',
  keywords: [
    'vashikaran specialist india', 'online vashikaran astrologer', 'black magic removal specialist',
    'best tantrik in india', 'vashikaran mantra for husband', 'vashikaran mantra for wife',
  ],
  openGraph: {
    title: 'Vashikaran & Tantrik Services | Jyotish Shreenath Ji',
    description: 'Traditional, belief-based Vashikaran and Tantrik guidance by Rohit Sharmaji.',
    images: ['/logo.jpg'],
  },
};

export default function VashikaranServicesPage() {
  return (
    <>
      <PageHeader
        title="Vashikaran & Tantrik Services"
        titleHindi="वशीकरण एवं तांत्रिक सेवाएँ"
        subtitle="Traditional Belief-Based Guidance"
        crumbs={[{ label: 'Vashikaran & Tantrik Services' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed max-w-2xl mx-auto text-center">
            Rohit Sharmaji offers traditional, belief-based Vashikaran and Tantrik guidance —
            rooted in Vedic principles and approached with care, confidentiality, and complete
            respect for every client&apos;s free will. All consultations are available in person, by
            phone, or by video call.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vashikaranServices.map((s) => (
              <article key={s.slug} className="glass-card rounded-2xl p-6 flex flex-col gap-3 group">
                <span className="text-3xl">🕉️</span>
                <h2 className="text-[#9E7016] font-bold text-base leading-snug" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h2>
                <p className="text-[#2A1408]/55 text-sm leading-relaxed line-clamp-3 flex-1">{s.intro}</p>
                <Link
                  href={`/vashikaran-services/${s.slug}`}
                  className="inline-flex items-center gap-1 text-[#C1102E] text-xs font-bold hover:text-[#8A0A20] transition-colors mt-auto"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  READ MORE <span className="text-base">→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="text-center text-[#2A1408]/38 text-xs max-w-xl mx-auto">
            All remedies are offered as traditional, belief-based practices intended to bring
            comfort and clarity — not as medical treatment or a diagnosis of any kind.
          </p>
        </div>
      </main>
    </>
  );
}

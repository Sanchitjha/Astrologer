import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import MalaCard from '@/components/MalaCard';
import { malas } from '@/data/malas';
import { findPublicImage } from '@/lib/publicImage';

export const metadata = {
  title: 'Mala — Sacred Beads for Jaap & Meditation',
  description:
    'Shop original malas recommended by Rohit Sharmaji — Rudraksha, Tulsi, Karungali, Sphatik & Siddha Mala for jaap, meditation, protection, and spiritual growth.',
  keywords: [
    'buy mala online', 'rudraksha mala', 'tulsi mala', 'karungali mala', 'sphatik mala',
    'japa mala', 'siddha mala', '108 beads mala india',
  ],
  openGraph: {
    title: 'Mala Collection | Jyotish Shreenath Ji',
    description: 'Sacred beads for jaap, meditation, and spiritual protection.',
    images: ['/logo.jpg'],
  },
};

const howToChoose = [
  { label: 'By deity', desc: 'Rudraksha for Lord Shiva, Tulsi for Lord Vishnu/Krishna' },
  { label: 'By purpose', desc: 'Karungali for protection, Sphatik for peace, Silver Rudraksha for elegance with energy' },
  { label: 'By use', desc: '108-bead japa mala for chanting; wearable malas for daily protection' },
];

export default function MalaPage() {
  const malasWithPhotos = malas.map((m) => ({ ...m, photo: findPublicImage('mala', m.slug) }));

  return (
    <>
      <PageHeader
        title="Mala"
        titleHindi="माला"
        subtitle="Sacred Beads for Jaap & Meditation"
        crumbs={[{ label: 'Mala' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              A mala is a sacred string of beads used for mantra jaap, meditation, and daily spiritual
              practice. Traditionally made of 108 beads of Rudraksha, Tulsi, Karungali, or natural
              crystals, a mala is worn or used to attract positive energy, deepen concentration, and
              bring peace and harmony to life.
            </p>
          </div>

          {/* About */}
          <div className="glass-card rounded-2xl p-8 space-y-3 max-w-3xl mx-auto">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              About Mala
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              In Vedic tradition, a mala is far more than a string of beads — it is a spiritual
              instrument. Each bead counts one repetition of a mantra, and the full cycle of 108 beads
              completes one round of jaap. Depending on the material — Rudraksha for Lord Shiva&apos;s
              grace, Tulsi for Lord Vishnu&apos;s blessings, Karungali for protection, or crystals for
              specific energies — each mala carries its own purpose and power. Choose the mala that
              matches your deity, your goal, or your astrological need.
            </p>
          </div>

          {/* Types grid */}
          <div>
            <div className="text-center mb-10">
              <p className="section-label mb-3">Sacred Instruments</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Types of <span className="text-[#9E7016]">Mala</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {malasWithPhotos.map((m) => (
                <MalaCard key={m.slug} {...m} />
              ))}
            </div>
          </div>

          {/* How to choose */}
          <div className="glass-card rounded-2xl p-8 space-y-5 max-w-3xl mx-auto">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Choose the Right Mala
            </h2>
            <div className="space-y-3">
              {howToChoose.map((h) => (
                <div key={h.label} className="flex items-start gap-2 text-sm">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span>
                  <p className="text-[#2A1408]/60"><strong className="text-[#2A1408]/80">{h.label}:</strong> {h.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#2A1408]/50 text-sm border-t border-[#D4AF37]/10 pt-4">
              When in doubt,{' '}
              <Link href="/contact" className="text-[#C1102E] font-semibold hover:underline">
                consult with Rohit Sharmaji
              </Link>{' '}
              for a personalised recommendation.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

import PageHeader from '@/components/PageHeader';
import BirthChartRequestForm from '@/components/BirthChartRequestForm';

export const metadata = {
  title: 'Free Rudraksha Calculator | Find Your Lucky Rudraksha by Date of Birth',
  description: "Which Rudraksha should you wear? Use Rohit Sharma's Rudraksha calculator — share your birth details and discover your lucky Mukhi as per Vedic astrology.",
  keywords: ['rudraksha calculator', 'which rudraksha should i wear', 'lucky rudraksha mukhi'],
  openGraph: {
    title: 'Free Rudraksha Calculator | Jyotish Shreenath Ji',
    description: 'Find your lucky Rudraksha Mukhi based on your birth chart.',
    images: ['/logo.jpg'],
  },
};

export default function RudrakshaCalculatorPage() {
  return (
    <>
      <PageHeader
        title="Rudraksha Calculator"
        titleHindi="रुद्राक्ष कैलकुलेटर"
        subtitle="Find Your Lucky Rudraksha"
        crumbs={[{ label: 'Calculators', href: '/calculators' }, { label: 'Rudraksha Calculator' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed text-center max-w-xl mx-auto">
            1 Mukhi to 27 Mukhi — with so many sacred beads, how do you know which Rudraksha is made
            for you? The answer is written in your birth chart. Share your details below, and Rohit
            Sharmaji will reveal the Rudraksha whose energy matches your planets, your rashi, and your
            life&apos;s needs.
          </p>

          <BirthChartRequestForm
            toolName="Rudraksha Calculator"
            ctaLabel="🔮 Calculate My Rudraksha"
          />

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How the Rudraksha Calculator Works
            </h2>
            <ul className="space-y-2 text-sm text-[#2A1408]/60">
              <li><strong className="text-[#2A1408]/80">Step 1:</strong> Share your date, time, and place of birth</li>
              <li><strong className="text-[#2A1408]/80">Step 2:</strong> Rohit Sharmaji finds your Moon sign (rashi), Nakshatra, and key planetary positions</li>
              <li><strong className="text-[#2A1408]/80">Step 3:</strong> Based on which planet needs strengthening or pacifying, he recommends the Mukhi ruled by that planet&apos;s deity</li>
              <li><strong className="text-[#2A1408]/80">Step 4:</strong> You get your lucky Rudraksha with a direct link to the authentic, energised bead</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Why the Right Rudraksha Matters
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              Every Rudraksha Mukhi is governed by a specific deity and planet — 1 Mukhi by the Sun, 2
              Mukhi by the Moon, 7 Mukhi by Shukra (Venus) and Maa Lakshmi, and so on. When you wear the
              Mukhi that matches your chart, you&apos;re strengthening exactly the planetary energy your
              life needs. Unlike gemstones, Rudraksha never harms — even if you wear a Mukhi that isn&apos;t
              your chart&apos;s first choice, it remains beneficial. But the right Mukhi works noticeably
              faster and deeper.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Is this Rudraksha calculator really free?', a: 'Yes, completely free. Share your birth details and get your recommendation directly from Rohit Sharmaji — no payment, no signup.' },
                { q: "What if I don't know my exact birth time?", a: 'You can still request a reading. The recommendation will be based on your birth date\'s Moon position, which is accurate for most cases.' },
                { q: 'Can anyone wear Rudraksha?', a: 'Yes. Rudraksha requires no horoscope matching and is safe for men, women, and children of all ages.' },
              ].map((f) => (
                <div key={f.q} className="border-b border-[#D4AF37]/10 pb-3 last:border-0 last:pb-0">
                  <p className="text-[#2A1408] font-semibold text-sm mb-1">{f.q}</p>
                  <p className="text-[#2A1408]/55 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

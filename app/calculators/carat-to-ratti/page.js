import PageHeader from '@/components/PageHeader';
import CaratRattiCalculator from '@/components/CaratRattiCalculator';

export const metadata = {
  title: 'Carat to Ratti Calculator | Free Gemstone Weight Converter',
  description: 'Convert carat to ratti instantly with this free calculator. Understand gemstone weights the Vedic way — with conversion chart and buying guidance.',
  keywords: ['carat to ratti calculator', 'ratti to carat', 'gemstone weight converter'],
  openGraph: {
    title: 'Carat to Ratti Calculator | Jyotish Shreenath Ji',
    description: 'Free gemstone weight converter — carat to ratti and back.',
    images: ['/logo.jpg'],
  },
};

const chart = [
  [1, 1.10], [2, 2.20], [3, 3.30], [4, 4.40], [5, 5.49],
  [6, 6.59], [7, 7.69], [8, 8.79], [9, 9.89], [10, 10.99],
];

export default function CaratRattiPage() {
  return (
    <>
      <PageHeader
        title="Carat to Ratti Calculator"
        titleHindi="कैरेट से रत्ती"
        subtitle="Gemstone Weight Converter"
        crumbs={[{ label: 'Calculators', href: '/calculators' }, { label: 'Carat to Ratti' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed text-center max-w-xl mx-auto">
            Your astrologer said &quot;wear a 5 ratti Pukhraj&quot; — but the gemstone listing says &quot;4.55
            carats.&quot; Are they the same? Almost! Carat is the international jewellery unit, ratti is
            the traditional Vedic unit, and converting between them confuses almost every gemstone
            buyer. This free calculator solves it in one click.
          </p>

          <CaratRattiCalculator />

          {/* Chart */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Quick Carat to Ratti Conversion Chart
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
              {chart.map(([c, r]) => (
                <div key={c} className="text-center bg-[#D4AF37]/5 rounded-lg py-3">
                  <p className="text-[#2A1408]/50 text-xs">{c} Carat</p>
                  <p className="text-[#C1102E] font-bold">{r} Ratti</p>
                </div>
              ))}
            </div>
            <p className="text-[#2A1408]/38 text-xs text-center pt-2">Based on the standard: 1 Ratti = 0.91 Carat</p>
          </div>

          {/* About */}
          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Carat vs Ratti — What&apos;s the Difference?
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              Carat is the international standard for weighing gemstones — 1 carat equals exactly 200
              milligrams. Ratti is the traditional Indian unit, used for centuries in Vedic astrology,
              historically based on the weight of the ratti seed (Gunja). Today, the standard &quot;pakki
              ratti&quot; used across the gemstone trade equals 0.91 carat (182.25 mg) — the standard this
              calculator uses.
            </p>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              Astrological recommendations are almost always given in ratti, while gemstones are sold in
              carats — getting the conversion wrong means wearing a stone lighter than prescribed, which
              may reduce its astrological effect. A traditional tip: when in doubt between two available
              weights, astrologers generally suggest going slightly above the prescribed ratti, never below.
            </p>
          </div>

          {/* FAQ */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                { q: 'How many carats is 1 ratti?', a: '1 ratti = 0.91 carat (182.25 milligrams), as per the standard pakki ratti used in the gemstone trade.' },
                { q: 'Why do some jewellers use a different ratti value?', a: 'The traditional "kachi ratti" (based on the actual Gunja seed, ~121 mg) differs from the standardised "pakki ratti" (182.25 mg). Always confirm which standard is being used before buying.' },
                { q: 'How much ratti gemstone should I wear?', a: 'The common guideline is about 1 ratti per 10–12 kg of body weight, adjusted for the planet\'s strength in your chart. For your exact prescribed weight, consult Rohit Sharma.' },
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

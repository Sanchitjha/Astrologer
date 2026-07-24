import PageHeader from '@/components/PageHeader';
import BirthChartRequestForm from '@/components/BirthChartRequestForm';

export const metadata = {
  title: 'Free Gemstone Calculator | Which Gemstone Should I Wear by Date of Birth',
  description: "Confused about which gemstone to wear? Use Rohit Sharma's free gemstone recommendation calculator — get your lucky stone as per your birth chart.",
  keywords: ['gemstone calculator', 'which gemstone should i wear', 'lucky gemstone by date of birth'],
  openGraph: {
    title: 'Free Gemstone Calculator | Jyotish Shreenath Ji',
    description: 'Discover your lucky gemstone based on your birth chart.',
    images: ['/logo.jpg'],
  },
};

export default function GemstoneCalculatorPage() {
  return (
    <>
      <PageHeader
        title="Gemstone Calculator"
        titleHindi="रत्न कैलकुलेटर"
        subtitle="Which Gemstone Should You Wear?"
        crumbs={[{ label: 'Calculators', href: '/calculators' }, { label: 'Gemstone Calculator' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed text-center max-w-xl mx-auto">
            &quot;Which gemstone is right for me?&quot; — it&apos;s the most important question in gemstone
            astrology, because the right stone can transform your life while the wrong one can work
            against you. Stop guessing. Share your birth details below and discover your lucky gemstone
            as per your actual birth chart.
          </p>

          <BirthChartRequestForm
            toolName="Gemstone Calculator"
            extraFieldLabel="Purpose"
            extraFieldOptions={['Career', 'Wealth', 'Health', 'Marriage', 'Education', 'Overall']}
            ctaLabel="💎 Find My Gemstone"
          />

          <div className="glass-card rounded-2xl p-6 bg-[#D4AF37]/5">
            <p className="text-[#2A1408]/55 text-xs leading-relaxed">
              <strong className="text-[#9E7016]">Important:</strong> For strong stones (Blue Sapphire,
              Hessonite, Cat&apos;s Eye), Rohit Sharmaji will always confirm with a detailed consultation
              before recommending — these gemstones react quickly and are not suitable for everyone.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How the Gemstone Calculator Works
            </h2>
            <ul className="space-y-2 text-sm text-[#2A1408]/60">
              <li><strong className="text-[#2A1408]/80">Step 1:</strong> Share your date, time, and place of birth</li>
              <li><strong className="text-[#2A1408]/80">Step 2:</strong> Rohit Sharmaji determines your Lagna (ascendant), Moon sign, and planetary positions</li>
              <li><strong className="text-[#2A1408]/80">Step 3:</strong> He identifies which benefic planet in your chart should be strengthened</li>
              <li><strong className="text-[#2A1408]/80">Step 4:</strong> You receive your recommended gemstone — with the correct finger, metal, and day to wear it</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Why You Should Never Guess Your Gemstone
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              Gemstones are concentrated planetary energy, and they must match your chart. Yellow
              Sapphire strengthens Jupiter, Blue Sapphire channels Saturn, Ruby carries the Sun&apos;s fire.
              Worn correctly, a gemstone becomes your lifelong ally. Worn incorrectly — especially strong
              stones like Neelam — it can amplify the wrong planetary influence. That&apos;s why wearing a
              gemstone just because of your zodiac sign is risky; the proper method is chart analysis.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Which gemstone should I wear according to my date of birth?', a: 'It depends on your complete birth chart — your ascendant, Moon sign, and planetary positions — not just your birth date.' },
                { q: 'Can I wear a gemstone without consulting anyone?', a: 'Gentle stones (Amethyst, Citrine, Opal) are generally safe. But strong stones like Blue Sapphire, Gomed, and Cat\'s Eye should never be worn without proper chart analysis.' },
                { q: 'What carat weight should my gemstone be?', a: 'The traditional guideline is based on body weight and the planet\'s strength in your chart — commonly 1 ratti per 10-12 kg of body weight. Use our Carat to Ratti Calculator to convert weights.' },
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

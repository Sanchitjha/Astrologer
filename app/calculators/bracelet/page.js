import PageHeader from '@/components/PageHeader';
import BraceletCalculator from '@/components/BraceletCalculator';

export const metadata = {
  title: 'Free Bracelet Calculator | Which Crystal Bracelet Should I Wear?',
  description: 'Which crystal bracelet is right for you? Use this free bracelet calculator — answer a few questions and get your perfect bracelet match instantly.',
  keywords: ['bracelet calculator', 'crystal bracelet finder', 'which bracelet should i wear'],
  openGraph: {
    title: 'Free Bracelet Calculator | Jyotish Shreenath Ji',
    description: 'Find your perfect crystal bracelet match instantly.',
    images: ['/logo.jpg'],
  },
};

export default function BraceletCalculatorPage() {
  return (
    <>
      <PageHeader
        title="Bracelet Calculator"
        titleHindi="कंगन कैलकुलेटर"
        subtitle="Find Your Perfect Crystal Match"
        crumbs={[{ label: 'Calculators', href: '/calculators' }, { label: 'Bracelet Calculator' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed text-center max-w-xl mx-auto">
            Amethyst for peace, Pyrite for wealth, Rose Quartz for love, Tiger Eye for courage — every
            crystal bracelet has its own gift. But which one does your life need right now? Answer a
            few quick questions and this free calculator will match you with your perfect bracelet.
          </p>

          <BraceletCalculator />

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How the Bracelet Calculator Works
            </h2>
            <ul className="space-y-2 text-sm text-[#2A1408]/60">
              <li><strong className="text-[#2A1408]/80">Step 1:</strong> Enter your date of birth — this gives us your zodiac sign and its natural energies</li>
              <li><strong className="text-[#2A1408]/80">Step 2:</strong> Tell us what you&apos;re seeking right now — wealth, love, protection, peace, or confidence</li>
              <li><strong className="text-[#2A1408]/80">Step 3:</strong> The calculator matches your sign&apos;s energy with your goal</li>
              <li><strong className="text-[#2A1408]/80">Step 4:</strong> Get your perfect bracelet instantly — the crystal that supports both who you are and where you&apos;re going</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Is this bracelet calculator free?', a: 'Yes, 100% free — answer the questions and get your match instantly.' },
                { q: 'Can I wear more than one crystal bracelet at a time?', a: 'Yes, most crystals combine well. Popular pairings include Pyrite + Citrine for wealth, or Rose Quartz + Amethyst for emotional peace.' },
                { q: 'Do I need my birth time for this calculator?', a: 'No — just your date of birth. Crystal bracelets work on zodiac energy and intention, which don\'t require exact birth time.' },
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

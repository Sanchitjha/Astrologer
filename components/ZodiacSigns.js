import Link from 'next/link';

const zodiacs = [
  { sign: '♈', en: 'Aries',       hi: 'मेष',      slug: 'aries',       color: '#FF6B6B' },
  { sign: '♉', en: 'Taurus',      hi: 'वृषभ',     slug: 'taurus',      color: '#4ECDC4' },
  { sign: '♊', en: 'Gemini',      hi: 'मिथुन',    slug: 'gemini',      color: '#FFE66D' },
  { sign: '♋', en: 'Cancer',      hi: 'कर्क',     slug: 'cancer',      color: '#A8D8EA' },
  { sign: '♌', en: 'Leo',         hi: 'सिंह',     slug: 'leo',         color: '#FF9F43' },
  { sign: '♍', en: 'Virgo',       hi: 'कन्या',    slug: 'virgo',       color: '#88D8B0' },
  { sign: '♎', en: 'Libra',       hi: 'तुला',     slug: 'libra',       color: '#C7B8EA' },
  { sign: '♏', en: 'Scorpio',     hi: 'वृश्चिक',  slug: 'scorpio',     color: '#FF6B9D' },
  { sign: '♐', en: 'Sagittarius', hi: 'धनु',      slug: 'sagittarius', color: '#96CEB4' },
  { sign: '♑', en: 'Capricorn',   hi: 'मकर',      slug: 'capricorn',   color: '#DDA0DD' },
  { sign: '♒', en: 'Aquarius',    hi: 'कुंभ',     slug: 'aquarius',    color: '#74B9FF' },
  { sign: '♓', en: 'Pisces',      hi: 'मीन',      slug: 'pisces',      color: '#A29BFE' },
];

export default function ZodiacSigns() {
  return (
    <section
      id="zodiac"
      className="py-20 px-4 border-t border-[#D4AF37]/8 scroll-mt-24"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #FBF3E0 0%, #FBF3E0 80%)' }}
      aria-labelledby="zodiac-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Astrology Predictions</p>
          <h2 id="zodiac-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Zodiac Signs <span className="text-[#9E7016]">Prediction</span>
          </h2>
          <p className="text-[#2A1408]/58 text-sm mt-3 max-w-lg mx-auto">
            Select your zodiac sign to discover personalized predictions and cosmic guidance
            based on Vedic astrology.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {zodiacs.map((z) => (
            <Link
              key={z.slug}
              href={`/zodiac/${z.slug}`}
              className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center
                         group transition-all duration-300
                         hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              aria-label={`${z.en} zodiac prediction`}
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `radial-gradient(circle, ${z.color}15, ${z.color}05)`, border: `1px solid ${z.color}30` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/zodiac/${z.slug}.svg`}
                  alt={`${z.en} zodiac sign`}
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <div>
                <p className="text-[#2A1408]/80 text-xs font-semibold"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {z.en}
                </p>
                <p className="text-[#2A1408]/52 text-xs mt-0.5"
                   style={{ fontFamily: 'var(--font-devanagari)' }}>
                  ({z.hi})
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-[#2A1408]/42 text-xs mt-8">
          Click any zodiac sign for detailed predictions and personalized guidance
        </p>
      </div>
    </section>
  );
}

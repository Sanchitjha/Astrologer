import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { findPublicImage } from '@/lib/publicImage';

const zodiacData = {
  aries: {
    name: 'Aries',
    hindi: 'मेष',
    symbol: '♈',
    color: '#CC0000',
    element: 'Fire',
    ruler: 'Mars',
    lucky: 'Tuesday',
    luckyNum: '1, 9',
    stone: 'Red Coral',
    traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Passionate'],
    desc: 'Aries is the first sign of the zodiac and is ruled by Mars. Aries individuals are natural leaders who love to be first in everything. They are bold, ambitious, and dive headfirst into even the most challenging situations.',
    career: 'Military, Sports, Entrepreneurship, Engineering, Surgery',
    love: 'Aries is passionate and direct in love. Compatible with Leo, Sagittarius, and Gemini.',
  },
  taurus: {
    name: 'Taurus',
    hindi: 'वृषभ',
    symbol: '♉',
    color: '#2D8A4E',
    element: 'Earth',
    ruler: 'Venus',
    lucky: 'Friday',
    luckyNum: '2, 6',
    stone: 'Diamond / White Sapphire',
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Stable'],
    desc: 'Taurus is an earth sign ruled by Venus. Taurus individuals value security, luxury, and the finer things in life. They are hardworking, practical, and extremely loyal to those they love.',
    career: 'Finance, Agriculture, Art, Music, Real Estate',
    love: 'Taurus is sensual and committed. Most compatible with Virgo, Capricorn, and Cancer.',
  },
  gemini: {
    name: 'Gemini',
    hindi: 'मिथुन',
    symbol: '♊',
    color: '#D4AF37',
    element: 'Air',
    ruler: 'Mercury',
    lucky: 'Wednesday',
    luckyNum: '3, 5',
    stone: 'Emerald',
    traits: ['Adaptable', 'Outgoing', 'Intelligent', 'Curious', 'Witty', 'Versatile'],
    desc: 'Gemini is an air sign ruled by Mercury. Geminis are known for their quick wit, adaptability, and love of conversation. They have a dual nature that makes them versatile and multi-talented.',
    career: 'Journalism, Teaching, Sales, Writing, Communication',
    love: 'Gemini thrives on mental stimulation. Compatible with Libra, Aquarius, and Aries.',
  },
  cancer: {
    name: 'Cancer',
    hindi: 'कर्क',
    symbol: '♋',
    color: '#7B9EAD',
    element: 'Water',
    ruler: 'Moon',
    lucky: 'Monday',
    luckyNum: '2, 7',
    stone: 'Pearl',
    traits: ['Intuitive', 'Sentimental', 'Loyal', 'Protective', 'Imaginative', 'Caring'],
    desc: 'Cancer is a water sign ruled by the Moon. Cancerians are deeply emotional, intuitive, and sentimental. They are the nurturers of the zodiac, always putting family and loved ones first.',
    career: 'Healthcare, Education, Social Work, Hospitality, Real Estate',
    love: 'Cancer seeks emotional security. Most compatible with Scorpio, Pisces, and Taurus.',
  },
  leo: {
    name: 'Leo',
    hindi: 'सिंह',
    symbol: '♌',
    color: '#FF8C00',
    element: 'Fire',
    ruler: 'Sun',
    lucky: 'Sunday',
    luckyNum: '1, 4',
    stone: 'Ruby',
    traits: ['Generous', 'Warm-hearted', 'Creative', 'Humorous', 'Passionate', 'Loyal'],
    desc: 'Leo is a fire sign ruled by the Sun. Leos love to bask in the spotlight and celebrate themselves. They are natural-born leaders with a flair for drama and a passion for life.',
    career: 'Acting, Politics, Management, Entertainment, Luxury Brands',
    love: 'Leo is dramatic and generous in love. Compatible with Aries, Sagittarius, and Gemini.',
  },
  virgo: {
    name: 'Virgo',
    hindi: 'कन्या',
    symbol: '♍',
    color: '#8B9467',
    element: 'Earth',
    ruler: 'Mercury',
    lucky: 'Wednesday',
    luckyNum: '3, 6',
    stone: 'Emerald',
    traits: ['Analytical', 'Hardworking', 'Practical', 'Diligent', 'Reliable', 'Kind'],
    desc: 'Virgo is an earth sign ruled by Mercury. Virgos are analytical, meticulous, and service-oriented. They have an eye for detail and strive for perfection in everything they do.',
    career: 'Medicine, Accounting, Research, Writing, Nutrition',
    love: 'Virgo is devoted and thoughtful. Most compatible with Taurus, Capricorn, and Cancer.',
  },
  libra: {
    name: 'Libra',
    hindi: 'तुला',
    symbol: '♎',
    color: '#C490D1',
    element: 'Air',
    ruler: 'Venus',
    lucky: 'Friday',
    luckyNum: '6, 9',
    stone: 'Opal / Diamond',
    traits: ['Diplomatic', 'Fair', 'Idealistic', 'Social', 'Gracious', 'Artistic'],
    desc: 'Libra is an air sign ruled by Venus. Libras are obsessed with symmetry and strive to create equilibrium in all areas of life. They are charming, fair-minded, and love beauty.',
    career: 'Law, Diplomacy, Fashion, Art, Counseling',
    love: 'Libra seeks balance and harmony in love. Compatible with Gemini, Aquarius, and Leo.',
  },
  scorpio: {
    name: 'Scorpio',
    hindi: 'वृश्चिक',
    symbol: '♏',
    color: '#800000',
    element: 'Water',
    ruler: 'Mars / Pluto',
    lucky: 'Tuesday',
    luckyNum: '8, 9',
    stone: 'Red Coral',
    traits: ['Passionate', 'Stubborn', 'Resourceful', 'Brave', 'Loyal', 'Ambitious'],
    desc: 'Scorpio is a water sign ruled by Mars and Pluto. Scorpios are intense, passionate, and deeply mysterious. They have a magnetic personality and a powerful ability to transform and reinvent themselves.',
    career: 'Research, Investigation, Psychology, Surgery, Finance',
    love: 'Scorpio is intensely loyal. Most compatible with Cancer, Pisces, and Capricorn.',
  },
  sagittarius: {
    name: 'Sagittarius',
    hindi: 'धनु',
    symbol: '♐',
    color: '#9B59B6',
    element: 'Fire',
    ruler: 'Jupiter',
    lucky: 'Thursday',
    luckyNum: '3, 9',
    stone: 'Yellow Sapphire',
    traits: ['Generous', 'Idealistic', 'Great humor', 'Honest', 'Adventurous', 'Philosophical'],
    desc: 'Sagittarius is a fire sign ruled by Jupiter. Sagittarians are adventurers and philosophers who love exploring the world and seeking meaning. They are optimistic, enthusiastic, and love their freedom.',
    career: 'Travel, Philosophy, Teaching, Law, Publishing',
    love: 'Sagittarius loves freedom in love. Compatible with Aries, Leo, and Libra.',
  },
  capricorn: {
    name: 'Capricorn',
    hindi: 'मकर',
    symbol: '♑',
    color: '#555577',
    element: 'Earth',
    ruler: 'Saturn',
    lucky: 'Saturday',
    luckyNum: '4, 8',
    stone: 'Blue Sapphire',
    traits: ['Responsible', 'Disciplined', 'Self-control', 'Good managers', 'Patient', 'Ambitious'],
    desc: 'Capricorn is an earth sign ruled by Saturn. Capricorns are master planners who set ambitious goals and work tirelessly to achieve them. They value tradition, hard work, and perseverance.',
    career: 'Banking, Engineering, Administration, Politics, Real Estate',
    love: 'Capricorn is loyal and traditional. Most compatible with Taurus, Virgo, and Scorpio.',
  },
  aquarius: {
    name: 'Aquarius',
    hindi: 'कुम्भ',
    symbol: '♒',
    color: '#4A90D9',
    element: 'Air',
    ruler: 'Saturn / Uranus',
    lucky: 'Saturday',
    luckyNum: '4, 7',
    stone: 'Blue Sapphire',
    traits: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Intellectual', 'Friendly'],
    desc: 'Aquarius is an air sign ruled by Saturn and Uranus. Aquarians are progressive thinkers and humanitarians who want to change the world. They are independent, intellectual, and deeply idealistic.',
    career: 'Technology, Science, Social Activism, Invention, Astrology',
    love: 'Aquarius needs intellectual connection. Compatible with Gemini, Libra, and Sagittarius.',
  },
  pisces: {
    name: 'Pisces',
    hindi: 'मीन',
    symbol: '♓',
    color: '#2E86AB',
    element: 'Water',
    ruler: 'Jupiter / Neptune',
    lucky: 'Thursday',
    luckyNum: '3, 7',
    stone: 'Yellow Sapphire',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Selfless'],
    desc: 'Pisces is a water sign ruled by Jupiter and Neptune. Pisceans are deeply empathetic, imaginative, and spiritually oriented. They are the dreamers and artists of the zodiac.',
    career: 'Art, Music, Healing, Spirituality, Film, Poetry',
    love: 'Pisces is deeply romantic. Most compatible with Cancer, Scorpio, and Capricorn.',
  },
};

export async function generateStaticParams() {
  return Object.keys(zodiacData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const z = zodiacData[slug];
  if (!z) return { title: 'Zodiac Sign' };
  return {
    title: `${z.name} (${z.hindi}) Horoscope | Vedic Astrology`,
    description: `Detailed ${z.name} horoscope, personality traits, lucky gemstone, compatible signs, and personalized astrology guidance from Jyotish Shreenath Ji.`,
    keywords: [`${z.name} horoscope`, `${z.hindi} rashifal`, `${z.name} astrology`, 'Vedic astrology India'],
  };
}

export default async function ZodiacSignPage({ params }) {
  const { slug } = await params;
  const z = zodiacData[slug];
  if (!z) notFound();

  const allSlugs = Object.keys(zodiacData);
  const currentIdx = allSlugs.indexOf(slug);
  const prev = allSlugs[currentIdx - 1];
  const next = allSlugs[currentIdx + 1];
  const photo = findPublicImage('zodiac', slug);

  return (
    <>
      <PageHeader
        title={`${z.symbol} ${z.name}`}
        titleHindi={z.hindi}
        subtitle={`${z.element} Sign · Ruled by ${z.ruler}`}
        crumbs={[
          { label: 'Zodiac', href: '/#zodiac' },
          { label: z.name },
        ]}
      />

      <section className="py-20 px-4" style={{ background: '#FBF3E0' }}>
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Main symbol + info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Symbol card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center gap-4">
              {photo ? (
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-[#D4AF37]/30 shadow-[0_8px_28px_rgba(122,40,10,0.15)]">
                  <Image src={photo} alt={`${z.name} zodiac sign`} fill sizes="160px" className="object-cover" />
                </div>
              ) : (
                <span className="text-8xl" style={{ color: z.color }}>{z.symbol}</span>
              )}
              <div>
                <h2 className="text-2xl font-black text-[#2A1408]"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>{z.name}</h2>
                <p className="text-[#9E7016] text-xl mt-1"
                   style={{ fontFamily: 'var(--font-devanagari)' }}>{z.hindi}</p>
              </div>
              <div className="w-full border-t border-[#D4AF37]/15 pt-4 space-y-2 text-sm text-left">
                {[
                  ['Element', z.element],
                  ['Ruling Planet', z.ruler],
                  ['Lucky Day', z.lucky],
                  ['Lucky Numbers', z.luckyNum],
                  ['Lucky Stone', z.stone],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <span className="text-[#2A1408]/58">{k}</span>
                    <span className="text-[#9E7016]/80 font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description + traits */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-[#9E7016] font-bold mb-3"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>About {z.name}</h3>
                <p className="text-[#2A1408]/65 text-sm leading-relaxed">{z.desc}</p>
              </div>

              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-[#9E7016] font-bold mb-4"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>Key Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {z.traits.map((t) => (
                    <span key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium text-[#2A1408]/80
                                     border border-[#D4AF37]/25 bg-[#D4AF37]/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-[#9E7016] font-bold text-sm mb-2"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>Career</h3>
                  <p className="text-[#2A1408]/55 text-sm">{z.career}</p>
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-[#9E7016] font-bold text-sm mb-2"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>Love & Compatibility</h3>
                  <p className="text-[#2A1408]/55 text-sm">{z.love}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next nav */}
          <div className="flex justify-between gap-4 pt-4">
            {prev ? (
              <Link href={`/zodiac/${prev}`}
                    className="btn-outline-gold rounded-full px-6 py-2 text-sm"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                ← {zodiacData[prev].symbol} {zodiacData[prev].name}
              </Link>
            ) : <span />}
            {next && (
              <Link href={`/zodiac/${next}`}
                    className="btn-outline-gold rounded-full px-6 py-2 text-sm ml-auto"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                {zodiacData[next].symbol} {zodiacData[next].name} →
              </Link>
            )}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

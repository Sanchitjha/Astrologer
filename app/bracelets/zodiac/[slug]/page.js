import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { zodiacBracelets } from '@/data/zodiacBracelets';
import { findPublicImage } from '@/lib/publicImage';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return zodiacBracelets.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const z = zodiacBracelets.find((x) => x.slug === slug);
  if (!z) return {};
  return {
    title: `${z.sign} Zodiac Bracelet (${z.rashi}) — Benefits & Best Price`,
    description: `${z.intro} Recommended by Rohit Sharmaji — Jyotish Shreenath Ji.`,
    keywords: [`${z.sign.toLowerCase()} zodiac bracelet`, z.rashi.toLowerCase(), 'zodiac crystal bracelet'],
    openGraph: {
      title: `${z.sign} Zodiac Bracelet`,
      description: z.intro,
      images: ['/logo.jpg'],
    },
  };
}

export default async function ZodiacBraceletDetailPage({ params }) {
  const { slug } = await params;
  const z = zodiacBracelets.find((x) => x.slug === slug);
  if (!z) notFound();

  const photo = findPublicImage('bracelets/zodiac', z.slug);
  const idx = zodiacBracelets.findIndex((x) => x.slug === slug);
  const related = [
    zodiacBracelets[(idx + 1) % zodiacBracelets.length],
    zodiacBracelets[(idx + 2) % zodiacBracelets.length],
    zodiacBracelets[(idx + 3) % zodiacBracelets.length],
  ];

  return (
    <>
      <PageHeader
        title={`${z.sign} Zodiac Bracelet`}
        subtitle={z.rashi}
        crumbs={[
          { label: 'Bracelets', href: '/bracelets' },
          { label: 'Zodiac Bracelets', href: '/bracelets/zodiac' },
          { label: z.sign },
        ]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Main card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div
              className="relative flex items-center justify-center h-56 md:h-72 rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(204,0,0,0.06))' }}
            >
              {photo ? (
                <div className="absolute inset-5">
                  <Image src={photo} alt={`${z.sign} Zodiac Bracelet`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority />
                </div>
              ) : (
                <span className="text-8xl select-none" aria-hidden="true">♈</span>
              )}
            </div>

            <div className="space-y-5">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/25 text-[#9E7016]/70 bg-[#D4AF37]/5">
                {z.stones}
              </span>

              <h1 className="text-[#2A1408] text-xl md:text-2xl font-bold leading-snug"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                {z.sign} Zodiac Bracelet <span className="text-[#9E7016]/70 text-base">({z.rashi})</span>
              </h1>

              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{z.intro}</p>

              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(z.sign)}%20Zodiac%20Bracelet.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Enquire About This Bracelet →
              </a>
            </div>
          </div>

          {/* About */}
          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              About {z.sign} Zodiac Bracelet
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{z.about}</p>
          </div>

          {/* Who should wear */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Who Should Wear {z.sign} Zodiac Bracelet
            </h2>
            <ul className="space-y-2">
              {z.whoShouldWear.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span> {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {z.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#9E7016] text-xs mt-1">✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* How to wear */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Wear
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between gap-3 border-b border-[#D4AF37]/10 pb-2">
                <span className="text-[#2A1408]/50">Best Day to Start</span>
                <span className="text-[#9E7016] font-medium text-right">{z.day} (day of {z.planet})</span>
              </div>
              <div className="flex justify-between gap-3 border-b border-[#D4AF37]/10 pb-2">
                <span className="text-[#2A1408]/50">Stones</span>
                <span className="text-[#9E7016] font-medium text-right">{z.stones}</span>
              </div>
            </div>
            <p className="text-[#2A1408]/50 text-xs leading-relaxed pt-2">
              Wear on the left wrist to receive energy inward, or the right wrist to project it outward.
              Cleanse weekly with moonlight or pure water to keep the stones charged.
            </p>
          </div>

          {/* Related */}
          <div>
            <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
              Other Zodiac Bracelets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const rPhoto = findPublicImage('bracelets/zodiac', r.slug);
                return (
                  <Link
                    key={r.slug}
                    href={`/bracelets/zodiac/${r.slug}`}
                    className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                  >
                    {rPhoto ? (
                      <div className="relative w-14 h-14 mx-auto rounded-lg overflow-hidden">
                        <Image src={rPhoto} alt={r.sign} fill sizes="56px" className="object-cover" />
                      </div>
                    ) : (
                      <span className="text-3xl block" aria-hidden="true">♈</span>
                    )}
                    <p className="text-[#2A1408]/75 text-xs leading-snug">{r.sign} Bracelet</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link href="/bracelets/zodiac" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Zodiac Bracelets
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

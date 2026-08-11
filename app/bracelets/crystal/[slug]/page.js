import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { crystalBracelets } from '@/data/crystalBracelets';
import { findPublicImage } from '@/lib/publicImage';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return crystalBracelets.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = crystalBracelets.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.name} — Benefits & Best Price`,
    description: `${c.intro} Recommended by Rohit Sharmaji — Jyotish Shreenath Ji.`,
    keywords: [c.name.toLowerCase(), 'crystal bracelet', 'healing bracelet'],
    openGraph: {
      title: c.name,
      description: c.intro,
      images: ['/logo.jpg'],
    },
  };
}

export default async function CrystalBraceletDetailPage({ params }) {
  const { slug } = await params;
  const c = crystalBracelets.find((x) => x.slug === slug);
  if (!c) notFound();

  const photo = findPublicImage('bracelets/crystal', c.slug);
  const idx = crystalBracelets.findIndex((x) => x.slug === slug);
  const related = [
    crystalBracelets[(idx + 1) % crystalBracelets.length],
    crystalBracelets[(idx + 2) % crystalBracelets.length],
    crystalBracelets[(idx + 3) % crystalBracelets.length],
  ];

  return (
    <>
      <PageHeader
        title={c.name}
        subtitle={c.tagline}
        crumbs={[
          { label: 'Bracelets', href: '/bracelets' },
          { label: 'Crystal Bracelets', href: '/bracelets/crystal' },
          { label: c.name },
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
                  <Image src={photo} alt={c.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority />
                </div>
              ) : (
                <span className="text-8xl select-none" aria-hidden="true">💠</span>
              )}
            </div>

            <div className="space-y-5">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/25 text-[#9E7016]/70 bg-[#D4AF37]/5">
                {c.tagline}
              </span>

              <h1 className="text-[#2A1408] text-xl md:text-2xl font-bold leading-snug"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                {c.name}
              </h1>

              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{c.intro}</p>

              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(c.name)}.`}
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
              About {c.name}
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{c.about}</p>
          </div>

          {/* Who should wear */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Who Should Wear {c.name}
            </h2>
            <ul className="space-y-2">
              {c.whoShouldWear.map((w) => (
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
              {c.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#9E7016] text-xs mt-1">✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* How to wear */}
          <div className="glass-card rounded-2xl p-8 space-y-2">
            <h2 className="text-[#9E7016] font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Wear
            </h2>
            <div className="flex justify-between gap-3 border-b border-[#D4AF37]/10 pb-2 text-sm">
              <span className="text-[#2A1408]/50">Best Day to Start</span>
              <span className="text-[#9E7016] font-medium text-right">{c.day}</span>
            </div>
            <p className="text-[#2A1408]/50 text-xs leading-relaxed pt-2">
              Cleanse before first wear (moonlight overnight or pure water), set a clear intention when
              you first put it on, and cleanse weekly to keep the stones charged.
            </p>
          </div>

          {/* Related */}
          <div>
            <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
              Other Crystal Bracelets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const rPhoto = findPublicImage('bracelets/crystal', r.slug);
                return (
                  <Link
                    key={r.slug}
                    href={`/bracelets/crystal/${r.slug}`}
                    className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                  >
                    {rPhoto ? (
                      <div className="relative w-14 h-14 mx-auto rounded-lg overflow-hidden">
                        <Image src={rPhoto} alt={r.name} fill sizes="56px" className="object-cover" />
                      </div>
                    ) : (
                      <span className="text-3xl block" aria-hidden="true">💠</span>
                    )}
                    <p className="text-[#2A1408]/75 text-xs leading-snug line-clamp-2">{r.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link href="/bracelets/crystal" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Crystal Bracelets
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

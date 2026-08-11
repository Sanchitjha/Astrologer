import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { gemstones, gemstoneGroups } from '@/data/gemstones';
import { findPublicImage } from '@/lib/publicImage';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return gemstones.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const gem = gemstones.find((g) => g.slug === slug);
  if (!gem) return {};
  return {
    title: `${gem.name} — Benefits, How to Wear & Consultation`,
    description: `${gem.name} (${gem.hindiName}). ${gem.intro} Recommended by Rohit Sharmaji — Jyotish Shreenath Ji.`,
    keywords: [gem.name.toLowerCase(), 'buy gemstone', 'vedic gemstone', gem.planet.toLowerCase()],
    openGraph: {
      title: gem.name,
      description: gem.intro,
      images: ['/logo.jpg'],
    },
  };
}

export default async function GemstoneDetailPage({ params }) {
  const { slug } = await params;
  const gem = gemstones.find((g) => g.slug === slug);
  if (!gem) notFound();

  const photo = findPublicImage('gemstones', gem.slug);
  const groupLabel = gemstoneGroups.find((g) => g.key === gem.group)?.label || gem.group;
  const related = gemstones.filter((g) => g.group === gem.group && g.slug !== gem.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={gem.name}
        subtitle={groupLabel}
        crumbs={[{ label: 'Gemstones', href: '/gemstones' }, { label: gem.name }]}
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
                  <Image src={photo} alt={gem.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority />
                </div>
              ) : (
                <span className="text-8xl select-none" aria-hidden="true">💎</span>
              )}
            </div>

            <div className="space-y-5">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/25 text-[#9E7016]/70 bg-[#D4AF37]/5">
                Ruling Planet: {gem.planet}
              </span>

              <div>
                <h1 className="text-[#2A1408] text-xl md:text-2xl font-bold leading-snug"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {gem.name}
                </h1>
                <p className="text-[#9E7016]/70 text-sm mt-1" style={{ fontFamily: 'var(--font-devanagari)' }}>
                  {gem.hindiName}
                </p>
              </div>

              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{gem.intro}</p>

              <a
                href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20a%20consultation%20about%20the"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Consult for {gem.name.split('(')[0].trim()} →
              </a>
              <p className="text-[#2A1408]/42 text-xs text-center">
                Gemstone suitability depends on your birth chart. Consult before purchasing.
              </p>
            </div>
          </div>

          {/* About */}
          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              About {gem.name}
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{gem.about}</p>
          </div>

          {/* How to wear */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Wear {gem.name.split('(')[0].trim()}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ['Metal', gem.howToWear.metal],
                ['Finger', gem.howToWear.finger],
                ['Day & Time', gem.howToWear.day],
                ['Mantra', gem.howToWear.mantra],
                ['Recommended Weight', gem.howToWear.weight],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 border-b border-[#D4AF37]/10 pb-2">
                  <span className="text-[#2A1408]/50">{k}</span>
                  <span className="text-[#9E7016] font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who should wear */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Who Should Wear {gem.name.split('(')[0].trim()}?
            </h2>
            <ul className="space-y-2">
              {gem.whoShouldWear.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span> {w}
                </li>
              ))}
            </ul>
            {gem.whoShouldNotWear && (
              <p className="text-[#2A1408]/50 text-xs leading-relaxed border-t border-[#D4AF37]/10 pt-4">
                <strong className="text-[#2A1408]/70">Who should not wear:</strong> {gem.whoShouldNotWear}
              </p>
            )}
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {gem.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#9E7016] text-xs mt-1">✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="glass-card rounded-2xl p-8 space-y-5">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {gem.faqs.map((f) => (
                <div key={f.q} className="border-b border-[#D4AF37]/10 pb-4 last:border-0 last:pb-0">
                  <p className="text-[#2A1408] font-semibold text-sm mb-1.5">{f.q}</p>
                  <p className="text-[#2A1408]/55 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
                Related Gemstones
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => {
                  const rPhoto = findPublicImage('gemstones', r.slug);
                  return (
                    <Link
                      key={r.slug}
                      href={`/gemstones/${r.slug}`}
                      className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                    >
                      {rPhoto ? (
                        <div className="relative w-14 h-14 mx-auto rounded-lg overflow-hidden">
                          <Image src={rPhoto} alt={r.name} fill sizes="56px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-3xl block" aria-hidden="true">💎</span>
                      )}
                      <p className="text-[#2A1408]/75 text-xs leading-snug line-clamp-2">{r.name}</p>
                      <p className="text-[#9E7016] font-bold text-xs">{r.planet}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/gemstones" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Gemstones
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

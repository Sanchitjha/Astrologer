import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { malas } from '@/data/malas';
import { findPublicImage } from '@/lib/publicImage';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return malas.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const mala = malas.find((m) => m.slug === slug);
  if (!mala) return {};
  return {
    title: `${mala.name} — Benefits & How to Wear`,
    description: `${mala.name}. ${mala.intro} Recommended by Rohit Sharmaji — Jyotish Shreenath Ji.`,
    keywords: [mala.name.toLowerCase(), 'buy mala', 'sacred beads', mala.deity.toLowerCase()],
    openGraph: {
      title: mala.name,
      description: mala.intro,
      images: ['/logo.jpg'],
    },
  };
}

export default async function MalaDetailPage({ params }) {
  const { slug } = await params;
  const mala = malas.find((m) => m.slug === slug);
  if (!mala) notFound();

  const photo = findPublicImage('mala', mala.slug);
  const related = malas.filter((m) => m.slug !== mala.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={mala.name}
        subtitle="Sacred Mala"
        crumbs={[{ label: 'Mala', href: '/mala' }, { label: mala.name }]}
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
                  <Image src={photo} alt={mala.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority />
                </div>
              ) : (
                <span className="text-8xl select-none" aria-hidden="true">📿</span>
              )}
            </div>

            <div className="space-y-5">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/25 text-[#9E7016]/70 bg-[#D4AF37]/5">
                {mala.deity}
              </span>

              <h1 className="text-[#2A1408] text-xl md:text-2xl font-bold leading-snug"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                {mala.name}
              </h1>

              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{mala.intro}</p>

              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20to%20know%20more%20about%20the%20${encodeURIComponent(mala.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Enquire About This Mala →
              </a>
            </div>
          </div>

          {/* About */}
          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              About {mala.name}
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{mala.about}</p>
          </div>

          {/* How to wear */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Wear / Use
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                ['Thread', mala.howToWear.thread],
                ['Wear On', mala.howToWear.wearOn],
                ['Mantra', mala.howToWear.mantra],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 border-b border-[#D4AF37]/10 pb-2">
                  <span className="text-[#2A1408]/50">{k}</span>
                  <span className="text-[#9E7016] font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-[#2A1408]/50 text-xs leading-relaxed pt-2">{mala.howToWear.note}</p>
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {mala.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#9E7016] text-xs mt-1">✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
                Other Malas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => {
                  const rPhoto = findPublicImage('mala', r.slug);
                  return (
                    <Link
                      key={r.slug}
                      href={`/mala/${r.slug}`}
                      className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                    >
                      {rPhoto ? (
                        <div className="relative w-14 h-14 mx-auto rounded-lg overflow-hidden">
                          <Image src={rPhoto} alt={r.name} fill sizes="56px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-3xl block" aria-hidden="true">📿</span>
                      )}
                      <p className="text-[#2A1408]/75 text-xs leading-snug line-clamp-2">{r.name}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/mala" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Mala
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

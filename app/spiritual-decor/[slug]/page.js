import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { spiritualDecor } from '@/data/spiritualDecor';
import { findPublicImage } from '@/lib/publicImage';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return spiritualDecor.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = spiritualDecor.find((d) => d.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.metaDesc,
    keywords: [item.title.split(' — ')[0].toLowerCase(), 'pooja decor', 'spiritual decor online'],
    openGraph: {
      title: item.title,
      description: item.metaDesc,
      images: ['/logo.jpg'],
    },
  };
}

export default async function SpiritualDecorDetailPage({ params }) {
  const { slug } = await params;
  const item = spiritualDecor.find((d) => d.slug === slug);
  if (!item) notFound();

  const shortTitle = item.title.split(' — ')[0];
  const photo = findPublicImage('spiritual-decor', item.slug);
  const related = spiritualDecor.filter((d) => d.slug !== item.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={shortTitle}
        subtitle="Pooja & Spiritual Decor"
        crumbs={[{ label: 'Pooja & Spiritual Decor', href: '/spiritual-decor' }, { label: shortTitle }]}
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
                  <Image src={photo} alt={shortTitle} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" priority />
                </div>
              ) : (
                <span className="text-8xl select-none" aria-hidden="true">{item.icon}</span>
              )}
            </div>

            <div className="space-y-5">
              <h1 className="text-[#2A1408] text-xl md:text-2xl font-bold leading-snug"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                {shortTitle}
              </h1>

              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{item.intro}</p>

              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(shortTitle)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Enquire on WhatsApp →
              </a>
            </div>
          </div>

          {/* About */}
          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              About {shortTitle}
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{item.about}</p>
          </div>

          {/* How to use */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How to Use / Place
            </h2>
            <div className="space-y-2.5">
              {item.howToUse.map((h) => (
                <div key={h} className="flex items-start gap-2 text-sm">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span>
                  <p className="text-[#2A1408]/60">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {item.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#9E7016] text-xs mt-1">✓</span> {b}
                </div>
              ))}
            </div>
          </div>

          {/* FAQs (only present on some items, e.g. Shankh) */}
          {item.faqs && item.faqs.length > 0 && (
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {item.faqs.map((f) => (
                  <div key={f.q} className="border-b border-[#D4AF37]/10 pb-3 last:border-0 last:pb-0">
                    <p className="text-[#2A1408] font-semibold text-sm mb-1">{f.q}</p>
                    <p className="text-[#2A1408]/55 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
                More From This Collection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => {
                  const rShort = r.title.split(' — ')[0];
                  const rPhoto = findPublicImage('spiritual-decor', r.slug);
                  return (
                    <Link
                      key={r.slug}
                      href={`/spiritual-decor/${r.slug}`}
                      className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                    >
                      {rPhoto ? (
                        <div className="relative w-14 h-14 mx-auto rounded-lg overflow-hidden">
                          <Image src={rPhoto} alt={rShort} fill sizes="56px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-3xl block" aria-hidden="true">{r.icon}</span>
                      )}
                      <p className="text-[#2A1408]/75 text-xs leading-snug line-clamp-2">{rShort}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/spiritual-decor" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Collections
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

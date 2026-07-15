import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { yantras } from '@/data/yantras';
import { formatINR } from '@/lib/utils';
import { findPublicImage } from '@/lib/publicImage';
import PageHeader from '@/components/PageHeader';

export async function generateStaticParams() {
  return yantras.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }) {
  const yantra = yantras.find((y) => y.slug === params.slug);
  if (!yantra) return {};
  return {
    title: `${yantra.name} — Buy Authentic Yantra`,
    description: `${yantra.name}. ${yantra.desc} Price: ${formatINR(yantra.salePrice)}. Energised & authentic. Recommended by Rohit Sharmaji — Jyotish Shreenath Ji.`,
    keywords: [yantra.name.toLowerCase(), 'buy yantra', 'authentic yantra', 'energised yantra india'],
    openGraph: {
      title: yantra.name,
      description: yantra.desc,
      images: ['/logo.jpg'],
    },
  };
}

export default function YantraDetailPage({ params }) {
  const yantra = yantras.find((y) => y.slug === params.slug);
  if (!yantra) notFound();

  const related = yantras.filter((y) => y.category === yantra.category && y.id !== yantra.id).slice(0, 3);
  const photo = findPublicImage('yantras', yantra.slug);

  return (
    <>
      <PageHeader
        title={yantra.name}
        subtitle="Sacred Yantra"
        crumbs={[{ label: 'Yantras', href: '/yantras' }, { label: yantra.name }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Main card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            {/* Product image */}
            <div
              className="relative flex items-center justify-center h-56 md:h-72 rounded-2xl overflow-hidden"
              style={{ background: photo ? undefined : 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(204,0,0,0.06))' }}
            >
              {photo ? (
                <Image
                  src={photo}
                  alt={yantra.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <span className="text-8xl md:text-9xl text-[#9E7016]/50 float-anim select-none"
                      aria-hidden="true" style={{ fontFamily: 'var(--font-devanagari)' }}>
                  ॐ
                </span>
              )}
            </div>

            {/* Info */}
            <div className="space-y-5">
              {yantra.discountPercent > 0 && (
                <span className="inline-block btn-crimson !py-1 !px-3 !rounded-full text-xs">
                  {yantra.discountPercent}% OFF
                </span>
              )}

              <h1 className="text-[#2A1408] text-xl md:text-2xl font-bold leading-snug"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
                {yantra.name}
              </h1>

              <p className="text-[#2A1408]/55 text-sm leading-relaxed">{yantra.desc}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-[#C1102E]"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {formatINR(yantra.salePrice)}
                </span>
                {yantra.originalPrice !== yantra.salePrice && (
                  <span className="text-[#2A1408]/48 line-through text-sm">{formatINR(yantra.originalPrice)}</span>
                )}
              </div>

              {/* Benefits */}
              {yantra.benefits && (
                <div className="space-y-1.5">
                  {yantra.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-[#2A1408]/60">
                      <span className="text-[#9E7016] text-xs">✦</span> {b}
                    </div>
                  ))}
                </div>
              )}

              <a
                href={yantra.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Buy Now — GemsMantra →
              </a>

              <p className="text-[#2A1408]/42 text-xs text-center">
                Authentic & energised · Sourced from GemsMantra.com
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
                Related Yantras
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => {
                  const rPhoto = findPublicImage('yantras', r.slug);
                  return (
                    <Link
                      key={r.id}
                      href={`/yantras/${r.slug}`}
                      className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                    >
                      {rPhoto ? (
                        <div className="relative w-14 h-14 mx-auto rounded-lg overflow-hidden">
                          <Image src={rPhoto} alt={r.name} fill sizes="56px" className="object-cover" />
                        </div>
                      ) : (
                        <span className="text-3xl text-[#9E7016]/50 block"
                              style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
                      )}
                      <p className="text-[#2A1408]/75 text-xs leading-snug line-clamp-2">{r.name}</p>
                      <p className="text-[#C1102E] font-bold text-sm">{formatINR(r.salePrice)}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/yantras" className="btn-outline-gold"
                  style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Yantras
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

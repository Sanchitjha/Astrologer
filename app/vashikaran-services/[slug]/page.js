import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vashikaranServices } from '@/data/vashikaranServices';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return vashikaranServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = vashikaranServices.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} | Rohit Sharma`,
    description: s.metaDesc,
    keywords: [s.title.toLowerCase()],
    openGraph: {
      title: s.title,
      description: s.metaDesc,
      images: ['/logo.jpg'],
    },
  };
}

export default async function VashikaranServiceDetailPage({ params }) {
  const { slug } = await params;
  const s = vashikaranServices.find((x) => x.slug === slug);
  if (!s) notFound();

  const idx = vashikaranServices.findIndex((x) => x.slug === slug);
  const related = [
    vashikaranServices[(idx + 1) % vashikaranServices.length],
    vashikaranServices[(idx + 2) % vashikaranServices.length],
  ];

  return (
    <>
      <PageHeader
        title={s.title}
        subtitle="Belief-Based Guidance"
        crumbs={[{ label: 'Vashikaran & Tantrik Services', href: '/vashikaran-services' }, { label: s.title }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <p className="text-[#2A1408]/65 text-sm leading-relaxed">{s.intro}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              {s.sectionHeading}
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{s.sectionBody}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              {s.areasHeading}
            </h2>
            <ul className="space-y-2">
              {s.areas.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span> {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Why Choose Rohit Sharma
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{s.whyChoose}</p>
          </div>

          <p className="text-center text-[#2A1408]/38 text-xs">
            All remedies are offered as traditional, belief-based practices intended to bring
            comfort and clarity — not as medical treatment or a diagnosis of any kind. Every
            consultation is confidential.
          </p>

          {/* Related */}
          <div>
            <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/vashikaran-services/${r.slug}`}
                  className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                >
                  <span className="text-2xl block">🕉️</span>
                  <p className="text-[#2A1408]/75 text-xs leading-snug">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/vashikaran-services" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Services
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

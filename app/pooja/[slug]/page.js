import Link from 'next/link';
import { notFound } from 'next/navigation';
import { poojaServices } from '@/data/poojaServices';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export async function generateStaticParams() {
  return poojaServices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = poojaServices.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | Book with Rohit Sharma`,
    description: p.metaDesc,
    keywords: [p.title.toLowerCase()],
    openGraph: {
      title: p.title,
      description: p.metaDesc,
      images: ['/logo.jpg'],
    },
  };
}

export default async function PoojaDetailPage({ params }) {
  const { slug } = await params;
  const p = poojaServices.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = poojaServices.findIndex((x) => x.slug === slug);
  const related = [
    poojaServices[(idx + 1) % poojaServices.length],
    poojaServices[(idx + 2) % poojaServices.length],
  ];

  return (
    <>
      <PageHeader
        title={p.title}
        subtitle="Sacred Vedic Ritual"
        crumbs={[{ label: 'Pooja', href: '/pooja' }, { label: p.title.split('—')[0].trim() }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">

          <div className="glass-card rounded-2xl p-8 space-y-4 text-center">
            <span className="text-5xl block">{p.icon}</span>
            <p className="text-[#2A1408]/65 text-sm leading-relaxed text-left">{p.intro}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              About This Ritual
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{p.about}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Benefits
            </h2>
            <ul className="space-y-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Booking */}
          <div className="glass-card rounded-2xl p-8 text-center space-y-5">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Book This Pooja
            </h2>
            <p className="text-[#2A1408]/55 text-sm leading-relaxed max-w-xl mx-auto">
              Contact us with your preferred date and location. Our team will prepare a complete
              list of required samagri (materials) and guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7600010811" className="btn-gold rounded-full px-8 py-3 text-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
                📞 Call to Book
              </a>
              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(p.title.split('—')[0].trim())}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold rounded-full px-8 py-3 text-sm"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Related */}
          <div>
            <h2 className="text-[#2A1408]/60 text-sm font-semibold mb-5 text-center section-label">
              Other Poojas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/pooja/${r.slug}`}
                  className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                >
                  <span className="text-2xl block">{r.icon}</span>
                  <p className="text-[#2A1408]/75 text-xs leading-snug">{r.title.split('—')[0].trim()}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/pooja" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Poojas
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

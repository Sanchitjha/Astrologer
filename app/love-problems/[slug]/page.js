import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loveProblems } from '@/data/loveProblems';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';
import ServiceFAQ from '@/components/ServiceFAQ';

export async function generateStaticParams() {
  return loveProblems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = loveProblems.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title} | Rohit Sharma`,
    description: p.metaDesc,
    keywords: [p.title.toLowerCase(), 'love problem solution', 'love astrologer'],
    openGraph: {
      title: p.title,
      description: p.metaDesc,
      images: ['/logo.jpg'],
    },
  };
}

export default async function LoveProblemDetailPage({ params }) {
  const { slug } = await params;
  const p = loveProblems.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = loveProblems.findIndex((x) => x.slug === slug);
  const related = [
    loveProblems[(idx + 1) % loveProblems.length],
    loveProblems[(idx + 2) % loveProblems.length],
  ];

  return (
    <>
      <PageHeader
        title={p.title}
        subtitle="Love & Relationship Guidance"
        crumbs={[{ label: 'Love Problems', href: '/love-problems' }, { label: p.title }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">

          <div className="glass-card rounded-2xl p-8 space-y-4 text-center">
            <span className="text-5xl block">{p.icon}</span>
            <p className="text-[#2A1408]/65 text-sm leading-relaxed text-left">{p.intro}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              How Rohit Sharmaji Helps
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{p.about}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              What You Get
            </h2>
            <ul className="space-y-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span> {b}
                </li>
              ))}
            </ul>
          </div>

          <ServiceFAQ faqs={p.faqs} />

          {/* Contact CTA inline */}
          <div className="glass-card rounded-2xl p-8 text-center space-y-5">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Get Quick Response
            </h2>
            <p className="text-[#2A1408]/55 text-sm leading-relaxed max-w-xl mx-auto">
              Share your details and Rohit Sharmaji will personally guide you — every consultation
              stays completely confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7600010811" className="btn-gold rounded-full px-8 py-3 text-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20guidance%20on%20${encodeURIComponent(p.title)}.`}
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
              Other Love Problem Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/love-problems/${r.slug}`}
                  className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                >
                  <span className="text-2xl block">{r.icon}</span>
                  <p className="text-[#2A1408]/75 text-xs leading-snug">{r.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/love-problems" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Love Problem Solutions
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

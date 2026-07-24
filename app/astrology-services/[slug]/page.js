'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generalServices } from '@/data/generalServices';
import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export default function AstrologyServiceDetailPage({ params }) {
  const s = generalServices.find((x) => x.slug === params.slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!s) notFound();

  const idx = generalServices.findIndex((x) => x.slug === params.slug);
  const related = [
    generalServices[(idx + 1) % generalServices.length],
    generalServices[(idx + 2) % generalServices.length],
  ];

  return (
    <>
      <PageHeader
        title={s.title}
        subtitle="Vedic Astrology Guidance"
        crumbs={[{ label: 'Astrology Services', href: '/astrology-services' }, { label: s.title.split('—')[0].trim() }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">

          <div className="glass-card rounded-2xl p-8 space-y-4 text-center">
            <span className="text-5xl block">{s.icon}</span>
            <p className="text-[#2A1408]/65 text-sm leading-relaxed text-left">{s.intro}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              {s.sectionHeading}
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">{s.sectionBody}</p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              What We Cover
            </h2>
            <ul className="space-y-2">
              {s.areas.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                  <span className="text-[#C1102E] text-xs mt-1">✦</span> {a}
                </li>
              ))}
            </ul>
          </div>

          {s.note && (
            <div className="glass-card rounded-2xl p-6 bg-[#D4AF37]/5">
              <p className="text-[#2A1408]/55 text-xs leading-relaxed">
                <strong className="text-[#9E7016]">Note:</strong> {s.note}
              </p>
            </div>
          )}

          {s.faqs && s.faqs.length > 0 && (
            <div className="glass-card rounded-2xl p-8 space-y-3">
              <h2 className="text-[#9E7016] font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3" role="list">
                {s.faqs.map((f, i) => (
                  <div key={f.q} className="border-b border-[#D4AF37]/10 pb-3 last:border-0 last:pb-0" role="listitem">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left"
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-[#2A1408]/85 font-medium text-sm">{f.q}</span>
                      <span className={`text-[#C1102E] text-lg shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <p className="text-[#2A1408]/55 text-sm leading-relaxed mt-2">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA inline */}
          <div className="glass-card rounded-2xl p-8 text-center space-y-5">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Get Quick Response
            </h2>
            <p className="text-[#2A1408]/55 text-sm leading-relaxed max-w-xl mx-auto">
              Share your details and Rohit Sharmaji will personally guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7600010811" className="btn-gold rounded-full px-8 py-3 text-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
                📞 Call Now
              </a>
              <a
                href={`https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20would%20like%20guidance%20on%20${encodeURIComponent(s.title.split('—')[0].trim())}.`}
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
              Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/astrology-services/${r.slug}`}
                  className="glass-card rounded-xl p-4 text-center space-y-2 hover:border-[#D4AF37]/50 transition-all"
                >
                  <span className="text-2xl block">{r.icon}</span>
                  <p className="text-[#2A1408]/75 text-xs leading-snug">{r.title.split('—')[0].trim()}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/astrology-services" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
              ← View All Services
            </Link>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

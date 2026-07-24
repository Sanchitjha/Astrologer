'use client';

import { useState } from 'react';

export default function ServiceFAQ({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl p-8 space-y-3">
      <h2 className="text-[#9E7016] font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-3" role="list">
        {faqs.map((f, i) => (
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
  );
}

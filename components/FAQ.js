'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do you keep my personal information confidential?',
    a: 'Yes — every consultation, whether by phone, WhatsApp, or online, is handled with complete privacy. Your personal details and birth information are never shared with anyone.',
  },
  {
    q: 'Why should I choose Rohit Sharma for astrology consultation?',
    a: 'Rohit Sharma is known for accurate predictions, deep knowledge of Vedic astrology, and practical remedies that are easy to follow. Years of experience and a large base of satisfied clients make him a trusted choice for genuine guidance.',
  },
  {
    q: 'Is astrology prediction really accurate?',
    a: 'Predictions are based on your exact birth chart (Janam Kundali) and time-tested Vedic principles — not guesswork. This gives meaningful, personalized insights rather than generic forecasts.',
  },
  {
    q: 'How can I book a consultation?',
    a: "You can book a session directly through the website by filling out the contact form, calling, or messaging on WhatsApp. Once booked, you'll receive guidance through a call, WhatsApp, or online session as per your convenience.",
  },
  {
    q: 'What details do I need to share for a consultation?',
    a: "You'll need to share your accurate date, time, and place of birth. These details are essential for preparing a correct birth chart and giving precise predictions.",
  },
  {
    q: 'What is horoscope astrology?',
    a: 'Horoscope astrology means studying your Janam Kundali (birth chart) to understand how planetary positions at the time of your birth affect your personality, relationships, career, and major life events.',
  },
  {
    q: 'What problems can be solved through astrology?',
    a: 'Astrology consultation can help with love and relationship problems, marriage and family issues, career and business challenges, health concerns, financial matters, and removing negative planetary effects (dosh) through proper remedies.',
  },
  {
    q: 'Are the remedies suggested safe and easy to follow?',
    a: 'Yes — all remedies suggested are simple, practical, and rooted in genuine astrological practice. There is no encouragement of anything harmful or unethical.',
  },
  {
    q: 'Do you offer online consultations for people outside India?',
    a: 'Yes, consultations are available for clients across India and abroad through phone, WhatsApp, and online video calls — so location is never a barrier to getting guidance.',
  },
  {
    q: 'How long does it take to see results after a remedy?',
    a: 'The time required varies from person to person, depending on the nature of the problem and the planetary positions involved. Your astrologer will give you a realistic idea of what to expect during the consultation.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'linear-gradient(180deg, #050005 0%, #0A0005 100%)' }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Common Questions</p>
          <h2 id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="space-y-3" role="list">
          {faqs.map((item, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden" role="listitem">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left
                           hover:bg-[#D4AF37]/5 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-white/85 font-medium text-sm pr-4">{item.q}</span>
                <span className={`text-[#D4AF37] text-xl shrink-0 transition-transform duration-300
                                  ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-white/55 text-sm leading-relaxed border-t border-[#D4AF37]/10 pt-4">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Vedic Astrology Services — Kundali, Vastu, Gemstones & More',
  description:
    'Expert Vedic astrology services by Rohit Sharmaji: Kundali Vishleshan, Yantra Puja, Vastu Shastra, Gemstone Therapy, Rashifal, and Dosh Nivaran. Call 76000 10811.',
  keywords: [
    'kundali vishleshan', 'vastu shastra consultation', 'gemstone advice',
    'vedic astrology services', 'dosh nivaran', 'rashifal', 'muhurat',
    'astrology consultation india',
  ],
  openGraph: {
    title: 'Vedic Astrology Services | Jyotish Shreenath Ji',
    description: 'Kundali, Yantra, Vastu, Gemstone Therapy & more by Rohit Sharmaji.',
    images: ['/logo.jpg'],
  },
};

const services = [
  {
    icon: '🔭',
    label: 'Kundali Vishleshan',
    labelHindi: 'कुंडली विश्लेषण',
    desc: 'A thorough birth chart reading covering career, marriage, health, finance, and spiritual growth. Understand your planetary strengths, weaknesses, and life timeline.',
    benefits: ['Life path clarity', 'Career guidance', 'Relationship compatibility', 'Health insights'],
  },
  {
    icon: '🪬',
    label: 'Yantra Puja',
    labelHindi: 'यंत्र पूजा',
    desc: 'Sacred geometric instruments energised through Vedic rituals. Yantras attract positive energies, repel negativity, and amplify your intentions for wealth, health, or protection.',
    benefits: ['Wealth & prosperity', 'Protection from evil eye', 'Spiritual growth', 'Home harmony'],
  },
  {
    icon: '🏠',
    label: 'Vastu Shastra',
    labelHindi: 'वास्तु शास्त्र',
    desc: 'Align your living and working spaces with the five elements and cosmic energy flows. Correct Vastu eliminates obstacles and brings lasting peace and success.',
    benefits: ['Home harmony', 'Business growth', 'Health improvement', 'Family peace'],
  },
  {
    icon: '💎',
    label: 'Ratna Therapy',
    labelHindi: 'रत्न चिकित्सा',
    desc: 'Precise gemstone recommendations based on your birth chart and planetary periods. Wearing the right gemstone can significantly boost your lucky planets.',
    benefits: ['Planetary strengthening', 'Career boost', 'Health benefits', 'Relationship improvement'],
  },
  {
    icon: '📅',
    label: 'Rashifal & Muhurat',
    labelHindi: 'राशिफल और मुहूर्त',
    desc: 'Monthly and yearly horoscope analysis plus auspicious timing for weddings, business launches, property purchases, travel, and any important life event.',
    benefits: ['Auspicious dates', 'Marriage muhurat', 'Business launch timing', 'Travel planning'],
  },
  {
    icon: '🌙',
    label: 'Dosh Nivaran',
    labelHindi: 'दोष निवारण',
    desc: 'Targeted remedies for Kaal Sarp Dosh, Mangal Dosh, Pitra Dosh, Shani Dosh, and other planetary afflictions. Includes Yantra, mantra, and ritual guidance.',
    benefits: ['Marriage obstacles removed', 'Career blockages cleared', 'Health doshas resolved', 'Family peace'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        titleHindi="हमारी सेवाएँ"
        subtitle="Vedic Wisdom for Modern Life"
        crumbs={[{ label: 'Services' }]}
      />

      <main className="bg-[#050005] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <article
                key={s.label}
                className="glass-card rounded-2xl p-7 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{s.icon}</span>
                  <div>
                    <h2 className="text-[#D4AF37] font-bold text-lg leading-tight"
                        style={{ fontFamily: 'var(--font-cinzel)' }}>
                      {s.label}
                    </h2>
                    <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-devanagari)' }}>
                      {s.labelHindi}
                    </p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.benefits.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-3 py-1 rounded-full border border-[#D4AF37]/25 text-[#D4AF37]/70"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-white/40 mb-6 text-sm">
              Ready to transform your life with Vedic wisdom?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:7600010811" className="btn-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                📞 Call 76000 10811
              </a>
              <Link href="/contact" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

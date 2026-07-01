import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'About — Rohit Sharmaji | Jyotish Shreenath Ji',
  description:
    'Learn about Rohit Sharmaji — Vedic Astrologer with 20+ years of experience in Kundali Vishleshan, Yantra, Vastu, and Gemstone guidance. Jyotish Shreenath Ji.',
  keywords: ['rohit sharmaji', 'about jyotish shreenath ji', 'vedic astrologer biography', 'expert astrologer india'],
  openGraph: {
    title: 'About Rohit Sharmaji | Jyotish Shreenath Ji',
    description: 'Vedic Astrologer with 20+ years of experience. Kundali, Yantra, Vastu, Gemstones.',
    images: ['/logo.jpg'],
  },
};

const services = [
  { icon: '🔭', label: 'Kundali Vishleshan', desc: 'In-depth birth chart analysis revealing your life path, strengths, and challenges.' },
  { icon: '🪬', label: 'Yantra Puja', desc: 'Sacred geometric instruments energised with Vedic mantras for prosperity and protection.' },
  { icon: '🏠', label: 'Vastu Shastra', desc: 'Harmonise your home and workplace with cosmic energy flows for peace and success.' },
  { icon: '💎', label: 'Ratna Therapy', desc: 'Precision gemstone recommendations aligned with your planetary positions and birth chart.' },
  { icon: '📅', label: 'Rashifal & Muhurat', desc: 'Auspicious timing guidance for marriages, business launches, and major decisions.' },
  { icon: '🌙', label: 'Dosh Nivaran', desc: 'Proven remedies for Kaal Sarp, Mangal, Pitra, and other planetary doshas.' },
];

const milestones = [
  { year: '2004', event: 'Began formal Jyotish studies in Varanasi' },
  { year: '2008', event: 'First public consultation practice' },
  { year: '2015', event: 'Guided 5,000+ families across India' },
  { year: '2020', event: 'Launched online consultations' },
  { year: '2024', event: '10,000+ clients served' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Jyotish Shreenath Ji"
        titleHindi="हमारे बारे में"
        subtitle="About Us"
        crumbs={[{ label: 'About' }]}
      />

      <main className="bg-[#050005]">
        {/* Bio section */}
        <section className="py-20 px-4" style={{ background: 'radial-gradient(ellipse at 50% 50%, #0D0005 0%, #050005 100%)' }}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-full border border-dashed border-[#D4AF37]/20 spin-slow"
                  aria-hidden="true"
                />
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full ring-4 ring-[#D4AF37]/30 shadow-[0_0_80px_rgba(212,175,55,0.15)] overflow-hidden bg-[#0D0005] p-4">
                  <Image
                    src="/logo.jpg"
                    alt="Rohit Sharmaji — Vedic Astrologer"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5">
              <span className="inline-block btn-crimson !py-1.5 !px-4 !rounded-full text-xs !font-semibold">
                20+ Years of Vedic Wisdom
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight text-white"
                style={{ fontFamily: 'var(--font-cinzel)' }}
              >
                Rohit Sharmaji
                <span className="block text-[#D4AF37] text-xl md:text-2xl mt-1">Expert Vedic Astrologer</span>
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                With over two decades of dedicated practice in Vedic Jyotish, Rohit Sharmaji has guided
                thousands of families towards prosperity, peace, and purpose. His expertise spans Kundali
                analysis, Yantra remedies, Vastu consultation, and planetary gemstone advice.
              </p>
              <p className="text-white/65 text-base leading-relaxed">
                Rooted in the ancient Vaishnav tradition, every reading is conducted with deep devotion
                and precision — providing practical, actionable solutions aligned with the cosmic energies
                at play in your life.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="tel:7600010811" className="btn-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  📞 Book Consultation
                </a>
                <Link href="/yantras" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  View Yantras
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Journey timeline */}
        <section className="py-16 px-4 border-t border-[#D4AF37]/10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-label mb-3">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
              The Path of <span className="text-[#D4AF37]">Jyotish</span>
            </h2>
          </div>
          <div className="max-w-xl mx-auto space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="glass-card rounded-2xl px-6 py-4 flex items-center gap-5">
                <span className="text-[#FFD700] font-black text-sm shrink-0"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>{m.year}</span>
                <div className="w-px h-10 bg-[#D4AF37]/30 shrink-0" />
                <p className="text-white/75 text-sm">{m.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 px-4 border-t border-[#D4AF37]/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label mb-3">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
                What We <span className="text-[#D4AF37]">Offer</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-6 space-y-3"
                >
                  <span className="text-4xl block">{s.icon}</span>
                  <h3 className="text-[#D4AF37] font-bold text-base" style={{ fontFamily: 'var(--font-cinzel)' }}>
                    {s.label}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

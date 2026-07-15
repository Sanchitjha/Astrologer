import Link from 'next/link';
import Image from 'next/image';

const specializations = [
  'Kundli Reading', 'Marriage Matching', 'Love Problems',
  'Career Guidance', 'Business Astrology', 'Numerology', 'Gemstone Consultation',
];

export default function AstrologerBio() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 0% 50%, #FBF3E0 0%, #FBF3E0 60%)' }}
      aria-labelledby="bio-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Astrologer</p>
          <h2 id="bio-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Best Online <span className="text-[#9E7016]">Astrologer in India</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-last lg:order-first">
            <div className="relative w-full max-w-sm">
              {/* Soft ambient glow behind the frame */}
              <div className="absolute -inset-6 rounded-[2rem] bg-[#C9962B]/15 blur-2xl" aria-hidden="true" />

              <div className="relative rounded-[1.75rem] ring-1 ring-[#D4AF37]/30
                              overflow-hidden shadow-[0_20px_60px_rgba(122,40,10,0.18)]">
                <Image
                  src="/shreenath.jpeg"
                  alt="Shrinathji — Jyotish Shreenath Ji"
                  width={520}
                  height={580}
                  className="w-full h-auto object-cover"
                  style={{ filter: 'saturate(0.82) brightness(0.96) contrast(0.96)' }}
                  priority
                />
                {/* Soft cream/gold wash so the artwork sits quietly rather than shouting */}
                <div className="absolute inset-0 pointer-events-none"
                     style={{ background: 'linear-gradient(180deg, rgba(251,243,224,0.16) 0%, rgba(251,243,224,0) 30%, rgba(251,243,224,0) 70%, rgba(122,40,10,0.14) 100%)' }} />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#C9962B]/25 rounded-[1.75rem]" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-2 text-center border-[#D4AF37]/40">
                <p className="text-[#C1102E] text-xl font-black"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>20+</p>
                <p className="text-[#2A1408]/50 text-[10px]">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2A1408] leading-snug"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Rohit Sharma
              <span className="block text-[#9E7016] text-lg mt-1 font-medium">
                Renowned Vedic Astrologer
              </span>
            </h3>

            <p className="text-[#2A1408]/65 text-sm leading-relaxed">
              <strong className="text-[#2A1408]">Rohit Sharma</strong> is a renowned Vedic astrologer dedicated
              to helping people overcome life&apos;s challenges through accurate horoscope analysis and
              personalized guidance. With years of experience, he has earned the trust of clients
              across India and abroad for his reliable predictions and practical remedies.
            </p>

            <p className="text-[#2A1408]/65 text-sm leading-relaxed">
              He specializes in{' '}
              <strong className="text-[#2A1408]/85">
                Kundli Reading, Marriage Matching, Love Problems, Career Guidance, Business Astrology,
                Numerology, and Gemstone Consultation.
              </strong>{' '}
              Every consultation is tailored to provide clear insights and effective solutions,
              helping individuals make informed decisions with confidence.
            </p>

            <p className="text-[#2A1408]/65 text-sm leading-relaxed">
              Book your consultation today and discover the right direction for a happier and
              more successful future.
            </p>

            {/* Specialization tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {specializations.map((s) => (
                <span key={s}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#D4AF37]/25
                                 text-[#9E7016]/70 bg-[#D4AF37]/5">
                  ✦ {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="tel:7600010811" className="btn-gold"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                📞 Book Consultation
              </a>
              <Link href="/about" className="btn-outline-gold"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

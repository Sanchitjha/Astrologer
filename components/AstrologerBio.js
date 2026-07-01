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
      style={{ background: 'radial-gradient(ellipse at 0% 50%, #1A0000 0%, #050005 60%)' }}
      aria-labelledby="bio-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Astrologer</p>
          <h2 id="bio-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Best Online <span className="text-[#D4AF37]">Astrologer in India</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-last lg:order-first">
            <div className="relative">
              <div className="absolute -inset-5 rounded-full border border-dashed border-[#D4AF37]/20 spin-slow"
                   aria-hidden="true" />
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full ring-4 ring-[#D4AF37]/30
                              overflow-hidden bg-[#0D0005] p-4
                              shadow-[0_0_60px_rgba(212,175,55,0.12)]">
                <Image
                  src="/logo.jpg"
                  alt="Rohit Sharmaji — Best Online Astrologer in India"
                  width={288}
                  height={288}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-2 -right-2 glass-card rounded-2xl px-4 py-2 text-center border-[#D4AF37]/40">
                <p className="text-[#FFD700] text-xl font-black"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>20+</p>
                <p className="text-white/50 text-[10px]">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Rohit Sharma
              <span className="block text-[#D4AF37] text-lg mt-1 font-medium">
                Renowned Vedic Astrologer
              </span>
            </h3>

            <p className="text-white/65 text-sm leading-relaxed">
              <strong className="text-white">Rohit Sharma</strong> is a renowned Vedic astrologer dedicated
              to helping people overcome life&apos;s challenges through accurate horoscope analysis and
              personalized guidance. With years of experience, he has earned the trust of clients
              across India and abroad for his reliable predictions and practical remedies.
            </p>

            <p className="text-white/65 text-sm leading-relaxed">
              He specializes in{' '}
              <strong className="text-white/85">
                Kundli Reading, Marriage Matching, Love Problems, Career Guidance, Business Astrology,
                Numerology, and Gemstone Consultation.
              </strong>{' '}
              Every consultation is tailored to provide clear insights and effective solutions,
              helping individuals make informed decisions with confidence.
            </p>

            <p className="text-white/65 text-sm leading-relaxed">
              Book your consultation today and discover the right direction for a happier and
              more successful future.
            </p>

            {/* Specialization tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {specializations.map((s) => (
                <span key={s}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#D4AF37]/25
                                 text-[#D4AF37]/70 bg-[#D4AF37]/5">
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

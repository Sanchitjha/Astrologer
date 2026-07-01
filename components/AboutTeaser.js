import Image from 'next/image';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 0% 50%, #2C0C16 0%, #0D0714 60%)' }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center order-last lg:order-first">
          <div className="relative">
            <div className="absolute -inset-5 rounded-full border border-dashed border-[#D4AF37]/20 spin-slow" aria-hidden="true" />
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-full ring-4 ring-[#D4AF37]/25 overflow-hidden bg-[#180B22] p-4 shadow-[0_0_60px_rgba(212,175,55,0.1)]">
              <Image
                src="/logo.jpg"
                alt="Rohit Sharmaji — Jyotish Shreenath Ji"
                width={256}
                height={256}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-5">
          <p className="section-label">Our Astrologer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Rohit Sharmaji
            <span className="block text-[#D4AF37] text-xl md:text-2xl mt-1" style={{ fontFamily: 'var(--font-devanagari)' }}>
              ज्योतिष श्रीनाथ जी
            </span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {['20+ Years', '10,000+ Clients', 'Vedic Expert'].map((badge) => (
              <span key={badge} className="text-xs px-3 py-1.5 rounded-full border border-[#D4AF37]/25 text-[#D4AF37]/70">
                ✦ {badge}
              </span>
            ))}
          </div>

          <p className="text-white/60 text-sm leading-relaxed">
            With over two decades of dedicated practice in Vedic Jyotish, Rohit Sharmaji has guided
            thousands of families towards prosperity, peace, and purpose. Rooted in the ancient Vaishnav
            tradition, every consultation is conducted with deep devotion and precision.
          </p>

          <Link href="/about" className="btn-outline-gold inline-flex" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}

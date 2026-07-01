import Image from 'next/image';

const services = [
  { icon: '🔭', label: 'Kundali Vishleshan', desc: 'Detailed birth chart analysis' },
  { icon: '🪬', label: 'Yantra Puja', desc: 'Sacred geometric instruments for prosperity' },
  { icon: '🏠', label: 'Vastu Shastra', desc: 'Harmonize your home and workplace' },
  { icon: '💎', label: 'Ratna / Gemstone Advice', desc: 'Correct gemstones for your planets' },
  { icon: '📅', label: 'Rashifal & Muhurat', desc: 'Auspicious timing guidance' },
  { icon: '🌙', label: 'Dosh Nivaran', desc: 'Remedies for Kaal Sarp, Mangal & more' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF8E7] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-2">Our Astrologer</p>
          <h2 className="text-[#1A0000] text-4xl md:text-5xl font-bold">
            हमारे बारे में
          </h2>
          <p className="text-[#800000] text-xl mt-1">About Jyotish Shreenath Ji</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-[#FFD700]" />
            <span className="text-[#FFD700] text-xl">ॐ</span>
            <div className="h-px w-16 bg-[#FFD700]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Logo side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full ring-8 ring-[#FFD700]/40 shadow-2xl overflow-hidden bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Rohit Sharmaji — Jyotish Shreenath Ji"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain p-6"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#FFD700]/30 -z-10" />
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-5">
            <div className="inline-block bg-[#CC0000] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
              20+ Years of Experience
            </div>
            <h3 className="text-[#1A0000] text-2xl md:text-3xl font-bold leading-snug">
              Rohit Sharmaji — Expert in Vedic Astrology
            </h3>
            <p className="text-[#1A0000]/70 text-base leading-relaxed">
              With over two decades of dedicated practice in Vedic Jyotish, Rohit Sharmaji has guided
              thousands of families towards prosperity, peace, and purpose. His expertise spans Kundali
              analysis, Yantra remedies, Vastu consultation, and planetary gemstone advice.
            </p>
            <p className="text-[#1A0000]/70 text-base leading-relaxed">
              Rooted in the ancient Vaishnav tradition, every reading is conducted with deep devotion
              and precision — providing practical solutions aligned with the cosmic energies at play
              in your life.
            </p>
            <a
              href="tel:7600010811"
              className="inline-flex items-center gap-2 bg-[#CC0000] hover:bg-[#800000] text-white font-semibold px-6 py-3 rounded-full transition-colors mt-2"
            >
              📞 Book a Consultation — 76000 10811
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20">
          <h3 className="text-center text-[#1A0000] text-2xl font-bold mb-8">Our Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-[#FFD700]/30 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#FFD700] transition-all text-center"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-[#1A0000] font-semibold text-sm">{s.label}</p>
                <p className="text-[#1A0000]/50 text-xs mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import StarField from './StarField';

const badges = [
  { icon: '💕', label: 'Love Problem Solution' },
  { icon: '💍', label: 'Marriage Problem Specialist' },
  { icon: '💼', label: 'Career Problem Solution' },
  { icon: '🔮', label: 'Get 100% Kundli Prediction' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden"
      aria-label="Welcome — Jyotish Shreenath Ji"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050005]" />
      <div className="absolute inset-0"
           style={{ background: 'radial-gradient(ellipse at 50% 0%, #3D0012 0%, #050005 65%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-40"
           style={{ background: 'linear-gradient(to bottom, transparent, #050005)' }} />

      <StarField count={65} />

      {/* Om watermark */}
      <div className="om-watermark" aria-hidden="true"
           style={{ fontFamily: 'var(--font-devanagari)', fontSize: 'clamp(200px,38vw,520px)' }}>ॐ</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto w-full">

        {/* Welcome label */}
        <p className="section-label animate-fade-in">— Best Astrologer in India —</p>

        {/* Main heading */}
        <div className="space-y-2 animate-fade-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            <span className="text-white">Welcome to </span>
            <span className="text-gold-shimmer block mt-1">Jyotish Shreenath Ji</span>
          </h1>
          <p className="text-[#D4AF37]/60 text-lg md:text-xl"
             style={{ fontFamily: 'var(--font-devanagari)' }}>
            ज्योतिष श्रीनाथ जी
          </p>
        </div>

        {/* Gold divider */}
        <div className="gold-divider w-full max-w-sm animate-fade-in delay-200">
          <span className="text-[#D4AF37] text-2xl shrink-0"
                style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl animate-fade-up delay-300">
          {badges.map((b) => (
            <div key={b.label}
                 className="glass-card rounded-xl px-3 py-3 flex flex-col items-center gap-1.5 text-center">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-white/75 text-xs leading-snug font-medium">{b.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400 w-full sm:w-auto">
          <Link href="/contact" className="btn-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
            📞 Book Consultation
          </Link>
          <Link href="/services" className="btn-outline-gold" style={{ fontFamily: 'var(--font-cinzel)' }}>
            View All Services
          </Link>
        </div>

        {/* Sanskrit shloka */}
        <div className="animate-fade-in delay-500 glass-card rounded-2xl px-6 py-4 max-w-lg">
          <p className="text-[#D4AF37]/80 text-base leading-relaxed"
             style={{ fontFamily: 'var(--font-devanagari)' }}>
            वक्र तुंड महाकाय, सूर्य कोटि समप्रभः ।
          </p>
          <p className="text-[#D4AF37]/80 text-base leading-relaxed"
             style={{ fontFamily: 'var(--font-devanagari)' }}>
            निर्विघ्न कुरु मे देव शुभ कार्येषु सर्वदा ॥
          </p>
        </div>

        {/* Phone */}
        <p className="text-white/30 text-xs animate-fade-in delay-500">
          Rohit Sharmaji &nbsp;·&nbsp;{' '}
          <a href="tel:7600010811" className="text-white/50 hover:text-[#D4AF37] transition-colors">
            76000 10811
          </a>
          &nbsp;·&nbsp; Mon–Sat 9 AM–7 PM IST
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[#D4AF37]/35 text-[10px] tracking-[0.3em] uppercase"
              style={{ fontFamily: 'var(--font-cinzel)' }}>Scroll</span>
        <div className="w-px h-7"
             style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.35), transparent)' }} />
      </div>
    </section>
  );
}

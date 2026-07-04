import Link from 'next/link';
import StarField from './StarField';

export default function PageHeader({ title, titleHindi, subtitle, crumbs = [] }) {
  return (
    <section
      className="relative pt-32 pb-20 px-4 text-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #D11330 0%, #8A0A20 50%, #5A0715 100%)' }}
    >
      <StarField count={35} />
      <div className="om-watermark text-[12rem] opacity-[0.025]" aria-hidden="true"
           style={{ fontFamily: 'var(--font-devanagari)', fontSize: 'clamp(100px,20vw,280px)' }}>
        ॐ
      </div>

      {/* Breadcrumb */}
      {crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="relative z-10 flex items-center justify-center gap-2 mb-6 text-xs text-white/52">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-[#D4AF37]/40">›</span>
              {c.href ? (
                <Link href={c.href} className="hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/50" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {c.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      )}

      <div className="relative z-10 max-w-3xl mx-auto space-y-3">
        <p className="section-label section-label-gold">— {subtitle} —</p>

        {titleHindi && (
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gold-shimmer leading-tight"
            style={{ fontFamily: 'var(--font-devanagari)' }}
          >
            {titleHindi}
          </h1>
        )}

        <p
          className={`font-bold ${titleHindi ? 'text-white/50 text-lg md:text-xl' : 'text-4xl sm:text-5xl md:text-6xl text-gold-shimmer'}`}
          style={{ fontFamily: 'var(--font-cinzel)' }}
        >
          {title}
        </p>

        {/* Divider */}
        <div className="gold-divider max-w-xs mx-auto mt-4">
          <span className="text-[#D4AF37] text-lg shrink-0" style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
        </div>
      </div>
    </section>
  );
}

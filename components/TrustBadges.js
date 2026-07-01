const badges = [
  {
    icon: '🛡️',
    stat: 'Trusted',
    label: 'Astrologer',
    desc: 'Verified by thousands of clients across India and worldwide.',
  },
  {
    icon: '✅',
    stat: 'Genuine',
    label: 'Guidance',
    desc: 'Honest, accurate predictions without false promises or shortcuts.',
  },
  {
    icon: '👥',
    stat: '200+',
    label: 'Expert Team',
    desc: 'Experienced astrologers, Vastu consultants, and spiritual guides.',
  },
  {
    icon: '😊',
    stat: '5000+',
    label: 'Happy Clients',
    desc: 'Satisfied families who found peace and clarity through our guidance.',
  },
];

export default function TrustBadges() {
  return (
    <section
      className="py-16 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #1A0A00 0%, #050005 60%)' }}
      aria-label="Trust indicators"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {badges.map((b) => (
          <div key={b.label}
               className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 group">
            <span className="text-4xl">{b.icon}</span>
            <div>
              <p className="text-2xl md:text-3xl font-black text-[#D4AF37]"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                {b.stat}
              </p>
              <p className="text-white font-semibold text-sm"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                {b.label}
              </p>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

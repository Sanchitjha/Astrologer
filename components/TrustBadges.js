const badges = [
  {
    icon: '🛡️',
    stat: 'Trusted',
    label: 'Astrologer',
    desc: 'Known for providing reliable astrology consultations with accurate predictions and personalized guidance.',
  },
  {
    icon: '✅',
    stat: 'Genuine',
    label: 'Guidance',
    desc: 'Receive honest astrology advice and practical remedies tailored to your unique life challenges and goals.',
  },
  {
    icon: '👥',
    stat: '200+',
    label: 'Expert Team',
    desc: 'Supported by a dedicated team of experienced astrology professionals committed to delivering quality consultation.',
  },
  {
    icon: '😊',
    stat: '5000+',
    label: 'Happy Clients',
    desc: 'Trusted by over 5,000 satisfied clients across India and around the world for authentic astrology solutions.',
  },
];

export default function TrustBadges() {
  return (
    <section
      className="py-16 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #2C1608 0%, #0D0714 60%)' }}
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

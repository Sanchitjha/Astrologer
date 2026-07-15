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
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #F6ECD4 0%, #FBF3E0 60%)' }}
      aria-label="Trust indicators"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {badges.map((b) => (
          <div key={b.label}
               className="relative rounded-2xl p-6 flex flex-col items-center text-center gap-3 group
                          bg-white border border-[#D4AF37]/25 overflow-hidden
                          shadow-[0_4px_18px_rgba(122,40,10,0.06)] transition-all duration-300
                          hover:-translate-y-1.5 hover:shadow-[0_16px_38px_rgba(193,16,46,0.14)]
                          hover:border-[#C1102E]/30">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1
                            bg-gradient-to-r from-[#C9962B] via-[#F0C64B] to-[#C1102E]
                            scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            {/* Icon badge */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full"
                   style={{ background: 'radial-gradient(circle, rgba(201,150,43,0.18) 0%, rgba(193,16,46,0.06) 100%)' }} />
              <div className="absolute inset-1 rounded-full ring-2 ring-[#D4AF37]/30
                              group-hover:ring-[#C1102E]/40 transition-all duration-300" />
              <span className="text-3xl relative z-10 transition-transform duration-300 group-hover:scale-110">
                {b.icon}
              </span>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-black text-gold-shimmer"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                {b.stat}
              </p>
              <p className="text-[#2A1408] font-semibold text-sm"
                 style={{ fontFamily: 'var(--font-cinzel)' }}>
                {b.label}
              </p>
            </div>
            <p className="text-[#2A1408]/50 text-xs leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

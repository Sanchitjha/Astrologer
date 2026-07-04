const videos = [
  { icon: '🎬', title: 'Love & Relationship Success' },
  { icon: '🎥', title: 'Career & Business Success' },
  { icon: '📹', title: 'Marriage & Family Guidance' },
  { icon: '🎞️', title: 'Client Experience' },
];

export default function VideoTestimonials() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'linear-gradient(180deg, #FBF3E0 0%, #FBF3E0 100%)' }}
      aria-labelledby="ss-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Client Stories</p>
          <h2 id="ss-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Success <span className="text-[#9E7016]">Stories</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
          <p className="text-[#2A1408]/50 text-sm mt-4 max-w-2xl mx-auto">
            Hear from clients who found clarity, confidence, and positive life changes through
            our personalized astrology consultations and trusted Vedic guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v) => (
            <div key={v.title}
                 className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video placeholder — replace with actual YouTube/Instagram embed */}
              <div className="relative aspect-[9/12] bg-gradient-to-br from-[#D4AF37]/5 to-[#800000]/10
                              flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#CC0000]/80 border-4 border-white/20
                                flex items-center justify-center shadow-lg
                                group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#2A1408] text-2xl ml-1">▶</span>
                </div>
                <span className="mt-6 text-5xl opacity-30">{v.icon}</span>
                <div className="absolute inset-x-0 bottom-0 h-1/2
                                bg-gradient-to-t from-[#FBF3E0] to-transparent" />
              </div>
              <div className="p-4">
                <p className="text-[#2A1408] font-semibold text-sm text-center"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {v.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#2A1408]/42 text-xs mt-8 italic">
          Video testimonials will be embedded here — YouTube, Instagram Reel, or MP4.
        </p>
      </div>
    </section>
  );
}

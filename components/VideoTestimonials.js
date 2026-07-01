const videos = [
  { thumb: '🎬', name: 'Priya Sharma', location: 'Delhi', topic: 'Love Problem Solution' },
  { thumb: '🎥', name: 'Rahul Verma', location: 'Mumbai', topic: 'Career Guidance' },
  { thumb: '📹', name: 'Sunita Devi', location: 'Jaipur', topic: 'Marriage Compatibility' },
  { thumb: '🎞️', name: 'Amit Kumar', location: 'Bangalore', topic: 'Business Astrology' },
];

export default function VideoTestimonials() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'linear-gradient(180deg, #050005 0%, #0A0010 100%)' }}
      aria-labelledby="vt-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Client Stories</p>
          <h2 id="vt-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            Video <span className="text-[#D4AF37]">Testimonials</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
          <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto">
            Hear directly from clients whose lives were transformed by Pandit Rohit Sharma Ji&apos;s guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v) => (
            <div key={v.name}
                 className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video placeholder */}
              <div className="relative aspect-[9/12] bg-gradient-to-br from-[#D4AF37]/5 to-[#800000]/10
                              flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border-2 border-[#D4AF37]/40
                                flex items-center justify-center
                                group-hover:bg-[#D4AF37]/25 transition-colors">
                  <span className="text-3xl">▶</span>
                </div>
                <span className="mt-4 text-4xl">{v.thumb}</span>
                {/* Overlay gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2
                                bg-gradient-to-t from-[#050005] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-white font-semibold text-sm"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {v.name}
                </p>
                <p className="text-[#D4AF37]/70 text-xs mt-0.5">{v.location}</p>
                <p className="text-white/40 text-xs mt-1">{v.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

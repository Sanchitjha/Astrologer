'use client';

import { useState } from 'react';

const videos = [
  { id: 'xGDybAVyLg8', icon: '🎬', title: 'Love & Relationship Success' },
  { id: 'zLoGns5uYwU', icon: '🎥', title: 'Career & Business Success' },
  { id: 'ODfXVu6LPx4', icon: '📹', title: 'Marriage & Family Guidance' },
  { id: 'dSlvhrRfsfI', icon: '🎞️', title: 'Client Experience' },
];

export default function VideoTestimonials() {
  const [playingId, setPlayingId] = useState(null);

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
                 onClick={() => setPlayingId(v.id)}
                 className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video container */}
              <div className="relative aspect-[9/12] bg-[#2A1408]/5 overflow-hidden flex flex-col items-center justify-center">
                {playingId === v.id ? (
                  <>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={v.title}
                      className="absolute inset-0 w-full h-full border-0 z-10"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingId(null);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-sm z-20 hover:bg-black/80 transition-colors shadow-md border border-white/20"
                      title="Close Video"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <>
                    {/* YouTube Video Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Dark gradient overlay for style & play button contrast */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 z-0" />
                    
                    {/* Premium Play Button */}
                    <div className="w-16 h-16 rounded-full bg-[#CC0000]/90 border-4 border-white/30
                                    flex items-center justify-center shadow-lg z-10
                                    group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl ml-1">▶</span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4 bg-white/70 backdrop-blur-sm border-t border-[#D4AF37]/5">
                <p className="text-[#2A1408] font-semibold text-sm text-center"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {v.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#2A1408]/60 text-sm mt-8 font-medium">
          Click on any card to play the video testimonial.
        </p>
      </div>
    </section>
  );
}

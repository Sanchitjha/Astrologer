const reviews = [
  {
    name: 'Neha Gupta',
    location: 'New Delhi',
    rating: 5,
    text: 'Pandit Rohit Sharma Ji solved my 3-year-old love problem in just 2 weeks. His predictions were incredibly accurate, and the remedies he suggested worked beautifully. Highly recommended!',
    topic: 'Love Problem Solution',
  },
  {
    name: 'Rajesh Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'I was struggling with my business for years. After consulting with Rohit Ji, everything changed. His Vastu advice and gemstone recommendation transformed my fortunes. 100% genuine.',
    topic: 'Business Astrology',
  },
  {
    name: 'Kavya Nair',
    location: 'Kochi',
    rating: 5,
    text: 'Got my Kundli matched for marriage through Jyotish Shreenath Ji. The analysis was thorough, accurate, and the guidance was compassionate. We are happily married now!',
    topic: 'Marriage Compatibility',
  },
  {
    name: 'Suresh Mehra',
    location: 'Chandigarh',
    rating: 5,
    text: 'Career was at a standstill. Pandit Ji identified the planetary issues, suggested a simple mantra practice. Within months I got my promotion. Thank you from the bottom of my heart!',
    topic: 'Career Guidance',
  },
];

function Stars({ count }) {
  return (
    <span aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#FFD700] text-sm">★</span>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 50% 100%, #1A0A00 0%, #050005 60%)' }}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Client Reviews</p>
          <h2 id="reviews-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            What Our Clients <span className="text-[#D4AF37]">Say</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <article key={r.name}
                     className="glass-card rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30
                                flex items-center justify-center text-[#D4AF37] font-black text-lg shrink-0"
                     style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm"
                     style={{ fontFamily: 'var(--font-cinzel)' }}>
                    {r.name}
                  </p>
                  <p className="text-white/40 text-xs">{r.location}</p>
                </div>
                <div className="ml-auto">
                  <Stars count={r.rating} />
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed italic">
                &ldquo;{r.text}&rdquo;
              </p>

              <span className="text-xs text-[#D4AF37]/60 font-medium"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                {r.topic}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

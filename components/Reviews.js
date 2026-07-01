const reviews = [
  {
    name: 'Priya S.',
    rating: 5,
    text: 'I had an excellent consultation with Rohit Sharma. The predictions were accurate, and the guidance provided helped me make better decisions in my personal and professional life. Highly recommended.',
  },
  {
    name: 'Rahul M.',
    rating: 5,
    text: 'The consultation was detailed, professional, and easy to understand. I received practical remedies that made a real difference. Thank you for your valuable guidance.',
  },
  {
    name: 'Sunita K.',
    rating: 5,
    text: 'I was facing challenges in my relationship, and the astrology consultation gave me clarity and confidence. The advice was genuine and very helpful.',
  },
  {
    name: 'Amit V.',
    rating: 5,
    text: 'From career guidance to financial insights, every prediction was explained clearly. I truly appreciate the personalized consultation and support.',
  },
];

function Stars({ count }) {
  return (
    <span aria-label={`${count} out of 5 stars`} className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#FFD700] text-base">★</span>
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
          <p className="text-white/50 text-sm mt-4 max-w-2xl mx-auto">
            Read genuine reviews from clients who have experienced accurate astrology predictions,
            practical guidance, and positive changes in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <article key={r.name}
                     className="glass-card rounded-2xl p-7 flex flex-col gap-4">
              <Stars count={r.rating} />
              <p className="text-white/65 text-sm leading-relaxed italic flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#D4AF37]/10">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30
                                flex items-center justify-center text-[#D4AF37] font-black text-sm shrink-0"
                     style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {r.name[0]}
                </div>
                <p className="text-white font-semibold text-sm"
                   style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {r.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

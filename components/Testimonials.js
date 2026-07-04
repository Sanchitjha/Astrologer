const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Rohit Sharmaji\'s Kundali analysis was incredibly accurate. He identified the exact timing of my career challenges and the Kuber Yantra he recommended brought remarkable financial improvement within months.',
    stars: 5,
    service: 'Kundali + Yantra',
  },
  {
    name: 'Rajesh Patel',
    location: 'Ahmedabad',
    text: 'We had severe Vastu issues in our new home. Sharmaji\'s guidance without any renovation transformed the energy completely. Family health and harmony improved noticeably.',
    stars: 5,
    service: 'Vastu Shastra',
  },
  {
    name: 'Sunita Joshi',
    location: 'Delhi',
    text: 'My son had Kaal Sarp Dosh and was struggling for years. After the Kalsharapyog Yantra and remedies suggested by Sharmaji, things turned around remarkably within six months.',
    stars: 5,
    service: 'Dosh Nivaran',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur',
    text: 'Consulted Sharmaji for our wedding muhurat. He was meticulous, thorough, and the date he chose has truly been auspicious. Our married life is blessed.',
    stars: 5,
    service: 'Muhurat',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, #FBF3E0 0%, #FBF3E0 80%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">What Clients Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A1408]" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Client <span className="text-[#9E7016]">Testimonials</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0" style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="glass-card rounded-2xl p-6 space-y-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[#C1102E] text-sm">★</span>
                ))}
              </div>

              <p className="text-[#2A1408]/70 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center justify-between border-t border-[#D4AF37]/10 pt-4">
                <div>
                  <cite className="text-[#2A1408] not-italic font-semibold text-sm">{t.name}</cite>
                  <p className="text-[#2A1408]/52 text-xs">{t.location}</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full border border-[#D4AF37]/20 text-[#9E7016]/60">
                  {t.service}
                </span>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

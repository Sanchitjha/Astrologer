const steps = [
  {
    num: '01',
    icon: '📞',
    title: 'Contact Us',
    desc: 'Reach out via WhatsApp, phone call, or the contact form on our website to book your consultation.',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Share Your Details',
    desc: 'Provide your birth date, time, and place for accurate Kundli preparation and horoscope analysis.',
  },
  {
    num: '03',
    icon: '🔮',
    title: 'Get Consultation',
    desc: 'Receive a personalized astrology session via Zoom, WhatsApp, or phone with Pandit Rohit Sharma Ji.',
  },
  {
    num: '04',
    icon: '✨',
    title: 'Receive Solutions',
    desc: 'Get effective remedies, gemstone recommendations, mantra guidance, and actionable spiritual solutions.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'linear-gradient(135deg, #0A0005 0%, #050005 50%, #0A0005 100%)' }}
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Simple Process</p>
          <h2 id="hiw-heading"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            How It <span className="text-[#D4AF37]">Works</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative flex flex-col items-center text-center gap-4 group">
                {/* Circle */}
                <div className="relative w-24 h-24 rounded-full border-2 border-[#D4AF37]/30
                                bg-[#D4AF37]/5 flex items-center justify-center
                                group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/10
                                transition-all duration-300">
                  <span className="text-3xl">{s.icon}</span>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full
                                   bg-[#D4AF37] text-[#050005] text-xs font-black
                                   flex items-center justify-center"
                        style={{ fontFamily: 'var(--font-cinzel)' }}>
                    {s.num}
                  </span>
                </div>

                <h3 className="text-[#D4AF37] font-bold text-base"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-[200px]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

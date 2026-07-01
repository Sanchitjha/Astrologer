const steps = [
  {
    num: '01',
    icon: '📅',
    title: 'Book Your Consultation',
    desc: 'Choose your preferred date and time to schedule your online astrology consultation with our expert astrologer.',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Share Your Birth Details',
    desc: 'Provide your date of birth, time of birth, and place of birth for an accurate horoscope and personalized astrology analysis.',
  },
  {
    num: '03',
    icon: '💬',
    title: 'Consult with the Astrologer',
    desc: 'Connect securely through WhatsApp, phone call, or video consultation to discuss your questions and concerns.',
  },
  {
    num: '04',
    icon: '✨',
    title: 'Receive Guidance & Remedies',
    desc: 'Get detailed predictions, practical remedies, and personalized solutions for love, marriage, career, health, finance, and family life.',
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
            How Online Astrology <span className="text-[#D4AF37]">Consultation Works</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#D4AF37] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
          <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto">
            Follow these simple steps to connect with our expert astrologer and receive
            personalized astrology guidance from anywhere.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative flex flex-col items-center text-center gap-4 group">
                <div className="relative w-24 h-24 rounded-full border-2 border-[#D4AF37]/30
                                bg-[#D4AF37]/5 flex items-center justify-center
                                group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/10
                                transition-all duration-300">
                  <span className="text-3xl">{s.icon}</span>
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
                <p className="text-white/55 text-sm leading-relaxed max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

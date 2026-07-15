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
      style={{ background: 'linear-gradient(135deg, #FBF3E0 0%, #FBF3E0 50%, #FBF3E0 100%)' }}
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Simple Process</p>
          <h2 id="hiw-heading"
              className="text-3xl md:text-4xl font-bold text-[#2A1408]"
              style={{ fontFamily: 'var(--font-cinzel)' }}>
            How Online Astrology <span className="text-[#9E7016]">Consultation Works</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-5">
            <span className="text-[#9E7016] text-lg shrink-0"
                  style={{ fontFamily: 'var(--font-devanagari)' }}>ॐ</span>
          </div>
          <p className="text-[#2A1408]/50 text-sm mt-4 max-w-xl mx-auto">
            Follow these simple steps to connect with our expert astrologer and receive
            personalized astrology guidance from anywhere.
          </p>
        </div>

        <div className="relative">
          {/* Connector line with traveling gradient */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-[3px] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9962B]/20 via-[#C9962B]/60 to-[#C1102E]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative flex flex-col items-center text-center gap-4 group">
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center
                                transition-all duration-300 group-hover:-translate-y-1
                                shadow-[0_8px_24px_rgba(122,40,10,0.10)]
                                group-hover:shadow-[0_12px_30px_rgba(193,16,46,0.18)]"
                     style={{ background: 'radial-gradient(circle, rgba(201,150,43,0.14) 0%, rgba(251,243,224,1) 72%)' }}>
                  <div className="absolute inset-0 rounded-full ring-2 ring-[#D4AF37]/35
                                  group-hover:ring-[#C1102E]/45 transition-colors duration-300" />
                  <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </span>
                  <span className="absolute -top-2 -right-1 w-8 h-8 rounded-full
                                   flex items-center justify-center text-xs font-black text-white
                                   shadow-[0_3px_10px_rgba(193,16,46,0.4)] ring-2 ring-[#FBF3E0]"
                        style={{ background: 'linear-gradient(135deg, #E9C349, #C9962B)', fontFamily: 'var(--font-cinzel)', color: '#3A2408' }}>
                    {s.num}
                  </span>
                </div>
                <h3 className="text-[#9E7016] font-bold text-base"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {s.title}
                </h3>
                <p className="text-[#2A1408]/55 text-sm leading-relaxed max-w-[200px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

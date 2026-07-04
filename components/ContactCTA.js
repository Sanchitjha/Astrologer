import { Phone, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #D11330 0%, #8A0A20 55%, #5A0715 100%)' }}
    >
      <div className="om-watermark" aria-hidden="true"
           style={{ fontFamily: 'var(--font-devanagari)', fontSize: 'clamp(160px,30vw,380px)' }}>ॐ</div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <div>
          <p className="section-label section-label-gold mb-3">Ready to Begin?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Book a <span className="text-gold-shimmer">Consultation</span>
          </h2>
          <p className="text-white/80 text-sm mt-3 max-w-lg mx-auto">
            Connect with Rohit Sharmaji for Kundali reading, Yantra guidance, Vastu consultation, or any astrological remedy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href="tel:7600010811"
            className="glass-card-red rounded-2xl p-5 flex items-center gap-4 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors shrink-0">
              <Phone className="text-[#FFE9A8]" size={22} />
            </div>
            <div className="text-left">
              <p className="text-white/70 text-xs mb-0.5">Call</p>
              <p className="text-[#FFE9A8] font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>76000 10811</p>
            </div>
          </a>

          <a
            href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20need%20astrological%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-red rounded-2xl p-5 flex items-center gap-4 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-400/20 flex items-center justify-center group-hover:bg-green-400/30 transition-colors shrink-0">
              <MessageCircle className="text-green-300" size={22} />
            </div>
            <div className="text-left">
              <p className="text-white/70 text-xs mb-0.5">WhatsApp</p>
              <p className="text-green-300 font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>Chat Now</p>
            </div>
          </a>
        </div>

        <p className="text-white/60 text-xs">Mon–Sat, 9 AM–7 PM IST &nbsp;·&nbsp; Consultations available online & in-person</p>
      </div>
    </section>
  );
}

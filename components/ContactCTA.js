import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section
      className="py-20 px-4 border-t border-[#D4AF37]/8"
      style={{ background: 'linear-gradient(180deg, #0D0714 0%, #180B22 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div>
          <p className="section-label mb-3">Ready to Begin?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Book a <span className="text-[#D4AF37]">Consultation</span>
          </h2>
          <p className="text-white/58 text-sm mt-3 max-w-lg mx-auto">
            Connect with Rohit Sharmaji for Kundali reading, Yantra guidance, Vastu consultation, or any astrological remedy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href="tel:7600010811"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-[#D4AF37]/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors shrink-0">
              <Phone className="text-[#FFD700]" size={22} />
            </div>
            <div className="text-left">
              <p className="text-white/58 text-xs mb-0.5">Call</p>
              <p className="text-[#FFD700] font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>76000 10811</p>
            </div>
          </a>

          <a
            href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20need%20astrological%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-green-500/40 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors shrink-0">
              <MessageCircle className="text-green-400" size={22} />
            </div>
            <div className="text-left">
              <p className="text-white/58 text-xs mb-0.5">WhatsApp</p>
              <p className="text-green-400 font-bold" style={{ fontFamily: 'var(--font-cinzel)' }}>Chat Now</p>
            </div>
          </a>
        </div>

        <p className="text-white/38 text-xs">Mon–Sat, 9 AM–7 PM IST &nbsp;·&nbsp; Consultations available online & in-person</p>
      </div>
    </section>
  );
}

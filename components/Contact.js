import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1A0000] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <p className="text-[#FFD700]/70 text-sm font-semibold tracking-widest uppercase mb-2">Get in Touch</p>
        <h2 className="text-[#FFD700] text-4xl md:text-5xl font-bold">संपर्क करें</h2>
        <p className="text-white/60 text-xl mt-1">Contact Us</p>
        <div className="flex items-center justify-center gap-3 mt-4 mb-12">
          <div className="h-px w-16 bg-[#FFD700]/40" />
          <span className="text-[#FFD700] text-xl">ॐ</span>
          <div className="h-px w-16 bg-[#FFD700]/40" />
        </div>

        <p className="text-white/70 text-base mb-10 max-w-lg mx-auto">
          Connect with Rohit Sharmaji for Kundali reading, Yantra guidance, Vastu consultation, or any astrological remedy.
        </p>

        {/* CTA Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Phone */}
          <a
            href="tel:7600010811"
            className="group flex flex-col items-center gap-4 bg-[#2A0000] border border-[#FFD700]/20 hover:border-[#FFD700] rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-[#FFD700]/10"
          >
            <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 group-hover:bg-[#FFD700]/20 flex items-center justify-center transition-colors">
              <Phone className="text-[#FFD700]" size={28} />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Call Us</p>
              <p className="text-[#FFD700] text-2xl font-bold tracking-wide">76000 10811</p>
              <p className="text-white/40 text-xs mt-1">Rohit Sharmaji</p>
            </div>
            <span className="bg-[#FFD700] text-[#1A0000] font-bold text-sm px-6 py-2 rounded-full group-hover:bg-yellow-300 transition-colors">
              Call Now
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20need%20astrological%20guidance."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-[#2A0000] border border-[#FFD700]/20 hover:border-[#25D366] rounded-2xl p-8 transition-all hover:shadow-lg hover:shadow-green-500/10"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/10 group-hover:bg-green-500/20 flex items-center justify-center transition-colors">
              <MessageCircle className="text-green-400" size={28} />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">WhatsApp</p>
              <p className="text-green-400 text-2xl font-bold tracking-wide">76000 10811</p>
              <p className="text-white/40 text-xs mt-1">Chat anytime</p>
            </div>
            <span className="bg-[#25D366] text-white font-bold text-sm px-6 py-2 rounded-full group-hover:bg-green-400 transition-colors">
              WhatsApp Now
            </span>
          </a>
        </div>

        <p className="text-white/30 text-xs mt-10">
          Available Mon – Sat, 9 AM – 7 PM (IST)
        </p>
      </div>
    </section>
  );
}

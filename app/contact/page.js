import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact — Book Consultation with Rohit Sharmaji',
  description:
    'Contact Rohit Sharmaji for Kundali reading, Yantra guidance, Vastu consultation, or any astrological remedy. Call or WhatsApp 76000 10811.',
  keywords: ['contact astrologer', 'book kundali consultation', 'astrologer phone number', 'whatsapp astrologer india'],
  openGraph: {
    title: 'Contact Jyotish Shreenath Ji',
    description: 'Book a consultation with Rohit Sharmaji. Call or WhatsApp 76000 10811.',
    images: ['/logo.jpg'],
  },
};

const info = [
  {
    icon: Clock,
    label: 'Consultation Hours',
    value: 'Mon – Sat, 9 AM – 7 PM IST',
    sub: 'By appointment recommended',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India (Online & In-person)',
    sub: 'Consultations across India & abroad',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        titleHindi="संपर्क करें"
        subtitle="Contact Us"
        crumbs={[{ label: 'Contact' }]}
      />

      <main className="bg-[#050005] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {info.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#D4AF37]/70 text-xs mb-1 section-label">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Two-column: Form + Contact actions */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Phone & WhatsApp */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Phone */}
              <a
                href="tel:7600010811"
                className="group glass-card rounded-2xl p-8 flex flex-col items-center gap-5 text-center transition-all hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center pulse-gold group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Phone className="text-[#FFD700]" size={28} />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-1 section-label">Call Us</p>
                  <p className="text-[#FFD700] text-2xl font-black tracking-wide"
                     style={{ fontFamily: 'var(--font-cinzel)' }}>76000 10811</p>
                  <p className="text-white/35 text-xs mt-1">Rohit Sharmaji — Direct Line</p>
                </div>
                <span className="btn-gold !py-2 !px-8" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  Call Now
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917600010811?text=Namaste%20Rohit%20Sharmaji%2C%20I%20need%20astrological%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-2xl p-8 flex flex-col items-center gap-5 text-center transition-all hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center pulse-gold group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="text-green-400" size={28} />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-1 section-label">WhatsApp</p>
                  <p className="text-green-400 text-2xl font-black tracking-wide"
                     style={{ fontFamily: 'var(--font-cinzel)' }}>76000 10811</p>
                  <p className="text-white/35 text-xs mt-1">Chat anytime</p>
                </div>
                <span
                  className="inline-flex items-center justify-center gap-2 font-bold py-2 px-8 rounded-full text-white text-sm transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', fontFamily: 'var(--font-cinzel)' }}
                >
                  WhatsApp Now
                </span>
              </a>
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-white/25 text-xs">
            All consultations are confidential. For Kundali reading please keep your birth date, time, and place ready.
          </p>
        </div>
      </main>
    </>
  );
}

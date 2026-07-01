import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Privacy Services | Confidential Astrology Consultation',
  description:
    'All consultations with Jyotish Shreenath Ji are 100% private and confidential. Your personal and astrological information is never shared. Book a private session today.',
  keywords: ['private astrology consultation', 'confidential astrologer', 'secret consultation', 'anonymous astrology'],
};

const promises = [
  {
    icon: '🔒',
    title: 'Complete Confidentiality',
    desc: 'All personal information, birth details, and the nature of your problems are kept strictly private. We never share your data with any third party.',
  },
  {
    icon: '🛡️',
    title: 'Secure Sessions',
    desc: 'Consultations via WhatsApp, Zoom, or phone are conducted in a safe, judgment-free environment where you can speak openly without fear.',
  },
  {
    icon: '🗑️',
    title: 'No Data Retention',
    desc: 'We do not store, record, or retain consultation recordings unless explicitly requested. Your session details remain between you and Pandit Ji.',
  },
  {
    icon: '🤝',
    title: 'Professional Ethics',
    desc: 'Pandit Rohit Sharma Ji adheres to the highest standards of professional and spiritual ethics. Your trust is our most valued asset.',
  },
  {
    icon: '📵',
    title: 'No Unsolicited Contact',
    desc: 'We will never contact you without your permission or send promotional messages without your consent.',
  },
  {
    icon: '🌐',
    title: 'Anonymous Consultation Option',
    desc: 'If you prefer not to share your full name, we offer anonymous consultation options. Only birth details are required for chart preparation.',
  },
];

export default function PrivacyServicesPage() {
  return (
    <>
      <PageHeader
        title="Privacy Services"
        titleHindi="गोपनीयता सेवाएँ"
        subtitle="Confidential & Secure"
        crumbs={[{ label: 'Privacy Services' }]}
      />

      <section className="py-20 px-4" style={{ background: '#0D0714' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Your Privacy, <span className="text-[#D4AF37]">Our Priority</span>
            </h2>
            <p className="text-white/50 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
              We understand that matters related to love, marriage, and personal challenges
              are deeply sensitive. Every consultation with Jyotish Shreenath Ji is
              handled with the utmost discretion and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map((p) => (
              <div key={p.title} className="glass-card rounded-2xl p-7 flex flex-col gap-4">
                <span className="text-4xl">{p.icon}</span>
                <h3 className="text-[#D4AF37] font-bold"
                    style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {p.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Privacy policy excerpt */}
          <div className="glass-card rounded-2xl p-8 mt-12 max-w-3xl mx-auto">
            <h3 className="text-[#D4AF37] font-bold text-lg mb-4"
                style={{ fontFamily: 'var(--font-cinzel)' }}>
              Privacy Policy Summary
            </h3>
            <div className="space-y-3 text-white/55 text-sm leading-relaxed">
              <p>We collect only the information necessary to provide astrological services — your name, date, time, and place of birth.</p>
              <p>This information is used solely to prepare your birth chart and conduct your consultation. It is never sold, rented, or shared with advertisers, data brokers, or third parties.</p>
              <p>You have the right to request deletion of your data at any time by contacting us directly.</p>
              <p>All communication channels (WhatsApp, phone, email) are kept secure. We recommend you also take measures to secure your own devices.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

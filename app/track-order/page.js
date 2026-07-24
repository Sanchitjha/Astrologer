import PageHeader from '@/components/PageHeader';
import TrackOrderForm from '@/components/TrackOrderForm';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Track Your Order | Jyotish Shreenath Ji',
  description:
    'Track your Jyotish Shreenath Ji order in real time. Enter your Order ID or AWB number to get the latest shipping status.',
  keywords: ['track order', 'order tracking', 'awb tracking', 'jyotish shreenath ji order status'],
};

export default function TrackOrderPage() {
  return (
    <>
      <PageHeader
        title="Track Your Order"
        titleHindi="अपना ऑर्डर ट्रैक करें"
        subtitle="Real-Time Shipping Status"
        crumbs={[{ label: 'Track Order' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-2xl mx-auto space-y-10">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed text-center">
            Want to know where your order is? Enter your Order ID or AWB (tracking) number below
            to get real-time updates on your shipment status.
          </p>

          <TrackOrderForm />

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Need Help?
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              If you&apos;re unable to locate your tracking details, or your order status hasn&apos;t
              updated in 48 hours, reach out to us:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-[#2A1408]/50">Email: </span>
                <a href="mailto:jyotishshreenathji@gmail.com" className="text-[#C1102E] font-semibold hover:underline">
                  jyotishshreenathji@gmail.com
                </a>
              </p>
              <p>
                <span className="text-[#2A1408]/50">Phone: </span>
                <a href="tel:7600010811" className="text-[#C1102E] font-semibold hover:underline">
                  +91 76000 10811
                </a>
              </p>
            </div>
            <p className="text-[#2A1408]/40 text-xs pt-2 border-t border-[#D4AF37]/10">
              Orders are typically dispatched within 48 hours and delivered within 3–7 business
              days, depending on your location.
            </p>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

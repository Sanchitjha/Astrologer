import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Customer Reviews | Jyotish Shreenath Ji',
  description:
    "Read genuine, verified customer reviews of Jyotish Shreenath Ji's gemstones, Rudraksha & spiritual jewelry — real experiences from real buyers.",
  keywords: ['jyotish shreenath ji reviews', 'customer reviews', 'testimonials', 'verified reviews'],
};

const trustPoints = [
  { icon: '✅', label: '100% verified buyer reviews — no fake or incentivized ratings' },
  { icon: '✅', label: 'Certified, energised products — reflected in what customers say about authenticity and service' },
  { icon: '✅', label: 'Every review, good and constructive, is shown exactly as our customers share it' },
  { icon: '✅', label: 'Direct WhatsApp support if any order doesn\'t meet expectations' },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Customer Reviews"
        titleHindi="ग्राहक समीक्षाएँ"
        subtitle="What Our Customers Say"
        crumbs={[{ label: 'Customer Reviews' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <p className="text-[#2A1408]/60 text-sm leading-relaxed text-center">
            Every review here comes from a verified buyer — real people who&apos;ve trusted us for
            their gemstone, Rudraksha, and spiritual jewelry needs. From authenticity and
            certification to energisation and delivery experience, these reviews reflect what
            it&apos;s actually like to shop with us. We believe transparency builds trust, which is
            why we display all verified reviews, good and constructive, exactly as our customers
            share them.
          </p>

          {/* Reviews widget placeholder */}
          <div className="glass-card rounded-2xl p-10 text-center space-y-2 border-dashed">
            <span className="text-4xl block" aria-hidden="true">⭐</span>
            <p className="text-[#9E7016] font-semibold text-sm" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Customer Reviews Widget
            </p>
            <p className="text-[#2A1408]/45 text-xs leading-relaxed max-w-sm mx-auto">
              Live star ratings, review text, and customer photos will appear here once a
              reviews app (e.g. Judge.me, Loox, or Yotpo) is connected to the store.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Why Customers Trust Us
            </h2>
            <div className="space-y-3">
              {trustPoints.map((t) => (
                <div key={t.label} className="flex items-start gap-2.5 text-sm">
                  <span className="text-base mt-0.5">{t.icon}</span>
                  <p className="text-[#2A1408]/65">{t.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 space-y-4 text-center">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Have You Shopped With Us?
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed max-w-xl mx-auto">
              We&apos;d love to hear about your experience. Share a review after your purchase and
              help other customers make informed decisions.
            </p>
            <a
              href="https://wa.me/917600010811?text=Namaste%2C%20I%20would%20like%20to%20share%20a%20review%20of%20my%20recent%20purchase."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
              style={{ fontFamily: 'var(--font-cinzel)' }}
            >
              Leave a Review →
            </a>
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

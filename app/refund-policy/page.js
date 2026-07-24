import PageHeader from '@/components/PageHeader';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Refund & Return Policy | Jyotish Shreenath Ji',
  description:
    'Read our Refund, Return & Exchange Policy for gemstones, bracelets and spiritual products purchased from Jyotish Shreenath Ji.',
  keywords: ['refund policy', 'return policy', 'exchange policy', 'jyotish shreenath ji refund'],
};

const sections = [
  {
    heading: 'Eligibility for Return or Exchange',
    body: [
      'Returns or exchanges are accepted only in the following cases:',
    ],
    list: [
      'The product arrived damaged in transit',
      'You received the wrong item',
      'The product is proven to be defective or not as described',
    ],
    footer:
      'Proof required: To process any return or exchange, we require an unboxing video or clear photographic evidence showing the issue. This helps us verify the condition of the item and process your request quickly. Requests without this proof may not be processed.',
  },
  {
    heading: 'Timeframe',
    body: [
      'Return or exchange requests must be raised within 7 days of delivery. The product must be sent back in its original condition, with original packaging, tags, and certification (if applicable) intact. Products that show signs of use, tampering, or missing accessories may not qualify for a refund.',
    ],
  },
  {
    heading: 'Products Not Eligible for Return',
    body: ['The following categories are final sale and not eligible for return or exchange, unless received damaged or defective:'],
    list: [
      'Customized or made-to-order jewelry',
      'Items purchased under a sale/clearance offer',
      'Gift cards',
      'Products received exactly as ordered (correct item, correct condition)',
    ],
  },
  {
    heading: 'Custom / Made-to-Order Items',
    body: [
      'For personalized or made-to-order pieces (rings, pendants, engraved items, etc.), production begins only after you approve the final design. Once approved and production has started, the making charges become non-refundable. If a cancellation is requested after this point, applicable making charges will be deducted from any refund due.',
    ],
  },
  {
    heading: 'Refund Process',
    body: ['Once your returned item is received and inspected, we will notify you via email of the approval or rejection of your refund request.'],
    list: [
      'Prepaid orders (card/UPI/net banking): refunded to the original payment method within 5–7 working days',
      'COD orders: refunded via bank transfer; you may be asked to share bank details (cancelled cheque/passbook copy) to process this',
      'Refunds are only issued to the original payment method or account used at the time of purchase, in line with standard financial compliance practices',
    ],
  },
  {
    heading: 'Non-Refundable Charges',
    body: [
      "Shipping charges, taxes, and duties are non-refundable. Return shipping costs are the customer's responsibility unless the return is due to our error (wrong or damaged item).",
    ],
  },
  {
    heading: 'Not Eligible for Return',
    body: ["We're unable to accept returns for:"],
    list: [
      'Change of mind after purchase',
      "Minor packaging imperfections that don't affect the product",
      'Small variations in color/size due to photography, lighting, or natural material differences (common with natural gemstones and handmade items)',
    ],
  },
  {
    heading: 'Cancellations',
    body: [
      'Orders can be cancelled only before they are dispatched. Once an order is shipped, it cannot be cancelled — a return may be initiated instead, per the eligibility criteria above.',
    ],
  },
  {
    heading: 'International Orders',
    body: [
      'For orders shipped outside India, refunds (where applicable) are processed within 40–45 days of resolution. Customs duties, VAT, or import charges are the customer\'s responsibility and are non-refundable.',
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        title="Refund & Return Policy"
        titleHindi="धनवापसी एवं वापसी नीति"
        subtitle="Return & Exchange Policy"
        crumbs={[{ label: 'Refund Policy' }]}
      />

      <main className="bg-[#FBF3E0] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="glass-card rounded-2xl p-8">
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              At Jyotish Shreenath Ji, every product is carefully sourced and inspected before
              dispatch. As many of our items are natural and handcrafted, we ask you to review
              this policy before requesting a return, exchange, or refund.
            </p>
          </div>

          {sections.map((s) => (
            <div key={s.heading} className="glass-card rounded-2xl p-8 space-y-3">
              <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="text-[#2A1408]/60 text-sm leading-relaxed">{p}</p>
              ))}
              {s.list && (
                <ul className="space-y-2 pt-1">
                  {s.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#2A1408]/60">
                      <span className="text-[#C1102E] text-xs mt-1.5">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.footer && (
                <p className="text-[#2A1408]/50 text-xs leading-relaxed pt-2 border-t border-[#D4AF37]/10">
                  {s.footer}
                </p>
              )}
            </div>
          ))}

          <div className="glass-card rounded-2xl p-8 space-y-3">
            <h2 className="text-[#9E7016] font-bold text-lg" style={{ fontFamily: 'var(--font-cinzel)' }}>
              Need Help?
            </h2>
            <p className="text-[#2A1408]/60 text-sm leading-relaxed">
              For any questions about your return or refund, reach out to us:
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
          </div>
        </div>
      </main>

      <ContactCTA />
    </>
  );
}

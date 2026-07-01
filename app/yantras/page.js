import PageHeader from '@/components/PageHeader';
import YantraGrid from '@/components/YantraGrid';

export const metadata = {
  title: 'Sacred Yantras Collection — Buy Authentic Yantras Online',
  description:
    'Shop authentic, energised Yantras — Shree Yantra, Kuber Yantra, Lakshmi Ganesh, Mahamrityunjay and more. Recommended by Rohit Sharmaji. Sourced from GemsMantra.',
  keywords: [
    'buy yantra online', 'shree yantra', 'kuber yantra', 'lakshmi yantra',
    'authentic yantra india', 'energised yantra', 'yantra for wealth',
    'pyrite yantra frame', 'shaligram yantra',
  ],
  openGraph: {
    title: 'Sacred Yantras Collection | Jyotish Shreenath Ji',
    description: 'Authentic, energised Yantras for prosperity, protection and spiritual growth.',
    images: ['/logo.jpg'],
  },
};

export default function YantrasPage() {
  return (
    <>
      <PageHeader
        title="Our Yantra Collection"
        titleHindi="हमारे यंत्र"
        subtitle="Sacred Instruments"
        crumbs={[{ label: 'Yantras' }]}
      />
      <YantraGrid />
    </>
  );
}

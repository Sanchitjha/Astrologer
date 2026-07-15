import Hero from '@/components/Hero';
import AstrologerBio from '@/components/AstrologerBio';
import OnlineServices from '@/components/OnlineServices';
import ZodiacSigns from '@/components/ZodiacSigns';
import LoveProblems from '@/components/LoveProblems';
import HowItWorks from '@/components/HowItWorks';
import TrustBadges from '@/components/TrustBadges';
import WhyChooseUs from '@/components/WhyChooseUs';
import VideoTestimonials from '@/components/VideoTestimonials';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import YantraGrid from '@/components/YantraGrid';
import ContactCTA from '@/components/ContactCTA';
import { yantras } from '@/data/yantras';
import { findPublicImage } from '@/lib/publicImage';

export const metadata = {
  title: 'Jyotish Shreenath Ji | Best Astrologer in India — Rohit Sharma',
  description:
    'Consult with Rohit Sharma — Best Astrologer in India. Expert Vedic Astrology for love problems, marriage, career, Kundli reading, and horoscope matching. Online consultation via WhatsApp, Zoom, and Phone.',
  keywords: [
    'best astrologer in India',
    'online astrologer India',
    'Vedic astrology consultation',
    'love problem solution',
    'kundli reading',
    'horoscope matching',
    'marriage astrology',
    'career astrology',
    'Jyotish Shreenath Ji',
    'Rohit Sharma astrologer',
  ],
  openGraph: {
    title: 'Jyotish Shreenath Ji | Best Astrologer in India',
    description:
      'Get accurate Vedic astrology guidance from Rohit Sharma — trusted by 5000+ clients. Love, marriage, career, Kundli, and horoscope solutions.',
    type: 'website',
    url: 'https://jyotishshreenath.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyotish Shreenath Ji | Best Astrologer in India',
    description: 'Expert Vedic astrology consultation for love, marriage & career.',
  },
  alternates: {
    canonical: 'https://jyotishshreenath.com',
  },
};

export default function HomePage() {
  const yantrasWithPhotos = yantras.map((y) => ({ ...y, photo: findPublicImage('yantras', y.slug) }));

  return (
    <>
      {/* Section 2 — Hero Banner */}
      <Hero />

      {/* Section 3 — Best Online Astrologer in India */}
      <AstrologerBio />

      {/* Section 4 — Our Online Astrology Services */}
      <OnlineServices />

      {/* Section 5 — Zodiac Signs Prediction */}
      <ZodiacSigns />

      {/* Section 6 — Love Problem Solution cards */}
      <LoveProblems />

      {/* Section 7 — How Online Astrology Consultation Works */}
      <HowItWorks />

      {/* Section 8 — Trust Badges */}
      <TrustBadges />

      {/* Section 9 — Why Choose Rohit Sharma? */}
      <WhyChooseUs />

      {/* Section 10 — Success Stories (Video Testimonials) */}
      <VideoTestimonials />

      {/* Section 11 — What Our Clients Say (Reviews) */}
      <Reviews />

      {/* Section 12 — Frequently Asked Questions */}
      <FAQ />

      {/* Bonus — Yantra Collection preview */}
      <YantraGrid preview yantras={yantrasWithPhotos} />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

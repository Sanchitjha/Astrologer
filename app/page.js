import Hero from '@/components/Hero';
import Services from '@/components/Services';
import YantraGrid from '@/components/YantraGrid';
import Testimonials from '@/components/Testimonials';
import AboutTeaser from '@/components/AboutTeaser';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services preview />
      <YantraGrid preview />
      <AboutTeaser />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingCallButton from '@/components/FloatingCallButton';

// Self-hosted variable fonts — no network dependency, so pages always load fast & offline.
const cinzel = localFont({
  src: './fonts/Cinzel.woff2',
  weight: '400 900',
  style: 'normal',
  variable: '--font-cinzel',
  display: 'swap',
});

const notoSerif = localFont({
  src: './fonts/NotoSerif.woff2',
  weight: '400 700',
  style: 'normal',
  variable: '--font-serif',
  display: 'swap',
});

const notoDevanagari = localFont({
  src: './fonts/NotoDevanagari.woff2',
  weight: '400 700',
  style: 'normal',
  variable: '--font-devanagari',
  display: 'swap',
});

const SITE_URL = 'https://jyotishshreenathjee.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ज्योतिष श्रीनाथ जी | Jyotish Shreenath Ji — Expert Vedic Astrologer',
    template: '%s | ज्योतिष श्रीनाथ जी',
  },
  description:
    'Rohit Sharmaji — Expert Vedic Astrologer with 20+ years experience. Kundali Vishleshan, Yantra, Vastu Shastra, Gemstone Advice. Call 76000 10811.',
  keywords: [
    'jyotish', 'astrologer', 'yantra', 'kundali', 'vedic astrology',
    'rohit sharmaji', 'vastu shastra', 'jyotish shreenath ji', 'shree yantra',
    'kuber yantra', 'kundali vishleshan', 'dosh nivaran', 'rashifal',
    'gemstone advice', 'vedic astrology india', 'astrology consultation',
  ],
  authors: [{ name: 'Rohit Sharmaji', url: SITE_URL }],
  creator: 'Rohit Sharmaji — Jyotish Shreenath Ji',
  publisher: 'Jyotish Shreenath Ji',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: ['en_IN'],
    title: 'ज्योतिष श्रीनाथ जी | Jyotish Shreenath Ji',
    description:
      'Expert Vedic Astrology — Yantra, Kundali Vishleshan, Vastu Shastra. 20+ years experience. Rohit Sharmaji. Call 76000 10811.',
    siteName: 'Jyotish Shreenath Ji',
    images: [{ url: '/logo.jpg', width: 512, height: 512, alt: 'ज्योतिष श्रीनाथ जी' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ज्योतिष श्रीनाथ जी | Jyotish Shreenath Ji',
    description: 'Expert Vedic Astrology — Yantra, Kundali, Vastu. Rohit Sharmaji.',
    images: ['/logo.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': SITE_URL,
      name: 'ज्योतिष श्रीनाथ जी — Jyotish Shreenath Ji',
      alternateName: 'Jyotish Shreenath Ji',
      description: 'Expert Vedic Astrologer — Rohit Sharmaji. Kundali, Yantra, Vastu, Gemstone advice with 20+ years experience.',
      url: SITE_URL,
      telephone: '+917600010811',
      image: `${SITE_URL}/logo.jpg`,
      priceRange: '₹₹',
      address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      sameAs: [`https://wa.me/917600010811`],
    },
    {
      '@type': 'Person',
      name: 'Rohit Sharmaji',
      jobTitle: 'Vedic Astrologer',
      worksFor: { '@type': 'LocalBusiness', name: 'Jyotish Shreenath Ji' },
      knowsAbout: ['Vedic Astrology', 'Kundali', 'Yantra', 'Vastu Shastra', 'Gemology'],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hi"
      className={`${cinzel.variable} ${notoSerif.variable} ${notoDevanagari.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <FloatingCallButton />
      </body>
    </html>
  );
}

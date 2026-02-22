import './globals.css';
import ScrollAnimator from './components/ScrollAnimator';

export const metadata = {
  metadataBase: new URL('https://rajkumar-portfolio.vercel.app'),
  title: {
    default: 'Rajkumar | Full-Stack Web Developer — Portfolio',
    template: '%s | Rajkumar Portfolio',
  },
  description:
    'Rajkumar is a Junior Software Developer at Skillmin Technology specialising in MERN Stack, Java, Python, and full-stack web development. Explore projects, skills, and experience.',
  keywords: [
    'Rajkumar',
    'portfolio',
    'web developer',
    'MERN stack',
    'full stack developer',
    'React',
    'Node.js',
    'Java',
    'Python',
    'software developer',
    'Skillmin Technology',
    'Next.js',
    'MongoDB',
    'Express.js',
    'junior developer',
    'frontend developer',
    'backend developer',
  ],
  authors: [{ name: 'Rajkumar', url: 'https://rajkumar-portfolio.vercel.app' }],
  creator: 'Rajkumar',
  publisher: 'Rajkumar',
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
    locale: 'en_US',
    url: 'https://rajkumar-portfolio.vercel.app',
    siteName: 'Rajkumar Portfolio',
    title: 'Rajkumar | Full-Stack Web Developer — Portfolio',
    description:
      'Junior Software Developer at Skillmin Technology. Specialises in MERN Stack, Java, Python, and building scalable web applications.',
    images: [
      {
        url: '/assets/images/hero.png',
        width: 800,
        height: 800,
        alt: 'Rajkumar — Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajkumar | Full-Stack Web Developer — Portfolio',
    description:
      'Junior Software Developer specialising in MERN Stack, Java & Python. Explore projects and skills.',
    images: ['/assets/images/hero.png'],
  },
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
  verification: {
    // Add your Google Search Console verification token here when available
    // google: 'your-verification-token',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2506ad" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
        <ScrollAnimator />
      </body>
    </html>
  );
}

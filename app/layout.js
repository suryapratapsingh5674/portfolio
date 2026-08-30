import './globals.css';
import './components.css';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans-var',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-var',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Surya Tomar — Full-Stack Developer',
  description:
    'Full-stack developer building fast, scalable web applications. Specializing in React, Next.js, Node.js, and AI-integrated products.',
  keywords: [
    'Surya Tomar',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Portfolio',
    'India'
  ],
  authors: [{ name: 'Surya Tomar' }],
  creator: 'Surya Tomar',

  openGraph: {
    type: 'website',
    url: 'https://www.suryatomar.tech',
    title: 'Surya Tomar — Full-Stack Developer',
    description:
      'Full-stack developer building fast, scalable web applications. Specializing in React, Next.js, Node.js, and AI-integrated products.',
    siteName: 'Surya Tomar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Surya Tomar — Full-Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Surya Tomar — Full-Stack Developer',
    description:
      'Full-stack developer building fast, scalable web applications.',
    creator: '@suryat6574',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },

  alternates: {
    canonical: 'https://www.suryatomar.tech',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#EBE9E1" />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}

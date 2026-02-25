import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kavipay.io'),
  title: {
    default: 'Kavipay - Your Money, Without Borders',
    template: '%s | Kavipay',
  },
  description:
    'Spend globally with virtual cards that work with Apple Pay & Google Pay. Zero fees, instant funding, total control. Join 10,000+ users worldwide.',
  keywords: [
    'virtual card',
    'global payments',
    'zero fees',
    'instant funding',
    'digital wallet',
    'international payments',
    'Apple Pay',
    'Google Pay',
    'Visa card',
    'Mastercard',
    'online payments',
    'fintech',
  ],
  authors: [{ name: 'Kavipay', url: 'https://kavipay.io' }],
  creator: 'Kavipay',
  publisher: 'Kavipay',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kavipay.io',
    title: 'Kavipay - Your Money, Without Borders',
    description:
      'Spend globally with virtual cards that work with Apple Pay & Google Pay. Zero fees, instant funding, total control.',
    siteName: 'Kavipay',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kavipay - Global Virtual Cards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kavipay - Your Money, Without Borders',
    description:
      'Spend globally with virtual cards that work with Apple Pay & Google Pay. Zero fees, instant funding, total control.',
    images: ['/og-image.png'],
    creator: '@kavipay',
    site: '@kavipay',
  },
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
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://kavipay.io',
  },
  category: 'finance',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6366F1' },
    { media: '(prefers-color-scheme: dark)', color: '#4F46E5' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';

/* Same families, weights and styles the coming-soon site loads from Google Fonts:
   Cormorant Garamond ital,wght@0,300;0,400;0,500;1,300 + Jost wght@300;400;500 */
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap'
});

const sans = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'YOD — Wear Your Definition | Premium Streetwear',
  description:
    'YOD — premium oversized streetwear from Bangalore. Heavyweight 240 GSM combed cotton, architectural cuts, NFC-connected apparel. Shop Drop 01.',
  keywords: ['YOD', 'theyod', 'YOD clothing', 'premium streetwear India', 'oversized tee', 'Bangalore streetwear', 'NFC apparel'],
  metadataBase: new URL('https://www.theyod.com'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'YOD — Wear Your Definition',
    description: 'Premium oversized streetwear. Drop 01 is live.',
    url: 'https://www.theyod.com',
    siteName: 'YOD',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.jpg' }]
  },
  robots: 'index, follow, max-image-preview:large'
};

export const viewport: Viewport = { themeColor: '#000000' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

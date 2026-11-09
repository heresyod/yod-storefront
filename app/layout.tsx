import type { Metadata } from 'next';
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'YOD — Wear Your Definition | Premium Streetwear',
  description:
    'YOD — premium oversized streetwear from Bangalore. Heavyweight 240 GSM combed cotton, architectural cuts, NFC-connected apparel. Shop Drop 01.',
  keywords: ['YOD', 'theyod', 'YOD clothing', 'premium streetwear India', 'oversized tee', 'Bangalore streetwear', 'NFC apparel'],
  metadataBase: new URL('https://www.theyod.com'),
  openGraph: {
    title: 'YOD — Wear Your Definition',
    description: 'Premium oversized streetwear. Drop 01 is live.',
    url: 'https://www.theyod.com',
    siteName: 'YOD',
    locale: 'en_IN',
    type: 'website'
  },
  themeColor: '#000000',
  robots: 'index, follow, max-image-preview:large'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-ink text-bone antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

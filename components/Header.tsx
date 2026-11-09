'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import clsx from 'clsx';

const NAV = [
  { label: 'Shop Drops', href: '#drops' },
  { label: 'Product DNA', href: '#dna' },
  { label: 'NFC Tech', href: '#nfc' },
  { label: 'About', href: '#about' }
];

export default function Header() {
  const { openCart, itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink border-b border-iron/60 text-bone/90 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2.5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 brand-label text-fog">
              <span>Drop 01 — Live now</span>
              <span>·</span>
              <span>Free shipping over ₹2,499</span>
              <span>·</span>
              <span>NFC-connected apparel</span>
              <span>·</span>
              <span>Made in India</span>
              <span>·</span>
              <span>240 GSM heavyweight cotton</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={clsx(
          'sticky top-0 z-40 transition-all duration-300 backdrop-blur-xl',
          scrolled ? 'bg-ink/85 border-b border-iron/60' : 'bg-ink/40'
        )}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="YOD home">
            <span className="font-display text-3xl md:text-4xl leading-none text-bone group-hover:text-accent transition-colors">
              YOD
            </span>
            <span className="hidden sm:inline brand-label text-fog mt-2">
              Wear Your Definition
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="brand-label text-bone/80 hover:text-bone link-underline transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-5 md:gap-6">
            <span className="hidden md:inline brand-label text-fog">INR / ₹</span>
            <button
              aria-label="Search"
              className="text-bone/80 hover:text-bone transition-colors"
            >
              <SearchIcon />
            </button>
            <button
              aria-label="Open cart"
              onClick={openCart}
              className="relative text-bone/80 hover:text-bone transition-colors"
            >
              <BagIcon />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-accent text-ink text-[10px] font-semibold rounded-full min-w-4 h-4 px-1 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden text-bone"
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-iron bg-ink/95 backdrop-blur-xl">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="brand-label text-bone/90"
                >
                  {item.label}
                </a>
              ))}
              <span className="brand-label text-fog pt-2 border-t border-iron/60">INR / ₹</span>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="9" r="6.5" />
      <path d="m14 14 4 4" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 8h14l-1 12H6L5 8Z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 1 1 6 0v2" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
      ) : (
        <>
          <path d="M4 7h16" strokeLinecap="round" />
          <path d="M4 17h16" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

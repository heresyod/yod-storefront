import type { Product } from './types';

/**
 * Phase-1 catalogue — curated DTF-printed oversized tees.
 * Replace this mock layer with REST/GraphQL calls from lib/api.ts
 * when the storefront backend is live. Shape is stable.
 */
export const DROP_01_PRODUCTS: Product[] = [
  {
    id: 'yod-001',
    slug: 'the-vulture-noir',
    title: 'The Vulture',
    subtitle: 'Crest of the first collection',
    price: 2199,
    currency: 'INR',
    fitSpec: '240 GSM Oversized Fit',
    gsm: 240,
    fabric: '100% Combed Cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorway: 'Noir',
    imageFront: '/products/vulture-front.jpg',
    imageBack: '/products/vulture-back.jpg',
    nfcEnabled: true,
    dropCode: 'DROP-01',
    inStock: true
  },
  {
    id: 'yod-002',
    slug: 'definition-mark',
    title: 'Definition',
    subtitle: 'The founding mark, reversed',
    price: 2199,
    currency: 'INR',
    fitSpec: '240 GSM Oversized Fit',
    gsm: 240,
    fabric: '100% Combed Cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorway: 'Bone',
    imageFront: '/products/definition-front.jpg',
    imageBack: '/products/definition-back.jpg',
    nfcEnabled: true,
    dropCode: 'DROP-01',
    inStock: true
  },
  {
    id: 'yod-003',
    slug: 'quiet-rebellion',
    title: 'Quiet Rebellion',
    subtitle: 'Stitched into every seam',
    price: 2299,
    currency: 'INR',
    fitSpec: '240 GSM Oversized Fit',
    gsm: 240,
    fabric: '100% Combed Cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorway: 'Graphite',
    imageFront: '/products/rebellion-front.jpg',
    imageBack: '/products/rebellion-back.jpg',
    nfcEnabled: true,
    dropCode: 'DROP-01',
    inStock: true
  },
  {
    id: 'yod-004',
    slug: 'own-world',
    title: 'Own World',
    subtitle: 'For those who draw their own line',
    price: 2199,
    currency: 'INR',
    fitSpec: '240 GSM Oversized Fit',
    gsm: 240,
    fabric: '100% Combed Cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorway: 'Noir',
    imageFront: '/products/ownworld-front.jpg',
    imageBack: '/products/ownworld-back.jpg',
    nfcEnabled: true,
    dropCode: 'DROP-01',
    inStock: true
  },
  {
    id: 'yod-005',
    slug: 'architect-cut',
    title: 'Architect',
    subtitle: 'Construction over graphic',
    price: 2399,
    currency: 'INR',
    fitSpec: '240 GSM Oversized Fit',
    gsm: 240,
    fabric: '100% Combed Cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorway: 'Bone',
    imageFront: '/products/architect-front.jpg',
    imageBack: '/products/architect-back.jpg',
    nfcEnabled: true,
    dropCode: 'DROP-01',
    inStock: true
  },
  {
    id: 'yod-006',
    slug: 'patient-unflinching',
    title: 'Patient. Unflinching.',
    subtitle: 'Back-panel manifesto',
    price: 2299,
    currency: 'INR',
    fitSpec: '240 GSM Oversized Fit',
    gsm: 240,
    fabric: '100% Combed Cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colorway: 'Graphite',
    imageFront: '/products/patient-front.jpg',
    imageBack: '/products/patient-back.jpg',
    nfcEnabled: true,
    dropCode: 'DROP-01',
    inStock: true
  }
];

export const formatINR = (amount: number): string =>
  `₹${amount.toLocaleString('en-IN')}`;

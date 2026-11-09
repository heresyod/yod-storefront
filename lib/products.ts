import type { Product } from './types';

/**
 * Drop 01 — the oversized mock-neck tee in four colourways.
 * Images are background-removed cut-outs (transparent WebP) so they sit
 * on the site's own card background. Replace this mock layer with
 * REST/GraphQL calls from lib/api.ts when the backend is live.
 */
const base = {
  subtitle: 'Oversized mock neck',
  price: 2199,
  currency: 'INR' as const,
  fitSpec: '240 GSM Oversized Fit',
  gsm: 240,
  fabric: '100% Combed Cotton',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'] as Product['sizes'],
  nfcEnabled: true,
  dropCode: 'DROP-01',
  inStock: true
};

export const DROP_01_PRODUCTS: Product[] = [
  { ...base, id: 'yod-001', slug: 'mock-neck-noir', title: 'Noir', colorway: 'Noir', imageFront: '/products/noir.webp', imageBack: '/products/noir.webp' },
  { ...base, id: 'yod-002', slug: 'mock-neck-chalk', title: 'Chalk', colorway: 'Chalk', imageFront: '/products/chalk.webp', imageBack: '/products/chalk.webp' },
  { ...base, id: 'yod-003', slug: 'mock-neck-bone', title: 'Bone', colorway: 'Bone', imageFront: '/products/bone.webp', imageBack: '/products/bone.webp' },
  { ...base, id: 'yod-004', slug: 'mock-neck-graphite', title: 'Graphite', colorway: 'Graphite', imageFront: '/products/graphite.webp', imageBack: '/products/graphite.webp' }
];

/** Swatch colours sampled from the product photography. */
export const COLORWAYS: Record<string, string> = {
  Noir: '#141414',
  Chalk: '#ecebe6',
  Bone: '#ece4d0',
  Graphite: '#3a3a3a'
};

export const formatINR = (amount: number): string => `₹${amount.toLocaleString('en-IN')}`;

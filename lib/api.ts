/**
 * Storefront adapter. Switch NEXT_PUBLIC_STORE_API_MODE between
 * 'mock' | 'rest' | 'graphql' without touching UI code.
 *
 * REST target: Node/Express endpoints the backend team will expose.
 * GraphQL target: Shopify Storefront API or Medusa.
 */
import type { Product } from './types';
import { DROP_01_PRODUCTS } from './products';

const MODE = process.env.NEXT_PUBLIC_STORE_API_MODE ?? 'mock';
const BASE = process.env.NEXT_PUBLIC_STORE_API_BASE ?? '';

export async function fetchDropProducts(dropCode = 'DROP-01'): Promise<Product[]> {
  if (MODE === 'mock') {
    return DROP_01_PRODUCTS.filter((p) => p.dropCode === dropCode);
  }

  if (MODE === 'rest') {
    const res = await fetch(`${BASE}/drops/${dropCode}/products`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error(`REST fetch failed: ${res.status}`);
    return (await res.json()) as Product[];
  }

  if (MODE === 'graphql') {
    const query = `
      query DropProducts($code: String!) {
        drop(code: $code) {
          products { id slug title subtitle price currency fitSpec gsm fabric sizes colorway imageFront imageBack nfcEnabled dropCode inStock }
        }
      }`;
    const res = await fetch(`${BASE}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { code: dropCode } })
    });
    const json = await res.json();
    return json.data.drop.products as Product[];
  }

  return [];
}

export async function subscribeToDropAlerts(email: string): Promise<{ ok: boolean }> {
  if (MODE === 'mock') return { ok: true };
  const res = await fetch(`${BASE}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return { ok: res.ok };
}

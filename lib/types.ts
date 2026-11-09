export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  price: number;              // minor-currency-agnostic integer in INR
  currency: 'INR';
  fitSpec: string;            // e.g. "240 GSM Oversized Fit"
  gsm: number;
  fabric: string;
  sizes: Size[];
  colorway: string;
  imageFront: string;
  imageBack: string;
  nfcEnabled: boolean;
  dropCode: string;           // e.g. "DROP-01"
  inStock: boolean;
}

export interface CartLine {
  productId: string;
  slug: string;
  title: string;
  size: Size;
  price: number;
  image: string;
  quantity: number;
}

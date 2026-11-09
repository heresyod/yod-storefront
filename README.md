# YOD — Storefront (`yod-storefront`)

> Wear Your Definition.

Production-ready Next.js storefront for **theyod.com** — Phase 1: curated drops of heavyweight 240 GSM oversized DTF-printed tees with NFC-connected apparel.

---

## Stack

| Layer      | Choice                                                   |
| ---------- | -------------------------------------------------------- |
| Framework  | Next.js 14 (App Router, React 18, TypeScript)            |
| Styling    | Tailwind CSS 3.4 + CSS variables + Instrument Serif/Inter |
| State      | React Context (`CartProvider`) — zero server state       |
| Backend    | Storefront adapter — mock → REST → GraphQL (see `lib/api.ts`) |
| Animations | Framer Motion (installed) + CSS keyframes                |
| Deploy     | Vercel (recommended) · Netlify · self-host (Node 18+)     |

**No .NET anywhere.** The storefront adapter is engineered to plug into a Node/Express REST API, Medusa, or the Shopify Storefront API without touching UI code.

---

## Local setup

```bash
# 1. Install deps
npm install

# 2. Create local env
cp .env.example .env.local

# 3. Dev
npm run dev        # http://localhost:3000

# 4. Production build
npm run build && npm start
```

Scripts:

| Script           | Purpose                           |
| ---------------- | --------------------------------- |
| `npm run dev`    | Dev server with HMR               |
| `npm run build`  | Production bundle                 |
| `npm start`      | Serve the production build        |
| `npm run lint`   | Next/ESLint check                 |
| `npm run typecheck` | Strict TypeScript check        |

---

## Project layout

```
yod-storefront/
├── app/
│   ├── layout.tsx         # Fonts, metadata, CartProvider
│   ├── page.tsx           # Landing composition
│   └── globals.css        # Tailwind + brand tokens
├── components/
│   ├── Header.tsx         # Sticky nav + marquee + cart toggle
│   ├── Hero.tsx           # Drop 01 hero
│   ├── DropsGrid.tsx      # Product grid (fetches from lib/api)
│   ├── ProductCard.tsx    # Front/back hover, size pills, add-to-bag
│   ├── ProductDNA.tsx     # 240 GSM / cut / neckline / DTF spec panel
│   ├── NFCSection.tsx     # Tap → Verify → Unlock featurette
│   ├── CartDrawer.tsx     # Slide-out bag + free-ship meter
│   ├── NewsletterForm.tsx # Drop-alert signup
│   └── Footer.tsx         # Manifesto, link columns, oversized wordmark
├── lib/
│   ├── api.ts             # Storefront adapter (mock | rest | graphql)
│   ├── cart-context.tsx   # Cart state + hooks
│   ├── products.ts        # Drop 01 mock catalogue + INR formatter
│   └── types.ts           # Product, CartLine, Size
├── public/
│   └── (shoot assets land here — /products/*.jpg)
├── tailwind.config.ts     # Brand palette + typography + keyframes
├── tsconfig.json
├── next.config.mjs
└── README.md
```

---

## Brand tokens

Defined in `tailwind.config.ts`:

```ts
ink:     '#000000'   // page background
ash:     '#0A0A0A'   // section band
smoke:   '#171717'   // card background
iron:    '#2A2A2A'   // hairlines / borders
steel:   '#3F3F3F'   // muted strokes
fog:     '#8A8A8A'   // secondary text
bone:    '#F5F2EC'   // primary text
chalk:   '#E8E4DC'   // off-white accent
accent:  '#C8A96A'   // single brass accent — used sparingly
```

Fonts (from `next/font/google`): **Instrument Serif** (display) · **Inter** (body) · **JetBrains Mono** (labels).

---

## Swapping the backend

Everything the UI needs flows through `lib/api.ts`. Switch mode via env:

```bash
NEXT_PUBLIC_STORE_API_MODE=mock        # default — reads lib/products.ts
NEXT_PUBLIC_STORE_API_MODE=rest        # calls ${BASE}/drops/:code/products
NEXT_PUBLIC_STORE_API_MODE=graphql     # POST ${BASE}/graphql
NEXT_PUBLIC_STORE_API_BASE=https://api.theyod.com
```

Expected REST contract:

```
GET  /drops/DROP-01/products   → Product[]
POST /subscribe                → { ok: boolean }   body: { email }
POST /checkout                 → { url: string }   (to wire on checkout button)
```

The `Product` shape lives in `lib/types.ts` — keep it in sync with the backend team's schema.

---

## Replacing placeholder art with real shoot

1. Drop photography into `public/products/` as `<slug>-front.jpg` and `<slug>-back.jpg`.
2. In `components/ProductCard.tsx`, replace `<PlaceholderArt />` with:

```tsx
import Image from 'next/image';
<Image src={hovered ? product.imageBack : product.imageFront} alt={product.title} fill className="object-cover" />
```

Paths already match `lib/products.ts`.

---

## Deployment

**Vercel (recommended):**
```bash
# One-time
npx vercel link
# Each release
git push      # auto-deploys on push to main
```

**Netlify:** add the Next.js runtime plugin — works out of the box.

**Self-host (Node 18+):**
```bash
npm run build && npm start   # binds :3000
# Reverse-proxy via nginx, add TLS (certbot), set env vars on the host.
```

Set these env vars on the host:
- `NEXT_PUBLIC_STORE_API_BASE`
- `NEXT_PUBLIC_STORE_API_MODE`
- `NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD`

---

## Push to GitHub

This repo is initialised locally. To push:

```bash
# Create the empty remote (requires GitHub CLI)
gh repo create yod-storefront --private --source=. --remote=origin --push

# OR manually: create an empty repo on github.com, then
git remote add origin git@github.com:<your-user>/yod-storefront.git
git add .
git commit -m "chore: initial YOD storefront scaffold"
git branch -M main
git push -u origin main
```

---

## What's intentionally not here (Phase 1 scope)

- Custom design studio / tee customiser — not in Phase 1 per brand brief.
- Checkout flow UI — button wires out to `/checkout` once backend endpoint exists.
- Account / login — defer to Phase 2 with the auth provider choice.
- CMS — copy is in-component for now; lift to a headless CMS once content velocity picks up.

---

© 2026 YOD · theyod.com

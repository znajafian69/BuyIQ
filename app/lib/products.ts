/**
 * lib/products.ts
 * ─────────────────────────────────────────────────────────────────
 * CENTRAL PRODUCT DATABASE
 *
 * Update prices here manually until Amazon/Keepa API is connected.
 * Later: replace the static values with API calls — everything else
 * on the site updates automatically.
 *
 * Last updated: April 2026
 * ─────────────────────────────────────────────────────────────────
 */

export interface PricePoint {
  month: string
  price: number
}

export interface Product {
  // ── Identity ──────────────────────────────────────────────────
  id: string                  // unique slug, matches your folder name
  name: string                // full product name
  brand: string
  category: string
  emoji: string               // fallback if no image
  image: string               // Amazon image URL
  asin: string                // Amazon ASIN

  // ── Pricing (UPDATE THESE MANUALLY) ──────────────────────────
  price: number               // current price in USD
  originalPrice: number       // list / was price
  allTimeLow: number          // lowest ever seen (from Keepa)
  discount: number            // percentage off (auto-calculated below)
  priceHistory: PricePoint[]  // for the bar chart

  // ── Amazon data ───────────────────────────────────────────────
  rating: number              // e.g. 4.5
  reviewCount: string         // e.g. "8,004"
  reviewCountRaw: number      // for sorting
  isPrime: boolean
  inStock: boolean
  amazonBadge: string         // e.g. "Amazon's Choice" or ""
  boughtLastMonth: string     // e.g. "10K+"
  keepaTrackers: number       // how many users tracking on Keepa

  // ── BuyIQ scores ──────────────────────────────────────────────
  buyiqScore: number          // 0-100 overall
  categoryScores: { label: string; score: number }[]

  // ── Review content ────────────────────────────────────────────
  pros: string[]
  cons: string[]
  verdict: string

  // ── Links ─────────────────────────────────────────────────────
  affiliateUrl: string        // always ?tag=buyiq-20
  reviewPage: string          // e.g. /product/airpods3
}

// ─────────────────────────────────────────────────────────────────
// HELPER — builds affiliate URL from ASIN
// ─────────────────────────────────────────────────────────────────
const amazon = (asin: string) =>
  `https://www.amazon.com/dp/${asin}?tag=buyiq-20`

// ─────────────────────────────────────────────────────────────────
// ✏️  PRODUCT DATABASE — edit prices here
// ─────────────────────────────────────────────────────────────────
export const PRODUCTS: Record<string, Product> = {

  // ── Apple AirPods Pro 3 ───────────────────────────────────────
  'airpods3': {
    id: 'airpods3',
    name: 'Apple AirPods Pro 3',
    brand: 'Apple',
    category: 'Wireless Earbuds',
    emoji: '🎧',
    image: 'https://m.media-amazon.com/images/I/61solmQSSlL._AC_SL1500_.jpg',
    asin: 'B0FQFB8FMG',

    // ✏️ UPDATE PRICES HERE
    price: 199.99,
    originalPrice: 249.00,
    allTimeLow: 169.00,
    discount: 20,
    priceHistory: [
      { month: 'Jan', price: 235 },
      { month: 'Feb', price: 169 },
      { month: 'Mar', price: 205 },
      { month: 'Apr', price: 199 },
    ],

    rating: 4.5,
    reviewCount: '8,004',
    reviewCountRaw: 8004,
    isPrime: true,
    inStock: true,
    amazonBadge: "Amazon's Choice",
    boughtLastMonth: '10K+',
    keepaTrackers: 967,

    buyiqScore: 91,
    categoryScores: [
      { label: 'Apple Integration', score: 99 },
      { label: 'ANC Performance',  score: 95 },
      { label: 'Live Translation',  score: 94 },
      { label: 'Sound Quality',     score: 92 },
      { label: 'Comfort',           score: 90 },
      { label: 'Health Features',   score: 90 },
      { label: 'Value for Money',   score: 82 },
      { label: 'Battery Life',      score: 80 },
    ],

    pros: [
      'Live Translation — translates conversations in real time',
      'Heart Rate Sensor built-in — no Apple Watch needed',
      'FDA-approved Hearing Aid feature — first ever in earbuds',
      'Best-in-class Active Noise Cancellation',
      'Personalized Spatial Audio with real-time head tracking',
      'High-Fidelity sound quality upgrade over previous gen',
      'USB-C charging case',
      '10K+ bought in the past month — extremely popular',
    ],
    cons: [
      'Only 4.5 stars — fewer reviews than AirPods Pro 2',
      '$199 is not the lowest — dropped to $169 in February',
      'Some features require latest iPhone software',
      'Android users get very limited functionality',
    ],
    verdict: 'The AirPods Pro 3 are Apple\'s most advanced earbuds ever. Live Translation, Heart Rate Sensor, and FDA Hearing Aid make them unique at this price. At $199 with 20% off, it\'s a strong deal — but this dropped to $169 in February, so wait if you can.',

    affiliateUrl: amazon('B0FQFB8FMG'),
    reviewPage: '/product/airpods3',
  },

  // ── Apple AirPods 4 (ANC) ─────────────────────────────────────
  'airpods4': {
    id: 'airpods4',
    name: 'Apple AirPods 4',
    brand: 'Apple',
    category: 'Wireless Earbuds',
    emoji: '🎧',
    image: 'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg',
    asin: 'B0DGJ7HYG1',

    // ✏️ UPDATE PRICES HERE
    price: 154.99,
    originalPrice: 179.00,
    allTimeLow: 108.00,
    discount: 13,
    priceHistory: [
      { month: 'Jan', price: 149 },
      { month: 'Feb', price: 108 },
      { month: 'Mar', price: 140 },
      { month: 'Apr', price: 155 },
    ],

    rating: 4.6,
    reviewCount: '19,473',
    reviewCountRaw: 19473,
    isPrime: true,
    inStock: true,
    amazonBadge: "Amazon's Choice",
    boughtLastMonth: '10K+',
    keepaTrackers: 472,

    buyiqScore: 87,
    categoryScores: [
      { label: 'Apple Integration', score: 99 },
      { label: 'Comfort & Fit',     score: 88 },
      { label: 'Sound Quality',     score: 87 },
      { label: 'Transparency Mode', score: 86 },
      { label: 'ANC Performance',   score: 84 },
      { label: 'Value for Money',   score: 85 },
      { label: 'Battery Life',      score: 82 },
    ],

    pros: [
      'Active Noise Cancellation — first time on standard AirPods',
      'Adaptive Transparency mode — sounds completely natural',
      'Personalized Spatial Audio with head tracking',
      'USB-C + wireless charging case included',
      'H2 chip — same powerful chip as AirPods Pro 2',
      '19,473 reviews with 4.6★ — extremely well proven',
      '10K+ bought in the past month',
    ],
    cons: [
      'No ear tips — open-ear design means less ANC than Pro',
      'All-time low was $108 in Feb — $155 is not the best price',
      'No Transparency mode as refined as AirPods Pro 3',
      'Fit may not work for everyone — no adjustable ear tips',
    ],
    verdict: 'AirPods 4 bring ANC to the standard AirPods line for the first time. For $45 less than Pro 3, you get 90% of the experience. The open-ear design is a love-it-or-hate-it. Price tip: this hit $108 in February — if you can wait, do it.',

    affiliateUrl: amazon('B0DGJ7HYG1'),
    reviewPage: '/product/airpods4',
  },

  // ── ADD MORE PRODUCTS BELOW ───────────────────────────────────
  // Copy any block above, change the id and all values.
  // Example:
  //
  // 'samsung-tv': {
  //   id: 'samsung-tv',
  //   name: 'Samsung 65" 4K QLED TV',
  //   brand: 'Samsung',
  //   category: 'Televisions',
  //   emoji: '📺',
  //   image: 'https://m.media-amazon.com/images/...',
  //   asin: 'BXXXXXXXXX',
  //   price: 899.99,
  //   originalPrice: 1299.99,
  //   allTimeLow: 749.00,
  //   discount: 31,
  //   priceHistory: [
  //     { month: 'Jan', price: 999 },
  //     { month: 'Feb', price: 749 },
  //     { month: 'Mar', price: 899 },
  //     { month: 'Apr', price: 899 },
  //   ],
  //   rating: 4.7,
  //   reviewCount: '24,500',
  //   reviewCountRaw: 24500,
  //   isPrime: true,
  //   inStock: true,
  //   amazonBadge: "Amazon's Choice",
  //   boughtLastMonth: '5K+',
  //   keepaTrackers: 1200,
  //   buyiqScore: 93,
  //   categoryScores: [...],
  //   pros: [...],
  //   cons: [...],
  //   verdict: '...',
  //   affiliateUrl: amazon('BXXXXXXXXX'),
  //   reviewPage: '/product/samsung-tv',
  // },

}

// ─────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS — used by product pages
// ─────────────────────────────────────────────────────────────────

/** Get a product by id */
export function getProduct(id: string): Product | null {
  return PRODUCTS[id] || null
}

/** Format price as string */
export function fmt(price: number): string {
  return `$${price.toFixed(2)}`
}

/** Is current price close to all-time low? (within 10%) */
export function isGoodDeal(product: Product): boolean {
  return product.price <= product.allTimeLow * 1.1
}

/** Price tip message */
export function priceTip(product: Product): string {
  if (product.price <= product.allTimeLow) {
    return `🔥 This IS the all-time lowest price — great time to buy!`
  }
  if (isGoodDeal(product)) {
    return `✅ Very close to the all-time low of ${fmt(product.allTimeLow)} — good time to buy.`
  }
  return `⚠️ Not the lowest — all-time low is ${fmt(product.allTimeLow)}. Consider waiting for a sale.`
}

/** Get all products as array */
export function getAllProducts(): Product[] {
  return Object.values(PRODUCTS)
}

/** Get products by category */
export function getByCategory(category: string): Product[] {
  return getAllProducts().filter(p => p.category === category)
}

/**
 * lib/products.ts
 * ═══════════════════════════════════════════════════════════════
 * MASTER PRODUCT LIST — edit this file only
 *
 * ✏️  To add a new product:
 *   1. Copy any product block below
 *   2. Change the data
 *   3. Set featured: true if you want it on the homepage today
 *   4. Save + push — everything updates automatically
 *
 * ✏️  To change today's featured product:
 *   - Set featured: true on the product you want
 *   - Set featured: false on all others
 *   - Save + push — done
 * ═══════════════════════════════════════════════════════════════
 */

export interface Product {
  id:              string    // matches your folder name e.g. 'airpods3'
  featured:        boolean   // true = shows as today's pick on homepage
  name:            string
  brand:           string
  category:        string
  tagline:         string    // short description for homepage card
  image:           string    // Amazon image URL
  asin:            string
  affiliateUrl:    string    // always ?tag=buyiq-20
  reviewPage:      string    // e.g. /product/airpods3

  // ✏️ UPDATE PRICES HERE
  price:           number
  originalPrice:   number
  allTimeLow:      number
  discount:        number

  rating:          number
  reviewCount:     string
  reviewCountRaw:  number
  isPrime:         boolean
  inStock:         boolean
  amazonBadge:     string
  boughtLastMonth: string
  keepaTrackers:   number
  buyiqScore:      number

  priceHistory: { month: string; price: number }[]
}

// ── HELPER ────────────────────────────────────────────────────────
const amazon = (asin: string) =>
  `https://www.amazon.com/dp/${asin}?tag=buyiq-20`

// ══════════════════════════════════════════════════════════════════
// ✏️  ADD / EDIT PRODUCTS HERE
// ══════════════════════════════════════════════════════════════════
export const PRODUCTS: Product[] = [

  // ── AirPods Pro 3 ─────────────────────────────────────────────
  {
    id:              'airpods3',
    featured:        true,       // ← today's homepage pick
    name:            'Apple AirPods Pro 3',
    brand:           'Apple',
    category:        'Wireless Earbuds',
    tagline:         'Live Translation, Heart Rate Sensor, FDA Hearing Aid. Is it worth $199?',
    image:           'https://m.media-amazon.com/images/I/61solmQSSlL._AC_SL1500_.jpg',
    asin:            'B0FQFB8FMG',
    affiliateUrl:    amazon('B0FQFB8FMG'),
    reviewPage:      '/product/airpods3',

    price:           199.99,
    originalPrice:   249.00,
    allTimeLow:      169.00,
    discount:        20,

    rating:          4.5,
    reviewCount:     '8,004',
    reviewCountRaw:  8004,
    isPrime:         true,
    inStock:         true,
    amazonBadge:     "Amazon's Choice",
    boughtLastMonth: '10K+',
    keepaTrackers:   967,
    buyiqScore:      91,

    priceHistory: [
      { month: 'Jan', price: 235 },
      { month: 'Feb', price: 169 },
      { month: 'Mar', price: 205 },
      { month: 'Apr', price: 199 },
    ],
  },

  // ── AirPods 4 (ANC) ───────────────────────────────────────────
  {
    id:              'airpods4',
    featured:        false,
    name:            'Apple AirPods 4 with ANC',
    brand:           'Apple',
    category:        'Wireless Earbuds',
    tagline:         'First-ever ANC on standard AirPods. Is $155 a good deal?',
    image:           'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg',
    asin:            'B0DGJ7HYG1',
    affiliateUrl:    amazon('B0DGJ7HYG1'),
    reviewPage:      '/product/airpods4',

    price:           154.99,
    originalPrice:   179.00,
    allTimeLow:      108.00,
    discount:        13,

    rating:          4.6,
    reviewCount:     '19,473',
    reviewCountRaw:  19473,
    isPrime:         true,
    inStock:         true,
    amazonBadge:     "Amazon's Choice",
    boughtLastMonth: '10K+',
    keepaTrackers:   472,
    buyiqScore:      87,

    priceHistory: [
      { month: 'Jan', price: 149 },
      { month: 'Feb', price: 108 },
      { month: 'Mar', price: 140 },
      { month: 'Apr', price: 155 },
    ],
  },

  // ── ADD MORE PRODUCTS HERE ─────────────────────────────────────
  // Copy the block above, change the data, set featured: true/false
  //
  // {
  //   id:              'samsung-tv',
  //   featured:        false,
  //   name:            'Samsung 65" QLED TV',
  //   brand:           'Samsung',
  //   category:        'Televisions',
  //   tagline:         'Best TV under $1000? We analyzed 24,000 reviews.',
  //   image:           'https://m.media-amazon.com/images/...',
  //   asin:            'BXXXXXXXXX',
  //   affiliateUrl:    amazon('BXXXXXXXXX'),
  //   reviewPage:      '/product/samsung-tv',
  //   price:           899.99,
  //   originalPrice:   1299.99,
  //   allTimeLow:      749.00,
  //   discount:        31,
  //   rating:          4.7,
  //   reviewCount:     '24,500',
  //   reviewCountRaw:  24500,
  //   isPrime:         true,
  //   inStock:         true,
  //   amazonBadge:     "Amazon's Choice",
  //   boughtLastMonth: '5K+',
  //   keepaTrackers:   1200,
  //   buyiqScore:      93,
  //   priceHistory: [
  //     { month: 'Jan', price: 999 },
  //     { month: 'Feb', price: 749 },
  //     { month: 'Mar', price: 899 },
  //     { month: 'Apr', price: 899 },
  //   ],
  // },

]

// ── HELPER FUNCTIONS ──────────────────────────────────────────────

/** Get featured product (homepage pick) */
export function getFeatured(): Product {
  return PRODUCTS.find(p => p.featured) || PRODUCTS[0]
}

/** Get all non-featured products */
export function getOthers(): Product[] {
  return PRODUCTS.filter(p => !p.featured)
}

/** Get a product by id */
export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

/** Get all products */
export function getAllProducts(): Product[] {
  return PRODUCTS
}

/** Format price */
export function fmt(n: number): string {
  return `$${n.toFixed(2)}`
}

/** Is current price close to all-time low? */
export function isGoodDeal(p: Product): boolean {
  return p.price <= p.allTimeLow * 1.1
}

/** Price tip message */
export function priceTip(p: Product): string {
  if (p.price <= p.allTimeLow) {
    return `🔥 This IS the all-time lowest price — great time to buy!`
  }
  if (isGoodDeal(p)) {
    return `✅ Very close to the all-time low of ${fmt(p.allTimeLow)} — good time to buy.`
  }
  return `⚠️ Not the lowest — all-time low is ${fmt(p.allTimeLow)}. Consider waiting for a sale.`
}
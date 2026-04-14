'use client'

import Link from 'next/link'
import { useState } from 'react'

// ══════════════════════════════════════════════════════════════════
// ✏️  EDIT PRODUCT DATA HERE — update prices, scores, info
// ══════════════════════════════════════════════════════════════════
const PRODUCT = {
  name:            'Apple AirPods Pro 3',
  brand:           'Apple',
  category:        'Wireless Earbuds',
  year:            '2025',
  image:           'https://m.media-amazon.com/images/I/61solmQSSlL._AC_SL1500_.jpg',
  asin:            'B0FQFB8FMG',
  affiliateUrl:    'https://www.amazon.com/dp/B0FQFB8FMG?tag=buyiq-20',

  // ✏️ UPDATE PRICES MANUALLY HERE
  price:           199.99,
  originalPrice:   249.00,
  allTimeLow:      169.00,
  discount:        20,

  rating:          4.5,
  reviewCount:     '8,004',
  isPrime:         true,
  inStock:         true,
  amazonBadge:     "Amazon's Choice",
  boughtLastMonth: '10K+',
  keepaTrackers:   967,
  buyiqScore:      91,

  // ✏️ UPDATE PRICE HISTORY FROM KEEPA
  priceHistory: [
    { month: 'Jan', price: 235 },
    { month: 'Feb', price: 169 },
    { month: 'Mar', price: 205 },
    { month: 'Apr', price: 199 },
  ],

  categoryScores: [
    { label: 'Apple Integration', score: 99 },
    { label: 'ANC Performance',   score: 95 },
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
    'Only 4.5 stars — newer product with fewer reviews than Pro 2',
    '$199 is not the lowest — dropped to $169 in February 2025',
    'Some features require latest iPhone software update',
    'Android users get very limited functionality',
  ],

  specs: [
    { key: 'Model',                    val: 'AirPods Pro 3 (2025)' },
    { key: 'Active Noise Cancellation', val: 'Yes — best in class' },
    { key: 'Live Translation',         val: 'Yes — real-time' },
    { key: 'Heart Rate Sensor',        val: 'Yes — built-in' },
    { key: 'Hearing Aid Feature',      val: 'Yes — FDA approved' },
    { key: 'Spatial Audio',            val: 'Yes + head tracking' },
    { key: 'Sound',                    val: 'High-Fidelity + Spatial Audio' },
    { key: 'Charging',                 val: 'USB-C' },
    { key: 'Connectivity',             val: 'Bluetooth' },
    { key: 'Amazon Badge',             val: "Amazon's Choice" },
    { key: 'Availability',             val: 'In Stock' },
    { key: 'Current Price',            val: '$199.99' },
    { key: 'List Price',               val: '$249.00' },
    { key: 'All-Time Low',             val: '$169 (Feb 2025)' },
  ],

  whatsNew: [
    { feature: 'Live Translation',  desc: 'Translates conversations in real time — brand new in Pro 3' },
    { feature: 'Heart Rate Sensor', desc: 'Built-in heart rate monitoring — no Apple Watch needed' },
    { feature: 'Hearing Aid',       desc: 'FDA-approved clinical hearing aid — first ever in earbuds' },
    { feature: 'Stronger ANC',      desc: 'Even more powerful noise cancellation than Pro 2' },
    { feature: 'Better Sound',      desc: 'High-Fidelity upgrade over the previous generation' },
  ],

  buyIf: [
    'You own an iPhone, iPad, or Mac',
    'You want the latest Apple technology',
    'You want Heart Rate tracking without Apple Watch',
    'You travel and need Live Translation',
    'You have hearing difficulties (Hearing Aid feature)',
    'You want the best ANC available today',
  ],

  skipIf: [
    'You use Android as your main phone',
    'You want the absolute lowest price — wait for a sale',
    'You already own AirPods Pro 2 in good condition',
    'You need Hi-Res audio — Sony WF-1000XM5 is better',
    'Budget is your main concern',
  ],
}

// ── HELPERS ───────────────────────────────────────────────────────
const fmt = (n: number) => `$${n.toFixed(2)}`
const isGoodDeal = PRODUCT.price <= PRODUCT.allTimeLow * 1.1
const priceTip = isGoodDeal
  ? `✅ Very close to the all-time low of ${fmt(PRODUCT.allTimeLow)} — good time to buy!`
  : `⚠️ Not the lowest — all-time low is ${fmt(PRODUCT.allTimeLow)}. Consider waiting for a sale.`
const maxPrice = Math.max(...PRODUCT.priceHistory.map(x => x.price))
const youSave = fmt(PRODUCT.originalPrice - PRODUCT.price)

// ── THEMES ────────────────────────────────────────────────────────
const THEMES = [
  {
    id: 'dark', label: '🌙', title: 'Dark',
    bg: `radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%),
         radial-gradient(ellipse 70% 30% at 50% 2%, rgba(255,150,30,0.28) 0%, transparent 42%),
         linear-gradient(180deg, #080310 0%, #04060f 100%)`,
    bodyBg: '#04060f', surface: 'rgba(8,16,40,0.85)', border: 'rgba(255,255,255,0.09)',
    text: '#ffffff', muted: 'rgba(255,255,255,0.5)', subtle: 'rgba(255,255,255,0.06)',
    navBg: 'rgba(4,6,15,0.85)', inputBg: 'rgba(255,255,255,0.04)',
  },
  {
    id: 'light', label: '☀️', title: 'Light',
    bg: '#f5f5f7', bodyBg: '#f5f5f7', surface: '#ffffff', border: 'rgba(0,0,0,0.08)',
    text: '#1a1a1a', muted: 'rgba(0,0,0,0.5)', subtle: 'rgba(0,0,0,0.06)',
    navBg: 'rgba(255,255,255,0.92)', inputBg: 'rgba(0,0,0,0.03)',
  },
  {
    id: 'navy', label: '🌊', title: 'Navy',
    bg: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)',
    bodyBg: '#0d1f3c', surface: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)',
    text: '#e8f0fe', muted: 'rgba(232,240,254,0.55)', subtle: 'rgba(255,255,255,0.07)',
    navBg: 'rgba(10,22,40,0.9)', inputBg: 'rgba(255,255,255,0.04)',
  },
  {
    id: 'black', label: '🖤', title: 'Black',
    bg: '#000000', bodyBg: '#000000', surface: '#111111', border: 'rgba(255,255,255,0.08)',
    text: '#ffffff', muted: 'rgba(255,255,255,0.45)', subtle: 'rgba(255,255,255,0.06)',
    navBg: 'rgba(0,0,0,0.95)', inputBg: 'rgba(255,255,255,0.04)',
  },
]

// ── COMPONENT ─────────────────────────────────────────────────────
export default function AirPodsPro3Page() {
  const [themeId, setThemeId] = useState('dark')
  const t = THEMES.find(x => x.id === themeId) || THEMES[0]

  return (
    <>
      {/* Google structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            name: `${PRODUCT.name} Review ${PRODUCT.year}`,
            reviewRating: { '@type': 'Rating', ratingValue: (PRODUCT.buyiqScore / 10).toFixed(1), bestRating: '10' },
            author: { '@type': 'Organization', name: 'BuyIQ', url: 'https://buyiq.app' },
            itemReviewed: {
              '@type': 'Product',
              name: PRODUCT.name,
              brand: { '@type': 'Brand', name: PRODUCT.brand },
              sku: PRODUCT.asin,
              offers: {
                '@type': 'Offer',
                url: PRODUCT.affiliateUrl,
                priceCurrency: 'USD',
                price: PRODUCT.price.toFixed(2),
                availability: PRODUCT.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: PRODUCT.rating.toString(),
                reviewCount: PRODUCT.reviewCount.replace(',', ''),
                bestRating: '5',
              },
            },
          }),
        }}
      />

      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: t.bg, transition: 'background 0.3s' }} />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', fontFamily: 'Open Sans, sans-serif', color: t.text, background: t.bodyBg, transition: 'all 0.3s' }}>

        {/* ── NAV ── */}
        <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', background: t.navBg, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${t.border}` }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/images/logo.svg" alt="BuyIQ" style={{ width: 52, height: 52, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: t.text, marginLeft: 10 }}>
              Buy<span style={{ color: '#f5a623' }}>IQ</span>
            </span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 10, padding: '5px 8px' }}>
            <span style={{ fontSize: 12, color: t.muted, marginRight: 4 }}>Theme:</span>
            {THEMES.map(theme => (
              <button key={theme.id} onClick={() => setThemeId(theme.id)} title={theme.title} style={{ width: 30, height: 30, borderRadius: 7, border: themeId === theme.id ? '2px solid #f5a623' : `1px solid ${t.border}`, background: themeId === theme.id ? 'rgba(245,166,35,0.15)' : 'transparent', cursor: 'pointer', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                {theme.label}
              </button>
            ))}
          </div>
        </nav>

        {/* ── MAIN ── */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '44px 24px 100px', display: 'grid', gridTemplateColumns: '1fr 290px', gap: 32, alignItems: 'start' }}>

          {/* ══ LEFT COLUMN ══ */}
          <div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#f5a623', fontWeight: 700 }}>
                📅 Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              {PRODUCT.amazonBadge && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,120,200,0.15)', border: '1px solid rgba(0,120,200,0.3)', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#5b9bd5', fontWeight: 700 }}>
                  ✦ {PRODUCT.amazonBadge}
                </div>
              )}
              {isGoodDeal && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(46,204,154,0.1)', border: '1px solid rgba(46,204,154,0.25)', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#2ecc9a', fontWeight: 700 }}>
                  🔥 Great Deal
                </div>
              )}
            </div>

            {/* Product hero */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
              <div style={{ width: 130, height: 130, flexShrink: 0, borderRadius: 20, overflow: 'hidden', background: t.inputBg, border: `1px solid ${t.border}` }}>
                <img src={PRODUCT.image} alt={`${PRODUCT.name} ${PRODUCT.category} ${PRODUCT.year}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: t.muted, marginBottom: 6 }}>
                  {PRODUCT.brand} · {PRODUCT.category} · {PRODUCT.year}
                </div>
                <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 10, color: t.text }}>
                  {PRODUCT.name}<br />— Full Review
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{ color: '#f5a623', fontSize: 15 }}>{'★'.repeat(Math.floor(PRODUCT.rating))}½</span>
                  <span style={{ fontSize: 13, color: t.muted }}>{PRODUCT.rating} out of 5</span>
                  <span style={{ fontSize: 13, color: t.muted }}>·</span>
                  <span style={{ fontSize: 13, color: t.muted }}>{PRODUCT.reviewCount} Amazon reviews</span>
                  <span style={{ fontSize: 11, color: '#2ecc9a', background: 'rgba(46,204,154,0.1)', border: '1px solid rgba(46,204,154,0.2)', padding: '2px 8px', borderRadius: 4 }}>
                    {PRODUCT.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    ['BuyIQ Score', `${PRODUCT.buyiqScore}/100`],
                    ['Price',       fmt(PRODUCT.price)],
                    ['Was',         fmt(PRODUCT.originalPrice)],
                    ['Discount',    `${PRODUCT.discount}% off`],
                    ['All-time low', fmt(PRODUCT.allTimeLow)],
                  ].map(([label, val]) => (
                    <div key={label} style={{ fontSize: 12, color: t.muted, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 6, padding: '5px 10px' }}>
                      {label} <strong style={{ color: t.text }}>{val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price History */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>
                📈 Price History & Deal Rating
              </h2>
              <div style={{ background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 14, padding: 20, marginBottom: 16 }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 10 }}>💡 BuyIQ Price Intelligence</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 14 }}>
                  {[
                    { label: 'Current Price', val: fmt(PRODUCT.price),         color: t.text },
                    { label: 'All-Time Low',  val: fmt(PRODUCT.allTimeLow),    color: '#2ecc9a' },
                    { label: 'List Price',    val: fmt(PRODUCT.originalPrice), color: t.muted },
                  ].map(item => (
                    <div key={item.label} style={{ background: t.inputBg, borderRadius: 10, padding: 12, textAlign: 'center' as const, border: `1px solid ${t.border}` }}>
                      <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: item.color }}>{item.val}</div>
                      <div style={{ fontSize: 11, color: t.muted, marginTop: 3 }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13.5, color: t.muted, lineHeight: 1.7, margin: 0 }}>
                  {priceTip}{PRODUCT.keepaTrackers > 0 && <span> — <strong style={{ color: t.text }}>{PRODUCT.keepaTrackers.toLocaleString()} people</strong> are actively tracking this price.</span>}
                </p>
              </div>
              <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 20 }}>
                <div style={{ fontSize: 13, color: t.muted, marginBottom: 14 }}>Price Range — Last {PRODUCT.priceHistory.length} months</div>
                {PRODUCT.priceHistory.map(item => {
                  const isLow = item.price === PRODUCT.allTimeLow
                  const isCurrent = item.price === PRODUCT.price
                  return (
                    <div key={item.month} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{ fontSize: 12, color: t.muted, minWidth: 32 }}>{item.month}</span>
                      <div style={{ flex: 1, height: 22, background: t.inputBg, borderRadius: 6, overflow: 'hidden' }}>
                        <div style={{ width: `${(item.price / maxPrice) * 100}%`, height: '100%', borderRadius: 6, background: isLow ? 'linear-gradient(90deg, #2ecc9a, #27ae60)' : isCurrent ? 'linear-gradient(90deg, #f5a623, #f57c00)' : 'rgba(255,255,255,0.15)' }} />
                      </div>
                      <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, minWidth: 60, color: isLow ? '#2ecc9a' : isCurrent ? '#f5a623' : t.muted }}>
                        {fmt(item.price)}{isLow && <span style={{ fontSize: 10, marginLeft: 3 }}>LOW</span>}{isCurrent && !isLow && <span style={{ fontSize: 10, marginLeft: 3 }}>NOW</span>}
                      </span>
                    </div>
                  )
                })}
                <div style={{ fontSize: 11, color: t.muted, marginTop: 8 }}>Source: Keepa price tracker · {PRODUCT.keepaTrackers} users tracking</div>
              </div>
            </div>

            {/* Category Scores */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>📊 Category Scores</h2>
              {PRODUCT.categoryScores.map(({ label, score }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 11 }}>
                  <span style={{ fontSize: 13, color: t.muted, minWidth: 165 }}>{label}</span>
                  <div style={{ flex: 1, height: 8, background: t.subtle, borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${score}%`, height: '100%', borderRadius: 4, background: 'linear-gradient(90deg, #f5a623, #f57c00)' }} />
                  </div>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', minWidth: 32, textAlign: 'right' as const }}>{score}</span>
                </div>
              ))}
            </div>

            {/* BuyIQ Verdict */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>🧠 BuyIQ Verdict</h2>
              <p style={{ fontSize: 15, color: t.muted, lineHeight: 1.8, marginBottom: 12 }}>
                The AirPods Pro 3 are <strong style={{ color: t.text }}>Apple&apos;s most advanced earbuds ever</strong>. You get <strong style={{ color: t.text }}>Live Translation</strong> in real time, a built-in <strong style={{ color: t.text }}>Heart Rate Sensor</strong>, and an <strong style={{ color: t.text }}>FDA-approved Hearing Aid</strong> — features no other earbuds at this price offer.
              </p>
              <p style={{ fontSize: 15, color: t.muted, lineHeight: 1.8, marginBottom: 12 }}>
                <strong style={{ color: t.text }}>{PRODUCT.boughtLastMonth} people bought these last month</strong> and Amazon gave them their &ldquo;Choice&rdquo; badge — this is the real deal.
              </p>
              <p style={{ fontSize: 15, color: t.muted, lineHeight: 1.8 }}>
                <strong style={{ color: '#f5a623' }}>Price tip:</strong> At {fmt(PRODUCT.price)} you save {PRODUCT.discount}% — but this dropped to <strong style={{ color: '#2ecc9a' }}>{fmt(PRODUCT.allTimeLow)}</strong> before. {priceTip}
              </p>
            </div>

            {/* What's New */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>🆕 What&apos;s New vs AirPods Pro 2</h2>
              <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 20 }}>
                {PRODUCT.whatsNew.map(({ feature, desc }) => (
                  <div key={feature} style={{ display: 'flex', gap: 14, padding: '10px 0', borderBottom: `1px solid ${t.subtle}` }}>
                    <span style={{ color: '#f5a623', flexShrink: 0, fontWeight: 700, fontSize: 13, minWidth: 145 }}>✦ {feature}</span>
                    <span style={{ fontSize: 13, color: t.muted, lineHeight: 1.5 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>⚖️ Pros & Cons</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#2ecc9a', marginBottom: 12 }}>✅ What&apos;s Great</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {PRODUCT.pros.map(pro => (
                      <li key={pro} style={{ fontSize: 13.5, color: t.muted, padding: '6px 0', borderBottom: `1px solid ${t.subtle}`, display: 'flex', gap: 8, lineHeight: 1.4 }}>
                        <span style={{ color: '#2ecc9a', flexShrink: 0 }}>✓</span>{pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#f87171', marginBottom: 12 }}>❌ What&apos;s Not</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {PRODUCT.cons.map(con => (
                      <li key={con} style={{ fontSize: 13.5, color: t.muted, padding: '6px 0', borderBottom: `1px solid ${t.subtle}`, display: 'flex', gap: 8, lineHeight: 1.4 }}>
                        <span style={{ color: '#f87171', flexShrink: 0 }}>✗</span>{con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Full Specs */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>📐 Full Specifications</h2>
              <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: '6px 20px' }}>
                {PRODUCT.specs.map(({ key, val }) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: `1px solid ${t.subtle}` }}>
                    <span style={{ fontSize: 13, color: t.muted }}>{key}</span>
                    <span style={{ fontSize: 13, color: t.text, fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Buy */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>🎯 Who Should Buy This?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 20 }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 12 }}>🏆 Buy this if…</div>
                  {PRODUCT.buyIf.map(item => (
                    <div key={item} style={{ fontSize: 13, color: t.muted, padding: '6px 0', borderBottom: `1px solid ${t.subtle}`, display: 'flex', gap: 8 }}>
                      <span style={{ color: '#f5a623', flexShrink: 0 }}>→</span>{item}
                    </div>
                  ))}
                </div>
                <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 14, padding: 20 }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f87171', marginBottom: 12 }}>❌ Skip if…</div>
                  {PRODUCT.skipIf.map(item => (
                    <div key={item} style={{ fontSize: 13, color: t.muted, padding: '6px 0', borderBottom: `1px solid ${t.subtle}`, display: 'flex', gap: 8 }}>
                      <span style={{ color: '#f87171', flexShrink: 0 }}>→</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Also See */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${t.subtle}`, color: t.text }}>🔗 Also See</h2>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/product/airpods4" style={{ padding: '9px 16px', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 9, fontSize: 14, color: t.muted, textDecoration: 'none' }}>🎧 AirPods 4 Review</Link>
                <Link href="/compare/airpods-pro-3-vs-airpods-4" style={{ padding: '9px 16px', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 9, fontSize: 14, color: t.muted, textDecoration: 'none' }}>⚔️ AirPods Pro 3 vs AirPods 4</Link>
              </div>
            </div>

          </div>

          {/* ══ RIGHT SIDEBAR ══ */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 18, padding: 24 }}>
              <div style={{ fontSize: 13, color: t.muted, marginBottom: 8 }}>Current Amazon price</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 40, fontWeight: 700, color: t.text }}>{fmt(PRODUCT.price)}</span>
                <span style={{ fontSize: 15, color: t.muted, textDecoration: 'line-through' }}>{fmt(PRODUCT.originalPrice)}</span>
                <span style={{ fontSize: 12, fontWeight: 700, padding: '3px 8px', borderRadius: 5, background: 'rgba(245,124,0,0.2)', color: '#f57c00', border: '1px solid rgba(245,124,0,0.3)' }}>-{PRODUCT.discount}%</span>
              </div>
              <div style={{ fontSize: 12, color: isGoodDeal ? '#2ecc9a' : '#f5a623', fontWeight: 600, marginBottom: 6 }}>
                {isGoodDeal ? `✅ Great deal — near all-time low!` : `⚠️ Not the lowest — hit ${fmt(PRODUCT.allTimeLow)} before`}
              </div>
              <div style={{ fontSize: 12, color: t.muted, marginBottom: 20 }}>
                All-time low: <strong style={{ color: '#2ecc9a' }}>{fmt(PRODUCT.allTimeLow)}</strong> · List: {fmt(PRODUCT.originalPrice)}
              </div>
              <a href={PRODUCT.affiliateUrl} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, padding: 14, borderRadius: 10, marginBottom: 12, boxShadow: '0 4px 20px rgba(245,124,0,0.35)' }}>
                Buy on Amazon 🛒
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                {[
                  PRODUCT.isPrime ? '✓ Ships free with Prime' : '✓ Ships from Amazon',
                  '✓ Free returns within 30 days',
                  '✓ Secure Amazon checkout',
                  PRODUCT.inStock ? '✓ In Stock — ships fast' : '⚠️ Check availability',
                ].map(note => (
                  <div key={note} style={{ fontSize: 12, color: t.muted, textAlign: 'center' as const }}>{note}</div>
                ))}
              </div>
              <div style={{ borderTop: `1px solid ${t.subtle}`, margin: '0 0 20px' }} />
              <div style={{ textAlign: 'center' as const, marginBottom: 20 }}>
                <div style={{ fontSize: 12, color: t.muted, marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.07em' }}>BuyIQ Score</div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 52, fontWeight: 700, color: '#f5a623', lineHeight: 1 }}>{PRODUCT.buyiqScore}</div>
                <div style={{ fontSize: 12, color: t.muted, marginTop: 4 }}>out of 100</div>
              </div>
              <div style={{ borderTop: `1px solid ${t.subtle}`, margin: '0 0 20px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Rating',       val: `${PRODUCT.rating}★` },
                  { label: 'Reviews',      val: PRODUCT.reviewCount },
                  { label: 'Bought/mo',    val: PRODUCT.boughtLastMonth },
                  { label: 'Warranty',     val: '1 year' },
                  { label: 'All-time low', val: fmt(PRODUCT.allTimeLow) },
                  { label: 'You save',     val: youSave },
                ].map(stat => (
                  <div key={stat.label} style={{ background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 10, padding: '10px 12px', textAlign: 'center' as const }}>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: t.text }}>{stat.val}</div>
                    <div style={{ fontSize: 11, color: t.muted, marginTop: 2 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

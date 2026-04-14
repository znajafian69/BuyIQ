'use client'

import Link from 'next/link'

// ─── EDIT THESE TO CHANGE THE TWO PRODUCTS ───────────────────────────────────

const PRODUCT_A = {
  name: 'Apple AirPods Pro 2',
  brand: 'Apple',
  emoji: '🎧',
  price: '$189',
  originalPrice: '$249',
  rating: 4.9,
  reviews: '91,200',
  buyiqScore: 89,
  url: 'https://www.amazon.com/dp/B0D1XD1ZV3',
  verdict: 'Best if you own an iPhone. Seamless Apple integration and best-in-class Transparency mode make daily use effortless.',
  buyIf: [
    'You own an iPhone, iPad, or Mac',
    'You love seamless device switching',
    'Transparency mode matters to you',
    'You want MagSafe wireless charging',
  ],
  skipIf: [
    'You use Android as your main phone',
    'You need longer battery life',
    'You care about Hi-Res audio (LDAC)',
  ],
}

const PRODUCT_B = {
  name: 'Sony WF-1000XM5',
  brand: 'Sony',
  emoji: '🎵',
  price: '$248',
  originalPrice: '$299',
  rating: 4.8,
  reviews: '12,450',
  buyiqScore: 92,
  url: 'https://www.amazon.com/dp/B0C33XHFQF',
  verdict: 'Best for most people. Industry-leading noise cancellation and Hi-Res audio make it the top pick for commuters and audiophiles.',
  buyIf: [
    'You want the best noise cancellation',
    'You use Android or any device',
    'You care about Hi-Res / audiophile sound',
    'You need long daily use (8hr battery)',
  ],
  skipIf: [
    'You are deep in the Apple ecosystem',
    'You need wireless charging on the case',
    'Budget is your main concern',
  ],
}

// ─── COMPARISON SECTIONS ─────────────────────────────────────────────────────

const SECTIONS = [
  {
    title: '🔊 Sound Quality',
    rows: [
      { label: 'Audio Codec', a: 'AAC only', b: 'LDAC (Hi-Res)', winner: 'b' },
      { label: 'Sound Profile', a: 'Balanced, Apple-tuned', b: 'Audiophile neutral', winner: 'b' },
      { label: 'Spatial Audio', a: 'Yes + head tracking', b: '360 Reality Audio', winner: 'a' },
      { label: 'Bass Response', a: 'Slightly boosted', b: 'Tight, accurate', winner: 'b' },
    ],
    scoreA: 82,
    scoreB: 94,
  },
  {
    title: '🔇 Noise Cancellation',
    rows: [
      { label: 'ANC Performance', a: 'Excellent', b: 'Industry-leading', winner: 'b' },
      { label: 'Transparency Mode', a: 'Best in market', b: 'Good, natural', winner: 'a' },
      { label: 'Wind Noise Rejection', a: 'Good', b: 'Excellent', winner: 'b' },
      { label: 'Adaptive ANC', a: 'Yes — Adaptive Audio', b: 'Yes — Auto mode', winner: 'tie' },
    ],
    scoreA: 88,
    scoreB: 97,
  },
  {
    title: '🔋 Battery & Charging',
    rows: [
      { label: 'Battery per charge', a: '6 hours', b: '8 hours', winner: 'b' },
      { label: 'Total with case', a: '30 hours', b: '24 hours', winner: 'a' },
      { label: 'Wireless charging', a: 'MagSafe + Qi', b: 'No — USB-C only', winner: 'a' },
      { label: 'Quick charge', a: '5min → 1hr', b: '5min → 1hr', winner: 'tie' },
    ],
    scoreA: 85,
    scoreB: 80,
  },
  {
    title: '📡 Connectivity',
    rows: [
      { label: 'Multipoint (2 devices)', a: 'Apple devices only', b: 'Any 2 devices', winner: 'b' },
      { label: 'Android support', a: 'Basic only', b: 'Full features', winner: 'b' },
      { label: 'Apple ecosystem', a: 'Seamless', b: 'Works, no extras', winner: 'a' },
      { label: 'Bluetooth version', a: '5.3', b: '5.3', winner: 'tie' },
    ],
    scoreA: 80,
    scoreB: 90,
  },
  {
    title: '😌 Comfort & Design',
    rows: [
      { label: 'Fit type', a: 'In-ear silicone tips', b: 'In-ear silicone tips', winner: 'tie' },
      { label: 'Long session comfort', a: 'Very good', b: 'Excellent', winner: 'b' },
      { label: 'Water resistance', a: 'IP54', b: 'IPX4', winner: 'a' },
      { label: 'Case size', a: 'Compact', b: 'Slightly bulkier', winner: 'a' },
    ],
    scoreA: 88,
    scoreB: 86,
  },
  {
    title: '💰 Value',
    rows: [
      { label: 'Current price', a: '$189', b: '$248', winner: 'a' },
      { label: 'Original price', a: '$249', b: '$299', winner: 'tie' },
      { label: 'Discount today', a: '24% off', b: '17% off', winner: 'a' },
      { label: 'Value for money', a: 'Excellent', b: 'Very good', winner: 'a' },
    ],
    scoreA: 90,
    scoreB: 82,
  },
]

// ─── OVERALL WINNER ───────────────────────────────────────────────────────────

const OVERALL_WINNER = 'b' // 'a' or 'b'
const OVERALL_VERDICT = `For most people, the Sony WF-1000XM5 wins. Its noise cancellation is genuinely unmatched and it works great with any device — iPhone or Android. However, if you're fully in the Apple ecosystem, the AirPods Pro 2 offer a seamless experience that Sony simply can't replicate. Choose based on your devices, not the specs.`

// ─────────────────────────────────────────────────────────────────────────────

export default function ComparisonPage() {
  const winner = (OVERALL_WINNER as string) === 'a' ? PRODUCT_A : PRODUCT_B
const loser = (OVERALL_WINNER as string) === 'a' ? PRODUCT_B : PRODUCT_A

  return (
    <>
      {/* Background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%),
          radial-gradient(ellipse 70% 30% at 50% 2%, rgba(255,150,30,0.28) 0%, transparent 42%),
          radial-gradient(ellipse 50% 25% at 15% 20%, rgba(120,45,5,0.30) 0%, transparent 50%),
          linear-gradient(180deg, #080310 0%, #04060f 100%)
        `
      }} />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', fontFamily: 'Open Sans, sans-serif', color: '#fff' }}>

        {/* ── NAV ── */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 36px',
          background: 'rgba(4,6,15,0.85)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <span style={{ fontSize: 22, filter: 'drop-shadow(0 0 8px rgba(255,155,30,0.9))' }}>🛒</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff' }}>
              Buy<span style={{ color: '#f5a623' }}>IQ</span>
            </span>
          </Link>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', display: 'flex', gap: 8 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/product/airpods" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>AirPods Pro 2</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>vs Sony WF-1000XM5</span>
          </div>
          <Link href="/signin" style={{
            fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none', padding: '7px 16px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8
          }}>Sign In</Link>
        </nav>

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '44px 24px 100px' }}>

          {/* ── PAGE HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6, padding: '4px 14px',
              fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 14,
              letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              ⚔️ BuyIQ Head-to-Head Comparison
            </div>
            <h1 style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 700,
              lineHeight: 1.1, marginBottom: 10
            }}>
              {PRODUCT_A.name}<br />
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7em' }}>vs</span><br />
              {PRODUCT_B.name}
            </h1>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
              Based on {PRODUCT_A.reviews} + {PRODUCT_B.reviews} verified Amazon reviews
            </p>
          </div>

          {/* ── HERO CARDS ── */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr auto 1fr',
            gap: 16, alignItems: 'center', marginBottom: 32
          }}>
            {/* Product A */}
            <div style={{
              background: OVERALL_WINNER === 'a' ? 'rgba(245,166,35,0.07)' : 'rgba(8,16,40,0.75)',
              border: OVERALL_WINNER === 'a' ? '1px solid rgba(245,166,35,0.35)' : '1px solid rgba(255,255,255,0.09)',
              borderRadius: 18, padding: 28, textAlign: 'center'
            }}>
              {OVERALL_WINNER === 'a' && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)',
                  borderRadius: 6, padding: '3px 10px',
                  fontSize: 11, color: '#f5a623', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12
                }}>
                  🏆 BuyIQ Pick
                </div>
              )}
              {OVERALL_WINNER !== 'a' && <div style={{ height: 26 }} />}
              <div style={{ fontSize: 56, marginBottom: 12 }}>{PRODUCT_A.emoji}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 8, lineHeight: 1.2 }}>
                {PRODUCT_A.name}
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: OVERALL_WINNER === 'a' ? '#f5a623' : '#fff', marginBottom: 4 }}>
                {PRODUCT_A.buyiqScore}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
                BuyIQ Score
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
                {PRODUCT_A.price}
              </div>
              <div style={{ color: '#f5a623', fontSize: 13, marginBottom: 4 }}>{'★'.repeat(Math.floor(PRODUCT_A.rating))}{'☆'.repeat(5 - Math.floor(PRODUCT_A.rating))}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
                {PRODUCT_A.reviews} reviews
              </div>
              <a href={PRODUCT_A.url} target="_blank" rel="nofollow noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                background: 'linear-gradient(135deg, #f57c00, #e64a19)',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700,
                padding: '10px 14px', borderRadius: 9,
                boxShadow: '0 4px 16px rgba(245,124,0,0.3)'
              }}>
                Buy on Amazon 🛒
              </a>
            </div>

            {/* VS badge */}
            <div style={{
              fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700,
              color: 'rgba(255,255,255,0.2)', textAlign: 'center', padding: '0 8px'
            }}>
              VS
            </div>

            {/* Product B */}
            <div style={{
              background: OVERALL_WINNER === 'b' ? 'rgba(245,166,35,0.07)' : 'rgba(8,16,40,0.75)',
              border: OVERALL_WINNER === 'b' ? '1px solid rgba(245,166,35,0.35)' : '1px solid rgba(255,255,255,0.09)',
              borderRadius: 18, padding: 28, textAlign: 'center'
            }}>
              {OVERALL_WINNER === 'b' && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)',
                  borderRadius: 6, padding: '3px 10px',
                  fontSize: 11, color: '#f5a623', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12
                }}>
                  🏆 BuyIQ Pick
                </div>
              )}
              {OVERALL_WINNER !== 'b' && <div style={{ height: 26 }} />}
              <div style={{ fontSize: 56, marginBottom: 12 }}>{PRODUCT_B.emoji}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 8, lineHeight: 1.2 }}>
                {PRODUCT_B.name}
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: OVERALL_WINNER === 'b' ? '#f5a623' : '#fff', marginBottom: 4 }}>
                {PRODUCT_B.buyiqScore}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>
                BuyIQ Score
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
                {PRODUCT_B.price}
              </div>
              <div style={{ color: '#f5a623', fontSize: 13, marginBottom: 4 }}>{'★'.repeat(Math.floor(PRODUCT_B.rating))}{'☆'.repeat(5 - Math.floor(PRODUCT_B.rating))}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
                {PRODUCT_B.reviews} reviews
              </div>
              <a href={PRODUCT_B.url} target="_blank" rel="nofollow noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                background: 'linear-gradient(135deg, #f57c00, #e64a19)',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700,
                padding: '10px 14px', borderRadius: 9,
                boxShadow: '0 4px 16px rgba(245,124,0,0.3)'
              }}>
                Buy on Amazon 🛒
              </a>
            </div>
          </div>

          {/* ── OVERALL VERDICT BANNER ── */}
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: 16,
            padding: '20px 24px', marginBottom: 40,
            background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.18)',
            borderRadius: 14
          }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>🧠</div>
            <div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#f5a623', marginBottom: 6 }}>
                BuyIQ Verdict — {winner.name} wins overall
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                {OVERALL_VERDICT}
              </p>
            </div>
          </div>

          {/* ── COMPARISON SECTIONS ── */}
          {SECTIONS.map((section) => (
            <div key={section.title} style={{ marginBottom: 32 }}>
              {/* Section header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12
              }}>
                <span style={{
                  fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700,
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)'
                }}>
                  {section.title}
                </span>
                <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
              </div>

              {/* Column headers */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 10, marginBottom: 6, overflow: 'hidden'
              }}>
                <div style={{ padding: '10px 16px', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Category
                </div>
                <div style={{ padding: '10px 16px', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                  {PRODUCT_A.name}
                </div>
                <div style={{ padding: '10px 16px', fontSize: 13, fontWeight: 700, color: 'rgba(167,139,250,0.9)', textTransform: 'uppercase', letterSpacing: '0.05em', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                  {PRODUCT_B.name}
                </div>
              </div>

              {/* Rows */}
              {section.rows.map((row) => (
                <div key={row.label} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  background: 'rgba(8,16,40,0.6)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10, marginBottom: 5, overflow: 'hidden'
                }}>
                  <div style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                    {row.label}
                  </div>
                  <div style={{
                    padding: '12px 16px', fontSize: 13,
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    color: row.winner === 'a' ? '#fff' : 'rgba(255,255,255,0.5)',
                    fontWeight: row.winner === 'a' ? 600 : 400,
                    display: 'flex', alignItems: 'center', gap: 8
                  }}>
                    {row.a}
                    {row.winner === 'a' && (
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4,
                        background: 'rgba(245,166,35,0.15)', color: '#f5a623', flexShrink: 0
                      }}>WIN</span>
                    )}
                  </div>
                  <div style={{
                    padding: '12px 16px', fontSize: 13,
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    color: row.winner === 'b' ? '#fff' : 'rgba(255,255,255,0.5)',
                    fontWeight: row.winner === 'b' ? 600 : 400,
                    display: 'flex', alignItems: 'center', gap: 8
                  }}>
                    {row.b}
                    {row.winner === 'b' && (
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4,
                        background: 'rgba(167,139,250,0.15)', color: '#a78bfa', flexShrink: 0
                      }}>WIN</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Section score bars */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(8,16,40,0.4)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 10, padding: '14px 16px', marginTop: 4
              }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center' }}>
                  Section Score
                </div>
                {/* Score A */}
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${section.scoreA}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #f5a623, #f57c00)' }} />
                    </div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#f5a623', minWidth: 28 }}>
                      {section.scoreA}
                    </span>
                  </div>
                </div>
                {/* Score B */}
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.07)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${section.scoreB}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }} />
                    </div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#a78bfa', minWidth: 28 }}>
                      {section.scoreB}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ── QUICK PICK BOXES ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
            {/* Buy A if */}
            <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, padding: 22 }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#f5a623', marginBottom: 14 }}>
                🏆 Choose {PRODUCT_A.name} if…
              </div>
              {PRODUCT_A.buyIf.map(item => (
                <div key={item} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#f5a623', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
              <a href={PRODUCT_A.url} target="_blank" rel="nofollow noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                marginTop: 16,
                background: 'linear-gradient(135deg, #f57c00, #e64a19)',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700,
                padding: '11px', borderRadius: 9,
                boxShadow: '0 4px 16px rgba(245,124,0,0.3)'
              }}>
                Buy {PRODUCT_A.name} — {PRODUCT_A.price} 🛒
              </a>
            </div>

            {/* Buy B if */}
            <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, padding: 22 }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#a78bfa', marginBottom: 14 }}>
                👑 Choose {PRODUCT_B.name} if…
              </div>
              {PRODUCT_B.buyIf.map(item => (
                <div key={item} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                  <span style={{ color: '#a78bfa', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
              <a href={PRODUCT_B.url} target="_blank" rel="nofollow noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                marginTop: 16,
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700,
                padding: '11px', borderRadius: 9,
                boxShadow: '0 4px 16px rgba(124,58,237,0.3)'
              }}>
                Buy {PRODUCT_B.name} — {PRODUCT_B.price} 🛒
              </a>
            </div>
          </div>

          {/* ── RELATED LINKS ── */}
          <div style={{ marginTop: 48, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
              Related Reviews
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[
                { label: '🎧 AirPods Pro 2 Full Review', href: '/product/airpods' },
                { label: '🎵 Sony WF-1000XM5 Full Review', href: '/product/sony-wf1000xm5' },
                { label: '📺 Best TVs 2025', href: '/product/samsung-tv' },
                { label: '☕ Best Coffee Makers', href: '/product/coffee-maker' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8, fontSize: 14,
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none'
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

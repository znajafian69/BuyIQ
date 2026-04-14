'use client'

import Link from 'next/link'

const PROS = [
  'Live Translation — translates conversations in real time',
  'Heart Rate Sensor built-in — no Apple Watch needed',
  'FDA-approved Hearing Aid feature — first ever in earbuds',
  'Best-in-class Active Noise Cancellation',
  'Personalized Spatial Audio with real-time head tracking',
  'High-Fidelity sound quality upgrade over previous gen',
  'USB-C charging case',
  '10K+ bought in the past month — extremely popular',
]

const CONS = [
  'Only 4.5★ so far — newer product with fewer reviews than Pro 2',
  '$199 is not the lowest price — dropped to $169 in February',
  'Some features require latest iPhone software',
  'Android users get very limited functionality',
]

const SPECS = [
  { key: 'Model', val: 'AirPods Pro 3 (2025)' },
  { key: 'Active Noise Cancellation', val: 'Yes — best in class' },
  { key: 'Live Translation', val: 'Yes — real-time' },
  { key: 'Heart Rate Sensor', val: 'Yes — built-in' },
  { key: 'Hearing Aid Feature', val: 'Yes — FDA approved' },
  { key: 'Spatial Audio', val: 'Yes + head tracking' },
  { key: 'Sound', val: 'High-Fidelity + Spatial Audio' },
  { key: 'Charging', val: 'USB-C' },
  { key: 'Connectivity', val: 'Bluetooth' },
  { key: 'Amazon Badge', val: "Amazon's Choice" },
  { key: 'Availability', val: 'In Stock' },
  { key: 'Current Price', val: '$199.99' },
  { key: 'List Price', val: '$249.00' },
  { key: 'All-Time Low', val: '$169 (Feb 2025)' },
]

export default function AirPodsPro3Page() {
  return (
    <>
      {/* ── BACKGROUND ── */}
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

          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', display: 'flex', gap: 8, alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Earbuds</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>AirPods Pro 3</span>
          </div>

          <Link href="/signin" style={{
            fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none', padding: '7px 16px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8
          }}>
            Sign In
          </Link>
        </nav>

        {/* ── MAIN LAYOUT ── */}
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '44px 24px 100px',
          display: 'grid', gridTemplateColumns: '1fr 290px', gap: 32,
          alignItems: 'start'
        }}>

          {/* ══════════════════════════════
              LEFT COLUMN
          ══════════════════════════════ */}
          <div>

            {/* Badges row */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)',
                borderRadius: 6, padding: '4px 12px',
                fontSize: 12, color: '#f5a623', fontWeight: 700
              }}>
                📅 Featured Today · {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(0,120,200,0.15)', border: '1px solid rgba(0,120,200,0.3)',
                borderRadius: 6, padding: '4px 12px',
                fontSize: 12, color: '#5b9bd5', fontWeight: 700
              }}>
                ✦ Amazon&apos;s Choice
              </div>
            </div>

            {/* ── PRODUCT HERO ── */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
              <div style={{
  width: 130, height: 130, flexShrink: 0,
  borderRadius: 20, overflow: 'hidden',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
}}>
  <img
    src="https://m.media-amazon.com/images/I/61solmQSSlL._AC_SL1500_.jpg"
    alt="Apple AirPods Pro 3"
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
</div>
            
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                  Apple · Wireless Earbuds · 2025
                </div>
                <h1 style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 'clamp(22px, 3.5vw, 34px)',
                  fontWeight: 700, lineHeight: 1.1, marginBottom: 10
                }}>
                  Apple AirPods Pro 3<br />Wireless Earbuds
                </h1>

                {/* Stars — real from Amazon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{ color: '#f5a623', fontSize: 15 }}>★★★★½</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>4.5 out of 5</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>·</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>8,004 Amazon reviews</span>
                  <span style={{
                    fontSize: 11, color: '#2ecc9a',
                    background: 'rgba(46,204,154,0.1)', border: '1px solid rgba(46,204,154,0.2)',
                    padding: '2px 8px', borderRadius: 4
                  }}>✓ In Stock</span>
                </div>

                {/* Quick stat pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    ['BuyIQ Score', '91/100'],
                    ['Price', '$199.99'],
                    ['Was', '$249.00'],
                    ['Discount', '20% off'],
                    ['All-time low', '$169'],
                  ].map(([label, val]) => (
                    <div key={label} style={{
                      fontSize: 12, color: 'rgba(255,255,255,0.55)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 6, padding: '5px 10px'
                    }}>
                      {label} <strong style={{ color: '#fff' }}>{val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── PRICE HISTORY INSIGHT (from Keepa) ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                📈 Price History & Deal Rating
              </h2>

              {/* Price tip box */}
              <div style={{
                background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.2)',
                borderRadius: 14, padding: 20, marginBottom: 16
              }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 10 }}>
                  💡 BuyIQ Price Intelligence
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 14 }}>
                  {[
                    { label: 'Current Price', val: '$199', color: '#fff' },
                    { label: 'All-Time Low', val: '$169', color: '#2ecc9a' },
                    { label: 'List Price', val: '$249', color: 'rgba(255,255,255,0.4)' },
                  ].map(item => (
                    <div key={item.label} style={{
                      background: 'rgba(255,255,255,0.04)', borderRadius: 10,
                      padding: '12px', textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.07)'
                    }}>
                      <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: item.color }}>
                        {item.val}
                      </div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{item.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>
                  ⚠️ <strong style={{ color: '#fff' }}>Heads up:</strong> The current price of $199 is <strong style={{ color: '#f5a623' }}>not the lowest this product has been</strong>. It dropped to <strong style={{ color: '#2ecc9a' }}>$169 in February 2025</strong>. If you can wait, it may drop again. If you need it now, $199 with 20% off is still a solid deal — especially since 967 people are actively tracking this price.
                </p>
              </div>

              {/* Simple price bar chart */}
              <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>3-Month Price Range (Jan–Apr 2025)</div>
                {[
                  { month: 'Jan', price: 235, max: 249 },
                  { month: 'Feb', price: 169, max: 249 },
                  { month: 'Mar', price: 205, max: 249 },
                  { month: 'Apr', price: 199, max: 249 },
                ].map(item => (
                  <div key={item.month} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', minWidth: 32 }}>{item.month}</span>
                    <div style={{ flex: 1, height: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 6, overflow: 'hidden', position: 'relative' }}>
                      <div style={{
                        width: `${(item.price / item.max) * 100}%`,
                        height: '100%', borderRadius: 6,
                        background: item.price === 169
                          ? 'linear-gradient(90deg, #2ecc9a, #27ae60)'
                          : item.price === 199
                          ? 'linear-gradient(90deg, #f5a623, #f57c00)'
                          : 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.1))'
                      }} />
                    </div>
                    <span style={{
                      fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, minWidth: 44,
                      color: item.price === 169 ? '#2ecc9a' : item.price === 199 ? '#f5a623' : 'rgba(255,255,255,0.6)'
                    }}>
                      ${item.price}
                      {item.price === 169 && <span style={{ fontSize: 10, marginLeft: 3 }}>LOW</span>}
                      {item.price === 199 && <span style={{ fontSize: 10, marginLeft: 3 }}>NOW</span>}
                    </span>
                  </div>
                ))}
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 8 }}>
                  Source: Keepa price tracker · 967 users tracking this product
                </div>
              </div>
            </div>

            {/* ── CATEGORY SCORES ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                📊 Category Scores
              </h2>
              {[
                ['Apple Integration', 99],
                ['ANC Performance', 95],
                ['Live Translation', 94],
                ['Sound Quality', 92],
                ['Comfort', 90],
                ['Health Features', 90],
                ['Value for Money', 82],
                ['Battery Life', 80],
              ].map(([label, score]) => (
                <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 11 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', minWidth: 165 }}>{label}</span>
                  <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{
                      width: `${score}%`, height: '100%', borderRadius: 4,
                      background: 'linear-gradient(90deg, #f5a623, #f57c00)'
                    }} />
                  </div>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', minWidth: 32, textAlign: 'right' }}>
                    {score}
                  </span>
                </div>
              ))}
            </div>

            {/* ── BUYIQ VERDICT ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                🧠 BuyIQ Verdict
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 12 }}>
                The AirPods Pro 3 are <strong style={{ color: '#fff' }}>Apple&apos;s most advanced earbuds ever</strong>. The jump from Pro 2 to Pro 3 is significant — you get <strong style={{ color: '#fff' }}>Live Translation</strong> that translates conversations in real time, a built-in <strong style={{ color: '#fff' }}>Heart Rate Sensor</strong> so you don&apos;t need an Apple Watch, and an <strong style={{ color: '#fff' }}>FDA-approved Hearing Aid feature</strong> that no other earbuds at this price offer.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 12 }}>
                The fact that <strong style={{ color: '#fff' }}>10,000+ people bought these in the past month</strong> and Amazon gave them their &ldquo;Choice&rdquo; badge tells you everything — this is the real deal.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                <strong style={{ color: '#f5a623' }}>Price tip:</strong> At $199 you&apos;re saving 20% off list price — but this product has dropped to <strong style={{ color: '#2ecc9a' }}>$169 in February</strong>. If you&apos;re not in a rush, you could wait for another dip. If you need them now, $199 is still a strong deal.
              </p>
            </div>

            {/* ── WHAT'S NEW vs PRO 2 ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                🆕 What&apos;s New vs AirPods Pro 2
              </h2>
              <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(245,166,35,0.15)', borderRadius: 14, padding: 20 }}>
                {[
                  ['Live Translation', 'Translates conversations in real time — brand new in Pro 3'],
                  ['Heart Rate Sensor', 'Built-in heart rate monitoring — no Apple Watch needed'],
                  ['Hearing Aid Feature', 'FDA-approved clinical hearing aid — first ever in earbuds'],
                  ['Stronger ANC', 'Even more powerful noise cancellation than Pro 2'],
                  ['Better Sound', 'High-Fidelity upgrade over the previous generation'],
                ].map(([feature, desc]) => (
                  <div key={feature as string} style={{
                    display: 'flex', gap: 14, padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}>
                    <span style={{ color: '#f5a623', flexShrink: 0, fontWeight: 700, fontSize: 13, minWidth: 155 }}>
                      ✦ {feature}
                    </span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── PROS & CONS ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                ⚖️ Pros & Cons
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2ecc9a', marginBottom: 12 }}>
                    ✅ What&apos;s Great
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {PROS.map(pro => (
                      <li key={pro} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8, lineHeight: 1.4 }}>
                        <span style={{ color: '#2ecc9a', flexShrink: 0 }}>✓</span>{pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#f87171', marginBottom: 12 }}>
                    ❌ What&apos;s Not
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {CONS.map(con => (
                      <li key={con} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8, lineHeight: 1.4 }}>
                        <span style={{ color: '#f87171', flexShrink: 0 }}>✗</span>{con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── FULL SPECS ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                📐 Full Specifications
              </h2>
              <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '6px 20px' }}>
                {SPECS.map(({ key, val }) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{key}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── WHO SHOULD BUY ── */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                🎯 Who Should Buy This?
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 12 }}>
                    🏆 Buy this if…
                  </div>
                  {[
                    'You own an iPhone, iPad, or Mac',
                    'You want the latest Apple technology',
                    'You want Heart Rate tracking without Apple Watch',
                    'You travel and need Live Translation',
                    'You have hearing difficulties (Hearing Aid feature)',
                    'You want the best ANC available today',
                  ].map(item => (
                    <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#f5a623', flexShrink: 0 }}>→</span>{item}
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f87171', marginBottom: 12 }}>
                    ❌ Skip if…
                  </div>
                  {[
                    'You use Android as your main phone',
                    'You want the absolute lowest price (wait for a sale)',
                    'You already own AirPods Pro 2 in good condition',
                    'You need Hi-Res audio (LDAC) — Sony is better',
                    'Budget is your main concern',
                  ].map(item => (
                    <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#f87171', flexShrink: 0 }}>→</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ══════════════════════════════
              RIGHT COLUMN — sticky sidebar
          ══════════════════════════════ */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{
              background: 'rgba(8,16,40,0.85)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 18, padding: 24
            }}>
              {/* Price header */}
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                Current Amazon price
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 40, fontWeight: 700 }}>$199</span>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>$249</span>
                <span style={{
                  fontSize: 12, fontWeight: 700, padding: '3px 8px', borderRadius: 5,
                  background: 'rgba(245,124,0,0.2)', color: '#f57c00', border: '1px solid rgba(245,124,0,0.3)'
                }}>-20%</span>
              </div>

              {/* Price warning */}
              <div style={{
                fontSize: 12, color: '#f5a623', fontWeight: 600, marginBottom: 6,
                display: 'flex', alignItems: 'center', gap: 5
              }}>
                ⚠️ Not the lowest — hit $169 in Feb
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
                All-time low: <strong style={{ color: '#2ecc9a' }}>$169</strong> · List price: $249
              </div>

              {/* Buy button */}
              <a
                href="https://www.amazon.com/dp/B0FQFB8FMG?tag=buyiq-20"
                target="_blank"
                rel="nofollow noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%',
                  background: 'linear-gradient(135deg, #f57c00, #e64a19)',
                  color: '#fff', textDecoration: 'none',
                  fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700,
                  padding: 14, borderRadius: 10, marginBottom: 12,
                  boxShadow: '0 4px 20px rgba(245,124,0,0.35)'
                }}
              >
                Buy on Amazon 🛒
              </a>

              {/* Trust notes */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 20 }}>
                {[
                  '✓ Ships free with Prime',
                  '✓ Free returns within 30 days',
                  '✓ Secure Amazon checkout',
                  '✓ In Stock — ships fast',
                ].map(note => (
                  <div key={note} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                    {note}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '0 0 20px' }} />

              {/* BuyIQ Score */}
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  BuyIQ Score
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 52, fontWeight: 700, color: '#f5a623', lineHeight: 1 }}>
                  91
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                  out of 100
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '0 0 20px' }} />

              {/* Quick stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Rating', val: '4.5★' },
                  { label: 'Reviews', val: '8,004' },
                  { label: 'Bought/mo', val: '10K+' },
                  { label: 'Warranty', val: '1 year' },
                  { label: 'All-time low', val: '$169' },
                  { label: 'You save', val: '$50' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 10, padding: '10px 12px', textAlign: 'center'
                  }}>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#fff' }}>
                      {stat.val}
                    </div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      {stat.label}
                    </div>
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

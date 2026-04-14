'use client'

import Link from 'next/link'

const PROS = [
  'Active Noise Cancellation — first time on standard AirPods',
  'Adaptive Transparency mode — sounds completely natural',
  'Personalized Spatial Audio with head tracking',
  'USB-C + wireless charging case included',
  'H2 chip — same powerful chip as AirPods Pro 2',
  '19,473 reviews with 4.6★ — extremely well proven',
  '10K+ bought in the past month — most popular right now',
]

const CONS = [
  'No ear tips / silicone — open-ear design, less ANC than Pro',
  'All-time low was $108 in Feb — current $155 is not the best price',
  'No Transparency mode as refined as AirPods Pro 3',
  'Fit may not work for everyone — no adjustable ear tips',
]

const SPECS = [
  { key: 'Model', val: 'AirPods 4 with ANC (2024)' },
  { key: 'Chip', val: 'Apple H2' },
  { key: 'Active Noise Cancellation', val: 'Yes — first on AirPods 4' },
  { key: 'Transparency Mode', val: 'Yes — Adaptive' },
  { key: 'Spatial Audio', val: 'Yes + head tracking' },
  { key: 'Charging case', val: 'USB-C + Wireless charging' },
  { key: 'Style', val: 'Open-ear (no silicone tips)' },
  { key: 'Amazon Badge', val: "Amazon's Choice" },
  { key: 'Availability', val: 'In Stock' },
  { key: 'Current Price', val: '$154.99' },
  { key: 'List Price', val: '$179.00' },
  { key: 'All-Time Low', val: '$108 (Feb 2025)' },
]

export default function AirPods4Page() {
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

        {/* NAV */}
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>AirPods 4</span>
          </div>
          <Link href="/signin" style={{
            fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none', padding: '7px 16px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8
          }}>Sign In</Link>
        </nav>

        {/* MAIN LAYOUT */}
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '44px 24px 100px',
          display: 'grid', gridTemplateColumns: '1fr 290px', gap: 32,
          alignItems: 'start'
        }}>

          {/* LEFT COLUMN */}
          <div>

            {/* Badges */}
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

            {/* Product hero */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
              <div style={{
                width: 130, height: 130, flexShrink: 0,
                borderRadius: 20, overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <img
                  src="https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg"
                  alt="Apple AirPods 4"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                  Apple · Wireless Earbuds · 2024
                </div>
                <h1 style={{
                  fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(22px, 3.5vw, 34px)',
                  fontWeight: 700, lineHeight: 1.1, marginBottom: 10
                }}>
                  Apple AirPods 4<br />with Active Noise Cancellation
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{ color: '#f5a623', fontSize: 15 }}>★★★★½</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>4.6 out of 5</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>·</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>19,473 Amazon reviews</span>
                  <span style={{
                    fontSize: 11, color: '#2ecc9a',
                    background: 'rgba(46,204,154,0.1)', border: '1px solid rgba(46,204,154,0.2)',
                    padding: '2px 8px', borderRadius: 4
                  }}>✓ In Stock</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    ['BuyIQ Score', '87/100'],
                    ['Price', '$154.99'],
                    ['Was', '$179.00'],
                    ['Discount', '13% off'],
                    ['All-time low', '$108'],
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

            {/* Price History */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                📈 Price History & Deal Rating
              </h2>

              <div style={{
                background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.2)',
                borderRadius: 14, padding: 20, marginBottom: 16
              }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#f5a623', marginBottom: 10 }}>
                  💡 BuyIQ Price Intelligence
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 14 }}>
                  {[
                    { label: 'Current Price', val: '$155', color: '#fff' },
                    { label: 'All-Time Low', val: '$108', color: '#2ecc9a' },
                    { label: 'List Price', val: '$179', color: 'rgba(255,255,255,0.4)' },
                  ].map(item => (
                    <div key={item.label} style={{
                      background: 'rgba(255,255,255,0.04)', borderRadius: 10,
                      padding: 12, textAlign: 'center',
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
                  ⚠️ <strong style={{ color: '#fff' }}>Heads up:</strong> The current price of $155 is <strong style={{ color: '#f5a623' }}>not the lowest this product has been</strong>. It dropped to <strong style={{ color: '#2ecc9a' }}>$108 in February 2025</strong>. If you can wait, it may drop again. If you need them now, $155 with 13% off is still a fair deal — 472 users are actively tracking this price.
                </p>
              </div>

              {/* Price bar chart */}
              <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>3-Month Price Range (Jan–Apr 2025)</div>
                {[
                  { month: 'Jan', price: 149 },
                  { month: 'Feb', price: 108 },
                  { month: 'Mar', price: 140 },
                  { month: 'Apr', price: 155 },
                ].map(item => (
                  <div key={item.month} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', minWidth: 32 }}>{item.month}</span>
                    <div style={{ flex: 1, height: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 6, overflow: 'hidden' }}>
                      <div style={{
                        width: `${(item.price / 179) * 100}%`,
                        height: '100%', borderRadius: 6,
                        background: item.price === 108
                          ? 'linear-gradient(90deg, #2ecc9a, #27ae60)'
                          : item.price === 155
                          ? 'linear-gradient(90deg, #f5a623, #f57c00)'
                          : 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.1))'
                      }} />
                    </div>
                    <span style={{
                      fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, minWidth: 60,
                      color: item.price === 108 ? '#2ecc9a' : item.price === 155 ? '#f5a623' : 'rgba(255,255,255,0.6)'
                    }}>
                      ${item.price}
                      {item.price === 108 && <span style={{ fontSize: 10, marginLeft: 3 }}>LOW</span>}
                      {item.price === 155 && <span style={{ fontSize: 10, marginLeft: 3 }}>NOW</span>}
                    </span>
                  </div>
                ))}
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 8 }}>
                  Source: Keepa price tracker · 472 users tracking this product
                </div>
              </div>
            </div>

            {/* Score bars */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                📊 Category Scores
              </h2>
              {[
                ['Apple Integration', 99],
                ['Comfort & Fit', 88],
                ['Sound Quality', 87],
                ['ANC Performance', 84],
                ['Transparency Mode', 86],
                ['Value for Money', 85],
                ['Battery Life', 82],
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

            {/* BuyIQ Verdict */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                🧠 BuyIQ Verdict
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 12 }}>
                The AirPods 4 with ANC are a <strong style={{ color: '#fff' }}>big deal for Apple</strong>. For the first time ever, you get Active Noise Cancellation on the standard AirPods — previously only available on the Pro models. If you want ANC but don&apos;t want to pay Pro prices, this is your best option.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 12 }}>
                The open-ear design means <strong style={{ color: '#fff' }}>no silicone ear tips</strong> — which some people love (more comfortable for long use) and others dislike (slightly less ANC effectiveness than Pro). The H2 chip delivers the same processing power as AirPods Pro 2.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                <strong style={{ color: '#f5a623' }}>Price tip:</strong> At $155 you save 13%, but this product hit <strong style={{ color: '#2ecc9a' }}>$108 in February</strong> — nearly $50 cheaper. If you can wait for a sale, do it. If you need them now, $155 is still reasonable.
              </p>
            </div>

            {/* AirPods 4 vs Pro comparison note */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                🆚 AirPods 4 vs AirPods Pro 3
              </h2>
              <div style={{ background: 'rgba(8,16,40,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 20 }}>
                {[
                  ['Price', '$154.99', '$199.99', 'AirPods 4'],
                  ['ANC', 'Yes — good', 'Yes — best in class', 'Pro 3'],
                  ['Ear tips', 'No (open-ear)', 'Yes (silicone)', 'Pro 3'],
                  ['Live Translation', 'No', 'Yes', 'Pro 3'],
                  ['Heart Rate Sensor', 'No', 'Yes', 'Pro 3'],
                  ['Hearing Aid', 'No', 'Yes (FDA)', 'Pro 3'],
                  ['Comfort (long use)', 'Better for some', 'Standard tips', 'Tie'],
                ].map(([feature, a, b, winner]) => (
                  <div key={feature as string} style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    gap: 12
                  }}>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{feature}</span>
                    <span style={{ fontSize: 13, color: winner === 'AirPods 4' ? '#2ecc9a' : 'rgba(255,255,255,0.6)', fontWeight: winner === 'AirPods 4' ? 600 : 400 }}>
                      {a} {winner === 'AirPods 4' && '✓'}
                    </span>
                    <span style={{ fontSize: 13, color: winner === 'Pro 3' ? '#2ecc9a' : 'rgba(255,255,255,0.6)', fontWeight: winner === 'Pro 3' ? 600 : 400 }}>
                      {b} {winner === 'Pro 3' && '✓'}
                    </span>
                  </div>
                ))}
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 14, lineHeight: 1.6 }}>
                  💡 <strong style={{ color: '#fff' }}>Bottom line:</strong> Save $45 with AirPods 4 if you don&apos;t need Live Translation or Heart Rate. Get Pro 3 if you want the absolute best Apple earbuds.
                </p>
              </div>
            </div>

            {/* Pros & Cons */}
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

            {/* Full Specs */}
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

            {/* Who should buy */}
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
                    'You own an iPhone and want ANC for less',
                    'You dislike silicone ear tips (open-ear fan)',
                    'You want AirPods Pro features at a lower price',
                    'You want wireless charging included',
                    'Budget matters but you still want Apple quality',
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
                    'You want the best ANC possible (get Pro 3)',
                    'You need Live Translation or Heart Rate',
                    'You use Android as your main phone',
                    'You want to wait for the price to drop to $108',
                    'You prefer silicone tips for better seal',
                  ].map(item => (
                    <div key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', gap: 8 }}>
                      <span style={{ color: '#f87171', flexShrink: 0 }}>→</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN — Sticky sidebar */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{
              background: 'rgba(8,16,40,0.85)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 18, padding: 24
            }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                Current Amazon price
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 40, fontWeight: 700 }}>$154</span>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through' }}>$179</span>
                <span style={{
                  fontSize: 12, fontWeight: 700, padding: '3px 8px', borderRadius: 5,
                  background: 'rgba(245,124,0,0.2)', color: '#f57c00', border: '1px solid rgba(245,124,0,0.3)'
                }}>-13%</span>
              </div>

              <div style={{ fontSize: 12, color: '#f5a623', fontWeight: 600, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                ⚠️ Not the lowest — hit $108 in Feb
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
                All-time low: <strong style={{ color: '#2ecc9a' }}>$108</strong> · List price: $179
              </div>

              {/* Buy button */}
              <a
                href="https://www.amazon.com/dp/B0DGJ7HYG1?tag=buyiq-20"
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
                  '✓ Free 15-day refund/replacement',
                  '✓ Secure Amazon checkout',
                  '✓ In Stock — ships Saturday',
                ].map(note => (
                  <div key={note} style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                    {note}
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '0 0 20px' }} />

              {/* BuyIQ Score */}
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  BuyIQ Score
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 52, fontWeight: 700, color: '#f5a623', lineHeight: 1 }}>
                  87
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>out of 100</div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '0 0 20px' }} />

              {/* Quick stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { label: 'Rating', val: '4.6★' },
                  { label: 'Reviews', val: '19K+' },
                  { label: 'Bought/mo', val: '10K+' },
                  { label: 'All-time low', val: '$108' },
                  { label: 'You save', val: '$24' },
                  { label: 'Warranty', val: '1 year' },
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

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', margin: '20px 0 14px' }} />

              {/* Also consider */}
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                Also Consider
              </div>
              <Link href="/product/airpods3" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                textDecoration: 'none', padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ fontSize: 24 }}>🎧</span>
                <div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>AirPods Pro 3</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>$199 · More features</div>
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── PRODUCT DATA ──────────────────────────────────────────────────────────────
const A_NAME = 'AirPods Pro 3'
const A_PRICE = '$199.99'
const A_SCORE = 91
const A_REVIEWS = '8,004'
const A_IMG = 'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg'
const A_URL = 'https://www.amazon.com/dp/B0FQFB8FMG?tag=buyiq-20'
const A_BUY_IF = [
  'You want Live Translation for travel',
  'You want Heart Rate without Apple Watch',
  'You have hearing difficulties (FDA Hearing Aid)',
  'You want the absolute best ANC',
  'You prefer silicone tips for better seal',
]

const B_NAME = 'AirPods 4 (ANC)'
const B_PRICE = '$154.99'
const B_SCORE = 87
const B_REVIEWS = '19,473'
const B_IMG = 'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg'
const B_URL = 'https://www.amazon.com/dp/B0DGJ7HYG1?tag=buyiq-20'
const B_BUY_IF = [
  'You want to save $45 vs Pro 3',
  'You prefer open-ear fit (no silicone tips)',
  'You do not need Live Translation or Heart Rate',
  'You want great ANC at a lower price',
  'You can wait for the price to drop again',
]

const VERDICT = 'The AirPods Pro 3 wins overall — but only if you need its exclusive features. Live Translation, Heart Rate Sensor, and the FDA Hearing Aid are genuinely unique. If those do not matter to you, the AirPods 4 delivers 90% of the experience for $45 less.'

const SECTIONS = [
  {
    title: '🔊 Sound Quality',
    scoreA: 92,
    scoreB: 87,
    rows: [
      { label: 'Chip', a: 'Apple H2', b: 'Apple H2', win: 'tie' },
      { label: 'Sound Profile', a: 'High-Fidelity, refined', b: 'High-Fidelity', win: 'a' },
      { label: 'Spatial Audio', a: 'Yes + head tracking', b: 'Yes + head tracking', win: 'tie' },
      { label: 'Overall Audio', a: 'Best on AirPods', b: 'Very good', win: 'a' },
    ],
  },
  {
    title: '🔇 Noise Cancellation',
    scoreA: 95,
    scoreB: 84,
    rows: [
      { label: 'ANC', a: 'Yes — best in class', b: 'Yes — good', win: 'a' },
      { label: 'Transparency', a: 'Adaptive — best ever', b: 'Adaptive — very good', win: 'a' },
      { label: 'Ear seal', a: 'Silicone tips (better)', b: 'Open-ear (no tips)', win: 'a' },
      { label: 'Wind noise', a: 'Excellent', b: 'Good', win: 'a' },
    ],
  },
  {
    title: '✨ Exclusive Features',
    scoreA: 99,
    scoreB: 40,
    rows: [
      { label: 'Live Translation', a: 'Yes — real time', b: 'No', win: 'a' },
      { label: 'Heart Rate Sensor', a: 'Yes — built-in', b: 'No', win: 'a' },
      { label: 'Hearing Aid (FDA)', a: 'Yes — first ever', b: 'No', win: 'a' },
      { label: 'Health tracking', a: 'Yes', b: 'No', win: 'a' },
    ],
  },
  {
    title: '🔋 Battery and Charging',
    scoreA: 82,
    scoreB: 82,
    rows: [
      { label: 'Wireless charging', a: 'USB-C + MagSafe', b: 'USB-C + Wireless', win: 'tie' },
      { label: 'Quick charge', a: 'Yes', b: 'Yes', win: 'tie' },
      { label: 'Battery life', a: 'Good', b: 'Good', win: 'tie' },
    ],
  },
  {
    title: '😌 Comfort and Design',
    scoreA: 88,
    scoreB: 88,
    rows: [
      { label: 'Fit style', a: 'Silicone tips (in-ear)', b: 'Open-ear (no tips)', win: 'tie' },
      { label: 'Water resistance', a: 'IP54', b: 'IP54', win: 'tie' },
      { label: 'Long session', a: 'Very good', b: 'Great for some', win: 'tie' },
    ],
  },
  {
    title: '💰 Value and Price',
    scoreA: 82,
    scoreB: 92,
    rows: [
      { label: 'Current price', a: '$199.99', b: '$154.99', win: 'b' },
      { label: 'All-time low', a: '$169', b: '$108', win: 'b' },
      { label: 'Value for money', a: 'Good', b: 'Excellent', win: 'b' },
    ],
  },
]

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function CompareAirPodsPage() {
  const [dark, setDark] = useState(true)

  // Theme tokens
  const bg          = dark ? '#04060f'                    : '#f5f5f7'
  const surface     = dark ? 'rgba(8,16,40,0.85)'         : '#ffffff'
  const border      = dark ? 'rgba(255,255,255,0.09)'     : 'rgba(0,0,0,0.08)'
  const text        = dark ? '#ffffff'                    : '#1a1a1a'
  const muted       = dark ? 'rgba(255,255,255,0.5)'      : 'rgba(0,0,0,0.5)'
  const subtle      = dark ? 'rgba(255,255,255,0.07)'     : 'rgba(0,0,0,0.06)'
  const rowBg       = dark ? 'rgba(8,16,40,0.6)'          : '#fafafa'
  const headerBg    = dark ? 'rgba(255,255,255,0.03)'     : '#f0f0f2'
  const navBg       = dark ? 'rgba(4,6,15,0.85)'          : 'rgba(255,255,255,0.9)'
  const sectionBg   = dark ? 'rgba(8,16,40,0.4)'          : '#ebebed'
  const cardShadow  = dark ? 'none'                       : '0 2px 20px rgba(0,0,0,0.06)'

  const bgStyle = dark
    ? {
        background: `
          radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%),
          radial-gradient(ellipse 70% 30% at 50% 2%, rgba(255,150,30,0.28) 0%, transparent 42%),
          linear-gradient(180deg, #080310 0%, #04060f 100%)
        `,
      }
    : { background: '#f5f5f7' }

  return (
    <>
      {/* Fixed background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', transition: 'background 0.3s', ...bgStyle }} />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', fontFamily: 'Open Sans, sans-serif', color: text, background: bg, transition: 'background 0.3s, color 0.3s' }}>

        {/* ── NAV ── */}
        <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 36px', background: navBg, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${border}`, transition: 'background 0.3s' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <span style={{ fontSize: 22, filter: 'drop-shadow(0 0 8px rgba(255,155,30,0.9))' }}>🛒</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: text, letterSpacing: '0.03em' }}>
              Buy<span style={{ color: '#f5a623' }}>IQ</span>
            </span>
          </Link>

          <div style={{ fontSize: 13, color: muted, display: 'flex', gap: 8, alignItems: 'center' }}>
            <Link href="/" style={{ color: muted, textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <span style={{ color: text }}>AirPods Pro 3 vs AirPods 4</span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 14px', background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', border: `1px solid ${border}`, borderRadius: 8, cursor: 'pointer', fontSize: 14, color: text, fontFamily: 'Open Sans, sans-serif', transition: 'all 0.2s' }}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '44px 24px 100px' }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.25)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: '#f5a623', fontWeight: 600, marginBottom: 14, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
              ⚔️ BuyIQ Head-to-Head Comparison
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 10, color: text }}>
              AirPods Pro 3 vs AirPods 4<br />
              <span style={{ color: muted, fontSize: '0.6em', fontWeight: 400 }}>Which Apple earbuds should you buy?</span>
            </h1>
            <p style={{ fontSize: 14, color: muted }}>Based on {A_REVIEWS} + {B_REVIEWS} verified Amazon reviews</p>
          </div>

          {/* ── HERO CARDS ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 32 }}>

            {/* Product A — Pro 3 (winner) */}
            <div style={{ background: dark ? 'rgba(245,166,35,0.07)' : 'rgba(245,166,35,0.06)', border: '2px solid rgba(245,166,35,0.4)', borderRadius: 18, padding: 28, textAlign: 'center', boxShadow: cardShadow }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: 6, padding: '3px 10px', fontSize: 11, color: '#f5a623', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 12 }}>
                🏆 BuyIQ Pick
              </div>
              <div style={{ width: 100, height: 100, margin: '0 auto 14px', borderRadius: 16, overflow: 'hidden', background: dark ? 'rgba(255,255,255,0.05)' : '#f0f0f2', border: `1px solid ${border}` }}>
                <img src={A_IMG} alt={A_NAME} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 6, color: text }}>{A_NAME}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 38, fontWeight: 700, color: '#f5a623', lineHeight: 1 }}>{A_SCORE}</div>
              <div style={{ fontSize: 11, color: muted, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 8 }}>BuyIQ Score</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: text, marginBottom: 4 }}>{A_PRICE}</div>
              <div style={{ color: '#f5a623', fontSize: 13, marginBottom: 4 }}>★★★★½</div>
              <div style={{ fontSize: 12, color: muted, marginBottom: 18 }}>{A_REVIEWS} reviews</div>
              <a href={A_URL} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, padding: '11px 14px', borderRadius: 9, boxShadow: '0 4px 16px rgba(245,124,0,0.3)' }}>
                Buy on Amazon 🛒
              </a>
            </div>

            {/* VS */}
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: muted, textAlign: 'center', padding: '0 8px' }}>VS</div>

            {/* Product B — AirPods 4 */}
            <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 18, padding: 28, textAlign: 'center', boxShadow: cardShadow }}>
              <div style={{ height: 26 }} />
              <div style={{ width: 100, height: 100, margin: '0 auto 14px', borderRadius: 16, overflow: 'hidden', background: dark ? 'rgba(255,255,255,0.05)' : '#f0f0f2', border: `1px solid ${border}` }}>
                <img src={B_IMG} alt={B_NAME} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 6, color: text }}>{B_NAME}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 38, fontWeight: 700, color: '#a78bfa', lineHeight: 1 }}>{B_SCORE}</div>
              <div style={{ fontSize: 11, color: muted, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 8 }}>BuyIQ Score</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: text, marginBottom: 4 }}>{B_PRICE}</div>
              <div style={{ color: '#f5a623', fontSize: 13, marginBottom: 4 }}>★★★★½</div>
              <div style={{ fontSize: 12, color: muted, marginBottom: 18 }}>{B_REVIEWS} reviews</div>
              <a href={B_URL} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, padding: '11px 14px', borderRadius: 9, boxShadow: '0 4px 16px rgba(124,58,237,0.3)' }}>
                Buy on Amazon 🛒
              </a>
            </div>
          </div>

          {/* ── VERDICT BANNER ── */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px', marginBottom: 40, background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.18)', borderRadius: 14 }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>🧠</div>
            <div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#f5a623', marginBottom: 6 }}>
                BuyIQ Verdict — {A_NAME} wins overall
              </div>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.7 }}>{VERDICT}</p>
            </div>
          </div>

          {/* ── COMPARISON SECTIONS ── */}
          {SECTIONS.map((section) => (
            <div key={section.title} style={{ marginBottom: 32 }}>

              {/* Section title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: muted }}>
                  {section.title}
                </span>
                <div style={{ flex: 1, height: 1, background: subtle }} />
              </div>

              {/* Column headers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: headerBg, border: `1px solid ${border}`, borderRadius: 10, marginBottom: 6, overflow: 'hidden' }}>
                <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 700, color: muted, textTransform: 'uppercase' as const }}>Category</div>
                <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 700, color: '#f5a623', textTransform: 'uppercase' as const, borderLeft: `1px solid ${subtle}` }}>{A_NAME}</div>
                <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase' as const, borderLeft: `1px solid ${subtle}` }}>{B_NAME}</div>
              </div>

              {/* Rows */}
              {section.rows.map((row) => (
                <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: rowBg, border: `1px solid ${border}`, borderRadius: 10, marginBottom: 5, overflow: 'hidden' }}>
                  <div style={{ padding: '12px 16px', fontSize: 13, color: muted }}>{row.label}</div>
                  <div style={{ padding: '12px 16px', fontSize: 13, borderLeft: `1px solid ${subtle}`, color: row.win === 'a' ? text : muted, fontWeight: row.win === 'a' ? 600 : 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {row.a}
                    {row.win === 'a' && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, background: 'rgba(245,166,35,0.15)', color: '#f5a623', flexShrink: 0 }}>WIN</span>}
                  </div>
                  <div style={{ padding: '12px 16px', fontSize: 13, borderLeft: `1px solid ${subtle}`, color: row.win === 'b' ? text : muted, fontWeight: row.win === 'b' ? 600 : 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {row.b}
                    {row.win === 'b' && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, background: 'rgba(167,139,250,0.15)', color: '#a78bfa', flexShrink: 0 }}>WIN</span>}
                  </div>
                </div>
              ))}

              {/* Score bars */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: sectionBg, border: `1px solid ${subtle}`, borderRadius: 10, padding: '14px 16px', marginTop: 4 }}>
                <div style={{ fontSize: 12, color: muted, display: 'flex', alignItems: 'center' }}>Section Score</div>
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: subtle, borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${section.scoreA}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #f5a623, #f57c00)' }} />
                    </div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#f5a623', minWidth: 28 }}>{section.scoreA}</span>
                  </div>
                </div>
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: subtle, borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${section.scoreB}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }} />
                    </div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#a78bfa', minWidth: 28 }}>{section.scoreB}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ── QUICK PICK BOXES ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
            <div style={{ background: surface, border: '1px solid rgba(245,166,35,0.25)', borderRadius: 14, padding: 22, boxShadow: cardShadow }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#f5a623', marginBottom: 14 }}>
                🏆 Choose {A_NAME} if…
              </div>
              {A_BUY_IF.map(item => (
                <div key={item} style={{ fontSize: 13.5, color: muted, padding: '6px 0', borderBottom: `1px solid ${subtle}`, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#f5a623', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
              <a href={A_URL} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 18, background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, padding: 12, borderRadius: 9, boxShadow: '0 4px 16px rgba(245,124,0,0.3)' }}>
                Buy {A_NAME} — {A_PRICE} 🛒
              </a>
            </div>

            <div style={{ background: surface, border: '1px solid rgba(167,139,250,0.25)', borderRadius: 14, padding: 22, boxShadow: cardShadow }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#a78bfa', marginBottom: 14 }}>
                💜 Choose {B_NAME} if…
              </div>
              {B_BUY_IF.map(item => (
                <div key={item} style={{ fontSize: 13.5, color: muted, padding: '6px 0', borderBottom: `1px solid ${subtle}`, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#a78bfa', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
              <a href={B_URL} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 18, background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, padding: 12, borderRadius: 9, boxShadow: '0 4px 16px rgba(124,58,237,0.3)' }}>
                Buy {B_NAME} — {B_PRICE} 🛒
              </a>
            </div>
          </div>

          {/* ── RELATED ── */}
          <div style={{ marginTop: 48, paddingTop: 36, borderTop: `1px solid ${subtle}` }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 16, color: text }}>
              Read Full Reviews
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link href="/product/airpods3" style={{ padding: '8px 16px', background: surface, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: muted, textDecoration: 'none' }}>
                🎧 AirPods Pro 3 Full Review
              </Link>
              <Link href="/product/airpods4" style={{ padding: '8px 16px', background: surface, border: `1px solid ${border}`, borderRadius: 8, fontSize: 14, color: muted, textDecoration: 'none' }}>
                🎧 AirPods 4 Full Review
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

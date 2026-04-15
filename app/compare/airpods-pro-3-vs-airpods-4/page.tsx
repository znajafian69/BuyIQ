'use client'

import Link from 'next/link'
import { useState } from 'react'

// ══════════════════════════════════════════════════════════════════
// ✏️  EDIT COMPARISON DATA HERE
// ══════════════════════════════════════════════════════════════════
const COMPARE = {
  a: {
    name:    'AirPods Pro 3',
    price:   '$199.99',
    score:   91,
    reviews: '8,004',
    rating:  4.5,
    image:   'https://m.media-amazon.com/images/I/61solmQSSlL._AC_SL1500_.jpg',
    url:     'https://www.amazon.com/dp/B0FQFB8FMG?tag=buyiq-20',
    winner:  true,
    buyIf: [
      'You want Live Translation for travel',
      'You want Heart Rate without Apple Watch',
      'You have hearing difficulties (FDA Hearing Aid)',
      'You want the absolute best ANC',
      'You prefer silicone tips for better seal',
    ],
  },
  b: {
    name:    'AirPods 4 (ANC)',
    price:   '$154.99',
    score:   87,
    reviews: '19,473',
    rating:  4.6,
    image:   'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg',
    url:     'https://www.amazon.com/dp/B0DGJ7HYG1?tag=buyiq-20',
    winner:  false,
    buyIf: [
      'You want to save $45 vs Pro 3',
      'You prefer open-ear fit (no silicone tips)',
      'You do not need Live Translation or Heart Rate',
      'You want great ANC at a lower price',
      'You can wait for the price to drop again',
    ],
  },
  verdict: 'The AirPods Pro 3 wins overall — but only if you need its exclusive features. Live Translation, Heart Rate Sensor, and the FDA Hearing Aid are genuinely unique. If those do not matter to you, the AirPods 4 delivers 90% of the experience for $45 less.',
  sections: [
    {
      title: '🔊 Sound Quality', scoreA: 92, scoreB: 87,
      rows: [
        { label: 'Chip',          a: 'Apple H2',              b: 'Apple H2',             win: 'tie' },
        { label: 'Sound Profile', a: 'High-Fidelity, refined', b: 'High-Fidelity',        win: 'a' },
        { label: 'Spatial Audio', a: 'Yes + head tracking',   b: 'Yes + head tracking',  win: 'tie' },
        { label: 'Overall Audio', a: 'Best on AirPods',       b: 'Very good',            win: 'a' },
      ],
    },
    {
      title: '🔇 Noise Cancellation', scoreA: 95, scoreB: 84,
      rows: [
        { label: 'ANC',          a: 'Yes — best in class',    b: 'Yes — good',           win: 'a' },
        { label: 'Transparency', a: 'Adaptive — best ever',   b: 'Adaptive — very good', win: 'a' },
        { label: 'Ear seal',     a: 'Silicone tips (better)', b: 'Open-ear (no tips)',   win: 'a' },
        { label: 'Wind noise',   a: 'Excellent',              b: 'Good',                 win: 'a' },
      ],
    },
    {
      title: '✨ Exclusive Features', scoreA: 99, scoreB: 40,
      rows: [
        { label: 'Live Translation',  a: 'Yes — real time',  b: 'No', win: 'a' },
        { label: 'Heart Rate Sensor', a: 'Yes — built-in',   b: 'No', win: 'a' },
        { label: 'Hearing Aid (FDA)', a: 'Yes — first ever', b: 'No', win: 'a' },
        { label: 'Health tracking',   a: 'Yes',              b: 'No', win: 'a' },
      ],
    },
    {
      title: '🔋 Battery and Charging', scoreA: 82, scoreB: 82,
      rows: [
        { label: 'Wireless charging', a: 'USB-C + MagSafe', b: 'USB-C + Wireless', win: 'tie' },
        { label: 'Quick charge',      a: 'Yes',             b: 'Yes',              win: 'tie' },
        { label: 'Battery life',      a: 'Good',            b: 'Good',             win: 'tie' },
      ],
    },
    {
      title: '😌 Comfort and Design', scoreA: 88, scoreB: 88,
      rows: [
        { label: 'Fit style',        a: 'Silicone tips (in-ear)', b: 'Open-ear (no tips)', win: 'tie' },
        { label: 'Water resistance', a: 'IP54',                   b: 'IP54',               win: 'tie' },
        { label: 'Long session',     a: 'Very good',              b: 'Great for some',     win: 'tie' },
      ],
    },
    {
      title: '💰 Value and Price', scoreA: 82, scoreB: 92,
      rows: [
        { label: 'Current price',   a: '$199.99', b: '$154.99',   win: 'b' },
        { label: 'All-time low',    a: '$169',    b: '$108',      win: 'b' },
        { label: 'Value for money', a: 'Good',    b: 'Excellent', win: 'b' },
      ],
    },
  ],
}

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
    rowBg: 'rgba(8,16,40,0.6)', headerBg: 'rgba(255,255,255,0.03)',
    sectionBg: 'rgba(8,16,40,0.4)', cardShadow: 'none',
  },
  {
    id: 'light', label: '☀️', title: 'Light',
    bg: '#f5f5f7', bodyBg: '#f5f5f7', surface: '#ffffff', border: 'rgba(0,0,0,0.08)',
    text: '#1a1a1a', muted: 'rgba(0,0,0,0.5)', subtle: 'rgba(0,0,0,0.06)',
    navBg: 'rgba(255,255,255,0.92)', inputBg: 'rgba(0,0,0,0.03)',
    rowBg: '#fafafa', headerBg: '#f0f0f2',
    sectionBg: '#ebebed', cardShadow: '0 2px 20px rgba(0,0,0,0.06)',
  },
  {
    id: 'navy', label: '🌊', title: 'Navy',
    bg: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)',
    bodyBg: '#0d1f3c', surface: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)',
    text: '#e8f0fe', muted: 'rgba(232,240,254,0.55)', subtle: 'rgba(255,255,255,0.07)',
    navBg: 'rgba(10,22,40,0.9)', inputBg: 'rgba(255,255,255,0.04)',
    rowBg: 'rgba(255,255,255,0.04)', headerBg: 'rgba(255,255,255,0.05)',
    sectionBg: 'rgba(255,255,255,0.03)', cardShadow: 'none',
  },
  {
    id: 'black', label: '🌸', title: 'Pink',
    bg: 'linear-gradient(180deg, #1a0010 0%, #0d0008 100%)',
    bodyBg: '#0d0008', surface: '#1a0010', border: 'rgba(255,100,150,0.15)',
    text: '#ffffff', muted: 'rgba(255,255,255,0.45)', subtle: 'rgba(255,100,150,0.1)',
    navBg: 'rgba(13,0,8,0.95)', inputBg: 'rgba(255,100,150,0.06)',
    footerBorder: 'rgba(255,100,150,0.1)', footerText: 'rgba(255,255,255,0.25)',
  },
]

// ── COMPONENT ─────────────────────────────────────────────────────
export default function CompareAirPodsPage() {
  const [themeId, setThemeId] = useState('dark')
  const t = THEMES.find(x => x.id === themeId) || THEMES[0]
  const { a, b, verdict, sections } = COMPARE

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${a.name} vs ${b.name} — Which Should You Buy?`,
            author: { '@type': 'Organization', name: 'BuyIQ', url: 'https://buyiq.app' },
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

        {/* ── MAIN CONTENT ── */}
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '44px 24px 60px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.25)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: '#f5a623', fontWeight: 600, marginBottom: 14, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
              ⚔️ BuyIQ Head-to-Head Comparison
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 10, color: t.text }}>
              {a.name} vs {b.name}<br />
              <span style={{ color: t.muted, fontSize: '0.6em', fontWeight: 400 }}>Which Apple earbuds should you buy?</span>
            </h1>
            <p style={{ fontSize: 14, color: t.muted }}>Based on {a.reviews} + {b.reviews} verified Amazon reviews</p>
          </div>

          {/* Hero cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 16, alignItems: 'center', marginBottom: 32 }}>

            {/* Product A */}
            <div style={{ background: a.winner ? (themeId === 'light' ? 'rgba(245,166,35,0.06)' : 'rgba(245,166,35,0.07)') : t.surface, border: a.winner ? '2px solid rgba(245,166,35,0.4)' : `1px solid ${t.border}`, borderRadius: 18, padding: 28, textAlign: 'center' as const, boxShadow: t.cardShadow }}>
              {a.winner
                ? <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: 6, padding: '3px 10px', fontSize: 11, color: '#f5a623', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 12 }}>🏆 BuyIQ Pick</div>
                : <div style={{ height: 26 }} />
              }
              <div style={{ width: 100, height: 100, margin: '0 auto 14px', borderRadius: 16, overflow: 'hidden', background: t.inputBg, border: `1px solid ${t.border}` }}>
                <img src={a.image} alt={a.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 6, color: t.text }}>{a.name}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 38, fontWeight: 700, color: '#f5a623', lineHeight: 1 }}>{a.score}</div>
              <div style={{ fontSize: 11, color: t.muted, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 8 }}>BuyIQ Score</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: t.text, marginBottom: 4 }}>{a.price}</div>
              <div style={{ color: '#f5a623', fontSize: 13, marginBottom: 4 }}>{'★'.repeat(Math.floor(a.rating))}½</div>
              <div style={{ fontSize: 12, color: t.muted, marginBottom: 18 }}>{a.reviews} reviews</div>
              <a href={a.url} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, padding: '11px 14px', borderRadius: 9, boxShadow: '0 4px 16px rgba(245,124,0,0.3)' }}>
                Buy on Amazon 🛒
              </a>
            </div>

            {/* VS */}
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: t.muted, textAlign: 'center' as const, padding: '0 8px' }}>VS</div>

            {/* Product B */}
            <div style={{ background: b.winner ? (themeId === 'light' ? 'rgba(245,166,35,0.06)' : 'rgba(245,166,35,0.07)') : t.surface, border: b.winner ? '2px solid rgba(245,166,35,0.4)' : `1px solid ${t.border}`, borderRadius: 18, padding: 28, textAlign: 'center' as const, boxShadow: t.cardShadow }}>
              {b.winner
                ? <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: 6, padding: '3px 10px', fontSize: 11, color: '#f5a623', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 12 }}>🏆 BuyIQ Pick</div>
                : <div style={{ height: 26 }} />
              }
              <div style={{ width: 100, height: 100, margin: '0 auto 14px', borderRadius: 16, overflow: 'hidden', background: t.inputBg, border: `1px solid ${t.border}` }}>
                <img src={b.image} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, marginBottom: 6, color: t.text }}>{b.name}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 38, fontWeight: 700, color: '#a78bfa', lineHeight: 1 }}>{b.score}</div>
              <div style={{ fontSize: 11, color: t.muted, textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 8 }}>BuyIQ Score</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: t.text, marginBottom: 4 }}>{b.price}</div>
              <div style={{ color: '#f5a623', fontSize: 13, marginBottom: 4 }}>{'★'.repeat(Math.floor(b.rating))}½</div>
              <div style={{ fontSize: 12, color: t.muted, marginBottom: 18 }}>{b.reviews} reviews</div>
              <a href={b.url} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, padding: '11px 14px', borderRadius: 9, boxShadow: '0 4px 16px rgba(124,58,237,0.3)' }}>
                Buy on Amazon 🛒
              </a>
            </div>
          </div>

          {/* Verdict */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '20px 24px', marginBottom: 40, background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.18)', borderRadius: 14 }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>🧠</div>
            <div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#f5a623', marginBottom: 6 }}>
                BuyIQ Verdict — {a.winner ? a.name : b.name} wins overall
              </div>
              <p style={{ fontSize: 14, color: t.muted, lineHeight: 1.7 }}>{verdict}</p>
            </div>
          </div>

          {/* Comparison sections */}
          {sections.map((section) => (
            <div key={section.title} style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: t.muted }}>
                  {section.title}
                </span>
                <div style={{ flex: 1, height: 1, background: t.subtle }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: t.headerBg, border: `1px solid ${t.border}`, borderRadius: 10, marginBottom: 6, overflow: 'hidden' }}>
                <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 700, color: t.muted, textTransform: 'uppercase' as const }}>Category</div>
                <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 700, color: '#f5a623', textTransform: 'uppercase' as const, borderLeft: `1px solid ${t.subtle}` }}>{a.name}</div>
                <div style={{ padding: '10px 16px', fontSize: 12, fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase' as const, borderLeft: `1px solid ${t.subtle}` }}>{b.name}</div>
              </div>
              {section.rows.map((row) => (
                <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: t.rowBg, border: `1px solid ${t.border}`, borderRadius: 10, marginBottom: 5, overflow: 'hidden' }}>
                  <div style={{ padding: '12px 16px', fontSize: 13, color: t.muted }}>{row.label}</div>
                  <div style={{ padding: '12px 16px', fontSize: 13, borderLeft: `1px solid ${t.subtle}`, color: row.win === 'a' ? t.text : t.muted, fontWeight: row.win === 'a' ? 600 : 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {row.a}
                    {row.win === 'a' && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, background: 'rgba(245,166,35,0.15)', color: '#f5a623', flexShrink: 0 }}>WIN</span>}
                  </div>
                  <div style={{ padding: '12px 16px', fontSize: 13, borderLeft: `1px solid ${t.subtle}`, color: row.win === 'b' ? t.text : t.muted, fontWeight: row.win === 'b' ? 600 : 400, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {row.b}
                    {row.win === 'b' && <span style={{ fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4, background: 'rgba(167,139,250,0.15)', color: '#a78bfa', flexShrink: 0 }}>WIN</span>}
                  </div>
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: t.sectionBg, border: `1px solid ${t.subtle}`, borderRadius: 10, padding: '14px 16px', marginTop: 4 }}>
                <div style={{ fontSize: 12, color: t.muted, display: 'flex', alignItems: 'center' }}>Section Score</div>
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: t.subtle, borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${section.scoreA}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #f5a623, #f57c00)' }} />
                    </div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#f5a623', minWidth: 28 }}>{section.scoreA}</span>
                  </div>
                </div>
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 6, background: t.subtle, borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${section.scoreB}%`, height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }} />
                    </div>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#a78bfa', minWidth: 28 }}>{section.scoreB}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Quick pick boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
            <div style={{ background: t.surface, border: '1px solid rgba(245,166,35,0.25)', borderRadius: 14, padding: 22, boxShadow: t.cardShadow }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#f5a623', marginBottom: 14 }}>
                🏆 Choose {a.name} if…
              </div>
              {a.buyIf.map(item => (
                <div key={item} style={{ fontSize: 13.5, color: t.muted, padding: '6px 0', borderBottom: `1px solid ${t.subtle}`, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#f5a623', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
              <a href={a.url} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 18, background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, padding: 12, borderRadius: 9, boxShadow: '0 4px 16px rgba(245,124,0,0.3)' }}>
                Buy {a.name} — {a.price} 🛒
              </a>
            </div>
            <div style={{ background: t.surface, border: '1px solid rgba(167,139,250,0.25)', borderRadius: 14, padding: 22, boxShadow: t.cardShadow }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#a78bfa', marginBottom: 14 }}>
                💜 Choose {b.name} if…
              </div>
              {b.buyIf.map(item => (
                <div key={item} style={{ fontSize: 13.5, color: t.muted, padding: '6px 0', borderBottom: `1px solid ${t.subtle}`, display: 'flex', gap: 8 }}>
                  <span style={{ color: '#a78bfa', flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
              <a href={b.url} target="_blank" rel="nofollow noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 18, background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, padding: 12, borderRadius: 9, boxShadow: '0 4px 16px rgba(124,58,237,0.3)' }}>
                Buy {b.name} — {b.price} 🛒
              </a>
            </div>
          </div>

          {/* Related */}
          <div style={{ marginTop: 48, paddingTop: 36, borderTop: `1px solid ${t.subtle}` }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 16, color: t.text }}>
              Read Full Reviews
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <Link href="/product/airpods3" style={{ padding: '8px 16px', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, fontSize: 14, color: t.muted, textDecoration: 'none' }}>
                🎧 AirPods Pro 3 Full Review
              </Link>
              <Link href="/product/airpods4" style={{ padding: '8px 16px', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, fontSize: 14, color: t.muted, textDecoration: 'none' }}>
                🎧 AirPods 4 Full Review
              </Link>
            </div>
          </div>

        </div>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `1px solid ${t.subtle}`, padding: '20px 32px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, color: t.muted }}>© 2026 BuyIQ.app — Smart shopping, powered by data.</div>
              <div style={{ fontSize: 11, color: t.muted, marginTop: 4, opacity: 0.8 }}>As an Amazon Associate I earn from qualifying purchases.</div>
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
              {[['About', '/about'], ['Privacy', '/privacy'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={l} href={h} style={{ fontSize: 13, color: t.muted, textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

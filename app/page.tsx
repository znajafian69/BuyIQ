'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// ══════════════════════════════════════════════════════════════════
// ✏️  ADD YOUR PRODUCTS HERE
//     Set featured: true on whichever you want shown today
//     Add more products by copying any block below
// ══════════════════════════════════════════════════════════════════
const PRODUCTS = [
  {
    featured:    true,
    slug:        'airpods3',
    reviewPage:  '/product/airpods3',
    image:       'https://m.media-amazon.com/images/I/61solmQSSlL._AC_SL1500_.jpg',
    name:        'Apple AirPods Pro 3',
    tagline:     'Live Translation, Heart Rate Sensor, FDA Hearing Aid. Is it worth $199?',
    rating:      4.5,
    reviewCount: '8,004',
    score:       91,
    price:       199.99,
    badge:       "Amazon's Choice",
  },
  {
    featured:    false,
    slug:        'airpods4',
    reviewPage:  '/product/airpods4',
    image:       'https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SL1500_.jpg',
    name:        'Apple AirPods 4 with ANC',
    tagline:     'First-ever ANC on standard AirPods. Is $155 a good deal?',
    rating:      4.6,
    reviewCount: '19,473',
    score:       87,
    price:       154.99,
    badge:       "Amazon's Choice",
  },
  // ✏️ ADD MORE PRODUCTS HERE — copy any block above and change the data
  // {
  //   featured:    false,
  //   slug:        'samsung-tv',
  //   reviewPage:  '/product/samsung-tv',
  //   image:       'https://m.media-amazon.com/images/...',
  //   name:        'Samsung 65" QLED TV',
  //   tagline:     'Best TV under $1000? We analyzed 24,000 reviews.',
  //   rating:      4.7,
  //   reviewCount: '24,500',
  //   score:       93,
  //   price:       899.99,
  //   badge:       "Amazon's Choice",
  // },
]

// ══════════════════════════════════════════════════════════════════
// ✏️  TRENDING SEARCHES
// ══════════════════════════════════════════════════════════════════
const TRENDING = [
  { label: 'Noise cancelling headphones', icon: '🎧', q: 'best noise cancelling headphones' },
  { label: 'Coffee maker',               icon: '☕', q: 'best coffee maker' },
  { label: 'Air fryers',                 icon: '🍟', q: 'best air fryer' },
  { label: 'Gaming laptops',             icon: '💻', q: 'best gaming laptop' },
]

// ── THEMES ────────────────────────────────────────────────────────
const THEMES = [
  {
    id: 'dark', label: '🌙', title: 'Dark',
    bg: `radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%),
         radial-gradient(ellipse 70% 30% at 50% 2%, rgba(255,150,30,0.28) 0%, transparent 42%),
         radial-gradient(ellipse 50% 25% at 15% 20%, rgba(120,45,5,0.30) 0%, transparent 50%),
         linear-gradient(180deg, #080310 0%, #04060f 100%)`,
    bodyBg: '#04060f', surface: 'rgba(8,16,40,0.75)', border: 'rgba(255,255,255,0.09)',
    text: '#ffffff', muted: 'rgba(255,255,255,0.5)', subtle: 'rgba(255,255,255,0.06)',
    navBg: 'transparent', inputBg: 'rgba(255,255,255,0.04)',
    footerBorder: 'rgba(255,255,255,0.07)', footerText: 'rgba(255,255,255,0.3)',
  },
  {
    id: 'light', label: '☀️', title: 'Light',
    bg: '#f5f5f7', bodyBg: '#f5f5f7', surface: '#ffffff', border: 'rgba(0,0,0,0.08)',
    text: '#1a1a1a', muted: 'rgba(0,0,0,0.5)', subtle: 'rgba(0,0,0,0.06)',
    navBg: 'transparent', inputBg: 'rgba(0,0,0,0.03)',
    footerBorder: 'rgba(0,0,0,0.07)', footerText: 'rgba(0,0,0,0.4)',
  },
  {
    id: 'navy', label: '🌊', title: 'Navy',
    bg: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)',
    bodyBg: '#0d1f3c', surface: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)',
    text: '#e8f0fe', muted: 'rgba(232,240,254,0.55)', subtle: 'rgba(255,255,255,0.07)',
    navBg: 'transparent', inputBg: 'rgba(255,255,255,0.04)',
    footerBorder: 'rgba(255,255,255,0.07)', footerText: 'rgba(232,240,254,0.3)',
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
export default function HomePage() {
  const [query, setQuery]     = useState('')
  const [themeId, setThemeId] = useState('dark')
  const router = useRouter()

  const t        = THEMES.find(x => x.id === themeId) || THEMES[0]
  const featured = PRODUCTS.find(p => p.featured) || PRODUCTS[0]
  const others   = PRODUCTS.filter(p => !p.featured)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: t.bg, transition: 'background 0.3s' }} />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', color: t.text, background: t.bodyBg, transition: 'all 0.3s', fontFamily: 'Open Sans, sans-serif' }}>

        {/* ── NAV ── */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', background: t.navBg }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 10 }}>
            <img src="/images/logo.svg" alt="BuyIQ" style={{ width: 52, height: 52, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: t.text, letterSpacing: '0.03em' }}>
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

        {/* ── HERO ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 24px 80px', textAlign: 'center' }}>

          <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 700, color: t.text, marginBottom: 12, lineHeight: 1.1 }}>
            What are you looking to buy?
          </h1>
          <p style={{ fontSize: 16, color: t.muted, marginBottom: 36 }}>
            Smart reviews powered by real Amazon data & price history
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: 540 }}>
            <div style={{ display: 'flex', alignItems: 'center', background: themeId === 'light' ? '#fff' : 'rgba(5,15,35,0.88)', border: `1.5px solid ${themeId === 'light' ? 'rgba(0,150,200,0.4)' : 'rgba(0,210,255,0.6)'}`, borderRadius: 12, padding: '4px 4px 4px 18px', boxShadow: '0 0 35px rgba(0,200,255,0.12)' }}>
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Best headphones under $300…" autoFocus style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontFamily: 'Open Sans, sans-serif', fontSize: 16, color: t.text, padding: '13px 10px 13px 0' }} />
              <button type="submit" style={{ background: 'linear-gradient(135deg, #00c8e0, #0096b0)', border: 'none', cursor: 'pointer', width: 50, height: 50, borderRadius: 9, flexShrink: 0, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(0,180,220,0.4)' }}>
                🔍
              </button>
            </div>
          </form>

          {/* Trending */}
          <p style={{ marginTop: 24, marginBottom: 12, fontSize: 14, color: t.muted }}>Trending searches:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 60 }}>
            {TRENDING.map(tr => (
              <button key={tr.q} onClick={() => router.push(`/search?q=${encodeURIComponent(tr.q)}`)} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 15px', background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 8, fontSize: 13.5, color: t.muted, cursor: 'pointer', fontFamily: 'Open Sans, sans-serif', transition: 'all 0.2s' }}>
                <span>{tr.icon}</span>{tr.label}
              </button>
            ))}
          </div>

          {/* ── FEATURED REVIEW ── */}
          <div style={{ width: '100%', maxWidth: 680 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#f5a623', marginBottom: 16 }}>
              ⚡ Today&apos;s Featured Review
            </p>

            <Link href={featured.reviewPage} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, background: t.surface, border: '1px solid rgba(245,166,35,0.25)', borderRadius: 18, padding: '22px 28px', cursor: 'pointer', textAlign: 'left' as const }}>
                <div style={{ width: 80, height: 80, flexShrink: 0, borderRadius: 14, overflow: 'hidden', background: t.inputBg, border: `1px solid ${t.border}` }}>
                  <img src={featured.image} alt={featured.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ flex: 1 }}>
                  {featured.badge && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(0,120,200,0.15)', border: '1px solid rgba(0,120,200,0.25)', borderRadius: 5, padding: '2px 8px', fontSize: 11, color: '#5b9bd5', fontWeight: 700, marginBottom: 6 }}>
                      ✦ {featured.badge}
                    </div>
                  )}
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 4 }}>{featured.name}</div>
                  <div style={{ fontSize: 13, color: t.muted, marginBottom: 10 }}>{featured.tagline}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <span style={{ color: '#f5a623', fontSize: 13 }}>{'★'.repeat(Math.floor(featured.rating))}½</span>
                    <span style={{ fontSize: 12, color: t.muted }}>{featured.reviewCount} reviews</span>
                    <span style={{ background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)', color: '#f5a623', fontSize: 12, fontWeight: 700, padding: '2px 10px', borderRadius: 6 }}>
                      BuyIQ Score: {featured.score}
                    </span>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: t.text }}>${featured.price}</span>
                  </div>
                </div>
                <div style={{ color: t.muted, fontSize: 22, flexShrink: 0 }}>→</div>
              </div>
            </Link>

            {/* Other reviews strip */}
            {others.length > 0 && (
              <div style={{ marginTop: 16 }}>
                <p style={{ fontSize: 12, color: t.muted, marginBottom: 10, textAlign: 'left' as const }}>Also reviewed:</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {others.map(r => (
                    <Link key={r.slug} href={r.reviewPage} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, padding: '12px 16px', flex: 1, minWidth: 200 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', background: t.inputBg, border: `1px solid ${t.border}`, flexShrink: 0 }}>
                        <img src={r.image} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: t.text }}>{r.name}</div>
                        <div style={{ fontSize: 12, color: t.muted }}>${r.price} · Score {r.score}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Comparison link */}
            <div style={{ marginTop: 16 }}>
              <Link href="/compare/airpods-pro-3-vs-airpods-4" style={{ display: 'flex', alignItems: 'center', gap: 8, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 12, padding: '14px 20px', textDecoration: 'none', color: t.muted, fontSize: 14 }}>
                ⚔️ <span>Compare AirPods Pro 3 vs AirPods 4</span>
                <span style={{ marginLeft: 'auto' }}>→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* ── FOOTER ── */}
        <footer style={{ padding: '24px 40px', borderTop: `1px solid ${t.footerBorder}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, color: t.footerText }}>© 2026 BuyIQ.app — Smart shopping, powered by data.</div>
              <div style={{ fontSize: 11, color: t.footerText, marginTop: 4, opacity: 0.8 }}>As an Amazon Associate I earn from qualifying purchases.</div>
            </div>
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {[['About', '/about'], ['Privacy', '/privacy'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={l} href={h} style={{ fontSize: 13, color: t.footerText, textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

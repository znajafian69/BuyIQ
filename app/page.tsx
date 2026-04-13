'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const TRENDING = [
  { label: 'Noise cancelling headphones', icon: '🎧', q: 'best noise cancelling headphones' },
  { label: 'Coffee maker', icon: '☕', q: 'best coffee maker' },
  { label: 'Air fryers', icon: '🍟', q: 'best air fryer' },
  { label: 'Gaming laptops', icon: '💻', q: 'best gaming laptop' },
]

export default function HomePage() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      {/* Fixed space background layers */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%),
          radial-gradient(ellipse 70% 30% at 50% 2%, rgba(255,150,30,0.28) 0%, transparent 42%),
          radial-gradient(ellipse 50% 25% at 15% 20%, rgba(120,45,5,0.30) 0%, transparent 50%),
          radial-gradient(ellipse 45% 35% at 85% 12%, rgba(60,10,80,0.35) 0%, transparent 50%),
          linear-gradient(180deg, #080310 0%, #04060f 100%)
        `
      }} />

    

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* ── NAV ── */}
        <nav style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 28, filter: 'drop-shadow(0 0 10px rgba(255,155,30,0.9))' }}>🛒</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: '0.03em' }}>
              Buy<span style={{ color: '#f5a623' }}>IQ</span>
            </span>
          </div>
          <Link href="/signin" style={{
            fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)',
            textDecoration: 'none', padding: '7px 18px',
            border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8
          }}>
            Sign In
          </Link>
        </nav>

        {/* ── HERO ── */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '20px 24px 80px', textAlign: 'center'
        }}>

          <h1 style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700,
            color: '#fff', marginBottom: 36,
            textShadow: '0 2px 30px rgba(0,0,0,0.6)'
          }}>
            What are you looking to buy?
          </h1>

          {/* Search box */}
          <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: 520 }}>
            <div style={{
              display: 'flex', alignItems: 'center',
              background: 'rgba(5,15,35,0.88)',
              border: '1.5px solid rgba(0,210,255,0.6)',
              borderRadius: 12, padding: '4px 4px 4px 18px',
              boxShadow: '0 0 35px rgba(0,200,255,0.18)',
            }}>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Best headphones under $300…"
                autoFocus
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  fontFamily: 'Open Sans, sans-serif', fontSize: 16,
                  color: 'rgba(255,255,255,0.92)', padding: '13px 10px 13px 0'
                }}
              />
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #00c8e0, #0096b0)',
                border: 'none', cursor: 'pointer',
                width: 50, height: 50, borderRadius: 9, flexShrink: 0,
                fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(0,180,220,0.4)'
              }}>
                🔍
              </button>
            </div>
          </form>

          {/* Trending */}
          <p style={{ marginTop: 24, marginBottom: 12, fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
            Trending searches:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {TRENDING.map(t => (
              <button
                key={t.q}
                onClick={() => router.push(`/search?q=${encodeURIComponent(t.q)}`)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '8px 15px',
                  background: 'rgba(255,255,255,0.055)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
                  fontSize: 13.5, color: 'rgba(255,255,255,0.78)',
                  cursor: 'pointer', fontFamily: 'Open Sans, sans-serif'
                }}
              >
                <span>{t.icon}</span>{t.label}
              </button>
            ))}
          </div>

          {/* Today's featured product */}
          <div style={{ marginTop: 60, width: '100%', maxWidth: 680 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f5a623', marginBottom: 16 }}>
              ⚡ Today&apos;s Featured Review
            </p>
            <Link href="/product/airpods3" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 20,
                background: 'rgba(8,16,40,0.75)',
                border: '1px solid rgba(245,166,35,0.25)',
                borderRadius: 18, padding: '22px 28px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.2s'
              }}>
                <div style={{ fontSize: 56, flexShrink: 0 }}>🎧</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                    Apple AirPods Pro (3nd Gen) — Full Review
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
                    We tested them for 30 days. Here&apos;s everything you need to know before buying.
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: '#f5a623', fontSize: 13 }}>★★★★★</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>91,200 reviews</span>
                    <span style={{
                      background: 'rgba(245,166,35,0.15)', border: '1px solid rgba(245,166,35,0.3)',
                      color: '#f5a623', fontSize: 12, fontWeight: 700,
                      padding: '2px 10px', borderRadius: 6
                    }}>BuyIQ Score: 89</span>
                  </div>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 22 }}>→</div>
              </div>
            </Link>
          </div>

        </div>

        {/* ── FOOTER ── */}
        <footer style={{
          position: 'relative', zIndex: 1,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          padding: '24px 40px', fontSize: 13, color: 'rgba(255,255,255,0.3)',
          borderTop: '1px solid rgba(255,255,255,0.07)'
        }}>
          <span>© 2025 BuyIQ.app — Smart shopping, powered by data.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['About', 'Privacy', 'Contact'].map(l => (
              <Link key={l} href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </footer>

      </div>
    </>
  )
}

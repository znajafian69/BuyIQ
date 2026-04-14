'use client'

import Link from 'next/link'
import { useState } from 'react'

const THEMES = [
  { id: 'dark', label: '🌙', title: 'Dark', bg: `radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%), linear-gradient(180deg, #080310 0%, #04060f 100%)`, bodyBg: '#04060f', surface: 'rgba(8,16,40,0.85)', border: 'rgba(255,255,255,0.09)', text: '#ffffff', muted: 'rgba(255,255,255,0.5)', subtle: 'rgba(255,255,255,0.06)', navBg: 'rgba(4,6,15,0.85)', inputBg: 'rgba(255,255,255,0.04)' },
  { id: 'light', label: '☀️', title: 'Light', bg: '#f5f5f7', bodyBg: '#f5f5f7', surface: '#ffffff', border: 'rgba(0,0,0,0.08)', text: '#1a1a1a', muted: 'rgba(0,0,0,0.5)', subtle: 'rgba(0,0,0,0.06)', navBg: 'rgba(255,255,255,0.92)', inputBg: 'rgba(0,0,0,0.03)' },
  { id: 'navy', label: '🌊', title: 'Navy', bg: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)', bodyBg: '#0d1f3c', surface: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)', text: '#e8f0fe', muted: 'rgba(232,240,254,0.55)', subtle: 'rgba(255,255,255,0.07)', navBg: 'rgba(10,22,40,0.9)', inputBg: 'rgba(255,255,255,0.04)' },
  { id: 'black', label: '🖤', title: 'Black', bg: '#000000', bodyBg: '#000000', surface: '#111111', border: 'rgba(255,255,255,0.08)', text: '#ffffff', muted: 'rgba(255,255,255,0.45)', subtle: 'rgba(255,255,255,0.06)', navBg: 'rgba(0,0,0,0.95)', inputBg: 'rgba(255,255,255,0.04)' },
]

export default function AboutPage() {
  const [themeId, setThemeId] = useState('dark')
  const t = THEMES.find(x => x.id === themeId) || THEMES[0]

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: t.bg, transition: 'background 0.3s' }} />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', fontFamily: 'Open Sans, sans-serif', color: t.text, background: t.bodyBg, transition: 'all 0.3s' }}>

        {/* NAV */}
        <nav style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', background: t.navBg, backdropFilter: 'blur(20px)', borderBottom: `1px solid ${t.border}` }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: 10 }}>
            <img src="/images/logo.svg" alt="BuyIQ" style={{ width: 52, height: 52, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: t.text }}>Buy<span style={{ color: '#f5a623' }}>IQ</span></span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: t.inputBg, border: `1px solid ${t.border}`, borderRadius: 10, padding: '5px 8px' }}>
            <span style={{ fontSize: 12, color: t.muted, marginRight: 4 }}>Theme:</span>
            {THEMES.map(theme => (
              <button key={theme.id} onClick={() => setThemeId(theme.id)} title={theme.title} style={{ width: 30, height: 30, borderRadius: 7, border: themeId === theme.id ? '2px solid #f5a623' : `1px solid ${t.border}`, background: themeId === theme.id ? 'rgba(245,166,35,0.15)' : 'transparent', cursor: 'pointer', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {theme.label}
              </button>
            ))}
          </div>
        </nav>

        {/* CONTENT */}
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 100px' }}>

          <div style={{ marginBottom: 40 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 6, padding: '4px 12px', fontSize: 12, color: '#f5a623', fontWeight: 700, marginBottom: 16 }}>
              🧠 About BuyIQ
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: t.text, marginBottom: 16, lineHeight: 1.1 }}>
              Smart shopping,<br />powered by real data
            </h1>
            <p style={{ fontSize: 16, color: t.muted, lineHeight: 1.8 }}>
              BuyIQ helps you make smarter buying decisions by combining Amazon review data, real price history from Keepa, and honest analysis — so you never overpay or buy the wrong thing.
            </p>
          </div>

          {/* Mission */}
          <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: t.text, marginBottom: 12 }}>🎯 Our Mission</h2>
            <p style={{ fontSize: 15, color: t.muted, lineHeight: 1.8 }}>
              Online shopping is overwhelming. Thousands of products, fake reviews, inflated prices, and confusing specs. BuyIQ cuts through the noise. We analyze real Amazon data, track price history over time, and give every product a clear BuyIQ Score — so you know exactly what you&apos;re buying and whether now is the right time to buy it.
            </p>
          </div>

          {/* How it works */}
          <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: t.text, marginBottom: 20 }}>⚙️ How BuyIQ Works</h2>
            {[
              { icon: '📊', title: 'Real Amazon Data', desc: 'We pull verified review counts, ratings, and Amazon badges — no fake or sponsored reviews.' },
              { icon: '📈', title: 'Price History Tracking', desc: 'Using Keepa data, we show you the real price history so you know if today is a good deal or not.' },
              { icon: '🧠', title: 'BuyIQ Score', desc: 'Every product gets a score from 0 to 100 based on performance, value, reviews, and price fairness.' },
              { icon: '💰', title: 'Affiliate Transparency', desc: 'We earn a small commission if you buy through our links — at no extra cost to you. This is how we keep the site free.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: `1px solid ${t.subtle}` }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: t.muted, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate disclosure */}
          <div style={{ background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 16, padding: 24, marginBottom: 20 }}>
            <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#f5a623', marginBottom: 10 }}>📢 Affiliate Disclosure</h2>
            <p style={{ fontSize: 14, color: t.muted, lineHeight: 1.8 }}>
              BuyIQ is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click our &ldquo;Buy on Amazon&rdquo; links and make a purchase, we may earn a commission at no additional cost to you. Our reviews and scores are always independent and unbiased — we are never paid by brands to review their products.
            </p>
          </div>

          {/* Contact CTA */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, borderRadius: 10 }}>
              Contact Us →
            </Link>
            <Link href="/" style={{ padding: '12px 24px', background: t.surface, border: `1px solid ${t.border}`, color: t.muted, textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, borderRadius: 10 }}>
              ← Back to Home
            </Link>
          </div>

        </div>

        {/* FOOTER */}
        <footer style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '24px 40px', fontSize: 13, color: t.muted, borderTop: `1px solid ${t.subtle}` }}>
          <span>© 2026 BuyIQ.app — Smart shopping, powered by data.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {[['About', '/about'], ['Privacy', '/privacy'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={l} href={h} style={{ color: t.muted, textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </footer>

      </div>
    </>
  )
}

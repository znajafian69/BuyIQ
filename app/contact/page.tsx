'use client'

import Link from 'next/link'
import { useState } from 'react'

const THEMES = [
  { id: 'dark', label: '🌙', title: 'Dark', bg: `radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%), linear-gradient(180deg, #080310 0%, #04060f 100%)`, bodyBg: '#04060f', surface: 'rgba(8,16,40,0.85)', border: 'rgba(255,255,255,0.09)', text: '#ffffff', muted: 'rgba(255,255,255,0.5)', subtle: 'rgba(255,255,255,0.06)', navBg: 'rgba(4,6,15,0.85)', inputBg: 'rgba(255,255,255,0.04)' },
  { id: 'light', label: '☀️', title: 'Light', bg: '#f5f5f7', bodyBg: '#f5f5f7', surface: '#ffffff', border: 'rgba(0,0,0,0.08)', text: '#1a1a1a', muted: 'rgba(0,0,0,0.5)', subtle: 'rgba(0,0,0,0.06)', navBg: 'rgba(255,255,255,0.92)', inputBg: 'rgba(0,0,0,0.03)' },
  { id: 'navy', label: '🌊', title: 'Navy', bg: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)', bodyBg: '#0d1f3c', surface: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)', text: '#e8f0fe', muted: 'rgba(232,240,254,0.55)', subtle: 'rgba(255,255,255,0.07)', navBg: 'rgba(10,22,40,0.9)', inputBg: 'rgba(255,255,255,0.04)' },
  { id: 'black', label: '🖤', title: 'Black', bg: '#000000', bodyBg: '#000000', surface: '#111111', border: 'rgba(255,255,255,0.08)', text: '#ffffff', muted: 'rgba(255,255,255,0.45)', subtle: 'rgba(255,255,255,0.06)', navBg: 'rgba(0,0,0,0.95)', inputBg: 'rgba(255,255,255,0.04)' },
]

export default function ContactPage() {
  const [themeId, setThemeId] = useState('dark')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('General question')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const t = THEMES.find(x => x.id === themeId) || THEMES[0]

  const inputStyle = {
    width: '100%', background: t.inputBg, border: `1px solid ${t.border}`,
    borderRadius: 8, padding: '12px 14px', fontSize: 14, color: t.text,
    fontFamily: 'Open Sans, sans-serif', outline: 'none', boxSizing: 'border-box' as const,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Opens email client with pre-filled message
    const body = `Name: ${name}\n\nMessage:\n${message}`
    const mailto = `mailto:contact@buyiq.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailto, '_blank')
    setSent(true)
  }

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
              ✉️ Contact Us
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: t.text, marginBottom: 12, lineHeight: 1.1 }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: 16, color: t.muted, lineHeight: 1.8 }}>
              Have a question, suggestion, or want to request a product review? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Quick contact options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 32 }}>
            {[
              { icon: '📝', title: 'Request a Review', desc: 'Want us to review a specific product?' },
              { icon: '🐛', title: 'Report an Issue', desc: 'Found a bug or incorrect price?' },
              { icon: '💡', title: 'General Question', desc: 'Anything else on your mind?' },
            ].map(item => (
              <div key={item.title} style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 12, padding: 16, textAlign: 'center' as const }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: t.text, marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: t.muted, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          {sent ? (
            <div style={{ background: 'rgba(46,204,154,0.07)', border: '1px solid rgba(46,204,154,0.25)', borderRadius: 16, padding: 36, textAlign: 'center' as const }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: '#2ecc9a', marginBottom: 10 }}>Message Sent!</h2>
              <p style={{ fontSize: 15, color: t.muted, marginBottom: 20 }}>Your email client should have opened. We&apos;ll get back to you as soon as possible.</p>
              <button onClick={() => setSent(false)} style={{ padding: '10px 24px', background: t.surface, border: `1px solid ${t.border}`, borderRadius: 8, fontSize: 14, color: t.muted, cursor: 'pointer', fontFamily: 'Open Sans, sans-serif' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 16, padding: 28 }}>
                <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: t.text, marginBottom: 24 }}>Send a Message</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, color: t.muted, display: 'block', marginBottom: 6 }}>Your Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, color: t.muted, display: 'block', marginBottom: 6 }}>Email Address</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@email.com" required style={inputStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 13, color: t.muted, display: 'block', marginBottom: 6 }}>Subject</label>
                  <select value={subject} onChange={e => setSubject(e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="General question">General question</option>
                    <option value="Product review request">Product review request</option>
                    <option value="Bug report">Bug report</option>
                    <option value="Incorrect price or data">Incorrect price or data</option>
                    <option value="Partnership or collaboration">Partnership or collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 13, color: t.muted, display: 'block', marginBottom: 6 }}>Message</label>
                  <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us what's on your mind..." required rows={5} style={{ ...inputStyle, resize: 'vertical' as const }} />
                </div>

                <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', background: 'linear-gradient(135deg, #f57c00, #e64a19)', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, padding: 14, borderRadius: 10, boxShadow: '0 4px 20px rgba(245,124,0,0.35)' }}>
                  Send Message ✉️
                </button>

                <p style={{ fontSize: 12, color: t.muted, textAlign: 'center' as const, marginTop: 12 }}>
                  This will open your email client. Or email us directly at <strong style={{ color: t.text }}>contact@buyiq.app</strong>
                </p>
              </div>
            </form>
          )}

          <div style={{ marginTop: 24 }}>
            <Link href="/" style={{ padding: '12px 24px', background: t.surface, border: `1px solid ${t.border}`, color: t.muted, textDecoration: 'none', fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, borderRadius: 10, display: 'inline-block' }}>
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

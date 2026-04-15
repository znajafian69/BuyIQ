'use client'

import Link from 'next/link'
import { useState } from 'react'

const THEMES = [
  { id: 'dark', label: '🌙', title: 'Dark', bg: `radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%), linear-gradient(180deg, #080310 0%, #04060f 100%)`, bodyBg: '#04060f', surface: 'rgba(8,16,40,0.85)', border: 'rgba(255,255,255,0.09)', text: '#ffffff', muted: 'rgba(255,255,255,0.5)', subtle: 'rgba(255,255,255,0.06)', navBg: 'rgba(4,6,15,0.85)', inputBg: 'rgba(255,255,255,0.04)' },
  { id: 'light', label: '☀️', title: 'Light', bg: '#f5f5f7', bodyBg: '#f5f5f7', surface: '#ffffff', border: 'rgba(0,0,0,0.08)', text: '#1a1a1a', muted: 'rgba(0,0,0,0.5)', subtle: 'rgba(0,0,0,0.06)', navBg: 'rgba(255,255,255,0.92)', inputBg: 'rgba(0,0,0,0.03)' },
  { id: 'navy', label: '🌊', title: 'Navy', bg: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)', bodyBg: '#0d1f3c', surface: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.1)', text: '#e8f0fe', muted: 'rgba(232,240,254,0.55)', subtle: 'rgba(255,255,255,0.07)', navBg: 'rgba(10,22,40,0.9)', inputBg: 'rgba(255,255,255,0.04)' },
  {
  id: 'black', label: '🌸', title: 'Pink',
  bg: 'linear-gradient(180deg, #fff0f5 0%, #ffe4ef 100%)',
  bodyBg: '#fff0f5', surface: '#ffffff', border: 'rgba(255,100,150,0.15)',
  text: '#3d0020', muted: 'rgba(61,0,32,0.5)', subtle: 'rgba(255,100,150,0.1)',
  navBg: 'rgba(255,240,245,0.92)', inputBg: 'rgba(255,100,150,0.05)',
  footerBorder: 'rgba(255,100,150,0.15)', footerText: 'rgba(61,0,32,0.4)',
  },
]

const SECTIONS = [
  {
    title: '1. Information We Collect',
    content: 'BuyIQ does not require you to create an account or provide personal information to use the site. We may collect anonymous usage data such as pages visited, search queries entered, and general location (country/region) through standard web analytics tools. We do not collect your name, email, or payment information.',
  },
  {
    title: '2. Cookies',
    content: 'We use cookies to improve your experience on BuyIQ, such as remembering your theme preference. We may also use third-party analytics cookies (such as Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings at any time.',
  },
  {
    title: '3. Amazon Affiliate Links',
    content: 'BuyIQ participates in the Amazon Associates affiliate program. When you click a "Buy on Amazon" link, you are directed to Amazon.com. Amazon may set their own cookies and collect data according to their own privacy policy. We earn a small commission on qualifying purchases at no extra cost to you.',
  },
  {
    title: '4. Third-Party Services',
    content: 'We may use third-party services including Google Analytics for traffic analysis, and Keepa for price history data. These services have their own privacy policies and data practices. We do not sell or share your personal data with any third parties for marketing purposes.',
  },
  {
    title: '5. Data Security',
    content: 'Since BuyIQ does not collect personal information, there is minimal data security risk to users. Our website uses HTTPS encryption for all connections. We take reasonable measures to protect any technical data we do collect.',
  },
  {
    title: '6. Children\'s Privacy',
    content: 'BuyIQ is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.',
  },
  {
    title: '7. Changes to This Policy',
    content: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of BuyIQ after changes constitutes your acceptance of the updated policy.',
  },
  {
    title: '8. Contact',
    content: 'If you have any questions about this privacy policy, please contact us through our Contact page.',
  },
]

export default function PrivacyPage() {
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
              🔒 Privacy Policy
            </div>
            <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: t.text, marginBottom: 12, lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 14, color: t.muted }}>Last updated: April 2026</p>
            <p style={{ fontSize: 16, color: t.muted, lineHeight: 1.8, marginTop: 12 }}>
              Your privacy matters to us. BuyIQ is built to help you make smarter buying decisions without compromising your personal data. This policy explains what we collect, why, and how we use it.
            </p>
          </div>

          {/* Sections */}
          <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 16, padding: '8px 28px', marginBottom: 24 }}>
            {SECTIONS.map(({ title, content }) => (
              <div key={title} style={{ padding: '20px 0', borderBottom: `1px solid ${t.subtle}` }}>
                <h2 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: t.text, marginBottom: 10 }}>{title}</h2>
                <p style={{ fontSize: 14, color: t.muted, lineHeight: 1.8, margin: 0 }}>{content}</p>
              </div>
            ))}
          </div>

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
          <div>
          <div>© 2026 BuyIQ.app — Smart shopping, powered by data.</div>
          <div style={{ fontSize: 11, marginTop: 4, opacity: 0.7 }}>
             As an Amazon Associate I earn from qualifying purchases.
          </div>
          </div>
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

'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchContent() {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''

  return (
    <>
      {/* Background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 130% 45% at 50% -5%, rgba(190,90,8,0.55) 0%, transparent 52%),
          radial-gradient(ellipse 70% 30% at 50% 2%, rgba(255,150,30,0.28) 0%, transparent 42%),
          linear-gradient(180deg, #080310 0%, #04060f 100%)
        `
      }} />
      <div style={{
        position: 'fixed', top: '30%', left: 0, right: 0, height: 1, zIndex: 0, pointerEvents: 'none',
        background: 'linear-gradient(90deg, transparent, rgba(0,210,255,0.45) 35%, rgba(0,230,255,0.65) 50%, rgba(0,210,255,0.45) 65%, transparent)',
        boxShadow: '0 0 60px 6px rgba(0,200,255,0.10)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>

        {/* Nav */}
        <nav style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 36px',
          background: 'rgba(4,6,15,0.82)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <span style={{ fontSize: 22, filter: 'drop-shadow(0 0 8px rgba(255,155,30,0.9))' }}>🛒</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '0.03em' }}>
              Buy<span style={{ color: '#f5a623' }}>IQ</span>
            </span>
          </Link>
          <Link href="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>← Back to search</Link>
        </nav>

        {/* Content */}
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>🚧</div>
          <h1 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            Search coming soon!
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
            You searched for: <strong style={{ color: '#fff' }}>&ldquo;{q}&rdquo;</strong>
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 36 }}>
            We&apos;re connecting to Amazon&apos;s API. In the meantime, check out today&apos;s featured review.
          </p>
          <Link href="/product/airpods" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, #f57c00, #e64a19)',
            color: '#fff', textDecoration: 'none',
            fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700,
            padding: '13px 28px', borderRadius: 10,
            boxShadow: '0 4px 18px rgba(245,124,0,0.35)'
          }}>
            See Today&apos;s Featured Product →
          </Link>
        </div>

      </div>
    </>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ color: '#fff', padding: 40 }}>Loading…</div>}>
      <SearchContent />
    </Suspense>
  )
}

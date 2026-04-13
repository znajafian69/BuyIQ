import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'BuyIQ – What are you looking to buy?',
    template: '%s | BuyIQ',
  },
  description:
    'BuyIQ analyzes thousands of Amazon reviews and live deals to find the best 3 products for any search. Shop smarter, not harder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#04060f', color: '#fff', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}

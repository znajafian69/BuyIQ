import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuyIQ — Smart Shopping",
  description: "Find the best products with AI-powered recommendations.",

  // ✅ FIX duplicate issue (VERY IMPORTANT)
  metadataBase: new URL("https://buyiq.app"),
  alternates: {
    canonical: "/",
  },

  // ✅ Google verification
  verification: {
    google: "dig2udVk_eoFJNby1sdYxHhdOTioZfQxTXteaUJ9Ufw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
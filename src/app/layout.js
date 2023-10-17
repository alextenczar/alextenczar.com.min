import './globals.css'
import { Noto_Sans_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Noto_Sans_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Tenczar',
  description: 'Full Stack Developer',
  keywords: ['Alex', 'Alexander', 'Tenczar', 'Alex Tenczar', 'Alexander Tenczar', 'Next.js', 'React', 'JavaScript', 'Developer', 'Full Stack'],
  themeColor: 'white',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: 'image/png' },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: 'image/png' },
      { url: "/favicon-16x16.png", sizes: "16x16", type: 'image/png' },
      { url: "/favicon-32x32.png", sizes: "32x32", type: 'image/png' },
      { url: "/favicon.ico", sizes: "any", type: 'image/x-icon' }
    ],
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
  )
}

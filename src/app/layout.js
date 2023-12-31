import './globals.scss'
import { Noto_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: 'Alex Tenczar',
  description: 'Full Stack Developer',
  keywords: ['Alex', 'Alexander', 'Tenczar', 'Alex Tenczar', 'Alexander Tenczar', 'Next.js', 'React', 'JavaScript', 'Developer', 'Full Stack'],
  themeColor: '#ffffff',
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
      <body className={notoSans.className}>{children}<Analytics /></body>
    </html>
  )
}

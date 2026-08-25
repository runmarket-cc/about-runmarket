import { Analytics } from '@vercel/analytics/next'
import { Noto_Sans_KR } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const notoSansKr = Noto_Sans_KR({ subsets: ['cyrillic', 'vietnamese'], variable: '--font-korean' })

export const metadata: Metadata = {
  title: '런마켓 | 러너를 위한 모든 러닝 정보',
  description: '마라톤 대회 일정, 실시간 러닝 공유, 거리·페이스·경로 기록을 한 곳에서 확인하세요.',
  generator: 'v0.app',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#131921',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`bg-background ${notoSansKr.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

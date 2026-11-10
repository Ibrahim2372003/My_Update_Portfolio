import localFont from 'next/font/local'
import './globals.css'
import MotionProvider from '@/components/motion/MotionProvider'
import { profile } from '@/data/profile'

// Self-hosted (OFL-licensed) fonts: no build-time or runtime request to Google.
const display = localFont({
  src: [
    { path: './fonts/instrument-serif-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
})
const body = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-body',
  display: 'swap',
})
const mono = localFont({
  src: './fonts/jetbrains-mono-latin-wght-normal.woff2',
  weight: '100 800',
  variable: '--font-mono',
  display: 'swap',
})

const title = `${profile.name} | ${profile.role}`
const description =
  'Portfolio of Ibrahim Mohammed, a Junior Full-Stack Developer building tested, accessible web applications with React, Next.js, Node.js, PostgreSQL and AI APIs.'

// No canonical URL, metadataBase or sitemap: they need a confirmed domain.
export const metadata = {
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: `${profile.name} portfolio`,
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    'Junior Full-Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'portfolio',
  ],
  openGraph: { title, description, type: 'website', siteName: `${profile.name} portfolio` },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
}

export const viewport = { themeColor: '#111111', colorScheme: 'light' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}

import { Metadata } from 'next'

const metadataBase = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://reform-uk-erdington.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: 'Reform UK Erdington',
  description: 'Reform UK Erdington Branch - Fighting for a better Erdington',
  openGraph: {
    title: 'Reform UK Erdington',
    description: 'Reform UK Erdington Branch - Fighting for a better Erdington',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reform UK Erdington',
    description: 'Reform UK Erdington Branch - Fighting for a better Erdington',
    images: ['/images/hero.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

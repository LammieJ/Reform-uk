import { Metadata } from 'next'

const metadataBase = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: 'Reform UK Erdington',
  description: 'Reform UK Erdington Branch - Fighting for a better Erdington',
  openGraph: {
    title: 'Reform UK Erdington',
    description: 'Reform UK Erdington Branch - Fighting for a better Erdington',
    images: ['/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reform UK Erdington',
    description: 'Reform UK Erdington Branch - Fighting for a better Erdington',
    images: ['/images/hero.jpg'],
  },
}

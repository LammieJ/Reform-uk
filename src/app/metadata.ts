import { Metadata } from 'next'

const metadataBase = process.env.NODE_ENV === 'production' 
  ? 'https://reform-uk-erdington.org.uk'
  : 'http://localhost:3001'

const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    template: '%s | Reform UK Erdington Branch',
    default: 'Reform UK Erdington Branch | Your Local Voice for Change in Erdington, Castle Vale, Pype Hayes, Stockland Green & Kingstanding',
  },
  description: 'Reform UK Erdington Branch - Working to create positive change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding through lower taxes, better healthcare, controlled immigration, safer streets, and economic growth.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: metadataBase,
    siteName: 'Reform UK Erdington Branch',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Reform UK Erdington Branch' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ReformUKErdington',
    images: ['/images/hero.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  keywords: ['Reform UK', 'Erdington', 'Castle Vale', 'Pype Hayes', 'Stockland Green', 'Kingstanding', 'Politics', 'Local Government'],
}

export default metadata

import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'ReformUK Erdington Branch',
  description: 'Official website of the ReformUK Erdington Branch - Working together for a better Erdington',
  keywords: ['ReformUK', 'Erdington', 'Politics', 'Reform', 'Birmingham'],
  openGraph: {
    title: 'ReformUK Erdington Branch',
    description: 'Official website of the ReformUK Erdington Branch - Working together for a better Erdington',
    url: 'https://reformuk-erdington.vercel.app',
    siteName: 'ReformUK Erdington Branch',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReformUK Erdington Branch',
    description: 'Official website of the ReformUK Erdington Branch - Working together for a better Erdington',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white text-reform-dark ${inter.variable} ${montserrat.variable}`}>
        <header className="bg-reform-primary text-white sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-6">
            <Navigation />
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-reform-dark text-white mt-20">
          <div className="container mx-auto px-4 py-8">
            <Footer />
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}

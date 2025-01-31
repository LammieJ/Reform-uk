'use client'

import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white dark:bg-gray-900 text-reform-dark dark:text-white ${inter.variable} ${montserrat.variable}`}>
        <ThemeProvider>
          <header className="bg-reform-primary dark:bg-reform-dark text-white sticky top-0 z-50">
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
        </ThemeProvider>
      </body>
    </html>
  )
}

'use client'

import './globals.css'
import { Roboto, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-reform-dark dark:text-white">
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

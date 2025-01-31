'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-reform-primary">
            Reform UK Erdington
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-reform-primary">
              About
            </Link>
            <Link href="/news" className="hover:text-reform-primary">
              News
            </Link>
            <Link href="/events" className="hover:text-reform-primary">
              Events
            </Link>
            <Link href="/contact" className="hover:text-reform-primary">
              Contact
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

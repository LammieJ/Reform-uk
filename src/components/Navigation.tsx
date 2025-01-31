'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlanOpen, setIsPlanOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="bg-white dark:bg-reform-dark shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-3"
          >
            <div className="bg-reform-primary dark:bg-white px-3 py-1.5 rounded">
              <span className="text-xl font-black text-white dark:text-reform-primary tracking-tight">REFORM</span>
            </div>
            <span className="text-xl font-semibold text-reform-primary dark:text-white">Erdington</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium">
              About
            </Link>
            <Link href="/news" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium">
              News
            </Link>
            <Link href="/events" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium">
              Events
            </Link>
            <div className="relative">
              <button 
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center"
                onMouseEnter={() => setIsPlanOpen(true)}
                onMouseLeave={() => setIsPlanOpen(false)}
              >
                Our Plan
                <svg
                  className="ml-1.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div 
                className={`${
                  isPlanOpen ? 'block' : 'hidden'
                } absolute left-0 mt-1 w-48 rounded shadow-lg bg-white dark:bg-reform-dark z-50`}
                onMouseEnter={() => setIsPlanOpen(true)}
                onMouseLeave={() => setIsPlanOpen(false)}
              >
                <Link
                  href="/plan/cut-taxes"
                  className="block px-4 py-2 text-sm text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-secondary"
                >
                  Cut Taxes
                </Link>
                <Link
                  href="/plan/reform-nhs"
                  className="block px-4 py-2 text-sm text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-secondary"
                >
                  Reform NHS
                </Link>
                <Link
                  href="/plan/control-immigration"
                  className="block px-4 py-2 text-sm text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-secondary"
                >
                  Control Immigration
                </Link>
                <Link
                  href="/plan/fight-crime"
                  className="block px-4 py-2 text-sm text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-secondary"
                >
                  Fight Crime
                </Link>
                <Link
                  href="/plan/drive-growth"
                  className="block px-4 py-2 text-sm text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-secondary"
                >
                  Drive Growth
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium">
              Contact
            </Link>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://facebook.com/ReformUKErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ReformUKErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-reform-gray dark:hover:bg-reform-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-reform-gray dark:hover:bg-reform-secondary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden py-2 space-y-1`}
        >
          <Link
            href="/about"
            className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/news"
            className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            News
          </Link>
          <Link
            href="/events"
            className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <div className="px-4 py-2">
            <div className="text-reform-dark dark:text-white text-sm font-medium mb-1">Our Plan</div>
            <div className="pl-4 space-y-1">
              <Link
                href="/plan/cut-taxes"
                className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cut Taxes
              </Link>
              <Link
                href="/plan/reform-nhs"
                className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reform NHS
              </Link>
              <Link
                href="/plan/control-immigration"
                className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Control Immigration
              </Link>
              <Link
                href="/plan/fight-crime"
                className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fight Crime
              </Link>
              <Link
                href="/plan/drive-growth"
                className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Drive Growth
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="block text-reform-dark dark:text-white hover:bg-reform-gray dark:hover:bg-reform-secondary px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex space-x-4 px-4 py-2">
            <a
              href="https://facebook.com/ReformUKErdington"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/ReformUKErdington"
              target="_blank"
              rel="noopener noreferrer"
              className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

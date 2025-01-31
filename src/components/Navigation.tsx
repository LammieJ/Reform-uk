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

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-reform-dark/80 backdrop-blur-lg shadow-lg border-b border-reform-primary/10 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-reform-dark/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="bg-reform-primary dark:bg-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 group-hover:bg-reform-light dark:group-hover:bg-reform-light">
              <span className="text-2xl font-black text-white dark:text-reform-primary tracking-tight">REFORM</span>
            </div>
            <span className="text-2xl font-semibold text-reform-primary dark:text-white transition-colors duration-300 group-hover:text-reform-light dark:group-hover:text-reform-light">Erdington</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5">
              About
            </Link>
            <Link href="/events" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5">
              Events
            </Link>
            <div className="relative group">
              <button 
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center transition-all duration-300 hover:-translate-y-0.5"
                onMouseEnter={() => setIsPlanOpen(true)}
                onMouseLeave={() => setIsPlanOpen(false)}
              >
                Our Plan
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
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
                  isPlanOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                } absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-white/90 dark:bg-reform-dark/90 border border-reform-primary/10 dark:border-white/10 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-reform-dark/60 transition-all duration-300 z-50`}
                onMouseEnter={() => setIsPlanOpen(true)}
                onMouseLeave={() => setIsPlanOpen(false)}
              >
                {[
                  { href: '/plan/cut-taxes', text: 'Cut Taxes' },
                  { href: '/plan/reform-nhs', text: 'Reform NHS' },
                  { href: '/plan/control-immigration', text: 'Control Immigration' },
                  { href: '/plan/fight-crime', text: 'Fight Crime' },
                  { href: '/plan/drive-growth', text: 'Drive Growth' }
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-6 py-3 text-sm text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-secondary transition-all duration-200 ${
                      index === 0 ? 'rounded-t-lg' : ''
                    } ${
                      index === 4 ? 'rounded-b-lg' : ''
                    }`}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-6 border-l border-reform-primary/10 dark:border-white/10 pl-6">
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/ReformUKErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-reform-gray dark:hover:bg-reform-secondary transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-reform-gray dark:hover:bg-reform-secondary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10"
              aria-label="Toggle mobile menu"
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
            isMobileMenuOpen ? 'max-h-[32rem] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/90 dark:bg-reform-dark/90 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-reform-dark/60`}
        >
          <div className="py-4 space-y-2 border-t border-reform-primary/10 dark:border-white/10 px-2">
            {[
              { href: '/about', text: 'About' },
              { href: '/events', text: 'Events' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-reform-dark dark:text-white hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 px-4 py-3 text-sm rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            
            <div className="px-4 py-3">
              <div className="text-reform-dark dark:text-white text-sm font-medium mb-2">Our Plan</div>
              <div className="space-y-1 pl-4">
                {[
                  { href: '/plan/cut-taxes', text: 'Cut Taxes' },
                  { href: '/plan/reform-nhs', text: 'Reform NHS' },
                  { href: '/plan/control-immigration', text: 'Control Immigration' },
                  { href: '/plan/fight-crime', text: 'Fight Crime' },
                  { href: '/plan/drive-growth', text: 'Drive Growth' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-reform-dark dark:text-white hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 py-2 px-3 text-sm rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-reform-dark dark:text-white hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 px-4 py-3 text-sm rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex space-x-6 px-4 py-4 border-t border-reform-primary/10 dark:border-white/10 mt-2">
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-200 hover:scale-110"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/ReformUKErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-200 hover:scale-110"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { isDarkMode, toggleDarkMode } = useTheme()

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'News', href: '/news' },
    { 
      label: 'Our Plan',
      href: '#',
      subItems: [
        { label: 'Cut Taxes', href: '/plan/cut-taxes' },
        { label: 'Reform NHS', href: '/plan/reform-nhs' },
        { label: 'Control Immigration', href: '/plan/control-immigration' },
        { label: 'Fight Crime', href: '/plan/fight-crime' },
        { label: 'Drive Growth', href: '/plan/drive-growth' }
      ]
    },
    { label: 'Join Us', href: '/join' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-reform-primary dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Top bar */}
        <div className="text-center py-2 text-sm text-white/90 border-b border-white/20">
          Castle Vale • Pype Hayes • Stockland Green • Kingstanding
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center text-white">
            <span className="text-2xl font-bold">ReformUK</span>
            <span className="ml-2 text-lg">Erdington</span>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {menuItems.map((item) => 
              item.subItems ? (
                <div key={item.href} className="relative">
                  <button 
                    className="text-white text-sm font-medium flex items-center gap-1 hover:bg-white/10 transition-colors duration-200 px-3 py-2 rounded-md"
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        openDropdown === item.href ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`absolute left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded shadow-lg py-1 transform transition-all duration-200 ${
                      openDropdown === item.href ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-reform-primary hover:text-white dark:hover:bg-reform-dark"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 px-3 py-2 rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 px-3 py-2 rounded-md"
            >
              Our Contract
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="bg-white dark:bg-gray-800 text-reform-primary dark:text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-white/90 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <a
                href="https://x.com/ReformErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-reform-primary dark:text-white px-5 py-2 text-sm font-medium rounded-md hover:bg-white/90 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Follow on X
              </a>
              <a
                href="https://www.facebook.com/groups/916932353577131/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-reform-primary dark:text-white px-5 py-2 text-sm font-medium rounded-md hover:bg-white/90 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Facebook Group
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 transition-colors duration-200 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden border-t border-white/20 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5">
            {menuItems.map((item) => (
              item.subItems ? (
                <div key={item.href} className="mb-4">
                  <div className="text-white font-medium mb-2 px-2">
                    {item.label}
                  </div>
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block text-white/90 hover:text-white hover:bg-white/10 py-2 px-3 transition-colors duration-200 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:text-white hover:bg-white/10 py-2 px-3 transition-colors duration-200 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="mt-4 pt-4 border-t border-white/20 px-2">
              <a
                href="https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-white hover:bg-white/10 py-2 px-3 transition-colors duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Contract
              </a>
              <div className="flex flex-col gap-2 px-3 mt-4">
                <button
                  onClick={toggleDarkMode}
                  className="block bg-white dark:bg-gray-800 text-reform-primary dark:text-white px-4 py-2 rounded-md hover:bg-white/90 dark:hover:bg-gray-700 transition-colors duration-200 text-center"
                >
                  {isDarkMode ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Light Mode
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark Mode
                    </span>
                  )}
                </button>
                <a
                  href="https://x.com/ReformErdington"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 text-reform-primary dark:text-white px-4 py-2 rounded-md hover:bg-white/90 dark:hover:bg-gray-700 transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Follow on X
                </a>
                <a
                  href="https://www.facebook.com/groups/916932353577131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 text-reform-primary dark:text-white px-4 py-2 rounded-md hover:bg-white/90 dark:hover:bg-gray-700 transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Facebook Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

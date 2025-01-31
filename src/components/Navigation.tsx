'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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
    <header className="bg-reform-primary shadow-sm">
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
                    className={`absolute left-0 mt-1 w-48 bg-white rounded shadow-lg py-1 transform transition-all duration-200 ${
                      openDropdown === item.href ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-reform-primary hover:text-white"
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
            <a
              href="https://www.facebook.com/groups/916932353577131/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-reform-primary px-5 py-2 text-sm font-medium rounded-md hover:bg-white/90 transition-colors duration-200 ml-2"
            >
              Join Facebook Group
            </a>
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
          <div className="py-4 bg-gradient-to-b from-black/5 to-transparent">
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
              <a
                href="https://www.facebook.com/groups/916932353577131/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-reform-primary px-4 py-2 rounded-md mt-4 hover:bg-white/90 transition-colors duration-200 text-center mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Facebook Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

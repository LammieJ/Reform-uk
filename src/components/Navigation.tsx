'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
    <div className="relative">
      {/* Logo and mobile menu button */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold">ReformUK</span>
          <span className="text-lg">Erdington</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
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

        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          {menuItems.map((item) => (
            item.subItems ? (
              <div key={item.href} className="relative group">
                <button 
                  className="flex items-center space-x-1 hover:text-reform-light transition-colors duration-200"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <span>{item.label}</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg transform transition-all duration-200 ${
                    isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-reform-light hover:text-white transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
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
                className="hover:text-reform-light transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          ))}
          <a
            href="https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-reform-light transition-colors duration-200"
          >
            Our Contract
          </a>
          <a
            href="https://www.facebook.com/groups/916932353577131/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Join Facebook Group
          </a>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-reform-primary mt-2 py-4 lg:hidden rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              item.subItems ? (
                <div key={item.href} className="px-4">
                  <div className="font-semibold text-white mb-2">{item.label}</div>
                  <div className="pl-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-2 text-white/90 hover:text-white transition-colors duration-200"
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
                  className="block px-4 py-2 text-white hover:bg-reform-light/20 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <a
              href="https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-white hover:bg-reform-light/20 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Contract
            </a>
            <a
              href="https://www.facebook.com/groups/916932353577131/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 px-4 py-2 bg-white text-reform-primary rounded-lg text-center hover:bg-reform-light hover:text-white transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Facebook Group
            </a>
          </div>
        </nav>
      )}
    </div>
  )
}

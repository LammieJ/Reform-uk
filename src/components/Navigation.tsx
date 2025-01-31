'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlanOpen, setIsPlanOpen] = useState(false)

  return (
    <nav className="bg-[#00B9E9]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-3"
          >
            <div className="bg-white px-3 py-1.5 rounded">
              <span className="text-xl font-black text-[#00B9E9] tracking-tight">REFORM</span>
            </div>
            <span className="text-xl font-semibold text-white">Erdington</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-white hover:text-cyan-100 font-medium">
              About
            </Link>
            <Link href="/news" className="text-white hover:text-cyan-100 font-medium">
              News
            </Link>
            <Link href="/events" className="text-white hover:text-cyan-100 font-medium">
              Events
            </Link>
            <div className="relative">
              <button 
                className="text-white hover:text-cyan-100 font-medium flex items-center"
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
                } absolute left-0 mt-1 w-48 rounded shadow-lg bg-white z-50`}
                onMouseEnter={() => setIsPlanOpen(true)}
                onMouseLeave={() => setIsPlanOpen(false)}
              >
                <Link
                  href="/plan/cut-taxes"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00B9E9] hover:text-white"
                >
                  Cut Taxes
                </Link>
                <Link
                  href="/plan/reform-nhs"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00B9E9] hover:text-white"
                >
                  Reform NHS
                </Link>
                <Link
                  href="/plan/control-immigration"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00B9E9] hover:text-white"
                >
                  Control Immigration
                </Link>
                <Link
                  href="/plan/fight-crime"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00B9E9] hover:text-white"
                >
                  Fight Crime
                </Link>
                <Link
                  href="/plan/drive-growth"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00B9E9] hover:text-white"
                >
                  Drive Growth
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-white hover:text-cyan-100 font-medium">
              Contact
            </Link>
            <div className="flex items-center space-x-3 ml-4">
              <a
                href="https://facebook.com/ReformUKErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-100"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/ReformUKErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-100"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center space-x-3 ml-4">
              <Link
                href="/join"
                className="bg-white text-[#00B9E9] px-4 py-1.5 rounded font-semibold hover:bg-cyan-50"
              >
                Join Us
              </Link>
              <Link
                href="/volunteer"
                className="bg-white text-[#00B9E9] px-4 py-1.5 rounded font-semibold hover:bg-cyan-50"
              >
                Volunteer
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cyan-100 focus:outline-none"
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
            className="block text-white hover:bg-[#00A5D1] px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/news"
            className="block text-white hover:bg-[#00A5D1] px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            News
          </Link>
          <Link
            href="/events"
            className="block text-white hover:bg-[#00A5D1] px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Events
          </Link>
          <div className="px-4 py-2">
            <div className="text-white text-sm font-medium mb-1">Our Plan</div>
            <div className="pl-4 space-y-1">
              <Link
                href="/plan/cut-taxes"
                className="block text-white hover:bg-[#00A5D1] py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cut Taxes
              </Link>
              <Link
                href="/plan/reform-nhs"
                className="block text-white hover:bg-[#00A5D1] py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reform NHS
              </Link>
              <Link
                href="/plan/control-immigration"
                className="block text-white hover:bg-[#00A5D1] py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Control Immigration
              </Link>
              <Link
                href="/plan/fight-crime"
                className="block text-white hover:bg-[#00A5D1] py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fight Crime
              </Link>
              <Link
                href="/plan/drive-growth"
                className="block text-white hover:bg-[#00A5D1] py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Drive Growth
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="block text-white hover:bg-[#00A5D1] px-4 py-2 text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex space-x-4 px-4 py-2">
            <a
              href="https://facebook.com/ReformUKErdington"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/ReformUKErdington"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/join"
              className="block bg-white text-[#00B9E9] px-4 py-2 rounded text-center font-semibold hover:bg-cyan-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Us
            </Link>
            <Link
              href="/volunteer"
              className="block bg-white text-[#00B9E9] px-4 py-2 rounded text-center font-semibold hover:bg-cyan-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

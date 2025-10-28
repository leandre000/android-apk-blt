'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap, Github, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/converter', label: 'Converter' },
    { href: '/docs', label: 'Docs' },
    { href: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl sm:text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://github.com/leandre000/android-apk-blt"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 flex items-center space-x-2 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://github.com/leandre000/android-apk-blt"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 text-sm font-medium"
            >
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

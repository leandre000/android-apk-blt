import Link from 'next/link'
import { Mail, Github, Globe, GraduationCap, Heart, Zap, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AAB2APK.io</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Professional Android App Bundle to APK converter. Fast, secure, and free forever. 
              Convert your AAB files with ease.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Shema Leandre</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/converter" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Converter
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://shemaleandre.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Portfolio</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Iamshemaleandre@gmail.com" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Iamshemaleandre@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/leandre000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">@leandre000</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.echo-solution.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Echo Solution</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-gray-600">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-sm">Rwanda Coding Academy</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600 text-center sm:text-left">
              {currentYear} AAB2APK Pro. All rights reserved. | Open Source under MIT License
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://shemaleandre.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-violet-600 transition-colors"
                title="Portfolio"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/leandre000/android-apk-blt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-violet-600 transition-colors"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Iamshemaleandre@gmail.com"
                className="text-gray-600 hover:text-violet-600 transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.echo-solution.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-violet-600 transition-colors"
                title="Echo Solution"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

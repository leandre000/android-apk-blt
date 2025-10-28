# Add Professional Header and Footer

cd "C:\Users\Shema Leandre\Documents\GITHUB\apk-builder\aab2apk-web"

Write-Host "Creating professional header and footer..." -ForegroundColor Cyan

# Create Footer component
$footerComponent = @'
import Link from 'next/link'
import { Mail, Github, Globe, GraduationCap, Heart, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-2xl font-bold dark:text-white">AAB2APK Pro</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Professional Android App Bundle to APK converter. Fast, secure, and free forever. 
              Convert your AAB files with ease.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Shema Leandre</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/converter" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Converter
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:Iamshemaleandre@gmail.com" 
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Echo Solution</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-sm">Rwanda Coding Academy</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {currentYear} AAB2APK Pro. All rights reserved. | Open Source under MIT License
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/leandre000/android-apk-blt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:Iamshemaleandre@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://www.echo-solution.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
'@

$footerComponent | Out-File -FilePath "src/components/Footer.tsx" -Encoding UTF8
Write-Host "Created Footer component" -ForegroundColor Green

# Update home page with footer
$homePage = @'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Sparkles, Github, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Open Source & Free Forever</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Convert AAB to APK
            <br />
            Like a Pro
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Professional Android App Bundle converter with signing, optimization, and more.
            Fast, secure, and easy to use. No registration required.
          </p>
          
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link
              href="/converter"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/50 transition-all"
            >
              <span>Start Converting</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/leandre000/android-apk-blt"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 flex items-center space-x-2 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-all"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Convert your AAB files to APK in seconds with our optimized processing engine.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Secure & Private</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your files are processed securely and deleted immediately after conversion.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 md:col-span-1">
            <Sparkles className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Professional Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sign, optimize, and customize your APKs with advanced options.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Conversions</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Uptime</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">&lt;30s</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Avg Time</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">Free</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Forever</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
'@

$homePage | Out-File -FilePath "src/app/page.tsx" -Encoding UTF8
Write-Host "Updated home page with footer" -ForegroundColor Green

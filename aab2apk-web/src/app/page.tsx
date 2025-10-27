import Link from 'next/link'
import { ArrowRight, Zap, Shield, Sparkles, Github, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/converter" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Converter
            </Link>
            <Link href="/docs" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Docs
            </Link>
            <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Open Source & Free Forever</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Convert AAB to APK
            <br />
            Like a Pro
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Professional Android App Bundle converter with signing, optimization, and more.
            Fast, secure, and easy to use. No registration required.
          </p>
          
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link
              href="/converter"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <span>Start Converting</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/leandre000/android-apk-blt"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 flex items-center space-x-2 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
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
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Professional Tools</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sign, optimize, and customize your APKs with advanced options.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Conversions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">&lt;30s</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Avg Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">Free</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Forever</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t dark:border-gray-800 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 AAB2APK Pro. Created by Shema Leandre. Open Source under MIT License.</p>
        </div>
      </footer>
    </div>
  )
}

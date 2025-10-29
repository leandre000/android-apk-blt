import Link from 'next/link'
import { ArrowRight, Zap, Shield, Sparkles, Github, Star, Users, Award, TrendingUp, CheckCircle, MessageSquare, ThumbsUp, Globe, Lock, Rocket, Code } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-100/40 to-transparent"></div>
      </div>

      <Navigation />

      <main className="flex-1 container mx-auto px-6 py-16 sm:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-8 shadow-sm border border-purple-200">
            <Shield className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Open Source & Free Forever</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
            AAB2APK.io makes your work effortless
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Streamlining workflow for clarity and focused execution,
            a solution trusted by over 1 million professionals for converting Android App Bundles.
          </p>
          
          <div className="flex justify-center space-x-4 flex-wrap gap-4 mb-20">
            <Link
              href="/converter"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 flex items-center space-x-2 transition-all"
            >
              <span>Start Converting</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/docs"
              className="px-8 py-4 border-2 border-gray-300 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 flex items-center space-x-2 transition-all"
            >
              <span>View Documentation</span>
            </Link>
          </div>

          <div className="flex justify-center space-x-4 flex-wrap gap-4 mb-20">
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

        {/* Features Section */}
        <div className="mt-24 sm:mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Why Choose AAB2APK.io?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-700/50 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Convert your AAB files to APK in seconds with our optimized processing engine. No waiting, just results.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-700/50 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Secure & Private</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your files are processed securely and deleted immediately after conversion. We respect your privacy.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-700/50 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Professional Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sign, optimize, and customize your APKs with advanced options. Built for professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 sm:mt-32 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-violet-200/50 dark:border-violet-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Conversions</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">&lt;30s</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Avg Time</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Available</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24 sm:mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Loved by Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                "Best AAB to APK converter I've ever used! Lightning fast and super reliable. Saved me hours of work."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">JD</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Senior Android Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                "Professional tool with amazing features. The API integration is seamless. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">SM</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">Sarah Miller</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mobile App Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                "Game changer! No more complex command-line tools. Simple, fast, and it just works perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">AK</div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 dark:text-white">Alex Kumar</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Indie Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 sm:mt-32 mb-12 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 sm:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg sm:text-xl mb-10 opacity-90 max-w-2xl mx-auto">Join thousands of developers who trust AAB2APK.io for their conversion needs</p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link href="/converter" className="px-8 py-4 bg-white text-violet-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl">
              Start Converting Now
            </Link>
            <Link href="/reviews" className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Read Reviews
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

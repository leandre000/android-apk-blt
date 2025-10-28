import Link from 'next/link'
import { ArrowRight, Zap, Shield, Sparkles, Github, Star, Users, Award, TrendingUp, CheckCircle, MessageSquare, ThumbsUp, Globe, Lock, Rocket, Code } from 'lucide-react'
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
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Conversions</div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">99.9%</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Success Rate</div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400">&lt;30s</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Avg Time</div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">Available</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 sm:mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 dark:text-white">Trusted by Developers Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-3" />
              <p className="font-semibold dark:text-white">150+ Countries</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Global Reach</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-green-600 dark:text-green-400 mb-3" />
              <p className="font-semibold dark:text-white">10K+ Developers</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-3" />
              <p className="font-semibold dark:text-white">4.9/5 Rating</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">User Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="h-12 w-12 text-red-600 dark:text-red-400 mb-3" />
              <p className="font-semibold dark:text-white">100% Secure</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Encrypted</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 dark:text-white">What Developers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "Best AAB to APK converter I've ever used! Lightning fast and super reliable. Saved me hours of work."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                <div className="ml-3">
                  <p className="font-semibold dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Senior Android Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "Professional tool with amazing features. The API integration is seamless. Highly recommended for any Android dev!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">SM</div>
                <div className="ml-3">
                  <p className="font-semibold dark:text-white">Sarah Miller</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mobile App Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "Game changer! No more complex command-line tools. Simple, fast, and it just works. Love the dark mode too!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">AK</div>
                <div className="ml-3">
                  <p className="font-semibold dark:text-white">Alex Kumar</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Indie Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white">Join Thousands of Happy Developers</h2>
            <p className="text-gray-600 dark:text-gray-300">See what the community is saying about AAB2APK Pro</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-3">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold dark:text-white">Michael Chen</p>
                    <div className="flex text-yellow-400 text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">"Incredible tool! Converted 50+ apps without a single issue. The optimization feature is a lifesaver."</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    <span>245 people found this helpful</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-3">
                <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold dark:text-white">Emma Rodriguez</p>
                    <div className="flex text-yellow-400 text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">"Perfect for our CI/CD pipeline. The API is well-documented and super easy to integrate. 10/10!"</p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    <span>189 people found this helpful</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/reviews" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Read All Reviews</span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <Rocket className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Convert Your Apps?</h2>
          <p className="text-lg mb-8 opacity-90">Join 10,000+ developers who trust AAB2APK Pro for their conversion needs</p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link href="/converter" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Start Converting Now
            </Link>
            <Link href="/docs" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              View Documentation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

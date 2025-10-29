import { BarChart3, FileText, Clock, Download } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-violet-200/50 dark:border-violet-700/50">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">24</div>
            <div className="text-gray-600 dark:text-gray-400">Total Conversions</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-violet-200/50 dark:border-violet-700/50">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">12s</div>
            <div className="text-gray-600 dark:text-gray-400">Avg Time</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-violet-200/50 dark:border-violet-700/50">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
              <Download className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">18</div>
            <div className="text-gray-600 dark:text-gray-400">Downloads</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-violet-200/50 dark:border-violet-700/50">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-3">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">95%</div>
            <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-violet-200/50 dark:border-violet-700/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recent Conversions</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">app-release.aab</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</div>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium rounded-full text-sm">Success</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">my-app-v2.aab</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">5 hours ago</div>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium rounded-full text-sm">Success</span>
            </div>
            <div className="flex justify-between items-center pb-4">
              <div>
                <div className="font-medium text-gray-900 dark:text-white">production.aab</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">1 day ago</div>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-medium rounded-full text-sm">Success</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

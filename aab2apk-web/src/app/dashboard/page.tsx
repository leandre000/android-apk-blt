import { BarChart3, FileText, Clock, Download, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="border-b bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">Home</Link>
            <Link href="/converter" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">Converter</Link>
            <Link href="/docs" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">Docs</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Dashboard</h1>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <FileText className="h-8 w-8 text-blue-600 mb-2" />
            <div className="text-2xl font-bold dark:text-white">24</div>
            <div className="text-gray-600 dark:text-gray-400">Total Conversions</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <Clock className="h-8 w-8 text-green-600 mb-2" />
            <div className="text-2xl font-bold dark:text-white">12s</div>
            <div className="text-gray-600 dark:text-gray-400">Avg Time</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <Download className="h-8 w-8 text-purple-600 mb-2" />
            <div className="text-2xl font-bold dark:text-white">18</div>
            <div className="text-gray-600 dark:text-gray-400">Downloads</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <BarChart3 className="h-8 w-8 text-orange-600 mb-2" />
            <div className="text-2xl font-bold dark:text-white">95%</div>
            <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Recent Conversions</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-4 dark:border-gray-700">
              <div>
                <div className="font-medium dark:text-white">app-release.aab</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</div>
              </div>
              <span className="text-green-600 font-medium">Success</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50\">
      <nav className=\"border-b bg-white/50 backdrop-blur-sm\">
        <div className=\"container mx-auto px-4 py-4 flex justify-between items-center\">
          <div className=\"flex items-center space-x-2\">
            <Zap className=\"h-8 w-8 text-blue-600\" />
            <span className=\"text-2xl font-bold\">AAB2APK Pro</span>
          </div>
          <div className=\"flex space-x-4\">
            <Link href=\"/converter\" className=\"px-4 py-2 text-sm font-medium hover:text-blue-600\">
              Converter
            </Link>
            <Link href=\"/docs\" className=\"px-4 py-2 text-sm font-medium hover:text-blue-600\">
              Docs
            </Link>
            <Link href=\"/dashboard\" className=\"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700\">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <main className=\"container mx-auto px-4 py-20\">
        <div className=\"text-center max-w-4xl mx-auto\">
          <h1 className=\"text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent\">
            Convert AAB to APK
            <br />
            Like a Pro
          </h1>
          <p className=\"text-xl text-gray-600 mb-8\">
            Professional Android App Bundle converter with signing, optimization, and more.
            Fast, secure, and easy to use.
          </p>
          <div className=\"flex justify-center space-x-4\">
            <Link
              href=\"/converter\"
              className=\"px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 flex items-center space-x-2\"
            >
              <span>Start Converting</span>
              <ArrowRight className=\"h-5 w-5\" />
            </Link>
            <Link
              href=\"/docs\"
              className=\"px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50\"
            >
              View Documentation
            </Link>
          </div>
        </div>

        <div className=\"grid md:grid-cols-3 gap-8 mt-20\">
          <div className=\"p-6 bg-white rounded-xl shadow-lg\">
            <Zap className=\"h-12 w-12 text-blue-600 mb-4\" />
            <h3 className=\"text-xl font-bold mb-2\">Lightning Fast</h3>
            <p className=\"text-gray-600\">
              Convert your AAB files to APK in seconds with our optimized processing engine.
            </p>
          </div>
          <div className=\"p-6 bg-white rounded-xl shadow-lg\">
            <Shield className=\"h-12 w-12 text-blue-600 mb-4\" />
            <h3 className=\"text-xl font-bold mb-2\">Secure & Private</h3>
            <p className=\"text-gray-600\">
              Your files are processed securely and deleted immediately after conversion.
            </p>
          </div>
          <div className=\"p-6 bg-white rounded-xl shadow-lg\">
            <Sparkles className=\"h-12 w-12 text-blue-600 mb-4\" />
            <h3 className=\"text-xl font-bold mb-2\">Professional Tools</h3>
            <p className=\"text-gray-600\">
              Sign, optimize, and customize your APKs with advanced options.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

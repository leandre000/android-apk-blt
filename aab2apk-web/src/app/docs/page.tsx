'use client'

import { useState } from 'react'
import { Book, Code, Terminal, Zap, Copy, Check, Github, Rocket, FileCode, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const sections = [
    { id: 'getting-started', name: 'Getting Started', icon: Rocket },
    { id: 'web-usage', name: 'Web Usage', icon: Book },
    { id: 'cli-usage', name: 'CLI Usage', icon: Terminal },
    { id: 'api-reference', name: 'API Reference', icon: Code },
    { id: 'examples', name: 'Examples', icon: FileCode },
    { id: 'faq', name: 'FAQ', icon: HelpCircle },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="border-b bg-white dark:bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">Home</Link>
            <Link href="/converter" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">Converter</Link>
            <Link href="/dashboard" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">Dashboard</Link>
            <a href="https://github.com/leandre000/android-apk-blt" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              <h3 className="font-bold text-lg mb-4 dark:text-white">Documentation</h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{section.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          <main className="flex-1 max-w-4xl">
            {activeSection === 'getting-started' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">Getting Started</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">Welcome to AAB2APK Pro! Convert your Android App Bundles to APK files with ease.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                    <Rocket className="h-6 w-6 mr-2 text-blue-600" />
                    Quick Start
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="font-semibold dark:text-white">Upload Your AAB File</h3>
                        <p className="text-gray-600 dark:text-gray-400">Go to the converter page and drag & drop your .aab file</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="font-semibold dark:text-white">Configure Options</h3>
                        <p className="text-gray-600 dark:text-gray-400">Choose conversion options like universal APK, optimization, and signing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="font-semibold dark:text-white">Convert & Download</h3>
                        <p className="text-gray-600 dark:text-gray-400">Click convert and download your APK file</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'web-usage' && (
              <div className="space-y-8">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">Web Usage Guide</h1>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Step 1: Upload Your AAB File</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Navigate to the converter page and upload your Android App Bundle file.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-4">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Tip:</strong> You can drag and drop your .aab file or click to browse.
                    </p>
                  </div>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-mono">Supported formats: .aab</p>
                    <p className="text-sm font-mono">Maximum file size: 100MB</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Step 2: Configure Conversion Options</h2>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-bold text-lg dark:text-white mb-2">Universal APK</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Generates a single APK that works on all device configurations. Recommended for most use cases.
                      </p>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block">
                        ✓ Enabled by default
                      </code>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-bold text-lg dark:text-white mb-2">Optimize APK</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Uses zipalign to optimize the APK for better runtime performance and reduced memory usage.
                      </p>
                      <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block">
                        Recommended for production builds
                      </code>
                    </div>
                    
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="font-bold text-lg dark:text-white mb-2">Sign APK</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Signs the APK with a debug keystore. Use this for testing only.
                      </p>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-2">
                        <p className="text-sm text-yellow-800 dark:text-yellow-300">
                          ⚠️ <strong>Warning:</strong> Debug signatures are not suitable for production releases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Step 3: Convert & Download</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Click the "Convert to APK" button and wait for the conversion to complete.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Conversion typically takes 10-30 seconds</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Progress bar shows real-time status</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Download starts automatically when complete</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Best Practices</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Always test converted APKs on multiple devices before distribution</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Enable optimization for production builds</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Use your own keystore for production signing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Keep your original AAB file as backup</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSection === 'cli-usage' && (
              <div className="space-y-8">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">CLI Usage</h1>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Installation</h2>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>git clone https://github.com/leandre000/android-apk-blt.git{'\n'}cd android-apk-blt{'\n'}./install.sh</code>
                  </pre>
                </div>
              </div>
            )}

            {activeSection === 'faq' && (
              <div className="space-y-8">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">FAQ</h1>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h3 className="font-bold text-lg mb-2 dark:text-white">What is an AAB file?</h3>
                  <p className="text-gray-600 dark:text-gray-400">AAB (Android App Bundle) is the publishing format for Android apps.</p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

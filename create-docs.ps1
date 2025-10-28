# Create Comprehensive Documentation Page

$appDir = "aab2apk-web"
cd $appDir

Write-Host "Creating comprehensive documentation..." -ForegroundColor Cyan

# Create docs directory
New-Item -ItemType Directory -Force -Path "src/app/docs" | Out-Null

# Create docs page
@'
'use client'

import { useState } from 'react'
import { Book, Code, Terminal, Settings, Zap, ChevronRight, Copy, Check, Github, Download, Shield, Rocket, FileCode, HelpCircle } from 'lucide-react'
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
      {/* Navigation */}
      <nav className="border-b bg-white dark:bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">
              Home
            </Link>
            <Link href="/converter" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">
              Converter
            </Link>
            <Link href="/dashboard" className="px-4 py-2 text-sm font-medium hover:text-blue-600 dark:text-gray-300">
              Dashboard
            </Link>
            <a href="https://github.com/leandre000/android-apk-blt" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
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

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Getting Started */}
            {activeSection === 'getting-started' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">Getting Started</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Welcome to AAB2APK Pro! Convert your Android App Bundles to APK files with ease.
                  </p>
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

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">💡 Pro Tip</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    For production apps, always use a proper keystore for signing. The debug keystore is only for testing purposes.
                  </p>
                </div>
              </div>
            )}

            {/* Web Usage */}
            {activeSection === 'web-usage' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">Web Usage</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Learn how to use the web interface effectively
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">File Upload</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    The converter supports drag & drop and click to browse. Maximum file size is 100MB.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded p-4">
                    <p className="text-sm font-mono dark:text-gray-300">Supported formats: .aab (Android App Bundle)</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Conversion Options</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold dark:text-white mb-2">Universal APK</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Creates a single APK that works on all device configurations. Recommended for most use cases.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-white mb-2">Optimize APK</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Uses zipalign to optimize the APK for better runtime performance and reduced memory usage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-white mb-2">Sign APK</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Signs the APK with a debug keystore. For production, use your own keystore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CLI Usage */}
            {activeSection === 'cli-usage' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">CLI Usage</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Use AAB2APK Pro from the command line
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Installation</h2>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Clone the repository
git clone https://github.com/leandre000/android-apk-blt.git
cd android-apk-blt

# Run the installer
./install.sh`}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git clone https://github.com/leandre000/android-apk-blt.git\ncd android-apk-blt\n./install.sh', 'install')}
                      className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded"
                    >
                      {copiedCode === 'install' ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-300" />}
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Basic Usage</h2>
                  <div className="relative mb-4">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Convert AAB to APK
./builder.sh input.aab

# With options
./builder.sh --universal --optimize input.aab

# Sign the APK
./builder.sh --sign --keystore my.keystore input.aab`}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard('./builder.sh input.aab', 'basic')}
                      className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded"
                    >
                      {copiedCode === 'basic' ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-300" />}
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Available Options</h2>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-sm">--universal</code>
                      <p className="text-gray-600 dark:text-gray-400">Generate universal APK</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-sm">--optimize</code>
                      <p className="text-gray-600 dark:text-gray-400">Optimize with zipalign</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-sm">--sign</code>
                      <p className="text-gray-600 dark:text-gray-400">Sign the APK</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-sm">--keystore</code>
                      <p className="text-gray-600 dark:text-gray-400">Path to keystore file</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded text-sm">--verbose</code>
                      <p className="text-gray-600 dark:text-gray-400">Enable verbose output</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* API Reference */}
            {activeSection === 'api-reference' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">API Reference</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Integrate AAB2APK Pro into your applications
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Convert Endpoint</h2>
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded font-mono text-sm">POST</span>
                      <code className="ml-2 dark:text-gray-300">/api/convert</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Convert an AAB file to APK format</p>
                    
                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Request Body</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{`{
  "file": "base64_encoded_aab_file",
  "options": {
    "universal": true,
    "optimize": true,
    "sign": false
  }
}`}</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 dark:text-white">Response</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{`{
  "success": true,
  "fileName": "app-release.apk",
  "fileSize": 12345678,
  "downloadUrl": "https://example.com/download/abc123"
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Example Request</h2>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`const formData = new FormData()
formData.append('file', aabFile)
formData.append('options', JSON.stringify({
  universal: true,
  optimize: true,
  sign: false
}))

const response = await fetch('/api/convert', {
  method: 'POST',
  body: formData
})

const result = await response.json()
console.log(result.downloadUrl)`}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard('const formData = new FormData()...', 'api-example')}
                      className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded"
                    >
                      {copiedCode === 'api-example' ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-300" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Examples */}
            {activeSection === 'examples' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">Examples</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Real-world examples and use cases
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Basic Conversion</h2>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Simple AAB to APK conversion
./builder.sh app-release.aab

# Output: app-release.apk`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Production Build</h2>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Convert with all optimizations
./builder.sh \\
  --universal \\
  --optimize \\
  --sign \\
  --keystore release.keystore \\
  --key-alias myapp \\
  app-release.aab`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Batch Processing</h2>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{`# Convert multiple AAB files
for file in *.aab; do
  ./builder.sh --universal "$file"
done`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ */}
            {activeSection === 'faq' && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold mb-4 dark:text-white">FAQ</h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Frequently asked questions
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: 'What is an AAB file?',
                      a: 'AAB (Android App Bundle) is the publishing format for Android apps. It contains all compiled code and resources but defers APK generation to Google Play.'
                    },
                    {
                      q: 'Why convert AAB to APK?',
                      a: 'APK files can be installed directly on Android devices, useful for testing, distribution outside Google Play, or archival purposes.'
                    },
                    {
                      q: 'Is my data secure?',
                      a: 'Yes! Files are processed securely, encrypted during transfer, and automatically deleted after 24 hours. We never store your files permanently.'
                    },
                    {
                      q: 'What is a universal APK?',
                      a: 'A universal APK contains all resources for all device configurations in a single file, making it compatible with any Android device.'
                    },
                    {
                      q: 'Can I use this for production apps?',
                      a: 'Yes, but make sure to use your own keystore for signing production apps. The debug keystore is only for testing.'
                    },
                    {
                      q: 'What is the maximum file size?',
                      a: 'The web interface supports files up to 100MB. For larger files, use the CLI tool which has no size limit.'
                    },
                  ].map((faq, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                      <h3 className="font-bold text-lg mb-2 dark:text-white">{faq.q}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Need More Help?</h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    Check out our GitHub repository for more information or open an issue.
                  </p>
                  <a
                    href="https://github.com/leandre000/android-apk-blt/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <Github className="h-4 w-4" />
                    <span>Open an Issue</span>
                  </a>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
'@ | Out-File -FilePath "src/app/docs/page.tsx" -Encoding UTF8

Write-Host "✓ Documentation page created" -ForegroundColor Green


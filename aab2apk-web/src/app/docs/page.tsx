'use client'

import { useState } from 'react'
import { Book, Code, Terminal, Copy, Check, Rocket, FileCode, HelpCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Documentation</h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400'
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
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                    <Rocket className="h-6 w-6 mr-2 text-violet-600" />
                    Quick Start
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="font-semibold dark:text-white">Upload Your AAB File</h3>
                        <p className="text-gray-600 dark:text-gray-400">Go to the converter page and drag & drop your .aab file</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="font-semibold dark:text-white">Configure Options</h3>
                        <p className="text-gray-600 dark:text-gray-400">Choose conversion options like universal APK, optimization, and signing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
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
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
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

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
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

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
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
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Installation</h2>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>git clone https://github.com/leandre000/android-apk-blt.git{'\n'}cd android-apk-blt{'\n'}./install.sh</code>
                  </pre>
                </div>
              </div>
            )}

            {activeSection === 'api-reference' && (
              <div className="space-y-8">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">API Reference</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Complete REST API documentation for programmatic AAB to APK conversion.
                </p>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Base URL</h2>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                    <code className="text-green-400">https://api.aab2apk.pro/v1</code>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Authentication</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    All API requests require authentication using an API key in the Authorization header.
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <span className="text-blue-400">Authorization:</span> <span className="text-green-400">Bearer YOUR_API_KEY</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Get your API key:</strong> Sign up at the dashboard to receive your free API key.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">POST /convert</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Convert an AAB file to APK format.</p>
                  
                  <h3 className="font-bold text-lg mb-3 dark:text-white">Request Parameters</h3>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-900">
                          <th className="px-4 py-2 text-left text-sm font-semibold dark:text-white">Parameter</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold dark:text-white">Type</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold dark:text-white">Required</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold dark:text-white">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">file</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">binary</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">Yes</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">The AAB file to convert</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">universal</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">boolean</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">No</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">Generate universal APK (default: true)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">optimize</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">boolean</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">No</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">Optimize with zipalign (default: true)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-mono text-sm text-blue-600 dark:text-blue-400">sign</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">boolean</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">No</td>
                          <td className="px-4 py-2 text-sm dark:text-gray-300">Sign with debug keystore (default: false)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="font-bold text-lg mb-3 dark:text-white">Example Request</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`curl -X POST https://api.aab2apk.pro/v1/convert \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@app-release.aab" \\
  -F "universal=true" \\
  -F "optimize=true" \\
  -F "sign=false"`}</code></pre>
                  </div>

                  <h3 className="font-bold text-lg mb-3 dark:text-white">Success Response (200 OK)</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm"><code>{`{
  "success": true,
  "conversionId": "conv_abc123xyz",
  "fileName": "app-release.apk",
  "fileSize": 15728640,
  "downloadUrl": "https://cdn.aab2apk.pro/downloads/conv_abc123xyz.apk",
  "expiresAt": "2025-10-29T12:00:00Z",
  "metadata": {
    "packageName": "com.example.app",
    "versionCode": 1,
    "versionName": "1.0.0",
    "minSdkVersion": 21,
    "targetSdkVersion": 34
  }
}`}</code></pre>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">GET /status/:id</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Check conversion status by ID.</p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm"><code>{`GET /v1/status/conv_abc123xyz

Response:
{
  "conversionId": "conv_abc123xyz",
  "status": "completed",
  "progress": 100,
  "createdAt": "2025-10-28T10:30:00Z",
  "completedAt": "2025-10-28T10:30:25Z"
}`}</code></pre>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Error Responses</h2>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <code className="text-red-600 dark:text-red-400 font-bold">400 Bad Request</code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Invalid file format or missing required parameters</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4 py-2">
                      <code className="text-yellow-600 dark:text-yellow-400 font-bold">401 Unauthorized</code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Invalid or missing API key</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                      <code className="text-orange-600 dark:text-orange-400 font-bold">413 Payload Too Large</code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">File exceeds maximum size limit (100MB)</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <code className="text-purple-600 dark:text-purple-400 font-bold">429 Too Many Requests</code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Rate limit exceeded (100 requests/hour for free tier)</p>
                    </div>
                    <div className="border-l-4 border-gray-500 pl-4 py-2">
                      <code className="text-gray-600 dark:text-gray-400 font-bold">500 Internal Server Error</code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Conversion failed - please try again or contact support</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Rate Limits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">Free Tier</p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 100 requests/hour</li>
                        <li>• Max 10MB file size</li>
                        <li>• 24-hour file retention</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-2">Pro Tier</p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• 1000 requests/hour</li>
                        <li>• Max 100MB file size</li>
                        <li>• 7-day file retention</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'examples' && (
              <div className="space-y-8">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">Code Examples</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Ready-to-use code examples in multiple programming languages.
                </p>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                    <FileCode className="h-6 w-6 mr-2 text-yellow-500" />
                    JavaScript / Node.js
                  </h2>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm"><code>{`const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function convertAAB(filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));
  form.append('universal', 'true');
  form.append('optimize', 'true');
  form.append('sign', 'false');

  try {
    const response = await axios.post(
      'https://api.aab2apk.pro/v1/convert',
      form,
      {
        headers: {
          ...form.getHeaders(),
          'Authorization': 'Bearer YOUR_API_KEY'
        }
      }
    );

    console.log('Conversion successful!');
    console.log('Download URL:', response.data.downloadUrl);
    console.log('File expires at:', response.data.expiresAt);
    
    return response.data;
  } catch (error) {
    console.error('Conversion failed:', error.response?.data || error.message);
    throw error;
  }
}

// Usage
convertAAB('./app-release.aab')
  .then(result => console.log('Success:', result))
  .catch(err => console.error('Error:', err));`}</code></pre>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                    <FileCode className="h-6 w-6 mr-2 text-blue-500" />
                    Python
                  </h2>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm"><code>{`import requests
import json

def convert_aab(file_path, api_key):
    url = 'https://api.aab2apk.pro/v1/convert'
    
    headers = {
        'Authorization': f'Bearer {api_key}'
    }
    
    files = {
        'file': open(file_path, 'rb')
    }
    
    data = {
        'universal': 'true',
        'optimize': 'true',
        'sign': 'false'
    }
    
    try:
        response = requests.post(url, headers=headers, files=files, data=data)
        response.raise_for_status()
        
        result = response.json()
        print(f"Conversion successful!")
        print(f"Download URL: {result['downloadUrl']}")
        print(f"File expires at: {result['expiresAt']}")
        
        return result
        
    except requests.exceptions.RequestException as e:
        print(f"Conversion failed: {e}")
        raise
    finally:
        files['file'].close()

# Usage
if __name__ == '__main__':
    api_key = 'YOUR_API_KEY'
    result = convert_aab('app-release.aab', api_key)
    print(json.dumps(result, indent=2))`}</code></pre>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white flex items-center">
                    <Terminal className="h-6 w-6 mr-2 text-green-500" />
                    cURL
                  </h2>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm"><code>{`# Basic conversion
curl -X POST https://api.aab2apk.pro/v1/convert \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@app-release.aab" \\
  -F "universal=true" \\
  -F "optimize=true" \\
  -F "sign=false"

# Check conversion status
curl -X GET https://api.aab2apk.pro/v1/status/conv_abc123xyz \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Download the converted APK
curl -O https://cdn.aab2apk.pro/downloads/conv_abc123xyz.apk`}</code></pre>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Best Practices</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-xl">✓</span>
                      <div>
                        <p className="font-semibold dark:text-white">Always handle errors gracefully</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Implement proper error handling and retry logic</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-xl">✓</span>
                      <div>
                        <p className="font-semibold dark:text-white">Store API keys securely</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Use environment variables, never hardcode keys</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-xl">✓</span>
                      <div>
                        <p className="font-semibold dark:text-white">Respect rate limits</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Implement exponential backoff for 429 responses</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-xl">✓</span>
                      <div>
                        <p className="font-semibold dark:text-white">Close file streams</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Always close file handles after upload</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeSection === 'faq' && (
              <div className="space-y-8">
                <h1 className="text-4xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h1>
                
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    What is an AAB file?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    AAB (Android App Bundle) is the official publishing format for Android apps on Google Play Store. 
                    It's a more efficient way to package your app, allowing Google Play to generate optimized APKs for different device configurations.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Why convert AAB to APK?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    While AAB is great for Play Store distribution, you might need APK files for:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                    <li>• Direct distribution outside Play Store</li>
                    <li>• Testing on physical devices</li>
                    <li>• Enterprise app distribution</li>
                    <li>• Sharing with beta testers</li>
                    <li>• Installing on devices without Play Store access</li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Is the conversion process secure?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes! All files are:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                    <li>• Encrypted during transfer using HTTPS/TLS</li>
                    <li>• Processed in isolated containers</li>
                    <li>• Automatically deleted after 24 hours (free tier)</li>
                    <li>• Never shared with third parties</li>
                    <li>• Scanned for malware before processing</li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    What's the difference between Universal APK and Split APKs?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Universal APK:</strong> A single APK file that works on all device configurations. 
                    Larger file size but easier to distribute.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Split APKs:</strong> Multiple smaller APK files optimized for specific device configurations 
                    (screen density, CPU architecture, language). More efficient but requires all splits to be installed together.
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Can I use this for production apps?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Yes, but with important considerations:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                    <li>• ✓ Use your own keystore for signing production APKs</li>
                    <li>• ✓ Enable optimization for better performance</li>
                    <li>• ✓ Test thoroughly on multiple devices before release</li>
                    <li>• ✗ Don't use debug signing for production</li>
                    <li>• ✗ Don't distribute unsigned APKs</li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    What file size limits apply?
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full mt-2">
                      <thead>
                        <tr className="border-b dark:border-gray-700">
                          <th className="text-left py-2 px-4 font-semibold dark:text-white">Tier</th>
                          <th className="text-left py-2 px-4 font-semibold dark:text-white">Max File Size</th>
                          <th className="text-left py-2 px-4 font-semibold dark:text-white">Retention</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-400">
                        <tr className="border-b dark:border-gray-700">
                          <td className="py-2 px-4">Free</td>
                          <td className="py-2 px-4">10 MB</td>
                          <td className="py-2 px-4">24 hours</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Pro</td>
                          <td className="py-2 px-4">100 MB</td>
                          <td className="py-2 px-4">7 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-violet-200/50 dark:border-violet-700/50">
                  <h3 className="font-bold text-xl mb-3 dark:text-white flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    How do I get an API key?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Getting an API key is simple:
                  </p>
                  <ol className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                    <li>1. Visit the <Link href="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link></li>
                    <li>2. Sign up for a free account</li>
                    <li>3. Navigate to API Keys section</li>
                    <li>4. Click "Generate New Key"</li>
                    <li>5. Copy and securely store your API key</li>
                  </ol>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-bold text-xl mb-3 dark:text-white">Still have questions?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Can't find what you're looking for? We're here to help!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="mailto:Iamshemaleandre@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center transition-colors">
                      Contact Support
                    </a>
                    <a href="https://github.com/leandre000/android-apk-blt/issues" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-center transition-colors">
                      Report an Issue
                    </a>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

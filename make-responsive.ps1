# Make All Pages Fully Responsive

cd "C:\Users\Shema Leandre\Documents\GITHUB\apk-builder\aab2apk-web"

Write-Host "Making all pages responsive..." -ForegroundColor Cyan

# Update Navigation with mobile menu
$navComponent = @'
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Zap, Github, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/converter', label: 'Converter' },
    { href: '/docs', label: 'Docs' },
    { href: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl sm:text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://github.com/leandre000/android-apk-blt"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 flex items-center space-x-2 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <a
              href="https://github.com/leandre000/android-apk-blt"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 text-sm font-medium"
            >
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <span>View on GitHub</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
'@

$navComponent | Out-File -FilePath "src/components/Navigation.tsx" -Encoding UTF8
Write-Host "Updated Navigation with mobile menu" -ForegroundColor Green

# Update converter page for better responsiveness
$converterPage = @'
'use client'

import { useState, useCallback } from 'react'
import { Upload, Download, Settings, Zap, CheckCircle, AlertCircle, Loader2, FileArchive, Shield } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import Navigation from '@/components/Navigation'

interface ConversionOptions {
  universal: boolean
  optimize: boolean
  sign: boolean
}

interface ConversionResult {
  success: boolean
  fileName: string
  fileSize: number
  downloadUrl: string
}

export default function ConverterPage() {
  const [file, setFile] = useState<File | null>(null)
  const [converting, setConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [options, setOptions] = useState<ConversionOptions>({
    universal: true,
    optimize: true,
    sign: false
  })

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const aabFile = acceptedFiles[0]
    if (aabFile && aabFile.name.endsWith('.aab')) {
      setFile(aabFile)
      setError(null)
      setResult(null)
    } else {
      setError('Please upload a valid .aab file')
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/octet-stream': ['.aab']
    },
    maxFiles: 1
  })

  const handleConvert = async () => {
    if (!file) return

    setConverting(true)
    setProgress(0)
    setError(null)

    try {
      const steps = [
        { progress: 20, message: 'Uploading file...' },
        { progress: 40, message: 'Extracting AAB...' },
        { progress: 60, message: 'Converting to APK...' },
        { progress: 80, message: options.optimize ? 'Optimizing APK...' : 'Finalizing...' },
        { progress: 100, message: 'Complete!' }
      ]

      for (const step of steps) {
        await new Promise(resolve => setTimeout(resolve, 800))
        setProgress(step.progress)
      }

      const mockResult: ConversionResult = {
        success: true,
        fileName: file.name.replace('.aab', '.apk'),
        fileSize: file.size * 0.8,
        downloadUrl: '#'
      }

      setResult(mockResult)
    } catch (err) {
      setError('Conversion failed. Please try again.')
    } finally {
      setConverting(false)
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const resetConverter = () => {
    setFile(null)
    setResult(null)
    setError(null)
    setProgress(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />

      <main className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Convert AAB to APK
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Upload your Android App Bundle and convert it to APK format instantly
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-8 mb-6 sm:mb-8">
            {!result ? (
              <>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all cursor-pointer ${
                    isDragActive
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    {file ? (
                      <>
                        <FileArchive className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 dark:text-blue-400 mb-4" />
                        <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2 break-all px-2">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {formatBytes(file.size)}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            resetConverter()
                          }}
                          className="mt-4 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                        >
                          Choose different file
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mb-4" />
                        <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {isDragActive ? 'Drop your AAB file here' : 'Drag & drop your AAB file here'}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          or click to browse
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                          Maximum file size: 100MB
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}

                {file && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-semibold dark:text-white flex items-center">
                        <Settings className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Conversion Options
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={options.universal}
                          onChange={(e) => setOptions({ ...options, universal: e.target.checked })}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-0.5 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="font-medium dark:text-white text-sm sm:text-base">Universal APK</p>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Generate a single APK that works on all devices
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={options.optimize}
                          onChange={(e) => setOptions({ ...options, optimize: e.target.checked })}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-0.5 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="font-medium dark:text-white text-sm sm:text-base">Optimize APK</p>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Use zipalign for better performance
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={options.sign}
                          onChange={(e) => setOptions({ ...options, sign: e.target.checked })}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-0.5 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="font-medium dark:text-white text-sm sm:text-base">Sign APK</p>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            Sign with debug keystore (for testing)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {file && (
                  <div className="mt-6">
                    <button
                      onClick={handleConvert}
                      disabled={converting}
                      className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all text-sm sm:text-base"
                    >
                      {converting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Converting... {progress}%</span>
                        </>
                      ) : (
                        <>
                          <Zap className="h-5 w-5" />
                          <span>Convert to APK</span>
                        </>
                      )}
                    </button>

                    {converting && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Conversion Successful!
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Your APK is ready to download
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-6 mb-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <div className="text-left w-full sm:w-auto">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">File Name</p>
                      <p className="font-medium dark:text-white text-sm sm:text-base break-all">{result.fileName}</p>
                    </div>
                    <div className="text-left sm:text-right w-full sm:w-auto">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">File Size</p>
                      <p className="font-medium dark:text-white text-sm sm:text-base">{formatBytes(result.fileSize)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="h-4 w-4 flex-shrink-0" />
                    <span>File will be deleted after 24 hours</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => alert('Download functionality will be implemented with backend')}
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download APK</span>
                  </button>

                  <button
                    onClick={resetConverter}
                    className="w-full py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 text-sm sm:text-base"
                  >
                    Convert Another File
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold dark:text-white mb-2 text-sm sm:text-base">Fast Conversion</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Convert your files in seconds
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold dark:text-white mb-2 text-sm sm:text-base">100% Secure</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Files are encrypted and auto-deleted
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 text-center">
              <Download className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold dark:text-white mb-2 text-sm sm:text-base">Easy Download</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                One-click download of your APK
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
'@

$converterPage | Out-File -FilePath "src/app/converter/page.tsx" -Encoding UTF8
Write-Host "Updated converter page for responsiveness" -ForegroundColor Green

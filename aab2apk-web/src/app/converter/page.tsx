'use client'

import { useState, useCallback } from 'react'
import { Upload, Download, Settings, Zap, CheckCircle, AlertCircle, Loader2, FileArchive, Shield } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/30 dark:bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Convert AAB to APK
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your Android App Bundle and convert it to APK format instantly
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-violet-200/50 dark:border-violet-700/50">
            {!result ? (
              <>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
                    isDragActive
                      ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-violet-400'
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    {file ? (
                      <>
                        <FileArchive className="h-16 w-16 text-violet-600 dark:text-violet-400 mb-4" />
                        <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
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
                          className="mt-4 text-sm text-violet-600 hover:text-violet-700 dark:text-violet-400"
                        >
                          Choose different file
                        </button>
                      </>
                    ) : (
                      <>
                        <Upload className="h-16 w-16 text-gray-400 mb-4" />
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <p className="text-red-600 dark:text-red-400">{error}</p>
                  </div>
                )}

                {file && (
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold dark:text-white flex items-center">
                        <Settings className="h-5 w-5 mr-2" />
                        Conversion Options
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={options.universal}
                          onChange={(e) => setOptions({ ...options, universal: e.target.checked })}
                          className="w-5 h-5 text-violet-600 rounded focus:ring-2 focus:ring-violet-500"
                        />
                        <div>
                          <p className="font-medium dark:text-white">Universal APK</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Generate a single APK that works on all devices
                          </p>
                        </div>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={options.optimize}
                          onChange={(e) => setOptions({ ...options, optimize: e.target.checked })}
                          className="w-5 h-5 text-violet-600 rounded focus:ring-2 focus:ring-violet-500"
                        />
                        <div>
                          <p className="font-medium dark:text-white">Optimize APK</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Use zipalign for better performance
                          </p>
                        </div>
                      </label>

                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={options.sign}
                          onChange={(e) => setOptions({ ...options, sign: e.target.checked })}
                          className="w-5 h-5 text-violet-600 rounded focus:ring-2 focus:ring-violet-500"
                        />
                        <div>
                          <p className="font-medium dark:text-white">Sign APK</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
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
                      className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all"
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
                            className="bg-gradient-to-r from-violet-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
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
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Conversion Successful!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your APK is ready to download
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <p className="text-sm text-gray-500 dark:text-gray-400">File Name</p>
                      <p className="font-medium dark:text-white">{result.fileName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">File Size</p>
                      <p className="font-medium dark:text-white">{formatBytes(result.fileSize)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>File will be deleted after 24 hours</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => alert('Download functionality will be implemented with backend')}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 flex items-center justify-center space-x-2 transition-all"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download APK</span>
                  </button>

                  <button
                    onClick={resetConverter}
                    className="w-full py-4 border-2 border-violet-300 dark:border-violet-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all"
                  >
                    Convert Another File
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold dark:text-white mb-2">Fast Conversion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Convert your files in seconds
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold dark:text-white mb-2">100% Secure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Files are encrypted and auto-deleted
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-violet-200/50 dark:border-violet-700/50">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold dark:text-white mb-2">Easy Download</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                One-click download of your APK
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

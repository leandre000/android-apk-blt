# AAB2APK Pro - Complete Web App File Generator
# Run this from the apk-builder directory

$appDir = "aab2apk-web"
cd $appDir

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  Creating Complete Web Application" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Function to create files
function New-AppFile {
    param([string]$Path, [string]$Content, [string]$Msg)
    $dir = Split-Path -Parent $Path
    if ($dir -and !(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
    $Content | Out-File -FilePath $Path -Encoding UTF8
    git add $Path
    git commit -m $Msg
    Write-Host "✓ $Msg" -ForegroundColor Green
}

# Utility functions
New-AppFile -Path "src/lib/utils.ts" -Msg "Add utility functions" -Content @'
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}
'@

# Converter page
New-AppFile -Path "src/app/converter/page.tsx" -Msg "Create converter page with file upload" -Content @'
"use client"

import { useState } from 'react'
import { Upload, Download, Settings, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ConverterPage() {
  const [file, setFile] = useState<File | null>(null)
  const [converting, setConverting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleConvert = async () => {
    if (!file) return
    setConverting(true)
    // Conversion logic here
    setTimeout(() => setConverting(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-900/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold dark:text-white">AAB2APK Pro</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">Convert AAB to APK</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
              <Upload className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <input
                type="file"
                accept=".aab"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {file ? file.name : "Drop your AAB file here or click to browse"}
                </span>
              </label>
            </div>

            {file && (
              <div className="mt-6">
                <button
                  onClick={handleConvert}
                  disabled={converting}
                  className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
                >
                  {converting ? "Converting..." : "Convert to APK"}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
'@

# Dashboard page
New-AppFile -Path "src/app/dashboard/page.tsx" -Msg "Create dashboard page" -Content @'
import { BarChart3, FileText, Clock, Download } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
            <div className="flex justify-between items-center border-b pb-4">
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
'@

# Docs page
New-AppFile -Path "src/app/docs/page.tsx" -Msg "Create documentation page" -Content @'
import { Book, Code, Terminal, Settings } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Documentation</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border dark:border-gray-700 rounded-lg p-6">
            <Book className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2 dark:text-white">Getting Started</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn how to convert your first AAB file to APK in minutes.
            </p>
          </div>
          
          <div className="border dark:border-gray-700 rounded-lg p-6">
            <Code className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2 dark:text-white">API Reference</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Complete API documentation for developers.
            </p>
          </div>
          
          <div className="border dark:border-gray-700 rounded-lg p-6">
            <Terminal className="h-12 w-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2 dark:text-white">CLI Usage</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Use AAB2APK Pro from the command line.
            </p>
          </div>
          
          <div className="border dark:border-gray-700 rounded-lg p-6">
            <Settings className="h-12 w-12 text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2 dark:text-white">Advanced Options</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Signing, optimization, and customization options.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
'@

# Vercel configuration
New-AppFile -Path "vercel.json" -Msg "Add Vercel deployment configuration" -Content @'
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
'@

# Environment variables example
New-AppFile -Path ".env.example" -Msg "Add environment variables example" -Content @'
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=AAB2APK Pro

# API Configuration
API_KEY=your_api_key_here
MAX_FILE_SIZE=104857600

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_AUTH=false
'@

# README for web app
New-AppFile -Path "README.md" -Msg "Update README with deployment instructions" -Content @'
# AAB2APK Pro - Web Application

Professional Android App Bundle to APK converter with a modern web interface.

## Features

- 🚀 Fast AAB to APK conversion
- 🎨 Modern, responsive UI
- 🌙 Dark mode support
- 📊 Conversion analytics dashboard
- 🔒 Secure file processing
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
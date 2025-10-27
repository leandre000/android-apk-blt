import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AAB2APK Pro - Professional Android Converter',
  description: 'Convert Android App Bundles to APK files with ease',
  keywords: ['AAB', 'APK', 'Android', 'Converter', 'App Bundle'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

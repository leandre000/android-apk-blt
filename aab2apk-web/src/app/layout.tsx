import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AAB2APK Pro - Professional Android App Bundle Converter",
  description: "Convert Android App Bundles (AAB) to APK files instantly. Fast, secure, and free. Supports universal APK, signing, and optimization.",
  keywords: ["AAB to APK", "Android App Bundle", "APK Converter", "Android", "App Bundle", "Universal APK"],
  authors: [{ name: "Shema Leandre" }],
  creator: "Shema Leandre",
  publisher: "AAB2APK Pro",
  openGraph: {
    title: "AAB2APK Pro - Professional Android App Bundle Converter",
    description: "Convert Android App Bundles to APK files with ease",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAB2APK Pro",
    description: "Professional Android App Bundle to APK Converter",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

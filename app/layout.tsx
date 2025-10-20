import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Hustle Muscle - Premium Auto Detailing in Wilmington, NC",
  description:
    "Professional mobile auto detailing in Wilmington, NC. Exterior, interior, ceramic coating, and paint correction services. Book now for premium results.",
  keywords: "auto detailing, car detailing, ceramic coating, paint correction, Wilmington NC",
  generator: "v0.app",
  openGraph: {
    title: "Hustle Muscle - Premium Auto Detailing",
    description: "Professional mobile auto detailing services in Wilmington, NC",
    type: "website",
    locale: "en_US",
    url: "https://hustlemuscle.com",
    siteName: "Hustle Muscle",
    images: [
      {
        url: "https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hustle Muscle Auto Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hustle Muscle - Premium Auto Detailing",
    description: "Professional mobile auto detailing in Wilmington, NC",
    images: ["https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg?w=1200&h=630&fit=crop"],
  },
  robots: "index, follow",
  authors: [{ name: "Hustle Muscle" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23EAC452'>💪</text></svg>",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://cdn.builder.io" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

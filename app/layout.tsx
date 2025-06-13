import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frogitude | Unity Development mit Gelassenheit",
  description:
    "Professionelle Unity-Entwicklung, XR, Games und 3D-Visualisierung. Softwareentwicklung, AR/VR, Prototyping, Beratung und individuelle Lösungen für Unternehmen und Startups. Unity Developer in Deutschland.",
  keywords: [
    "Unity Development",
    "Unity Entwickler",
    "XR Entwicklung",
    "AR",
    "VR",
    "3D Visualisierung",
    "Game Development",
    "Softwareentwicklung",
    "Prototyping",
    "Beratung",
    "Deutschland",
    "Unity Developer",
    "Frogitude",
    "Fred Newton Akdogan",
    "Erding",
    "Freelancer",
    "Indie Games",
    "HoloLens",
    "Augmented Reality",
    "Virtual Reality",
    "Mobile Games",
    "PC Games",
    "Unity3D",
    "C#",
    "Consulting",
    "Custom Solutions"
  ],
  generator: "v0.dev",
  openGraph: {
    title: "Frogitude | Unity Development mit Gelassenheit",
    description:
      "Unity-Entwicklung, XR, Games und 3D-Visualisierung. Professionelle Softwareentwicklung für Unternehmen und Startups. Unity Developer in Deutschland.",
    url: "https://frogitude.com/",
    siteName: "Frogitude",
    images: [
      {
        url: "/images/placeholder-logo.png",
        width: 512,
        height: 512,
        alt: "Frogitude Logo"
      }
    ],
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Frogitude | Unity Development mit Gelassenheit",
    description:
      "Unity-Entwicklung, XR, Games und 3D-Visualisierung. Professionelle Softwareentwicklung für Unternehmen und Startups.",
    images: ["/images/placeholder-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://frogitude.com/",
    languages: {
      "de": "https://frogitude.com/",
      "en": "https://frogitude.com/en"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

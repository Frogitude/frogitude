"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/context/language-context"

// Script-based implementation
const script = {
  init: () => {
    // Add any script-based functionality here
    const animateBubbles = () => {
      const bubbles = document.querySelectorAll(".footer-bubble")
      bubbles.forEach((bubble, index) => {
        const duration = 3 + Math.random() * 4
        const delay = index * 0.2

        const animation = bubble.animate(
          [{ transform: "translateY(0)" }, { transform: "translateY(-15px)" }, { transform: "translateY(0)" }],
          {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Number.POSITIVE_INFINITY,
            direction: "alternate",
            easing: "ease-in-out",
          },
        )

        return () => animation.cancel()
      })
    }

    // Run animations
    animateBubbles()
  },
}

export default function Footer() {
  const { t } = useLanguage()
  const legalLinks = [
    { name: t("imprint"), href: "/impressum" },
    { name: t("privacy"), href: "/datenschutz" },
    { name: t("terms"), href: "/agb" },
  ]

  // Run script on client-side
  if (typeof window !== "undefined") {
    setTimeout(() => script.init(), 100)
  }

  return (
    <footer className="bg-forest-green dark:bg-forest-green-800 text-white py-12 relative overflow-hidden" id="footer">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-forest-green-800 dark:bg-black/20 opacity-30"></div>

      {/* Lily pads */}
      <div className="absolute bottom-0 left-10 w-24 h-24">
        <Image src="/images/lily-pad.png" alt="Lily pad" width={100} height={100} className="opacity-20" />
      </div>
      <div className="absolute bottom-0 right-20 w-16 h-16">
        <Image src="/images/lily-pad.png" alt="Lily pad" width={64} height={64} className="opacity-20" />
      </div>

      {/* Bubbles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="footer-bubble absolute w-4 h-4 rounded-full border border-teal-300 dark:border-teal-700 opacity-30"
          style={{
            bottom: `${Math.random() * 40}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white dark:bg-forest-green rounded-full flex items-center justify-center">
                <span className="text-xl">🐸</span>
              </div>
              <h2 className="text-2xl font-bold">Frogitude</h2>
            </div>
            <p className="text-forest-green-200 dark:text-white/70 mb-6">{t("footerTagline")}</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/freddynewton"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:freddakdogan2@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
                <span className="sr-only">E-Mail</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("navigation")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#services"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                {t("services")}
              </Link>
              <Link
                href="#pricing"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                {t("pricing")}
              </Link>
              <Link
                href="#game"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                {t("meowdieval")}
              </Link>
              <Link
                href="#about"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                href="#about-frogitude"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                {t("whatIsFrogitude")}
              </Link>
              <Link
                href="#contact"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                {t("contact")}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("legal")}</h3>
            <nav className="flex flex-col space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <span className="text-sm text-forest-green-200 dark:text-white/70">{t("theme")}:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-forest-green-800 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-green-300 dark:text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Frogitude. {t("allRightsReserved")}
          </p>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-forest-green-200 dark:text-white/70 hover:text-white hover:bg-transparent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("scrollToTop")}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

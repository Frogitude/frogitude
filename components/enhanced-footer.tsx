"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { useEffect } from "react"

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  // Script-based animation
  useEffect(() => {
    const bubbles = document.querySelectorAll(".footer-bubble")
    bubbles.forEach((bubble, index) => {
      const duration = 3 + Math.random() * 4
      const delay = index * 0.2

      const animation = (bubble as HTMLElement).animate(
        [{ transform: "translateY(0)" }, { transform: "translateY(-15px)" }, { transform: "translateY(0)" }],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          iterations: Number.POSITIVE_INFINITY,
          direction: "alternate",
          easing: "ease-in-out",
        },
      )
    })
  }, [])

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-900 dark:bg-black/20 opacity-30"></div>

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
          className="footer-bubble absolute w-4 h-4 rounded-full border border-teal-300 opacity-30"
          style={{
            bottom: `${Math.random() * 40}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white dark:bg-teal-900 rounded-full flex items-center justify-center">
                <span className="text-xl">🐸</span>
              </div>
              <h2 className="text-2xl font-bold">Frogitude</h2>
            </div>
            <p className="text-gray-300 dark:text-teal-300 mt-2">{t("footerTagline")}</p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/freddynewton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transition-colors p-2 bg-gray-700 dark:bg-teal-900/30 rounded-full hover:bg-teal-900/50"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-300 transition-colors p-2 bg-gray-700 dark:bg-teal-900/30 rounded-full hover:bg-teal-900/50"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:info@frogitude.com"
                className="text-white hover:text-teal-300 transition-colors p-2 bg-gray-700 dark:bg-teal-900/30 rounded-full hover:bg-teal-900/50"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">E-Mail</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">{t("navigation")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="#game" className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors">
                  {t("meowdieval")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="#about-frogitude"
                  className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors"
                >
                  {t("whatIsFrogitude")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">{t("legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors">
                  {t("imprint")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">{t("contact")}</h3>
            <address className="not-italic">
              <p className="text-gray-300 dark:text-teal-300">Fred Newton</p>
              <p className="text-gray-300 dark:text-teal-300">Erding, Deutschland</p>
              <a
                href="mailto:info@frogitude.com"
                className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors block mt-2"
              >
                info@frogitude.com
              </a>
              <a
                href="tel:+4917662031322"
                className="text-gray-300 dark:text-teal-300 hover:text-white transition-colors block mt-1"
              >
                +49 176 62031322
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-teal-900/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-teal-400/70 text-sm">
            © {currentYear} Frogitude. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

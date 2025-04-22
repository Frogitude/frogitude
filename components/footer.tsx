"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Footer() {
  const legalLinks = [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ]

  return (
    <footer className="bg-forest-green dark:bg-forest-green-800 text-white py-12 relative overflow-hidden">
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
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full border border-teal-300 dark:border-teal-700 opacity-30"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            bottom: `${Math.random() * 40}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
        ></motion.div>
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
            <p className="text-forest-green-200 dark:text-white/70 mb-6">
              Unity-Entwicklung mit Gelassenheit und Expertise. Spezialisiert auf Games, XR und 3D-Visualisierungen.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
                href="https://github.com/freddynewton"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
                href="mailto:freddakdogan2@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
                <span className="sr-only">E-Mail</span>
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#services"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                Dienstleistungen
              </Link>
              <Link
                href="#pricing"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                Preise
              </Link>
              <Link
                href="#game"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                Meowdieval Kingdom
              </Link>
              <Link
                href="#about"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                Über mich
              </Link>
              <Link
                href="#about-frogitude"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                Was ist Frogitude?
              </Link>
              <Link
                href="#contact"
                className="text-forest-green-200 dark:text-white/70 hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Rechtliches</h3>
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
              <span className="text-sm text-forest-green-200 dark:text-white/70">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-forest-green-800 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-forest-green-300 dark:text-white/50 text-sm mb-4 md:mb-0">
            © 2025 Frogitude. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-forest-green-200 dark:text-white/70 hover:text-white hover:bg-transparent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Nach oben scrollen
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-forest-green-800/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-12 h-12 bg-mint-100 dark:bg-teal-800 rounded-full flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl group-hover:animate-bounce">🐸</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-forest-green dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                Frogitude
              </span>
              <span className="text-xs text-forest-green/70 dark:text-white/70">Unity Development</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-forest-green dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group"
            >
              Dienstleistungen
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#pricing"
              className="text-forest-green dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group"
            >
              Preise
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-forest-green dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group"
            >
              Über mich
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-forest-green dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 transition-transform hover:scale-105"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Projekt anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-forest-green dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-4 bg-white dark:bg-forest-green-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col gap-2">
                <Link
                  href="#services"
                  className="px-4 py-3 text-forest-green dark:text-white hover:bg-mint-50 dark:hover:bg-forest-green/30 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dienstleistungen
                </Link>
                <Link
                  href="#pricing"
                  className="px-4 py-3 text-forest-green dark:text-white hover:bg-mint-50 dark:hover:bg-forest-green/30 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preise
                </Link>
                <Link
                  href="#about"
                  className="px-4 py-3 text-forest-green dark:text-white hover:bg-mint-50 dark:hover:bg-forest-green/30 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Über mich
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-3 text-forest-green dark:text-white hover:bg-mint-50 dark:hover:bg-forest-green/30 rounded-lg mx-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
                <div className="px-4 pt-2">
                  <Button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Projekt anfragen
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

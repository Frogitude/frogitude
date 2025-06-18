"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

const techLogos = [
  {
    src: "/images/unity-logo.png",
    alt: "Unity Logo",
    className: "bottom-4 right-4",
    size: 60,
  },
  {
    src: "/images/blender-logo.png",
    alt: "Blender Logo",
    className: "top-4 left-4",
    size: 55,
  },
  {
    src: "/images/godot-logo.png",
    alt: "Godot Logo",
    className: "top-10 right-0",
    size: 50,
  },
  {
    src: "/images/csharp-logo.png",
    alt: "C# Logo",
    className: "top-1/2 -translate-y-1/2 left-0",
    size: 45,
  },
  {
    src: "/images/python-logo.png",
    alt: "Python Logo",
    className: "bottom-10 left-0",
    size: 45,
  },
  {
    src: "/images/aseprite-logo.png",
    alt: "Aseprite Logo",
    className: "bottom-1/2 translate-y-1/2 right-0",
    size: 50,
  },
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative bg-mint-50 dark:bg-forest-green-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 dark:bg-teal-900/30 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-mint-100 dark:bg-teal-800/50 rounded-full opacity-40"></div>

      {/* Animated bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 rounded-full border border-teal-300 dark:border-teal-700 opacity-60"
          initial={{ y: 0 }}
          animate={{
            y: [0, -15, 0],
            x: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex flex-col justify-center items-center md:flex-row md:justify-between gap-12 pt-28 pb-20 md:pt-0 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-6/12 lg:w-7/12 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              {t("unityDevStudio")}
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-forest-green dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t("unityDevelopment")}
              <motion.span
                className="block text-teal-600 dark:text-teal-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("withFrogitude")}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-forest-green/80 dark:text-white/80 mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-6 transition-all hover:scale-105"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("requestProject")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-forest-green dark:border-white text-forest-green dark:text-white hover:bg-forest-green/10 dark:hover:bg-white/10 rounded-full px-6 transition-all hover:scale-105"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("discoverServices")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-xs sm:max-w-sm md:w-6/12 lg:w-5/12 flex justify-center"
          >
            <div className="relative w-full">
              <motion.div
                className="relative aspect-square"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/small-frog.png"
                  alt="Unity Entwickler Frosch Maskottchen – XR, Games, 3D Visualisierung, Freelancer Deutschland"
                  fill
                  className="object-contain"
                />
              </motion.div>
              {techLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className={`absolute bg-mint-100 dark:bg-teal-900 rounded-full p-3 shadow-lg ${logo.className}`}
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250, damping: 10 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.size}
                    height={logo.size}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 1.5, duration: 2, repeat: Number.POSITIVE_INFINITY },
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-white/20 md:hidden"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="h-6 w-6 text-forest-green dark:text-white" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

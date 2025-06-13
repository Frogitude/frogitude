"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative bg-mint-50 dark:bg-forest-green-800 overflow-hidden min-h-screen flex items-center">
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

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
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
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-forest-green dark:text-white"
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
              className="text-lg md:text-xl text-forest-green/80 dark:text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {t("heroDescription")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
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
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="relative aspect-square scale-125"
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
              <motion.div
                className="absolute bottom-4 right-4 bg-mint-100 dark:bg-teal-900 rounded-full p-3 shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/images/unity-logo.png"
                  alt="Unity Logo – Softwareentwicklung, XR, Games, Deutschland"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
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
            className="rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-white/20"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="h-6 w-6 text-forest-green dark:text-white" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

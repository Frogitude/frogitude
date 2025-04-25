"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function GameShowcase() {
  const { t } = useLanguage()

  // Predefined positions and animation durations for bubbles
  const bubbleConfigs = [
    { top: "20%", right: "10%", duration: 4 },
    { top: "30%", right: "15%", duration: 5 },
    { top: "40%", right: "20%", duration: 6 },
    { top: "50%", right: "5%", duration: 4.5 },
    { top: "60%", right: "12%", duration: 5.5 },
  ]

  return (
    <section id="game" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative lily pads */}
      <div className="absolute left-0 bottom-0 w-40 h-40">
        <Image src="/images/lily-pad.png" alt={t("lilyPadAlt")} width={160} height={160} className="opacity-30" />
      </div>
      <div className="absolute right-10 top-20 w-24 h-24">
        <Image src="/images/lily-pad.png" alt={t("lilyPadAlt")} width={100} height={100} className="opacity-30" />
      </div>

      {/* Bubbles */}
      {bubbleConfigs.map((config, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full border border-teal-300 dark:border-teal-700 opacity-60"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: config.top,
            right: config.right,
          }}
        ></motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("indieGameDev")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{t("meowdievalKingdom")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("meowdievalDesc")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🐱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t("comingSoon")}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{t("gameDescription")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

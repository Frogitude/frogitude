"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GameShowcase() {
  return (
    <section id="game" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative lily pads */}
      <div className="absolute left-0 bottom-0 w-40 h-40">
        <Image src="/images/lily-pad.png" alt="Lily pad" width={160} height={160} className="opacity-30" />
      </div>
      <div className="absolute right-10 top-20 w-24 h-24">
        <Image src="/images/lily-pad.png" alt="Lily pad" width={100} height={100} className="opacity-30" />
      </div>

      {/* Bubbles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full border border-teal-300 dark:border-teal-700 opacity-60"
          style={{
            top: `${20 + Math.random() * 60}%`,
            right: `${Math.random() * 20}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Indie Game Development
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Meowdieval Kingdom</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ein gemütliches 3D-Idle-Strategiespiel im mittelalterlichen Katzensetting.
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Neue Informationen folgen bald!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Wir arbeiten fleißig an unserem gemütlichen Katzenabenteuer. Bleiben Sie dran für Updates und Neuigkeiten
              zu Meowdieval Kingdom.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              Für Updates anmelden
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

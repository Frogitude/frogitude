"use client"

import { motion } from "framer-motion"
import { Construction } from "lucide-react"

export default function UnderConstruction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded-r-lg mb-8"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Construction className="h-5 w-5 text-orange-500" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            Diese Sektion befindet sich noch im Aufbau und wird in Kürze verfügbar sein.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context"
import { useRef } from "react"
import { FaPlay } from "react-icons/fa"

export default function FrogitudeDefinition() {
  const { t } = useLanguage()
  const audioRef = useRef<HTMLAudioElement>(null)

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  // Predefined positions and animation durations for bubbles
  const bubbleConfigs = [
    { top: "20%", left: "10%", duration: 4 },
    { top: "30%", left: "50%", duration: 5 },
    { top: "40%", left: "70%", duration: 6 },
    { top: "50%", left: "30%", duration: 4.5 },
    { top: "60%", left: "80%", duration: 5.5 },
  ]

  return (
    <section id="about-frogitude" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>

      {/* Bubbles */}
      {bubbleConfigs.map((config, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 rounded-full border border-teal-300 dark:border-teal-700 opacity-60"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            top: config.top,
            left: config.left,
          }}
        ></motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("definition")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{t("whatIsFrogitude")}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden"
          >
            {/* Full-size image */}
            <div className="relative w-full h-64 md:h-96 bg-teal-600">
              <motion.div className="w-full h-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}>
                <Image
                  src="/images/frog-definition.png"
                  alt="Ein entspannter Frosch mit Brille"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Title and subtitle directly below the image */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700 bg-teal-50 dark:bg-teal-900/20 relative">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Frogitude</h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-0">
              {t("frogitudeNoun")}
              <br />
              <span className="block text-sm">
              <strong>UK:</strong> {t("frogitudePronunciationUK")} <strong>US:</strong> {t("frogitudePronunciationUS")}
              </span>
              </p>
              {/* Play Sound Button */}
                <button
                onClick={playSound}
                className="absolute top-1/2 right-10 transform -translate-y-1/2 p-8 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                aria-label={t("playSound")}
                >
                <FaPlay size={32} />
                </button>
              <audio ref={audioRef} src="sounds/frogitude.mp3">
              Your browser does not support the audio element.
              </audio>
            </div>

            {/* Bedeutung directly below */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{t("meaning")}</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
                <li className="pl-2">
                  <span className="font-medium">{t("colloquial")}</span> {t("frogitudeMeaning1")}
                </li>
                <li className="pl-2">
                  <span className="font-medium">{t("netJargon")}</span> {t("frogitudeMeaning2")}
                </li>
              </ol>
            </div>

            {/* Collapsible Content for the rest */}
            <div className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="erklaerung" className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="py-4 text-xl font-semibold text-gray-800 dark:text-white hover:no-underline">
              {t("explanation")}
              </AccordionTrigger>
              <AccordionContent>
              <p className="text-gray-600 dark:text-gray-300">{t("frogitudeExplanation")}</p>
              </AccordionContent>
            </AccordionItem>
                <AccordionItem value="herkunft" className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="py-4 text-xl font-semibold text-gray-800 dark:text-white hover:no-underline">
                    {t("origin")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-300">{t("frogitudeOrigin")}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="beispiele" className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="py-4 text-xl font-semibold text-gray-800 dark:text-white hover:no-underline">
                    {t("examples")}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>– {t("frogitudeExample1")}</li>
                      <li>– {t("frogitudeExample2")}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-teal-50 dark:bg-gray-700 p-6 rounded-3xl border border-teal-100 dark:border-gray-600 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{t("frogitudeInUnity")}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t("frogitudeInUnityDescription")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

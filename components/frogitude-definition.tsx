"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"

export default function FrogitudeDefinition() {
  return (
    <section id="about-frogitude" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>

      {/* Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-5 h-5 rounded-full border border-teal-300 dark:border-teal-700 opacity-60"
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
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 80}%`,
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
            Definition
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Was ist Frogitude?</h2>
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
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/frog-definition.png"
                  alt="Ein entspannter Frosch mit Brille"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Title and subtitle directly below the image */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700 bg-teal-50 dark:bg-teal-900/20">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Frogitude</h3>
              <p className="text-gray-600 dark:text-gray-300 italic mb-0">
                Substantiv, feminin [die]
                <br />
                Aussprache: [ˈfrɔgɪˌtuːd], auch [ˈfroʊ̯gɪˌtjuːd]
              </p>
            </div>

            {/* Bedeutung directly below */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Bedeutung</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300 pl-4">
                <li className="pl-2">
                  <span className="font-medium">(umgangssprachlich, scherzhaft)</span> eine gelassene, eigenwillige
                  und humorvolle Lebenseinstellung, die sich an der vermeintlichen Wesensart eines Frosches
                  orientiert; Mischung aus Ruhe, Spontanität und charmantem Desinteresse an gesellschaftlichen
                  Konventionen.
                </li>
                <li className="pl-2">
                  <span className="font-medium">(Netzjargon)</span> Haltung, bei der man mit kindlicher Neugier,
                  Selbstironie und einer Prise Chaos durchs Leben geht; das Leben mit „Frosch-Vibes" leben.
                </li>
              </ol>
            </div>

            {/* Collapsible Content for the rest */}
            <div className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="herkunft" className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="py-4 text-xl font-semibold text-gray-800 dark:text-white hover:no-underline">
                    Herkunft
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kofferwort aus dem englischen frog (Frosch) und attitude (Einstellung, Haltung); entstanden im
                      Internetkultur-Kontext und populär in Meme-Communities.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="beispiele" className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="py-4 text-xl font-semibold text-gray-800 dark:text-white hover:no-underline">
                    Beispiele
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li>
                        – Seit sie ihren Job gekündigt hat, lebt sie mit echter Frogitude – barfuß im Garten und völlig
                        entspannt.
                      </li>
                      <li>– Er hat so eine Frogitude, nichts bringt ihn aus der Ruhe.</li>
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
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Frogitude in der Unity-Entwicklung
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Bei uns bedeutet Frogitude eine entspannte, aber professionelle Herangehensweise an die Unity-Entwicklung.
              Wir kombinieren technische Expertise mit einer gelassenen Arbeitsweise, die Raum für Kreativität und
              Innovation lässt. Wie ein Frosch auf seinem Seerosenblatt sind wir ruhig und fokussiert, aber immer
              bereit, spontan auf neue Herausforderungen zu reagieren.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

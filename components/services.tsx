"use client"

import { motion } from "framer-motion"
import { Gamepad2, Glasses, CuboidIcon as Cube } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Gamepad2 className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "Game Development",
      description:
        "Entwicklung von Spielen für PC, Mobile und Konsolen mit Unity. Von der Konzeption bis zum fertigen Produkt.",
      image: "/images/service-game.png",
    },
    {
      icon: <Glasses className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "XR Development",
      description: "Professionelle Entwicklung von AR- und VR-Anwendungen für verschiedene Plattformen und Endgeräte.",
      image: "/images/service-xr.png",
    },
    {
      icon: <Cube className="h-10 w-10 text-teal-600 dark:text-teal-400" />,
      title: "3D Visualisierung",
      description: "Erstellung interaktiver 3D-Visualisierungen für Architektur, Produktpräsentation und Marketing.",
      image: "/images/service-3d.png",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-40 w-40 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full opacity-30 rotate-45"></div>
      <div className="absolute -right-20 bottom-20 w-40 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full opacity-30 -rotate-45"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Meine Dienstleistungen
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Was ich anbiete</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Spezialisiert auf Unity-basierte Entwicklung biete ich maßgeschneiderte Lösungen mit einer entspannten und
            professionellen Herangehensweise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-md"
        >
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-orange-200 dark:bg-orange-900/30 rounded-full opacity-50"></div>
          <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-teal-200 dark:bg-teal-900/30 rounded-full opacity-50"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Warum mit mir zusammenarbeiten?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🧩</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Technische Expertise</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Fundierte Kenntnisse in C#, Clean Code und Performance-Optimierung für Unity-Projekte.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Kreative Lösungen</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Innovative Ansätze für komplexe Probleme und benutzerorientierte Entwicklung.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-md"
              >
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Entspannte Zusammenarbeit</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Transparente Kommunikation, agile Arbeitsweise und termingerechte Lieferung.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

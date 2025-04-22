"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "hourly">("hourly")

  const calculateSavings = (originalPrice: string, price: string) => {
    const original = parseFloat(originalPrice.replace("€", ""))
    const current = parseFloat(price.replace("€", ""))
    if (!original || !current || original <= current) return null
    return Math.round(((original - current) / original) * 100)
  }

  const hourlyRates = [
    {
      name: "Standard",
      description: "Unity Development",
      price: "50€",
      originalPrice: "60€",
      features: [
        "Unity & C# Entwicklung",
        "2D/3D Game Development",
        "Prototyping",
        "Optimierung bestehender Projekte",
        "Performance-Optimierung",
        "Unbegrenzte Revisionen (Bonus)",
      ],
      recommended: false,
      color: "bg-teal-100 dark:bg-teal-900/50",
      textColor: "text-gray-800 dark:text-white",
      buttonVariant: "default" as const,
    },
    {
      name: "Mixed Reality",
      description: "AR/VR Development",
      price: "60€",
      originalPrice: "75€",
      features: [
        "Alles aus Standard",
        "AR/VR Entwicklung",
        "HoloLens/Quest Entwicklung",
        "3D-Interaktionen",
        "XR Optimierung",
        "Unbegrenzte Revisionen (Bonus)",
      ],
      recommended: true,
      color: "bg-teal-600 dark:bg-teal-700",
      textColor: "text-white",
      buttonVariant: "default" as const,
    },
    {
      name: "Multiplayer",
      description: "Netzwerk & Multiplayer",
      price: "65€",
      originalPrice: "80€",
      features: [
        "Alles aus Standard",
        "Multiplayer-Implementierung",
        "Netzwerk-Architektur",
        "Server-Client Kommunikation",
        "Lobby-Systeme",
        "Unbegrenzte Revisionen (Bonus)",
      ],
      recommended: false,
      color: "bg-orange-500 dark:bg-orange-700",
      textColor: "text-white",
      buttonVariant: "default" as const,
    },
  ]

  const monthlyRates = [
    {
      name: "Teilzeit",
      description: "80 Stunden pro Monat",
      price: "3.800€",
      originalPrice: "4.800€",
      features: [
        "80 Stunden pro Monat",
        "Wöchentliche Updates",
        "Direkter Kommunikationskanal",
        "Flexible Zeiteinteilung",
        "Unbegrenzte Revisionen",
      ],
      recommended: false,
      color: "bg-teal-100 dark:bg-teal-900/50",
      textColor: "text-gray-800 dark:text-white",
      buttonVariant: "outline" as const,
    },
    {
      name: "Vollzeit",
      description: "160 Stunden pro Monat",
      price: "7.200€",
      originalPrice: "9.600€",
      features: [
        "160 Stunden pro Monat",
        "Tägliche Updates",
        "Direkter Kommunikationskanal",
        "Volle Verfügbarkeit",
        "Unbegrenzte Revisionen",
        "Priorisierte Bearbeitung",
      ],
      recommended: true,
      color: "bg-teal-600 dark:bg-teal-700",
      textColor: "text-white",
      buttonVariant: "default" as const,
    },
    {
      name: "Projekt",
      description: "Individuelle Projektbasis",
      price: "Individuell",
      originalPrice: "",
      features: [
        "Maßgeschneiderte Lösung",
        "Fester Projektpreis",
        "Klare Meilensteine",
        "Detaillierte Projektplanung",
        "Unbegrenzte Revisionen",
        "Nachbetreuung",
      ],
      recommended: false,
      color: "bg-orange-500 dark:bg-orange-700",
      textColor: "text-white",
      buttonVariant: "default" as const,
    },
  ]

  const pricingPlans = billingCycle === "hourly" ? hourlyRates : monthlyRates

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Preise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Transparente Preisgestaltung
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Wählen Sie das passende Modell für Ihr Projekt oder kontaktieren Sie mich für ein individuelles Angebot.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-md">
            <div className="flex">
              <button
                onClick={() => setBillingCycle("hourly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "hourly"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Stundensatz
              </button>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                Projektbasiert
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const savings = calculateSavings(plan.originalPrice, plan.price)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className={`rounded-3xl overflow-hidden shadow-lg ${plan.recommended ? "md:-mt-4 md:mb-4" : ""}`}
              >
                <div className={`${plan.color} p-6 relative`}>
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Empfohlen
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold ${plan.textColor}`}>{plan.name}</h3>
                  <p className={`${plan.textColor} opacity-80 mt-1`}>{plan.description}</p>
                  <div className="mt-4">
                    <span className={`text-3xl font-bold ${plan.textColor}`}>{plan.price}</span>
                    {plan.originalPrice && (
                      <span className={`${plan.textColor} opacity-70 ml-2 line-through text-sm`}>
                        {plan.originalPrice}
                      </span>
                    )}
                    {savings && (
                      <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">
                        ({savings}% Ersparnis)
                      </span>
                    )}
                    <span className={`${plan.textColor} opacity-70 ml-1`}>
                      {billingCycle === "hourly" ? "/Stunde" : billingCycle === "monthly" ? "/Monat" : ""}
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 flex flex-col min-h-[200px]">
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full rounded-full ${
                      plan.buttonVariant === "outline"
                        ? "border-teal-600 text-teal-700 dark:border-teal-500 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                        : "bg-teal-600 text-white hover:bg-teal-700"
                    }`}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Anfrage starten
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-md text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Offen für alternative Modelle</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Jedes Projekt ist einzigartig. Ich bin offen für verschiedene Zusammenarbeitsmodelle und erstelle gerne ein
            maßgeschneidertes Angebot, das genau auf Ihre Anforderungen zugeschnitten ist.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg transition-transform hover:scale-105"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Individuelles Angebot anfragen
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Erhalten Sie ein maßgeschneidertes Angebot für Ihr Projekt</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  )
}

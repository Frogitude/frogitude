"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "hourly">("hourly")
  const { t } = useLanguage()

  const calculateSavings = (originalPrice: string, price: string) => {
    const original = Number.parseFloat(originalPrice.replace("€", ""))
    const current = Number.parseFloat(price.replace("€", ""))
    if (!original || !current || original <= current) return null
    return Math.round(((original - current) / original) * 100)
  }

  const hourlyRates = [
    {
      name: t("standard"),
      description: t("unityDevelopment"),
      price: "50€",
      originalPrice: "60€",
      features: [
        t("unityCSharpDev"),
        t("2d3dGameDev"),
        t("prototyping"),
        t("existingProjectOptimization"),
        t("performanceOptimization"),
        t("unlimitedRevisions"),
      ],
      recommended: false,
      color: "from-teal-400 to-teal-600",
      textColor: "text-white",
      buttonVariant: "outline" as const,
    },
    {
      name: t("mixedReality"),
      description: t("arVrDevelopment"),
      price: "60€",
      originalPrice: "75€",
      features: [
        t("allFromStandard"),
        t("arVrDev"),
        t("hololensQuestDev"),
        t("3dInteractions"),
        t("xrOptimization"),
        t("unlimitedRevisions"),
      ],
      recommended: true,
      color: "from-teal-500 to-teal-700",
      textColor: "text-white",
      buttonVariant: "default" as const,
    },
    {
      name: t("multiplayer"),
      description: t("networkMultiplayer"),
      price: "65€",
      originalPrice: "80€",
      features: [
        t("allFromStandard"),
        t("multiplayerImplementation"),
        t("networkArchitecture"),
        t("serverClientCommunication"),
        t("lobbySystems"),
        t("unlimitedRevisions"),
      ],
      recommended: false,
      color: "from-orange-400 to-orange-600",
      textColor: "text-white",
      buttonVariant: "outline" as const,
    },
  ]

  const monthlyRates = [
    {
      name: t("partTime"),
      description: t("hoursPerMonth", { hours: 80 }),
      price: "3.800€",
      originalPrice: "4.800€",
      features: [
        t("hoursPerMonth", { hours: 80 }),
        t("weeklyUpdates"),
        t("directCommunication"),
        t("flexibleScheduling"),
        t("unlimitedRevisions"),
      ],
      recommended: false,
      color: "from-teal-400 to-teal-600",
      textColor: "text-white",
      buttonVariant: "outline" as const,
    },
    {
      name: t("fullTime"),
      description: t("hoursPerMonth", { hours: 160 }),
      price: "7.200€",
      originalPrice: "9.600€",
      features: [
        t("hoursPerMonth", { hours: 160 }),
        t("dailyUpdates"),
        t("directCommunication"),
        t("fullAvailability"),
        t("unlimitedRevisions"),
        t("prioritizedProcessing"),
      ],
      recommended: true,
      color: "from-teal-500 to-teal-700",
      textColor: "text-white",
      buttonVariant: "default" as const,
    },
    {
      name: t("project"),
      description: t("individualProjectBasis"),
      price: t("individual"),
      originalPrice: "",
      features: [
        t("customSolution"),
        t("fixedProjectPrice"),
        t("clearMilestones"),
        t("detailedProjectPlanning"),
        t("unlimitedRevisions"),
        t("aftercare"),
      ],
      recommended: false,
      color: "from-orange-400 to-orange-600",
      textColor: "text-white",
      buttonVariant: "outline" as const,
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
            {t("pricing")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {t("transparentPricing")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("choosePricingModel")}</p>
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
                {t("hourlyRate")}
              </button>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {t("projectBased")}
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
                <div className={`bg-gradient-to-br ${plan.color} p-6 relative`}>
                  {plan.recommended && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 rounded-full p-1">
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold ${plan.textColor}`}>{plan.name}</h3>
                  <p className={`${plan.textColor} opacity-90 mt-1`}>{plan.description}</p>
                  <div className="mt-4">
                    <span className={`text-3xl font-bold ${plan.textColor}`}>{plan.price}</span>
                    {plan.originalPrice && (
                      <span className={`${plan.textColor} opacity-70 ml-2 line-through text-sm`}>
                        {plan.originalPrice}
                      </span>
                    )}
                    {savings && (
                      <span className="ml-2 text-sm font-medium bg-white/20 px-2 py-0.5 rounded-full">-{savings}%</span>
                    )}
                    <span className={`${plan.textColor} opacity-70 ml-1`}>
                      {billingCycle === "hourly" ? t("perHour") : billingCycle === "monthly" ? t("perMonth") : ""}
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 flex flex-col min-h-[300px]">
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
                    {t("startInquiry")}
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
          className="mt-16 bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-3xl shadow-md text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">{t("openToAlternativeModels")}</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">{t("uniqueProjectDescription")}</p>
          <Button
            className="bg-white text-teal-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg transition-transform hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("requestCustomOffer")}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

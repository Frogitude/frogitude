"use client"

import EnhancedHeader from "@/components/enhanced-header"
import EnhancedFooter from "@/components/enhanced-footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/context/language-context"

export default function AGB() {
  const { t } = useLanguage()
  return (
    <main className="min-h-screen bg-mint-50 dark:bg-gray-900">
      <EnhancedHeader />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-950 rounded-3xl shadow-md p-8 md:p-12">
          <Link
            href="/"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("navigation")}
          </Link>

          <h1 className="text-3xl font-bold mb-8 text-forest-green dark:text-white">{t("termsTitle")}</h1>

          <article className="prose prose-green dark:prose-invert max-w-none">
            <section className="mb-6">
              <h2>{t("termsIntro")}</h2>
            </section>
            <hr />
            <section className="mb-6">
              <h3>{t("termsScope")}</h3>
              <h3>{t("termsConclusion")}</h3>
              <h3>{t("termsServices")}</h3>
              <h3>{t("termsPayment")}</h3>
              <h3>{t("termsLiability")}</h3>
              <h3>{t("termsFinal")}</h3>
            </section>
          </article>
        </div>
      </div>

      <EnhancedFooter />
    </main>
  )
}

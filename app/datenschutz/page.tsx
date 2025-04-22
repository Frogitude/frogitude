import EnhancedHeader from "@/components/enhanced-header"
import EnhancedFooter from "@/components/enhanced-footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Datenschutz() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="min-h-screen bg-mint-50 dark:bg-forest-green-800">
        <EnhancedHeader />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto bg-white dark:bg-forest-green rounded-3xl shadow-md p-8 md:p-12">
            <Link
              href="/"
              className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Link>

            <h1 className="text-3xl font-bold mb-8 text-forest-green dark:text-white">Datenschutzerklärung</h1>

            <div className="prose prose-green dark:prose-invert max-w-none">
              <p>Datenschutz-Inhalte hier einfügen...</p>
            </div>
          </div>
        </div>

        <EnhancedFooter />
      </main>
    </ThemeProvider>
  )
}

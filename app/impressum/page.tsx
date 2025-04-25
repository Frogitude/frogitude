import EnhancedHeader from "@/components/enhanced-header"
import EnhancedFooter from "@/components/enhanced-footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Footer from "@/components/footer"

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
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

          <h1 className="text-3xl font-bold mb-8 text-forest-green dark:text-white">Impressum</h1>

          <div className="prose prose-green dark:prose-invert max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Fred Newton Akdogan
              <br />
              Frogitude
              <br />
              Franz-Brombach-Str. 8a
              <br />
              85435 Erding
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: +49 176 62031322
              <br />
              E-Mail: info@frogitude.com
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE123456789
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Fred Newton Akdogan
              <br />
              Musterstraße 123
              <br />
              85435 Erding
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </div>
      </div>

      <EnhancedFooter />
    </main>
  )
}

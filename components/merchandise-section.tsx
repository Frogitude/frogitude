import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function MerchandiseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl p-8 md:p-12 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Bleib im Tümpel mit Frogitude-News!</h2>
            <p className="text-lg text-green-700 mb-8">
              Melde dich für unseren Newsletter an und erhalte regelmäßig Tipps für mehr Frogitude im Alltag, exklusive
              Merchandise-Angebote und Einladungen zu Frogitude-Events.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="bg-white border-green-200 focus:border-green-500"
              />
              <Button className="bg-green-700 hover:bg-green-800 text-white whitespace-nowrap">
                <Mail className="mr-2 h-4 w-4" />
                Abonnieren
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Frogitude-Merch entdecken
              </Button>
              <Button variant="ghost" className="text-green-700 hover:bg-green-50">
                Mehr über Frogitude erfahren
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative w-full aspect-square mb-2">
                <Image src="/images/frogitude-shirt.png" alt="Frogitude T-Shirt" fill className="object-contain" />
              </div>
              <p className="text-center text-gray-800 font-medium">Frogitude T-Shirt</p>
              <p className="text-center text-green-600">24,99 €</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative w-full aspect-square mb-2">
                <Image src="/images/frogitude-mug.png" alt="Frogitude Tasse" fill className="object-contain" />
              </div>
              <p className="text-center text-gray-800 font-medium">Frogitude Tasse</p>
              <p className="text-center text-green-600">14,99 €</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative w-full aspect-square mb-2">
                <Image
                  src="/images/frogitude-stickers.png"
                  alt="Frogitude Sticker-Set"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-800 font-medium">Sticker-Set</p>
              <p className="text-center text-green-600">9,99 €</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative w-full aspect-square mb-2">
                <Image src="/images/frogitude-book.png" alt="Das Frogitude-Handbuch" fill className="object-contain" />
              </div>
              <p className="text-center text-gray-800 font-medium">Frogitude-Handbuch</p>
              <p className="text-center text-green-600">19,99 €</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

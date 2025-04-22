"use client"

import Image from "next/image"
import { ArrowDownCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  playfairFont: string
}

export default function HeroSection({ playfairFont }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-40"></div>

      {/* Bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 rounded-full border border-teal-300 opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className={`${playfairFont} text-5xl md:text-7xl font-bold text-green-800 mb-6`}>Frogitude</h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8">
              Lebe mit Frosch-Vibes – gelassen, neugierig, eigenwillig.
            </p>
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => document.getElementById("frogitude-test")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entdecke dein Frogitude-Level
              <ArrowDownCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/frogitude-hero.png"
                alt="Ein entspannter Frosch auf einem Seerosenblatt"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-30"></div>

      {/* Small frog */}
      <div className="absolute bottom-10 left-10 w-20 h-20">
        <Image src="/images/small-frog.png" alt="Kleiner Frosch" width={80} height={80} className="object-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-mint-100 text-forest-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Kontakt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-green">Lass uns sprechen</h2>
          <p className="text-lg text-forest-green/80 max-w-2xl mx-auto">
            Haben Sie ein Projekt oder eine Idee? Kontaktieren Sie mich für ein unverbindliches Gespräch.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-mint-50 p-6 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4 text-forest-green">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Mail className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-green">E-Mail</h4>
                    <a href="mailto:freddakdogan2@gmail.com" className="text-teal-600 hover:underline">
                      freddakdogan2@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Phone className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-green">Telefon</h4>
                    <a href="tel:+4917662031322" className="text-teal-600 hover:underline">
                      +49 176 62031322
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <MapPin className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-forest-green">Standort</h4>
                    <p className="text-forest-green/80">Erding, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-mint-50 p-6 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4 text-forest-green">Verfügbarkeit</h3>
              <p className="text-forest-green/80 mb-2">
                Ich bin aktuell für neue Projekte verfügbar und freue mich auf Ihre Anfrage.
              </p>
              <div className="bg-white text-teal-800 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                <span>Verfügbar für neue Projekte</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-mint-50 p-8 rounded-3xl shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-forest-green">Projekt anfragen</h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-forest-green">Nachricht gesendet!</h4>
                  <p className="text-forest-green/80">
                    Vielen Dank für Ihre Anfrage. Ich werde mich so schnell wie möglich bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-forest-green mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Ihr Name"
                        required
                        className="bg-white border-mint-200 rounded-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-forest-green mb-1">
                        E-Mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ihre E-Mail"
                        required
                        className="bg-white border-mint-200 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-forest-green mb-1">
                      Betreff
                    </label>
                    <Input
                      id="subject"
                      placeholder="Betreff Ihrer Anfrage"
                      required
                      className="bg-white border-mint-200 rounded-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-forest-green mb-1">
                      Nachricht
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage"
                      rows={5}
                      required
                      className="bg-white border-mint-200 rounded-2xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

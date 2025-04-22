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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-800/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-800/20 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Kontakt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Lass uns sprechen</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Haben Sie ein Projekt oder eine Idee? Kontaktieren Sie mich für ein unverbindliches Gespräch.
          </p>
        </div>

        {/* Projekt anfragen - Now at the top */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Projekt anfragen</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-teal-100 dark:bg-teal-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Nachricht gesendet!</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Vielen Dank für Ihre Anfrage. Ich werde mich so schnell wie möglich bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Ihr Name"
                      required
                      className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ihre E-Mail"
                      required
                      className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Betreff
                  </label>
                  <Input
                    id="subject"
                    placeholder="Betreff Ihrer Anfrage"
                    required
                    className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage"
                    rows={5}
                    required
                    className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-2xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600 text-white rounded-full"
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

        {/* Info cards below in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kontaktinformationen */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Kontaktinformationen</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-3">
          <div className="bg-teal-50 dark:bg-teal-900/30 p-2 rounded-full shadow-sm">
            <Mail className="h-5 w-5 text-teal-700 dark:text-teal-400" />
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-200">E-Mail</h4>
            <a href="mailto:freddakdogan2@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline">
              freddakdogan2@gmail.com
            </a>
          </div>
              </div>
              <div className="flex flex-col items-center gap-3">
          <div className="bg-teal-50 dark:bg-teal-900/30 p-2 rounded-full shadow-sm">
            <Phone className="h-5 w-5 text-teal-700 dark:text-teal-400" />
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-200">Telefon</h4>
            <a href="tel:+4917662031322" className="text-teal-600 dark:text-teal-400 hover:underline">
              +49 176 62031322
            </a>
          </div>
              </div>
              <div className="flex flex-col items-center gap-3">
          <div className="bg-teal-50 dark:bg-teal-900/30 p-2 rounded-full shadow-sm">
            <MapPin className="h-5 w-5 text-teal-700 dark:text-teal-400" />
          </div>
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-200">Standort</h4>
            <p className="text-gray-600 dark:text-gray-400">Erding, Deutschland</p>
          </div>
              </div>
            </div>
          </div>

          {/* Verfügbarkeit */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md text-center flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Verfügbarkeit</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Ich bin aktuell für neue Projekte verfügbar und freue mich auf Ihre Anfrage.
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-4 py-2 rounded-full inline-flex items-center shadow-sm">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 relative inline-flex">
          <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></span>
          <span className="relative inline-flex rounded-full w-3 h-3 bg-green-500"></span>
              </span>
              <span>Verfügbar für neue Projekte</span>
            </div>
          </div>

          {/* Standort */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Standort</h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-3">
          <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Erding,+Germany&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title="Standort Erding, Bavaria"
          ></iframe>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Mit Sitz in Erding bin ich für Projekte in ganz Deutschland und international verfügbar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

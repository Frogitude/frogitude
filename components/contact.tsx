"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-800/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-800/20 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("contactMe")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{t("letsTalk")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("contactDescription")}</p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto bg-teal-50 dark:bg-teal-900/30 p-8 rounded-3xl shadow-md">
          {/* Email Me Button */}
          <div className="text-center mt-8 mb-8">
            <a
              href="mailto:freddakdogan2@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg font-medium focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t("sendEmail")}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Info */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md mb-4">
                <Mail className="h-8 w-8 text-teal-700 dark:text-teal-400" />
              </div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200">{t("email")}</h4>
              <a
                href="mailto:freddakdogan2@gmail.com"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                freddakdogan2@gmail.com
              </a>
            </div>

            {/* Phone Info */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md mb-4">
                <Phone className="h-8 w-8 text-teal-700 dark:text-teal-400" />
              </div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200">{t("phone")}</h4>
              <a
                href="tel:+4917662031322"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                +49 176 62031322
              </a>
            </div>

            {/* Location Info */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-md mb-4">
                <MapPin className="h-8 w-8 text-teal-700 dark:text-teal-400" />
              </div>
              <h4 className="font-medium text-gray-700 dark:text-gray-200">{t("location")}</h4>
              <p className="text-gray-600 dark:text-gray-400">{t("locationInfo")}</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=Erding,+Germany&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title={t("location")}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Briefcase, Car, Building2, Users, Settings } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function About() {
  const { t } = useLanguage()

  const skills = [
    t("unitySkill"),
    t("arVrSkill"),
    t("hololensSkill"),
    t("performanceSkill"),
    t("cleanCodeSkill"),
    t("agileSkill"),
    t("zenjectSkill"),
    t("uniRxSkill"),
  ]

  const companies = [
    {
      name: t("superswipeGames"),
      logo: "/images/superswipelogo.png",
      period: "03/2025 - current",
      role: t("unityDeveloper"),
      icon: <Users className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
    },
    {
      name: t("mercedesBenzTechMotion"),
      logo: "/images/mercedes_benz_tech_motion_logo.jpeg",
      period: "10/2021 - 10/2024",
      role: t("arEngineer"),
      icon: <Car className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
    },
    {
      name: t("technologyAndStrategy"),
      logo: "/images/technology-and-strategy-1622792748.jpg",
      period: "10/2021 - 10/2024",
      role: t("consultant"),
      icon: <Briefcase className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
    },
    {
      name: t("fridie"),
      logo: "/images/FRIDIE_black_wordmark.svg",
      period: "02/2021 - 09/2021",
      role: t("unityDeveloper"),
      icon: <Settings className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
    },
    {
      name: t("bosch"),
      logo: "/images/bosch_logo.jpeg",
      period: "01/2020 - 01/2021",
      role: t("softwareEngineer"),
      icon: <Building2 className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 dark:bg-orange-900/30 rounded-full translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 dark:bg-teal-900/30 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 dark:bg-teal-900/50 rounded-full z-0"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/ggbavaria2.jpg"
                  alt="Fred Newton, Akdogan"
                  width={1000}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 dark:bg-orange-900/50 rounded-full z-0"></div>

              {/* Small frog decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 z-20">
                <Image
                  src="/images/small-frog.png"
                  alt="Kleiner Frosch"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="inline-block bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t("aboutMe")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">Fred <i>"Freddy"</i> Newton, Akdogan</h2>
            {/* Social Links */}
            <div className="flex gap-4 mb-4">
              <a
                href="https://freddynewton.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-700 dark:text-teal-300 hover:underline"
                title="Portfolio"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2c1.657 0 3.156.672 4.243 1.757A5.978 5.978 0 0 1 20 12c0 1.657-.672 3.156-1.757 4.243A5.978 5.978 0 0 1 12 20a5.978 5.978 0 0 1-4.243-1.757A5.978 5.978 0 0 1 4 12c0-1.657.672-3.156 1.757-4.243A5.978 5.978 0 0 1 12 4Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/></svg>
                Portfolio
              </a>
              <a
                href="https://github.com/freddynewton"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-700 dark:text-teal-300 hover:underline"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.848-2.337 4.695-4.565 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/></svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal-700 dark:text-teal-300 hover:underline"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                LinkedIn
              </a>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t("aboutMeDescription")}</p>

            <div className="mb-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t("coreCompetencies")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">{t("myExperience")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companies.map((company, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 bg-white dark:bg-gray-900 rounded-2xl mb-4 flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        width={96}
                        height={96}
                        className="object-contain w-20 h-20"
                        style={{ background: 'white' }}
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{company.name}</h4>
                    <p className="text-sm text-teal-600 dark:text-teal-400">{company.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

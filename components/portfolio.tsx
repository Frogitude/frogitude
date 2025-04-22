"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const [category, setCategory] = useState("all")

  const projects = [
    {
      title: "AR Navigation App",
      category: "xr",
      image: "/images/portfolio-ar-navigation.jpg",
      description: "Augmented Reality Navigation für Innenräume mit HoloLens",
      tags: ["HoloLens", "Unity", "MRTK", "C#"],
      client: "Mercedes Benz",
    },
    {
      title: "VR Training Simulation",
      category: "xr",
      image: "/images/portfolio-vr-training.jpg",
      description: "Virtuelle Trainingsumgebung für Montagearbeiten",
      tags: ["VR", "Oculus Quest", "Unity", "C#"],
      client: "Automotive",
    },
    {
      title: "Mobile Puzzle Game",
      category: "games",
      image: "/images/portfolio-mobile-game.jpg",
      description: "Casual Puzzle Game für iOS und Android",
      tags: ["Mobile", "Unity", "C#", "UI/UX"],
      client: "superswipe.games",
    },
    {
      title: "3D Produktkonfigurator",
      category: "visualization",
      image: "/images/portfolio-product-configurator.jpg",
      description: "Interaktiver 3D-Konfigurator für Fahrzeugausstattungen",
      tags: ["WebGL", "Unity", "C#", "UI"],
      client: "Automotive",
    },
    {
      title: "AR Marketing Experience",
      category: "xr",
      image: "/images/portfolio-ar-marketing.jpg",
      description: "AR-Erlebnis für Messeauftritte und Marketing",
      tags: ["AR", "iOS", "Android", "Unity"],
      client: "FRIDIE",
    },
    {
      title: "Architektur-Visualisierung",
      category: "visualization",
      image: "/images/portfolio-architecture.jpg",
      description: "Interaktive Architektur-Visualisierung mit Echtzeit-Beleuchtung",
      tags: ["Unity", "HDRP", "Lighting", "3D"],
      client: "Architektur",
    },
  ]

  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  return (
    <section id="portfolio" className="py-20 bg-mint-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16">
        <Image src="/images/lily-pad.png" alt="Lily pad" width={64} height={64} className="opacity-30" />
      </div>
      <div className="absolute bottom-40 right-10 w-20 h-20">
        <Image src="/images/lily-pad.png" alt="Lily pad" width={80} height={80} className="opacity-30" />
      </div>

      {/* Bubbles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 rounded-full border border-teal-300 opacity-60"
          style={{
            bottom: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 20}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-mint-100 text-forest-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-green">Meine Projekte</h2>
          <p className="text-lg text-forest-green/80 max-w-2xl mx-auto">
            Eine Auswahl meiner Projekte aus den Bereichen Game Development, XR und 3D-Visualisierung.
          </p>
        </div>

        <Tabs defaultValue="all" value={category} onValueChange={setCategory} className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-4 w-full max-w-md bg-mint-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                Alle
              </TabsTrigger>
              <TabsTrigger value="games" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                Games
              </TabsTrigger>
              <TabsTrigger value="xr" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                XR
              </TabsTrigger>
              <TabsTrigger
                value="visualization"
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                3D
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-forest-green">{project.title}</h3>
                  <span className="text-xs bg-mint-100 text-forest-green px-2 py-1 rounded-full">{project.client}</span>
                </div>
                <p className="text-forest-green/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full border-teal-600 text-teal-700 hover:bg-teal-50"
                >
                  Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

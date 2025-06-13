import EnhancedHeader from "@/components/enhanced-header"
import Hero from "@/components/hero"
import Services from "@/components/services"
// import Pricing from "@/components/pricing"
import GameShowcase from "@/components/game-showcase"
import About from "@/components/about"
import Contact from "@/components/contact"
import FrogitudeDefinition from "@/components/frogitude-definition"
import EnhancedFooter from "@/components/enhanced-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <EnhancedHeader />
      <Hero />
      <Services />
      {/* <Pricing /> */}
      <GameShowcase />
      <About />
      <FrogitudeDefinition />
      <Contact />
      <EnhancedFooter />
    </main>
  )
}

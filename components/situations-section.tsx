import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Umbrella, Briefcase, Headphones } from "lucide-react"

export default function SituationsSection() {
  const situations = [
    {
      title: "Im Alltag",
      description: "Stau auf dem Weg zur Arbeit? Mit Frogitude nimmst du's gelassen und genießt die Musik.",
      icon: <Coffee className="h-10 w-10 text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Beim Chillen",
      description:
        "Während andere FOMO haben, genießt du mit Frogitude den Moment auf deinem persönlichen Seerosenblatt.",
      icon: <Umbrella className="h-10 w-10 text-teal-600" />,
      color: "bg-teal-100",
    },
    {
      title: "Im Stress",
      description: "Deadlines? Mit Frogitude behältst du einen kühlen Kopf und arbeitest in deinem eigenen Tempo.",
      icon: <Briefcase className="h-10 w-10 text-amber-600" />,
      color: "bg-amber-100",
    },
    {
      title: "In der Freizeit",
      description:
        "Während andere dem neuesten Trend hinterherjagen, genießt du mit Frogitude deine eigenen Interessen.",
      icon: <Headphones className="h-10 w-10 text-blue-600" />,
      color: "bg-blue-100",
    },
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">Frogitude im Leben</h2>
      <p className="text-xl text-center text-green-700 mb-12 max-w-2xl mx-auto">
        Entdecke, wie du in verschiedenen Situationen deine innere Frogitude zum Ausdruck bringen kannst
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {situations.map((situation, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
            <div className={`p-6 ${situation.color}`}>
              <div className="flex justify-center">{situation.icon}</div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{situation.title}</h3>
              <p className="text-gray-600">{situation.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-green-100 rounded-xl -rotate-1"></div>
        <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 relative">
              <Image
                src="/images/frogitude-meditation.png"
                alt="Ein meditierender Frosch"
                width={300}
                height={300}
                className="object-contain mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Die Frogitude-Philosophie</h3>
              <p className="text-lg text-gray-700 mb-4">
                Frogitude ist mehr als nur eine Haltung – es ist eine Lebensphilosophie. Wie ein Frosch, der gelassen
                auf seinem Seerosenblatt sitzt, lernst du, im Moment zu leben und die kleinen Dinge zu genießen.
              </p>
              <p className="text-lg text-gray-700">
                Gleichzeitig bist du bereit, spontan loszuspringen, wenn sich eine Gelegenheit bietet – immer mit einem
                Augenzwinkern und ohne dich von gesellschaftlichen Erwartungen einengen zu lassen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

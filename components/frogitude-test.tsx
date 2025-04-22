"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function FrogitudeTest() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<string>("")
  const [resultDescription, setResultDescription] = useState<string>("")

  const questions = [
    {
      question: "Wie reagierst du, wenn deine Pläne plötzlich durchkreuzt werden?",
      options: [
        "Ich gerate in Panik und versuche, alles zu retten",
        "Ich bin genervt, passe mich aber an",
        "Ich nehme es gelassen und finde eine Alternative",
        "Ich sehe es als Chance für ein neues Abenteuer",
      ],
    },
    {
      question: "Was machst du an einem freien Tag am liebsten?",
      options: [
        "Ich plane den Tag durchstrukturiert mit vielen Aktivitäten",
        "Ich treffe mich mit Freunden oder Familie",
        "Ich entspanne zu Hause mit einem Buch oder Film",
        "Ich lasse den Tag auf mich zukommen ohne Pläne",
      ],
    },
    {
      question: "Wie wichtig ist dir die Meinung anderer?",
      options: [
        "Sehr wichtig, ich passe mich oft an",
        "Wichtig, aber ich bleibe bei meinen Grundprinzipien",
        "Ich höre zu, entscheide aber selbst",
        "Ich gehe konsequent meinen eigenen Weg",
      ],
    },
  ]

  const results = [
    {
      title: "Frosch-Anfänger",
      description:
        "Du hast erste Anzeichen von Frogitude, aber gesellschaftliche Konventionen halten dich noch zurück. Versuche öfter, die Dinge mit mehr Gelassenheit zu betrachten.",
    },
    {
      title: "Kaulquappe mit Potenzial",
      description:
        "Du zeigst in manchen Situationen bereits echte Frogitude! Mit etwas mehr Selbstvertrauen in deine eigenwillige Art könntest du zum vollwertigen Frosch werden.",
    },
    {
      title: "Fortgeschrittene Frogitude",
      description:
        "Beeindruckend! Du lebst bereits mit einer gesunden Portion Frogitude und verstehst die Kunst der Gelassenheit. Nur manchmal lässt du dich noch aus der Ruhe bringen.",
    },
    {
      title: "Frogitude-Meister",
      description:
        "Wow! Du bist ein wahres Vorbild in Sachen Frogitude. Deine gelassene, eigenwillige Art und dein humorvoller Blick aufs Leben machen dich zu einem echten Frosch-Philosophen.",
    },
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, Number.parseInt(value)]
    setAnswers(newAnswers)

    if (newAnswers.length < questions.length) {
      setStep(step + 1)
    } else {
      // Calculate result
      const sum = newAnswers.reduce((acc, val) => acc + val, 0)
      const average = sum / newAnswers.length
      const resultIndex = Math.min(Math.floor(average), results.length - 1)

      setResult(results[resultIndex].title)
      setResultDescription(results[resultIndex].description)
      setStep(questions.length) // Move to result screen
    }
  }

  const resetTest = () => {
    setStep(0)
    setAnswers([])
    setResult("")
    setResultDescription("")
  }

  return (
    <section id="frogitude-test" className="py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">Entdecke dein Frogitude-Level</h2>
      <p className="text-xl text-center text-green-700 mb-12 max-w-2xl mx-auto">
        Beantworte diese kurzen Fragen und finde heraus, wie viel Frosch in dir steckt
      </p>

      <Card className="max-w-2xl mx-auto shadow-lg border-green-100">
        <CardContent className="p-8">
          {step < questions.length ? (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Frage {step + 1} von {questions.length}
              </h3>
              <p className="text-xl text-gray-700 mb-8">{questions[step].question}</p>

              <RadioGroup onValueChange={handleAnswer} className="space-y-4">
                {questions[step].options.map((option, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 rounded-md hover:bg-green-50">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                    <Label htmlFor={`option-${index}`} className="text-lg font-normal cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-800 mb-4">{result}</h3>
              <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🐸</span>
              </div>
              <p className="text-lg text-gray-700 mb-8">{resultDescription}</p>
              <Button onClick={resetTest} className="bg-green-700 hover:bg-green-800 text-white">
                Test wiederholen
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

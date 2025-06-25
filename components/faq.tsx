'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/context/language-context"

export default function FAQ() {
  const { t, language } = useLanguage()

  // FAQ content in both languages
  const faqs = [
    {
      key: "faq_cost",
      de: {
        q: "Was kostet ein Projekt bei frogitude?",
        a: "Jedes Projekt ist einzigartig – genau wie deine Anforderungen. Nach einem unverbindlichen Erstgespräch kann ich dir eine präzise Einschätzung zu Aufwand und Kosten geben. Transparenz und faire Preise stehen bei mir an erster Stelle."
      },
      en: {
        q: "How much does a project with frogitude cost?",
        a: "Every project is unique – just like your requirements. After a non-binding initial consultation, I can give you a precise estimate of the effort and costs. Transparency and fair pricing are my top priorities."
      }
    },
    {
      key: "faq_clients",
      de: {
        q: "Mit welchen Unternehmen arbeitet frogitude zusammen?",
        a: "Ich arbeite mit Startups, Agenturen, Mittelständlern und großen Unternehmen – überall dort, wo innovative digitale Erlebnisse entstehen sollen. Besonders gerne unterstütze ich Teams, die neue Wege im Bereich Games, XR, AR/VR oder interaktive Prototypen gehen wollen."
      },
      en: {
        q: "What kind of companies does frogitude work with?",
        a: "I work with startups, agencies, SMEs, and large companies – wherever innovative digital experiences are created. I especially enjoy supporting teams who want to break new ground in games, XR, AR/VR, or interactive prototyping."
      }
    },
    {
      key: "faq_testproject",
      de: {
        q: "Kann ich mit einem kleinen Testprojekt starten?",
        a: "Absolut! Ein Testprojekt ist eine großartige Möglichkeit, um herauszufinden, ob die Zusammenarbeit passt und wie ich dich am besten unterstützen kann."
      },
      en: {
        q: "Can I start with a small test project?",
        a: "Absolutely! A test project is a great way to find out if our collaboration is a good fit and how I can best support you."
      }
    },
    {
      key: "faq_tools",
      de: {
        q: "Welche Software-Tools nutzt frogitude?",
        a: "Ich setze auf einen modernen und flexiblen Tool-Stack, der optimal zu deinem Projekt passt. Dazu gehören unter anderem: Unity und Godot für Game- und XR-Entwicklung, Blender für 3D-Modelling und Animation, Aseprite für Pixel Art und 2D-Animationen, Figma für UI/UX-Design und Prototyping, Adobe Creative Suite für Grafik und Assets sowie weitere Tools je nach Bedarf."
      },
      en: {
        q: "What software tools do you use?",
        a: "I use a modern and flexible tool stack tailored to your project. This includes: Unity and Godot for game and XR development, Blender for 3D modeling and animation, Aseprite for pixel art and 2D animation, Figma for UI/UX design and prototyping, Adobe Creative Suite for graphics and assets, and other tools as needed."
      }
    },
    {
      key: "faq_workflow",
      de: {
        q: "Wie läuft die Zusammenarbeit ab?",
        a: "Nach einem Kennenlernen und der Zieldefinition entwickle ich erste Konzepte oder Prototypen. Du erhältst regelmäßig Updates und kannst jederzeit Feedback geben. Die Zusammenarbeit ist flexibel – remote oder vor Ort, je nach Bedarf."
      },
      en: {
        q: "How does the collaboration work?",
        a: "After an initial meeting and defining the goals, I develop first concepts or prototypes. You receive regular updates and can give feedback at any time. Collaboration is flexible – remote or on-site, as needed."
      }
    },
    {
      key: "faq_existingprojects",
      de: {
        q: "Kann frogitude auch bestehende Projekte übernehmen oder weiterentwickeln?",
        a: "Ja, ich steige gerne in laufende Projekte ein, optimiere bestehende Anwendungen oder entwickle neue Features für dich weiter."
      },
      en: {
        q: "Can frogitude take over or further develop existing projects?",
        a: "Yes, I am happy to join ongoing projects, optimize existing applications, or develop new features for you."
      }
    },
    {
      key: "faq_duration",
      de: {
        q: "Wie lange dauert ein typisches Projekt?",
        a: "Das hängt vom Umfang ab. Prototypen können in wenigen Tagen fertig sein, während größere Projekte entsprechend mehr Zeit benötigen. Nach dem Erstgespräch bekommst du eine realistische Zeiteinschätzung."
      },
      en: {
        q: "How long does a typical project take?",
        a: "It depends on the scope. Prototypes can be ready in just a few days, while larger projects naturally take more time. After the initial consultation, you will receive a realistic time estimate."
      }
    },
    {
      key: "faq_workshops",
      de: {
        q: "Bietest du auch Workshops oder Beratung an?",
        a: "Ja, ich unterstütze Teams mit Workshops zu Game Design, Prototyping, XR/AR/VR und kreativen Prozessen – sowohl als einmaliges Event als auch als laufende Beratung."
      },
      en: {
        q: "Do you also offer workshops or consulting?",
        a: "Yes, I support teams with workshops on game design, prototyping, XR/AR/VR, and creative processes – both as one-off events and ongoing consulting."
      }
    },
    {
      key: "faq_onsite",
      de: {
        q: "Kannst du auch vor Ort arbeiten?",
        a: "Ja, ich kann im Münchener Raum auch vor Ort arbeiten. Remote-Zusammenarbeit ist ebenfalls jederzeit möglich – ganz nach deinen Bedürfnissen."
      },
      en: {
        q: "Can you work onsite?",
        a: "Yes, I can work onsite in the Munich area. Remote collaboration is also possible at any time – whatever suits your needs."
      }
    }
  ]

  return (
    <section id="faq" className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{language === "de" ? "Häufige Fragen (FAQ)" : "Frequently Asked Questions (FAQ)"}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.key} value={faq.key}>
            <AccordionTrigger className="text-lg font-semibold">
              {language === "de" ? faq.de.q : faq.en.q}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {language === "de" ? faq.de.a : faq.en.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
} 
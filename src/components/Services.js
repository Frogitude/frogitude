import React from 'react';
import { motion } from 'framer-motion';
import { Cube, Scan, Smartphone, Layers, Headset, GraduationCap, BookOpen, Package, Map, Code, Square, Globe, Megaphone } from 'lucide-react';
import { useAppContext } from './AppContext';
import { content } from './content';

const items = [
  {
    icon: Cube,
    title: 'Extended Reality',
    blurb: 'Extended Reality oder kurz XR bietet grenzenlose Möglichkeiten, den Zuschauer emotional zu involvieren. Mit VR‑Brillen wie z. B. der Oculus Quest oder der Pico gelingt es, die Illusion der virtuellen Welt real erscheinen zu lassen.',
  },
  {
    icon: Scan,
    title: 'Augmented Reality',
  blurb: 'Mit Augmented Reality werden auf dem Smartphone oder Tablet digitale Darstellungen und Zusatzinformationen über die reale Welt projiziert.',
  },
  {
    icon: Smartphone,
    title: 'WebAR',
    blurb: 'Browserbasierte AR‑Erlebnisse ohne App‑Installation – direkt zugänglich und ideal für Kampagnen.',
  },
  {
    icon: Globe,
    title: 'Immersive Web Anwendungen',
    blurb: '3D‑Websites, Microsites und Produkt‑Konfiguratoren mit WebGL/WebGPU – schnell, interaktiv und plattformunabhängig.',
  },
  {
    icon: Layers,
    title: 'Mixed Reality für Unternehmen',
    blurb: 'Nahtlose Fusion von realer und digitaler Welt – produktiv, kollaborativ und skalierbar.',
  },
  {
    icon: Headset,
    title: 'Virtual Reality',
  blurb: 'Von der Idee zur virtuellen Wirklichkeit – immersive VR‑Erlebnisse für Schulung, Marketing und Entertainment.',
  },
  {
    icon: Megaphone,
    title: 'Interaktive Ads & Playables',
    blurb: 'Rich‑Media‑Anzeigen und Playable Ads, die Aufmerksamkeit binden und KPIs messbar steigern – leichtgewichtig und kampagnentauglich.',
  },
  {
    icon: GraduationCap,
    title: 'XR‑Workshops & Metaverse',
    blurb: 'Workshops zu XR: Erleben Sie, wie erweiterte Realitäten Ihr Business transformieren können.',
  },
  {
    icon: BookOpen,
    title: 'Virtuelle Trainings',
    blurb: 'Sichere Simulation echter Aufgaben – Fähigkeiten üben und verbessern ohne reale Risiken.',
  },
  {
    icon: Package,
    title: 'Produkte virtuell präsentieren',
    blurb: 'Mehr als Bilder: Virtuelle Produktpräsentationen, die Details und Funktionen lebendig machen.',
  },
  {
    icon: Map,
    title: 'Virtuelle Rundgänge & Sightseeing',
    blurb: 'Räume realitätsnah entdecken und präsentieren – fesselnd und interaktiv.',
  },
  {
    icon: Code,
    title: 'VR & AR App‑Entwicklung',
    blurb: 'Apps für VR‑Brillen, Smartphones und Tablets – maßgeschneidert für Ihre Anforderungen.',
  },
  // Unity Spieleentwicklung
  {
    icon: Code,
    title: 'Spieleentwicklung in Unity',
    blurb: 'Konzept, Prototyping und Produktion von 2D/3D‑Games mit Unity – von Casual bis Core. Gameplay‑Programmierung, Assets‑Pipeline, Builds & QA.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Cross‑Platform Games',
    blurb: 'iOS, Android, PC und WebGL – eine Code‑Basis mit Unity. Store‑Ready Builds, In‑App‑Purchases, Analytics, A/B‑Tests.',
  },
  {
    icon: Layers,
    title: 'Portierung & Optimierung',
    blurb: 'Performance‑Tuning (Profiling, Batching, Addressables), Asset‑Optimierung und Portierung auf neue Plattformen.',
  },
];

export default function Services({ id }) {
  const { language } = useAppContext();
  const t = content[language];
  return (
    <section id={id} className="py-20 bg-bg-secondary/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">{t.services?.title || 'Services'}</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-3xl mx-auto">
            {t.services?.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, blurb }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              className="glass-effect rounded-2xl p-6 border border-border-primary hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-effect border border-border-primary flex items-center justify-center shrink-0">
                  {(Icon || Square) && React.createElement(Icon || Square, { className: 'w-6 h-6 text-accent-lime' })}
                </div>
        <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{title}</h3>
                  <p className="text-text-secondary mt-1 text-sm md:text-base leading-relaxed">{blurb}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO/Keywords as subtle tags (optional) */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs text-text-secondary/70">
          {['Augmented Reality Tracking', 'Virtual Reality Agentur', 'Unity Spieleentwicklung', 'Mobile Games', 'Immersive Web', 'Interaktive Ads', 'Playable Ads', 'Portierung & Optimierung'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full glass-effect border border-border-primary">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

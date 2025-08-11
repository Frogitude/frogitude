import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Smartphone, Layers, Headset, GraduationCap, BookOpen, Package, Map, Code, Square, Globe, Megaphone } from 'lucide-react';
import { useAppContext } from './AppContext';
import { content } from './content';

const iconMap = {
  xr: Layers,
  ar: Scan,
  webar: Smartphone,
  immersive_web: Globe,
  mr_enterprise: Layers,
  vr: Headset,
  interactive_ads: Megaphone,
  workshops: GraduationCap,
  training: BookOpen,
  product_demo: Package,
  tours: Map,
  app_dev: Code,
  unity_dev: Code,
  mobile_games: Smartphone,
  porting_opt: Layers,
};

export default function Services({ id }) {
  const { language } = useAppContext();
  const t = content[language];
  const items = Object.entries(t.services?.items || {}).map(([key, val]) => ({
    key,
    icon: iconMap[key] || Square,
    title: val.title,
    blurb: val.blurb,
  }));
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
      {items.map(({ icon: Icon, title, blurb, key }) => (
            <motion.article
        key={key}
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

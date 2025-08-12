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

  // Category mapping for filters
  const categoryMap = {
    // Games
    unity_dev: ['games'],
    mobile_games: ['games'],
    porting_opt: ['games'],
    // XR
    xr: ['xr'],
    ar: ['xr'],
    vr: ['xr'],
    mr_enterprise: ['xr'],
    app_dev: ['xr'],
    training: ['xr', 'consulting'],
    product_demo: ['xr'],
    tours: ['xr'],
    workshops: ['xr', 'consulting'],
    // Web & Ads
    webar: ['web'],
    immersive_web: ['web'],
    interactive_ads: ['web'],
  };
  const [filter, setFilter] = React.useState('all'); // 'all' | 'games' | 'xr' | 'consulting' | 'web'

  const filtered = items.filter((it) => {
    if (filter === 'all') return true;
    const cats = categoryMap[it.key] || [];
    return cats.includes(filter);
  });
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
          {/* Filter buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: t.services?.filters?.all || 'All' },
              { id: 'games', label: t.services?.filters?.games || 'Games' },
              { id: 'xr', label: t.services?.filters?.xr || 'XR' },
              { id: 'consulting', label: t.services?.filters?.consulting || 'Consulting' },
              { id: 'web', label: t.services?.filters?.web || 'Web & Ads' },
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setFilter(b.id)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  filter === b.id ? 'bg-accent-lime text-white border-accent-lime' : 'glass-effect text-text-secondary'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map(({ icon: Icon, title, blurb, key }) => (
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
      </div>
    </section>
  );
}

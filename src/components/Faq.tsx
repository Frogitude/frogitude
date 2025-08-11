import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from './AppContext';
import { content } from './content';

type FaqItem = { q: string; a?: string };

export default function Faq({ id }: { id?: string }) {
  const { language } = useAppContext();
  const t = (content as any)[language];
  const faqs: FaqItem[] = (t.faq?.items as FaqItem[]) || [];

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
            <span className="text-gradient">{t.faq?.title || 'FAQ'}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group glass-effect rounded-xl p-5 border border-border-primary/60"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-lg md:text-xl font-semibold text-text-primary">{item.q}</span>
                <span className="text-text-secondary group-open:rotate-180 transition-transform select-none">⌄</span>
              </summary>
              {item.a && (
                <p className="mt-3 text-text-secondary/95 leading-relaxed">{item.a}</p>
              )}
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

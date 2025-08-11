import React from 'react';
import { motion } from 'framer-motion';

type FaqItem = { q: string; a?: string };

export default function Faq({ id }: { id?: string }) {
  const faqs: FaqItem[] = [
    {
      q: 'How much does a project with frogitude cost?',
      a: 'Every project is unique – just like your requirements. After a non-binding initial consultation, I can give you a precise estimate of the effort and costs. Transparency and fair pricing are my top priorities.'
    },
    { q: 'What kind of companies does frogitude work with?', a: 'Startups, SMEs, and corporate teams in games, XR, and interactive 3D. If the challenge fits Unity/C#, I am interested.' },
    { q: 'Can I start with a small test project?', a: 'Yes. A small pilot or proof-of-concept is a great way to validate collaboration and scope.' },
    { q: 'What software tools do you use?', a: 'Primarily Unity and C#, plus Blender/Aseprite for art workflows, and common team tools like Git, Jira, and CI.' },
    { q: 'How does the collaboration work?', a: 'Lightweight, transparent, and iterative. We align goals, milestones, and communication, then deliver in clear increments.' },
    { q: 'Can frogitude take over or further develop existing projects?', a: 'Yes. I can audit the codebase, propose a roadmap, and continue development while improving stability and performance.' },
    { q: 'How long does a typical project take?', a: 'From a few days for a feature/fix to several months for full prototypes or releases. I’ll estimate based on scope.' },
    { q: 'Do you also offer workshops or consulting?', a: 'Yes. I offer Unity coaching, architecture reviews, and performance consulting sessions.' },
    { q: 'Can you work onsite?', a: 'Remote-first. Onsite is possible by arrangement for workshops, kickoffs, or key milestones.' }
  ];

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
            <span className="text-gradient">Frequently Asked Questions (FAQ)</span>
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

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, Cpu, Users } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';

const StatItem = ({ icon: Icon, value, label, delay }) => {
  const valueRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!valueRef.current) return;
      const text = String(value);
      const target = parseInt(text);
      const suffix = text.replace(String(target), '');
      const obj = { n: 0 };
      ScrollTrigger.create({
        trigger: valueRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            n: target,
            duration: 1,
            ease: 'power2.out',
            onUpdate: () => {
              valueRef.current.textContent = Math.floor(obj.n) + suffix;
            },
          });
        },
      });
    });
    return () => ctx.revert();
  }, [value]);
  return (
    <motion.div
  className="text-center glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center gap-2">
        <Icon className="w-10 h-10 text-accent-lime" />
        <span ref={valueRef} className="text-5xl font-bold text-text-primary">0</span>
      </div>
      <p className="text-text-secondary mt-2">{label}</p>
    </motion.div>
  );
};

export default function Stats({ content }) {
  const stats = [
    { icon: Briefcase, value: '5+', label: content.stat1, delay: 0 },
    { icon: Layers, value: '20+', label: content.stat2, delay: 0.2 },
    { icon: Cpu, value: '15+', label: content.stat3, delay: 0.4 },
    // Leadership experience with 5+ team size (replace customers stat)
    { icon: Users, value: '5+', label: (content.leadership || 'Leadership: Team size 5+'), delay: 0.6 },
  ];

  return (
    <section id="stats" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

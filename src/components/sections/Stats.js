import React, { useRef } from "react";
import { motion } from "motion/react";
import { Briefcase, Layers, Cpu, Users } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/hooks";

const StatItem = ({ icon: Icon, value, label, delay }) => {
  const valueRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!valueRef.current) return;
      const text = String(value);
      const target = parseInt(text);
      const suffix = text.replace(String(target), "");
      const obj = { n: 0 };
      ScrollTrigger.create({
        trigger: valueRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            n: target,
            duration: 1,
            ease: "power2.out",
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
      className="text-center glass-effect glass-card-accent rounded-2xl p-8 shadow-lg hover:shadow-glow-lime"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="relative rounded-xl p-2 pulse-ring">
          <Icon className="w-8 h-8 text-accent-lime" />
        </div>
        <span
          ref={valueRef}
          className="text-5xl font-black tracking-tightest text-text-primary"
        >
          0
        </span>
      </div>
      <p className="text-text-secondary mt-2 text-sm font-medium uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
};

export default function Stats({ content }) {
  const stats = [
    { icon: Briefcase, value: "5+", label: content.stat1, delay: 0 },
    { icon: Layers, value: "20+", label: content.stat2, delay: 0.2 },
    { icon: Cpu, value: "15+", label: content.stat3, delay: 0.4 },
    // Leadership experience with 5+ team size (replace customers stat)
    {
      icon: Users,
      value: "5+",
      label: content.leadership || "Leadership: Team size 5+",
      delay: 0.6,
    },
  ];

  return (
    <section id="stats" className="py-24 bg-bg-secondary/60 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

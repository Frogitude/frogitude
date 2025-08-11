import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, BrainCircuit, Code, Users } from 'lucide-react';
import { useAppContext } from './AppContext';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';

const skillsData = {
  game_dev: [
    { subject: 'Unity Engine', level: 95 }, { subject: 'C#', level: 95 },
    { subject: 'Game Design', level: 85 }, { subject: 'Performance', level: 90 },
    { subject: 'UI/UX', level: 80 }, { subject: 'Multiplayer', level: 75 },
  ],
  xr_dev: [
    { subject: 'VR/AR', level: 90 }, { subject: 'HoloLens', level: 85 },
    { subject: 'MRTK', level: 85 }, { subject: 'VisionLib', level: 80 },
    { subject: 'Blender', level: 75 }, { subject: 'WebXR', level: 70 },
  ],
  software_eng: [
    { subject: 'Architecture', level: 90 }, { subject: 'Clean Code', level: 95 },
    { subject: 'Dep. Injection', level: 85 }, { subject: 'Testing', level: 80 },
    { subject: 'Python', level: 70 }, { subject: 'JS/HTML/CSS', level: 75 },
  ],
  management: [
    { subject: 'Agile/Scrum', level: 90 }, { subject: 'JIRA', level: 95 },
    { subject: 'Team Lead', level: 80 }, { subject: 'Roadmapping', level: 85 },
    { subject: 'Client Comm.', level: 88 },
  ],
};

const skillCategories = {
  game_dev: { icon: Gamepad2 }, xr_dev: { icon: BrainCircuit },
  software_eng: { icon: Code }, management: { icon: Users },
};

const SkillRadarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <defs>
        <linearGradient id="skill-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--accent-lime)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="var(--accent-lime)" stopOpacity={0.2}/>
        </linearGradient>
      </defs>
      <PolarGrid stroke="var(--border-primary)" />
      <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 14 }} />
      <Tooltip
        contentStyle={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)',
          borderRadius: '1rem',
        }}
        labelStyle={{ color: 'var(--accent-lime)' }}
      />
      <Radar dataKey="level" stroke="var(--accent-lime)" fill="url(#skill-gradient)" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);

export default function Skills({ id, content }) {
  const [selectedCategory, setSelectedCategory] = useState('game_dev');
  const { language } = useAppContext();
  const currentSkills = skillsData[selectedCategory];
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      gsap.from(containerRef.current.querySelectorAll('[data-skill-item]'), {
        opacity: 0,
        y: 16,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    });
    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            <span className="text-gradient">{content.title}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">{content.description}</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(content.categories || {}).map(([key, title]) => {
            const Icon = skillCategories[key]?.icon || Users;
            const active = key === selectedCategory;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${active ? 'bg-accent-lime text-white border-accent-lime' : 'glass-effect text-text-secondary'}`}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </motion.button>
            );
          })}
        </div>

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center glass-effect rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/10">
          <div>
            <SkillRadarChart data={currentSkills} />
          </div>
          <div className="space-y-4" ref={containerRef}>
            {currentSkills.map((skill) => (
              <div key={skill.subject} className="w-full" data-skill-item>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="text-text-primary font-medium">{skill.subject}</span>
                  <span className="text-text-secondary">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-border-primary/30 rounded-full overflow-hidden">
                  <div className="h-2 bg-accent-lime rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

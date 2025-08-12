import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, BrainCircuit, Code, Users } from 'lucide-react';
import { useAppContext } from './AppContext';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';
import { yearsFor } from '@/lib/years';

const skillsData = {
  game_dev: [
    { subject: 'Unity Engine', level: 95 },
    { subject: 'C#', level: 95 },
    { subject: 'Performance Optimization', level: 90 },
    { subject: 'Unreal Engine', level: 60 },
    { subject: 'Godot', level: 60 },
    { subject: 'Blender', level: 70 },
    { subject: 'Shader Programming', level: 70 },
    { subject: 'Multiplayer', level: 70 },
    { subject: 'REST API', level: 75 },
    { subject: 'MRTK', level: 80 },
  ],
  xr_dev: [
    { subject: 'VR/AR', level: 90 },
    { subject: 'HoloLens', level: 85 },
    { subject: 'MRTK', level: 85 },
    { subject: 'VisionLib', level: 80 },
    { subject: 'WebXR', level: 70 },
  ],
  software_eng: [
    { subject: 'Architecture', level: 90 },
    { subject: 'Clean Code', level: 95 },
    { subject: 'Dep. Injection', level: 85 },
    { subject: 'Testing', level: 80 },
    { subject: 'Python', level: 70 },
    { subject: 'JS/HTML/CSS', level: 75 },
  ],
  management: [
    { subject: 'Agile/Scrum', level: 90 },
    { subject: 'JIRA', level: 95 },
    { subject: 'Team Lead', level: 80 },
    { subject: 'Roadmapping', level: 85 },
    { subject: 'Client Comm.', level: 88 },
  ],
};

const skillCategories = {
  game_dev: { icon: Gamepad2 }, xr_dev: { icon: BrainCircuit },
  software_eng: { icon: Code }, management: { icon: Users },
};

const SkillRadarChart = ({ data, valueKey = 'level', max = 6 }) => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <defs>
        <linearGradient id="skill-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="var(--accent-lime)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="var(--accent-lime)" stopOpacity={0.2}/>
        </linearGradient>
      </defs>
      <PolarGrid stroke="var(--border-primary)" />
      <PolarAngleAxis dataKey="label" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
      <PolarRadiusAxis angle={90} domain={[0, max]} tickCount={Math.max(3, Math.min(6, Math.ceil(max))) }
        axisLine={false}
        tickFormatter={(v) => `${v}y`}
        tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: 'var(--glass-bg)',
          borderColor: 'var(--glass-border)',
          borderRadius: '1rem',
        }}
        labelStyle={{ color: 'var(--accent-lime)' }}
      />
  <Radar dataKey={valueKey} stroke="var(--accent-lime)" fill="url(#skill-gradient)" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
);

export default function Skills({ id, content }) {
  const [selectedCategory, setSelectedCategory] = useState('game_dev');
  const { language } = useAppContext();
  const currentSkills = skillsData[selectedCategory];
  // Map to years and drop items without a years mapping
  const SCALE_MAX_YEARS = 6;
  const yearSkills = currentSkills
    .map((s) => {
      const yRaw = yearsFor(s.subject);
      const y = Math.min(SCALE_MAX_YEARS, yRaw);
      return { subject: s.subject, years: y, label: yRaw > 0 ? `${s.subject} ${yRaw.toFixed(1)}y` : s.subject };
    })
    .filter((s) => s.years > 0);
  const maxYears = SCALE_MAX_YEARS;
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
            <SkillRadarChart data={yearSkills} valueKey="years" max={SCALE_MAX_YEARS} />
            {/* compact legend */}
            <div className="mt-4 flex flex-wrap gap-2">
              {yearSkills.map((s) => (
                <span key={s.subject} className="px-2 py-1 text-xs rounded-full glass-effect border border-border-primary text-text-secondary">
                  {s.subject}: {s.label.split(' ').slice(-1)[0]}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4" ref={containerRef}>
            {yearSkills.map((skill) => {
              const yrs = skill.years; // already clamped to SCALE_MAX_YEARS
              const glowPx = Math.min(18, 6 + yrs * 2);
              const animateDuration = 0.4 + Math.min(yrs * 0.12, 1);
              return (
              <div key={skill.subject} className="w-full" data-skill-item>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="text-text-primary font-medium flex items-center gap-2">
                    {skill.subject}
                    <span className="px-2 py-0.5 rounded-full text-[10px] leading-none glass-effect border border-border-primary text-text-secondary">{yrs.toFixed(1)}y</span>
                  </span>
                  <span className="text-text-secondary">{yrs.toFixed(1)}y</span>
                </div>
                <div className="w-full h-2 bg-border-primary/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-2 bg-accent-lime rounded-full"
                    style={{ boxShadow: `0 0 ${glowPx}px rgba(34,197,94,0.45)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(yrs / SCALE_MAX_YEARS) * 100}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: animateDuration, ease: 'easeOut' }}
                  />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

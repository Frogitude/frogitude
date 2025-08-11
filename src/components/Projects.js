import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Gamepad2 } from 'lucide-react';
import { applyTilt } from '@/lib/tilt';

export default function Projects({ id, content }) {
  const [selectedProject, setSelectedProject] = useState(0);
  const listRef = useRef(null);
  const detailsRef = useRef(null);
  const cleanupTilt = useRef([]);
  const DISCORD_INVITE = 'https://discord.gg/Bfsx9sTDfh';
  const DISCORD_SERVER_ID = process.env.NEXT_PUBLIC_DISCORD_SERVER_ID;

  // Reveal animations disabled to avoid any visibility glitches

  useEffect(() => {
    // Apply tilt to list buttons and details card
    cleanupTilt.current.forEach((fn) => fn && fn());
    cleanupTilt.current = [];
    if (listRef.current) {
      listRef.current.querySelectorAll('button').forEach((b) => {
        cleanupTilt.current.push(applyTilt(b, { max: 6, scale: 1.01 }));
      });
    }
    if (detailsRef.current) {
      cleanupTilt.current.push(applyTilt(detailsRef.current, { max: 8, scale: 1.015 }));
    }
    return () => {
      cleanupTilt.current.forEach((fn) => fn && fn());
      cleanupTilt.current = [];
    };
  }, [selectedProject]);

  const projects = [
    {
      id: 'frogitude',
      title: 'Frogitude',
      subtitle: 'Freelance Unity & C# Solutions',
      role: 'Gründer & Freelance Unity Entwickler',
      company: 'Erding, Germany',
      duration: 'Mai 2021 - Heute',
      description: 'Als Gründer von Frogitude biete ich maßgeschneiderte Unity- und C#-Lösungen an. Ich unterstütze Kunden bei der Verwirklichung ihrer Visionen in der Spieleentwicklung und darüber hinaus, von Konzept bis zur Fertigstellung.',
      highlights: [
        'Entwicklung von Spielen für PC, Mobile & Konsole',
        'Immersive AR/VR-Erlebnisse für HoloLens & Quest',
        'Interaktive 3D-Visualisierungen',
        'Code-Optimierung und agile Methoden'
      ],
      technologies: ['Unity', 'C#', 'AR/VR', 'Game Design', 'Blender'],
  images: ['/images/small-frog.png'],
  logo: '/images/small-frog.png',
      featured: true,
      icon: Briefcase
    },
    {
      id: 'meowdieval',
      title: 'Meowdieval Kingdom',
      subtitle: 'Lead Game Development',
      role: 'Lead Unity Entwickler',
      company: 'Remote / International',
      duration: '2024 - Heute',
      description: 'Leitung der Entwicklung eines stylischen, charmanten Projekts. Verantwortlich für Gameplay-Architektur, Feature-Umsetzung und Teamkoordination über mehrere Zeitzonen.',
      highlights: [
        'Leitung eines internationalen Teams (5+ Mitglieder)',
        'Gameplay-Architektur, Prototyping und Iteration',
        'Art/Tech-Abstimmung und Pipeline-Optimierungen'
      ],
  technologies: ['Unity', 'C#', 'Aseprite', 'Blender', 'Git'],
  images: ['/images/MEOWK_icon.png', '/images/meowdieval-kingdom.jpg'],
      logo: '/images/MEOWK_icon-green.png',
      featured: false,
      icon: Gamepad2
    },
    {
      id: 'itchio',
      title: 'Itch.io — Broomstick Barry',
      subtitle: 'Indie Game Prototype',
      role: 'Solo Dev / Prototype',
      company: 'Itch.io',
      duration: '2025',
      description: 'A small, whimsical prototype exploring movement and arcade-feel. Built with Unity, tuned for game feel and moment-to-moment fun.',
      highlights: [
        'Fast iteration with Unity',
        'Arcade-feel prototyping',
        'Juicy movement and feedback'
      ],
      technologies: ['Unity', 'C#', 'Game Feel'],
      images: ['/images/broomstickBarry.gif'],
      logo: '/images/broomstickBarry.gif',
      links: [
        { label: 'itch.io profile', href: 'https://freddynewton.itch.io/' }
      ],
      featured: false,
      icon: Gamepad2
    },
    {
      id: 'superswipe',
      title: 'superswipe.games',
      subtitle: 'Mobile Game Development',
      role: 'Unity Game Entwickler',
      company: 'Erding, Germany',
      duration: 'Mär 2023 - Heute',
      description: 'Entwicklung von Mobile Games unter Nutzung von Unity Cloud Services. Implementierung interaktiver Gameplay-Features und Optimierung der Spielperformance in Zusammenarbeit mit funktionsübergreifenden Teams.',
      highlights: [
        'Nutzung von Unity Cloud Services',
        'Implementierung interaktiver Gameplay-Features',
        'Zusammenarbeit in funktionsübergreifenden Teams',
        'Testing und Debugging für reibungsloses Gameplay'
      ],
      technologies: ['Unity', 'Unity Cloud Services', 'Mobile Games', 'C#'],
  images: ['/images/superswipelogo.png'],
  logo: '/images/superswipelogo.png',
      links: [
        { label: 'SumoVolley', href: 'https://sumovolley.com/' },
        { label: 'superswipe.games', href: 'https://superswipe.games/' },
        { label: 'Gameplay Video', href: 'https://www.youtube.com/watch?v=v5lS-fJrm5I&t=1s' }
      ],
  videoEmbed: 'https://www.youtube.com/embed/v5lS-fJrm5I?start=1',
      featured: false,
      icon: Gamepad2
    },
    {
      id: 'mercedes',
      title: 'Mercedes Benz Tech Motion',
      subtitle: 'Virtual Engineer',
      role: 'Virtual Engineer',
      company: 'Stuttgart, Germany',
      duration: 'Okt 2021 - Okt 2022',
      description: 'Leitung der Implementierung und Optimierung von XR-Lösungen. Management technischer Projekte, Anforderungsanalyse und Überwachung agiler Entwicklungspraktiken zur Leistungssteigerung auf HoloLens und iOS.',
      highlights: [
        'Implementierung von Lokalisierungslösungen für XR',
        'Performance-Steigerung auf HoloLens & iOS',
        'Wartung von MRTK 3.0 für HoloLens-Anwendungen',
        'Optimiertes Modell-Tracking mit VisionLib SDK'
      ],
      technologies: ['Unity', 'HoloLens', 'iOS', 'MRTK 3.0', 'VisionLib SDK', 'Agile'],
      images: ['/images/mercedes_benz_tech_motion_logo.jpeg'],
      featured: false,
      icon: Building
    }
  ];

  const currentProject = projects[selectedProject];
  const isSuperswipe = currentProject?.id === 'superswipe';

  return (
  <section id={id} className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            <span className="text-gradient">{content.title}</span>
          </h2>
          <p className="text-xl text-text-secondary/95 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {/* Project List */}
          <div
            className="space-y-4 pr-2 pb-10"
            ref={listRef}
          >
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedProject(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all shadow-md hover:shadow-lg opacity-100 cursor-pointer ${idx === selectedProject ? 'border-accent-lime bg-accent-lime/10' : 'glass-effect bg-bg-primary/[.75] hover:border-accent-lime/60'}`}
              >
                <div className="flex items-center gap-3">
                  {p.logo ? (
                    <img src={p.logo} alt={`${p.title} logo`} className="w-6 h-6 object-contain" />
                  ) : (
                    <p.icon className="w-5 h-5 text-accent-lime" />
                  )}
                  <div>
                    <p className="text-text-primary font-semibold">{p.title}</p>
                    <p className="text-sm md:text-base text-text-secondary/95">{p.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2 glass-effect rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/10" ref={detailsRef}>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className={`${isSuperswipe ? 'w-full md:w-3/5' : 'w-full md:w-1/2'}`}>
                {isSuperswipe ? (
                  <div className="relative w-full rounded-2xl overflow-hidden border border-border-primary shadow-lg" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      title="Superswipe Gameplay"
                      src={(currentProject.videoEmbed || 'https://www.youtube.com/embed/v5lS-fJrm5I?start=1') + '&autoplay=1&mute=1&controls=1&rel=0'}
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={(currentProject.images && currentProject.images[0]) || currentProject.logo || '/placeholder.jpg'}
                    alt={currentProject.title}
                    loading="lazy"
                    className="w-full rounded-2xl object-contain bg-white/5 p-3"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = currentProject.logo || '/placeholder.jpg';
                    }}
                  />
                )}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-bold text-text-primary">{currentProject.title}</h3>
        <p className="text-text-secondary/95 text-base md:text-lg leading-relaxed">{currentProject.description}</p>
        <ul className="list-disc list-inside text-text-secondary/95 text-base md:text-lg">
                  {currentProject.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
        <div className="flex flex-wrap gap-2 pt-2">
                  {currentProject.technologies.map(t => (
          <span key={t} className="px-3 py-1 text-sm md:text-base rounded-full glass-effect border border-border-primary shadow-sm text-text-primary/95">{t}</span>
                  ))}
                </div>
                {Array.isArray(currentProject.links) && currentProject.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-4">
                    {currentProject.links
                      .filter(link => currentProject.id !== 'superswipe' || !/video/i.test(link.label))
                      .map(link => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-border-primary glass-effect hover:border-accent-lime hover:shadow-lg text-text-primary/90">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                {/* Superswipe video is now the main media on the left; removed duplicate embed here */}
                {/* Embedded Discord only for Meowdieval */}
                {currentProject.id === 'meowdieval' && (
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Join auf Discord</h4>
                    {DISCORD_SERVER_ID ? (
                      <div className="w-full rounded-xl overflow-hidden border border-border-primary">
                        <iframe
                          title="Discord Widget"
                          src={`https://discord.com/widget?id=${DISCORD_SERVER_ID}&theme=dark`}
                          width="100%"
                          height="350"
                          allowTransparency={true}
                          frameBorder="0"
                          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        />
                      </div>
                    ) : (
                      <a href={DISCORD_INVITE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow">
                        Discord beitreten
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

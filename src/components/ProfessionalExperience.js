import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Gamepad2 } from 'lucide-react';
import { useAppContext } from './AppContext';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';

const companyLogoMap = {
  'Frogitude': '/images/small-frog.png',
  'superswipe.games': '/images/superswipelogo.png',
  'Mercedes Benz Tech Motion': '/images/mercedes_benz_tech_motion_logo.jpeg',
  'FRIDIE': '/images/FRIDIE_black_wordmark.svg',
  'BOSCH': '/images/bosch_logo.jpeg',
};

const experienceData = {
  de: [
    {
      role: 'Freelance Unity Entwickler & Gründer',
      company: 'Frogitude',
      location: 'Erding, Germany',
      duration: "Mai '25 – Heute",
      description: 'Gründung von Frogitude. Maßgeschneiderte Unity-/C#-Lösungen, von Konzept bis Launch: Spiele, AR/VR und interaktive 3D-Visualisierungen.',
      highlights: [
        'Spiele für PC, Mobile & Konsole (Konzept → Release)',
        'AR/VR-Erlebnisse für HoloLens & Quest',
        'Interaktive 3D-Visualisierungen (Architektur, Produkt, Marketing)',
        'Sauberer Code, Performance-Optimierung, agile Methoden',
      ],
      technologies: ['Unity', 'C#', 'AR/VR', 'Game Design', 'Blender'],
      icon: Briefcase,
      logo: companyLogoMap['Frogitude'],
    },
    {
      role: 'Unity Game Entwickler',
      company: 'superswipe.games',
      location: 'Erding, Germany',
      duration: "Mär '25 – Heute",
      description: 'Mobile-Games mit Unity Cloud Services: Gameplay-Features, Performance-Tuning, Testing & Team-Kollaboration.',
      highlights: [
        'Nutzung von Unity Cloud Services',
        'Implementierung interaktiver Gameplay-Features',
        'Zusammenarbeit in funktionsübergreifenden Teams',
        'Testing und Debugging für reibungsloses Gameplay',
      ],
      technologies: ['Unity', 'Unity Cloud Services', 'Mobile Games', 'C#'],
      icon: Gamepad2,
      logo: companyLogoMap['superswipe.games'],
    },
    {
      role: 'Virtual Engineer',
      company: 'Technology & Strategy GmbH – Mercedes Benz Tech Motion GmbH',
      location: 'Stuttgart, Germany',
      duration: "Okt '21 – Okt '24",
      description: 'XR-Lösungen implementiert & optimiert. Technisches PM, Anforderungsanalyse, agile Entwicklung und Performance-Gewinne auf HoloLens & iOS.',
      highlights: [
        'Implementierung von Lokalisierungslösungen für XR',
        'Performance-Steigerung auf HoloLens & iOS',
        'Wartung von MRTK 3.0 für HoloLens-Anwendungen',
        'Optimiertes Modell-Tracking mit VisionLib SDK',
      ],
      technologies: ['Unity', 'C#', 'MRTK 3.0', 'VisionLib SDK', 'iOS', 'HoloLens', 'Scrum', 'JIRA', 'Zenject', 'UniRx', 'UniTask', 'NuGet'],
      icon: Building,
      logo: companyLogoMap['Mercedes Benz Tech Motion'],
    },
    {
      role: 'Unity Entwickler',
      company: 'FRIDIE',
      location: 'Stuttgart, Germany',
      duration: "Feb '21 – Sep '21",
      description: 'Unity-Prototypen und finale Umsetzungen als studentische Assistenz. Interaktive Projekte u.a. mit Wii Fit Board, Azure Kinect und WebXR.',
      highlights: [
        'Interaktive Werbeerfahrung mit Wii Fit Board',
        'Point Clouds & Prototypen mit Azure Kinect',
        'WebXR-Anwendungen für iOS/Android (Three.js, Unity WebXR)',
      ],
      technologies: ['Unity', 'WebXR', 'Three.js', 'Azure Kinect'],
      icon: Briefcase,
      logo: companyLogoMap['FRIDIE'],
    },
    {
      role: 'Software Engineer Praktikant',
      company: 'BOSCH',
      location: 'Leonberg, Germany',
      duration: "Sep '19 – Mär '20",
      description: 'C#/.NET und WPF: Features erweitert, Wartung & Optimierung bestehender Software.',
      highlights: [
        'Neue Features für bestehende Software',
        'Wartung & Performance-Optimierung',
      ],
      technologies: ['C#', '.NET', 'WPF'],
      icon: Briefcase,
      logo: companyLogoMap['BOSCH'],
    },
    {
      role: 'Groß- & Außenhandelskaufmann (Ausbildung)',
      company: 'Prosol Lacke + Farben GmbH',
      location: 'Heilbronn, Germany',
      duration: "Sep '13 – Jul '16",
      description: 'Kaufmännische Ausbildung im Groß- und Außenhandel.',
      highlights: [
        'Grundlagen Handel/Vertrieb',
      ],
      technologies: ['Kaufmännisch'],
      icon: Briefcase,
    },
  ],
  en: [
    {
      role: 'Freelance Unity Developer & Founder',
      company: 'Frogitude',
      location: 'Erding, Germany',
      duration: "May '25 – Present",
      description: 'Founded Frogitude. Deliver custom Unity/C# solutions end-to-end: games, AR/VR, and interactive 3D visualizations.',
      highlights: [
        'Games for PC, mobile & console (concept → release)',
        'AR/VR for HoloLens & Quest',
        'Interactive 3D (architecture, product, marketing)',
        'Clean code, performance, agile delivery',
      ],
      technologies: ['Unity', 'C#', 'AR/VR', 'Blender', 'Clean Code', 'Agile'],
      icon: Briefcase,
      logo: companyLogoMap['Frogitude'],
    },
    {
      role: 'Unity Game Developer',
      company: 'superswipe.games',
      location: 'Erding, Germany',
      duration: "Mar '25 – Present",
      description: 'Mobile games with Unity Cloud Services: gameplay features, performance tuning, testing & cross-functional collaboration.',
      highlights: [
        'Leveraged Unity Cloud Services',
        'Implemented interactive gameplay features',
        'Cross-functional collaboration',
        'Testing and debugging for smooth gameplay',
      ],
      technologies: ['Unity', 'Unity Cloud Services', 'Mobile Games', 'C#'],
      icon: Gamepad2,
      logo: companyLogoMap['superswipe.games'],
    },
    {
      role: 'Virtual Engineer',
      company: 'Technology & Strategy GmbH – Mercedes Benz Tech Motion GmbH',
      location: 'Stuttgart, Germany',
      duration: "Oct '21 – Oct '24",
      description: 'Implemented & optimized XR solutions. Technical PM, requirements analysis, agile delivery, and performance gains on HoloLens & iOS.',
      highlights: [
        'Implemented localization solutions for XR',
        'Improved performance on HoloLens & iOS',
        'Maintained MRTK 3.0 for HoloLens apps',
        'Optimized model tracking with VisionLib SDK',
      ],
      technologies: ['Unity', 'C#', 'MRTK 3.0', 'VisionLib SDK', 'iOS', 'HoloLens', 'Scrum', 'JIRA', 'Zenject', 'UniRx', 'UniTask', 'NuGet'],
      icon: Building,
      logo: companyLogoMap['Mercedes Benz Tech Motion'],
    },
    {
      role: 'Unity Developer',
      company: 'FRIDIE',
      location: 'Stuttgart, Germany',
      duration: "Feb '21 – Sep '21",
      description: 'Unity prototypes and client deliverables as student assistant. Interactive experiences incl. Wii Fit Board, Azure Kinect, and WebXR.',
      highlights: [
        'Interactive advertising with Wii Fit Board',
        'Point clouds & prototypes using Azure Kinect',
        'WebXR apps for iOS/Android (Three.js, Unity WebXR)',
      ],
      technologies: ['Unity', 'WebXR', 'Three.js', 'Azure Kinect'],
      icon: Briefcase,
      logo: companyLogoMap['FRIDIE'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'BOSCH',
      location: 'Leonberg, Germany',
      duration: "Sep '19 – Mar '20",
      description: 'C#/.NET & WPF: extended features, maintenance & optimization of existing software.',
      highlights: [
        'Added features to existing software',
        'Maintenance & performance optimization',
      ],
      technologies: ['C#', '.NET', 'WPF'],
      icon: Briefcase,
      logo: companyLogoMap['BOSCH'],
    },
    {
      role: 'Wholesale & Foreign Trade Trainee',
      company: 'Prosol Lacke + Farben GmbH',
      location: 'Heilbronn, Germany',
      duration: "Sep '13 – Jul '16",
      description: 'Commercial training in wholesale and foreign trade.',
      highlights: [
        'Foundations of trade/sales',
      ],
      technologies: ['Commercial'],
      icon: Briefcase,
    },
  ],
};

const ExperienceItem = ({ item, index }) => {
  // SSR-safe: Default to mobile rendering if window is undefined (first render)
  let isMobile = false;
  if (typeof window === 'undefined') {
    // On server, render as mobile (no animation)
    isMobile = true;
  } else {
    isMobile = window.innerWidth < 768;
  }
  if (isMobile) {
    return (
      <div className="flex items-start gap-7" data-exp-item>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-effect flex items-center justify-center hover:shadow-lg overflow-hidden" data-avatar>
            {item.logo ? (
              <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            ) : (
              <item.icon className="w-8 h-8 sm:w-9 sm:h-9 text-accent-lime" />
            )}
          </div>
          <div className="w-[3px] flex-grow bg-border-primary/50 my-5" />
        </div>
        <div className="flex-1 pb-10 glass-effect rounded-2xl p-5 sm:p-7 shadow-lg hover:shadow-xl">
          <h3 className="text-xl md:text-3xl font-bold text-text-primary">{item.role}</h3>
          <p className="text-xl font-semibold text-accent-emerald mb-2">{item.company}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm md:text-lg text-text-secondary/90 mb-4">
            <span>{item.location}</span>
            <span>&bull;</span>
            <span>{item.duration}</span>
          </div>
          <p className="text-text-secondary/95 leading-relaxed text-sm md:text-lg mb-3">{item.description}</p>
          {Array.isArray(item.highlights) && item.highlights.length > 0 && (
            <ul className="list-disc list-inside text-text-secondary/95 text-sm md:text-lg mb-3 space-y-1.5">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          {Array.isArray(item.technologies) && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {item.technologies.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs md:text-base rounded-full glass-effect border border-border-primary shadow-sm text-text-primary/95">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
  // Desktop: animated
  return (
    <motion.div
      className="flex items-start gap-7"
      data-exp-item
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-effect flex items-center justify-center hover:shadow-lg overflow-hidden" data-avatar>
          {item.logo ? (
            <img src={item.logo} alt={`${item.company} logo`} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
          ) : (
            <item.icon className="w-8 h-8 sm:w-9 sm:h-9 text-accent-lime" />
          )}
        </div>
        <div className="w-[3px] flex-grow bg-border-primary/50 my-5" />
      </div>
      <div className="flex-1 pb-10 glass-effect rounded-2xl p-5 sm:p-7 shadow-lg hover:shadow-xl">
        <h3 className="text-xl md:text-3xl font-bold text-text-primary">{item.role}</h3>
        <p className="text-xl font-semibold text-accent-emerald mb-2">{item.company}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm md:text-lg text-text-secondary/90 mb-4">
          <span>{item.location}</span>
          <span>&bull;</span>
          <span>{item.duration}</span>
        </div>
        <p className="text-text-secondary/95 leading-relaxed text-sm md:text-lg mb-3">{item.description}</p>
        {Array.isArray(item.highlights) && item.highlights.length > 0 && (
          <ul className="list-disc list-inside text-text-secondary/95 text-sm md:text-lg mb-3 space-y-1.5">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        {Array.isArray(item.technologies) && item.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.technologies.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs md:text-base rounded-full glass-effect border border-border-primary shadow-sm text-text-primary/95">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function ProfessionalExperience({ id, content }) {
  const { language } = useAppContext();
  const experienceList = experienceData[language];
  const sectionRef = useRef(null);
  const containerRef = useRef(null); // mobile vertical
  const progressRef = useRef(null);
  const hContainerRef = useRef(null); // desktop horizontal scroller
  const hContentRef = useRef(null);   // desktop horizontal inner track
  const hPathRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  // Refs for click-to-center control of the horizontal ScrollTrigger
  const stRef = useRef(null);
  const tlRef = useRef(null);
  const xFromRef = useRef(0);
  const xEndRef = useRef(0);

  // Precompute sine points for horizontal SVG path (0..100 viewBox)
  const segments = 64;
  const amplitude = 12; // reduced amplitude to avoid tall vertical swing
  const sinePoints = Array.from({ length: segments }, (_, i) => {
    const t = i / (segments - 1);
    const x = t * 100;
    const y = 50 + Math.sin(2 * Math.PI * t) * amplitude;
    return `${x},${y}`;
  }).join(' ');

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Mobile & tablet: vertical timeline
        '(max-width: 767px)': () => {
          if (!containerRef.current) return;
          const items = containerRef.current.querySelectorAll('[data-exp-item]');
          // Mobile: no animations at all — ensure fully visible and reset any inline transforms
          gsap.set(items, { opacity: 1, y: 0, clearProps: 'transform,opacity' });
            // Measure avatar center to place the vertical spine precisely under the icons
            const measureSpine = () => {
              const container = containerRef.current;
              const avatar = container.querySelector('[data-exp-item] [data-avatar]');
              if (!avatar) return;
              const crect = container.getBoundingClientRect();
              const arect = avatar.getBoundingClientRect();
              const centerX = arect.left - crect.left + arect.width / 2;
              container.style.setProperty('--timeline-x', `${centerX}px`);
            // Ensure triggers recalc after layout measurement
            ScrollTrigger.refresh();
            };
            measureSpine();
            window.addEventListener('resize', measureSpine);
    if (progressRef.current && containerRef.current) {
            gsap.fromTo(
              progressRef.current,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
      // Pixel-based early start for the vertical list itself, accounting for sticky header
      trigger: containerRef.current,
      start: 'top bottom-=500',
      end: 'bottom top+=64',
                  scrub: true,
                },
              }
            );
          }
            // Cleanup handler
            return () => {
              window.removeEventListener('resize', measureSpine);
            };
        },

        // Desktop: pinned horizontal, driven by vertical scroll when section arrives
        '(min-width: 768px)': () => {
          if (!(sectionRef.current && hContainerRef.current && hContentRef.current)) return;
          const sectionTrigger = sectionRef.current; // start when full Experience section hits top
          const pinSection = hContainerRef.current;  // only pin the horizontal container
          const track = hContentRef.current;

          const setupHorizontal = () => {
            const total = track.scrollWidth;
            const vw = window.innerWidth;
            const dist = Math.max(0, total - vw);
            gsap.killTweensOf(track);
            // Kill any previous triggers bound to this section to avoid duplicates on refresh
            ScrollTrigger.getAll().forEach((t) => {
              if (t.vars && (t.vars.trigger === sectionTrigger || t.vars.pin === pinSection)) t.kill();
            });

            // Compute a start offset so the very first item begins near the right edge
            const items = Array.from(track.querySelectorAll('[data-exp-item-horizontal]'));
            // Compute transforms so first item is centered at start, last item centered at end
            // Ensure measurement at neutral position
            gsap.set(track, { x: 0 });
            const sectionRect = pinSection.getBoundingClientRect();
            const centerX = sectionRect.width / 2;
            let xFrom = 0;
            let xEnd = -dist;
            if (items.length > 0) {
              const firstRect = items[0].getBoundingClientRect();
              const lastRect = items[items.length - 1].getBoundingClientRect();
              // measure centers relative to the pinned container, not the page
              const firstCenter = firstRect.left - sectionRect.left + firstRect.width / 2;
              const lastCenter = lastRect.left - sectionRect.left + lastRect.width / 2;
              xFrom = centerX - firstCenter; // make first centered at start
              xEnd = centerX - lastCenter;   // make last centered at end
            }
            const scrollLen = Math.abs(xEnd - xFrom);

      // Save for click-to-center
      xFromRef.current = xFrom;
      xEndRef.current = xEnd;

            // Build a single scrubbed timeline we can tap into for center detection and path draw
            // Ensure initial position is applied immediately to avoid any flicker at pin start
            gsap.set(track, { x: xFrom });
      const tl = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
        trigger: sectionTrigger,
        start: 'top top', // starts when Experience section hits viewport top
                end: () => `+=${scrollLen}`,
                scrub: true,
        pin: pinSection,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onEnter: () => gsap.set(track, { x: xFrom }),
                onEnterBack: () => gsap.set(track, { x: xFrom }),
                onLeave: () => gsap.set(track, { x: xEnd }),
                onLeaveBack: () => gsap.set(track, { x: xFrom }),
                onUpdate: () => {
                  // Determine centered item; enlarge inline instead of opening modal
                  const centerX = window.innerWidth / 2;
                  let nearestIdx = -1;
                  let nearestDist = Infinity;
                  items.forEach((el, i) => {
                    const r = el.getBoundingClientRect();
                    const elCenter = r.left + r.width / 2;
                    const d = Math.abs(elCenter - centerX);
                    if (d < nearestDist) {
                      nearestDist = d;
                      nearestIdx = i;
                    }
                  });
                  // Update focused index only if changed and within a threshold
                  const threshold = 200; // more forgiving so mid items reliably focus
                  if (nearestIdx !== -1 && nearestDist < threshold && nearestIdx !== focusedIndex) {
                    setFocusedIndex(nearestIdx);
                  }
                },
              },
            });

      // Store timeline and its ScrollTrigger for later programmatic control
      tlRef.current = tl;
      stRef.current = tl.scrollTrigger;

            // track movement
            tl.fromTo(track, { x: xFrom }, { x: xEnd }, 0);

            // Path draw synced with scroll
            if (hPathRef.current) {
              const pl = hPathRef.current.querySelector('polyline');
              if (pl && pl.getTotalLength) {
                const len = pl.getTotalLength();
                // Start with the line drawn from the left edge to the center (50%),
                // then extend to the full length by the end of the scroll.
                gsap.set(pl, { strokeDasharray: len, strokeDashoffset: len * 0.5 });
                tl.to(pl, { strokeDashoffset: 0 }, 0);
              }
            }
          };

          setupHorizontal();
          // If images load late, rebuild once to get exact widths for centering
          const imgs = Array.from(hContentRef.current.querySelectorAll('img'));
          const onImgLoad = () => ScrollTrigger.refresh();
          imgs.forEach((img) => {
            if (!img.complete) {
              img.addEventListener('load', onImgLoad, { once: true });
              img.addEventListener('error', onImgLoad, { once: true });
            }
          });
          ScrollTrigger.addEventListener('refreshInit', setupHorizontal);
          // Ensure after refresh the starting position is correct if at the top
          const onRefresh = () => {
            if (!hContentRef.current) return;
            const track = hContentRef.current;
            const st = stRef.current;
            if (!st) return;
            const p = st.progress;
            if (p <= 0.0001) {
              gsap.set(track, { x: xFromRef.current });
            } else if (p >= 0.9999) {
              gsap.set(track, { x: xEndRef.current });
            }
          };
          ScrollTrigger.addEventListener('refresh', onRefresh);
          // Cleanup listeners when media query unmatches
          return () => {
            ScrollTrigger.removeEventListener('refresh', onRefresh);
            ScrollTrigger.removeEventListener('refreshInit', setupHorizontal);
          };
        },
      });
    });
    return () => ctx.revert();
  }, [language]);

  // When language changes or viewport refreshes, reset focus
  useEffect(() => {
    setFocusedIndex(-1);
  }, [language]);

  // Center a horizontal item programmatically (used by header logo buttons)
  const centerByIndex = (idx) => {
    if (!hContentRef.current || !hContainerRef.current) return;
    const track = hContentRef.current;
    const items = Array.from(track.querySelectorAll('[data-exp-item-horizontal]'));
    const el = items[idx];
    if (!el) return;
    // If we have an active ScrollTrigger, compute the target progress and scroll smoothly
    if (stRef.current) {
      const currentX = Number(gsap.getProperty(track, 'x')) || 0;
      const centerX = window.innerWidth / 2;
      const r = el.getBoundingClientRect();
      const elCenter = r.left + r.width / 2;
      const desiredX = currentX + (centerX - elCenter);
      const xFrom = xFromRef.current;
      const xEnd = xEndRef.current;
      const denom = (xEnd - xFrom) || 1;
      let p = (desiredX - xFrom) / denom;
      p = Math.max(0, Math.min(1, p));
      const st = stRef.current;
      const targetScroll = st.start + p * (st.end - st.start);
      // Use native smooth scroll to move the window; ScrollTrigger will sync the timeline
      try {
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, targetScroll);
      }
    }
    setFocusedIndex(idx);
  };

  const handleHeaderClick = (logoPath) => {
    // Find the corresponding index in experienceList by matching the logo path
    const targetIdx = experienceList.findIndex((it) => it.logo && it.logo === logoPath);
    if (targetIdx !== -1) centerByIndex(targetIdx);
  };

  const headerEntries = useMemo(() => {
    const out = [];
    const seen = new Set();
    for (const it of experienceList) {
      if (it.logo && !seen.has(it.logo)) {
        seen.add(it.logo);
        const kv = Object.entries(companyLogoMap).find(([k, v]) => v === it.logo);
        out.push({ logo: it.logo, label: kv ? kv[0] : it.company });
      }
    }
    return out;
  }, [experienceList]);

  return (
  <section id={id} className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
  {/* Sticky on desktop only; non-sticky on mobile for simpler flow */}
  <div className="md:sticky md:top-[80px] z-30">
          <div className="rounded-2xl border border-border-primary/50 bg-bg-primary/80 backdrop-blur-sm px-4 sm:px-6 py-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-text-primary">
                <span className="text-gradient">{content.title}</span>
              </h2>
            </motion.div>

            {/* Company logos strip -> clickable to center timeline items (sorted like timeline) */}
            <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-4 justify-center">
              {headerEntries.map(({ logo, label }) => (
                <button
                  key={logo}
                  type="button"
                  onClick={() => handleHeaderClick(logo)}
                  className="h-10 px-4 rounded-full glass-effect border border-border-primary flex items-center gap-3 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-lime/70"
                >
                  <img src={logo} alt={`${label} logo`} className="h-6 w-auto object-contain" />
                  <span className="text-sm text-text-secondary">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: horizontal sine-curve timeline */}
  <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[30rem] lg:h-[36rem] hidden md:block overflow-hidden z-10" ref={hContainerRef}>
          <div ref={hContentRef} className="relative h-full" style={{ minWidth: `${Math.max(100, experienceList.length * 22)}rem` }}>
          <svg ref={hPathRef} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline fill="none" stroke="var(--accent-lime)" strokeWidth="0.8" points={sinePoints} />
          </svg>
          {experienceList.map((item, idx) => {
            const t = experienceList.length > 1 ? idx / (experienceList.length - 1) : 0;
            const y = 50 + Math.sin(2 * Math.PI * t) * amplitude;
            const isFocused = focusedIndex === idx;
            return (
              <div
                key={idx}
                className="absolute group"
                style={{ left: `${t * 100}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                data-exp-item-horizontal
                role="button"
                tabIndex={0}
                aria-expanded={isFocused}
                onMouseEnter={() => setFocusedIndex(idx)}
                onFocus={() => setFocusedIndex(idx)}
                onClick={() => setFocusedIndex(idx)}
              >
                {/* dot */}
                <div className={`w-2 h-2 rounded-full bg-accent-lime mb-2 mx-auto transition-transform ${isFocused ? 'scale-150' : 'group-hover:scale-125'}`} />
                {/* card (expands when focused or on hover) */}
                <div className={`glass-effect rounded-xl p-4 shadow-lg transition-all ${isFocused ? 'scale-105 min-w-[22rem] max-w-md ring-2 ring-accent-lime' : 'min-w-[16rem] max-w-xs group-hover:scale-105 group-hover:shadow-xl'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full glass-effect flex items-center justify-center overflow-hidden">
                      {item.logo ? (
                        <img src={item.logo} alt={`${item.company} logo`} className="w-8 h-8 object-contain" />
                      ) : (
                        <item.icon className="w-6 h-6 text-accent-lime" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm md:text-base text-text-secondary/95">{item.duration}</p>
                      <p className="text-text-primary font-semibold leading-tight md:text-lg">{item.company}</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-text-secondary/95">{item.role}</p>
                  {/* details shown when focused or on hover */}
                  <div className={`${isFocused ? 'block' : 'hidden group-hover:block'} mt-2 text-sm md:text-base text-text-secondary/95 space-y-2`}>
                    {item.description && (
                      <p className="leading-relaxed">{item.description}</p>
                    )}
                    {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                      <ul className="list-disc list-inside space-y-1.5">
                        {item.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {Array.isArray(item.technologies) && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.technologies.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs md:text-sm rounded-full glass-effect border border-border-primary shadow-sm text-text-primary/95">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* trailing ellipsis removed */}
          </div>
        </div>

    {/* Mobile: vertical timeline with GSAP progress */}
  <div className="relative max-w-3xl mx-auto space-y-16 md:hidden z-10 mt-6" ref={containerRef}>
          <div className="absolute top-0 bottom-0 w-1 bg-border-primary/40 pointer-events-none" style={{ left: 'calc(var(--timeline-x, 2.5rem) - 2px)' }} />
          <div ref={progressRef} className="absolute top-0 bottom-0 w-1 bg-accent-lime origin-top scale-y-0 pointer-events-none" style={{ left: 'calc(var(--timeline-x, 2.5rem) - 2px)' }} />
          {experienceList.map((item, idx) => (
            <ExperienceItem key={idx} item={item} index={idx} />
          ))}
          {/* trailing ellipsis removed */}
        </div>
      </div>

  {/* No modal: details are expanded inline for the centered item */}
    </section>
  );
}

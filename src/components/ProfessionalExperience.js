import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building, Gamepad2 } from 'lucide-react';
import { useAppContext } from './AppContext';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';
import { withBasePath } from '@/lib/basePath';
import { yearsForList } from '@/lib/years';

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

// Small helper component: when active, randomly pops a few lily pads
// around the centered item with a quick pop-in/out animation.
const FloatingPads = ({ active, intensity = 0 }) => {
  const [pads, setPads] = useState([]);
  const idRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!active) {
      setPads([]);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const spawn = () => {
      const id = idRef.current++;
      const angle = Math.random() * Math.PI * 2;
      const r = 36 + Math.random() * (80 + intensity * 20); // px radius from center, grows with intensity
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      const size = 14 + Math.floor(Math.random() * (10 + intensity * 2)); // px, grows with intensity
      setPads((prev) => [...prev, { id, x, y, size }]);
      // Remove after a short lifetime
      setTimeout(() => {
        setPads((prev) => prev.filter((p) => p.id !== id));
      }, 1500 + Math.floor(intensity * 150));
    };

    // burst a few quickly, then keep sprinkling while focused
    const initial = 3 + Math.floor(Math.random() * 2) + Math.round(intensity * 0.6);
    for (let i = 0; i < initial; i++) setTimeout(spawn, i * 120);
    const baseInterval = 360;
    const interval = Math.max(180, baseInterval - Math.floor(intensity * 60));
    intervalRef.current = setInterval(spawn, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [active]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <AnimatePresence>
        {pads.map((p) => (
          <motion.img
            key={p.id}
            src={withBasePath('/images/lily-pad.png')}
            alt=""
            className="drop-shadow absolute left-1/2 top-1/2"
            style={{ width: p.size, height: p.size, transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))` }}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20, duration: 0.45 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
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
  const headerRef = useRef(null);
  const containerRef = useRef(null); // mobile vertical
  const vWrapperRef = useRef(null);  // mobile vertical wrapper for pin duration
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
  const scrollLenRef = useRef(0);

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
          // Pin the vertical list within its wrapper for a sticky effect
          const wrapper = vWrapperRef.current;
          if (wrapper && containerRef.current) {
            const pinOffset = 100; // px from top to account for header
            const getEnd = () => {
              const listH = containerRef.current.scrollHeight || 0;
              const vh = window.innerHeight || 0;
              // Scroll length while pinned
              const d = Math.max(0, listH - vh + 200);
              return `+=${d}`;
            };
            ScrollTrigger.create({
              trigger: wrapper,
              start: `top top+=${pinOffset}`,
              end: getEnd,
              pin: containerRef.current,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            });
            // Progress bar synced to the same duration
            if (progressRef.current) {
              gsap.fromTo(progressRef.current, { scaleY: 0 }, {
                scaleY: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: wrapper,
                  start: `top top+=${pinOffset}`,
                  end: getEnd,
                  scrub: true,
                  invalidateOnRefresh: true,
                },
              });
            }
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

          // Helper: compute offsets using current refs (used by setup and refresh)
          const computeOffsetsGlobal = () => {
            const t = hContentRef.current;
            const pin = hContainerRef.current;
            if (!(t && pin)) return { xFrom: 0, xEnd: 0, scrollLen: 0 };
            gsap.set(t, { x: 0 });
            const total = t.scrollWidth;
            const vw = window.innerWidth;
            const dist = Math.max(0, total - vw);
            const sectionRect = pin.getBoundingClientRect();
            const centerX = sectionRect.width / 2;
            const itemsNow = Array.from(t.querySelectorAll('[data-exp-item-horizontal]'));
            let xFrom = 0;
            let xEnd = -dist;
            if (itemsNow.length > 0) {
              const firstRect = itemsNow[0].getBoundingClientRect();
              const lastRect = itemsNow[itemsNow.length - 1].getBoundingClientRect();
              const firstCenter = firstRect.left - sectionRect.left + firstRect.width / 2;
              const lastCenter = lastRect.left - sectionRect.left + lastRect.width / 2;
              xFrom = centerX - firstCenter;
              xEnd = centerX - lastCenter;
            }
            // Ensure leftward movement on scroll-down
            if (xEnd - xFrom >= 0) {
              const distOverflow = Math.max(0, total - vw);
              const mag = Math.max(Math.abs(xEnd - xFrom), distOverflow);
              xEnd = xFrom - mag;
            }
            let scrollLen = Math.abs(xEnd - xFrom);
            if (!scrollLen || scrollLen < 8) {
              xFrom = 0;
              xEnd = -dist;
              scrollLen = Math.max(0, dist);
            }
            return { xFrom, xEnd, scrollLen };
          };

          const setupHorizontal = () => {
            const items = Array.from(track.querySelectorAll('[data-exp-item-horizontal]'));
            gsap.killTweensOf(track);
            // Kill any previous triggers bound to this section to avoid duplicates on refresh
            ScrollTrigger.getAll().forEach((t) => {
              if (t.vars && (t.vars.trigger === sectionTrigger || t.vars.pin === pinSection)) t.kill();
            });

            const computeOffsets = () => {
              // Measure at neutral position to get correct rects
              gsap.set(track, { x: 0 });
              const total = track.scrollWidth;
              const vw = window.innerWidth;
              const dist = Math.max(0, total - vw);
              const sectionRect = pinSection.getBoundingClientRect();
              const centerX = sectionRect.width / 2;
              let xFrom = 0;
              let xEnd = -dist;
              if (items.length > 0) {
                const firstRect = items[0].getBoundingClientRect();
                const lastRect = items[items.length - 1].getBoundingClientRect();
                const firstCenter = firstRect.left - sectionRect.left + firstRect.width / 2;
                const lastCenter = lastRect.left - sectionRect.left + lastRect.width / 2;
                xFrom = centerX - firstCenter;
                xEnd = centerX - lastCenter;
              }
              // Ensure leftward movement on scroll down (x decreases)
              if (xEnd - xFrom >= 0) {
                const distOverflow = Math.max(0, total - vw);
                const mag = Math.max(Math.abs(xEnd - xFrom), distOverflow);
                xEnd = xFrom - mag;
              }
              let scrollLen = Math.abs(xEnd - xFrom);
              // Fallback: if zero (bad measurement), use dist
              if (!scrollLen || scrollLen < 8) {
                xFrom = 0;
                xEnd = -dist;
                scrollLen = Math.max(0, dist);
              }
              return { xFrom, xEnd, scrollLen };
            };

            // Initial compute (pre-pin); will recompute on pin enter as well
            let { xFrom, xEnd, scrollLen } = computeOffsets();
            scrollLenRef.current = scrollLen;

            // Save for click-to-center
            xFromRef.current = xFrom;
            xEndRef.current = xEnd;

            // Build a scrubbed timeline
            gsap.set(track, { x: xFrom });
            const tl = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: sectionTrigger,
                // Start a bit earlier so pinning begins before the heading reaches the top
                start: 'top top-=120',
                end: () => `+=${scrollLenRef.current}`,
                scrub: true,
                pin: pinSection,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onEnter: () => {
                  // Recompute after pin applied to ensure perfect centering
                  const off = computeOffsets();
                  xFromRef.current = off.xFrom;
                  xEndRef.current = off.xEnd;
                  scrollLenRef.current = off.scrollLen;
                  gsap.set(track, { x: off.xFrom });
                  // Schedule a safe global refresh on next frame so end() picks up new length
                  requestAnimationFrame(() => {
                    try { ScrollTrigger.refresh(); } catch {}
                  });
                },
                onEnterBack: () => gsap.set(track, { x: xFromRef.current }),
                onLeave: () => gsap.set(track, { x: xEndRef.current }),
                onLeaveBack: () => gsap.set(track, { x: xFromRef.current }),
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
            tl.fromTo(
              track,
              { x: () => xFromRef.current },
              { x: () => xEndRef.current, immediateRender: true },
              0
            );

            // Path draw synced with scroll
      if (hPathRef.current) {
              const pl = hPathRef.current.querySelector('polyline');
              if (pl && pl.getTotalLength) {
                const len = pl.getTotalLength();
        // Start drawing from the very beginning (left) and extend to full length.
        gsap.set(pl, { strokeDasharray: len, strokeDashoffset: len });
                tl.to(pl, { strokeDashoffset: 0 }, 0);
              }
            }
          };

          setupHorizontal();
          // While the horizontal section is pinned, translate horizontal wheel gestures into vertical scroll
          const forwardWheel = (e) => {
            const st = stRef.current;
            if (!st) return;
            const y = window.scrollY || window.pageYOffset || 0;
            // Only act while the horizontal pin is active in the viewport range
            if (y < st.start || y > st.end) return;
            // Some touchpads emit horizontal deltas (deltaX) when hovering fixed header — convert to vertical
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
              try { e.preventDefault(); } catch {}
              const factor = 1.0; // 1:1 mapping feels natural on Windows touchpads
              const top = y + e.deltaX * factor;
              window.scrollTo({ top });
            }
          };
          window.addEventListener('wheel', forwardWheel, { passive: false });
          // If images load late, rebuild once to get exact widths for centering
          const imgs = Array.from(hContentRef.current.querySelectorAll('img'));
          const onImgLoad = () => ScrollTrigger.refresh();
          imgs.forEach((img) => {
            if (!img.complete) {
              img.addEventListener('load', onImgLoad, { once: true });
              img.addEventListener('error', onImgLoad, { once: true });
            }
          });
          // Pin the header strip for the duration without extra spacing
          if (headerRef.current) {
            ScrollTrigger.create({
              trigger: sectionTrigger,
              start: 'top top-=120',
              end: () => `+=${scrollLenRef.current}`,
              pin: headerRef.current,
              pinSpacing: false,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            });
          }

          // Ensure after refresh the offsets are consistent and position matches current progress
          const onRefresh = () => {
            if (!hContentRef.current) return;
            const track = hContentRef.current;
            const st = stRef.current;
            if (!st) return;
            // Recompute offsets via global helper
            const off = computeOffsetsGlobal();
            xFromRef.current = off.xFrom;
            xEndRef.current = off.xEnd;
            scrollLenRef.current = off.scrollLen;
            const p = st.progress || 0;
            const x = xFromRef.current + p * (xEndRef.current - xFromRef.current);
            gsap.set(track, { x });
          };
          ScrollTrigger.addEventListener('refresh', onRefresh);
          // Cleanup listeners when media query unmatches
          return () => {
            ScrollTrigger.removeEventListener('refresh', onRefresh);
            window.removeEventListener('wheel', forwardWheel);
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
  {/* Header strip (will be pinned via ScrollTrigger during horizontal scroll) */}
  <div ref={headerRef} className="z-30">
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
          <div ref={hContentRef} className="relative h-full" style={{ minWidth: `${Math.max(100, experienceList.length * 28)}rem` }}>
          <svg ref={hPathRef} className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline fill="none" stroke="var(--accent-lime)" strokeWidth="0.8" points={sinePoints} />
          </svg>
          {experienceList.map((item, idx) => {
            const t = experienceList.length > 1 ? idx / (experienceList.length - 1) : 0;
            const y = 50 + Math.sin(2 * Math.PI * t) * amplitude;
            const isFocused = focusedIndex === idx;
            const yrsIntensity = Math.min(1, yearsForList(item.technologies) / 5); // normalize 0..1 around 5y
      return (
              <div
                key={idx}
                className={`absolute group ${isFocused ? 'z-20' : 'z-10'}`}
                style={{ left: `${t * 100}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                data-exp-item-horizontal
                role="button"
                tabIndex={0}
                aria-expanded={isFocused}
                onMouseEnter={() => setFocusedIndex(idx)}
                onFocus={() => setFocusedIndex(idx)}
                onClick={() => setFocusedIndex(idx)}
              >
                <div className="relative z-10 flex flex-col items-stretch">
                  {/* dot (lily pad) */}
                  <img
                    src={withBasePath('/images/lily-pad.png')}
                    alt=""
                    className={`w-6 h-6 mb-2 mx-auto transition-transform drop-shadow ${isFocused ? '' : 'group-hover:scale-110'}`}
                    style={{ transform: isFocused ? `scale(${1.35 + yrsIntensity * 0.25})` : undefined }}
                  />
                  {/* card (expands when focused or on hover) */}
                  <motion.div layout className={`glass-effect rounded-xl p-4 shadow-lg ${isFocused ? 'ring-2 ring-accent-lime min-w-[24rem] max-w-md' : 'min-w-[16rem] max-w-sm'}`}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}>
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
          <div className={`${isFocused ? 'block' : 'hidden group-hover:block'} mt-2 text-sm md:text-base text-text-secondary/95 space-y-2 transition-opacity duration-150 ${isFocused ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'}`}>
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
        </motion.div>
                </div>
                {/* Floating pads overlay (beneath content) */}
                <FloatingPads active={isFocused} intensity={yrsIntensity * 5} />
              </div>
            );
          })}
          {/* trailing ellipsis removed */}
          </div>
        </div>

    {/* Mobile: vertical timeline pinned with ScrollTrigger */}
    <div className="md:hidden relative" ref={vWrapperRef}>
      <div className="relative max-w-3xl mx-auto space-y-16 z-10 mt-6" ref={containerRef}>
          <div className="absolute top-0 bottom-0 w-1 bg-border-primary/40 pointer-events-none" style={{ left: 'calc(var(--timeline-x, 2.5rem) - 2px)' }} />
          <div ref={progressRef} className="absolute top-0 bottom-0 w-1 bg-accent-lime origin-top scale-y-0 pointer-events-none" style={{ left: 'calc(var(--timeline-x, 2.5rem) - 2px)' }} />
          {experienceList.map((item, idx) => (
            <ExperienceItem key={idx} item={item} index={idx} />
          ))}
      </div>
    </div>
      </div>

  {/* No modal: details are expanded inline for the centered item */}
    </section>
  );
}

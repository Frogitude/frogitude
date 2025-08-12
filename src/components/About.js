import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from './AppContext';
import GitContributions from './GitContributions';
import { Youtube, Instagram, Linkedin, Github, Twitter, MessageSquare, Briefcase } from 'lucide-react';

const PROFILE_PIC_URL = '/images/ggbavaria2.jpg';

const techStack = [
  // Game engines & runtimes
  { name: 'Unity', logo: '/images/unity-logo.png' },
  { name: 'Unreal Engine', logo: '/placeholder-logo.svg' },
  { name: 'Godot', logo: '/images/godot-logo.png' },

  // Programming languages & frameworks
  { name: 'C# / .NET', logo: '/images/csharp-logo.png' },
  { name: 'Python', logo: '/images/python-logo.png' },
  { name: 'JavaScript', logo: '/placeholder-logo.svg' },
  { name: 'TypeScript', logo: '/placeholder-logo.svg' },
  { name: 'HTML/CSS', logo: '/placeholder-logo.svg' },
  { name: 'Node.js', logo: '/placeholder-logo.svg' },

  // XR, devices & SDKs
  { name: 'HoloLens', logo: '/placeholder-logo.svg' },
  { name: 'MRTK 2/3', logo: '/placeholder-logo.svg' },
  { name: 'OpenXR', logo: '/placeholder-logo.svg' },
  { name: 'WebXR', logo: '/placeholder-logo.svg' },
  { name: 'VisionLib', logo: '/placeholder-logo.svg' },
  { name: 'ARKit', logo: '/placeholder-logo.svg' },
  { name: 'ARCore', logo: '/placeholder-logo.svg' },
  { name: 'Meta Quest', logo: '/placeholder-logo.svg' },

  // Tools & pipelines
  { name: 'Unity Cloud Services', logo: '/placeholder-logo.svg' },
  { name: 'Git / GitHub', logo: '/placeholder-logo.svg' },
  { name: 'GitLab', logo: '/placeholder-logo.svg' },
  { name: 'Jira', logo: '/placeholder-logo.svg' },
  { name: 'Confluence', logo: '/placeholder-logo.svg' },
  { name: 'Cloudflare', logo: '/placeholder-logo.svg' },

  // Art & DCC
  { name: 'Blender', logo: '/images/blender-logo.png' },
  { name: 'Aseprite', logo: '/images/aseprite-logo.png' },
];

export default function About({ id, content }) {
  const { theme } = useAppContext();
  const TikTokIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-4" {...props}><path d="M9 18V5l12-2v13"/><path d="M9 18a4 4 0 1 1-4-4 4 4 0 0 1 4 4Z"/><path d="M21 16a4 4 0 1 1-4-4 4 4 0 0 1 4 4Z"/></svg>
  );
  // Minimal brand-like glyphs for Fiverr and Upwork using letters inside a circle
  const FiverrIcon = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="ui-sans-serif, system-ui" fill="currentColor" fontWeight="700">Fv</text>
    </svg>
  );
  const UpworkIcon = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="ui-sans-serif, system-ui" fill="currentColor" fontWeight="700">Up</text>
    </svg>
  );
  const socials = [
    { href: 'https://discord.gg/Bfsx9sTDfh', label: 'Discord', icon: MessageSquare },
    { href: 'https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://github.com/freddynewton', label: 'GitHub', icon: Github },
    { href: 'https://www.youtube.com/@Frogitude_dev', label: 'YouTube', icon: Youtube },
    { href: 'https://www.instagram.com/frogitude.dev/', label: 'Instagram', icon: Instagram },
    { href: 'https://www.tiktok.com/@frogitude.dev', label: 'TikTok', icon: TikTokIcon },
    { href: 'https://freddynewton.github.io/', label: 'X / Twitter', icon: Twitter },
  { href: 'https://de.fiverr.com/s/R7ybW0l', label: 'Fiverr', icon: FiverrIcon },
  { href: 'https://www.upwork.com/freelancers/~01af64a6c98eeeae40', label: 'Upwork', icon: UpworkIcon },
  ];

  // Mind map data (grouped)
  const groups = useMemo(() => ([
    { title: 'Game Dev', items: ['Unity', 'C#', 'Clean Code', 'Design Patterns', 'Dependency Injection', 'Procedural Generation', 'Game AI', 'Godot', 'Unreal Engine', 'C++', 'GDScript'] },
    { title: 'XR', items: ['OpenXR', 'WebXR', 'MRTK', 'HoloLens', 'Quest', 'VisionLib', 'Meta'] },
    { title: 'Software', items: ['TypeScript', 'JavaScript', 'Python', 'React', 'Next.js', 'Node.js', 'GSAP', 'WebGL'] },
  { title: 'Tools', items: ['Git / GitHub', 'Jira', 'Unity Cloud', 'Cloudflare'] },
    { title: 'Art', items: ['Blender', 'Aseprite', 'Gimp'] },
  ]), []);

  const initialPositions = useMemo(() => {
    const center = { x: 50, y: 50 };
    const radius = 26; // closer to center for main groups
    const angles = [270, 342, 54, 126, 198]; // spread around a circle
    return angles.map((deg) => {
      const rad = (deg * Math.PI) / 180;
      return { x: center.x + radius * Math.cos(rad), y: center.y + radius * Math.sin(rad) };
    });
  }, []);
  const [nodes, setNodes] = useState(initialPositions);
  const [center, setCenter] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);
  const draggingRef = useRef({ idx: -1, mode: 'none', startX: 0, startY: 0, nodes: [], center: { x: 50, y: 50 } });
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const spring = { type: 'spring', stiffness: 260, damping: 20, mass: 0.6 };
  // Physics model refs
  const physRef = useRef({ running: false, raf: 0, calmFrames: 0 });
  const posRef = useRef({ nodes: [], center: { x: 50, y: 50 } });
  const velRef = useRef({ nodes: [], center: { x: 0, y: 0 } });
  const targetRef = useRef({ nodes: [], center: { x: 50, y: 50 } });

  // Initialize physics refs when groups/nodes change
  React.useEffect(() => {
    posRef.current.nodes = nodes.map((n) => ({ ...n }));
    posRef.current.center = { ...center };
    velRef.current.nodes = nodes.map(() => ({ x: 0, y: 0 }));
    velRef.current.center = { x: 0, y: 0 };
    targetRef.current.nodes = nodes.map((n) => ({ ...n }));
    targetRef.current.center = { ...center };
  }, [nodes, center, groups.length]);

  const startPhysics = () => {
    if (physRef.current.running) return;
    physRef.current.running = true;
    const k = 0.12; // spring constant
    const damping = 0.80; // velocity damping per frame
    const epsV = 0.03;
    const epsP = 0.06;
    const step = () => {
      const pos = posRef.current;
      const vel = velRef.current;
      const tgt = targetRef.current;
      let maxV = 0;
      let maxP = 0;
      // Nodes
      for (let i = 0; i < pos.nodes.length; i++) {
        const ax = (tgt.nodes[i].x - pos.nodes[i].x) * k;
        const ay = (tgt.nodes[i].y - pos.nodes[i].y) * k;
        vel.nodes[i].x = (vel.nodes[i].x + ax) * damping;
        vel.nodes[i].y = (vel.nodes[i].y + ay) * damping;
        pos.nodes[i].x = clamp(pos.nodes[i].x + vel.nodes[i].x, 4, 96);
        pos.nodes[i].y = clamp(pos.nodes[i].y + vel.nodes[i].y, 4, 96);
        maxV = Math.max(maxV, Math.abs(vel.nodes[i].x), Math.abs(vel.nodes[i].y));
        maxP = Math.max(maxP, Math.abs(tgt.nodes[i].x - pos.nodes[i].x), Math.abs(tgt.nodes[i].y - pos.nodes[i].y));
      }
      // Center
      const acx = (tgt.center.x - pos.center.x) * k;
      const acy = (tgt.center.y - pos.center.y) * k;
      vel.center.x = (vel.center.x + acx) * damping;
      vel.center.y = (vel.center.y + acy) * damping;
      pos.center.x = clamp(pos.center.x + vel.center.x, 4, 96);
      pos.center.y = clamp(pos.center.y + vel.center.y, 4, 96);
      maxV = Math.max(maxV, Math.abs(vel.center.x), Math.abs(vel.center.y));
      maxP = Math.max(maxP, Math.abs(tgt.center.x - pos.center.x), Math.abs(tgt.center.y - pos.center.y));

      // Push to state
      // Avoid excessive renders by batching minimal updates
      setNodes(pos.nodes.map((n) => ({ x: n.x, y: n.y })));
      setCenter({ x: pos.center.x, y: pos.center.y });

      if (maxV < epsV && maxP < epsP) {
        physRef.current.calmFrames += 1;
      } else {
        physRef.current.calmFrames = 0;
      }
      if (physRef.current.calmFrames > 8 && draggingRef.current.mode === 'none') {
        physRef.current.running = false;
        physRef.current.raf = 0;
        return;
      }
      physRef.current.raf = requestAnimationFrame(step);
    };
    physRef.current.raf = requestAnimationFrame(step);
  };

  // Color palette per parent group (primary stroke color)
  const groupColors = useMemo(() => [
    { primary: 'rgb(16,185,129)', child: 'rgba(16,185,129,0.7)' },   // emerald
    { primary: 'rgb(59,130,246)', child: 'rgba(59,130,246,0.7)' },   // blue
    { primary: 'rgb(245,158,11)', child: 'rgba(245,158,11,0.8)' },   // amber
    { primary: 'rgb(139,92,246)', child: 'rgba(139,92,246,0.75)' },  // violet
    { primary: 'rgb(239,68,68)', child: 'rgba(239,68,68,0.75)' },    // red
  ], []);

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const onPointerDown = (idx) => (e) => {
    e.preventDefault();
    draggingRef.current.idx = idx;
    draggingRef.current.mode = 'physics';
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      draggingRef.current.startX = ((e.clientX - rect.left) / rect.width) * 100;
      draggingRef.current.startY = ((e.clientY - rect.top) / rect.height) * 100;
    }
    draggingRef.current.nodes = nodes.map((n) => ({ ...n }));
    draggingRef.current.center = { ...center };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    startPhysics();
  };
  const onPointerDownRoot = (e) => {
    e.preventDefault();
    draggingRef.current.idx = 'root';
    draggingRef.current.mode = 'physics-root';
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      draggingRef.current.startX = ((e.clientX - rect.left) / rect.width) * 100;
      draggingRef.current.startY = ((e.clientY - rect.top) / rect.height) * 100;
    }
    draggingRef.current.nodes = nodes.map((n) => ({ ...n }));
    draggingRef.current.center = { ...center };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    startPhysics();
  };
  const onPointerMove = (e) => {
    const i = draggingRef.current.idx;
    if (i < 0 || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPerc = clamp(((e.clientX - rect.left) / rect.width) * 100, 6, 94);
    const yPerc = clamp(((e.clientY - rect.top) / rect.height) * 100, 6, 94);
    const baseNodes = draggingRef.current.nodes;
    const baseCenter = draggingRef.current.center;
    if (draggingRef.current.mode === 'physics-root') {
      // Root drives: set root target to pointer, others follow via weighted attraction
      const dx = xPerc - baseCenter.x;
      const dy = yPerc - baseCenter.y;
      targetRef.current.center = { x: clamp(baseCenter.x + dx, 4, 96), y: clamp(baseCenter.y + dy, 4, 96) };
      targetRef.current.nodes = baseNodes.map((n, j) => {
        // attraction weight by distance to center
        const dist = Math.hypot(n.x - baseCenter.x, n.y - baseCenter.y);
        const w = 0.75 * Math.exp(-dist / 28); // closer groups move more
        return { x: clamp(n.x + dx * w, 4, 96), y: clamp(n.y + dy * w, 4, 96) };
      });
    } else {
      // Group drives: dragged group goes to pointer, others get pulled towards
      const dx = xPerc - baseNodes[i].x;
      const dy = yPerc - baseNodes[i].y;
      targetRef.current.nodes = baseNodes.map((n, j) => {
        if (j === i) return { x: clamp(n.x + dx, 4, 96), y: clamp(n.y + dy, 4, 96) };
        const dist = Math.hypot(n.x - baseNodes[i].x, n.y - baseNodes[i].y);
        const w = 0.65 * Math.exp(-dist / 26); // nearby groups follow more
        return { x: clamp(n.x + dx * w, 4, 96), y: clamp(n.y + dy * w, 4, 96) };
      });
      // Center follows a bit too
      targetRef.current.center = { x: clamp(baseCenter.x + dx * 0.5, 4, 96), y: clamp(baseCenter.y + dy * 0.5, 4, 96) };
    }
  };
  const onPointerUp = () => {
    draggingRef.current.idx = -1;
    draggingRef.current.mode = 'none';
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };

  const onMouseMoveContainer = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseTargetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // Slow trailing of mouse glow to make background animation very slow
  React.useEffect(() => {
    let raf = 0;
    const tick = () => {
      setMouse((prev) => {
        const tx = mouseTargetRef.current.x;
        const ty = mouseTargetRef.current.y;
        const nx = prev.x + (tx - prev.x) * 0.06;
        const ny = prev.y + (ty - prev.y) * 0.06;
        return { x: nx, y: ny };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Compute child node positions as an outward wedge (1-2 arcs) from each group node
  const childPositions = useMemo(() => {
    const all = [];
    for (let i = 0; i < groups.length; i++) {
      const cx = nodes[i].x;
      const cy = nodes[i].y;
      const items = groups[i].items;
      const n = items.length;
      // Angle pointing from center to group
  const baseRad = Math.atan2(cy - center.y, cx - center.x);
      const baseDeg = (baseRad * 180) / Math.PI;
  // Wedge span scales with count (tighter for clustering)
  const wedge = n <= 6 ? 90 : n <= 10 ? 120 : 150; // degrees
      const startDeg = baseDeg - wedge / 2;
      const endDeg = baseDeg + wedge / 2;
  // Radii tuned: a bit closer while readable
  const outerRadius = Math.min(18, 11 + Math.ceil(n / 2)); // percent
  const innerRadius = Math.max(8, outerRadius - 5);
      // Distribute across one or two arcs
      const maxPerArc = 8;
      const useTwoArcs = n > maxPerArc;
      const outerCount = useTwoArcs ? Math.ceil(n * 0.6) : n;
      const innerCount = useTwoArcs ? n - outerCount : 0;
      const points = [];
      const placeArc = (count, radius, jitterDeg) => {
        if (count <= 0) return;
        if (count === 1) {
          const th = ((startDeg + endDeg) / 2 + jitterDeg) * (Math.PI / 180);
          const x = clamp(cx + radius * Math.cos(th), 4, 96);
          const y = clamp(cy + radius * Math.sin(th), 4, 96);
          points.push({ x, y });
          return;
        }
        // Enforce a minimum angular spacing to reduce overlaps
        const minSpacing = 8; // degrees
        const span = endDeg - startDeg;
        const requiredSpan = Math.max(span, minSpacing * (count - 1));
        const adjStart = baseDeg - requiredSpan / 2 + jitterDeg;
        const step = count > 1 ? requiredSpan / (count - 1) : 0;
        for (let k = 0; k < count; k++) {
          const deg = adjStart + step * k;
          const th = (deg * Math.PI) / 180;
          const x = clamp(cx + radius * Math.cos(th), 4, 96);
          const y = clamp(cy + radius * Math.sin(th), 4, 96);
          points.push({ x, y });
        }
      };
      // Slight angular offsets to avoid perfect overlap between arcs
      placeArc(outerCount, outerRadius, -6);
      placeArc(innerCount, innerRadius, 6);
      all.push(points);
    }
    return all;
  }, [groups, nodes, center]);
  
  return (
    <section id={id} className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            <span className="text-gradient">{content.title}</span>
          </h2>
        </motion.div>

    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            viewport={{ once: true }}
      className="flex justify-center"
          >
      <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime to-accent-emerald rounded-full blur-2xl opacity-30 dark:opacity-50" />
              <img src={PROFILE_PIC_URL} alt="Fred Newton Akdogan" className="relative w-full h-full object-cover rounded-full shadow-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="space-y-4 text-text-secondary leading-relaxed text-base md:text-lg">
              {content.p1 && <p>{content.p1}</p>}
              {content.p2 && <p>{content.p2}</p>}
              {content.p3 && <p>{content.p3}</p>}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-primary glass-effect hover:border-accent-lime hover:shadow-lg text-text-primary/90"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm md:text-base">{label}</span>
                </a>
              ))}
            </div>
            {/* GitHub Contributions */}
            <div className="pt-4 max-w-full md:max-w-2xl mx-auto md:mx-0">
              {/* username inferred from GitHub link */}
              <GitContributions username="freddynewton" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-text-primary text-center mb-10">{content.techStackTitle}</h3>
          {/* Mind map on md+ (full-bleed) */}
          <div className="hidden md:block">
            <div
              className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[600px]"
              ref={containerRef}
              onMouseMove={onMouseMoveContainer}
            >
              {/* background dot grid */}
              <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                  <pattern id="mm-dots" width="26" height="26" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="var(--accent-emerald)" opacity="0.12" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mm-dots)" />
              </svg>
              {/* mouse-follow glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(320px circle at ${mouse.x}px ${mouse.y}px, rgba(34,197,94,0.14), rgba(34,197,94,0.0) 60%)`,
                }}
              />
              {/* rounded border with inner glow */}
              <div className="absolute inset-2 rounded-3xl border border-border-primary/60 shadow-[inset_0_0_80px_rgba(34,197,94,0.10)] pointer-events-none" />
              {/* connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.8" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Center to group lines (endpoints shortened to meet card edges) */}
                {nodes.map((p, i) => {
                  const active = i === highlightIdx;
                  const color = groupColors[i % groupColors.length].primary;
                  // dash pattern; animate only when active
                  const dash = active ? '36 72' : '16 64';
                  const pattern = dash.split(' ').map(Number).reduce((a, b) => a + b, 0) || 100;
                  const width = active ? 1.6 : 0.7;
                  const opacity = active ? 1 : 0.65;
                  const duration = active ? 2.0 : 0.001; // effectively static when not active
                  // shorten to avoid underlapping the group chip
                  const dx = p.x - center.x;
                  const dy = p.y - center.y;
                  const len = Math.hypot(dx, dy) || 1;
                  const padStart = 2.0; // around root chip edge in viewBox units
                  const padEnd = 3.0;   // around group chip edge
                  const x1 = center.x + (dx / len) * padStart;
                  const y1 = center.y + (dy / len) * padStart;
                  const x2 = p.x - (dx / len) * padEnd;
                  const y2 = p.y - (dy / len) * padEnd;
                  return (
                    <motion.line
                      key={`c-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={color}
                      strokeLinecap="round"
                      style={{ strokeDasharray: dash }}
                      filter={active ? 'url(#glow)' : undefined}
                      animate={{
                        strokeWidth: width,
                        strokeOpacity: opacity,
                        strokeDashoffset: active ? [0, -pattern] : 0,
                      }}
                      transition={{ duration, ease: 'linear', repeat: active ? Infinity : 0 }}
                    />
                  );
                })}
                {/* Group to child lines */}
                {childPositions.map((list, i) => (
                  list.map((cp, j) => {
                    const active = i === highlightIdx;
                    const color = groupColors[i % groupColors.length].child;
                    const dash = active ? '24 56' : '12 48';
                    const pattern = dash.split(' ').map(Number).reduce((a, b) => a + b, 0) || 100;
                    const width = active ? 0.65 : 0.45;
                    const opacity = active ? 0.92 : 0.55;
                    const duration = active ? 2.2 : 0.001;
                    // shorten so line meets child chip edge
                    const dx = cp.x - nodes[i].x;
                    const dy = cp.y - nodes[i].y;
                    const len = Math.hypot(dx, dy) || 1;
                    const padStart = 3.0; // around group chip edge
                    const padEnd = 2.2;   // around child chip edge
                    const x1 = nodes[i].x + (dx / len) * padStart;
                    const y1 = nodes[i].y + (dy / len) * padStart;
                    const x2 = cp.x - (dx / len) * padEnd;
                    const y2 = cp.y - (dy / len) * padEnd;
                    return (
                      <motion.line
                        key={`g-${i}-${j}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={color}
                        strokeLinecap="round"
                        style={{ strokeDasharray: dash }}
                        animate={{
                          strokeWidth: width,
                          strokeOpacity: opacity,
                          strokeDashoffset: active ? [0, -pattern] : 0,
                        }}
                        transition={{ duration, ease: 'linear', repeat: active ? Infinity : 0 }}
                      />
                    );
                  })
                ))}
              </svg>
              {/* center node (draggable) */}
              <motion.div
                className="absolute -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-2xl glass-effect border border-border-primary shadow text-text-primary font-semibold select-none cursor-grab active:cursor-grabbing z-20 pointer-events-auto hover:scale-100"
                style={{ left: `${center.x}%`, top: `${center.y}%` }}
                onPointerDown={onPointerDownRoot}
                transition={spring}
              >
                Tech Stack
              </motion.div>
              {/* children nodes (rendered at container level for correct positioning) */}
              {groups.map((g, i) => (
                childPositions[i].map((cp, j) => (
                  <motion.div
                    key={`${g.title}-${j}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-0"
                    style={{ left: `${cp.x}%`, top: `${cp.y}%` }}
                    onMouseEnter={() => setHighlightIdx(i)}
                    onMouseLeave={() => setHighlightIdx(-1)}
                    onFocus={() => setHighlightIdx(i)}
                    onBlur={() => setHighlightIdx(-1)}
                    whileHover={{ scale: 1.05 }}
                    transition={spring}
                  >
                    <div
                      className="px-2.5 py-1.5 text-xs rounded-xl shadow-sm select-none"
                      style={{
                        border: `1px solid ${groupColors[i % groupColors.length].primary}`,
                        background: `linear-gradient(180deg, ${groupColors[i % groupColors.length].child} 0%, rgba(0,0,0,0) 100%)`,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {g.items[j]}
                    </div>
                  </motion.div>
                ))
              ))}
              {/* group nodes on top */}
              {groups.map((g, i) => (
                <motion.div
                  key={g.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `${nodes[i].x}%`, top: `${nodes[i].y}%` }}
                >
                  <div
                    className="rounded-2xl glass-effect border px-4 py-2 w-[180px] text-center shadow-md cursor-grab active:cursor-grabbing select-none"
                    style={{ borderColor: groupColors[i % groupColors.length].primary, boxShadow: `inset 0 0 16px ${groupColors[i % groupColors.length].child}` }}
                    onPointerDown={onPointerDown(i)}
                    onMouseEnter={() => setHighlightIdx(i)}
                    onMouseLeave={() => setHighlightIdx(-1)}
                    onFocus={() => setHighlightIdx(i)}
                    onBlur={() => setHighlightIdx(-1)}
                  >
                    <div className="text-text-primary font-semibold">{g.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Small-screen fallback: simple list */}
          <div className="md:hidden max-w-3xl mx-auto space-y-4">
            {groups.map((g) => (
              <div key={g.title} className="rounded-2xl glass-effect border border-border-primary p-4">
                <div className="text-text-primary font-semibold mb-2">{g.title}</div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span key={it} className="px-2 py-1 text-xs rounded-full glass-effect border border-border-primary text-text-primary/90">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

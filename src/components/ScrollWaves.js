import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

// Decorative scroll-reactive sine waves, inspired by hexagoncircle "scroll waves"
export default function ScrollWaves({ lines = 6, height = 140 }) {
  const svgRef = useRef(null);
  const frame = useRef(0);
  const data = useRef({ width: 0, height, drift: 0, amp: 6, ampTarget: 6 });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const polylines = Array.from(svg.querySelectorAll('polyline'));

    function resize() {
      const rect = svg.getBoundingClientRect();
      data.current.width = Math.max(200, rect.width);
      data.current.height = height;
    }

    const VBW = 800; // viewBox width (SVG coords)
    function render() {
      data.current.drift += 0.6; // slow drift
      // ease amplitude toward target for smoothness
      data.current.amp += (data.current.ampTarget - data.current.amp) * 0.08;

      const wavelength = 90; // larger => longer waves
      const mid = height / 2;

      polylines.forEach((pl, i) => {
        const pts = [];
        const amp = data.current.amp * (1 - i / (lines + 2)) * 1.2;
        for (let x = 0; x <= VBW; x += 6) {
          const y = mid + Math.sin((x + data.current.drift + i * 20) / wavelength) * amp;
          pts.push(`${x},${y.toFixed(2)}`);
        }
        pl.setAttribute('points', pts.join(' '));
        pl.style.opacity = String(0.2 + (0.6 * (lines - i)) / lines);
      });

      frame.current = requestAnimationFrame(render);
    }

    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      lastY = y;
      // set target amplitude based on scroll delta magnitude
      data.current.ampTarget = 6 + Math.min(28, delta * 0.6);
    }

    resize();
    render();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [height, lines]);

  return (
    <div className="pointer-events-none select-none" aria-hidden>
      <svg ref={svgRef} className="w-full" style={{ height }} viewBox={`0 0 800 ${height}`} preserveAspectRatio="none">
        {Array.from({ length: lines }).map((_, i) => (
          <polyline key={i} fill="none" stroke="var(--accent-lime)" strokeWidth={2} strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  );
}

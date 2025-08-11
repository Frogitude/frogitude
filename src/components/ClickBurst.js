import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

// Inspired by GSAP "Exploding Particles". Simple dot burst without Draggable.
export default function ClickBurst({ count = 24, colors = ['#34d399', '#a3e635', '#22c55e'] }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const c = document.createElement('div');
    c.style.cssText = 'position:absolute; left:0; top:0; overflow:visible; z-index:40; pointer-events:none;';
    containerRef.current?.appendChild(c);

    const onClick = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const originX = e.clientX - rect.left;
      const originY = e.clientY - rect.top;
      const tl = gsap.timeline();
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        const size = gsap.utils.random(6, 14);
        dot.style.cssText = `position:absolute; width:${size}px; height:${size}px; border-radius:50%; background:${gsap.utils.wrap(colors, i)}; left:${originX}px; top:${originY}px;`;
        c.appendChild(dot);
        const angle = gsap.utils.random(0, Math.PI * 2);
        const dist = gsap.utils.random(40, 140);
        tl.to(dot, {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          scale: 0,
          duration: gsap.utils.random(0.6, 1.2),
          ease: 'power3.out',
          onComplete: () => dot.remove(),
        }, 0);
      }
    };

    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
      c.remove();
    };
  }, [count, colors]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}

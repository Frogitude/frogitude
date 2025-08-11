import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

// Inspired by Osmo Supply's GSAP morphing play/pause button.
// We don't use MorphSVGPlugin (paid). Instead, we cross-fade two paths.
export default function PlayPauseMorph({ size = 48 }) {
  const isPlaying = useRef(false);
  const playRef = useRef(null);
  const pauseRef = useRef(null);

  useEffect(() => {
    // initialize visibility
    gsap.set(pauseRef.current, { autoAlpha: 0, scale: 0.9, transformOrigin: '50% 50%' });
    gsap.set(playRef.current, { autoAlpha: 1, scale: 1, transformOrigin: '50% 50%' });
  }, []);

  const toggle = () => {
    isPlaying.current = !isPlaying.current;
    if (isPlaying.current) {
      gsap.timeline()
        .to(playRef.current, { autoAlpha: 0, scale: 0.9, duration: 0.2, ease: 'power2.inOut' }, 0)
        .to(pauseRef.current, { autoAlpha: 1, scale: 1, duration: 0.25, ease: 'power2.out' }, 0.05);
    } else {
      gsap.timeline()
        .to(pauseRef.current, { autoAlpha: 0, scale: 0.9, duration: 0.2, ease: 'power2.inOut' }, 0)
        .to(playRef.current, { autoAlpha: 1, scale: 1, duration: 0.25, ease: 'power2.out' }, 0.05);
    }
  };

  return (
    <button onClick={toggle} className="inline-flex items-center justify-center rounded-full glass-effect border border-border-primary hover:border-accent-lime p-3">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
        <g ref={playRef}>
          <path d="M5 3l14 9-14 9V3z" />
        </g>
        <g ref={pauseRef}>
          <path d="M8 4v16M16 4v16" />
        </g>
      </svg>
    </button>
  );
}

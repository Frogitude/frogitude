import React, { useRef, useEffect } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  // Global speed factor for background animation (1 = baseline). Increase for faster, <1 for slower.
  const SPEED = 250;
  // Note: Parallax glow layers removed per request; only canvas dots + lines remain.

  // Canvas particle field with lines + mouse/scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0;
    const particles = [];
  const count = 80; // keep it modest for perf
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

  function init() {
      particles.length = 0;
  for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, width),
          y: rand(0, height),
  // base drift ensures particles always move
  bx: rand(-0.2, 0.2),
  by: rand(-0.2, 0.2),
  // interaction velocity (mouse attraction, jitter)
  vx: 0,
  vy: 0,
          r: rand(1.5, 8),
        });
      }
    }

    let raf = 0;
    function draw() {
      ctx.clearRect(0, 0, width, height);
      // move with damping & clamp
      const ATTRACT_RADIUS = 180;
      const ATTRACT_FORCE = 0.1; // gentle
      for (const p of particles) {
        // no damping: maintain velocity unless influenced by mouse/scroll
        // gentle mouse attraction
        if (mouse.x !== -9999 && mouse.y !== -9999) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          const influence = Math.max(0, 1 - dist / ATTRACT_RADIUS);
          const ax = (dx / dist) * ATTRACT_FORCE * influence;
          const ay = (dy / dist) * ATTRACT_FORCE * influence;
          p.vx += ax;
          p.vy += ay;
        }
        // clamp interactive velocity
        const maxS = 1 * SPEED;
        if (p.vx > maxS) p.vx = maxS; if (p.vx < -maxS) p.vx = -maxS;
        if (p.vy > maxS) p.vy = maxS; if (p.vy < -maxS) p.vy = -maxS;
        // apply base drift + interactive velocity
        p.x += p.bx + p.vx;
        p.y += p.by + p.vy;
        // bounce off edges and flip base drift on collision to keep motion
  if (p.x < 0) { p.x = 0; p.bx = Math.abs(p.bx); p.vx *= -1; }
  else if (p.x > width) { p.x = width; p.bx = -Math.abs(p.bx); p.vx *= -1; }
  if (p.y < 0) { p.y = 0; p.by = Math.abs(p.by); p.vy *= -1; }
  else if (p.y > height) { p.y = height; p.by = -Math.abs(p.by); p.vy *= -1; }
      }
      // lines
      const maxDist2 = 110 * 110;
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist2) {
            const alpha = 1 - d2 / maxDist2;
            ctx.strokeStyle = `rgba(132, 204, 22, ${0.08 * alpha})`; // softer
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      // points
      for (const p of particles) {
        ctx.fillStyle = 'rgba(52, 211, 153, 0.6)'; // emerald-400-ish
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouse.x = -9999; mouse.y = -9999;
    }
  function onScroll() {
      // tiny random jitter instead of speed amplification
      for (const p of particles) {
        // very small change to base drift to keep motion organic
        p.bx += rand(-0.0015, 0.0015);
        p.by += rand(-0.0015, 0.0015);
        // clamp base drift
        const maxB = 0.5;
        if (p.bx > maxB) p.bx = maxB; if (p.bx < -maxB) p.bx = -maxB;
        if (p.by > maxB) p.by = maxB; if (p.by < -maxB) p.by = -maxB;
      }
    }

    resize(); init(); draw();
    window.addEventListener('resize', () => { resize(); init(); });
    window.addEventListener('scroll', onScroll, { passive: true });
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

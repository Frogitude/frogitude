export function applyTilt(
  el: HTMLElement | null,
  { max = 10, scale = 1.02, perspective = 800 }: { max?: number; scale?: number; perspective?: number } = {}
) {
  if (!el) return () => {};
  let raf = 0;
  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (0.5 - py) * (max * 2); // -max..max
    const ry = (px - 0.5) * (max * 2);
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    });
  };
  const onEnter = () => { el.style.willChange = 'transform'; };
  const onLeave = () => {
    cancelAnimationFrame(raf);
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    el.style.willChange = '';
  };
  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseenter', onEnter);
  el.addEventListener('mouseleave', onLeave);
  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseenter', onEnter);
    el.removeEventListener('mouseleave', onLeave);
  };
}

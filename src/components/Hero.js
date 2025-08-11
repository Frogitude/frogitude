import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Magnetic from '@/components/ui/Magnetic';
import { gsap } from '@/lib/gsap';
import { withBasePath } from '@/lib/basePath';
import { useIsomorphicLayoutEffect } from '@/lib/hooks';

const LOGO_URL = withBasePath('/images/small-frog.png');

export default function Hero({ id, content }) {
  const logoRef = useRef(null);
  const ctaRef = useRef(null);

  const scrollToSection = (sectionId) => {
    if (typeof document !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: -10,
          rotate: 2,
          duration: 2.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
      if (ctaRef.current) {
        const items = ctaRef.current.querySelectorAll('button');
        gsap.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          delay: 0.2,
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="flex flex-col items-center justify-center mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          >
            <img ref={logoRef} src={LOGO_URL} alt="Frogitude Logo" className="w-40 h-40 mb-4" />
            <h1
              className="text-7xl md:text-9xl font-black leading-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(236, 253, 245, 0.9), rgba(163, 230, 53, 0.95), rgba(236, 253, 245, 0.9))',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 20px rgba(132,204,22,0.25)',
                animation: 'frog-shimmer 5s linear infinite',
              }}
            >
              FROGITUDE
            </h1>
          </motion.div>

          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-text-primary/90 mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            {content.subtitle}
          </motion.h2>
          <motion.p 
            className="text-xl text-text-secondary/95 max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            {content.description}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            ref={ctaRef}
          >
            <Magnetic>
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-emerald-700 via-lime-600 to-lime-500 text-white px-8 py-4 rounded-full font-extrabold text-2xl shadow-lg shadow-emerald-900 transition-all duration-300 transform hover:scale-105"
                style={{ position: 'relative', opacity: 1, background: 'linear-gradient(90deg, #059669 0%, #65a30d 50%, #84cc16 100%)' }}
              >
                {content.button1 || 'CTA1'}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-emerald-700 via-lime-600 to-lime-500 text-white px-8 py-4 rounded-full font-extrabold text-2xl shadow-lg shadow-emerald-900 transition-all duration-300 transform hover:scale-105"
                style={{ position: 'relative', opacity: 1, background: 'linear-gradient(90deg, #059669 0%, #65a30d 50%, #84cc16 100%)' }}
              >
                {content.button2 || 'CTA2'}
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

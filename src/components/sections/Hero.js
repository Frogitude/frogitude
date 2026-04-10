import React, { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import { gsap } from "@/lib/gsap";
import { withBasePath } from "@/lib/basePath";
import { useIsomorphicLayoutEffect } from "@/lib/hooks";

const LOGO_URL = withBasePath("/images/small-frog.png");

export default function Hero({ id, content }) {
  const logoRef = useRef(null);
  const ctaRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const scrollToSection = (sectionId) => {
    if (typeof document !== "undefined") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) return;
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: -10,
          rotate: 2,
          duration: 2.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
      if (ctaRef.current) {
        const items = ctaRef.current.querySelectorAll("button");
        gsap.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.2,
        });
      }
    });
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative glow orbs */}
      <div className="glow-orb glow-orb--lime w-[400px] h-[400px] -top-32 -left-32" />
      <div className="glow-orb glow-orb--emerald w-[300px] h-[300px] -bottom-20 -right-20" />
      <div className="glow-orb glow-orb--lime w-[200px] h-[200px] top-1/3 right-1/4 opacity-20" />

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
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            <img
              ref={logoRef}
              src={LOGO_URL}
              alt="Frogitude Logo"
              className="w-40 h-40 mb-4 drop-shadow-[0_0_30px_var(--color-glow)]"
            />
            <h1
              className="text-7xl md:text-9xl font-black leading-none tracking-tightest px-[25px] md:px-0 text-gradient"
              style={{
                backgroundSize: "200% 100%",
                textShadow: "0 4px 30px rgba(132,204,22,0.3)",
                animation: "frog-shimmer 5s linear infinite",
              }}
            >
              FROGITUDE
            </h1>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-text-primary/90 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {content.subtitle}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-text-secondary/95 max-w-2xl mx-auto leading-relaxed mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-lime/60 bg-accent-lime/10 px-4 py-2 text-sm md:text-base font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2"
              aria-label="Jump to Meowdieval Tactics project"
            >
              Featured: Meowdieval Tactics
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={reducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reducedMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-emerald/60 bg-accent-emerald/10 px-4 py-2 text-sm md:text-base font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-emerald focus:ring-offset-2"
              aria-label="Jump to Sumo Volley project"
            >
              Featured: Sumo Volley
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            ref={ctaRef}
          >
            <Magnetic>
              <Button
                onClick={() => scrollToSection("projects")}
                className="btn-gradient px-10 py-4 rounded-full font-extrabold text-xl shadow-glow-lime transition-all duration-300 transform hover:scale-105"
                style={{ position: "relative", opacity: 1 }}
              >
                {content.button1 || "CTA1"}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-outline px-10 py-4 rounded-full font-extrabold text-xl transition-all duration-300 transform hover:scale-105"
                style={{ position: "relative", opacity: 1 }}
              >
                {content.button2 || "CTA2"}
              </Button>
            </Magnetic>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => scrollToSection("stats")}
              className="scroll-indicator text-text-secondary/50 hover:text-accent-lime transition-colors"
              aria-label="Scroll down"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5" />
                <path d="M7 6l5 5 5-5" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

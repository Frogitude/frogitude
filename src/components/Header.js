import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Languages } from 'lucide-react';
import { useAppContext } from './AppContext';
import { gsap } from '@/lib/gsap';
import { content } from './content';
import { withBasePath } from '@/lib/basePath';

const LOGO_URL = withBasePath('/images/small-frog.png');

export default function Header() {
  const { theme, toggleTheme, language, toggleLanguage } = useAppContext();
  const t = content[language];

  const navItems = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.experience, id: 'experience' },
    { name: t.nav.skills, id: 'skills' },
    { name: (t.nav && t.nav.services) || 'Services', id: 'services' },
    { name: t.nav.projects, id: 'projects' },
    { name: (t.nav && t.nav.faq) || 'FAQ', id: 'faq' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(sectionId);
    if (!el) return;
    gsap.to(window, { duration: 0.8, scrollTo: { y: el, offsetY: 80 }, ease: 'power2.out' });
  };
  const [open, setOpen] = useState(false);
  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };
  
  return (
    <motion.header 
      id="navbar" 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 text-xl md:text-2xl font-bold cursor-pointer" data-image-glow>
            <img src={LOGO_URL} alt="Frogitude Logo" className="w-9 h-9 md:w-10 md:h-10 shrink-0" />
            <span className="text-text-primary">FROGITUDE</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-lime scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => scrollToSection('contact')} className="hidden sm:block bg-gradient-to-r from-emerald-500 to-lime-600 hover:from-emerald-600 hover:to-lime-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              {t.nav.hire}
            </button>
            <button
              onClick={toggleLanguage}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Toggle language"
            >
              <span
                className="inline-flex items-center justify-center h-full text-xl leading-[1] align-middle"
                role="img"
                aria-hidden="true"
              >
                {language === 'de' ? '🇩🇪' : '🇬🇧'}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {/* Mobile burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border-primary text-text-secondary hover:text-text-primary"
            >
              <span className="sr-only">{t.nav.menu}</span>
              <div className="w-5 space-y-1.5">
                <div className={`h-0.5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></div>
                <div className={`h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}></div>
                <div className={`h-0.5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-3 glass-effect rounded-2xl border border-border-primary p-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.id)}
                  className="text-left px-2 py-2 rounded-lg hover:bg-bg-secondary/60 text-text-secondary hover:text-text-primary"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={() => handleNav('contact')} className="mt-2 bg-gradient-to-r from-emerald-500 to-lime-600 text-white px-4 py-2 rounded-xl font-semibold">
                {t.nav.hire}
              </button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}

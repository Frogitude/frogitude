import React, { useEffect } from 'react';
import Head from 'next/head';
import { AppProvider, useAppContext } from '@/components/AppContext';
import { content } from '@/components/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import ProfessionalExperience from '@/components/ProfessionalExperience';
import WhatIsFrogitude from '@/components/WhatIsFrogitude';
import Faq from '../components/Faq';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Services from '@/components/Services';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollWaves from '@/components/ScrollWaves';
import ClickBurst from '@/components/ClickBurst';
import { Youtube, Instagram, Linkedin, Github, Twitter, MessageSquare } from 'lucide-react';

const LOGO_URL = '/images/small-frog.png';

type IconType = React.ComponentType<{ className?: string }>;

const TikTokIcon: IconType = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-4" {...props}><path d="M9 18V5l12-2v13"/><path d="M9 18a4 4 0 1 1-4-4 4 4 0 0 1 4 4Z"/><path d="M21 16a4 4 0 1 1-4-4 4 4 0 0 1 4 4Z"/></svg>
);

const socialLinks: Array<{ href: string; icon: IconType }> = [
  { href: 'https://discord.gg/Bfsx9sTDfh', icon: MessageSquare },
  { href: 'https://www.linkedin.com/in/fred-newton-akdogan-b6a775257/', icon: Linkedin },
  { href: 'https://github.com/freddynewton', icon: Github },
  { href: 'https://www.youtube.com/@Frogitude_dev', icon: Youtube },
  { href: 'https://www.instagram.com/frogitude.dev/', icon: Instagram },
  { href: 'https://www.tiktok.com/@frogitude.dev', icon: TikTokIcon },
  { href: 'https://freddynewton.github.io/', icon: Twitter },
];

function PageContent() {
  const { language } = useAppContext();
  const t = (content as any)[language];

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-bg-primary text-text-primary transition-colors duration-300 relative">
      <Head>
        <title>Frogitude — Unity Game & XR Developer</title>
        <meta name="description" content="Unity Game & XR Developer — Frogitude (Fred Newton Akdogan)" />
        <link rel="icon" href="/images/small-frog.png" />
      </Head>
      <AnimatedBackground />
      {/* playful effects */}
  <div className="fixed inset-x-0 top-0 z-0 opacity-30 pointer-events-none">
        <ScrollWaves height={120} />
      </div>
  <div className="fixed inset-0 z-40 pointer-events-none">
        <ClickBurst />
      </div>
      <div className="relative z-10">
        <Header />

        <main>
          <Hero id="hero" content={t.hero} />
          <Stats content={t.stats} />
          <About id="about" content={t.about} />
          <ProfessionalExperience id="experience" content={t.experience} />
          <Skills id="skills" content={t.skills} />
          <Services id="services" />
          <Projects id="projects" content={t.projects} />
          <Contact id="contact" content={t.contact} />
          <Faq id="faq" />
          <WhatIsFrogitude id="frogitude" />
        </main>
        
        <footer className="py-12 border-t border-border-primary">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-4 text-3xl font-bold mb-4">
              <img src={LOGO_URL} alt="Frogitude Logo" className="w-12 h-12" />
              <span className="text-text-primary">FROGITUDE</span>
            </div>
            <p className="text-text-secondary mb-6">{t.footer.subtitle}</p>
            <div className="flex justify-center space-x-6 mb-6">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-lime transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-sm text-text-secondary/60 space-x-4">
              <span>© {new Date().getFullYear()} Frogitude. All rights reserved.</span>
              <a href="/impressum" className="underline hover:text-accent-lime">{t.footer?.imprintLabel || 'Impressum'}</a>
              <a href="/privacy-policy" className="underline hover:text-accent-lime">{t.footer?.privacyLabel || 'Privacy Policy'}</a>
              <a href="/terms" className="underline hover:text-accent-lime">{t.footer?.termsLabel || 'Terms & Conditions'}</a>
              <span className="block mt-2 sm:mt-0 sm:inline">{t.footer?.techStackLine}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <PageContent />
    </AppProvider>
  );
}

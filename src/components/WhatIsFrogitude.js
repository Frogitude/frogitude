import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';
import { useAppContext } from './AppContext';
import { content } from './content';
import { withBasePath } from '@/lib/basePath';

export default function WhatIsFrogitude({ id }) {
  const { language } = useAppContext();
  const t = content[language]?.frogitude || {};
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleAudio = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (isPlaying) {
        el.pause();
        setIsPlaying(false);
      } else {
        await el.play();
        setIsPlaying(true);
      }
    } catch (e) {
      // ignore autoplay restrictions errors
    }
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onEnded = () => setIsPlaying(false);
    el.addEventListener('ended', onEnded);
    return () => el.removeEventListener('ended', onEnded);
  }, []);

  // Pause audio when collapsing
  useEffect(() => {
    if (!isOpen && isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen, isPlaying]);
  return (
    <section id={id} className="py-20 bg-bg-secondary/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-10 shadow-xl"
        >
          {/* Header / Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="w-full flex items-center justify-between gap-4 text-left mb-4"
            aria-expanded={isOpen}
            aria-controls="frogitude-content"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              <span className="text-gradient">{t.title || 'What is Frogitude?'}</span>
            </h2>
            <ChevronDown className={`w-6 h-6 text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <motion.div
            id="frogitude-content"
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Section visual */}
            <img
              src={withBasePath('/images/frogitude-hero.png')}
              alt={t.imageAlt || 'Frogitude illustration'}
              className="w-full h-56 md:h-72 object-cover rounded-2xl mb-6"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            <div className="space-y-6 text-text-secondary/95 leading-relaxed text-lg">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">{t.meaningTitle || 'Meaning'}</h3>
              <ul className="list-disc list-inside space-y-2">
                {(t.meaningList || []).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h4 className="font-semibold text-text-primary">Frogitude</h4>
                <p className="text-sm text-text-secondary">{t.nounLabel || 'Noun, feminine [the]'}</p>
              </div>
              <div className="text-sm md:text-base text-text-secondary/90">
                <span className="mr-6">{t.ipaUk || 'UK: /ˈfrɒɡɪˌtjuːd/'}</span>
                <span>{t.ipaUs || 'US: /ˈfrɑːɡɪˌtuːd/'}</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">{t.explainTitle || 'Explanation'}</h3>
              {(t.explainParas || []).map((p, i) => (
                <p key={i} className={i > 0 ? 'mt-3' : undefined}>{p}</p>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">{t.examplesTitle || 'Examples'}</h4>
              <ul className="space-y-2 pl-4">
                <li className="italic">{t.example1 || '– Since she quit her job, she’s been living with real frogitude — barefoot in the garden and completely relaxed.'}</li>
                <li className="italic">{t.example2 || '– He has such frogitude; nothing disturbs his peace.'}</li>
              </ul>
            </div>

              <div className="pt-2">
                <audio ref={audioRef} className="hidden">
                  <source src="/sounds/frogitude.mp3" type="audio/mpeg" />
                </audio>
                <button
                  type="button"
                  onClick={toggleAudio}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border glass-effect border-border-primary hover:border-accent-lime hover:shadow-lg text-text-primary/90 ${isPlaying ? 'ring-2 ring-accent-lime/60' : ''}`}
                  aria-pressed={isPlaying}
                  aria-label={isPlaying ? (t.audioPause || 'Pause') + ' audio' : (t.audioPlay || 'Play') + ' audio'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 text-accent-lime" /> : <Play className="w-5 h-5 text-accent-lime" />}
                  <span>{(isPlaying ? (t.audioPause || 'Pause') : (t.audioPlay || 'Play')) + ' ' + (t.audioCta || 'Frogitude pronunciation')}</span>
                </button>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-text-primary mb-2">{t.unityTitle || 'Frogitude in Unity Development'}</h3>
                <p>{t.unityText}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

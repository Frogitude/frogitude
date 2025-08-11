import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';

export default function WhatIsFrogitude({ id }) {
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
              <span className="text-gradient">What is Frogitude?</span>
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
              src="/images/frogitude-hero.png"
              alt="Frogitude illustration"
              className="w-full h-56 md:h-72 object-cover rounded-2xl mb-6"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            <div className="space-y-6 text-text-secondary/95 leading-relaxed text-lg">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">Meaning</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  (colloquial, humorous) a calm, idiosyncratic, and humorous attitude to life that is oriented towards the supposed nature of a frog; a mixture of tranquility, spontaneity, and charming disinterest in social conventions.
                </li>
                <li>
                  (internet jargon) An attitude where one goes through life with childlike curiosity, self-irony, and a pinch of chaos; living life with "frog vibes".
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h4 className="font-semibold text-text-primary">Frogitude</h4>
                <p className="text-sm text-text-secondary">Noun, feminine [the]</p>
              </div>
              <div className="text-sm md:text-base text-text-secondary/90">
                <span className="mr-6">UK: /ˈfrɒɡɪˌtjuːd/</span>
                <span>US: /ˈfrɑːɡɪˌtuːd/</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">Explanation</h3>
              <p>
                The word Frogitude is a portmanteau created by merging 'frog' (the amphibian known for its leaping ability and adaptability) and 'gratitude' (the quality of being thankful). The term evokes a sense of playful appreciation for life's moments, encouraging one to 'leap' into gratitude with the same energy and flexibility as a frog.
              </p>
              <p className="mt-3">
                Combination of "frog" and "gratitude"; describes the grateful, relaxed attitude of a frog that enjoys life to the fullest.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-text-primary mb-2">Examples</h4>
              <ul className="space-y-2 pl-4">
                <li className="italic">– Since she quit her job, she's been living with real frogitude – barefoot in the garden and completely relaxed.</li>
                <li className="italic">– He has such frogitude, nothing disturbs his peace.</li>
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
                  aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 text-accent-lime" /> : <Play className="w-5 h-5 text-accent-lime" />}
                  <span>{isPlaying ? 'Pause' : 'Play'} Frogitude pronunciation</span>
                </button>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-text-primary mb-2">Frogitude in Unity Development</h3>
                <p>
                  For us, Frogitude means a relaxed but professional approach to Unity development. We combine technical expertise with a calm working method that leaves room for creativity and innovation. Like a frog on its lily pad, we are calm and focused, but always ready to spontaneously respond to new challenges. At the same time, we are grateful for every project and value the collaboration with our clients.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import Head from 'next/head';
import React from 'react';
import { withBasePath } from '@/lib/basePath';

export default function Impressum() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary">
      <Head>
        <title>Imprint (Impressum) — Frogitude</title>
        <meta name="robots" content="index,follow" />
      </Head>

      <header className="py-8 border-b border-border-primary/60">
        <div className="container mx-auto px-6 max-w-4xl flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src={withBasePath('/images/small-frog.png')} alt="Frogitude" className="w-8 h-8" />
            <span className="font-bold tracking-wide group-hover:text-accent-lime transition-colors">FROGITUDE</span>
          </a>
          <nav className="text-sm">
            <a href={withBasePath('/')} className="text-text-secondary hover:text-accent-lime transition-colors">Home</a>
          </nav>
        </div>
      </header>

      <main className="py-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-xl space-y-6">
            <section>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Imprint</h1>
              <div className="space-y-1 text-text-secondary">
                <p>Owner: Fred Newton Akdogan</p>
                <p>Company: Softwareentwicklung Fred Newton Akdogan</p>
                <p>Franz-Brombach-Str. 8a, 85435 Erding, Germany</p>
                <p>Email: <a href="mailto:info@frogitude.com" className="underline hover:text-accent-lime">info@frogitude.com</a> | Phone: +49 176 62031322</p>
                <p>Tax Number: 114/200/31825</p>
                <p>Responsible for content according to § 55 Abs. 2 RStV: Fred Newton Akdogan, Franz-Brombach-Str. 8a, 85435 Erding, Germany</p>
              </div>
              <p className="mt-4 text-text-secondary">
                The European Commission provides a platform for online dispute resolution (ODR):{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="underline hover:text-accent-lime">https://ec.europa.eu/consumers/odr/</a>.
                {' '}We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
              <p className="mt-4 text-text-secondary">
                As a service provider, we are responsible for our own content on these pages in accordance with general laws (§ 7 Abs.1 TMG). However, according to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
            </section>

            <div className="text-sm text-text-secondary/80 pt-2">
              Also see: <a href={withBasePath('/privacy-policy')} className="underline hover:text-accent-lime">Privacy Policy</a> ·{' '}
              <a href={withBasePath('/terms')} className="underline hover:text-accent-lime">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-border-primary/60 text-center">
        <div className="container mx-auto px-6 max-w-4xl text-text-secondary text-sm">
          © {new Date().getFullYear()} Frogitude — <a href={withBasePath('/')} className="underline hover:text-accent-lime">Home</a>
        </div>
      </footer>
    </div>
  );
}

import Head from 'next/head';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary">
      <Head>
        <title>Privacy Policy — Frogitude</title>
        <meta name="robots" content="index,follow" />
      </Head>

      <header className="py-8 border-b border-border-primary/60">
        <div className="container mx-auto px-6 max-w-4xl flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src="/images/small-frog.png" alt="Frogitude" className="w-8 h-8" />
            <span className="font-bold tracking-wide group-hover:text-accent-lime transition-colors">FROGITUDE</span>
          </a>
          <nav className="text-sm">
            <a href="/" className="text-text-secondary hover:text-accent-lime transition-colors">Home</a>
          </nav>
        </div>
      </header>

      <main className="py-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-text-secondary">
              The protection of your personal data is very important to us. We process your data exclusively on the basis of the legal regulations (GDPR, TMG).
            </p>
            <p className="text-text-secondary mt-2">
              Controller: Fred Newton Akdogan, Franz-Brombach-Str. 8a, 85435 Erding,{' '}
              <a href="mailto:info@frogitude.com" className="underline hover:text-accent-lime">info@frogitude.com</a>
            </p>
            <p className="text-text-secondary mt-2">
              When you visit this website, general information is automatically collected (e.g. IP address, browser used, operating system). This data does not allow any direct conclusions to be drawn about your person and is used exclusively for technical security and to improve the offer.
            </p>
            <p className="text-text-secondary mt-2">
              You have the right to information, correction, deletion, restriction, data portability and objection. If you believe that the processing of your data violates data protection law, you can complain to the supervisory authority.
            </p>
            <p className="text-text-secondary mt-2">
              If you have any questions about data protection, please contact us at{' '}
              <a href="mailto:info@frogitude.com" className="underline hover:text-accent-lime">info@frogitude.com</a>.
            </p>

            <div className="text-sm text-text-secondary/80 mt-6">
              Also see: <a href="/impressum" className="underline hover:text-accent-lime">Imprint</a> ·{' '}
              <a href="/terms" className="underline hover:text-accent-lime">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 border-t border-border-primary/60 text-center">
        <div className="container mx-auto px-6 max-w-4xl text-text-secondary text-sm">
          © {new Date().getFullYear()} Frogitude — <a href="/" className="underline hover:text-accent-lime">Home</a>
        </div>
      </footer>
    </div>
  );
}

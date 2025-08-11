import Head from 'next/head';
import React from 'react';

export default function Terms() {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary">
      <Head>
        <title>Terms & Conditions — Frogitude</title>
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms &amp; Conditions</h1>
            <p className="text-text-secondary">
              These Terms &amp; Conditions apply to all contracts between Softwareentwicklung Fred Newton Akdogan (hereinafter 'Contractor') and its clients (hereinafter 'Client').
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-3 text-text-secondary">
              <li><span className="font-semibold">Scope:</span> These terms apply to all services and offers of the Contractor.</li>
              <li><span className="font-semibold">Conclusion of contract:</span> A contract is concluded by written confirmation of the offer.</li>
              <li><span className="font-semibold">Services:</span> The scope of services results from the respective offer. Changes require written form.</li>
              <li><span className="font-semibold">Payment:</span> The remuneration is based on the agreed offer. Payments are due within 14 days of invoicing.</li>
              <li><span className="font-semibold">Liability:</span> The Contractor is only liable for intent and gross negligence. Liability for data loss only applies if the Client has carried out regular data backups.</li>
              <li><span className="font-semibold">Final provisions:</span> German law applies. Place of jurisdiction is Erding.</li>
            </ol>

            <div className="text-sm text-text-secondary/80 mt-6">
              Also see: <a href="/impressum" className="underline hover:text-accent-lime">Imprint</a> ·{' '}
              <a href="/privacy-policy" className="underline hover:text-accent-lime">Privacy Policy</a>
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

import type { AppProps } from 'next/app';
import '@/styles/globals.css';

// Apply the saved or preferred theme ASAP to avoid FOUC and keep Edge consistent
if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    // Hint UA form controls and scrollbars
    (root.style || ({})).colorScheme = theme;
  } catch {}
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

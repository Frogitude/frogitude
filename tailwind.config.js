/** @type {import('tailwindcss').Config} */
module.exports = {
  // Make Tailwind's `dark:` variant respond to our HTML data attribute
  // e.g. <html data-theme="dark">
  darkMode: ['class', 'html[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border-primary': 'var(--border-primary)',
        'accent-lime': 'var(--accent-lime)',
        'accent-emerald': 'var(--accent-emerald)'
      },
    },
  },
  plugins: [],
};

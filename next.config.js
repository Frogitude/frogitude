/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  // Static export for GitHub Pages
  output: 'export',
  // Ensure static <img> work without next/image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'qtrypzzcjebvfcihiynt.supabase.co' },
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com' }
    ]
  },
  // Support serving under a subpath (e.g., /frogitude)
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

module.exports = nextConfig;

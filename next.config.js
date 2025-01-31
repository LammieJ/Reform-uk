/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
    optimizeCss: true,
  },
  // Ensure proper handling of static files
  distDir: '.next',
  // Add proper cache configuration
  generateEtags: true,
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig

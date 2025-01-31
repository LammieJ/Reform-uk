/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
    optimizeCss: true,
    memoryBasedWorkersCount: true,
  },
}

module.exports = nextConfig

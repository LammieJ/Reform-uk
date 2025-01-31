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
    memoryBasedWorkersCount: true,
  },
}

module.exports = nextConfig

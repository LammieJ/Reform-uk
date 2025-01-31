/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  // Disable file watching to prevent stack overflow
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Simplify webpack configuration
  webpack: (config) => {
    config.watchOptions = {
      poll: false,
      ignored: ['**/.git/**', '**/node_modules/**', '**/.next/**'],
    }
    return config
  },
}

module.exports = nextConfig

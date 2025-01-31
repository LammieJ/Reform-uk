/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/node_modules', '**/.next'],
    }
    return config
  },
}

module.exports = nextConfig

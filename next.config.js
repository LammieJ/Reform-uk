/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = nextConfig

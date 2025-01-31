/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001', 'localhost:3002', 'localhost:3003'],
    },
  },
}

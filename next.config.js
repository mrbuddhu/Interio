/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable build trace collection to prevent stack overflow
    buildTrace: false,
  },
  // Disable build optimization that might cause stack overflow
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

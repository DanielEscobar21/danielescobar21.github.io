/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  webpack(config) {
    return config;
  },
}

module.exports = nextConfig 
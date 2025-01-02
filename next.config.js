/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portafolio',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig 
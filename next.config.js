/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  assetPrefix: '',
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig 
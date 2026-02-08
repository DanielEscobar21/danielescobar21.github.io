/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Sin assetPrefix: los estilos y scripts usan rutas relativas (/_next/static/...)
  // y se sirven correctamente en descoba.dev y en local.
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig 
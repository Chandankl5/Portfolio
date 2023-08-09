/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      }
    ]
  }
}

if(process.env.EXPORT) {
  nextConfig.output = 'export';
}

if(process.env.GH_PAGES_DEPLOY) {
  nextConfig.assetPrefix = '/Portfolio';
  nextConfig.images.loader = 'custom';
  nextConfig.images.loader = './src/utils/imageLoader.js';
}

module.exports = nextConfig

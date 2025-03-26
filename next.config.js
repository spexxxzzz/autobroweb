const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...(config.externals || [])];
    config.resolve.alias = {
      ...config.resolve.alias,
      'three': path.resolve('./node_modules/three')
    }
    return config;
  },
}

module.exports = nextConfig 
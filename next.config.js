const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  exportTrailingSlash: true,
}

module.exports = nextConfig

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

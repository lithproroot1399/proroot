import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'pt-PT'], // Inglês e Português de Portugal
    defaultLocale: 'en',
  },
}

export default nextConfig

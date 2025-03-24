import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}
module.exports = {
  i18n: {
    locales: ['en-US', 'pt-PT'], // Lista de idiomas suportados
    defaultLocale: 'en-US', // Idioma padrão
    localeDetection: false, // Se quer detectar automaticamente o idioma do navegador
  },
}

export default nextConfig

i18next
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['localStorage', 'navigator'], // Ordem de detecção: primeiro localStorage, depois navegador
      caches: ['localStorage'] // Salva no localStorage
      // Não usar 'querystring', 'cookie', 'path' ou 'subdomain'
    },
    fallbackLng: 'pt',
    resources: {
      // Seus recursos aqui
    }
  });
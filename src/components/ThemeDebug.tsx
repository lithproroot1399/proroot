// components/ThemeDebug.tsx
'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeDebug() {
  const { theme } = useTheme()

  return (
    <div className="fixed top-4 left-4 z-50 p-3 bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 rounded-lg">
      <div className="text-sm font-mono">
        <div>Tema atual: <strong>{theme}</strong></div>
        <div>Classe no html: <strong>{document.documentElement.className}</strong></div>
        <div>Tailwind config: <strong>darkMode: 'class'</strong></div>
      </div>
    </div>
  )
}
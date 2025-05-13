'use client'

import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('')

  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
      <input
        type="text"
        placeholder="Pesquisar..."
        className="w-full p-2 pl-10 text-sm border border-zinc-600 rounded-md bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        value={query}
        onChange={e => {
          setQuery(e.target.value)
          onSearch(e.target.value)
        }}
      />
    </div>
  )
}

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  // Função para trocar o idioma
  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`)
  }

  return (
    <header className="bg-transparent backdrop-blur-md fixed w-full top-0 left-0 z-50 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-300">
            proroot.pt
          </a>
        </div>

        {/* Menu de Navegação */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'servicos', 'Sobre', 'Contato'].map(item => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-violet-500"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Ícones de Usuário, Pesquisa, Tema e Idioma */}
        <div className="flex items-center space-x-4">
          {/* Ícones de Bandeira para troca de idioma */}
          {['pt', 'en'].map(locale => (
            // biome-ignore lint/a11y/useButtonType: <explanation>
            <button key={locale} onClick={() => changeLanguage(locale)}>
              <Image
                src={`/assets/${locale}.png`}
                alt={locale}
                width={40}
                height={20}
              />
            </button>
          ))}
        </div>

        {/* Menu Mobile */}
      </div>
    </header>
  )
}

export default Header

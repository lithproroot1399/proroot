'use client'

import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // Para manipular o idioma
import { useState } from 'react'

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('')

  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
    </div>
  )
}

const Header = () => {
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
          <a href="/" className="text-white hover:text-violet-500">
            Home
          </a>
          <a href="/services" className="text-white hover:text-violet-500">
            Serviços
          </a>
          <a href="/about" className="text-white hover:text-violet-500">
            Sobre
          </a>
          <a href="/contact" className="text-white hover:text-violet-500">
            Contato
          </a>
        </nav>

        {/* Ícones de Usuário e Pesquisa */}
        <div className="flex items-center space-x-4">
          <button type="button" className="text-white hover:text-gray-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Ícone de usuário</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16v-1a4 4 0 00-4-4H3a4 4 0 000 8h1a4 4 0 004-4zM16 12v-1a4 4 0 10-8 0v1M5 19h14M12 11v4M12 7h.01"
              />
            </svg>
          </button>

          {/* Ícones de Bandeira para troca de idioma */}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={() => changeLanguage('pt-PT')}>
            <Image
              src="/assets/pt.png"
              alt="Português"
              width={40}
              height={20}
            />
          </button>

          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={() => changeLanguage('en')}>
            <Image src="/assets/en.png" alt="English" width={40} height={20} />
          </button>
        </div>

        {/* Menu Mobile */}
        <button
          type="button"
          className="md:hidden text-white hover:text-gray-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Ícone de menu</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header

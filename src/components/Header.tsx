'use client'
import { Context } from '@/components/Context'
import News from '@/components/News'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import ThemeSwitcherImage from '@/components/ThemeSwitcherImage'
import Contact from '@/components/contact'
import { Network } from '@/components/network'
import { Techs } from '@/components/techs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <header className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">proroot.</h1>
            <span className="text-2xl text-green-600 font-bold">p</span>
            <span className="text-2xl text-red-400 font-bold">t</span>
          </div>
          <div className="flex gap-4">
            <ThemeSwitcher />
            <ThemeSwitcherImage />
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section com imagem de fundo */}
        <div className="relative w-full h-[60vh] min-h-[400px] max-h-[800px]">
          <Image
            src="/assets/body_img.jpg"
            alt="Proroot"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Overlay escuro para melhor legibilidade se necessário */}
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 bg-white dark:bg-gray-900">
          <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
            <div className="grid gap-10 sm:gap-12 lg:gap-16">
              <Context />
              <Techs />
              <Network />
              <Contact />
            </div>

            {/* Cards adicionais */}
          </div>
        </div>
      </main>
    </div>
  )
}

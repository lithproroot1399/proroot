'use client'
import { Context } from '@/components/Context'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import ThemeSwitcherImage from '@/components/ThemeSwitcherImage'
import Image from 'next/image'
import RepositoryPatternGuide from './RepositoryPatternGuide'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <header className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">proroot.</h1>
          <span className="text-grenn-400">p</span>
          <span className="text-red-400">t</span>
          </div>
          <div className="flex gap-4">
            <ThemeSwitcher />
            <ThemeSwitcherImage />
          </div>
        </div>
      </header>
      
      <main className="p-0"> {/* Removido padding aqui */}
        {/* Container da imagem sem margens */}
        <div className="relative w-full h-screen -mx-0"> {/* Removido margin negativa se não for necessário */}
          <Image
            src="/assets/body_img.jpg"
            alt="Imagem de fundo"
            fill
            className="object-cover w-full"
            priority
          />
        </div>
        
        {/* Restante do conteúdo com padding normal */}
        <div className="p-8"> {/* Adicionado container com padding para o resto do conteúdo */}
          <Context />
          <RepositoryPatternGuide />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Card Exemplo</h3>
              <p>Este card muda de cor com o tema.</p>
            </div>
            
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <h3 className="font-semibold mb-2">Outro Card</h3>
              <p>Cores que se adaptam ao tema.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
import Image from 'next/image'
import { ImNewspaper } from 'react-icons/im'
import { IoMdTime } from 'react-icons/io'
import { IoNewspaperOutline } from 'react-icons/io5'
import news_1 from '../../public/assets/news_1.jpg'
import news_2 from '../../public/assets/news_2.jpg'

export function News() {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div className="flex items-center">
        <ImNewspaper className="size-10 text-lime-300" />
        <h1 className="m-5 text-5xl text-violet-700 font-semibold">
          ACOMPANHE AS NOTICIAS DO DIA!
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <aside>
            <Image
              className="flex rounded-md"
              src={news_1}
              alt={'foto'}
              width={250}
              height={100}
            />
          </aside>
        </div>
        <div className="flex items-center">
          <div className="w-80 h-40 m-4 flex flex-col bg-black rounded-md border border-indigo-600 border-collapse">
            <main>
              <div className="flex items-center justify-between">
                <button
                  className="flex items-center justify-center m-2 w-20 h-10 space-x-2 text-white font-semibold bg-violet-700 hover:bg-violet-900 rounded-md"
                  type="button"
                >
                  ACEITAR
                </button>
                <IoMdTime className="size-5 text-zinc-300 mr-4" />
              </div>

              <div className="m-3">
                <IoNewspaperOutline className="size-6 text-lime-400" />
                <p className="text-lime-300 font-semibold">BIBLIOTECA</p>
                <h1 className="text-violet-500">
                  NOTICIAS DO DIA NO MUNDO TECH
                </h1>
              </div>
            </main>
          </div>
          <div className="w-80 h-40 m-4 flex flex-col bg-black rounded-md border border-indigo-600 border-collapse">
            <main>
              <div className="flex items-center justify-between">
                <button
                  className="flex items-center justify-center m-2 w-20 h-10 space-x-2 text-white font-semibold bg-violet-700 hover:bg-violet-900 rounded-md"
                  type="button"
                >
                  ACEITAR
                </button>
                <IoMdTime className="size-5 text-zinc-300 mr-4" />
              </div>

              <div className="m-3">
                <IoNewspaperOutline className="size-6 text-lime-400" />
                <p className="text-lime-300 font-semibold">BIGS TECH</p>
                <h1 className="text-violet-500">
                  NOTICIAS DO DIA NO MUNDO TECH
                </h1>
              </div>
            </main>
          </div>
        </div>

        <div className="flex">
          <aside>
            <Image
              className="flex rounded-md"
              src={news_2}
              alt={'foto'}
              width={250}
              height={100}
            />
          </aside>
        </div>
      </div>
      <div className="max-w-2xl text-justify">
        <h1 className="text-2xl text-white">
          Acompanhe as Últimas Tendências em Tecnologia 🚀 Vivemos em uma era
          onde a tecnologia evolui a um ritmo impressionante. A cada dia, novas
          inovações surgem, impactando desde a maneira como nos comunicamos até
          o funcionamento das grandes indústrias. Para os apaixonados por
          tecnologia, estar atualizado é essencial para entender o futuro e até
          mesmo aproveitar as oportunidades que surgem. Seja inteligência
          artificial, computação quântica, realidade aumentada ou as novas
          fronteiras da cibersegurança, acompanhar as novidades pode abrir um
          mundo de possibilidades. Além disso, com a ascensão do 5G, da Web3 e
          da automação inteligente, estamos testemunhando uma revolução digital
          sem precedentes. Se você gosta de tecnologia, seguir fontes
          confiáveis, ler artigos especializados e explorar fóruns e comunidades
          pode transformar seu conhecimento e mantê-lo sempre à frente. Afinal,
          o futuro já começou — e estar por dentro é o primeiro passo para
          aproveitá-lo ao máximo! 🔍 Quais tendências tecnológicas mais chamam
          sua atenção no momento?
        </h1>
      </div>
    </div>
  )
}

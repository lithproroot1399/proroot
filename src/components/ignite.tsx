import Image from 'next/image'
import { ImLab } from 'react-icons/im'
import girl from '../../public/avatar.svg'
import LoginButton from './LoginButton'

export function Ignite() {
  return (
    <div className="flex h-screen bg-black">
      {/* Main (Texto à esquerda) */}
      <main className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="max-w-lg">
          <div className="mb-6 flex items-center gap-6">
            <ImLab className="size-10 text-zinc-400" />
            <h1 className="text-4xl text-zinc-600 font-semibold">
              Nosso laboratório para devs
            </h1>
            <LoginButton
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            />
          </div>

          <p className="text-white text-justify">
            Aqui você encontra um acervo dos mais variados tipos de material
            para o seu projeto. Estamos prontos para colaborar com o seu
            crescimento. Aqui você encontra um acervo dos mais variados tipos de
            material para o seu projeto. Estamos prontos para colaborar com o
            seu crescimento.
          </p>
        </div>
      </main>

      {/* Aside (Imagem à direita) */}
      <aside className="w-1/2 flex justify-center items-center">
        <Image src={girl} alt="Garota" width={400} height={400} />
      </aside>
    </div>
  )
}

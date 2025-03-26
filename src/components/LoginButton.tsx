'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function LoginButton() {
  const { data: session } = useSession()

  return (
    <div className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
      {session ? (
        <div className="flex items-center gap-2">
          <p>Olá, {session.user?.name}!</p>
          <Image
            src="./public/assets/web_light_rd_ctn.svg"
            alt="Sair"
            width={24} // Ajuste o tamanho conforme necessário
            height={24}
            onClick={() => signOut()}
            className="cursor-pointer"
          />
        </div>
      ) : (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button onClick={() => signIn('google')}>Entrar com Google</button>
      )}
    </div>
  )
}

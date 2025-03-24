'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()

  return (
    <div className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
      {session ? (
        <div>
          <p>Olá, {session.user?.name}!</p>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button onClick={() => signOut()}>Sair</button>
        </div>
      ) : (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button onClick={() => signIn('google')}>Entrar com Google</button>
      )}
    </div>
  )
}

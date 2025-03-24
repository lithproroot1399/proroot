import Image from 'next/image'
// components/LanguageSwitcher.tsx
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = router

  // Alterna o idioma ao clicar
  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <div className="flex gap-2">
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={() => changeLanguage('en')}>
        <Image
          src="/public/assets/en.png"
          alt="English"
          width={30}
          height={20}
        />
      </button>

      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={() => changeLanguage('pt-PT')}>
        <Image
          src="/public/assets/pt.png"
          alt="Português"
          width={30}
          height={20}
        />
      </button>
    </div>
  )
}

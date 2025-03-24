import Image from 'next/image'

export function News() {
  return (
    <div>
      <main>
        <p className="text-zinc-800 font-semibold">ABRECE O MUNDO</p>
        <h1>NOTICIAS DO DIA NO MUNDO TECH</h1>
      </main>
      <div>
        <aside>
          <Image
            src="/assets/body_img.jpg"
            alt="Imagem de fundo"
            fill
            className="object-cover"
          />
        </aside>
      </div>
    </div>
  )
}

import { Context } from '@/components/Context'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { News } from '@/components/News'
import Contact from '@/components/contact'
import { Ignite } from '@/components/ignite'
import { Network } from '@/components/network'
import { Techs } from '@/components/techs'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        <Image
          src="/assets/body_img.jpg"
          alt="Imagem de fundo"
          fill
          className="object-cover"
        />
      </div>

      <Context />
      <Ignite />
      <Techs />
      <Network />
      <News />
      <Contact />
      <Footer />
    </>
  )
}

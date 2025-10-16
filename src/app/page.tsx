import RepositoryPatternGuide from '@/components/RepositoryPatternGuide';
import { Context } from '@/components/Context'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import Contact from '@/components/contact'
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
        priority
      />
    </div>
<Context />
      <Techs />
      <Network />
<News />
<Contact />
<div className="min-h-screen bg-gray-50 py-8">
      <RepositoryPatternGuide />
    </div>
<Footer />
    </>
  )
}

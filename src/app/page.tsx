import RepositoryPatternGuide from '@/components/RepositoryPatternGuide';

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import Contact from '@/components/contact'
import { Network } from '@/components/network'
import { Techs } from '@/components/techs'



export default function Home() {
  return (
   <>
      <Header />
      

      <Techs />
      <Network />
<News />
<Contact />
<Footer />
    </>
  )
}

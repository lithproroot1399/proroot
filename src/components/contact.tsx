import { FaWhatsapp } from 'react-icons/fa'
import { FcGlobe } from 'react-icons/fc'
import { MdOutlineEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <div className="flex flex-col bg-black">
      <div className="m-8 flex">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col items-center gap-4">
              <FcGlobe className="text-green-400 size-7" />
              <h1 className="text-4xl text-zinc-500">Nossa localização</h1>
              <span className="text-sm text-white">
                Aqui está o nosso escritório! Sinta-se à vontade para nos
                visitar e conhecer de perto o nosso dia a dia.
              </span>
            </div>

            <div className="flex justify-center gap-2">
              <div className="flex gap-2">
                <FaWhatsapp className="size-5 text-green-500" />
                <a
                  href="https://wa.me/351939920124" // Substitua pelo número desejado
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500"
                >
                  (351) 939-920124
                </a>
              </div>
              <div className="flex gap-2">
                <MdOutlineEmail className="text-green-500 size-6" />
                <a
                  href="mailto:contato@proroot.pt?subject=Suporte&body=Olá, gostaria de mais informações..."
                  className="text-green-500 hover:underline"
                >
                  contato@proroot.pt
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <iframe
          className="w-full y-10 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.2566842599804!2d-8.980426999999999!3d38.711915399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193990eb0ee0eb%3A0x3c40976cff906277!2sR.%20Papoilas%20123%2C%202870-299%20Montijo!5e0!3m2!1spt-PT!2spt!4v1740680886655!5m2!1spt-PT!2spt"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

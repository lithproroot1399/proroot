import Image from 'next/image'
import { CiCloudOn } from 'react-icons/ci'
import { FaLink } from 'react-icons/fa'
import network_1 from '../../public/assets/network_1.jpg'
import network_2 from '../../public/assets/network_2.jpg'

export function Connect() {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="flex items-center justify-center">
        <div className="flex">
          <div className="flex">
            <Image src={network_1} alt={'foto'} width={250} height={100} />
            <Image src={network_2} alt={'foto'} width={250} height={100} />

            <div className="flex w-full h-full justify-center bg-zinc-700">
              <main>
                <div className="m-8 flex flex-col items-center bg-black w-60 h-40 rounded-md">
                  <h1 className="text-white font-semibold">
                    Vamos falar de comunicação
                  </h1>

                  <div className="flex flex-1 w-100 h-30 items-center justify-center rounded-md">
                    <button
                      type="submit"
                      className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLink className="size-5 text-lime-500" />
                    <a href="siga no site" className="text-lime-500">
                      http://proroot.pt
                    </a>
                  </div>
                </div>
              </main>
              <div>
                <aside>
                  <div className="m-8 flex flex-col items-center bg-black w-80 h-40 rounded-md">
                    <h1 className="text-white font-semibold">
                      Nosso ambiente AWS
                    </h1>

                    <div className="flex flex-1 w-100 h-30 items-center justify-center rounded-md">
                      <div className="flex flex-col items-center">
                        <h1 className="font-semibold text-lime-500">AWS</h1>
                        <CiCloudOn className="size-10 text-lime-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLink className="size-5 text-lime-500" />
                      <a href="http://proroot.pt" className="text-lime-500">
                        http://proroot.pt
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

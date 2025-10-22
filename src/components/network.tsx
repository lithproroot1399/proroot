import Image from 'next/image'
import { FaNetworkWired, FaServer } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { GrConfigure } from 'react-icons/gr'
import { MdOutlineDevices } from 'react-icons/md'
import tech_1 from '../../public/assets/tech_1.jpg'
import tech_2 from '../../public/assets/tech_2.jpg'
import tech_3 from '../../public/assets/tech_3.jpg'

export function Network() {
  return (
    <div className="flex justify-center items-center">
      <div className=" justify-between gap-4 ">
        <div>
          <div className="m-6 flex flex-col items-center">
            <div className="flex items-center gap-4">
              <GrConfigure className="size-8 text-blue-500" />
              <h1 className="text-4xl font-semibold">
                Suporte e manutenção.
              </h1>
            </div>
          </div>
          <div className="m-5 flex items-center gap-8">
            <FaLaptopCode className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">DEV</span>
            <FaNetworkWired className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">
              NETWORK
            </span>
            <FaServer className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">DADOS</span>
            <MdOutlineDevices className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">IA</span>
          </div>

          <div className="flex">
            <Image
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125"
              src={tech_1}
              alt={'foto'}
              width={250}
              height={100}
            />
            <Image
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125"
              src={tech_2}
              alt={'foto'}
              width={250}
              height={100}
            />
            <Image
              className="transition-transform duration-300 hover:scale-110 hover:brightness-125"
              src={tech_3}
              alt={'foto'}
              width={250}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

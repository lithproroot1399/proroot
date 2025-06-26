import { CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci'

// ...existing code...
export default function News() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black p-8">
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center w-64 h-44 border-2 border-violet-600 rounded-md p-4 bg-black">
          <p className="text-2xl text-violet-700 font-semibold">ROCKETSEAT</p>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <CiInstagram className="size-7 text-violet-500" />
              <a
                className="text-blue-500"
                href="https://www.instagram.com/rocketseat/?_hsenc=p2ANqtz-9SfZwA9lsjU8MgmuZxFLQAZqnnowIuAAFMCX3C0W0ORbDmLKgyI1CXe6Q5miEYQSg0CD6Y3i1zv13fV_A63xvjCsvd5w&_hsmi=351572397"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAN
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <CiLinkedin className="size-7 text-violet-500" />
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/school/rocketseat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </div>
          <div className="flex gap-2">
            <CiYoutube className="size-7 text-violet-500" />
            <a
              className="text-blue-500"
              href="https://www.youtube.com/@rocketseat"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-64 h-44 border-2 border-indigo-600 rounded-md p-4 bg-black">
          <p className="text-2xl text-violet-700 font-semibold">ALURA</p>
          <div className="flex gap-2">
            <CiYoutube className="size-7 text-violet-500" />
            <a
              className="text-blue-500"
              href="https://www.youtube.com/@alura"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-64 h-44 border-2 border-indigo-600 rounded-md p-4 bg-black">
          <p className="text-2xl text-violet-700 font-semibold">FABIO AKITA</p>
          <div className="flex gap-2">
            <CiYoutube className="size-7 text-violet-500" />
            <a
              className="text-blue-500"
              href="https://www.youtube.com/@Akitando"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-64 h-44 border-2 border-violet-600 rounded-md p-4 bg-black">
          <p className="flex items-center text-2xl text-violet-700 font-semibold">
            FELIPE DECHAMPS
          </p>
          <div className="flex gap-2">
            <CiYoutube className="size-7 text-violet-500" />
            <a
              className="text-blue-500"
              href="https://www.youtube.com/@FilipeDeschamps"
              target="_blank"
              rel="noopener noreferrer"
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

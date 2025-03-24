import { FaDatabase, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiGitRepositoryFill } from 'react-icons/ri'

export function Techs() {
  return (
    <div className="bg-black flex justify-center items-center">
      <div className=" justify-between gap-4 ">
        <div className="m-6 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <FaGithub className="size-8 text-zinc-600" />
            <h1 className="text-4xl text-zinc-700 font-semibold">
              Nosso portifólio no GitHub.
            </h1>
          </div>
          <div className="m-5 flex items-center gap-8">
            <FaNodeJs className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">Node</span>
            <IoLogoJavascript className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">
              JavaScript
            </span>
            <FaReact className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">React</span>
            <FaDatabase className="text-violet-600 size-10" />
            <span className="text-violet-700 text-xl font-semibold">SQL</span>
          </div>

          <table className="table-auto border-collapse border border-violet-800 w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">TECH</th>
                <th className="border border-gray-300 px-4 py-2">Link</th>
                <th className="border border-gray-300 px-4 py-2">DEV</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'SQL',
                  link: 'https://www.microsoft.com/pt-br/sql-server/sql-server-downloads',
                  dev: 'Banco de Dados',
                },
                {
                  name: 'Node.js',
                  link: 'https://nodejs.org/',
                  dev: 'Backend',
                },
                { name: 'React', link: 'https://react.dev/', dev: 'Frontend' },
                {
                  name: 'JavaScript',
                  link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
                  dev: 'Frontend/Backend',
                },
              ].map((tech, index) => (
                <tr key={index} className="odd:bg-violet-100 even:bg-white">
                  <td className="border border-gray-300 px-4 py-2">
                    {tech.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center">
                      <RiGitRepositoryFill className="text-violet-600 size-5" />
                      <a
                        className="text-violet-700 hover:text-violet-950 ml-1"
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tech.name}
                      </a>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {tech.dev}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

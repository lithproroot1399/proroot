import { FaDatabase, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiGitRepositoryFill } from 'react-icons/ri'

export function Techs() {
  const techList = [
    {
      name: 'Node Js',
      link: 'https://nodejs.org/pt',
      dev: 'JavaScript além do navegador',
    },
    {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      dev: 'JavaScript V8',
    },
    {
      name: 'React',
      link: 'https://react.dev/',
      dev: 'Front-end',
    },
    {
      name: 'Python',
      link: 'https://www.python.org/',
      dev: 'Backend',
    },
    {
      name: 'Sql',
      link: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
      dev: 'Banco de dados',
    },
    {
      name: 'JavaScript',
      link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      dev: 'Frontend/Backend',
    },
  ]

  return (
    <div className="bg-black flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
        {/* GitHub Header Section */}
        <div className="flex items-center gap-4">
          <FaGithub className="text-blue-500 text-4xl" />
          <h1 className="text-3xl text-white font-semibold">
            Nosso portfólio no GitHub.
          </h1>
        </div>

        {/* Icons and Technology Labels */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-blue-500 text-4xl" />
            <span className="text-blue-400 text-lg font-semibold">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoJavascript className="text-violet-500 text-4xl" />
            <span className="text-violet-500 text-lg font-semibold">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-blue-500 text-4xl" />
            <span className="text-blue-400 text-lg font-semibold">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPython
              className="text-violet-500
             text-4xl"
            />
            <span
              className="text-violet-500
             text-lg font-semibold"
            >
              PYTHON
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-blue-500 text-4xl" />{' '}
            <span className="text-blue-400 text-lg font-semibold">SQL</span>
          </div>
        </div>

        {/* Technologies Table */}
        <table className="table-auto border-collapse border border-blue-800 w-full text-left rounded-md">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="border border-blue-600 px-4 py-2">TECH</th>
              <th className="border border-blue-600 px-4 py-2">Link</th>
              <th className="border border-blue-600 px-4 py-2">DEV</th>
            </tr>
          </thead>
          <tbody>
            {techList.map((tech, index) => (
              <tr
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={`${
                  index % 2 === 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300'
                }`}
              >
                <td className="border border-blue-600 px-4 py-2">
                  {tech.name}
                </td>
                <td className="border border-blue-600 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <RiGitRepositoryFill className="text-blue-400 text-xl" />
                    <a
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 ml-1"
                    >
                      {tech.name}
                    </a>
                  </div>
                </td>
                <td className="border border-blue-600 px-4 py-2">{tech.dev}</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            {techList.map((tech, index) => (
              <tr
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={`${
                  index % 2 === 0
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300'
                }`}
              >
                <td className="border border-blue-600 px-4 py-2">
                  {tech.name}
                </td>
                <td className="border border-blue-600 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <RiGitRepositoryFill className="text-blue-400 text-xl" />
                    <a
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 ml-1"
                    >
                      {tech.name}
                    </a>
                  </div>
                </td>
                <td className="border border-blue-600 px-4 py-2">{tech.dev}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

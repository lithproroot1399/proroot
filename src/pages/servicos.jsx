import React from 'react'
import Image from 'next/image'

const NetworkServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">
              NetAdmin Solutions
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Administração Profissional de{' '}
              <span className="text-blue-400">Redes</span> para sua Empresa
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Oferecemos soluções completas em gerenciamento de infraestrutura
              de rede, garantindo segurança, performance e disponibilidade para
              seus negócios.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors">
                Nossos Serviços
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-md transition-colors">
                Fale Conosco
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/public/assets/service.jpg"
                alt="Rede de Computadores"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de soluções em administração de
              redes para empresas de todos os tamanhos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Segurança de Rede</h3>
              <p className="text-gray-300 mb-4">
                Implementamos firewalls, sistemas de detecção de intrusão e
                políticas de segurança para proteger sua infraestrutura.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Firewalls e VPNs</li>
                <li>• Monitoramento de segurança</li>
                <li>• Análise de vulnerabilidades</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Monitoramento de Rede</h3>
              <p className="text-gray-300 mb-4">
                Monitoramento contínuo da performance e disponibilidade de sua
                rede com relatórios detalhados.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Monitoramento 24/7</li>
                <li>• Alertas de performance</li>
                <li>• Relatórios detalhados</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3">
                Implementação de Infraestrutura
              </h3>
              <p className="text-gray-300 mb-4">
                Projetamos e implementamos infraestruturas de rede escaláveis e
                de alta performance.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Projeto de rede</li>
                <li>• Instalação de equipamentos</li>
                <li>• Configuração de sistemas</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-3">Redes em Nuvem</h3>
              <p className="text-gray-300 mb-4">
                Implementação e gerenciamento de infraestruturas de rede em
                ambientes cloud híbridos e públicos.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• AWS, Azure, Google Cloud</li>
                <li>• Conexões híbridas</li>
                <li>• Otimização de custos</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3">Suporte Técnico</h3>
              <p className="text-gray-300 mb-4">
                Suporte especializado para resolver problemas de rede
                rapidamente e minimizar tempo de inatividade.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Suporte 24/7</li>
                <li>• Resolução remota</li>
                <li>• Visitas técnicas</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
              <div className="text-blue-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Auditoria de Rede</h3>
              <p className="text-gray-300 mb-4">
                Análise completa da infraestrutura de rede com identificação de
                pontos de melhoria e otimização.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Análise de performance</li>
                <li>• Identificação de gargalos</li>
                <li>• Recomendações de melhorias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative h-80 md:h-96">
                <Image
                  src="/api/placeholder/500/400"
                  alt="Nossa Equipe"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que escolher nossos serviços?
              </h2>
              <p className="text-gray-300 mb-6">
                Com mais de 10 anos de experiência no mercado, nossa equipe de
                especialistas em redes oferece soluções personalizadas para cada
                cliente, garantindo máxima eficiência e segurança.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-400 text-xl mr-3">✓</div>
                  <p className="text-gray-300">
                    Profissionais certificados e com vasta experiência
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 text-xl mr-3">✓</div>
                  <p className="text-gray-300">
                    Suporte técnico disponível 24 horas por dia, 7 dias por
                    semana
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 text-xl mr-3">✓</div>
                  <p className="text-gray-300">
                    Soluções personalizadas para cada tipo de negócio
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-400 text-xl mr-3">✓</div>
                  <p className="text-gray-300">
                    Relatórios detalhados de performance e segurança
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estamos prontos para ajudar sua empresa a ter uma infraestrutura
              de rede mais segura e eficiente.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors w-full"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-400 text-xl mr-3">📍</div>
                    <div>
                      <h4 className="font-semibold">Endereço</h4>
                      <p className="text-gray-300">
                        Av. Paulista, 1000, São Paulo - SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-400 text-xl mr-3">📞</div>
                    <div>
                      <h4 className="font-semibold">Telefone</h4>
                      <p className="text-gray-300">(11) 3000-1000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-400 text-xl mr-3">✉️</div>
                    <div>
                      <h4 className="font-semibold">E-mail</h4>
                      <p className="text-gray-300">
                        contato@netadminsolutions.com.br
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-400 text-xl mr-3">🕒</div>
                    <div>
                      <h4 className="font-semibold">Horário de Atendimento</h4>
                      <p className="text-gray-300">
                        Segunda a Sexta: 8h às 18h
                      </p>
                      <p className="text-gray-300">
                        Plantão 24h para emergências
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                NetAdmin Solutions
              </h3>
              <p className="text-gray-400">
                Especialistas em administração e segurança de redes
                corporativas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Segurança de Rede
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Monitoramento
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Infraestrutura
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Cloud
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Cases de Sucesso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Trabalhe Conosco
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                >
                  📱
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                >
                  💻
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                >
                  📸
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                >
                  👔
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} NetAdmin Solutions. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NetworkServicesPage

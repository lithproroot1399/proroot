// components/RepositoryPatternGuide.tsx
import Link from 'next/link';

export default function RepositoryPatternGuide() {
  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Repository, service e patterns
        </h1>
        <div className="w-20 h-1 bg-blue-600 rounded"></div>
      </header>

      {/* Sumário */}
      <section className="mb-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Sumário</h2>
        <p className="text-blue-800 leading-relaxed">
          Nesse documento vamos desmistificar a utilização desses dois patterns dentro de aplicações 
          back-end e comparar suas utilizações com outros padrões comuns como os controllers do MVC.
        </p>
      </section>

      {/* Repository Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Repository</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            O Repository é um conceito introduzido no Data Mapper Pattern ou Repository Pattern 
            que consiste em uma ponte entre nossa aplicação e a fonte de dados, seja ela um banco 
            de dados, um arquivo físico ou qualquer outro meio de persistência de dados da aplicação.
          </p>
          <p>
            Essa implementação visa isolar a forma com que nos comunicamos com os dados, abstraindo 
            lógicas comuns de operações no banco.
          </p>
          <p>
            Geralmente o Repository possui os métodos comuns de comunicação com uma fonte de dados 
            como listagem, busca, criação, edição, remoção, mas conforme a aplicação cresce o 
            desenvolvedor tende a encontrar outras operações repetitíveis e, com isso, popula o 
            repositório com mais funcionalidades.
          </p>
        </div>

        {/* Exemplo Real */}
        <div className="mt-6 p-6 bg-green-50 border-l-4 border-green-500 rounded">
          <h3 className="text-lg font-semibold text-green-800 mb-3">🏨 Exemplo real</h3>
          <p className="text-green-700 leading-relaxed">
            Imagine uma aplicação que controla reserva de quartos em um hotel, uma pessoa pode 
            acessar o site, reservar um quarto e pagar pelo mesmo. Essa reserva depende do quarto 
            estar vago para esse intervalo de datas que o usuário selecionar.
          </p>
          <p className="text-green-700 leading-relaxed mt-3">
            Se pensarmos nisso como uma consulta no banco, precisaremos realizar uma query um 
            pouco complexa onde comparamos a data de entrada e saída com outras reservas já 
            existentes na aplicação, buscando a disponibilidade do quarto.
          </p>
          <p className="text-green-700 leading-relaxed mt-3">
            Em um cenário real, essa busca por disponibilidade de um quarto pode ser feita em 
            várias partes da aplicação, a home page do site pode possuir uma busca prévia de 
            disponibilidade, a reserva precisa verificar a disponibilidade, o atendente do hotel 
            precisa conseguir verificar disponibilidade para reservas no balcão, ou seja, uma 
            mesma query no banco de dados sendo utilizada em múltiplos contextos, por isso 
            criamos isso em um Repository, reaproveitamento.
          </p>
        </div>
      </section>

      {/* Service Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Service</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            O Service é um conceito introduzido no Service Pattern. Ele tem como objetivo abstrair 
            regras de negócio das rotas, além de tornar nosso código mais reutilizável.
          </p>
          <p>
            No contexto da nossa jornada, essa implementação visa reduzir a complexidade das rotas 
            da nossa aplicação e deixá-las responsáveis apenas pelo que realmente devem fazer: 
            receber uma requisição, repassar os dados da requisição a outro arquivo e devolver uma resposta.
          </p>
          <p>
            O Service deve ter um nome descritivo (ex.: updateDeliveryManProfileService) e <strong>sempre</strong> 
            possuir apenas <strong>um</strong> método (ex.: execute()). Além disso, caso outra rota ou arquivo 
            precise executar essa mesma ação, basta chamar e executar esse Service, obedecendo 
            assim a outro importante princípio: DRY (Don&apos;t Repeat Yourself).
          </p>
        </div>

        {/* Exemplo Real */}
        <div className="mt-6 p-6 bg-purple-50 border-l-4 border-purple-500 rounded">
          <h3 className="text-lg font-semibold text-purple-800 mb-3">🏨 Exemplo real</h3>
          <p className="text-purple-700 leading-relaxed">
            Imagine a mesma aplicação que controla a reserva de quartos em um hotel. Essa reserva 
            pode envolver diversas etapas, como verificação da disponibilidade, realização do 
            pagamento, envio de emails, entre outros.
          </p>
          <p className="text-purple-700 leading-relaxed mt-3">
            Dessa forma, a simples ação de reservar um quarto irá desencadear em diversas outras 
            ações. Se pensarmos nisso como código, teremos regras de negócio, que não são de 
            responsabilidade do Repository, diretamente na nossa rota. Isso fere alguns princípios 
            de programação como o Single Responsability Principle e, portanto, os Services são 
            criados para serem os responsáveis por realizar essas ações.
          </p>
          <p className="text-purple-700 leading-relaxed mt-3">
            Além disso, imagine que em outras ações como consumir produtos do Hotel seja necessário 
            executar algumas ações novamente, como realizar o pagamento. Com o Service criado, 
            basta chamá-lo e executá-lo novamente.
          </p>
        </div>
      </section>

      {/* Por que tudo isso? Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Por que tudo isso?</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Os Services e Repositories são utilizados para construir uma base sólida, visando a 
          escalabilidade e aplicação de boas práticas. Com o seu uso, apesar de uma maior 
          complexidade no início, é possível obter diversos benefícios ao atender princípios 
          importantes da programação.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              acronym: "SoC",
              name: "Separation of Concerns",
              description: "Esse princípio zela pela separação de responsabilidades de cada arquivo. Exemplo: as rotas não devem ser responsáveis por lidar com a persistência dos dados, isso fica por conta do Repository. Já o Repository não é responsável pela tratativa das regras de negócio, isso é responsabilidade dos Services;"
            },
            {
              acronym: "DRY",
              name: "Don't Repeat Yourself",
              description: "Esse princípio zela pelo maior reaproveitamento de código. Esse princípio não preza necessariamente pela não-repetição de código e sim regras de negócio. Exemplo: ao criar Services e Repositories, você possibilita a reutilização desses códigos no restante da aplicação;"
            },
            {
              acronym: "SRP",
              name: "Single Responsability Principle",
              description: "Esse princípio zela que uma classe deve possuir apenas uma responsabilidade. Exemplo: Ao criar um service chamado `createTransactionService`, devemos garantir que no seu único método (execute()) seu trabalho seja **apenas** a criação de uma transação;"
            },
            {
              acronym: "DIP",
              name: "Dependency Inversion Principle",
              description: "Esse princípio zela que uma entidade dependa apenas de abstrações, não de implementações. Exemplo: Ao atribuir ao Repository a comunicação com o Banco de dados, o Service precisa interagir apenas com essa abstração, sem precisar criar uma nova instância e realizar as ações diretamente;"
            }
          ].map((principle, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-bold mr-2">
                  {principle.acronym}
                </span>
                <h3 className="font-semibold text-gray-800">{principle.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLID Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Onde entra o SOLID?</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            O SOLID é uma sigla que representa 5 princípios da programação orientada a objetos:
          </p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>SRP (Single Responsability Principle);</strong></li>
            <li><strong>OCP (Open–closed Principle);</strong></li>
            <li><strong>LSP (Liskov substitution Principle);</strong></li>
            <li><strong>ISP (Interface segregation Principle);</strong></li>
            <li><strong>DIP (Dependency Inversion Principle).</strong></li>
          </ul>
          
          <p>
            E ele entra justamente nessa abordagem que estamos utilizando (Repositories e Services). 
            Os princípios <strong>DIP</strong> e <strong>SRP</strong> provavelmente são os mais 
            fáceis de enxergar nesse primeiro momento, mas ao longo do curso o <strong>SOLID</strong> 
            será aplicado cada vez mais, conforme entendemos mais o funcionamento do Typescript e 
            nos acostumamos com o Data Mapper Pattern.
          </p>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
          <p className="text-yellow-800 text-sm">
            💡 <strong>Quer ler mais sobre SOLID?</strong> Confira{' '}
            <Link 
              href="https://www.notion.so/Princ-pios-do-SOLID-d469618bbd2049668eaf80e889194cce?pvs=21" 
              className="text-blue-600 hover:text-blue-800 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              esse outro documento
            </Link>{' '}
            com exemplos de código.
          </p>
        </div>
      </section>

      {/* MVC Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">E os controllers? E o MVC?</h2>
        
        <div className="flex justify-center my-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-4xl">🔍</div>
          </div>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Se você já trabalhou com MVC ou participou da antiga jornada, deve estar se perguntando: 
            cadê os controllers? Fique tranquilo, eles estão bem 😁
          </p>
          <p>
            Até então, utilizávamos o MVC Pattern (Model, View e Controller) onde os nossos 
            controllers basicamente eram responsáveis por todas as regras de negócio (conexão com 
            banco de dados, tratativas de erros, formatação dos dados).
          </p>
          <p>
            Atualmente, estamos utilizamos o Data Mapper Pattern e focando bastante nos princípios 
            do SOLID e DDD, onde separamos melhor as responsabilidades da aplicação entre os 
            arquivos de rotas, services e repositories.
          </p>
          <p>
            Mas fique tranquilo, isso não significa que o MVC Pattern morreu, e se você sente 
            tanta falta dos controllers, basta abstrair o código presente nas nossas rotas para 
            arquivos controllers. Ah, inclusive faremos isso mais a frente.
          </p>
        </div>
      </section>
    </article>
  );
}
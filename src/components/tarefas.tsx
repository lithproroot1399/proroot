// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
`use client`

import { useState } from 'react'

export default function ListaDeTarefas() {
  // Inicializa o estado 'tarefas' com uma lista vazia
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')

  // Função para adicionar uma nova tarefa à lista
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa])
      setNovaTarefa('') // Limpa o campo de entrada
    }
  }

  return (
    <div>
      <h2>Minha Lista de Tarefas</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={e => setNovaTarefa(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}

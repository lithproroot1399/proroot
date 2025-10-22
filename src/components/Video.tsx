'use client'

import { useCurrentLesson } from '../zustand-store'

export function Video() {
  const { currentLesson } = useCurrentLesson()

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {currentLesson ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
            <p className="text-zinc-400">Duração: {currentLesson.duration}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p>Selecione uma aula para começar</p>
        </div>
      )}
    </div>
  )
}
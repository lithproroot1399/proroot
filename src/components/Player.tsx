'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { useCurrentLesson, useStore } from '../zustand-store'

export default function Player() {
  const [isLoading, setIsLoading] = useState(true)
  const { course, load } = useStore()
  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    const initialize = async () => {
      await load()
      setIsLoading(false)
    }
    initialize()
  }, [load])

  useEffect(() => {
    if (currentLesson?.title) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  if (isLoading) {
    return (
      <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
        <div className="text-xl">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <button
            type="button"
            className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Deixe seu Feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {course?.modules?.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}

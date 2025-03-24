'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import Header from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { useCurrentLesson, useStore } from '../zustand-store'

interface CurrentLesson {
  title: string
  // other properties of currentLesson
}

interface UseCurrentLessonReturn {
  currentLesson?: CurrentLesson | null
}

export default function Player() {
  const { course, load } = useStore(store => ({
    course: store.course,
    load: store.load,
  }))

  const { currentLesson } = useCurrentLesson() as UseCurrentLessonReturn

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (currentLesson?.title) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          {/* Button to leave feedback */}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            type="button"
            className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <MessageCircle className="w-4 h-4" />
            Dê seu Feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
            {course?.modules &&
              course?.modules.map((module, index) => (
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

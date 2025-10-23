// components/Module.tsx
'use client'

import { useStore } from '../zustand-store'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const { course, currentModuleIndex, currentLessonIndex, play } = useStore()

  const modules = course?.modules || []
  const currentModule = modules[moduleIndex]

  return (
    <div className="p-4 border-b border-zinc-800">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 mb-3">{amountOfLessons} aulas</p>

      <div className="space-y-2">
        {currentModule?.lessons.map((lesson, lessonIndex) => {
          const isCurrent =
            currentModuleIndex === moduleIndex &&
            currentLessonIndex === lessonIndex

          return (
            <button
              key={lesson.id}
              onClick={() => play(moduleIndex, lessonIndex)}
              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                isCurrent
                  ? 'bg-violet-500 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
              }`}
            >
              <span className="flex items-center gap-2">
                {isCurrent && (
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                )}
                {lesson.title}
                <span className="text-xs text-zinc-500 ml-auto">
                  {lesson.duration}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

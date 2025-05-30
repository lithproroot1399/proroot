import { PlayCircle, Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      aria-pressed={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
      tabIndex={isCurrent ? -1 : 0} // Prevent focus on disabled button
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}

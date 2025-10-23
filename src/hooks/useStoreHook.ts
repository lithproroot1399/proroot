// src/hooks/useStoreHook.ts
'use client'

import { useStore } from '@/store'

export function useCourseStore() {
  const course = useStore((state) => state.course)
  const load = useStore((state) => state.load)

  return { course, load }
}

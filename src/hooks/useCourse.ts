// hooks/useCourse.ts
'use client'

import { useEffect } from 'react'
import { useStore } from '../zustand-store'

export function useCourse() {
  const { course, load, isLoading } = useStore()
  
  useEffect(() => {
    if (!course) {
      load()
    }
  }, [course, load])

  return { course, isLoading }
}
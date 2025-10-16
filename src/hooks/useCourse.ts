// hooks/useCourse.ts
"use client";

import { useStore } from '@/store';

export function useCourse() {
  const { course, load } = useStore(store => ({
    course: store.course,
    load: store.load,
  }));

  return { course, load };
}
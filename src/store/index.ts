// store/index.ts
import { create } from 'zustand'

interface Store {
  course: any
  load: boolean
  setCourse: (course: any) => void
  setLoad: (load: boolean) => void
}

export const useStore = create<Store>((set) => ({
  course: null,
  load: false,
  setCourse: (course) => set({ course }),
  setLoad: (load) => set({ load }),
}))

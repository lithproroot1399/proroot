// zustand-store/index.ts
import { create } from 'zustand'

// Interfaces baseadas na sua lista
interface Lesson {
  id: string
  title: string
  duration: string
}

interface Module {
  id: number
  title: string
  lessons: Lesson[]
}

interface Course {
  id: number
  modules: Module[]
}

interface Store {
  course: Course | null
  currentModuleIndex: number
  currentLessonIndex: number
  isLoading: boolean
  load: () => Promise<void>
  play: (moduleIndex: number, lessonIndex: number) => void
  next: () => void
}

export const useStore = create<Store>((set, get) => ({
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
  
  load: async () => {
    set({ isLoading: true })
    try {
      // Usando sua lista de cursos
      const courseData = {
        "courses": [
          {
            "id": 1,
            "modules": [
              {
                "id": 1,
                "title": "Iniciando com React",
                "lessons": [
                  {
                    "id": "Jai8w6K_GnY",
                    "title": "CSS Modules",
                    "duration": "13:45"
                  },
                  {
                    "id": "w-DW4DhDfcw",
                    "title": "Estilização do Post",
                    "duration": "10:05"
                  },
                  {
                    "id": "D83-55LUdKE",
                    "title": "Componente: Header",
                    "duration": "06:33"
                  },
                  {
                    "id": "W_ATsETujaY",
                    "title": "Componente: Sidebar",
                    "duration": "09:12"
                  },
                  {
                    "id": "Pj8dPeameYo",
                    "title": "CSS Global",
                    "duration": "03:23"
                  },
                  {
                    "id": "8KBq2vhwbac",
                    "title": "Form de comentários",
                    "duration": "11:34"
                  }
                ]
              },
              {
                "id": 2,
                "title": "Estrutura da aplicação",
                "lessons": [
                  {
                    "id": "gE48FQXRZ_o",
                    "title": "Componente: Comment",
                    "duration": "13:45"
                  },
                  {
                    "id": "Ng_Vk4tBl0g",
                    "title": "Responsividade",
                    "duration": "10:05"
                  },
                  {
                    "id": "h5JA3wfuW1k",
                    "title": "Interações no JSX",
                    "duration": "06:33"
                  },
                  {
                    "id": "1G0vSTqWELg",
                    "title": "Utilizando estado",
                    "duration": "09:12"
                  }
                ]
              }
            ]
          }
        ]
      }
      
      // Pegando o primeiro curso da lista
      set({ course: courseData.courses[0], isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      console.error('Failed to load course:', error)
    }
  },
  
  play: (moduleIndex: number, lessonIndex: number) => {
    set({
      currentModuleIndex: moduleIndex,
      currentLessonIndex: lessonIndex
    })
  },
  
  next: () => {
    const { course, currentModuleIndex, currentLessonIndex } = get()
    
    if (!course) return

    const nextLessonIndex = currentLessonIndex + 1
    const currentModule = course.modules[currentModuleIndex]
    
    if (nextLessonIndex < currentModule.lessons.length) {
      set({ currentLessonIndex: nextLessonIndex })
    } else {
      const nextModuleIndex = currentModuleIndex + 1
      if (nextModuleIndex < course.modules.length) {
        set({
          currentModuleIndex: nextModuleIndex,
          currentLessonIndex: 0
        })
      }
    }
  }
}))

// Hook customizado para a lição atual
export const useCurrentLesson = () => {
  const { course, currentModuleIndex, currentLessonIndex } = useStore()
  
  const currentModule = course?.modules[currentModuleIndex]
  const currentLesson = currentModule?.lessons[currentLessonIndex]
  
  return {
    currentModule,
    currentLesson
  }
}
import { dev } from '$app/environment'
import type { PageLoad } from './$types'

export const csr = dev

export const load = (() => ({
  projects: [
    {
      id: 'kanban',
      name: 'Kanban task management',
      url: 'kanbanjvm.vercel.app'
    },
    {
      id: 'dictionary',
      name: 'Dictionary',
      url: 'dictionaryjvm.vercel.app'
    },
    {
      id: 'platzi-punks',
      name: 'PlatziPunks',
      url: 'platzipunks.netlify.app'
    }
  ]
})) satisfies PageLoad

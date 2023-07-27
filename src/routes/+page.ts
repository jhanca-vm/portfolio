import type { PageLoad } from './$types'

export const prerender = true

export const load: PageLoad = () => ({
  projects: [
    { id: 'space-tourism', name: 'Space Tourism' },
    { id: 'kanban', name: 'Kanban Task Management' }
  ]
})

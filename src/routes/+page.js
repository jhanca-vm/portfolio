import maker from '$lib/assets/maker.webp'
import spaceTourism from '$lib/assets/space-tourism.webp'

export const prerender = true

export const load = () => ({
  projects: [
    { id: 'maker', name: 'maker', image: maker },
    { id: 'space-tourism', name: 'Space Tourism', image: spaceTourism }
  ]
})

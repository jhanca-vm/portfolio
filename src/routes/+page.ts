import coffeeroasters from '$lib/assets/coffeeroasters.webp'
import buscoderecho from '$lib/assets/buscoderecho.webp'
import type { PageLoad } from './$types'

export const prerender = true

export const load: PageLoad = async () => ({
  projects: [
    { id: 'coffeeroasters', name: 'Coffeeroasters', image: coffeeroasters },
    { name: 'buscoderecho.com', image: buscoderecho, url: 'buscoderecho.com' }
  ]
})

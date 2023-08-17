import maker from '$lib/assets/maker.webp'
import ticTacToe from '$lib/assets/tic-tac-toe.webp'
import type { PageLoad } from './$types'

export const prerender = true

export const load: PageLoad = async () => ({
  projects: [
    { id: 'maker', name: 'maker', image: maker },
    { id: 'tic-tac-toe', name: 'Tic Tac Toe', image: ticTacToe }
  ]
})

import maker from '$lib/assets/maker.webp'
import ticTacToe from '$lib/assets/tic-tac-toe.webp'

export const prerender = true

export const load = () => ({
  projects: [
    { id: 'tic-tac-toe', name: 'Tic Tac Toe', image: ticTacToe },
    { id: 'maker', name: 'maker', image: maker }
  ]
})

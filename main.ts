import prerender from './src/prerender.tsx'

await Deno.writeTextFile('public/index.html', prerender())

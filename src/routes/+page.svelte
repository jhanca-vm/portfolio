<script>
  import '@fontsource-variable/space-grotesk'
  import '../app.css'
  import Header from './Header.svelte'
  import Hero from './Hero.svelte'
  import Projects from './Projects.svelte'
  import rings from '$lib/assets/rings.svg'
  import circle from '$lib/assets/circle.svg'
  import profile from '$lib/assets/profile-md.webp'

  export let data
</script>

<svelte:head>
  <title>Jhan Viloria - Frontend Developer</title>
  <meta
    name="description"
    content={'Based in Colombia, I’m a front‑end developer with over 2 year ' +
      'of experience, passionate about building accessible web apps that ' +
      'users love.'}
  />
  <link rel="preload" href={rings} as="image" />
  <link rel="preload" href={circle} as="image" />
  <link rel="preload" href={profile} as="image" media="(min-width: 640px)" />
</svelte:head>

<Header />
<main class="mx-auto max-w-5xl">
  <Hero />
  <Projects data={data.projects} />
</main>

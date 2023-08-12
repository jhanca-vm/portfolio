<script>
  import '@fontsource-variable/space-grotesk'
  import '../app.css'
  import Header from './Header.svelte'
  import Hero from './Hero.svelte'
  import Projects from './Projects.svelte'
  import Footer from './Footer.svelte'
  import profileSm from '$lib/assets/profile-sm.webp'
  import profileMd from '$lib/assets/profile-md.webp'

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
  <link rel="preload" href={profileSm} as="image" media="(max-width: 639px)" />
  <link rel="preload" href={profileMd} as="image" media="(min-width: 640px)" />
</svelte:head>

<Header />
<main class="mx-auto max-w-5xl">
  <Hero />
  <Projects data={data.projects} />
</main>
<Footer />

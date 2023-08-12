<script>
  import '@fontsource-variable/space-grotesk'
  import '../app.css'
  import Header from './Header.svelte'
  import Hero from './Hero.svelte'
  import Projects from './Projects.svelte'
  import Footer from './Footer.svelte'

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
</svelte:head>

<Header />
<main class="mx-auto max-w-5xl">
  <Hero />
  <Projects data={data.projects} />
</main>
<Footer />

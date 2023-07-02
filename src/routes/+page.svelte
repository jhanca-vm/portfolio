<script>
  import '@fontsource/lato/400.css'
  import '@fontsource/lato/700.css'
  import '@fontsource/lato/900.css'
  import '../app.css'
  import Hero from '$lib/Hero.svelte'
  import Libraries from '$lib/Libraries.svelte'
  import Projects from '$lib/Projects.svelte'
</script>

<svelte:head>
  <title>Jhan Carlos Viloria - Frontend Developer</title>
  <meta
    name="description"
    content={'+1 year of experience developing websites using technologies ' +
      'such as React, Next.js, Svelte and Web3.'}
  />
</svelte:head>

<main>
  <Hero />
  <Libraries />
  <Projects />
</main>
<footer>© 2023 Jhan Viloria</footer>

<style>
  main {
    display: grid;
    gap: 2.4rem 1.6rem;
    margin-inline: auto;
    max-width: 100rem;
    padding: 2.4rem 1.6rem;
  }

  footer {
    font-size: 1.4rem;
    opacity: 0.8;
    padding: 1.6rem;
    text-align: center;
  }

  @media (min-width: 640px) {
    main {
      grid-template-columns: 1.25fr 1fr;
    }
  }

  @media (min-width: 640px) {
    main {
      gap: 3.2rem;
      padding: 4rem 3.2rem;
    }
  }
</style>

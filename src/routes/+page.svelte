<script>
  import '@fontsource-variable/space-grotesk'
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Hero from '$lib/Hero.svelte'

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
<main class="max-w-[62.5rem] mx-auto">
  <Hero />
  <section class="my-20 sm:mt-15 md:mt-20 md:mb-24 lg:mb-28">
    <h2
      class="mb-10 flex items-center gap-x-[1em] font-bold text-[2.5rem]
        tracking-tight md:mb-15 md:text-6xl lg:mb-20"
    >
      Projects
      <span class="h-px flex-grow bg-white" />
    </h2>
    <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-x-5 lg:gap-x-6">
      {#each data.projects as { id, name, image }}
        <article>
          <img src={image} alt="" width="512" height="320" />
          <h3 class="mt-5 font-bold text-2xl uppercase">{name}</h3>
          <div
            class="mt-2 flex gap-x-8 font-medium uppercase text-neutral
              tracking-widest underline underline-offset-8 decoration-accent"
          >
            <a
              class="transition-colors hover:text-accent"
              href={`https://${id}-jvm.vercel.app`}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              class="transition-colors hover:text-accent"
              href={`https://github.com/jhanca-vm/${id}`}
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </article>
      {/each}
    </div>
  </section>
</main>

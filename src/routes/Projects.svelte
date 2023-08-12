<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData['projects']
</script>

<section class="my-20 sm:mt-15 md:mb-24 md:mt-20 lg:mb-28">
  <h2
    class="mb-10 flex items-center gap-x-[1em] text-4xl font-bold
      tracking-tight md:mb-15 md:text-6xl lg:mb-20"
  >
    Projects
    <span class="h-px flex-grow bg-default-100" />
  </h2>
  <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-x-5 lg:gap-x-6">
    {#each data as { id, name, image }}
      <article>
        <img src={image} alt="" width="512" height="320" />
        <h3 class="mt-5 text-2xl font-bold uppercase">{name}</h3>
        <div
          class="mt-2 flex gap-x-8 font-medium uppercase tracking-widest
            text-default-200 underline decoration-primary underline-offset-8"
        >
          <a
            href={`https://${id}-jvm.vercel.app`}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
          <a
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

<style lang="postcss">
  a {
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  a:hover {
    color: theme(colors.primary);
  }
</style>

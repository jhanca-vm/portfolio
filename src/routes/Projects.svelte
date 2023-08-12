<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData['projects']
</script>

<section class="mb-22 mt-20 sm:mb-24 sm:mt-15 md:mb-28 md:mt-20 lg:mb-32">
  <h2
    class="mb-10 flex items-center gap-x-[1em] text-4xl font-bold
      tracking-tight md:mb-15 md:text-6xl lg:mb-20"
  >
    Projects
    <span class="h-px flex-grow bg-default-100" />
  </h2>
  <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">
    {#each data as { id, name, image }}
      <article>
        <img src={image} alt="" width="512" height="320" />
        <h3 class="mt-5 text-2xl font-bold uppercase">{name}</h3>
        <div class="mt-2 flex gap-x-8 font-medium uppercase tracking-widest">
          <a
            class="link"
            href={`https://${id}-jvm.vercel.app`}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
          <a
            class="link"
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

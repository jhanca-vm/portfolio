<script>
  import { page } from '$app/stores'
  import Section from './Section.svelte'
  import Link from './Link.svelte'
  import GitHubFilled from './icons/GitHubFilled.svelte'
</script>

<Section title="Projects">
  <div class="projects">
    {#each $page.data.projects as { id, name, url } (id)}
      <article>
        <Link {url} ariaLabel={name}>
          <img src={`/images/${id}.webp`} alt="" width="768" height="480" />
        </Link>
        <div>
          <Link {url}>
            <img
              class="logo"
              src={`https://${url}/favicon.png`}
              alt=""
              width="32"
              height="32"
            />
            <h3>{name}</h3>
          </Link>
          <Link url={`github.com/jhanca-vm/${id}`} ariaLabel="Repository">
            <GitHubFilled />
          </Link>
        </div>
      </article>
    {/each}
  </div>
</Section>

<style lang="scss">
  img {
    height: auto;
  }

  h3 {
    font-size: 1.6rem;
    padding-inline: 0.8rem;
  }

  article div {
    border-bottom: 1px solid var(--shadow-color);
    justify-content: space-between;
    padding: 1.6rem 0.8rem 2.4rem;

    &,
    :global(a) {
      align-items: center;
      display: flex;
    }

    img {
      width: 2rem;
    }

    :global(a) {
      opacity: 0.88;
    }

    :global(a:hover) {
      opacity: 1;
      text-shadow: 0 1px 2px var(--shadow-color);
    }
  }

  img:not(.logo) {
    border-radius: 0.8rem;
    box-shadow: 0 12px 24px -6px var(--shadow-color);
    transition: box-shadow 300ms;

    &:hover {
      animation: scaling ease 500ms;
      box-shadow: 0 32px 64px -16px var(--shadow-color);
      transform: perspective(100rem) rotateX(1deg) scale(1.02)
    }
  }

  .projects {
    display: grid;
    grid-column-end: span 2;
    row-gap: 4.8rem;

    @media (min-width: 640px) {
      column-gap: 4rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      gap: 6rem;
      grid-column: 2 / auto;
    }
  }
</style>

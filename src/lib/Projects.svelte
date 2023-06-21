<script>
  const data = [
    {
      id: 'freestylehub',
      name: 'FreestyleHub',
      description: "Informative website about Urban Roosters' FMS."
    },
    {
      id: 'kanban',
      name: 'Kanban task management',
      description: 'Kanban Task Management Web Application.'
    }
  ]
</script>

<section>
  <h2>Projects</h2>
  <div>
    {#each data as { id, name, description, href }}
      <article>
        <a
          href={`https://github.com/jhanca-vm/${id}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={`/images/${id}.webp`} alt="" width="512" height="320px" />
          <h3>{name}</h3>
          <p>{description}</p>
        </a>
      </article>
    {/each}
  </div>
</section>

<style>
  h2 {
    color: hwb(var(--color-300));
    margin-bottom: 3.2rem;
  }

  div {
    display: grid;
    row-gap: 4.8rem;
  }

  a {
    display: flex;
    flex-direction: column;
    opacity: 1;
    transition: box-shadow 150ms ease-out;
  }

  a:hover img {
    box-shadow: 0 4px 8px black;
  }

  img {
    border-radius: 0.8rem;
    height: auto;
    width: 100%;
  }

  h3,
  p {
    margin-left: 0.8rem;
  }

  h3 {
    margin-top: 1.2rem;
  }

  @media (min-width: 640px) {
    section {
      grid-column-end: span 2;
    }

    div {
      column-gap: 3.2rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<script>
  import LinkedIn from './icons/LinkedIn.svelte'
  import GitHub from './icons/GitHub.svelte'
  import Twitter from './icons/Twitter.svelte'
  import Link from './Link.svelte'
</script>

<header>
  <div>
    <h1>Portfolio</h1>
    <nav>
      <Link url="www.linkedin.com/in/jhanviloria/" ariaLabel="LinkedIn">
        <LinkedIn style="--size: 2.5rem" />
      </Link>
      <Link url="github.com/jhanca-vm" ariaLabel="GitHub">
        <GitHub style="--size: 2.4rem" />
      </Link>
      <Link url="twitter.com/jhanca_vm" ariaLabel="Twitter">
        <Twitter style="--size: 2.4rem" />
      </Link>
    </nav>
  </div>
</header>

<style lang="scss">
  header {
    background-color: var(--color-100);
    box-shadow: 0 1px 2px var(--shadow-color);
    padding-block: 2rem;

    div,
    nav,
    :global(a) {
      display: flex;
    }

    :global(a:not(:hover)) {
      opacity: 0.8;
    }
  }

  div {
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  nav {
    column-gap: 2.4rem;
  }
</style>

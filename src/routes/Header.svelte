<script>
  import GitHub from '$lib/icons/GitHub.svelte'
  import LinkedIn from '$lib/icons/LinkedIn.svelte'
  import Twitter from '$lib/icons/Twitter.svelte'

  const socialMedia = [
    { name: 'GitHub', url: 'github.com/jhanca-vm', icon: GitHub },
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/jhanviloria/',
      icon: LinkedIn
    },
    { name: 'Twitter', url: 'twitter.com/jhanca_vm', icon: Twitter }
  ]
</script>

<header
  class="flex flex-col gap-y-5 pt-5 sm:flex-row sm:items-center
    sm:justify-between sm:pt-7 lg:mx-auto lg:max-w-5xl lg:pt-10"
>
  <p
    class="text-center text-2xl font-bold leading-none tracking-tight
      sm:text-[1.75rem]"
  >
    jhanca-vm
  </p>
  <nav>
    <ul class="flex items-center justify-center gap-x-6 sm:gap-x-8">
      {#each socialMedia as { name, url, icon }}
        <li>
          <a
            class="transition-colors hover:text-primary"
            aria-label={name}
            href="https://{url}"
            target="_blank"
            rel="noreferrer"
          >
            <svelte:component this={icon} />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

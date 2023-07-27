<script>
  import GitHub from './icons/GitHub.svelte'
  import LinkedIn from './icons/LinkedIn.svelte'
  import Twitter from './icons/Twitter.svelte'
</script>

<header
  class="pt-5 flex flex-col gap-y-5 sm:pt-7 sm:flex-row sm:items-center
    sm:justify-between lg:max-w-[62.5rem] lg:mx-auto lg:pt-10"
>
  <p
    class="font-bold text-center text-2xl leading-none tracking-tight
      sm:text-[1.75rem]"
  >
    jhanca-vm
  </p>
  <nav>
    <ul class="flex items-center justify-center gap-x-6 sm:gap-x-8">
      <li>
        <a
          class="hover:text-accent"
          aria-label="GitHub"
          href="https://github.com/jhanca-vm"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </li>
      <li>
        <a
          class="hover:text-accent"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/jhanviloria/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </li>
      <li>
        <a
          class="hover:text-accent"
          aria-label="Twitter"
          href="https://twitter.com/jhanca_vm"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </li>
    </ul>
  </nav>
</header>

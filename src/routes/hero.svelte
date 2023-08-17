<script>
  import Rings from '$lib/rings.svelte'
  import Circle from '$lib/circle.svelte'
  import Name from '$lib/name.svelte'
  import profileMd from '$lib/assets/profile-md.webp'
  import profileSm from '$lib/assets/profile-sm.webp'
</script>

<section
  class="pt-[264px] text-center sm:py-16 sm:text-left md:pb-13 lg:pb-22 lg:pt-20"
>
  <Rings
    class={'absolute -left-[344px] top-[124px] -z-10 sm:-left-[264px] ' +
      'sm:top-[86px] xl:-left-[100px] xl:top-[112px]'}
  />
  <picture
    class="absolute inset-x-0 top-0 -z-10 mx-auto w-40 sm:left-auto sm:w-60
      md:w-72 md:bg-default-300"
  >
    <source
      srcset={profileMd}
      media="(min-width: 640px)"
      width="645"
      height="1200"
    />
    <img src={profileSm} alt="" width="174" height="383" />
  </picture>
  <Circle
    class={'circle absolute -right-16 top-55.75 -z-10 w-32.25 sm:top-79.5 ' +
      'md:top-101.75'}
  />
  <h1
    class="mx-auto mt-10 max-w-md text-4xl font-bold leading-none tracking-tight
      sm:m-0 sm:text-5xl sm:leading-tight md:text-7xl lg:max-w-[42rem]
      lg:text-[5rem]"
  >
    Nice to <span class="md:inline-block lg:inline">meet you! I’m</span>
    <Name>Jhan Viloria</Name>.
  </h1>
  <p
    class="text-neutral mx-auto mt-5 max-w-sm font-medium leading-relaxed
      sm:mx-0 sm:mt-8 sm:text-lg md:mt-7 md:max-w-[26.75rem] lg:mt-9"
  >
    Based in Colombia, I’m a front‑end developer with over 2 year of experience,
    passionate about building accessible web apps that users love.
  </p>
</section>

<style lang="postcss">
  @media screen(xl) {
    picture {
      right: calc((100% - theme(maxWidth.5xl)) / 2);
    }

    section :global(.circle) {
      right: calc(((100% - theme(maxWidth.5xl)) / 2) + theme(spacing[55.75]));
    }
  }
</style>

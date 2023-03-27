<script lang="ts">
  export let title: string
</script>

<section>
  <h2>{title}</h2>
  <span />
  <slot />
</section>

<style lang="scss">
  section {
    align-items: center;
    column-gap: 2.8rem;
    display: grid;
    grid-template-columns: max-content 1fr;
    margin-block: 6rem;
    row-gap: 4rem;

    @media (min-width: 640px) {
      margin-block: 8rem;
    }

    @media (min-width: 1024px) {
      gap: 4.8rem;
      margin-block: 12rem;
    }
  }

  span {
    background-color: var(--color-100);
    box-shadow: 0 1px 2px var(--shadow-color);
    height: 2px;
  }
</style>

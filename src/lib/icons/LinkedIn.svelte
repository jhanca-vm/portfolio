<script lang="ts">
  export let style: string
</script>

<svg
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  {style}
>
  <path d="M0 0h24v24H0z" stroke="none" />
  <path
    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 11v5M8 8v.01M12 16v-5"
  />
  <path d="M16 16v-3a2 2 0 0 0-4 0" />
</svg>

<style>
  svg {
    width: var(--size);
  }
</style>

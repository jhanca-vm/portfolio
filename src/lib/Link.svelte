<script lang="ts">
  export let url: string
  export let ariaLabel: string | undefined = undefined
</script>

<a
  href={`https://${url}`}
  target="_blank"
  rel="noreferrer"
  aria-label={ariaLabel}
>
  <slot />
</a>

<script lang="ts">
  import type {
    HTMLInputAttributes,
    HTMLTextareaAttributes
  } from 'svelte/elements'

  export let tag: 'input' | 'textarea' = 'input'
  export let attributes: HTMLInputAttributes | HTMLTextareaAttributes = {}
  export let error: string | undefined
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="relative">
  <svelte:element
    this={tag}
    class:!border-error={error}
    class:pr-12={error}
    {...attributes}
  />
  {#if error}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute right-0 w-6 fill-error"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"
      />
    </svg>
    <span class="mt-1 block text-xs tracking-tight text-right text-error">
      {error}
    </span>
  {/if}
</label>

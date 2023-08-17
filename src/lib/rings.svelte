<script lang="ts">
  const cyValues = [40, 52, 65, 77, 89]

  let className: string | undefined = undefined

  export { className as class }
</script>

<svg
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  width="530"
  height="129"
  fill="none"
>
  <g class="stroke-default-100/25">
    {#each cyValues as cy}
      <ellipse cx="265" {cy} rx="264.5" ry="39.5" />
    {/each}
  </g>
</svg>

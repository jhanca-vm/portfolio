<script>
  import '@fontsource/major-mono-display'
  import '@fontsource/spline-sans-mono/variable.css'
  import '../app.scss'
  import Header from '../lib/Header.svelte'
</script>

<Header />
<main>
  <div>
    <slot />
  </div>
</main>

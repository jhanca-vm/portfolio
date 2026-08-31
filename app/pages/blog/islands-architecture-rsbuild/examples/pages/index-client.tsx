// src/pages/index.client.tsx
import { hydrateRoot } from 'react-dom/client'

const islands = document.querySelectorAll('[data-island]')

for (const root of islands) {
  const name = root.getAttribute('data-island')

  import(`../components/${name}`).then(({ default: Component }) => {
    hydrateRoot(root, <Component />)
  })
}

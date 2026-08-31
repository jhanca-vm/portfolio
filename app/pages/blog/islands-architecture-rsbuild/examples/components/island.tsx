// src/components/island.tsx
import type { ReactNode } from 'react'
import { renderToString } from 'react-dom/server'

interface Props {
  name: string
  children: ReactNode
}

export default function Island({ name, children }: Props) {
  return (
    <div
      data-island={name}
      dangerouslySetInnerHTML={{ __html: renderToString(children) }}
    />
  )
}

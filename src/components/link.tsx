import type { Child } from 'hono/jsx'

interface Props {
  class?: string
  href: string
  children: Child
}

export default function Link({ class: className, href, children }: Props) {
  return (
    <a
      class={className}
      href={`https://${href}`}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

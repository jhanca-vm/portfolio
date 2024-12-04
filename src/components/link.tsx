import type { ComponentChildren } from 'preact'

interface Props {
  class?: string
  href: string
  children: ComponentChildren
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

declare module '*.svg' {
  import type { FunctionComponent, SVGAttributes } from 'preact'

  const Component: FunctionComponent<SVGAttributes>

  export default Component
}

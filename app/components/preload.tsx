interface Props {
  fonts: string[]
}

export default function Preload({ fonts }: Props) {
  return fonts.map((font) => (
    <link
      rel="preload"
      href={font}
      as="font"
      type="font/woff2"
      crossOrigin=""
      key={font}
    />
  ))
}

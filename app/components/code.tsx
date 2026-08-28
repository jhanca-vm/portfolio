import hljs from 'highlight.js'

interface Props {
  text: string
}

export default function Highlight({ text }: Props) {
  return (
    <pre className="text-sm md:text-base">
      <code
        className="hljs rounded-md shadow-inner"
        dangerouslySetInnerHTML={{
          __html: hljs.highlightAuto(text, ['typescript']).value
        }}
      />
    </pre>
  )
}

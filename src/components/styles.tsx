import { transform } from 'lightningcss'

export default async function Styles() {
  const isBuild = Deno.args[0] === 'build'
  const decoder = new TextDecoder()

  let css = await Deno.readFile('src/style.css')

  if (isBuild) {
    const { code } = transform({ code: css, minify: true })

    css = code
  }

  return (
    <style
      dangerouslySetInnerHTML={{ __html: decoder.decode(css) }}
    />
  )
}

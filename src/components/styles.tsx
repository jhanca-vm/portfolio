import { transform } from 'lightningcss'

export default async function Styles() {
  const isBuild = Deno.args[0] === 'build'

  let css = await Promise.all(
    ['base', 'components', 'utilities'].map((file) => {
      const path = `src/styles/${file}.css`

      return Deno[isBuild ? 'readFile' : 'readTextFile'](path)
    }),
  )

  if (isBuild) {
    const decoder = new TextDecoder()

    css = css.map((layer) => {
      const { code } = transform({ code: layer, minify: true })

      return decoder.decode(code)
    })
  }

  return (
    <style
      dangerouslySetInnerHTML={{ __html: css.join(isBuild ? '' : '\n') }}
    />
  )
}

import { bundle } from 'lightningcss'
import { render } from 'preact-render-to-string'
import Page from './page.tsx'

export default function prerender(host?: string) {
  const isDev = host !== undefined
  const decoder = new TextDecoder()
  const { code } = bundle({ filename: 'src/styles/main.css', minify: !isDev })

  return `<!DOCTYPE html>${
    render(
      <Page>
        <style dangerouslySetInnerHTML={{ __html: decoder.decode(code) }} />
        {isDev && (
          <script
            type='module'
            dangerouslySetInnerHTML={{
              __html: `const ws = new WebSocket('ws://${host}')\n` +
                'ws.onclose = () => setTimeout(() => location.reload(), 1000)',
            }}
          />
        )}
      </Page>,
    )
  }`
}

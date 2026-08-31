import { renderToStaticMarkup } from 'react-dom/server'

import Code from '@/components/code'
import ExternalLink from '@/components/external-link'
import InlineCode from '@/components/inline-code'
import Subtitle from '@/components/subtitle'
import BlogLayout from '@/layouts/blog'

import config from './examples/config?raw'
import glob from './examples/glob?raw'
import page from './examples/page?raw'
import pluginPrerender from './examples/plugin-prerender?raw'
import pluginSsg from './examples/plugin-ssg?raw'
import meta from './index.meta.yaml'

import style from 'highlight.js/styles/stackoverflow-light.css?url'

export function render() {
  return renderToStaticMarkup(
    <BlogLayout
      date={meta.date}
      title={meta.title}
      description={`${meta.description} ${meta.callToAction}.`}
      head={<link rel="stylesheet" href={style} />}
    >
      <p>
        Construir un sitio estático con zero JavaScript por defecto parece una
        combinación sencilla de hacer. Sin embargo, al buscar opciones reales,
        el panorama es limitado: Astro es prácticamente la única opción
        consolidada.
      </p>
      <p>
        Los frameworks modernos se enfocan en SSR y los bundlers están diseñados
        para SPAs donde el HTML es una plantilla genérica. Astro permite usar
        cualquier framework para los componentes, pero las páginas o rutas
        siguen atadas a archivos <InlineCode>.astro</InlineCode>. Si el objetivo
        es trabajar todo bajo un solo framework (con su propia arquitectura,
        sistema de archivos, etc.) esa capa intermedia se convierte en una
        limitación. La alternativa que propongo elimina esa dependencia y da
        control total sobre el proyecto.
      </p>
      <Subtitle>Por qué React y Rsbuild</Subtitle>
      <p>
        Esta guía está escrita con React porque es el framework que más uso y el
        que tiene mayor adopción, pero la técnica es adaptable a cualquier
        framework que tenga un renderizador de servidor (Vue, Svelte, Solid,
        Preact, etc.).
      </p>
      <p>
        Lo que hago es replicar lo que los bundlers hacen para añadir soporte a
        SSR, con una diferencia clave: en lugar de ejecutar un servidor que
        renderiza bajo demanda, se ejecuta un prerender que genera el HTML
        estático en build time. El resultado es el mismo HTML que produciría un
        SSR, pero convertido en archivos estáticos que no necesitan servidor en
        runtime.
      </p>
      <p>
        Aquí es donde entra <strong className="font-semibold">Rsbuild</strong> y
        su sistema de{' '}
        <ExternalLink
          className="font-medium text-blue-600 hover:underline"
          href="https://rsbuild.rs/guide/advanced/environments"
        >
          multi-environment
        </ExternalLink>
        . Esta funcionalidad permite ejecutar y comunicar dos entornos aislados
        dentro del mismo build:
      </p>
      <ul className="list-disc space-y-1.5 pl-12">
        <li>
          <strong className="font-semibold">Environment node:</strong> donde se
          ejecuta el prerender, generando el HTML completo.
        </li>
        <li>
          <strong className="font-semibold">Environment web:</strong> donde se
          sirve ese HTML estático.
        </li>
      </ul>
      <Subtitle>El punto de partida: un entry server como en SSR</Subtitle>
      <p>
        Siguiendo la convención que usan los bundlers al implementar SSR, separo
        el código de servidor y cliente con los sufijos{' '}
        <InlineCode>.server</InlineCode> y <InlineCode>.client</InlineCode>. Un
        entry de servidor es exactamente igual que en ese contexto: una función{' '}
        <InlineCode>render()</InlineCode> que devuelve HTML:
      </p>
      <Code text={page} />
      <p>
        Aquí no se usa ningún template de archivo <InlineCode>.html</InlineCode>
        , todo el HTML se define en JSX. Esto da control absoluto sobre el
        output. En SSR normalmente se usa una sola entrada de cliente y servidor
        para toda la aplicación. Aquí en cambio aprovecho el MPA (multi-page
        application) de Rsbuild y para no añadir las entradas manualmente, uso{' '}
        <InlineCode>glob</InlineCode> para escanear las páginas.
      </p>
      <p>
        Ahora bien, el environment web necesita una entrada para generar el HTML
        de cada página, incluso cuando esa página no tiene interactividad y no
        hay nada que compilar para el navegador. Para resolverlo, le asigno un
        fallback que creo en memoria con{' '}
        <ExternalLink
          className="font-medium text-blue-600 hover:underline"
          href="https://rspack.rs/plugins/virtual-modules-plugin"
        >
          VirtualModulesPlugin
        </ExternalLink>
        , evitando así crear archivos vacíos y añadiendo una entrada de cliente
        solo cuando realmente se necesite:
      </p>
      <Code text={glob} />
      <Subtitle>Los plugins: de SSR a prerender</Subtitle>
      <p>
        Con las entradas definidas, los plugins se encargan del resto. El
        primero, <InlineCode>pluginPrerender</InlineCode>:
      </p>
      <Code text={pluginPrerender} />
      <p>
        Por cada <InlineCode>.js</InlineCode> que genera el environment node, lo
        ejecuta dentro de un contexto virtual, extrae el resultado de{' '}
        <InlineCode>exports.render()</InlineCode>, lo expone al environment web
        con <InlineCode>api.expose</InlineCode>, y elimina el{' '}
        <InlineCode>.js</InlineCode> del output final. Se usa CommonJS porque el
        soporte de ESM en <InlineCode>node:vm</InlineCode> todavía es
        experimental.
      </p>
      <p>
        Del otro lado, <InlineCode>pluginSsg</InlineCode> recibe ese HTML
        expuesto y lo usa como output final:
      </p>
      <Code text={pluginSsg} />
      <p>
        El hook <InlineCode>afterTemplateExecution</InlineCode> es el último
        punto donde se puede modificar el HTML antes de que se inyecten los
        scripts. El <InlineCode>splice(0, 3)</InlineCode> elimina las etiquetas
        head que Rsbuild agrega por defecto. En producción,{' '}
        <InlineCode>processAssets</InlineCode> limpia los archivos vacíos que
        genera el fallback.
      </p>
      <p>
        Con los plugins definidos, el último paso es conectar ambos environments
        en la configuración final:
      </p>
      <Code text={config} />
      <p>
        Algunos detalles importantes de esta configuración que no son obvios:
      </p>
      <ul className="list-disc space-y-1.5 pl-12">
        <li>
          <InlineCode>fastRefresh: false</InlineCode>: el hot reload de React no
          tiene sentido en el environment de node ya que solo genera HTML
          estático.
        </li>
        <li>
          <InlineCode>autoExternal: true</InlineCode>: las dependencias externas
          no se bundlean, se resuelven con require en runtime, haciendo el
          proceso más rápido.
        </li>
        <li>
          <InlineCode>[contenthash:10].css</InlineCode>: genera nombres de
          archivo planos en vez de carpetas anidadas, manteniendo el output de
          CSS limpio.
        </li>
        <li>
          <InlineCode>dependencies: ['node']</InlineCode>: asegura que el
          environment web espere a que el de node termine, de lo contrario no
          encontraría el HTML prerenderizado.
        </li>
        <li>
          <InlineCode>hmr: false</InlineCode>: con HMR activo, Rsbuild inyecta
          su cliente en cada entry e intercepta las actualizaciones. Como el
          HTML ya viene prerenderizado, los cambios dejan de detectarse
          correctamente. Desactivarlo hace que todo funcione sin configuración
          extra
        </li>
        <li>
          <InlineCode>watchFiles</InlineCode>: fuerza un restart completo cuando
          se añaden o eliminan archivos en <InlineCode>src/pages</InlineCode>.
          Es necesario porque el escaneo con <InlineCode>glob</InlineCode> se
          ejecuta solo al cargar la config, así que sin esto, las nuevas páginas
          no aparecerían hasta reiniciar manualmente.
        </li>
      </ul>
      <p>
        Con esto ya puedes generar páginas estáticas y, si lo necesitas,
        añadirles funcionalidades con código nativo. Si lo que te interesa es
        llevarlo más allá con una arquitectura de islas, lo explico en el{' '}
        <a
          className="font-medium text-blue-600 hover:underline"
          href="/blog/islands-architecture-rsbuild"
        >
          próximo artículo
        </a>
        .
      </p>
    </BlogLayout>
  )
}

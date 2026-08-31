import { renderToStaticMarkup } from 'react-dom/server'

import Code from '@/components/code'
import InlineCode from '@/components/inline-code'
import Subtitle from '@/components/subtitle'
import BlogLayout from '@/layouts/blog'

import island from './examples/components/island?raw'
import config from './examples/config?raw'
import script from './examples/pages/index-client?raw'
import page from './examples/pages/index-server?raw'
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
        En el{' '}
        <a
          className="font-medium text-blue-600 hover:underline"
          href="/blog/ssg-react-rsbuild"
        >
          artículo anterior
        </a>{' '}
        construí una configuración de SSG con React y Rsbuild que genera páginas
        estáticas sin JavaScript por defecto, con la opción de añadir
        interactividad mediante entradas de cliente.
      </p>
      <p>
        Este artículo lleva esa configuración un paso más allá. Cuando quieres
        añadir componentes interactivos, como un buscador, un carrito de compras
        o un formulario con validación, puedes marcarlos como islas e
        hidratarlos de forma independiente. El resto del HTML permanece estático
        y el navegador solo carga el código de los componentes que realmente lo
        necesitan.
      </p>
      <Subtitle>El componente Island</Subtitle>
      <p>
        La pieza central de esta implementación es un componente contenedor que
        hace dos cosas: renderiza su contenido a string en el servidor y lo
        marca para que el cliente sepa qué debe hidratar.
      </p>
      <Code text={island} />
      <p>Un ejemplo de uso en una página:</p>
      <Code text={page} />
      <blockquote
        className={'border-l-2 border-red-700 pl-6 text-sm md:text-base'}
      >
        El valor de <InlineCode>name</InlineCode> debe coincidir con el nombre
        del archivo del componente, porque el script de hidratación lo usa para
        resolver el import dinámico.
      </blockquote>
      <Subtitle>El script de hidratación en el cliente</Subtitle>
      <p>
        Con las islas marcadas en el HTML, falta el script que las detecta y las
        monta. Este vive en la entrada de cliente y se ejecuta una vez que el
        DOM está listo:
      </p>
      <Code text={script} />
      <p>
        El import dinámico le indica a Rsbuild que genere un chunk separado por
        cada componente. Esto tiene dos beneficios: el navegador solo descarga
        el JavaScript de las islas que realmente están en la página, y el código
        queda aislado en módulos reutilizables que se comparten entre páginas
        sin duplicarse.
      </p>
      <p>
        Con las islas ya hay código de cliente que usa JSX, así que el
        environment web necesita el plugin de React para compilarlo:
      </p>
      <Code text={config} />
      <p>
        Y así es como se implementa con React, pero la técnica no está atada al
        framework. Cualquier librería con renderizador de servidor puede
        adaptarse a este patrón: basta con cambiar el renderizado a string y la
        hidratación por sus equivalentes.
      </p>
    </BlogLayout>
  )
}

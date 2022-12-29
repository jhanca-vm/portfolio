import type { ComponentChildren, FunctionComponent } from "preact";

interface Props {
  title: string;
  children: ComponentChildren;
}

export const Section: FunctionComponent<Props> = ({ title, children }) => (
  <section class={`mt-16 mb-12 sm:mt-20 xl:(mt-28 mb-16)`}>
    <h2 class="font-serif text-2xl border-b border-[#f7c28c] pb-2 mb-7 tracking-wide">
      {title}
    </h2>
    {children}
  </section>
);

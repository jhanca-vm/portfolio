import type { FunctionComponent } from "preact";

export const Hero: FunctionComponent = () => (
  <section class="text-center my-12 grid gap-y-10 max-w-sm mx-auto
    md:(max-w-none grid-cols-2 my-16 text-left gap-x-12 items-center) lg:gap-x-16
    xl:my-24">
    <div>
      <h1 class="inline-flex flex-col text-2xl font-semibold leading-normal
        children:(font-[fa-brands] contents text-xl tracking-[0.25em])">
        Hi! I'm Jhan Viloria, Web Developer with experience in{" "}
        <span>&#xf41b;</span>React and <span>&#xf42e;</span>Solidity
      </h1>
      <p class="hidden text-sm md:(block mt-3 leading-relaxed)">
        I'm developer with strong HTML, CSS and JavaScript skills. The framework
        I have the most experience with is React, but I can also work with Vue
        or Svelte. Also, I have Solidity skills and can create EVM (Etheruem
        Virtual Machine) compatible smart contracts and develop DApps. I am
        constantly looking to learn and improve my skills.
      </p>
    </div>
    <figure class="w-11/12 mx-auto md:w-full lg:w-10/12">
      <img
        style={{ aspectRatio: "1.66 / 1" }}
        class="w-full"
        src="/illustration.svg"
        alt=""
      />
    </figure>
  </section>
);

import type { FunctionComponent } from "preact";

export const Footer: FunctionComponent = () => (
  <footer class="px-5 mt-16 sm:mt-20 md:px-8 xl:mt-28">
    <div class="max-w-5xl mx-auto flex items-center justify-between py-6
      border-t border-[#3a2624] border-opacity-50">
      <p class="text-[#3a2624] text-opacity-90">
        <span class="relative top-[0.07rem]">©</span>{" "}
        <span class="text-sm tracking-tight">Jhan Viloria 2022</span>
      </p>
      <a
        class="not-hover:opacity-90"
        href="https://fresh.deno.dev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="w-36"
          width="197"
          height="37"
          src="https://fresh.deno.dev/fresh-badge-dark.svg"
          alt="Made with Fresh"
        />
      </a>
    </div>
  </footer>
);

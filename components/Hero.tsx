import { FunctionComponent } from "preact";

export const Hero: FunctionComponent = () => (
  <section class="text-center my-12 grid gap-y-10 max-w-sm mx-auto
    md:(max-w-none grid-cols-2 my-16 text-left gap-x-12 items-center) lg:gap-x-16
    xl:my-24">
    <div>
      <h1 class="inline-flex flex-col text-2xl font-semibold">
        Hi! I'm Jhan Viloria, Fullstack Developer
        <small class="mt-1.5 font-medium">
          with experience in React and Solidity
        </small>
      </h1>
      <p class="hidden text-sm md:(block mt-3 leading-normal)">
        I'm a frontend developer with strong HTML, CSS, and JavaScript skills. I
        am an expert in frameworks like React and Svelte. I also have skills in
        Solidity and can write smart contracts and use tools like Hardhat to
        deploy and test applications on the Ethereum blockchain. I am constantly
        looking to learn and improve my skills.
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

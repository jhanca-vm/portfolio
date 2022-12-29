import type { Handlers, PageProps } from "$fresh/server.ts";
import type { Project } from "../types.ts";
import { Head } from "$fresh/runtime.ts";
import { handler as getProjects } from "./api/project.ts";
import { Hero } from "../components/Hero.tsx";
import { Projects } from "../components/Projects.tsx";

export const handler: Handlers<Project[]> = {
  async GET(request, context) {
    const response = await getProjects(request, context);
    const data: Project[] = await response.json();

    return context.render(data);
  },
};

export default function Home({ data }: PageProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I'm developer with strong HTML, CSS and JavaScript skills.
            The framework I have the most experience with is React, but I can
            also work with Vue or Svelte. Also, I have Solidity skills and can
            create EVM (Etheruem Virtual Machine) compatible smart contracts and
            develop DApps."
        />
      </Head>
      <Hero />
      <Projects data={data} />
    </>
  );
}

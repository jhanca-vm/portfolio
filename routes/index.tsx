import { Handlers, PageProps } from "$fresh/server.ts";
import { Project } from "../types.ts";
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
      <Hero />
      <Projects data={data} />
    </>
  );
}

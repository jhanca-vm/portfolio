import type { FunctionComponent } from "preact";
import type { Project } from "../types.ts";
import { Section } from "./Section.tsx";

interface Props {
  data: Project[];
}

export const Projects: FunctionComponent<Props> = ({ data }) => (
  <Section title="Projects">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3">
      {data.map(({ name, url, repository, screenshot }) => (
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <img
              style={{ aspectRatio: "1.6 / 1" }}
              class="w-full rounded shadow-lg border border-gray-100 hover:shadow-2xl"
              src={screenshot}
              alt={name}
              key={name}
            />
          </a>
          <div class="flex items-center justify-between m-2">
            <a href={url} target="_blank" rel="noreferrer">
              <h3 class="font-semibold mt-1 not-hover:opacity-80 hover:text-underline">
                {name}
              </h3>
            </a>
            <a
              class="font-[fa-brands] text-2xl not-hover:opacity-80"
              title="Repository"
              href={repository}
              target="_blank"
              rel="noreferrer"
            >
              &#xf09b;
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

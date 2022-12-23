import { FunctionComponent } from "preact";
import { Project } from "../types.ts";

interface Props {
  data: Project[];
}

export const Projects: FunctionComponent<Props> = ({ data }) => (
  <section class="mt-16 mb-12 sm:mt-20 xl:(mt-28 mb-16)">
    <h2 class="font-serif text-2xl border-b border-[#f7c28c] pb-2 mb-7">
      Projects
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3">
      {data.map(({ name, url, repository, screenshot }) => (
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <img
              style={{ aspectRatio: "1.6 / 1" }}
              class="w-full rounded shadow-lg hover:shadow-2xl"
              src={screenshot}
              alt=""
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
  </section>
);

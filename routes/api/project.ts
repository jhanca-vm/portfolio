import { Handler } from "$fresh/server.ts";
import { Project } from "../../types.ts";

const projects: Project[] = [
  {
    name: "PlatziPunks",
    url: "https://platzipunks.netlify.app",
    repository: "https://github.com/jhanca-vm/platzi-punks",
    screenshot: "https://i.imgur.com/mEfJBXe.jpg",
  },
];

export const handler: Handler = () => Response.json(projects);

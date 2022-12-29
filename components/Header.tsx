import type { FunctionComponent } from "preact";

export const Header: FunctionComponent = () => {
  const socialMedia = new Map<string, [string, string]>();

  socialMedia.set("LinkedIn", [
    "\u{f08c}",
    "https://www.linkedin.com/in/jhanviloria/",
  ]);
  socialMedia.set("Twitter", ["\u{f099}", "https://twitter.com/jhanca_vm"]);
  socialMedia.set("GitHub", ["\uf09b", "https://github.com/jhanca-vm"]);

  return (
    <header class="bg-[#f7c28c] py-4 px-5 shadow-sm md:px-8">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <span class="text-2xl leading-none font-serif font-semibold">
          Portfolio
        </span>
        <nav>
          <ul class="font-[fa-brands] text-xl flex gap-x-7">
            {[...socialMedia].map(([name, [icon, url]]) => (
              <li key={name}>
                <a
                  class="hover:opacity-80"
                  title={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

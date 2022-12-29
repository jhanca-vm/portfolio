import type { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="logo.png" />
        <title>Jhan Carlos Viloria Murillo</title>
      </Head>
      <body class="bg-[#f7f7f7] text-[#3a2624] font-mono">
        <Header />
        <main class="px-5 md:px-8">
          <div class="max-w-5xl mx-auto">
            <Component />
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}

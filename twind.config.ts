import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    fontFamily: {
      serif: "Grenze Gotisch, serif",
      mono: "Spline Sans Mono, monospace",
    },
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "Grenze Gotisch",
        fontWeight: "400 600",
        src: "url(/fonts/GrenzeGotisch.ttf) format('truetype')",
      },
      {
        fontFamily: "Spline Sans Mono",
        fontWeight: "400 600",
        src: "url(/fonts/SplineSansMono.ttf) format('truetype')",
      },
      {
        fontFamily: "fa-brands",
        fontWeight: "400",
        src: "url(/fonts/fa-brands.ttf) format('truetype')",
      },
    ],
  },
} as Options;

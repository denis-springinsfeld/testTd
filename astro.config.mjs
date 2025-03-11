// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://denis-springinsfeld.github.io",
  base: "testTd",
  vite: {
    plugins: [tailwindcss()],
  },
});

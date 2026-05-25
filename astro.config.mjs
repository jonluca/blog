import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jonlu.ca",
  outDir: "./out",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  build: {
    format: "file",
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});

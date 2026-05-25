import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jonlu.ca",
  outDir: "./out",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  adapter: cloudflare({
    prerenderEnvironment: "node",
  }),
  build: {
    format: "file",
  },
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

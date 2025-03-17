// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },

  integrations: [react()],

  i18n: {
    locales: ["en", "cn"],
    defaultLocale: "en",
  },
});

// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },

  integrations: [vue()],

  i18n: {
    locales: ["en", "cn"],
    defaultLocale: "en",
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "My Store",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // 其他 link 標籤...
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/your-kit-code.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
<<<<<<< HEAD

  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001'
    }
  }
=======
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
});

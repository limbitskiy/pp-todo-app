// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt", "@nuxt/icon", "@pinia-plugin-persistedstate/nuxt"],
  // app: {
  //   head: {
  //     script: [{ src: "source", defer: true }],
  //   },
  // },
  // ui: {
  //   primary: 'green',
  //   gray: 'cool'
  // }
  colorMode: {
    preference: "light",
  },
  css: ["~/assets/css/main.scss"],
  ui: {
    size: "lg",
  },
});

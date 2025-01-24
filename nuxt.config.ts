export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css", "aos/dist/aos.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    // Ensure the AOS plugin is included for initialization
    "~/plugins/aos.client.js",
  ],

  compatibilityDate: "2025-01-23",
});

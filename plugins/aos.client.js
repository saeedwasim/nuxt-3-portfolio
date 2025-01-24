import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook("app:mounted", () => {
      AOS.init({
        duration: 1000, // Animation duration
        once: true, // Ensure animations happen only once
        offset: 120, // Trigger offset
      });
    });
  }
});

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/localFonts.scss";

createApp(App)
  .use(router)
  .mount("#app");

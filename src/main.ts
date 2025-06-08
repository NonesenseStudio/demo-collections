import { createApp } from "vue";
import "./style.less";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./store";
import {i18n} from "@/utils/i18n.ts";

const app = createApp(App);
setupRouter(app).then();
setupStore(app);
app.use(i18n);
app.mount("#app");

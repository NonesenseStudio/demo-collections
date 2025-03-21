import { createApp } from "vue";
import "./style.less";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./store";

const app = createApp(App);
await setupRouter(app);
setupStore(app);
app.mount("#app");

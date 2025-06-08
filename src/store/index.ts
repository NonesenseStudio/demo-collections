import { createPinia } from "pinia";
import { App } from "vue";

export function setupStore(app: App) {
  const pinia = createPinia();
  app.use(pinia);
}
export * from "./useElementStore.ts";
export * from "./useAntStore.ts";
export * from "./useMapStore.ts";
export * from "./useChatStore.ts";

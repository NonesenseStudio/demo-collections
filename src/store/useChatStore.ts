import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: (): {
    token: string | null | undefined;
    language: "zh" | "en";
  } => ({
    token: null,
    language: "zh",
  }),
  actions: {
    setToken(token: string | null | undefined) {
      this.token = token;
    },
    setLanguage(language: "zh" | "en") {
      this.language = language;
    },
  },
});

import { defineStore } from "pinia";

export const useChatStore = defineStore("chat", {
  state: (): {
    token: string | null | undefined;
    language: "zh" | "en";
    systemPrompt: string;
  } => ({
    token: null,
    language: "zh",
    systemPrompt: "You are a helpful assistant.",
  }),
  actions: {
    setToken(token: string | null | undefined) {
      this.token = token;
    },
    setLanguage(language: "zh" | "en") {
      this.language = language;
    },
    setSystemPrompt(systemPrompt: string) {
      this.systemPrompt = systemPrompt;
    },
  },
});

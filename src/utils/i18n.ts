import { createI18n } from "vue-i18n";
import { useChatStore } from "@/store";

export const i18n = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: "en",
  messages: {
    en: {
      hello: "Hello world",
    },
    zh: {
      hello: "你好，世界",
    },
    zh_TW: {
      hello: "哈囉，世界",
    },
    ja: {
      hello: "こんにちは、世界",
    },
    ko: {
      hello: "안녕하세요, 세계",
    },
    fr: {
      hello: "bonjour le monde",
    },
    de: {
      hello: "hallo welt",
    },
    es: {
      hello: "hola mundo",
    },
    ru: {
      hello: "привет, мир",
    },
    pt: {
      hello: "olá mundo",
    },
    it: {
      hello: "ciao mondo",
    },
    ar: {
      hello: "مرحبا بالعالم",
    },
    hi: {
      hello: "नमस्ते दुनिया",
    },
  },
});

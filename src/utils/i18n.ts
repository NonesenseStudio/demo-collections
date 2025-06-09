import { createI18n } from "vue-i18n";

const currentLanguage = navigator.language;
export const i18n = createI18n({
  legacy: false,
  locale: currentLanguage,
  fallbackLocale: "en",
  messages: {
    en: {
      hello: "Hello world",
      chat: {
        language: "Language",
        modalTitle: "System Settings",
        placeholder: "Message DeepSeek",
        systemPrompt: "You are a helpful assistant.",
        messagePopover: "Message is empty",
        greeting: "Hi, I'm DeepSeek.",
        notice: "AI-generated, for reference only",
      },
    },
    zh: {
      hello: "你好，世界",
      chat: {
        language: "语言",
        modalTitle: "系统设置",
        placeholder: "给 DeepSeek 发送消息",
        systemPrompt: "你是一个有帮助的助手。",
        messagePopover: "请输入你的问题",
        greeting: "我是 DeepSeek，很高兴见到你！",
      },
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

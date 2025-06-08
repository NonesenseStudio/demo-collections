<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useChatStore } from "@/store";

const { t, locale } = useI18n();
const chatStore = useChatStore();
const onChangeLanguage = () => {
  if (locale.value === "zh") {
    locale.value = "en";
  } else {
    locale.value = "zh";
  }
  chatStore.setLanguage(locale.value as "zh" | "en");
};
onMounted(() => {
  locale.value = chatStore.language;
});
</script>

<template>
  <div class="chat">
    <h1>{{ t("hello") }}</h1>
    <a-button @click="onChangeLanguage">切换语言</a-button>
  </div>
</template>

<style scoped lang="less">
.chat {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useChatStore } from "@/store";
import {
  UserOutlined,
  DownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons-vue";
import { aiChat } from "@/services/api.ts";

const { t, locale } = useI18n();
const chatStore = useChatStore();
const open = ref<boolean>(false);
const prompt = ref<string | null>(null);
const loading = ref<boolean>(false);
const currentModel = ref<any>({
  key: "deepseek-v3-671b",
  name: "DeepSeekV3",
});

const modals = [
  {
    key: "deepseek-v3-671b",
    name: "DeepSeekV3",
  },
  {
    key: "deepseek-r1-671b",
    name: "DeepSeekR1",
  },
  {
    key: "deepseek-r1-distill-qwen",
    name: "DeepSeekR1 Qwen",
  },
  {
    key: "qwen2.5-instruct",
    name: "Qwen2.5",
  },
  {
    key: "Qwen3-32B",
    name: "Qwen3",
  },
];
const language = computed({
  get() {
    return chatStore.language;
  },
  set(val) {
    locale.value = val;
    chatStore.language = val;
  },
});
const changeModel = ({ key }: any) => {
  currentModel.value = modals.find((item) => item.key === key);
};

function parseMultiJson(jsonStr) {
  const jsonArr = [];
  let startIndex = 0;
  let endIndex = 0;

  while (startIndex < jsonStr.length) {
    // 找到一个 JSON 对象的开始位置
    startIndex = jsonStr.indexOf("{", startIndex);
    if (startIndex === -1) {
      break;
    }

    // 找到一个 JSON 对象的结束位置
    let openBrackets = 1;
    endIndex = startIndex + 1;
    while (openBrackets > 0 && endIndex < jsonStr.length) {
      if (jsonStr[endIndex] === "{") {
        openBrackets++;
      } else if (jsonStr[endIndex] === "}") {
        openBrackets--;
      }
      endIndex++;
    }

    // 将该 JSON 对象解析为一个对象，并添加到数组中
    const json = jsonStr.substring(startIndex, endIndex);
    jsonArr.push(JSON.parse(json));

    // 更新下一个 JSON 对象的开始位置
    startIndex = endIndex;
  }
  return jsonArr;
}
const sendMessage = () => {
  aiChat().then(async (res) => {
    console.log(res)
  });
};
onMounted(() => {
  locale.value = chatStore.language;
});
</script>

<template>
  <div class="chat">
    <div class="chat-avatar">
      <a-avatar
        style="background-color: #1677ff; cursor: pointer"
        @click="open = true"
      >
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <a-modal v-model:open="open" :title="t('chat.modalTitle')" :footer="null">
        <div>
          {{ t("chat.language") }}
          <a-select ref="select" v-model:value="language" style="width: 120px">
            <a-select-option value="en">English</a-select-option>
            <a-select-option value="zh">中文</a-select-option>
          </a-select>
        </div>
      </a-modal>
    </div>
    <div></div>
    <div class="chat-input">
      <a-card
        style="width: 60%; border-radius: 24px"
        :body-style="{ padding: '10px' }"
      >
        <a-textarea
          :bordered="false"
          v-model:value="prompt"
          :placeholder="t('chat.placeholder')"
          :auto-size="{ minRows: 3, maxRows: 3 }"
          style="padding: 0"
        />
        <div style="display: flex; justify-content: space-between">
          <a-space>
            <a-dropdown>
              <template #overlay>
                <a-menu @click="changeModel">
                  <a-menu-item v-for="item in modals" :key="item.key">
                    {{ item.name }}
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button style="width: 200px">
                <div
                  style="
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                  "
                >
                  <span>{{ currentModel.name }}</span>
                  <DownOutlined />
                </div>
              </a-button>
            </a-dropdown>
          </a-space>
          <a-button
            type="primary"
            shape="circle"
            size="large"
            @click="sendMessage"
          >
            <template #icon>
              <span v-if="loading">■</span>
              <ArrowUpOutlined v-else />
            </template>
          </a-button>
        </div>
      </a-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.chat {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &-avatar {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  &-input {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>

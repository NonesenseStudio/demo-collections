<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useChatStore } from "@/store";
import {
  UserOutlined,
  DownOutlined,
  ArrowUpOutlined,
  UpOutlined,
} from "@ant-design/icons-vue";
import { aiChat } from "@/services/api.ts";
import { message as Message } from "ant-design-vue";
import MarkdownIt from "markdown-it";
import ToolBar from "@/views/chat/components/tool-bar.vue";

const { t, locale } = useI18n();
const chatStore = useChatStore();
const open = ref<boolean>(false);
const prompt = ref<string | null>(null);
const conversationRef = ref();
const conversations = ref<any[]>([]);
const loading = ref<boolean>(false);
const resetting = ref<boolean>(false);
const showToBottom = ref(false);
const md = MarkdownIt({
  html: true,
});
const currentModel = ref<any>({
  key: "deepseek-r1-671b",
  name: "DeepSeekR1",
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
const systemPrompt = computed({
  get() {
    return chatStore.systemPrompt;
  },
  set(val) {
    chatStore.systemPrompt = val;
  },
});
const changeModel = ({ key }: any) => {
  currentModel.value = modals.find((item) => item.key === key);
};

function getContent(text: string) {
  const jsonArr = [];
  let startIndex = 0;
  let endIndex = 0;
  while (startIndex < text.length) {
    startIndex = text.indexOf("{", startIndex);
    if (startIndex === -1) {
      break;
    }
    let openBrackets = 1;
    endIndex = startIndex + 1;
    while (openBrackets > 0 && endIndex < text.length) {
      if (text[endIndex] === "{") {
        openBrackets++;
      } else if (text[endIndex] === "}") {
        openBrackets--;
      }
      endIndex++;
    }
    const json = text.substring(startIndex, endIndex);
    jsonArr.push(JSON.parse(json));

    startIndex = endIndex;
  }
  return jsonArr;
}

const pressEnter = (e) => {
  e.preventDefault();
  if (!prompt.value) {
    Message.info("请输入你的问题");
    return;
  }
  if (loading.value) return;
  sendMessage();
};
const sendMessage = () => {
  loading.value = true;
  if (!resetting.value) {
    conversations.value.push({
      role: "user",
      content: prompt.value,
    });
  }
  aiChat({
    model: currentModel.value.key,
    systemPrompt: systemPrompt.value,
    messages: conversations.value,
  }).then(async (response) => {
    conversations.value.push({
      role: "assistant",
      content: "",
      reasoning_content: "",
      hideReasoning: false,
      reasoning: true,
      isFinish: false,
    });
    let answer = conversations.value[conversations.value.length - 1];
    prompt.value = null;
    const decoder = new TextDecoder("utf-8");
    const reader = response.body.getReader();
    let { done, value } = await reader.read();
    while (!done) {
      const chunk = decoder.decode(value, { stream: true });
      let jsonArr = getContent(chunk);
      jsonArr.forEach((json) => {
        if (json.choices.length) {
          if (!json.choices[0].delta?.reasoning_content) {
            answer.reasoning = false;
          }
          answer.content += json.choices[0].delta?.content || "";
          answer.reasoning_content +=
            json.choices[0].delta?.reasoning_content || "";
        }
        if (
          conversationRef.value.offsetHeight -
            conversationRef.value.scrollTop <=
          conversationRef.value.scrollHeight - 50
        ) {
          toBottom();
        }
      });
      ({ done, value } = await reader.read());
      if (done) {
        answer.isFinish = true;
      }
    }
    loading.value = false;
    resetting.value = false;
  });
};
const onReset = () => {
  resetting.value = true;
  conversations.value.splice(-1);
  sendMessage();
};
const toBottom = () => {
  conversationRef.value.scrollTop =
    conversationRef.value.scrollHeight - conversationRef.value.offsetHeight;
};
const onScroll = (e: any) => {
  showToBottom.value =
    e.target.scrollTop + e.target.offsetHeight < e.target.scrollHeight - 50;
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
        <a-form autocomplete="off" layout="vertical">
          <a-form-item label="System Prompt">
            <a-textarea
              :auto-size="{ minRows: 2, maxRows: 5 }"
              v-model:value="systemPrompt"
            ></a-textarea>
          </a-form-item>
          <a-form-item :label="t('chat.language')">
            <a-select
              ref="select"
              v-model:value="language"
              style="width: 120px"
            >
              <a-select-option value="en">English</a-select-option>
              <a-select-option value="zh">中文</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
    <div class="chat-greeting" v-if="!conversations.length">
      <h1>
        {{ t("chat.greeting") }}
      </h1>
    </div>
    <div
      class="chat-conversation"
      v-else
      ref="conversationRef"
      @scroll="onScroll"
    >
      <a-space direction="vertical" style="width: 100%">
        <template v-for="item in conversations">
          <div v-if="item.role === 'user'" class="chat-conversation-user">
            <div class="chat-conversation-message">
              {{ item.content }}
            </div>
          </div>
          <div v-else class="chat-conversation-assistant">
            <a-button
              @click="item.hideReasoning = !item.hideReasoning"
              v-if="item.reasoning_content"
            >
              {{ item.resoning ? "思考中" : "已深度思考" }}
              <DownOutlined v-if="item.hideReasoning" />
              <UpOutlined v-else />
            </a-button>
            <div
              class="chat-conversation-reasoning"
              :class="{ hide: item.hideReasoning }"
              v-if="item.reasoning_content"
              v-html="md.render(item.reasoning_content)"
            ></div>
            <div
              class="chat-conversation-content"
              v-html="md.render(item.content)"
            ></div>
            <tool-bar
              v-if="item.isFinish"
              :content="item.content"
              @reset="onReset"
            />
          </div>
        </template>
      </a-space>
    </div>
    <div class="chat-input">
      <a-button
        shape="circle"
        class="to-bottom"
        @click="toBottom"
        v-if="showToBottom"
      >
        <DownOutlined />
      </a-button>
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
          @pressEnter="pressEnter"
        />
        <div style="display: flex; justify-content: space-between">
          <a-space>
            <a-dropdown trigger="click">
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
          <a-popover v-if="!prompt">
            <template #content>
              {{ t("chat.messagePopover") }}
            </template>
            <a-button shape="circle" size="large" disabled>
              <template #icon>
                <ArrowUpOutlined />
              </template>
            </a-button>
          </a-popover>
          <a-button
            type="primary"
            shape="circle"
            size="large"
            @click="sendMessage"
            :loading="loading"
            v-else
          >
            <template #icon>
              <ArrowUpOutlined />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &-avatar {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &-input {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .to-bottom {
      position: absolute;
      right: 20%;
      top: -50%;
    }
  }

  &-greeting {
  }

  &-conversation {
    flex: 1;
    width: 100%;
    padding: 10px 20%;
    overflow: auto;
    box-sizing: border-box;
    transition: all ease-out 0.5s;

    &-user {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    &-assistant {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: all ease-in 0.1s;
    }

    &-reasoning {
      margin-top: 10px;
      padding: 0 10px;
      font-size: 1rem;
      color: #888;
      border-left: 1px solid #888;

      &.hide {
        margin-top: 0;
        height: 0;
        visibility: hidden;
      }
    }

    &-content {
      padding: 10px 0 5px;
      border-radius: 10px;
      font-size: 1rem;
    }

    &-message {
      background: #cae1ff;
      padding: 10px;
      border-radius: 10px;
      font-size: 1rem;
      max-width: 70%;
    }
  }
}
</style>

<script setup lang="ts">
import {
  CopyOutlined,
  SyncOutlined,
  CheckOutlined,
} from "@ant-design/icons-vue";
import { useClipboard } from "@vueuse/core";

const props = defineProps<{
  content: string;
}>();
const emits = defineEmits(["reset"]);
const { copy, copied } = useClipboard({ copiedDuring: 3000 });
const onCopy = () => {
  if (copied.value) return;
  copy(props.content);
};
</script>

<template>
  <a-space>
    <a-button type="ghost" shape="circle" size="small" @click="onCopy">
      <CopyOutlined v-if="!copied" />
      <CheckOutlined v-else />
    </a-button>
    <a-button type="ghost" shape="circle" size="small" @click="emits('reset')">
      <SyncOutlined />
    </a-button>
  </a-space>
</template>

<style scoped lang="less"></style>

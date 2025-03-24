<template>
  <a-layout class="layout">
    <a-layout>
      <a-layout-sider
        :style="siderStyle"
        :collapsedWidth="0"
        collapsible
        theme="light"
        v-model:collapsed="collapsed"
        :zeroWidthTriggerStyle="zeroWidthTriggerStyle"
        @collapse="onCollapse"
      >
        <template #trigger>
          <LeftOutlined v-if="!collapsed" />
          <RightOutlined v-else />
        </template>
        <sider-bar></sider-bar>
      </a-layout-sider>
      <a-layout-content :style="contentStyle">
        <slot></slot>
      </a-layout-content>
    </a-layout>
    <a-layout-footer :style="footerStyle">
      <div>Designed and Developed by Myself in China ©2025</div>
      <a-button type="link" @click="showDisclaimer = true">免责声明</a-button>
      <a-modal
        v-model:open="showDisclaimer"
        width="1000px"
        title="网站免责声明"
      >
        <disclaimer v-if="showDisclaimer"></disclaimer>
        <template #footer>
          <div style="width: 100%; text-align: center">
            <a-button
              key="submit"
              type="primary"
              @click="showDisclaimer = false"
              >知道了</a-button
            >
          </div>
        </template>
      </a-modal>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
import SiderBar from "./sidebar/sidebar.vue";
import Disclaimer from "@/components/layouts/normal/disclaimer.vue";
import { type CSSProperties } from "vue";

const collapsed = ref<boolean>(false);
const showDisclaimer = ref<boolean>(false);
const siderStyle = {
  background: "#fff",
};
const contentStyle = {
  background: "#f2f3f7",
};
const zeroWidthTriggerStyle = {
  top: 0,
};
const footerStyle = ref<CSSProperties>({
  textAlign: "center",
  padding: "1px 10px",
  height: "auto",
});

const onCollapse = (collapsed: boolean) => {
  if (collapsed) {
    footerStyle.value.padding = "0";
    footerStyle.value.height = 0;
  } else {
    footerStyle.value.padding = "1px 10px";
    footerStyle.value.height = "auto";
  }
};
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ant-layout-sider {
    width: 0;
  }

  .ant-layout-content {
    padding: 0;
    overflow: auto;
  }
  .ant-layout-footer {
    transition: all 1s;
  }
}
</style>

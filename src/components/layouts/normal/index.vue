<template>
  <a-layout class="layout">
    <a-layout-sider :style="siderStyle" :collapsed="true">
      <!-- <sider-bar></sider-bar> -->
    </a-layout-sider>
    <a-layout-content :style="contentStyle"><slot></slot></a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
const siderStyle = {
  background: "#fff",
};
const contentStyle = {
  background: "#f2f3f7",
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
}
</style>

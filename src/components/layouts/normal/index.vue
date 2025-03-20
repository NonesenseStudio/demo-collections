<template>
  <a-layout class="layout">
    <a-layout-sider :style="siderStyle" :collapsed="true">
      <!--      <sider-bar></sider-bar>-->
    </a-layout-sider>
    <a-layout-content :style="contentStyle"><slot></slot></a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
// import SiderBar from './sidebar/sidebar.vue'

const siderStyle = {
  background: "#fff",
};
const contentStyle = {
  background: "#f2f3f7",
};
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

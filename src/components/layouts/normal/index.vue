<template>
  <a-layout class="wh-full">
    <a-layout-sider :style="siderStyle" :collapsed="true" :collapsedWidth="60">
      <!-- <sider-bar></sider-bar> -->
    </a-layout-sider>
    <a-layout-content :style="contentStyle"><slot></slot></a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">

const siderStyle = {
  background: '#fff',
}
const contentStyle = {
  background: '#f2f3f7',
}
</script>

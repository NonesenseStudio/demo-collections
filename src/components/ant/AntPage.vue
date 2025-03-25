<template>
  <main class="ant-page">
    <div class="ant-page-header"></div>
    <div class="ant-page-content"></div>
    <div class="ant-page-footer"></div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.ant-page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  &-header {
    height: 60px;
    background-color: #fff;
  }
  &-content {
    height: calc(100% - 120px);
    background-color: #fff;
  }
  &-footer {
    height: 60px;
    background-color: #fff;
  }
}
</style>

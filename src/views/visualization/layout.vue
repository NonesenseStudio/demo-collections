<template>
  <div class="layout">
    <div class="map">
      <a-map></a-map>
    </div>
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
    <div>
      <slot name="bottom"></slot>
    </div>
    <div>
      <slot name="top"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import AMap from "./map.vue";
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>

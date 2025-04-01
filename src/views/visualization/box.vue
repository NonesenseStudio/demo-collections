<template>
  <div
    class="c-box"
    :class="{ 'c-box-flex': height === 0, 'c-box-simple': simple }"
    :style="{ height: height === 0 ? undefined : height + 'px' }"
  >
    <div class="c-box-header">
      <div class="header-title">
        {{ title }}
        <slot name="title"></slot>
      </div>
      <div class="header-subTitle"></div>
      <div class="header-detail">
        <slot name="detail"></slot>
      </div>
    </div>
    <div class="c-box-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  height?: number;
  title: string;
  simple?: boolean;
}>();
</script>

<style lang="less" scoped>
.c-box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;

  &-flex {
    flex: 1;
  }

  &-simple {
    .c-box-header {
      background-image: none;
      padding-left: 16px;

      &:before {
        left: 0;
        width: 3px;
        content: " ";
        height: 20px;
        background-color: #01d1ff;
        position: absolute;
      }
    }

    .sz-header-title {
      color: #fafbfa;
      font-size: 28px;
      white-space: nowrap;
    }
  }

  &-header {
    height: 35px;
    background-image: url("./images/headline.png");
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: relative;

    .header-title {
      color: #eef3fa;
      font-size: 16px;
      font-family: sans-serif;
      font-weight: bold;
    }

    .header-detail {
      position: absolute;
      line-height: 40px;
      top: 0;
      bottom: 0;
      right: 80px;
    }
  }

  &-body {
    flex: 1;
    display: flex;
    height: 0;
    box-sizing: border-box;
    padding: 10px 10px 0;
  }
}
</style>

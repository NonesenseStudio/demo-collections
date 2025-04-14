<template>
  <div class="layout">
    <div class="layout-top">
      <div class="layout-top-left">
        <weather v-if="showWeather"></weather>
      </div>
      <div class="layout-top-middle" @click="router.push('/dashboard')">
        {{ map.currentArea }}统计数据
      </div>
      <div class="layout-top-right">{{ currentTime }}</div>
    </div>
    <div class="layout-left">
      <slot name="left"></slot>
    </div>
    <div class="layout-right">
      <slot name="right"></slot>
    </div>
    <div class="map">
      <a-map @init="onMapRendered"></a-map>
    </div>
  </div>
</template>

<script setup lang="ts">
import AMap from "./map.vue";
import dayjs from "dayjs";
import Weather from "./components/weather.vue";
import { useMapStore } from "@/store";

const router = useRouter();
let timer = null;
let currentTime = ref<string>(dayjs().format("YYYY-MM-DD HH:mm:ss"));
const showWeather = ref<boolean>(false);
const map = useMapStore();
onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
});
const onMapRendered = (AMap) => {
  showWeather.value = true;
};
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  justify-content: space-between;
  overflow: hidden;
  z-index: 0;

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &-top {
    width: 100%;
    height: 100px;
    background: url("./images/top.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-left {
      min-width: 200px;
      height: 100%;
    }

    &-middle {
      font-size: 40px;
      font-weight: 700;
      color: #fff;
      font-family: FangYuan, sans-serif;
      cursor: pointer;
    }

    &-right {
      min-width: 200px;
      height: 100%;
      line-height: 50px;
      font-size: 20px;
      font-family: FangYuan, sans-serif;
    }
  }

  &-left {
    width: 400px;
    height: calc(100% - 100px);
    background: url("./images/left.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 18px;
  }

  &-right {
    width: 400px;
    height: calc(100% - 100px);
    background: url("./images/right.png") no-repeat;
    background-size: 100% 100%;
    padding-top: 18px;
  }
}
</style>

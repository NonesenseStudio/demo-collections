<template>
  <div ref="aMap" id="aMap"></div>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted } from "vue";
import coordinates from "./Hangzhou.json";
import * as turf from "@turf/turf";

let map: any = null;
console.log(turf.getCoords(coordinates.features[1]));
const mask = coordinates.features.map(({ geometry }) =>
  geometry.coordinates.flat(),
);
const districts = ref([]);
onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "418b2961bdff880584afef94646b8a25",
  };
  AMapLoader.load({
    key: "3cde9638907951579c8726e5549352a8", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("aMap", {
        mask: mask,
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 9, // 初始化地图级别
        center: [119.5334515, 29.8776365], // 初始化地图中心点位置
        layers: [new AMap.TileLayer.Satellite()],
        showLabel: false,
        features: ["bg", "point"],
      });
      const geoJson = new AMap.GeoJSON();
      console.log(geoJson);
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<style scoped lang="less">
#aMap {
  width: 100%;
  height: 100%;
  background: #252b48 !important;

  :deep(.amap-logo),
  :deep(.amap-copyright) {
    opacity: 0 !important;
    visibility: hidden;
  }
}
</style>

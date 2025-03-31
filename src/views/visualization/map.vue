<template>
  <div ref="aMap" id="aMap">
    <a-button
      class="map-back"
      type="primary"
      v-if="showBackButton"
      @click="setMask"
    >
      返回上一级
    </a-button>
  </div>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted } from "vue";
import coordinates from "./components/Hangzhou.json";
import * as turf from "@turf/turf";
import { useMapStore } from "@/store";

const emits = defineEmits(["init"]);
let map: any = null;
const mapStore = useMapStore();
const showBackButton = ref<boolean>(false);
const colors = [
  "#d92626",
  "#d97926",
  "#d9cb26",
  "#94d926",
  "#42d926",
  "#26d95d",
  "#26d9b0",
  "#26b0d9",
  "#265dd9",
  "#4226d9",
  "#9426d9",
  "#d926cb",
  "#d92679",
];
const mask = coordinates.features.map(({ geometry }) =>
  geometry.coordinates.flat(),
);
const districts = ref([]);
const setMask = () => {
  map.clearMap();
  map.setMask(mask);
  map.setFitView();
  showBackButton.value = false;
  mapStore.setCurrentArea("杭州市");
};
const setPolygon = (AMap: any) => {
  districts.value = coordinates.features.map((feature, index) => {
    const polygon = new AMap.Polygon({
      path: feature.geometry.coordinates,
      fillColor: colors[index],
      strokeOpacity: 1,
      fillOpacity: 0.5,
      strokeColor: "#FFF",
      strokeWeight: 1,
      strokeStyle: "dashed",
      strokeDasharray: [5, 5],
      extData: {
        name: feature.properties.name,
      },
    });
    polygon.on("mouseover", () => {
      polygon.setOptions({
        fillOpacity: 0.7,
        fillColor: "#7bccc4",
        cursor: "pointer",
      });
    });
    polygon.on("mouseout", () => {
      polygon.setOptions({
        fillOpacity: 0.5,
        fillColor: colors[index],
        cursor: "default",
      });
    });
    polygon.on("click", (e) => {
      mapStore.setCurrentArea(feature.properties.name);
      showBackButton.value = true;
      map.setMask(...feature.geometry.coordinates);
      map.setFitView();
    });
    map.add(polygon);
    let text = new AMap.Text({
      position: new AMap.LngLat(...feature.properties.center),
      anchor: "bottom-center",
      text: feature.properties.name,
      style: { "background-color": "#e53935", color: "#fff" },
    });
    map.add(text);
    return { polygon, text };
  });
  console.log(districts.value);
};
onMounted(() => {
  // @ts-ignore
  window._AMapSecurityConfig = {
    securityJsCode: "418b2961bdff880584afef94646b8a25",
  };
  AMapLoader.load({
    key: "3cde9638907951579c8726e5549352a8", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      emits("init", AMap);
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
      setPolygon(AMap);
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
  mapStore.setAMap(null);
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
  .map-back {
    position: absolute;
    top: 120px;
    right: 500px;
    z-index: 999;
  }
}
</style>

import { defineStore } from "pinia";

export const useMapStore = defineStore("map", {
  state: () => ({
    AMap: null,
    currentArea: "杭州市",
  }),
  actions: {
    setAMap(AMap: any) {
      this.AMap = AMap;
    },
    setCurrentArea(currentArea: string) {
      this.currentArea = currentArea;
    }
  },
});

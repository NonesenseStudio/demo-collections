<template>
  <div ref="chart" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const chart = ref(null);
onMounted(() => {
  const myChart = echarts.init(chart.value);
  myChart.setOption({
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `<div style="border-radius: 50%;width: 10px;height: 10px;background: ${params.color};display: inline-block"></div>
        <span>${params.name}: ${params.value}万人</span>
`;
      },
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLabel: { rotate: 45, interval: 0 },
      data: [2020, 2021, 2022, 2023, 2024],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "",
        type: "bar",
        data: [1036, 1196, 1220.4, 1237.6, 1252.2],
      },
    ],
  });
});
</script>

<style scoped lang="less"></style>

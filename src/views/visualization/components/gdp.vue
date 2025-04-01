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
        <span>${params.name}: ${params.value}亿元</span>
`;
      },
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLabel: { rotate: 45, interval: 0 },
      data: [2019, 2020, 2021, 2022, 2023],
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
        data: [15418.8, 16206.82, 18247.33, 18955.32, 20058.98],
      },
    ],
  });
});
</script>

<style scoped lang="less"></style>

<template>
  <div ref="chart" style="width: 100%; height: 33%"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const chart = ref(null);
onMounted(() => {
  const myChart = echarts.init(chart.value);
  myChart.setOption({
    title: {
      text: "居民人均收支主要指标",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `<div style="border-radius: 50%;width: 10px;height: 10px;background: ${params.color};display: inline-block"></div>
        <span>${params.name}: ${params.value}元</span>
`;
      },
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "50%",
        data: [
          { value: 44851, name: "工资性收入" },
          { value: 7972, name: "经营净收入" },
          { value: 10307, name: "财产净收入" },
          { value: 13646, name: "转移净收入" },
        ],
        label: {
          formatter: "{b}: {d}%",
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
});
</script>

<style scoped lang="less"></style>

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
      text: "农林牧渔业分项产值",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `<div style="border-radius: 50%;width: 10px;height: 10px;background: ${params.color};display: inline-block"></div>
        <span>${params.name}: ${params.value}万元</span>
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
        radius: "50% ",
        data: [
          { value: 3355910, name: "农业产值" },
          { value: 628037, name: "林业产值" },
          { value: 559823, name: "畜牧业产值" },
          { value: 524887, name: "渔业产值" },
          { value: 262525, name: "农、林、牧、渔专业及辅助性活动" },
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

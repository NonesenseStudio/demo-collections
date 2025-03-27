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
      text: "性别构成",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `<div style="border-radius: 50%;width: 10px;height: 10px;background: ${params.color};display: inline-block"></div>
        <span>${params.name}: ${params.value}万人</span>
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
          { value: 657.3, name: "男性" },
          { value: 605.1, name: "女性" },
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

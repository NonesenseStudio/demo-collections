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
      text: "民用机动车辆拥有量",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `<div style="border-radius: 50%;width: 10px;height: 10px;background: ${params.color};display: inline-block"></div>
        <span>${params.name}: ${params.value}辆</span>
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
          { value: 4091868, name: "汽车" },
          { value: 291917, name: "摩托车" },
          { value: 36460, name: "挂车" },
          { value: 46, name: "其他类型" },
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

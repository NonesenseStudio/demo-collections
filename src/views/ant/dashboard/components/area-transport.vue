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
      text: "区、县（市）交通运输情况",
      left: "center",
    },
    grid: {
      top: "25%",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      left: 0,
      orient: "vertical",
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLabel: { rotate: 45, interval: 0 },
      data: [
        "萧山区",
        "余杭区",
        "临平区",
        "钱塘区",
        "富阳区",
        "临安区",
        "桐庐县",
        "淳安县",
        "建德市",
      ],
    },
    yAxis: [
      {
        name: "万人",
        type: "value",
        splitLine: {
          show: false,
        },
      },
      {
        name: "万吨",
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "客运量(万人)",
        type: "bar",
        data: [5382, 2242, 113, 27, 0, 67, 96, 415, 386, 707],
      },
      {
        name: "货运量(万吨)",
        type: "bar",
        yAxisIndex: 1,
        data: [29263, 5074, 565, 737, 2866, 1419, 873, 12917, 351, 1683],
        label: {},
      },
    ],
  });
});
</script>

<style scoped lang="less"></style>

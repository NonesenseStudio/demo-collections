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
      text: "区、县（市）生产总值",
      left: "center",
    },
    grid: {
      left: 80,
    },
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `<div style="border-radius: 50%;width: 10px;height: 10px;background: ${params.color};display: inline-block"></div>
        <span>${params.name}: ${params.value}万元</span>
`;
      },
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: false,
      },
      axisLabel: { rotate: 45, interval: 0 },
      data: [
        "上城区",
        "拱墅区",
        "西湖区",
        "滨江区",
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
        data: [
          26684817, 20914822, 20873832, 24679178, 22306890, 29364314, 10672669,
          12703919, 9608783, 6864526, 479731, 2804936, 4501056,
        ],
      },
    ],
  });
});
</script>

<style scoped lang="less"></style>

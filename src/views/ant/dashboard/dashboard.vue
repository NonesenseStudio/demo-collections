<template>
  <div class="ant-dashboard">
    <a-row>
      <a-col :span="12" v-for="item in totalData" :key="item.name">
        <a-card>
          <div class="ant-dashboard-total">
            <div class="total-icon">
              <component :is="item.icon" style="width: 40px; height: 40px" />
            </div>
            <div class="total-name">{{ item.name }}</div>
            <div class="total-value">{{ item.value }}</div>
            <div class="total-unit">{{ item.unit }}</div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import IAntEconomy from "~icons/ant/economy";
import IAntPopulation from "~icons/ant/Population";

const totalData = [
  {
    name: "地区生产总值",
    value: 21860,
    unit: "亿元",
    icon: IAntEconomy,
  },
  {
    name: "全市常住人口",
    value: 1264.2,
    unit: "万人",
    icon: IAntPopulation,
  },
  {
    name: "税收收入",
    value: 21860,
    unit: "亿元",
    icon: "tax",
  },
  {
    name: "一般公共预算收入",
    value: 21860,
    unit: "亿元",
    icon: "budget",
  },
];
</script>

<style scoped lang="less">
.ant-dashboard {
  padding: 16px;
  width: 100%;
  height: 100%;
  &-total {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .total-name {
      font-size: 16px;
      color: #333;
    }
    .total-value {
      font-size: 24px;
      color: #1890ff;
      font-weight: bold;
    }
    .total-unit {
      font-size: 12px;
      color: #999;
    }
  }
  .ant-row {
    height: 100%;
  }

  .ant-col {
    box-sizing: border-box;
  }
}
</style>

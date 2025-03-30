<template>
  <div class="ant-dashboard">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card :bodyStyle="cardBodyStyle">
          <div style="display: flex; justify-content: space-evenly">
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntEconomy style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">地区生产总值</div>
                <div class="total-value">21860</div>
                <div class="total-unit">亿元</div>
              </div>
            </div>
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntIncome style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">人均可支配收入</div>
                <div class="total-value">76777</div>
                <div class="total-unit">元</div>
              </div>
            </div>
          </div>
          <div class="ant-dashboard-charts">
            <area-gdp></area-gdp>
            <agricultural-output />
            <resident-income />
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bodyStyle="cardBodyStyle">
          <div style="display: flex; justify-content: space-evenly">
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntPopulation style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">全市常住人口</div>
                <div class="total-value">1264.2</div>
                <div class="total-unit">万人</div>
              </div>
            </div>
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntBirth style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">出生率</div>
                <div class="total-value">7.5</div>
                <div class="total-unit">‰</div>
              </div>
            </div>
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntDeath style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">死亡率</div>
                <div class="total-value">5.2</div>
                <div class="total-unit">‰</div>
              </div>
            </div>
          </div>
          <div class="ant-dashboard-charts">
            <urban-rural></urban-rural>
            <gender-composition></gender-composition>
            <age-composition></age-composition>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :bodyStyle="cardBodyStyle">
          <div style="display: flex; justify-content: space-evenly">
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntPassenger style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">全年客运量</div>
                <div class="total-value">1.8</div>
                <div class="total-unit">亿人次</div>
              </div>
            </div>
            <div class="ant-dashboard-total">
              <div class="total-icon">
                <IAntFreight style="width: 60px; height: 60px" />
              </div>
              <div class="total-item">
                <div class="total-name">全年货运量</div>
                <div class="total-value">4.4</div>
                <div class="total-unit">亿吨</div>
              </div>
            </div>
          </div>
          <div class="ant-dashboard-charts">
            <area-transport></area-transport>
            <vehicle-ownership />
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import UrbanRural from "./components/urban-rural.vue";
import GenderComposition from "@/views/ant/dashboard/components/gender-composition.vue";
import AgeComposition from "@/views/ant/dashboard/components/age-composition.vue";
import { CSSProperties } from "vue";
import AreaGdp from "@/views/ant/dashboard/components/area-gdp.vue";
import AreaTransport from "@/views/ant/dashboard/components/area-transport.vue";
import AgriculturalOutput from "@/views/ant/dashboard/components/agricultural-output.vue";
import VehicleOwnership from "@/views/ant/dashboard/components/vehicle-ownership.vue";
import ResidentIncome from "@/views/ant/dashboard/components/resident-income.vue";

const cardBodyStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  "flex-direction": "column",
};
</script>

<style scoped lang="less">
.ant-dashboard {
  padding: 16px;
  width: 100%;
  height: 100%;

  .ant-card {
    height: 100%;
  }

  &-total {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    .total-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .total-name {
        font-size: 14px;
        color: #333;
      }

      .total-value {
        font-size: 24px;
        color: #1890ff;
        font-weight: bold;
        font-family: FangYuan, sans-serif;
      }

      .total-unit {
        font-size: 12px;
        color: #999;
      }
    }
  }

  &-charts {
    height: 100%;
  }

  .ant-row {
    height: 100%;
  }

  .ant-col {
    box-sizing: border-box;
  }
}
</style>

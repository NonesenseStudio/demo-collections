<template>
  <layout>
    <template #left>
      <box title="近五年常住人口" :height="300">
        <resident-population />
      </box>
      <box title="近五年全市生产总值" :height="300">
        <gdp />
      </box>
    </template>
  </layout>
</template>

<script setup lang="ts">
import layout from "./layout.vue";
import box from "./box.vue";
import ResidentPopulation from "@/views/visualization/components/resident-population.vue";
import Gdp from "@/views/visualization/components/gdp.vue";
</script>

<style scoped lang="less"></style>

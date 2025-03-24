<template>
  <router-view v-if="Layout" v-slot="{ Component, route: curRoute }">
    <component :is="Layout">
      <KeepAlive :include="[]">
        <component :is="Component" :key="curRoute.fullPath"></component>
      </KeepAlive>
    </component>
  </router-view>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, markRaw } from "vue";
import { useRoute } from "vue-router";

const layouts = new Map();

function getLayout(name: string) {
  if (layouts.get(name)) return layouts.get(name);
  const layout = markRaw(
    defineAsyncComponent(
      () => import(`@/components/layouts/${name}/index.vue`),
    ),
  );
  layouts.set(name, layout);
  return layout;
}

const route = useRoute();

const Layout = computed(() => {
  if (!route.matched?.length) return null;
  return getLayout(route.meta?.childrenLayout as string);
});
</script>

<style scoped lang="less"></style>

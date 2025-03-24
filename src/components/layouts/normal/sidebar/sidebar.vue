<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
    :items="menuItems"
    @click="onMenuClick"
  >
  </a-menu>
</template>
<script setup lang="ts">
import { MessageOutlined, HistoryOutlined } from "@ant-design/icons-vue";
import { routes } from "@/router/index.ts";
import { computed } from "vue";
import { type RouteRecordRaw } from "vue-router";

const selectedKeys = ref(["Home"]);
const route = useRoute();
const router = useRouter();
const menuItems = computed(() => {
  return routes.map((item: RouteRecordRaw) => {
    return {
      key: item.name,
      icon: item.meta.icon || "",
      label: item.meta.title,
      path: item.path,
    };
  });
});
const onMenuClick = (r: any) => {
  router.push({ name: r.key });
};
onMounted(() => {
  selectedKeys.value = [route.matched[0].name];
});
</script>

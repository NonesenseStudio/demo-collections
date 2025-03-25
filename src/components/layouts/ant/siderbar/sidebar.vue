<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
    :items="menuItems"
    @click="onMenuClick"
  >
  </a-menu>
</template>

<script setup lang="ts">
import { ant } from "@/router/ant";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const menuItems = computed(() => {
  return ant.map((item: any) => {
    return {
      key: item.name,
      icon: () => item.meta.icon,
      label: item.meta.title,
      children: item.children?.map((child: any) => {
        return {
          key: child.name,
          label: child.meta.title,
        };
      }),
    };
  });
});
const selectedKeys = ref([route.name as string]);

const onMenuClick = ({ key }) => {
  router.push({ name: key });
};
</script>

<style scoped lang="less">
.ant-menu {
  height: 100%;
  color: #fff;
}
</style>

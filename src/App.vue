<template>
  <a-config-provider class="configProvider" :locale="zhCN" :theme="theme">
    <router-view v-if="Layout" v-slot="{ Component, route: curRoute }">
      <component :is="Layout">
        <KeepAlive :include="[]">
          <component
            :is="Component"
            :key="
              route.matched?.length
                ? curRoute.matched[0]?.path
                : curRoute.fullPath
            "
          ></component>
        </KeepAlive>
      </component>
    </router-view>
  </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { computed, defineAsyncComponent, markRaw } from "vue";
import { useRoute } from "vue-router";

dayjs.locale("zh-cn");

const layouts = new Map();

const theme = {
  token: {
    fontFamily: `"Source Han Sans", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif`,
  },
};
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
  return getLayout(route.meta?.layout as string);
});
</script>

<style scoped lang="less">
.configProvider {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

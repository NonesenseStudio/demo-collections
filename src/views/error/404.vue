<template>
  <a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在！">
    <template #extra>
      <a-button type="primary" @click="backHome">回到首页</a-button>
    </template>
  </a-result>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const backHome = () => {
  router.push({ path: route.matched[0].path || "/" });
};
</script>

<style scoped lang="less"></style>

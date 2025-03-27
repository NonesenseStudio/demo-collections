<script setup lang="ts">
const router = useRouter();
const onClick = () => {
  router.push("/ant");
};
</script>

<template>
  <div class="overview">
    <p>Welcome, This is Underworld</p>
    <a-button @click="onClick">前往</a-button>
  </div>
</template>

<style scoped lang="less">
.overview {
  text-align: center;
  margin: 0 auto;
  font-size: 30px;
  font-weight: 700;
}
</style>

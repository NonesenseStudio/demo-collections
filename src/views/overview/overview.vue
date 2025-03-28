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

  p {
    font-size: 50px;
    font-family: Nabla, "Source Han Sans", sans-serif;
    animation:
      palette 1.5s ease-in-out alternate infinite,
      depthuncharge 3s ease-in-out alternate infinite !important;
  }

  @keyframes depthuncharge {
    0% {
      font-variation-settings: "EDPT" 200;
    }
    100% {
      font-variation-settings: "EDPT" 0;
    }
  }
  @keyframes palette {
    0% {
      font-palette: normal;
    }
    100% {
      font-palette: --red;
    }
  }
}
</style>

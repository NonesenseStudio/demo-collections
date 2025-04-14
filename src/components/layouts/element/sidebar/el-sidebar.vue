<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    text-color="#fff"
    router
  >
    <div class="headline" @click="router.push('/overview')">杭州市统计数据</div>
    <template v-for="route in element">
      <el-sub-menu :index="`/${route.path}`" v-if="route.children">
        <template #title>
          <el-icon>
            <component :is="route.meta.icon"></component>
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item
          :index="`/${route.path}/${child.path}`"
          v-for="child in route.children"
        >
          {{ child.meta.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="`/${route.path}`" v-else>
        <el-icon>
          <component :is="route.meta.icon"></component>
        </el-icon>
        <span>{{ route.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup lang="ts">
import { element } from "@/router/element";

const route = useRoute();
const router = useRouter();
</script>

<style scoped lang="less">
.el-menu-vertical {
  height: 100%;
  border-right: none;

  .headline {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>

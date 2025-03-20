<template>
  <div class="py-20 wh-full flex-col items-center">
    <div class="h-30 w-auto text-center rounded-4 cursor-pointer">
      <img src="@/assets/ff-logo.png" class="h-30 w-30" alt="" />
    </div>
    <a-space direction="vertical" class="w-full mt-30" size="large">
      <a-tooltip :title="item.meta.title" placement="right" v-for="item in siderRoutes">
        <router-link
          :to="item.path"
          class="w-full text-center cursor-pointer rounded-3xl py-15 block"
          hover="bg-#e6f4ff text-#1677ff"
          :class="item.name === route.name ? 'bg-#e6f4ff text-#1677ff' : 'text-inherit'"
        >
          <component :is="item.meta.icon" :style="{ fontSize: '24px' }" />
        </router-link>
      </a-tooltip>
    </a-space>
    <div class="flex-1"></div>
  </div>
</template>
<script setup lang="ts">
import { MessageOutlined, HistoryOutlined } from '@ant-design/icons-vue'
import { siderRoutes } from '@/router/sider-bar.ts'

const route = useRoute()
</script>

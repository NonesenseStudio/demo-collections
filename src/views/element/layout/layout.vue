<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.el-container {
  height: 100%;
}
</style>

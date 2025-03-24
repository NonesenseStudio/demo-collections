<template>
  <a-layout class="login-container">
    <a-layout-content class="login-content">
      <a-card class="login-card">
        <h2>登录</h2>
        <a-form :form="form" layout="vertical" @submit.prevent="handleSubmit">
          <a-form-item
            label="用户名"
            :rules="[{ required: true, message: '请输入用户名!' }]"
          >
            <a-input v-model="username" placeholder="请输入用户名" />
          </a-form-item>
          <a-form-item
            label="密码"
            :rules="[{ required: true, message: '请输入密码!' }]"
          >
            <a-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" htmlType="submit" block> 登录 </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { ref } from "vue";

const form = ref(null);
const username = ref("");
const password = ref("");

const handleSubmit = () => {
  // 在这里处理登录逻辑
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-content {
  max-width: 400px;
  width: 100%;
}

.login-card {
  padding: 24px;
}
</style>

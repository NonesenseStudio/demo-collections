<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2>Login</h2>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

const loginForm = ref({
  username: "",
  password: "",
});

const rules = ref({
  username: [
    { required: true, message: "Please input your username", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input your password", trigger: "blur" },
  ],
});

const handleLogin = () => {
  // Perform login logic here
  // For example, you can send a request to your backend API
  // and handle the response accordingly

  // For now, we'll just show a success message
  ElMessage.success("Logged in successfully");
};
</script>

<style scoped lang="less">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
}

.login-card {
  width: 400px;
  padding: 20px;
}
</style>

<template>
  <div class="login-page">
    <el-card class="login-card">
      <h2>账号登录</h2>
      <el-form
        ref="formEl"
        style="max-width: 600px"
        :model="loginForm"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            autocomplete="off"
            placeholder="用户名"
            size="large"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            autocomplete="off"
            placeholder="密码"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleLogin"
            style="width: 100%"
            size="large"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage as Message } from "element-plus";
import { useElementStore } from "@/store/useElementStore.ts";

const router = useRouter();
const element = useElementStore();
const formEl = ref();
const loginForm = ref({
  username: "admin",
  password: "12345",
});

const rules = ref({
  username: [{ required: true, message: "请输入用户名！", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码！", trigger: "blur" }],
});

const handleLogin = () => {
  if (!formEl.value) return;
  formEl.value.validate((valid: any) => {
    if (valid) {
      element.setLogin(true);
      router.push("dashboard");
    } else {
      Message.error("请输入用户名和密码！");
    }
  });
};
</script>

<style scoped lang="less">
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f5f7fa;
}

.login-card {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
}
</style>

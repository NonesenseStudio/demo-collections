<template>
  <div class="login-container">
    <a-card class="login-card" hoverable>
      <h2>登录</h2>
      <a-form :model="form" layout="vertical" @finish="onFinish" ref="formRef">
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '请输入用户名！' }]"
        >
          <a-input v-model:value="form.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '请输入密码！' }]"
        >
          <a-input-password v-model:value="form.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" htmlType="submit" block size="large">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useAntStore } from "@/store";

const form = ref({
  username: "admin",
  password: "123456",
});
const formRef = ref();
const router = useRouter();
const ant = useAntStore();
const onFinish = () => {
  router.push("dashboard");
  ant.setLogin(true);
};
</script>

<style scoped lang="less">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}

.login-content {
  max-width: 400px;
  width: 100%;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 24px;
}
</style>

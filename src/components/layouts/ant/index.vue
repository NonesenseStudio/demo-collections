<template>
  <a-layout>
    <a-layout-header>
      <div>杭州市统计数据</div>
      <a-dropdown>
        <a-avatar :size="64">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="logout">
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        :style="siderStyle"
        v-model:collapsed="collapsed"
        collapsible
        width="230"
      >
        <sider-bar></sider-bar>
      </a-layout-sider>
      <a-layout-content :style="contentStyle">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { createVNode, type CSSProperties } from "vue";
import { ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons-vue";
import { Modal, message as Message } from "ant-design-vue";
import { useAntStore } from "@/store";
import SiderBar from "@/components/layouts/ant/siderbar/sidebar.vue";

const ant = useAntStore();
const router = useRouter();
const collapsed = ref<boolean>(false);
const contentStyle: CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#f5f5f5",
};

const siderStyle: CSSProperties = {
  lineHeight: "120px",
  color: "#fff",
};

const handleMenuClick = ({ key }: any) => {
  if (key === "logout") {
    Modal.confirm({
      title: "提示",
      icon: createVNode(ExclamationCircleOutlined),
      content: createVNode(
        "div",
        { style: "color:red;" },
        "确定要退出登录吗？",
      ),
      onOk() {
        ant.logout();
        Message.success("退出成功");
        router.push("login");
      },
    });
  }
};
</script>

<style scoped lang="less">
.ant-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ant-layout-header {
    display: flex;
    justify-content: space-between;
    height: 64px;
    line-height: 64px;
    padding-inline: 50px;
    color: #fff;
  }

  ::v-deep .ant-layout-sider-trigger {
    position: unset;
  }
}
</style>

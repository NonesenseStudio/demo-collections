<template>
  <el-container>
    <el-aside width="250px">
      <el-sidebar></el-sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <el-dropdown @command="handleCommand">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-icon>
                  <SwitchButton />
                </el-icon>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import ElSidebar from "@/components/layouts/element/sidebar/el-sidebar.vue";
import { SwitchButton } from "@element-plus/icons-vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useElementStore } from "@/store/useElementStore";
import 'element-plus/dist/index.css'

const element = useElementStore();
const router = useRouter();
const handleCommand = () => {
  ElMessageBox.confirm("确定退出登录吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "登出成功！",
      });
      element.logout();
      router.push("/login");
    })
    .catch(() => {});
};
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  overflow: hidden;

  .el-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
    background: #fff;

    .el-avatar {
      cursor: pointer;
    }
  }
}
</style>

import { type RouteRecordRaw } from "vue-router";
import { HomeFilled } from "@element-plus/icons-vue";

export const element: RouteRecordRaw[] = [
  {
    path: "dashboard",
    name: "ElementDashboard",
    component: () => import("@/views/element/dashboard/dashboard.vue"),
    meta: {
      title: "系统首页",
      icon: HomeFilled,
      childrenLayout: "element",
    },
  },
];

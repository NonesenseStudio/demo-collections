import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useElementStore, useAntStore } from "@/store";
import { App } from "vue";
import { element } from "./element";
import { ant } from "./ant";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/overview/overview.vue"),
    meta: {
      title: "◀返回首页",
      layout: "empty",
    },
  },
  {
    path: "/ant",
    name: "Ant",
    redirect: "/ant/dashboard",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "Ant Design Vue",
      layout: "normal",
    },
    children: [
      {
        path: "",
        name: "AntHome",
        component: () => import("@/views/ant/dashboard/dashboard.vue"),
        meta: {
          title: "",
          childrenLayout: "ant",
        },
        children: [
          {
            path: "404",
            name: "Ant404",
            component: () => import("@/views/error/404.vue"),
            meta: {
              title: "404",
              layout: "ant",
            },
          },
        ],
      },
      {
        path: "login",
        name: "AntLogin",
        component: () => import("@/views/ant/login/login.vue"),
        meta: {
          title: "",
          childrenLayout: "empty",
        },
      },
      ...ant,
    ],
  },
  {
    path: "/element",
    name: "Element",
    redirect: "/element/dashboard",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "Element Plus",
      layout: "normal",
    },
    children: [
      {
        path: "",
        name: "ElementHome",
        component: () => import("@/views/element/dashboard/dashboard.vue"),
        meta: {
          title: "",
          childrenLayout: "element",
        },
      },
      {
        path: "login",
        name: "ElementLogin",
        component: () => import("@/views/element/login/login.vue"),
        meta: {
          title: "",
          childrenLayout: "empty",
          show: false,
        },
      },
      {
        path: "404",
        name: "Element404",
        component: () => import("@/views/error/404.vue"),
        meta: {
          title: "404",
          childrenLayout: "element",
        },
      },
      ...element,
    ],
  },
  {
    path: "/visualization",
    name: "Visualization",
    component: () => import("@/views/visualization/index.vue"),
    meta: {
      title: "可视化大屏",
      layout: "normal",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});
export async function setupRouter(app: App): Promise<void> {
  app.use(router);
  router.beforeEach((to) => {
    const element = useElementStore();
    const ant = useAntStore();
    if (!to.name) {
      return { path: "404" };
    }
    if (
      !element.isLogin &&
      to.path.startsWith("/element") &&
      to.path !== "/element/login"
    ) {
      return { path: "/element/login" };
    }
    if (
      !ant.isLogin &&
      to.path.startsWith("/ant") &&
      to.path !== "/ant/login"
    ) {
      return { path: "/ant/login" };
    }
  });
}

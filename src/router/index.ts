import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useElementStore } from "@/store/useElementStore.ts";
import { App } from "vue";
import { element } from "./element";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index/index.vue"),
    meta: {
      title: "总览",
      layout: "empty",
    },
  },
  {
    path: "/ant",
    name: "Ant",
    component: () => import("@/views/ant/index.vue"),
    meta: {
      title: "Ant Design Vue",
      layout: "normal",
    },
    children: [
      // {
      //   path: "",
      //   name: "AntHome",
      //   component: () => import("@/views/ant/dashboard/dashboard.vue"),
      // },
      {
        path: "login",
        name: "AntLogin",
        component: () => import("@/views/ant/login/login.vue"),
        meta: {
          title: "",
          childrenLayout: "empty",
        },
      },
    ],
  },
  {
    path: "/element",
    name: "Element",
    component: () => import("@/views/element/index.vue"),
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
        },
      },
      ...element,
    ],
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
    if (
      !element.isLogin &&
      to.path.startsWith("/element") &&
      to.path !== "/element/login"
    ) {
      return { path: "/element/login" };
    }
  });
}

import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useElementStore } from "@/store/useElementStore.ts";
import { App } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index/index.vue"),
    meta: {
      title: "",
      layout: "empty",
    },
  },
  {
    path: "/element",
    name: "Element",
    component: () => import("@/views/element/layout/layout.vue"),
    meta: {
      title: "",
      layout: "normal",
    },
    children: [
      {
        path: "",
        name: "ElementHome",
        component: () => import("@/views/element/index.vue"),
        meta: {
          title: "",
        },
      },
      {
        path: "login",
        name: "ElementLogin",
        component: () => import("@/views/element/login/login.vue"),
      },
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
    if (!element.isLogin && to.path === "/element") {
      return {
        path: "/element/login",
      };
    }
  });
}

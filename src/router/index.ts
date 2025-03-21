import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[]= [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index/index.vue"),
    meta: {
      title: "",
      layout: "empty",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});

export default router;

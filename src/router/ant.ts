import { type RouteRecordRaw } from "vue-router";
import { HomeOutlined, UserOutlined } from "@ant-design/icons-vue";
export const ant: RouteRecordRaw[] = [
  {
    path: "dashboard",
    name: "AntDashboard",
    component: () => import("@/views/ant/dashboard/dashboard.vue"),
    meta: {
      title: "总览",
      icon: h(HomeOutlined),
      childrenLayout: "ant",
    },
  },
  {
    path: "population",
    name: "AntPopulation",
    meta: {
      title: "人口",
      icon: h(UserOutlined),
      childrenLayout: "ant",
    },
    children: [
      {
        path: "census",
        name: "AntPopulationCensus",
        component: () => import("@/views/ant/population/census/census.vue"),
        meta: {
          title: "历年普查常住人口情况",
          childrenLayout: "ant",
        },
      },
    ],
  },
];

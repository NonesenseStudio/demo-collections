import { type RouteRecordRaw } from "vue-router";
import {
  HomeOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons-vue";
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
    path: "economy",
    name: "AntEconomy",
    meta: {
      title: "经济",
      icon: h(DollarOutlined),
      childrenLayout: "ant",
    },
    children:[
      {
        path: "gdp",
        name: "AntEconomyGdp",
        component: () => import("@/views/ant/economy/gdp.vue"),
        meta: {
          title: "地区生产总值",
          childrenLayout: "ant",
        }
      }
    ]
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
        component: () => import("@/views/ant/population/census.vue"),
        meta: {
          title: "历年普查常住人口情况",
          childrenLayout: "ant",
        },
      },
    ],
  },
];

import { type RouteRecordRaw } from "vue-router";
import {
  HomeOutlined,
  UserOutlined,
  DollarOutlined,
  CarOutlined,
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
    children: [
      {
        path: "gdp",
        name: "AntEconomyGdp",
        component: () => import("@/views/ant/economy/gdp.vue"),
        meta: {
          title: "历年地区生产总值",
          childrenLayout: "ant",
        },
      },
    ],
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
  {
    path: "transport",
    name: "AntTransport",
    meta: {
      title: "交通",
      icon: h(CarOutlined),
      childrenLayout: "ant",
    },
    children: [
      {
        path: "passenger",
        name: "AntTransportPassenger",
        component: () => import("@/views/ant/transport/passenger.vue"),
        meta: {
          title: "历年旅客运输量情况",
          childrenLayout: "ant",
        },
      },
      {
        path: "freight",
        name: "AntTransportFreight",
        component: () => import("@/views/ant/transport/freight.vue"),
        meta: {
          title: "历年货物运输量情况",
          childrenLayout: "ant",
        },
      },
    ],
  },
];

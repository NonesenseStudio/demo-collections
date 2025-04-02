import { type RouteRecordRaw } from "vue-router";
import { HomeFilled, Money, User, Van } from "@element-plus/icons-vue";

export const element: RouteRecordRaw[] = [
  {
    path: "dashboard",
    name: "ElementDashboard",
    component: () => import("@/views/element/dashboard/dashboard.vue"),
    meta: {
      title: "系统首页",
      icon: h(HomeFilled),
      childrenLayout: "element",
    },
  },
  {
    path: "economy",
    name: "ElementEconomy",
    meta: {
      title: "经济",
      icon: h(Money),
      childrenLayout: "element",
    },
    children: [
      {
        path: "gdp",
        name: "ElementEconomyGdp",
        component: () => import("@/views/ant/economy/gdp.vue"),
        meta: {
          title: "历年地区生产总值",
          childrenLayout: "element",
        },
      },
    ],
  },
  {
    path: "population",
    name: "ElementPopulation",
    meta: {
      title: "人口",
      icon: h(User),
      childrenLayout: "element",
    },
    children: [
      {
        path: "census",
        name: "ElementPopulationCensus",
        component: () => import("@/views/ant/population/census.vue"),
        meta: {
          title: "历年普查常住人口情况",
          childrenLayout: "element",
        },
      },
    ],
  },
  {
    path: "transport",
    name: "ElementTransport",
    meta: {
      title: "交通",
      icon: h(Van),
      childrenLayout: "element",
    },
    children: [
      {
        path: "passenger",
        name: "ElementTransportPassenger",
        component: () => import("@/views/ant/transport/passenger.vue"),
        meta: {
          title: "历年旅客运输量",
          childrenLayout: "element",
        },
      },
      {
        path: "freight",
        name: "ElementTransportFreight",
        component: () => import("@/views/ant/transport/freight.vue"),
        meta: {
          title: "历年货物运输量",
          childrenLayout: "element",
        },
      },
    ],
  },
];

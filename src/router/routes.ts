import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../pages/Shop.vue"),
    meta: { layout: "default" },
  }, 
    {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
    meta: { layout: "admin" },
  },
      {
    path: "/product/:slug",
    name: "ProductDetails",
    component: () => import("../pages/ProductDetail.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

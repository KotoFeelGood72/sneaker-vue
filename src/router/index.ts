import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeScreen.vue"),
      meta: {
        layout: "default",
      },
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopScreen.vue"),
      meta: {
        layout: "default",
        title: "Магазин",
      },
    },
  ],
});

export default router;

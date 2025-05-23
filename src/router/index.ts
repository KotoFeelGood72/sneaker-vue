import { createRouter, createWebHistory } from "vue-router";
import { ContentRouter } from "./ContentPagesRouter/content_router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ContentRouter.options.routes,
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
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/LikeScreen.vue"),
      meta: {
        layout: "default",
        title: "Избранные",
      },
    },
  ],
});

export default router;

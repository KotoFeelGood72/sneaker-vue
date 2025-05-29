import { createRouter, createWebHistory } from "vue-router";
import { ContentRouter } from "./ContentPagesRouter/content_router";
import { PrivacyRouter } from "./PrivacyRouter/privacy_router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ContentRouter.options.routes,
    ...PrivacyRouter.options.routes,
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
      meta: {
        layout: "default",
        title: "Магазин",
      },
      children: [
        {
          path: "",
          name: "shop-main",
          component: () => import("../views/Shop/ShopScreen.vue"),
          meta: {
            layout: "default",
            title: "Магазин",
          },
        },
        {
          path: "cart",
          name: "shop-cart",
          component: () => import("../views/Shop/ShopCart.vue"),
          meta: {
            layout: "default",
            title: "Корзина",
          },
        },
        {
          path: ":category",
          children: [
            {
              path: "",
              name: "shop-category",
              component: () => import("../views/Shop/ShopCategories.vue"),
              meta: {
                layout: "default",
                title: "Магазин",
              },
            },
            {
              path: ":product",
              name: "shop-product",
              component: () => import("../views/Shop/ShopProduct.vue"),
              meta: {
                layout: "default",
                title: "Товар",
              },
            },
          ],
        },
      ],
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

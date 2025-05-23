import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/payments",
    name: "payments",
    component: () => import("../../views/ContentPages/PaymentScreen.vue"),
    meta: {
      layout: "default",
      title: "Оплата и доставка",
    },
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../../views/ContentPages/FaqScreen.vue"),
    meta: {
      layout: "default",
      title: "Вопрос-ответ",
    },
  },
];

export const ContentRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});

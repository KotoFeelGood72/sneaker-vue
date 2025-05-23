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
  {
    path: "/sizes",
    name: "sizes",
    component: () => import("../../views/ContentPages/SizeScreen.vue"),
    meta: {
      layout: "default",
      title: "Как выбрать размер",
    },
  },
  {
    path: "/guarantee",
    name: "guarantee",
    component: () => import("../../views/ContentPages/GuaranteeScreen.vue"),
    meta: {
      layout: "default",
      title: "Гарантия оригинальности",
    },
  },
  {
    path: "/application",
    name: "application",
    component: () => import("../../views/ContentPages/ApplicationScreen.vue"),
    meta: {
      layout: "default",
      title: "Приложение",
    },
  },
];

export const ContentRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});

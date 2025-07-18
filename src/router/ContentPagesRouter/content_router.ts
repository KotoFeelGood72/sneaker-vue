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
    path: "/reviews",
    name: "reviews",
    component: () => import("../../views/ContentPages/ReviewsView.vue"),
    meta: {
      layout: "default",
      title: "Отзывы от покупателей sneakerteam.ru",
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
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../../views/ContentPages/ContactsScreen.vue"),
    meta: {
      layout: "default",
      title: "Контакты",
    },
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../../views/News/NewsView.vue"),
    meta: {
      layout: "default",
      title: "Блог",
    },
    children: [
      {
        path: "",
        name: "news-main",
        component: () => import("../../views/News/NewsScreen.vue"),
      },
    ],
  },
];

export const ContentRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});

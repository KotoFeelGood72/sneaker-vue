import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/agreement",
    name: "agreement",
    component: () => import("../../views/Privacy/AgreementScreen.vue"),
    meta: {
      layout: "default",
      title: "Пользовательское соглашение",
    },
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../../views/Privacy/PersonalScreen.vue"),
    meta: {
      layout: "default",
      title: "Пользовательское соглашение",
    },
  },
  {
    path: "/payments-back",
    name: "paymentsBack",
    component: () => import("../../views/Privacy/PaymentsBackScreen.vue"),
    meta: {
      layout: "default",
      title: "Пользовательское соглашение",
    },
  },
];

export const PrivacyRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});

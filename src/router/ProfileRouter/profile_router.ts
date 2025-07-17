import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/profile",
    name: "profile",
    component: () => import("../../views/ProfilePages/ProfileView.vue"),
    meta: {
      layout: "default",
    },
    children: [
      {
        path: "",
        name: "profile-dashboard",
        alias: "dashboard",
        component: () => import("../../views/ProfilePages/ProfileDahboard.vue"),
        meta: {
          title: "Управление профилем",
        },
      },
      {
        path: "change",
        name: "profile-change",
        component: () => import("../../views/ProfilePages/ProfileChange.vue"),
        meta: {
          title: "Изменить данные",
        },
      },
      {
        path: "orders",
        name: "profile-orders",
        meta: {
          title: "Заказы",
        },
        children: [
          {
            path: "",
            component: () =>
              import("../../views/ProfilePages/ProfileOrder.vue"),
          },
          {
            path: ":id",
            component: () =>
              import("../../views/ProfilePages/ProfileSingleOrder.vue"),
          },
        ],
      },
      {
        path: "/referal",
        name: "profile-referal",
        component: () => import("../../views/ProfilePages/ProfileView.vue"),
        meta: {
          title: "Реферальная ссылка",
        },
      },
      {
        path: "/programs",
        name: "profile-referal",
        component: () => import("../../views/ProfilePages/ProfileView.vue"),
        meta: {
          title: "Программа лояльности",
        },
      },
    ],
  },
];

export const ProfileRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});

import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/profile",
    name: "profile",
    meta: {
      layout: "default",
    },
    children: [
      {
        path: "",
        name: "profile-dashboard",
        component: () => import("../../views/ProfilePages/ProfileView.vue"),
        title: "Пользовательское соглашение",
      },
    ],
  },
];

export const ProfileRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});

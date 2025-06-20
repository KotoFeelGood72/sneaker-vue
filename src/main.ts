// main.ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import pluginPersistence from "pinia-plugin-persistence";

import App from "./App.vue";
import router from "./router";
import Icons from "./components/Icons/Icons.vue";

import "./assets/main.css";

const app = createApp(App);

// 1) создаём pinia
const pinia = createPinia();

// 2) подключаем плагин именно к pinia
pinia.use(pluginPersistence);

// 3) регистрируем всё в приложении
app.component("Icons", Icons);
app.use(pinia);
app.use(router);

app.mount("#app");

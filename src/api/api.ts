// src/api/api.ts
import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

const api = axios.create({
  baseURL: "/api/v1/", // proxy ↑ добавляет http://host
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

/* ---------- request: добавляем Bearer ---------- */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* ---------- response: авто-refresh ---------- */
api.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    const store = useAuthStore();

    // если 401 и ещё не пробовали обновить
    const original = error.config;
    if (
      error.response?.status === 401 &&
      !original._retry && // флаг, чтоб не зациклиться
      store.refresh
    ) {
      try {
        original._retry = true;
        const newAccess = await store.refreshTokens();
        original.headers.Authorization = `Bearer ${newAccess}`;
        return api(original); // повторяем запрос
      } catch {
        store.logout();
      }
    }

    return Promise.reject(error);
  }
);

export { api };

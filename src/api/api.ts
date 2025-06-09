import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.setItem("token", token);
    } else {
      // на всякий случай, если токена нет — убираем старый
      localStorage.removeItem("token");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

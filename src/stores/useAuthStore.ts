// src/stores/useAuthStore.ts
import { defineStore, storeToRefs } from "pinia";
import { useModalStore } from "./useModalStore";
import { api } from "@/api/api";

interface UserProfile {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  // добавьте, что вернёт бек
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    access: "",
    refresh: "",
    code: "",
    authStep: "main" as "main" | "email" | "verify",

    /** ➜ данные текущего пользователя */
    user: null as any,
  }),

  actions: {
    /* ---------- helpers ---------- */
    setTokens(access = "", refresh = "") {
      this.access = access;
      this.refresh = refresh;

      access
        ? localStorage.setItem("access", access)
        : localStorage.removeItem("access");

      refresh
        ? localStorage.setItem("refresh", refresh)
        : localStorage.removeItem("refresh");
    },

    setAuthStep(step: "main" | "email" | "verify") {
      this.authStep = step;
    },

    /* ---------- API ---------- */

    /** POST auth/reset-code/ */
    async sendOtp() {
      const { data } = await api.post("auth/reset-code/", {
        email: this.email,
      });
      this.setTokens(data?.access ?? "", data?.refresh ?? "");
      this.setAuthStep("verify");
    },

    /** POST auth/register/ */
    async registerWithEmail() {
      await api.post("auth/register/", { email: this.email });
    },

    /** POST auth/verify/ */
    async authVerify() {
      const { closeAllModals } = useModalStore();

      const { data } = await api.post("auth/verify/", {
        email: this.email,
        code: this.code,
      });

      if (!data?.access) throw new Error("Сервер не вернул access-токен");

      this.setTokens(data.access, data.refresh ?? "");
      this.setAuthStep("main");
      await this.getProfile();
      closeAllModals();
    },

    /** POST auth/refresh/ */
    async refreshTokens() {
      if (!this.refresh) throw new Error("Нет refresh-токена");
      const { data } = await api.post("auth/refresh/", {
        refresh: this.refresh,
      });
      this.setTokens(data.access, data.refresh ?? this.refresh);
      return data.access;
    },

    /** GET auth/user/profile/ */
    async getProfile() {
      const { data } = await api.get<UserProfile>("auth/user/profile/");
      this.user = data;
    },

    logout() {
      this.email = "";
      this.user = {};
      this.setTokens();
      this.setAuthStep("main");
    },
  },
  persist: true,
});

/** хук для компонентов */
export const useAuthStoreRefs = () => storeToRefs(useAuthStore());

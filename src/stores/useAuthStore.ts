import { defineStore, storeToRefs } from "pinia";
import { useModalStore } from "./useModalStore";
import { api } from "@/api/api";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    access: "",
    refresh: "",
    code: "",
    authStep: "main" as "main" | "email" | "verify",
  }),

  actions: {
    /** утилита-помощник */
    setTokens(access = "", refresh = "") {
      this.access = access;
      this.refresh = refresh;

      if (access) localStorage.setItem("access", access);
      else localStorage.removeItem("access");

      if (refresh) localStorage.setItem("refresh", refresh);
      else localStorage.removeItem("refresh");
    },

    setAuthStep(step: "main" | "email" | "verify") {
      this.authStep = step;
    },

    /** /reset-code/ */
    async sendOtp() {
      try {
        const { data } = await api.post("/api/v1/auth/reset-code/", {
          email: this.email,
        });

        this.setTokens(data?.access ?? "", data?.refresh ?? "");
        this.setAuthStep("verify");
      } catch (err) {
        this.setTokens(); // чистим токены
        throw err;
      }
    },

    /** /register/ */
    async registerWithEmail() {
      await api.post("/api/v1/auth/register/", { email: this.email });
    },

    /** /verify/ */
    async authVerify() {
      const { closeAllModals } = useModalStore();

      try {
        const { data } = await api.post("/api/v1/auth/verify/", {
          email: this.email,
          code: this.code,
        });

        if (!data?.access) {
          this.setTokens();
          throw new Error("Сервер не вернул access-токен");
        }

        this.setTokens(data.access, data.refresh ?? "");
        this.setAuthStep("main");
        closeAllModals();
      } catch (err) {
        throw err;
      }
    },

    logout() {
      this.email = "";
      this.setTokens();
      this.setAuthStep("main");
    },
  },
});

/** удобный хук для компонентов */
export const useAuthStoreRefs = () => storeToRefs(useAuthStore());

<template>
  <div
    class="auth-modal fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[11] bg-white lg:rounded-[20px] rounded-[10px] lg:py-14 lg:px-12 lg:min-w-[621px] px-9 py-6 max-md:w-[303px]"
  >
    <div
      class="close_modal absolute lg:w-[100px] lg:h-[100px] flex items-center justify-center cursor-pointer lg:left-[100%] top-0 h-4 w-4 left-[102%]"
      @click="closeModal('auth')"
    >
      <img src="@/assets/icons/close.svg" alt="" />
    </div>
    <h3
      class="text-40 text-dark font-semibold flex items-center justify-center lg:mb-10 mb-4 max-lg:text-22"
    >
      Войти
    </h3>
    <p class="lg:text-16 max-w-[621px] mb-10" v-if="authStep === 'verify'">
      На ваш электронный адрес был отправлен код. Пожалуйста, проверьте свою почту и
      введите этот код для продолжения.
    </p>
    <component :is="isComponentsAuth"></component>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import AuthMain from "../auth/AuthMain.vue";
import AuthEmail from "../auth/AuthEmail.vue";
import AuthVerify from "../auth/AuthVerify.vue";
import { useAuthStoreRefs } from "@/stores/useAuthStore";
import { computed, ref } from "vue";

const { closeModal } = useModalStore();
const { authStep } = useAuthStoreRefs();

const isComponentsAuth = computed(() => {
  switch (authStep.value) {
    case "main":
      return AuthMain;
    case "email":
      return AuthEmail;
    case "verify":
      return AuthVerify;
    default:
      return AuthMain;
  }
});

// function onAuthMainClick(e: MouseEvent, type: string) {
//   if (type === "mail") {
//     active.value = "email";
//   } else if (type === "telegram") {
//     console.log("Запустить Telegram-auth");
//   }
// }
</script>

<style scoped lang="scss"></style>

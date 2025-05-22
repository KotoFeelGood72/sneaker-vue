<template>
  <div
    class="auth-modal fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[11] bg-white rounded-[20px] py-14 px-48"
  >
    <div
      class="close_modal absolute lg:w-[100px] lg:h-[100px] flex items-center justify-center cursor-pointer left-[100%] top-0"
      @click="closeModal('auth')"
    >
      <img src="@/assets/icons/close.svg" alt="" />
    </div>
    <h3 class="text-40 text-dark font-semibold flex items-center justify-center mb-10">
      Войти
    </h3>
    <AuthMain v-if="active === 'main'" @on-click="onAuthMainClick" />
    <AuthEmail v-if="active === 'email'" @on-click="onAuthMainClick" />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";
import AuthMain from "../auth/AuthMain.vue";
import AuthEmail from "../auth/AuthEmail.vue";
import { ref } from "vue";

const { closeModal } = useModalStore();

const active = ref<"main" | "email">("main");

function onAuthMainClick(e: MouseEvent, type: string) {
  if (type === "mail") {
    active.value = "email";
  } else if (type === "telegram") {
    console.log("Запустить Telegram-auth");
  }
}
</script>

<style scoped lang="scss"></style>

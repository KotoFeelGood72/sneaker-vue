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
    <div class="auth-buttons flex flex-col gap-[10px]">
      <button
        type="button"
        class="flex items-center justify-center gap-6 py-5 px-10 bg-lightXs rounded-md"
      >
        <p class="text-18 font-semibold text-dark">Войти через Telegram</p>
        <div class="flex items-center justify-center">
          <img src="@/assets/icons/tg.svg" alt="" />
        </div>
      </button>
      <button
        type="button"
        class="flex items-center justify-center gap-6 py-5 px-10 bg-lightXs rounded-md"
      >
        <p class="text-18 font-semibold text-dark">Войти через почту</p>
        <div class="flex items-center justify-center">
          <img src="@/assets/icons/email.svg" alt="" />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModalStore";

const { closeModal } = useModalStore();
</script>

<style scoped lang="scss"></style>

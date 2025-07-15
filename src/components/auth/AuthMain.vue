<template>
  <div class="auth-buttons flex flex-col gap-[10px]">
    <button
      type="button"
      class="flex items-center justify-center lg:gap-6 gap-4 lg:py-5 lg:px-10 px-9 py-3 bg-lightXs rounded-md"
    >
      <p class="lg:text-18 font-semibold text-dark text-12">Войти через Telegram</p>
      <div class="flex items-center justify-center max-lg:w-4">
        <img src="@/assets/icons/tg.svg" alt="Telegram icon" />
      </div>
    </button>
    <button
      type="button"
      class="flex items-center justify-between lg:gap-6 gap-4 lg:py-5 lg:px-10 px-9 py-3 bg-lightXs rounded-md"
      @click="setAuthStep('email')"
    >
      <p class="lg:text-18 font-semibold text-dark text-12">Войти через почту</p>
      <div class="flex items-center justify-center max-lg:w-4">
        <img src="@/assets/icons/email.svg" alt="Email icon" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { useAuthStore } from "@/stores/useAuthStore";

const { setAuthStep } = useAuthStore();
</script>

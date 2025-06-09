<template>
  <div class="auth-buttons flex flex-col gap-[10px]">
    <button
      type="button"
      class="flex items-center justify-center gap-6 py-5 px-10 bg-lightXs rounded-md"
    >
      <p class="text-18 font-semibold text-dark">Войти через Telegram</p>
      <div class="flex items-center justify-center">
        <img src="@/assets/icons/tg.svg" alt="Telegram icon" />
      </div>
    </button>
    <button
      type="button"
      class="flex items-center justify-between gap-6 py-5 px-10 bg-lightXs rounded-md"
      @click="setAuthStep('email')"
    >
      <p class="text-18 font-semibold text-dark">Войти через почту</p>
      <div class="flex items-center justify-center">
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

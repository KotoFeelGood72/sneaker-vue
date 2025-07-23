<template>
  <div class="auth-buttons flex flex-col gap-[10px] max-w-[335px] mx-auto">
    <AuthBtn text="Войти через Telegram" icon="tg" color-sheme="light" />
    <AuthBtn
      text="Войти через почту"
      icon="mail"
      color-sheme="light"
      @click="setAuthStep('email')"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import AuthBtn from "../Buttons/AuthBtn.vue";

const { setAuthStep } = useAuthStore();
</script>

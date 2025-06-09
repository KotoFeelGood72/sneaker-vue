<template>
  <div class="">
    <div class="relative">
      <div
        class="icon-email absolute top-[50%] -translate-y-[50%] left-5 z-10 pointer-events-none"
      >
        <img src="@/assets/icons/email.png" />
      </div>
      <Inputs placeholder="Введите свою почту" v-model="email" class="mb-10" />
    </div>
    <div class="flex items-center gap-[10px]">
      <button
        type="button"
        class="flex items-center justify-center gap-6 py-5 px-10 bg-lightXs rounded-md"
        @click="handleClick($event, 'telegram')"
      >
        <p class="text-18 font-semibold text-dark">Войти через Telegram</p>
        <div class="flex items-center justify-center">
          <img src="@/assets/icons/tg.svg" alt="Telegram icon" />
        </div>
      </button>
      <button
        type="button"
        class="flex items-center justify-center gap-6 py-5 px-10 bg-dark opacity-70 rounded-md"
        :class="isEmailValid ? 'opacity-100' : 'opacity-70'"
        @click="sendOtp"
      >
        <p class="text-18 font-semibold text-white">Отправить код</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Inputs from "../Inputs/Inputs.vue";
import { useAuthStoreRefs, useAuthStore } from "@/stores/useAuthStore";

const { email } = useAuthStoreRefs();
const { sendOtp } = useAuthStore();

const isEmailValid = computed(() => {
  return !!email.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});
</script>

<style scoped lang="scss"></style>

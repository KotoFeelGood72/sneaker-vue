<template>
  <div class="">
    <div class="relative">
      <div
        class="icon-email absolute top-[50%] -translate-y-[50%] lg:left-5 left-3 z-10 pointer-events-none max-lg:w-4 max-lg:h-4"
      >
        <img src="@/assets/icons/email.png" />
      </div>
      <Inputs placeholder="Введите свою почту" v-model="email" class="lg:mb-10 mb-4" />
    </div>
    <div class="flex items-center lg:gap-[10px] gap-1 max-lg:flex-col">
      <button
        type="button"
        class="flex items-center justify-center lg:gap-6 lg:py-5 lg:px-10 py-4 px-5 gap-4 bg-lightXs rounded-md max-lg:order-2 max-lg:w-full"
      >
        <p class="lg:text-18 text-12 font-semibold text-dark">Войти через Telegram</p>
        <div class="flex items-center justify-center max-lg:w-4">
          <img src="@/assets/icons/tg.svg" alt="Telegram icon" />
        </div>
      </button>
      <button
        type="button"
        class="flex items-center justify-center lg:gap-6 lg:py-5 lg:px-10 py-4 px-5 gap-4 bg-dark opacity-70 rounded-md max-lg:order-1 max-lg:w-full"
        :class="isEmailValid ? 'opacity-100' : 'opacity-70'"
        @click="handleSendCode"
      >
        <p class="lg:text-18 text-12 font-semibold text-white">Отправить код</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Inputs from "../Inputs/Inputs.vue";
import { useAuthStoreRefs, useAuthStore } from "@/stores/useAuthStore";
import { useResendTimer } from "@/composables/useResendTimer";

const { start: startResendTimer } = useResendTimer({ delay: 30 });

const { email } = useAuthStoreRefs();
const { sendOtp } = useAuthStore();

const isEmailValid = computed(() => {
  return !!email.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});

const handleSendCode = async () => {
  if (!isEmailValid.value) return;

  await sendOtp(); // отправляем письмо
  startResendTimer(); // запускаем 30-секундный таймер
};
</script>

<style scoped lang="scss"></style>

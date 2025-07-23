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
      <AuthBtn text="Войти через Telegram" icon="tg" color-sheme="light" />
      <AuthBtn
        text="Отправить код"
        color-sheme="dark"
        @click="handleSendCode"
        class="flex-grow"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Inputs from "../Inputs/Inputs.vue";
import { useAuthStoreRefs, useAuthStore } from "@/stores/useAuthStore";
import { useResendTimer } from "@/composables/useResendTimer";
import AuthBtn from "../Buttons/AuthBtn.vue";

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

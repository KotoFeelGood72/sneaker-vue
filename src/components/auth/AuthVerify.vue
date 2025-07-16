<template>
  <div class="">
    <div class="lg:mb-10 flex flex-col gap-1 items-start mb-4">
      <div class="relative w-full">
        <div
          class="icon-email absolute top-[50%] -translate-y-[50%] left-5 z-10 pointer-events-none max-lg:w-4 max-lg:left-3"
        >
          <img src="@/assets/icons/key.png" />
        </div>
        <Inputs placeholder="Введите код с письма" v-model="code" />
      </div>
      <div class="lg:text-22 text-dark opacity-40 text-12" v-if="countdown > 0">
        Запросить код повторно можно через {{ countdown }} секунд
      </div>
      <button
        v-else
        type="button"
        class="lg:text-22 text-dark opacity-40 text-12"
        @click="handleResend"
      >
        Отправить код ещё раз
      </button>
    </div>
    <div class="grid lg:grid-cols-2 lg:gap-[10px] gap-[6px] grid-cols-1">
      <button
        type="button"
        class="flex items-center justify-center lg:gap-6 lg:py-5 lg:px-10 gap-4 py-4 px-4 bg-lightXs rounded-md max-lg:order-2"
      >
        <p class="lg:text-18 font-semibold text-dark text-12">Войти через Telegram</p>
        <div class="flex items-center justify-center max-lg:w-4">
          <img src="@/assets/icons/tg.svg" alt="Telegram icon" />
        </div>
      </button>
      <button
        type="button"
        class="flex items-center justify-center gap-6 lg:py-5 lg:px-10 py-4 px-4 bg-dark rounded-md max-lg:order-1"
        :class="isCodeValid ? 'opacity-100' : 'opacity-70'"
        @click="authVerify"
      >
        <p class="lg:text-18 text-12 font-semibold text-white">Войти</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "../Inputs/Inputs.vue";
import { useAuthStoreRefs, useAuthStore } from "@/stores/useAuthStore";
import { useResendTimer } from "@/composables/useResendTimer";
import { computed, onMounted } from "vue";

const { code } = useAuthStoreRefs();
const { authVerify, sendOtp } = useAuthStore();

/** таймер «повторной отправки» */
const { countdown, isActive, start: startResendTimer } = useResendTimer({ delay: 30 });

/** валидный ли код */
const isCodeValid = computed(() => /^\d{6}$/.test(code.value));

/**
 * Первая отправка кода (вызывайте на пред-экране или здесь в onMounted,
 * чтобы таймер сразу стартовал при открытии модалки)
 */
onMounted(async () => {
  await sendOtp();
  startResendTimer();
});

const handleResend = async () => {
  await sendOtp(); // письмо с новым кодом
  startResendTimer(); // стартуем новый отсчёт
};
</script>

<style scoped lang="scss"></style>

<template>
  <div class="">
    <div class="mb-10 flex flex-col gap-1 items-start">
      <div class="relative w-full">
        <div
          class="icon-email absolute top-[50%] -translate-y-[50%] left-5 z-10 pointer-events-none"
        >
          <img src="@/assets/icons/key.png" />
        </div>
        <Inputs placeholder="Введите код с письма" v-model="code" />
      </div>
      <div class="text-22 text-dark opacity-40" v-if="countdown > 0">
        Запросить код повторно можно через {{ countdown }} секунд
      </div>
      <button
        v-else
        type="button"
        class="text-22 text-dark opacity-40"
        @click="handleResend"
      >
        Отправить код ещё раз
      </button>
    </div>
    <div class="grid lg:grid-cols-2 lg:gap-[10px] gap-[6px] grid-cols-1">
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
        class="flex items-center justify-center gap-6 py-5 px-10 bg-dark rounded-md"
        :class="isCodeValid ? 'opacity-100' : 'opacity-70'"
        @click="authVerify"
      >
        <p class="text-18 font-semibold text-white">Войти</p>
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

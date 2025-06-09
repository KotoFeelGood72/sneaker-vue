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
        @click="
          () => {
            loginWithEmail();
            startCountdown();
          }
        "
      >
        Отправить код ещё раз
      </button>
    </div>
    <div class="flex items-center gap-[10px]">
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
import { computed, ref, onMounted } from "vue";
import Inputs from "../Inputs/Inputs.vue";
import { useAuthStoreRefs, useAuthStore } from "@/stores/useAuthStore";

const { code } = useAuthStoreRefs();
const { authVerify } = useAuthStore();

const countdown = ref(0);
const timerKey = "resend_code_timer";

const startCountdown = () => {
  const expires = Date.now() + 30 * 1000;
  localStorage.setItem(timerKey, expires.toString());
  updateCountdown();
};

const isCodeValid = computed(() => {
  return /^\d{6}$/.test(code.value);
});

const updateCountdown = () => {
  const expires = Number(localStorage.getItem(timerKey));
  const interval = setInterval(() => {
    const remaining = Math.floor((expires - Date.now()) / 1000);
    countdown.value = remaining;
    if (remaining <= 0) {
      countdown.value = 0;
      clearInterval(interval);
      localStorage.removeItem(timerKey);
    }
  }, 1000);
};

onMounted(() => {
  const expires = Number(localStorage.getItem(timerKey));
  if (expires && Date.now() < expires) {
    updateCountdown();
  }
});
</script>

<style scoped lang="scss"></style>

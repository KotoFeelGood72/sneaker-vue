<template>
  <div class="auth-buttons flex flex-col gap-[10px]">
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
      class="flex items-center justify-between gap-6 py-5 px-10 bg-lightXs rounded-md"
      @click="handleClick($event, 'mail')"
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

const emit = defineEmits<{
  (e: "onClick", event: MouseEvent, type: string): void;
}>();

const handleClick = (e: MouseEvent, type: string) => {
  emit("onClick", e, type);
};
</script>

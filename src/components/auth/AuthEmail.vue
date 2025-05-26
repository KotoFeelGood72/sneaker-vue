<template>
  <div class="">
    <Inputs placeholder="Введите свою почту" v-model="email" class="mb-10" />
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
        @click="handleClick($event, 'telegram')"
      >
        <p class="text-18 font-semibold text-white">Отправить код</p>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Inputs from "../Inputs/Inputs.vue";

const emit = defineEmits<{
  (e: "onClick", event: MouseEvent, type: string): void;
}>();

const handleClick = (e: MouseEvent, type: string) => {
  emit("onClick", e, type);
};

const email = ref<string>("");
</script>

<style scoped lang="scss"></style>

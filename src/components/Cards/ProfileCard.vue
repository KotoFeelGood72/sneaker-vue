<template>
  <div class="w-full max-w-[456px]">
    <div class="flex gap-2 lg:mb-10 mb-5 items-center">
      <div
        class="bg-[#5C87FF] w-[60px] h-[60px] rounded-full flex items-center justify-center text-white lg:text-24 font-semibold"
      >
        {{ initials }}
      </div>
      <div>
        <div class="flex justify-between items-center gap-[10px]">
          <p class="lg:text-26 font-semibold text-18">
            {{ user.firstname }} {{ user.lastname }}
          </p>
          <Icons
            icon="subway:pencil"
            class="flex items-center justify-center opacity-40 lg:w-4 lg:h-4 w-3 h-3 -mb-1"
          />
        </div>
        <span class="opacity-40 max-lg:text-14">@{{ user.tg }}</span>
      </div>
    </div>
    <ul class="lg:space-y-4 space-y-3 lg:mb-8 mb-5">
      <li class="flex items-center justify-between gap-4">
        <div class="lg:text-22 font-semibold">Телефон:</div>
        <div class="lg:text-22">{{ user.phone }}</div>
      </li>
      <li class="flex items-center justify-between gap-4">
        <div class="lg:text-22 font-semibold">Почта:</div>
        <div class="lg:text-22">{{ user.email }}</div>
      </li>
    </ul>
    <Buttons class="w-full" size="large-x">Изменить данные</Buttons>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Buttons from "../Buttons/Buttons.vue";

const props = defineProps<{
  user: any;
}>();

const initials = computed(() => {
  const first = props.user.firstname?.[0] || "";
  const last = props.user.lastname?.[0] || "";
  return (first + last).toUpperCase();
});
</script>

<style scoped lang="scss"></style>

<template>
  <div>
    <h3 class="text-40 text-center mb-10 font-semibold max-w-[508px] mx-auto">
      Рассчитать стоимость товара из Poizon
    </h3>
    <div class="flex gap-2 w-full">
      <span
        v-for="n in 4"
        :key="n"
        class="flex-1"
        :class="[
          'swiper-pagination-bullet',
          { 'swiper-pagination-bullet-active': poizonStep >= n },
        ]"
      >
        <svg
          class="w-full h-2"
          viewBox="0 0 84 8"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M4.2 0H84L79.8 8H0L4.2 0Z" />
        </svg>
      </span>
    </div>

    <div class="mt-2 flex items-start gap-2 max-w-[666px]">
      <div class="font-medium whitespace-nowrap">Шаг {{ poizonStep }} из 4:</div>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePoizonStore, usePoizonStoreRefs } from "@/stores/usePoizonStore";
import Inputs from "../Inputs/Inputs.vue";
import { ref } from "vue";
import Buttons from "../Buttons/Buttons.vue";

const { poizonStep } = usePoizonStoreRefs();
defineProps<{ description: any }>();
</script>

<style>
.swiper-pagination-bullet {
  /* width: 84px !important; */
  height: 8px;
  background: transparent;
  opacity: 1;
}

.swiper-pagination-bullet svg path {
  fill: #ececec;
  transition: all 0.3s ease-in-out;
}

.swiper-pagination-bullet-active svg path {
  fill: #000;
}
</style>

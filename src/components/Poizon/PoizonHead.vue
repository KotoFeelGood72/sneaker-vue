<template>
  <div>
    <h3>Рассчитать стоимость товара из Poizon</h3>
    <div class="flex gap-2">
      <span
        v-for="n in 4"
        :key="n"
        :class="[
          'swiper-pagination-bullet',
          { 'swiper-pagination-bullet-active': poizonStep >= n },
        ]"
      >
        <svg width="84" height="8" viewBox="0 0 84 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.2 0H84L79.8 8H0L4.2 0Z" />
        </svg>
      </span>
    </div>

    <div class="mt-4">
      <div>Шаг {{ poizonStep }} из 4:</div>
      <div><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePoizonStore, usePoizonStoreRefs } from "@/stores/usePoizonStore";

const { poizonStep } = usePoizonStoreRefs();
</script>

<style>
.swiper-pagination-bullet {
  width: 84px !important;
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

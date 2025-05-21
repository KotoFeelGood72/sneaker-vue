<script setup lang="ts">
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const props = defineProps<{ slides: any[]; id: string | number }>();
const activeIndex = ref(0);

function onSlideChange(swiper: any) {
  activeIndex.value = swiper.activeIndex;
}

const paginationOptions = computed(() => ({
  el: `.one-slider__pagination-${props.id}`,
  clickable: true,
  renderBullet: (idx: number, className: string) => `
    <span class="${className}">
      <svg width="84" height="8" viewBox="0 0 84 8" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.2 0H84L79.8 8H0L4.2 0Z"/>
      </svg>
    </span>
  `,
}));
</script>

<template>
  <div class="one-slider relative pb-10">
    <swiper
      :modules="[Pagination]"
      :slides-per-view="1"
      :space-between="50"
      @slideChange="onSlideChange"
      :pagination="paginationOptions"
    >
      <swiper-slide v-for="(item, i) in slides" :key="`slide-${props.id}-${i}`">
        <RouterLink :to="item.link">
          <img :src="item.img" alt="" />
        </RouterLink>
      </swiper-slide>
    </swiper>

    <div
      :class="[
        `one-slider__pagination-${props.id}`,
        'slider-main-pagination !bottom-0 absolute !left-[50%] !translate-x-[-50%] flex items-center justify-center',
      ]"
    ></div>
  </div>
</template>

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

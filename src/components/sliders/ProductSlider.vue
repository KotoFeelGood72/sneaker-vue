<template>
  <div class="product-slider flex flex-col gap-4 select-none">
    <!-- Основной слайдер -->
    <div class="relative">
      <swiper
        :modules="[Thumbs, Navigation]"
        :thumbs="{ swiper: thumbsSwiper }"
        :space-between="10"
        :slides-per-view="1"
        watch-slides-progress
        :navigation="{ nextEl: '.next', prevEl: '.prev' }"
        class="main-swiper bg-light rounded-3xl overflow-hidden"
      >
        <swiper-slide
          v-for="(item, i) in slides"
          :key="`main-slide-${props.id}-${i}`"
          class="p-5"
        >
          <img :src="item.img" :alt="item.alt || 'product'" />
        </swiper-slide>
      </swiper>

      <div
        class="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-10 pointer-events-none flex justify-between items-center w-full px-5"
      >
        <div class="icon prev pointer-events-auto cursor-pointer">
          <Icons icon="octicon:chevron-left-16" :size="50" />
        </div>
        <div class="icon next pointer-events-auto cursor-pointer">
          <Icons icon="octicon:chevron-right-16" :size="50" />
        </div>
      </div>
    </div>

    <!-- Превьюшки -->
    <div>
      <swiper
        :modules="[Thumbs, Navigation]"
        v-bind="sliderOptions.thumbs"
        :space-between="16"
        :slides-per-view="4"
        watch-slides-progress
        slide-to-clicked-slide
        class="thumbs-swiper"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide
          v-for="(item, i) in slides"
          :key="`thumb-slide-${props.id}-${i}`"
          class="thumb-slide bg-light p-4 rounded-2xl cursor-pointer transition-all duration-200"
        >
          <img :src="item.img" :alt="item.alt || 'thumb'" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const props = defineProps<{ slides: any[]; id: string | number }>();

const mainSwiper = ref<any>(null);
const thumbsSwiper = ref<any>(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const sliderOptions = {
  thumbs: {
    spaceBetween: 11,
    slidesPerView: 4,
    watchSlidesProgress: true,
    watchOverflow: true,
    speed: 700,
  },
  slider: {
    direction: "horizontal",
    spaceBetween: 10,
    speed: 700,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  },
};
</script>
<style scoped>
.thumb-slide {
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
}
.thumb-slide.swiper-slide-thumb-active {
  opacity: 1;
}
</style>

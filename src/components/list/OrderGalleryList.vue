<template>
  <div class="lg:space-y-4 lg:mb-10 mb-5 space-y-3">
    <div class="lg:space-y-4 space-y-2">
      <h3 class="lg:text-26 font-semibold text-18">Фотоотчет</h3>
      <p class="max-lg:text-10">
        К каждому выкупленному товару мы предоставим отчёт, который подтверждает, что
        товар был приобретён именно под ваш индивидуальный запрос.
      </p>
    </div>
    <div class="relative">
      <div class="w-[90%]">
        <swiper
          :modules="[Navigation]"
          :navigation="{ nextEl: '.next-gallery', prevEl: '.prev-gallery' }"
          :breakpoints="{
            0: { slidesPerView: 3, spaceBetween: 7 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
          }"
        >
          <swiper-slide v-for="(item, i) in gallery" :key="'gallery-item-' + i">
            <img
              :src="item.img"
              class="rounded-lg lg:h-[166px] h-[75px] w-full object-cover"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div
        v-if="gallery.length > 4"
        class="next-gallery absolute top-1/2 -translate-y-1/2 right-0 lg:w-10 lg:h-10 cursor-pointer swiper-button-next"
      >
        <Icons icon="fluent:chevron-right-48-regular" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";

const props = defineProps<{
  gallery: any;
}>();
</script>

<style scoped lang="scss"></style>

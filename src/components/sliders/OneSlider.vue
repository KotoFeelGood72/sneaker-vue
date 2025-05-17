<template>
  <div class="one-slider">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true, el: '.one_slider__pagination-' + id }"
    >
      <swiper-slide v-for="(item, i) in slides" :key="'slides-item-' + i + id"
        ><RouterLink :to="item.link"> <img :src="item.img" alt="" /> </RouterLink
      ></swiper-slide>
    </swiper>
    <div :class="'one_slider__pagination-' + id"></div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

defineProps<{
  slides: any;
  id: number | string | null;
}>();
</script>

<style scoped lang="scss"></style>

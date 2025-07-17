<template>
  <div>
    <div>
      <div>
        <div>№{{ orders.number }}</div>
        <div></div>
      </div>
      <div>{{ orders.address }}</div>
    </div>
    <div>
      <swiper
        :modules="[Navigation]"
        :navigation="{ nextEl: '.next', prevEl: '.prev' }"
        :breakpoints="{
          0: { slidesPerView: 'auto', spaceBetween: 23 },
          1024: { slidesPerView: 4 },
        }"
      >
        <swiper-slide v-for="(item, i) in orders.orders" :key="'order-item-' + i">
          <CardOrder :order="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardOrder from "../Cards/CardOrder.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";

defineProps<{
  orders: any;
}>();
</script>

<style scoped></style>

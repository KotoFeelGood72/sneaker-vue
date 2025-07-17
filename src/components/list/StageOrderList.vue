<template>
  <div class="space-y-10">
    <h3 class="lg:text-26 font-semibold text-center">Стадия заказа</h3>
    <div class="flex lg:gap-10">
      <div class="max-h-[498px] relative flex fleex-col justify-center">
        <div
          class="prev -rotate-90 lg:w-10 lg:h-10 cursor-pointer swiper-button-prev absolute left-1/2 -translate-x-1/2 -top-20"
        >
          <Icons icon="fluent:chevron-right-48-regular" class="w-full h-full" />
        </div>
        <div
          class="next rotate-90 lg:w-10 lg:h-10 cursor-pointer swiper-button-next left-1/2 -translate-x-1/2 bottom-0 absolute"
        >
          <Icons icon="fluent:chevron-right-48-regular" class="w-full h-full" />
        </div>
        <div class="h-[418px]">
          <swiper
            class="h-full"
            :modules="[Navigation]"
            :navigation="{ nextEl: '.next', prevEl: '.prev' }"
            direction="vertical"
            :breakpoints="{
              0: { slidesPerView: 2, spaceBetween: 23 },
              1024: { slidesPerView: 2, spaceBetween: 23 },
            }"
          >
            <swiper-slide v-for="(item, i) in orders.orders" :key="'order-item-' + i">
              <CardOrder :order="item" imgClass="lg:h-[147px]" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <StagesList
        :currentStage="2"
        :steps="[
          'Оплачен на половину',
          'На закупке',
          'Оплачен полностью',
          'Доставляется',
          'Готов к выдаче',
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import StagesList from "./StagesList.vue";
import CardOrder from "../Cards/CardOrder.vue";

import "swiper/css";

const props = defineProps<{
  orders: any;
}>();
</script>

<style scoped>
.swiper-button-disabled {
  display: none;
}
</style>

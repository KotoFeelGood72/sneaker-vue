<template>
  <div class="space-y-4">
    <div class="lg:space-y-4 space-y-2">
      <div class="flex items-center justify-between gap-5">
        <div class="lg:text-20 text-12">№{{ orders.number }}</div>
        <div>
          <template v-if="orders.status === 'success'">
            <div class="flex items-center lg:gap-2 gap-1">
              <img
                src="/assets/icon/ui/check.svg"
                class="max-lg:max-w-3 max-lg:max-h-3 flex items-center justify-center"
              />
              <p class="lg:text-20 text-green-600 text-12 font-medium">Готов к выдаче</p>
            </div>
          </template>

          <template v-else-if="orders.status === 'processed'">
            <div
              class="flex items-center gap-1 bg-dark rounded-full text-white lg:py-2 py-1 lg:px-5 px-4 cursor-pointer"
            >
              <p class="max-lg:text-12">Оплатить и заказать</p>
              <div class="w-3 h-3 flex items-center justify-center lg:-mb-1 arrow-btn">
                <Icons icon="meteor-icons:chevron-right" color="white" />
              </div>
            </div>
          </template>

          <template v-else-if="orders.status === 'payment'">
            <p class="lg:text-20 text-12">Оплачен</p>
          </template>

          <template v-else-if="orders.status === 'getting'">
            <p class="lg:text-20 text-12">Получен</p>
          </template>
        </div>
      </div>

      <div class="opacity-40 max-lg:text-10">{{ orders.address }}</div>
    </div>

    <div class="relative">
      <div class="w-[90%]">
        <swiper
          :modules="[Navigation]"
          :navigation="{ nextEl: '.next', prevEl: '.prev' }"
          :breakpoints="{
            0: { slidesPerView: 2, spaceBetween: 23 },
            1024: { slidesPerView: 4, spaceBetween: 23 },
          }"
        >
          <swiper-slide v-for="(item, i) in orders.orders" :key="'order-item-' + i">
            <CardOrder :order="item" />
          </swiper-slide>
        </swiper>
      </div>
      <div
        v-if="orders.orders.length > 4"
        class="next absolute top-1/2 -translate-y-1/2 right-0 lg:w-10 lg:h-10 cursor-pointer swiper-button-next"
      >
        <Icons icon="fluent:chevron-right-48-regular" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardOrder from "../Cards/CardOrder.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";

const props = defineProps<{
  orders: any;
}>();
</script>

<style scoped>
.swiper-button-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 767px) {
  .arrow-btn {
    margin-top: 0.5px;
    margin-bottom: -0.8px;
  }
}
</style>

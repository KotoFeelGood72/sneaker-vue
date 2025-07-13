<template>
  <div class="relative">
    <div
      class="prev-button-size w-6 h-6 flex items-center justify-center cursor-pointer absolute top-[50%] -translate-y-[50%] left-0 z-10"
    >
      <Icons icon="tabler:chevron-left" :size="24" />
    </div>
    <div class="w-full max-w-[382px] mx-auto">
      <Swiper
        :modules="[Navigation]"
        :space-between="12"
        class="px-8 py-2"
        ref="swiperRef"
        @swiper="onSwiper"
        :navigation="{ prevEl: '.prev-button-size', nextEl: '.next-button-size' }"
        :breakpoints="{
          0: { slidesPerView: 'auto' },
          1024: { slidesPerView: 3.5 },
        }"
      >
        <swiper-slide v-for="(size, index) in sizes" :key="index">
          <button
            ref="buttons"
            @click="selectSize(size, index)"
            :class="[
              ' lg:py-3 border border-dark rounded-md lg:text-26 bg-white text-dark lg:w-full text-16 py-2 px-3',
              selected === size
                ? '!bg-dark text-white '
                : 'border-gray-300 text-gray-500',
            ]"
          >
            {{ size }}
          </button>
        </swiper-slide>
      </Swiper>
    </div>
    <div
      class="next-button-size w-6 h-6 flex items-center justify-center cursor-pointer absolute top-[50%] -translate-y-[50%] right-0 z-10"
    >
      <Icons icon="tabler:chevron-right" :size="24" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const emit = defineEmits<{
  (e: "update:size", size: string): void;
}>();

const sizes = ["35", "35 ⅓", "36", "36 ⅓", "37", "37 ⅓", "38", "38 ⅔", "39", "40"];
const selected = ref<string | null>(null);

function onSwiper(instance: any) {
  swiperRef.value = instance;
}

const swiperRef = ref<any>(null);
const buttons = ref<HTMLElement[]>([]);
const swiper = computed(() => swiperRef.value?.swiper ?? null);

function selectSize(size: string, index: number) {
  selected.value = size;
  emit("update:size", size);
  // Центрируем выбранную кнопку
  nextTick(() => {
    const el = buttons.value[index];
    if (el && swiper.value) {
      swiper.value.slideTo(index - 1); // -1 для центрирования
    }
  });
}
</script>

<style scoped>
.swiper {
  width: 100%;
}

@media (max-width: 1024px) {
  .swiper-slide {
    width: auto;
  }
}

.swiper-button-disabled {
  display: none;
}
</style>
